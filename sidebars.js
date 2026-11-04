const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { loadCatalog, titleOf } = require('./scripts/lib/catalog');

const projectRoot = __dirname;

function getDocId(relFilePath, parsedData) {
  const dir = path.dirname(relFilePath).replace(/\\/g, '/');
  let base = path.basename(relFilePath).replace(/\.mdx?$/, '');
  if (parsedData && parsedData.id) {
    base = parsedData.id;
  } else {
    base = base
      .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
      .replace(/^\d{8}[-_]/, '')
      .replace(/^\d+[-_]/, '');
  }
  if (base === 'index') {
    return dir;
  }
  return dir === '.' ? base : `${dir}/${base}`;
}

let _seriesCache = null;
function getSeriesMap() {
  if (_seriesCache) return _seriesCache;
  const docsDir = path.join(projectRoot, 'docs');
  function scan(dir) {
    let results = [];
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        results = results.concat(scan(full));
      } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
        results.push(full);
      }
    }
    return results;
  }
  const files = scan(docsDir);
  const map = {};
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const parsed = matter(content);
    if (parsed.data && parsed.data.series && parsed.data.series.id) {
      const s = parsed.data.series;
      if (!map[s.id]) map[s.id] = [];
      const relPath = path.relative(docsDir, f).replace(/\\/g, '/');
      const docId = getDocId(relPath, parsed.data);
      map[s.id].push({
        docId,
        name: s.name,
        order: typeof s.order === 'number' ? s.order : 999,
      });
    }
  }
  for (const sid of Object.keys(map)) {
    map[sid].sort((a, b) => a.order - b.order);
  }
  _seriesCache = map;
  return map;
}

function getSeriesCategory(seriesId, options = {}) {
  const map = getSeriesMap();
  const list = map[seriesId] || [];
  if (list.length === 0) {
    throw new Error(`[sidebars.js] No articles found for series "${seriesId}"`);
  }
  // 系列名只由 src/data/catalog.json 決定
  const label = titleOf('series', seriesId);
  const guideItem = list.find((it) => it.order === 0);
  const subItems = list.filter((it) => it.order !== 0).map((it) => it.docId);

  const category = {
    type: 'category',
    label,
    ...options,
  };
  if (guideItem) {
    category.link = {
      type: 'doc',
      id: guideItem.docId,
    };
  }
  category.items = subItems;
  return category;
}

function getQuarterLabel(date) {
  if (!date) return null;
  let dateStr = '';
  if (date instanceof Date) {
    dateStr = date.toISOString().slice(0, 10);
  } else {
    dateStr = String(date).slice(0, 10);
  }
  const parts = dateStr.split('-');
  if (parts.length < 2) return null;
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  if (!year || isNaN(month) || month < 1 || month > 12) return null;
  const q = Math.ceil(month / 3);
  return `${year} Q${q}`;
}

function quarterToOrder(label) {
  const match = label.match(/^(\d{4})\s*Q(\d)$/i);
  if (!match) return 0;
  return parseInt(match[1], 10) * 10 + parseInt(match[2], 10);
}

