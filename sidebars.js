// 側欄全部由資料夾結構 + src/data/catalog.json 生成，這裡不寫死任何書名、系列名或文章。
//   書：catalog.json books[].chapters
//   系列：docs/series/<id>/ 內文章，按 YAML series.order；order 0 = 導讀頁，做系列標題連結
//   清醒記錄獨立篇：docs/notes/<季度>/，資料夾 = 季度分組
//   散文：七日書（catalog）、合法傷害權（系列）、隨筆 = docs/essays/<季度>/
//   財經學習：docs/finance/<系列 id>/，名稱在 catalog.json finance
//   also_in：主位在別處的文章，以 ref 連結列在另一個系列（不改其網址及所屬側欄）
const { loadCatalog, titleOf } = require('./scripts/lib/catalog');
const { listDocs, getSeriesMap, getFinanceMap, getAlsoInMap, quarterOf, dateStr } = require('./scripts/lib/docs');

function getSeriesCategory(seriesId, options = {}) {
  const list = getSeriesMap()[seriesId] || [];
  if (list.length === 0) {
    throw new Error(`[sidebars.js] docs/series/${seriesId}/ 沒有文章`);
  }
  const guideItem = list.find((it) => it.order === 0);
  const category = {
    type: 'category',
    label: titleOf('series', seriesId), // 系列名只由 src/data/catalog.json 決定
    ...options,
  };
  if (guideItem) {
    category.link = { type: 'doc', id: guideItem.docId };
  }
  // 本系列文章（doc）與交叉列出的文章（ref：只是連結，文章仍屬主位的側欄），按 order 排
  const own = list.filter((it) => it.order !== 0).map((it) => ({ order: it.order, item: it.docId }));
  const refs = (getAlsoInMap()[seriesId] || []).map((it) => ({ order: it.order, item: { type: 'ref', id: it.docId } }));
  category.items = [...own, ...refs].sort((a, b) => a.order - b.order).map((x) => x.item);
  return category;
}

// 財經學習：每個 docs/finance/<id>/ 一組，名稱由 catalog.json finance 決定
function getFinanceCategories() {
  const map = getFinanceMap();
  return loadCatalog()
    .finance.filter((f) => (map[f.id] || []).length > 0)
    .map((f) => ({
      type: 'category',
      label: titleOf('finance', f.id),
      collapsible: false,
      items: map[f.id].map((it) => it.docId),
    }));
}

function byDateDesc(a, b) {
  return dateStr(b.data.date).localeCompare(dateStr(a.data.date));
}

// 清醒記錄獨立篇：每個季度資料夾一組，新到舊；最新一季展開
function getLucidRecordStandaloneCategories() {
  const groups = {};
  const loose = [];
  for (const doc of listDocs('notes')) {
    const q = quarterOf(doc.rel);
    if (q) (groups[q] = groups[q] || []).push(doc);
    else loose.push(doc);
  }
  const quarters = Object.keys(groups).sort().reverse();
  const categories = quarters.map((q, idx) => ({
    type: 'category',
    label: q,
    collapsed: idx !== 0,
    items: groups[q].sort(byDateDesc).map((d) => d.docId),
  }));
  if (loose.length > 0) {
    console.warn(
      `[WARN] 以下清醒記錄文章未放入季度資料夾（docs/notes/2026Q4/ 之類）：\n${loose.map((d) => '  - ' + d.rel).join('\n')}`
    );
    categories.push({
      type: 'category',
      label: '未標日期',
      collapsed: true,
      items: loose.sort(byDateDesc).map((d) => d.docId),
    });
  }
  return categories;
}

// 隨筆：essays/ 內，七日書以外，新到舊
function getEssayRemainingDocs() {
  const grouped = new Set(loadCatalog().essays.groups.flatMap((g) => g.docs));
  return listDocs('essays')
    .filter((d) => !grouped.has(d.docId))
    .sort(byDateDesc)
    .map((d) => d.docId);
}

// 書：名稱與章節次序都在 src/data/catalog.json
function getBookCategory(bookId) {
  const book = loadCatalog().books.find((b) => b.id === bookId);
  return {
    type: 'category',
    label: titleOf('books', bookId),
    collapsible: false,
    items: book.chapters,
  };
}

function getEssayGroupCategory(groupId) {
  const group = loadCatalog().essays.groups.find((g) => g.id === groupId);
  return {
    type: 'category',
    label: titleOf('essay', groupId),
    items: group.docs,
  };
}

const sidebars = {
  // 1–5. 書（sidebar id 對應 catalog.json books[].sidebar）
  ...Object.fromEntries(loadCatalog().books.map((b) => [b.sidebar, [getBookCategory(b.id)]])),

  // 6. AI War
  aiWar: [getSeriesCategory('ai-war', { collapsible: false })],

  // 7. 從乞丐碗裡搶飯
  beggarsBowl: [getSeriesCategory('beggars-bowl', { collapsible: false })],

  // 8. 清醒記錄 (lucidRecord)
  lucidRecord: [
    getSeriesCategory('memory-series'),
    getSeriesCategory('efficiency-trap-cognition-erosion'),
    getSeriesCategory('platform-silencing'),
    getSeriesCategory('attenuation-visibility'),
    getSeriesCategory('exit-mechanism'),
    {
      type: 'category',
      label: '獨立篇',
      items: getLucidRecordStandaloneCategories(),
    },
  ],

  // 9. 財經學習 (finance)
  finance: getFinanceCategories(),

  // 10. 散文 (essays)
  essays: [
    getEssayGroupCategory('seven-days'),
    getSeriesCategory('legal-harm'),
    {
      type: 'category',
      label: '隨筆',
      items: getEssayRemainingDocs(),
    },
  ],
};

module.exports = sidebars;
