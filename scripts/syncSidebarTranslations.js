// 由 src/data/catalog.json 生成英文版與港版 sidebar 的書名／系列名翻譯，
// 寫入 i18n/<locale>/docusaurus-plugin-content-docs/current.json。
//
// 背景：Docusaurus 以「中文 label」做翻譯 key。中文名一改，舊翻譯就對不上，
// 英文版會靜靜地顯示中文。此腳本每次 build 前重寫這些 key，並刪除已無對應的舊 key。
// 季度、獨立篇、隨筆等固定標籤不在 catalog，仍保留 current.json 原有翻譯。
const fs = require('fs');
const path = require('path');
const { loadCatalog, pick } = require('./lib/catalog');

const projectRoot = path.resolve(__dirname, '..');
const LOCALES = ['en', 'zh-HK'];

function catalogLabelMap() {
  const c = loadCatalog();
  const map = new Map(); // zh-Hant label -> names object
  for (const e of [...c.books, ...c.series, ...(c.finance || []), ...c.essays.groups]) {
    map.set(pick(e.title, 'zh-Hant'), e.title);
  }
  return map;
}

function collectCategories(sidebars) {
  const out = []; // { sidebarId, label }
  function walk(sid, items) {
    for (const it of items || []) {
      if (it && it.type === 'category') {
        out.push({ sidebarId: sid, label: it.label });
        walk(sid, it.items);
      }
    }
  }
  for (const [sid, items] of Object.entries(sidebars)) walk(sid, items);
  return out;
}

function main() {
  const sidebars = require(path.join(projectRoot, 'sidebars.js'));
  const categories = collectCategories(sidebars);
  const labelMap = catalogLabelMap();

  for (const locale of LOCALES) {
    const file = path.join(projectRoot, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current.json');
    const json = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
    const validKeys = new Set();
    let updated = 0;
    const missing = [];

    for (const { sidebarId, label } of categories) {
      const key = `sidebar.${sidebarId}.category.${label}`;
      validKeys.add(key);
      const names = labelMap.get(label);
      if (names) {
        const message = pick(names, locale);
        if (!json[key] || json[key].message !== message) updated++;
        json[key] = { message, description: `The label for category ${label} in sidebar ${sidebarId}` };
      } else if (!json[key]) {
        missing.push(label);
      }
    }

    const removed = [];
    for (const key of Object.keys(json)) {
      if (key.startsWith('sidebar.') && !validKeys.has(key)) {
        removed.push(key);
        delete json[key];
      }
    }

    fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8');
    console.log(`[syncSidebarTranslations] ${locale}: 更新 ${updated}，刪除舊 key ${removed.length}`);
    if (missing.length > 0 && locale === 'en') {
      console.warn(`[WARN] ${locale} 以下 sidebar 標籤沒有翻譯，英文版會顯示中文：${[...new Set(missing)].join('、')}`);
    }
  }
}

main();