function getLucidRecordStandaloneCategories() {
  const dir = path.join(projectRoot, 'docs', 'TechNotes');
  const items = [];

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(
      (f) =>
        (f.endsWith('.md') || f.endsWith('.mdx')) &&
        f !== 'index.mdx' &&
        f !== 'index.md'
    );

    for (const f of files) {
      const full = path.join(dir, f);
      const fileContent = fs.readFileSync(full, 'utf8');
      const parsed = matter(fileContent);
      if (parsed.data && parsed.data.series) {
        continue;
      }
      let id = parsed.data.id || f.replace(/\.mdx?$/, '');
      if (!parsed.data.id) {
        id = id
          .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
          .replace(/^\d{8}[-_]/, '')
          .replace(/^\d+[-_]/, '');
      }
      const docId = 'TechNotes/' + id;
      const rawDate = parsed.data.date;
      const dateStr =
        rawDate instanceof Date
          ? rawDate.toISOString().slice(0, 10)
          : rawDate
          ? String(rawDate).slice(0, 10)
          : '';
      items.push({
        docId,
        title: parsed.data.title || id,
        file: f,
        date: dateStr,
        dateTime: dateStr ? new Date(dateStr).getTime() : 0,
      });
    }
  }

  // capital-game/誰說遊戲做不起.md
  const cgPath = path.join(projectRoot, 'docs', 'capital-game', '誰說遊戲做不起.md');
  if (fs.existsSync(cgPath)) {
    const cgContent = fs.readFileSync(cgPath, 'utf8');
    const parsed = matter(cgContent);
    const rawDate = parsed.data.date;
    const dateStr =
      rawDate instanceof Date
        ? rawDate.toISOString().slice(0, 10)
        : rawDate
        ? String(rawDate).slice(0, 10)
        : '';
    items.push({
      docId: 'capital-game/誰說遊戲做不起',
      title: parsed.data.title || '誰說遊戲做不起',
      file: 'capital-game/誰說遊戲做不起.md',
      date: dateStr,
      dateTime: dateStr ? new Date(dateStr).getTime() : 0,
    });
  }

  // 按季度分組
  const quartersMap = {};
  const undatedItems = [];

  for (const item of items) {
    const q = getQuarterLabel(item.date);
    if (!q) {
      undatedItems.push(item);
    } else {
      if (!quartersMap[q]) quartersMap[q] = [];
      quartersMap[q].push(item);
    }
  }

  // 季度由新到舊
  const sortedQuarters = Object.keys(quartersMap).sort((a, b) => quarterToOrder(b) - quarterToOrder(a));

  const categories = sortedQuarters.map((q, idx) => {
    // 季度內文章由新到舊
    quartersMap[q].sort((a, b) => b.dateTime - a.dateTime);
    return {
      type: 'category',
      label: q,
      collapsed: idx !== 0, // 最新一個季度 collapsed: false，其餘 collapsed: true
      items: quartersMap[q].map((it) => it.docId),
    };
  });

  // 沒有 date 的文章歸入最後一組「未標日期」，build 時 console 印出警告列出檔名
  if (undatedItems.length > 0) {
    console.warn(
      `[WARN] TechNotes 獨立篇發現未標記 date 之檔案：\n${undatedItems.map((it) => '  - ' + it.file).join('\n')}`
    );
    categories.push({
      type: 'category',
      label: '未標日期',
      collapsed: true,
      items: undatedItems.map((it) => it.docId),
    });
  }

  return categories;
}

function getDiaryRemainingDocs() {
  const dir = path.join(projectRoot, 'docs', 'Diary');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(
    (f) =>
      (f.endsWith('.md') || f.endsWith('.mdx')) &&
      f !== 'index.mdx' &&
      f !== 'index.md'
  );

  // 已歸入散文組（如七日書）的文章不再列入「隨筆」
  const knownSevenDaysDocs = new Set(loadCatalog().essays.groups.flatMap((g) => g.docs));

  const items = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const content = fs.readFileSync(full, 'utf8');
    const parsed = matter(content);
    if (parsed.data && parsed.data.series) {
      continue;
    }
    let id = parsed.data.id || f.replace(/\.mdx?$/, '');
    if (!parsed.data.id) {
      id = id
        .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
        .replace(/^\d{8}[-_]/, '')
        .replace(/^\d+[-_]/, '');
    }
    const docId = 'Diary/' + id;
    if (!knownSevenDaysDocs.has(docId)) {
      items.push({
        docId,
        date: parsed.data.date ? new Date(parsed.data.date).getTime() : 0,
      });
    }
  }

  items.sort((a, b) => b.date - a.date);
  return items.map((it) => it.docId);
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
  aiWar: [
    getSeriesCategory('ai-war', { collapsible: false }),
  ],

  // 7. 從乞丐碗裡搶飯
  beggarsBowl: [
    getSeriesCategory('beggars-bowl', { collapsible: false }),
  ],

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

  // 9. 散文 (essays)
  essays: [
    getEssayGroupCategory('seven-days'),
    getSeriesCategory('legal-harm'),
    {
      type: 'category',
      label: '隨筆',
      items: [
        ...getDiaryRemainingDocs(),
      ],
    },
  ],
};

module.exports = sidebars;
