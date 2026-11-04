// 讀取 src/data/catalog.json（全站書名／系列名／散文組名的唯一來源）。
// sidebars.js、generateHubs.js、syncSidebarTranslations.js 共用。
const fs = require('fs');
const path = require('path');

const CATALOG_PATH = path.resolve(__dirname, '..', '..', 'src', 'data', 'catalog.json');

let _catalog = null;
function loadCatalog() {
  if (!_catalog) _catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  return _catalog;
}

// zh-HK 未填時沿用 zh-Hant；其他語系未填時亦退回 zh-Hant。
function pick(names, locale) {
  if (!names) return null;
  return names[locale] || names['zh-Hant'] || null;
}

function findEntry(kind, id) {
  const c = loadCatalog();
  const list = kind === 'essay' ? c.essays.groups : c[kind];
  const entry = (list || []).find((x) => x.id === id);
  if (!entry) throw new Error(`[catalog] ${kind} "${id}" 不在 src/data/catalog.json`);
  return entry;
}

function titleOf(kind, id, locale = 'zh-Hant') {
  return pick(findEntry(kind, id).title, locale);
}

function fullTitleOf(kind, id, locale = 'zh-Hant') {
  const e = findEntry(kind, id);
  return pick(e.fullTitle, locale) || pick(e.title, locale);
}

module.exports = { CATALOG_PATH, loadCatalog, findEntry, titleOf, fullTitleOf, pick };
