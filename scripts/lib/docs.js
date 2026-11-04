// 掃描文章的共用函式。資料夾結構即網站分類：
//   docs/books/<書>/        書（章節次序在 src/data/catalog.json）
//   docs/series/<系列 id>/  系列（成員 = 資料夾內文章，次序 = YAML series.order）
//   docs/notes/<2026Q4>/    清醒記錄獨立篇（資料夾 = 季度）
//   docs/essays/<2026Q4>/   散文隨筆（資料夾 = 季度）；essays/seven-days/ 為七日書
// 各資料夾內的 img/ 放圖片。網址由各篇 YAML 的 slug 決定，不受資料夾影響。
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const projectRoot = path.resolve(__dirname, '..', '..');

const LOCALE_ROOTS = {
  'zh-Hant': 'docs',
  'zh-HK': 'i18n/zh-HK/docusaurus-plugin-content-docs/current',
  en: 'i18n/en/docusaurus-plugin-content-docs/current',
};

// 與 Docusaurus 預設規則一致：檔名前的數字前綴（01-、20260331_）不計入 doc id
function docIdOf(relPath, data) {
  const dir = path.posix.dirname(relPath);
  let base = path.posix.basename(relPath).replace(/\.mdx?$/, '');
  if (data && data.id) {
    base = data.id;
  } else {
    base = base
      .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
      .replace(/^\d{8}[-_]/, '')
      .replace(/^\d+[-_]/, '');
  }
  if (base === 'index') return dir;
  return dir === '.' ? base : `${dir}/${base}`;
}

// 列出某語系根目錄下 subdir 內的文章（遞迴，略過 img/ 與 index）
function listDocs(subdir, { locale = 'zh-Hant', includeIndex = false } = {}) {
  const root = path.join(projectRoot, LOCALE_ROOTS[locale]);
  const start = path.join(root, subdir);
  const out = [];
  if (!fs.existsSync(start)) return out;
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir).sort()) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) {
        if (entry !== 'img') walk(full);
        continue;
      }
      if (!/\.mdx?$/.test(entry)) continue;
      if (!includeIndex && /^index\.mdx?$/.test(entry)) continue;
      const rel = path.relative(root, full).split(path.sep).join('/');
      const data = matter(fs.readFileSync(full, 'utf8')).data || {};
      out.push({ rel, full, data, docId: docIdOf(rel, data) });
    }
  })(start);
  return out;
}

// docs/series/<id>/... → id
function seriesIdOf(rel) {
  const m = rel.match(/^series\/([^/]+)\//);
  return m ? m[1] : null;
}

// docs/notes/2026Q4/... → '2026 Q4'
function quarterOf(rel) {
  const m = rel.match(/\/(\d{4})Q([1-4])\//);
  return m ? `${m[1]} Q${m[2]}` : null;
}

function dateStr(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

// 系列成員：{ seriesId: [{ docId, order, rel, data }] }，按 order 排序
let _seriesCache = null;
function getSeriesMap() {
  if (_seriesCache) return _seriesCache;
  const map = {};
  for (const doc of listDocs('series')) {
    const id = seriesIdOf(doc.rel);
    const order = doc.data.series && typeof doc.data.series.order === 'number' ? doc.data.series.order : null;
    if (order === null) {
      throw new Error(`[series] ${doc.rel} 在系列資料夾內，但 YAML 沒有 series.order`);
    }
    if (doc.data.series.id && doc.data.series.id !== id) {
      throw new Error(`[series] ${doc.rel}：YAML series.id「${doc.data.series.id}」與資料夾「${id}」不一致（系列由資料夾決定，可刪去 id）`);
    }
    (map[id] = map[id] || []).push({ docId: doc.docId, order, rel: doc.rel, data: doc.data });
  }
  for (const id of Object.keys(map)) map[id].sort((a, b) => a.order - b.order);
  _seriesCache = map;
  return map;
}

// YAML slug（相對 /docs）→ 網站連結；逐段 encode，與舊版由路徑生成的網址字串一致
function slugToUrl(slug) {
  const s = slug.startsWith('/') ? slug : `/${slug}`;
  const full = s.startsWith('/docs/') ? s : `/docs${s}`;
  return full.split('/').map((seg) => encodeURIComponent(decodeURIComponent(seg))).join('/');
}

module.exports = { slugToUrl, projectRoot, LOCALE_ROOTS, docIdOf, listDocs, seriesIdOf, quarterOf, dateStr, getSeriesMap };
