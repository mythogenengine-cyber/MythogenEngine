const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { loadCatalog, titleOf, fullTitleOf } = require('./lib/catalog');

const projectRoot = path.resolve(__dirname, '..');

const LOCALE_ROOTS = {
  'zh-Hant': 'docs',
  'zh-HK': 'i18n/zh-HK/docusaurus-plugin-content-docs/current',
  en: 'i18n/en/docusaurus-plugin-content-docs/current',
};

// 書名、系列名、散文組名一律由 src/data/catalog.json 提供（唯一來源）

function toDocsUrl(slug) {
  const s = slug.startsWith('/') ? slug : '/' + slug;
  return s.startsWith('/docs/') ? s : '/docs' + s;
}

function getDocUrl(docId, frontmatterSlug) {
  if (frontmatterSlug) {
    return toDocsUrl(frontmatterSlug);
  }
  const segments = docId.split('/');
  return '/docs/' + segments.map((s) => encodeURIComponent(s)).join('/');
}

function resolveDocFile(locale, docId) {
  const root = LOCALE_ROOTS[locale];
  const candidates = [
    path.join(projectRoot, root, docId),
    path.join(projectRoot, root, docId + '.md'),
    path.join(projectRoot, root, docId + '.mdx'),
    path.join(projectRoot, root, docId, 'index.md'),
    path.join(projectRoot, root, docId, 'index.mdx'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }

  const dir = path.join(projectRoot, root, path.dirname(docId));
  const base = path.basename(docId);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      if (!f.endsWith('.md') && !f.endsWith('.mdx')) continue;
      const stripped = f.replace(/\.mdx?$/, '').replace(/^\d+[-_]/, '');
      if (stripped === base) {
        return path.join(dir, f);
      }
    }
  }

  // Fallback to zh-Hant if locale is not zh-Hant
  if (locale !== 'zh-Hant') {
    return resolveDocFile('zh-Hant', docId);
  }
  return null;
}

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

let _cachedSeriesDocs = null;
function getAllSeriesDocs() {
  if (_cachedSeriesDocs) return _cachedSeriesDocs;
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
        file: path.relative(projectRoot, f).replace(/\\/g, '/'),
      });
    }
  }
  for (const sid of Object.keys(map)) {
    map[sid].sort((a, b) => a.order - b.order);
  }
  _cachedSeriesDocs = map;
  return map;
}

function getSeriesDocIds(seriesId) {
  const map = getAllSeriesDocs();
  const list = map[seriesId] || [];
  return list.map((item) => item.docId);
}

function extractFirstH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function parseDoc(locale, docId) {
  const filePath = resolveDocFile(locale, docId);
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error(`Doc not found: [${locale}] ${docId}`);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(content);
  const data = parsed.data || {};

  const title = data.title || extractFirstH1(parsed.content) || path.basename(docId);
  let dateStr = null;
  if (data.date) {
    const d = new Date(data.date);
    if (!isNaN(d.getTime())) {
      dateStr = d.toISOString().slice(0, 10);
    }
  }

  const description = data.description || data.summary || 'TODO';
  const url = getDocUrl(docId, data.slug);
  const category = data.category || '';

  return {
    id: docId,
    title,
    date: dateStr,
    description,
    url,
    category,
    series: data.series || null,
  };
}

function countSidebarDocItems(item) {
  if (typeof item === 'string') {
    // 全書單頁版 (如 capital-game/誰在門口收錢/full) 不計入 chapterCount
    if (item.endsWith('/full')) return 0;
    return 1;
  }
  if (Array.isArray(item)) {
    return item.reduce((acc, it) => acc + countSidebarDocItems(it), 0);
  }
  if (item && item.items) {
    return countSidebarDocItems(item.items);
  }
  return 0;
}

function generateHubs() {
  // catalog.json：每本書的入口 = chapters 第一項
  const catalog = loadCatalog();
  const config = {
    ...catalog,
    books: catalog.books.map((b) => ({ ...b, entry: b.chapters[0] })),
  };

  // 主要檢查（失敗即 exit 1）：catalog.json 內每個 doc id 都必須對應到 docs/ 下真實存在的 .md / .mdx 檔案
  // 並且每個 series id 至少有一篇文章且 order 不重複
  const docCheckResult = checkDocFiles(config);

  // Load sidebars for sidebar counts
  const sidebarsPath = path.join(projectRoot, 'sidebars.js');
  const sidebars = require(sidebarsPath);

  const outputData = {
    'zh-Hant': { books: [], series: [], essays: { groups: [], rest: [] } },
    'zh-HK': { books: [], series: [], essays: { groups: [], rest: [] } },
    en: { books: [], series: [], essays: { groups: [], rest: [] } },
  };

  for (const locale of ['zh-Hant', 'zh-HK', 'en']) {
    // 1. Books
    for (const book of config.books) {
      const entryDoc = parseDoc(locale, book.entry);
      const bookTitle = fullTitleOf('books', book.id, locale);
      const sidebarDef = sidebars[book.sidebar];
      const chaptersCount = sidebarDef ? countSidebarDocItems(sidebarDef) : 0;

      outputData[locale].books.push({
        id: book.id,
        title: bookTitle,
        description: entryDoc.description,
        url: entryDoc.url,
        entry: book.entry,
        sidebar: book.sidebar,
        chaptersCount,
      });
    }

    // 2. Series (成員由 docs/ front matter 取得)
    for (const s of config.series) {
      const seriesDocIds = getSeriesDocIds(s.id);
      const docs = seriesDocIds.map((docId) => parseDoc(locale, docId));
      const firstDoc = docs[0];

      const seriesTitle = titleOf('series', s.id, locale);

      const seriesDescription = firstDoc.description;
      const dates = docs.map((d) => d.date).filter(Boolean).sort();
      const dateRange =
        dates.length > 0
          ? dates[0] === dates[dates.length - 1]
            ? dates[0]
            : `${dates[0]} ~ ${dates[dates.length - 1]}`
          : '-';

      outputData[locale].series.push({
        id: s.id,
        title: seriesTitle,
        description: seriesDescription,
        itemsCount: docs.length,
        dateRange,
        docs: docs.map((d) => ({
          id: d.id,
          title: d.title,
          date: d.date,
          description: d.description,
          url: d.url,
          category: d.category,
        })),
      });
    }

    // 3. Essays
    // 3A. Groups (seven-days)
    for (const group of config.essays.groups) {
      const groupDocs = group.docs.map((docId) => parseDoc(locale, docId));
      const groupTitle = titleOf('essay', group.id, locale);
      outputData[locale].essays.groups.push({
        id: group.id,
        title: groupTitle,
        docs: groupDocs.map((d) => ({
          id: d.id,
          title: d.title,
          date: d.date,
          description: d.description,
          url: d.url,
        })),
      });
    }

    // 3B. Rest (Diary remaining, sorted by date descending)
    const diaryDir = path.join(projectRoot, 'docs', 'Diary');
    const diaryFiles = fs
      .readdirSync(diaryDir)
      .filter((f) => (f.endsWith('.md') || f.endsWith('.mdx')) && f !== 'index.mdx' && f !== 'index.md');

    const knownSevenDaysDocs = new Set(config.essays.groups.flatMap((g) => g.docs));

    const restDocs = [];
    for (const f of diaryFiles) {
      const content = fs.readFileSync(path.join(diaryDir, f), 'utf8');
      const parsed = matter(content);
      // 跳過有 series 的文章（如 legal-harm）
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
        restDocs.push(parseDoc(locale, docId));
      }
    }

    restDocs.sort((a, b) => {
      const tA = a.date ? new Date(a.date).getTime() : 0;
      const tB = b.date ? new Date(b.date).getTime() : 0;
      return tB - tA;
    });

    outputData[locale].essays.rest = restDocs.map((d) => ({
      id: d.id,
      title: d.title,
      date: d.date,
      description: d.description,
      url: d.url,
    }));
  }

  // Write to src/data/hubs.json
  const outPath = path.join(projectRoot, 'src', 'data', 'hubs.json');
  fs.writeFileSync(outPath, JSON.stringify(outputData, null, 2), 'utf8');
  console.log(`[generateHubs] Successfully written hubs metadata to ${outPath}`);

  // Perform Self-Check
  const selfCheckResult = runSelfCheck(outputData['zh-Hant'], config, { docCheckAlreadyDone: docCheckResult });
  return { outputData, selfCheckResult };
}

function extractConfigDocIds(config) {
  const docEntries = [];

  // 1. Books
  if (Array.isArray(config.books)) {
    for (const book of config.books) {
      if (book.entry) {
        docEntries.push({ docId: book.entry, source: `Book: ${book.id}` });
      }
      if (Array.isArray(book.chapters)) {
        for (const id of book.chapters) {
          docEntries.push({ docId: id, source: `Book: ${book.id}` });
        }
      }
    }
  }

  // 2. Series (read from front matter)
  const seriesMap = getAllSeriesDocs();
  if (Array.isArray(config.series)) {
    for (const s of config.series) {
      const list = seriesMap[s.id] || [];
      for (const item of list) {
        docEntries.push({ docId: item.docId, source: `Series: ${s.id}` });
      }
    }
  }

  // 3. Essays
  if (config.essays && Array.isArray(config.essays.groups)) {
    for (const g of config.essays.groups) {
      if (Array.isArray(g.docs)) {
        for (const id of g.docs) {
          docEntries.push({ docId: id, source: `Essay group: ${g.id}` });
        }
      }
    }
  }

  return docEntries;
}

function checkDocFiles(config) {
  // 自我檢查 1：config 內每個 series id 至少有一篇文章；同一系列 order 不可重複
  const seriesMap = getAllSeriesDocs();
  if (Array.isArray(config.series)) {
    for (const s of config.series) {
      const list = seriesMap[s.id] || [];
      if (list.length === 0) {
        console.error(`\n[Self-Check ERROR] Series "${s.id}" in catalog.json has no corresponding articles in docs/.`);
        process.exit(1);
      }
      const orders = list.map((it) => it.order);
      const duplicates = list.filter((it, idx) => orders.indexOf(it.order) !== idx);
      if (duplicates.length > 0) {
        console.error(`\n[Self-Check ERROR] Series "${s.id}" has duplicate order(s): ${duplicates.map((d) => d.order).join(', ')}`);
        process.exit(1);
      }
    }
  }

  // 自我檢查 1b：文章 YAML 用到的 series id 必須已在 catalog.json 登記，否則該系列在網站上無名、無入口
  const knownSeries = new Set((config.series || []).map((s) => s.id));
  const unknown = Object.keys(seriesMap).filter((id) => !knownSeries.has(id));
  if (unknown.length > 0) {
    console.error(`\n[Self-Check ERROR] 文章 YAML 用了未登記的 series id：${unknown.join(', ')}。請在 src/data/catalog.json 的 series 加上名稱。`);
    process.exit(1);
  }

  // 自我檢查 2：所有 docId 必須存在於 docs/
  const docEntries = extractConfigDocIds(config);
  const missing = [];

  for (const entry of docEntries) {
    const resolvedPath = resolveDocFile('zh-Hant', entry.docId);
    if (!resolvedPath || !fs.existsSync(resolvedPath)) {
      missing.push(entry);
    }
  }

  if (missing.length > 0) {
    console.error(`\n[Self-Check ERROR] Found ${missing.length} doc ID(s) with no corresponding file in docs/:`);
    missing.forEach((m) => {
      console.error(`  - [${m.source}] ${m.docId}`);
    });
    process.exit(1);
  }

  const checkMessage = `[Self-Check] Doc file verification PASSED! All ${docEntries.length} doc IDs in hubs verified in docs/. All series validated with unique orders.`;
  console.log(checkMessage);
  return {
    passed: true,
    checkedCount: docEntries.length,
    message: checkMessage,
  };
}

function checkSitemapInventory(zhHantData) {
  const sitemapCsvPath = path.join(projectRoot, '_reports', 'sitemap_inventory.csv');
  if (!fs.existsSync(sitemapCsvPath)) {
    const infoMessage = '[INFO] _reports/sitemap_inventory.csv not found, skipping sitemap URL inventory check.';
    console.log(infoMessage);
    return {
      passed: true,
      skipped: true,
      message: infoMessage,
    };
  }

  const lines = fs.readFileSync(sitemapCsvPath, 'utf8').split('\n');
  const zhHantSitemapUrls = new Set();
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(',');
    const url = parts[0];
    const locale = parts[1];
    if (locale === 'zh-Hant') {
      zhHantSitemapUrls.add(url);
    }
  }

  const allUrlsToCheck = [];

  // 1. Books
  zhHantData.books.forEach((b) => {
    allUrlsToCheck.push({ source: `Book: ${b.id}`, url: b.url });
  });

  // 2. Series docs
  zhHantData.series.forEach((s) => {
    s.docs.forEach((d) => {
      allUrlsToCheck.push({ source: `Series ${s.id}: ${d.id}`, url: d.url });
    });
  });

  // 3. Essay groups
  zhHantData.essays.groups.forEach((g) => {
    g.docs.forEach((d) => {
      allUrlsToCheck.push({ source: `Essay group ${g.id}: ${d.id}`, url: d.url });
    });
  });

  // 4. Essay rest
  zhHantData.essays.rest.forEach((d) => {
    allUrlsToCheck.push({ source: `Essay rest: ${d.id}`, url: d.url });
  });

  const missing = [];
  for (const item of allUrlsToCheck) {
    const fullUrl = item.url.startsWith('http')
      ? item.url
      : 'https://mythogenengine.com' + item.url;
    if (!zhHantSitemapUrls.has(fullUrl)) {
      missing.push({ ...item, fullUrl });
    }
  }

  if (missing.length > 0) {
    console.warn(`\n[WARN] Found ${missing.length} URLs in hubs.json not in _reports/sitemap_inventory.csv:`);
    missing.forEach((m) => {
      console.warn(`  - [${m.source}] ${m.url} -> ${m.fullUrl}`);
    });
    const warnMessage = `[WARN] Hubs URL inventory verification: ${missing.length} URL(s) not in sitemap snapshot (allowed for new articles).`;
    return {
      passed: true,
      warnings: missing.length,
      checkedCount: allUrlsToCheck.length,
      message: warnMessage,
    };
  }

  const checkMessage = `[Self-Check] Hubs URL inventory verification PASSED! All ${allUrlsToCheck.length} URLs checked exist in _reports/sitemap_inventory.csv (zh-Hant). Zero errors found.`;
  console.log(checkMessage);
  return {
    passed: true,
    checkedCount: allUrlsToCheck.length,
    message: checkMessage,
  };
}

function runSelfCheck(zhHantData, config, options = {}) {
  let docCheckResult = options.docCheckAlreadyDone;
  if (!docCheckResult) {
    if (!config) {
      const catalog = loadCatalog();
      config = { ...catalog, books: catalog.books.map((b) => ({ ...b, entry: b.chapters[0] })) };
    }
    if (config) {
      docCheckResult = checkDocFiles(config);
    }
  }

  const sitemapResult = checkSitemapInventory(zhHantData);

  const message = [
    docCheckResult ? docCheckResult.message : '',
    sitemapResult ? sitemapResult.message : '',
  ]
    .filter(Boolean)
    .join('\n');

  return {
    passed: true,
    docCheck: docCheckResult,
    sitemapResult,
    message,
  };
}

function generateReportTables(hubsData) {
  const sidebars = require(path.join(projectRoot, 'sidebars.js'));
  const zhHant = hubsData['zh-Hant'];

  // Table 1: Books
  let booksTable = `### 1. 書（Books，共 ${zhHant.books.length} 本）\n\n`;
  booksTable += `| ID | 書名 / 標題 | 入口 Doc ID | 繁中 URL | 所屬 Sidebar | 章節數 |\n`;
  booksTable += `| :--- | :--- | :--- | :--- | :--- | :---: |\n`;
  for (const b of zhHant.books) {
    booksTable += `| \`${b.id}\` | ${b.title} | \`${b.entry}\` | \`${b.url}\` | \`${b.sidebar}\` | ${b.chaptersCount} |\n`;
  }

  // Table 2: Series
  let seriesTable = `\n### 2. 系列（Series，共 ${zhHant.series.length} 個系列）\n\n`;
  seriesTable += `| 系列 ID | 系列名稱 | 篇數 | 日期範圍 | 成員篇章標題與 URL 清單 |\n`;
  seriesTable += `| :--- | :--- | :---: | :---: | :--- |\n`;
  for (const s of zhHant.series) {
    const docLinks = s.docs
      .map((d, idx) => `${idx + 1}. [${d.title}](${d.url})`)
      .join('<br>');
    seriesTable += `| \`${s.id}\` | ${s.title} | ${s.itemsCount} 篇 | ${s.dateRange} | ${docLinks} |\n`;
  }

  // Table 3: Essays
  let essaysTable = `\n### 3. 散文（Essays）\n\n`;
  essaysTable += `| 群組 / 分類 | 標題 | URL | 日期 |\n`;
  essaysTable += `| :--- | :--- | :--- | :---: |\n`;
  for (const g of zhHant.essays.groups) {
    for (const d of g.docs) {
      essaysTable += `| **群組：${g.title} (置頂)** | ${d.title} | \`${d.url}\` | ${d.date || '-'} |\n`;
    }
  }
  for (const d of zhHant.essays.rest) {
    essaysTable += `| **其餘隨筆 (按日期新到舊)** | ${d.title} | \`${d.url}\` | ${d.date || '-'} |\n`;
  }

  // Standalone Articles
  const standaloneCategory = sidebars.lucidRecord.find((cat) => cat.label === '獨立篇');
  const standaloneDocIds = [];
  function extractDocIds(arr) {
    for (const it of arr) {
      if (typeof it === 'string') {
        standaloneDocIds.push(it);
      } else if (it && it.items) {
        extractDocIds(it.items);
      }
    }
  }
  if (standaloneCategory && standaloneCategory.items) {
    extractDocIds(standaloneCategory.items);
  }
  let standaloneTable = `### 獨立篇清單（共 ${standaloneDocIds.length} 篇，歸入清醒記錄 sidebar 獨立篇）\n\n`;
  standaloneTable += `| 序號 | Doc ID | 標題 | 日期 | 分類 | URL |\n`;
  standaloneTable += `| :---: | :--- | :--- | :---: | :--- | :--- |\n`;

  standaloneDocIds.forEach((docId, idx) => {
    const d = parseDoc('zh-Hant', docId);
    standaloneTable += `| ${idx + 1} | \`${d.id}\` | [${d.title}](${d.url}) | ${d.date || '-'} | ${d.category || '-'} | \`${d.url}\` |\n`;
  });

  // Essays list
  const essaysSevenDays = zhHant.essays.groups.find((g) => g.id === 'seven-days').docs;
  const legalHarmSeries = zhHant.series.find((s) => s.id === 'legal-harm').docs;
  const essaysRest = zhHant.essays.rest;

  let essaysListTable = `### 散文清單（共 ${essaysSevenDays.length + legalHarmSeries.length + essaysRest.length} 篇）\n\n`;
  essaysListTable += `#### (1) 七日書（共 ${essaysSevenDays.length} 篇，置頂）\n\n`;
  essaysListTable += `| 序號 | Doc ID | 標題 | 日期 | URL |\n`;
  essaysListTable += `| :---: | :--- | :--- | :---: | :--- |\n`;
  essaysSevenDays.forEach((d, idx) => {
    essaysListTable += `| ${idx + 1} | \`${d.id}\` | [${d.title}](${d.url}) | ${d.date || '-'} | \`${d.url}\` |\n`;
  });

  essaysListTable += `\n#### (2) 合法傷害權（共 ${legalHarmSeries.length} 篇，樂風集團案）\n\n`;
  essaysListTable += `| 序號 | Doc ID | 標題 | 日期 | URL |\n`;
  essaysListTable += `| :---: | :--- | :--- | :---: | :--- |\n`;
  legalHarmSeries.forEach((d, idx) => {
    essaysListTable += `| ${idx + 1} | \`${d.id}\` | [${d.title}](${d.url}) | ${d.date || '-'} | \`${d.url}\` |\n`;
  });

  essaysListTable += `\n#### (3) 其餘隨筆（共 ${essaysRest.length} 篇，按日期新到舊）\n\n`;
  essaysListTable += `| 序號 | Doc ID | 標題 | 日期 | URL |\n`;
  essaysListTable += `| :---: | :--- | :--- | :---: | :--- |\n`;
  essaysRest.forEach((d, idx) => {
    essaysListTable += `| ${idx + 1} | \`${d.id}\` | [${d.title}](${d.url}) | ${d.date || '-'} | \`${d.url}\` |\n`;
  });

  // Translation key mapping table
  const enCurrent = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'i18n', 'en', 'docusaurus-plugin-content-docs', 'current.json'), 'utf8')
  );
  const zhHKCurrent = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'i18n', 'zh-HK', 'docusaurus-plugin-content-docs', 'current.json'), 'utf8')
  );

  const translationKeyRows = [
    {
      oldKey: 'sidebar.docs.category.大道無形',
      newKey: 'sidebar.aiTao.category.大道無形',
      zhHant: '大道無形',
      en: enCurrent['sidebar.docs.category.大道無形']?.message || 'The Invisible Path',
      zhHK: zhHKCurrent['sidebar.docs.category.大道無形']?.message || '大道無形',
      note: '書名最外層 category',
    },
    {
      oldKey: 'sidebar.docs.category.AI Ecosystem War',
      newKey: 'sidebar.aiWar.category.AI Ecosystem War',
      zhHant: 'AI Ecosystem War',
      en: enCurrent['sidebar.docs.category.AI Ecosystem War']?.message || 'AI Ecosystem War',
      zhHK: zhHKCurrent['sidebar.docs.category.AI Ecosystem War']?.message || 'AI Ecosystem War',
      note: '系列名最外層 category',
    },
    {
      oldKey: 'sidebar.docs.category.Mirror Realm',
      newKey: 'sidebar.mirrorRealm.category.鏡界',
      zhHant: '鏡界',
      en: enCurrent['sidebar.docs.category.Mirror Realm']?.message || 'Mirror Realm',
      zhHK: '鏡界',
      note: '書名最外層 category（中文命名規範化）',
    },
    {
      oldKey: 'sidebar.docs.category.GameVictory',
      newKey: 'sidebar.gameVictory.category.遊戲致勝',
      zhHant: '遊戲致勝',
      en: enCurrent['sidebar.docs.category.GameVictory']?.message || 'GameVictory',
      zhHK: '遊戲致勝',
      note: '書名最外層 category（中文命名規範化）',
    },
    {
      oldKey: 'sidebar.docs.category.資本遊戲玩什麼',
      newKey: 'sidebar.capitalGame.category.資本遊戲玩什麼',
      zhHant: '資本遊戲玩什麼',
      en: enCurrent['sidebar.docs.category.資本遊戲玩什麼']?.message || 'Capital Game',
      zhHK: zhHKCurrent['sidebar.docs.category.資本遊戲玩什麼']?.message || '資本遊戲玩什麼',
      note: '書名最外層 category',
    },
    {
      oldKey: 'sidebar.docs.category.誰在門口收錢',
      newKey: 'sidebar.whoCollects.category.誰在門口收錢',
      zhHant: '誰在門口收錢',
      en: enCurrent['sidebar.docs.category.誰在門口收錢']?.message || "Who's Collecting at the Door",
      zhHK: zhHKCurrent['sidebar.docs.category.誰在門口收錢']?.message || '誰在門口收錢',
      note: '書名最外層 category',
    },
    {
      oldKey: 'sidebar.docs.category.從乞丐碗裡搶飯',
      newKey: 'sidebar.beggarsBowl.category.從乞丐碗裡搶飯',
      zhHant: '從乞丐碗裡搶飯',
      en: enCurrent['sidebar.docs.category.從乞丐碗裡搶飯']?.message || "Snatching Rice from the Beggar's Bowl",
      zhHK: zhHKCurrent['sidebar.docs.category.從乞丐碗裡搶飯']?.message || '從乞丐碗裡搶飯',
      note: '系列名最外層 category',
    },
    {
      oldKey: 'sidebar.docs.category.記憶體四部曲',
      newKey: 'sidebar.lucidRecord.category.記憶體與 AI 算力週期系列',
      zhHant: '記憶體與 AI 算力週期系列',
      en: enCurrent['sidebar.lucidRecord.category.記憶體與 AI 算力週期系列']?.message || 'Memory and AI Compute Cycle Series',
      zhHK: zhHKCurrent['sidebar.lucidRecord.category.記憶體與 AI 算力週期系列']?.message || '記憶體與 AI 算力週期系列',
      note: '清醒記錄子 category 遷移並更名',
    },
    {
      oldKey: 'sidebar.docs.category.效率陷阱與認知侵蝕五部曲',
      newKey: 'sidebar.lucidRecord.category.效率陷阱與認知侵蝕五部曲',
      zhHant: '效率陷阱與認知侵蝕五部曲',
      en: enCurrent['sidebar.docs.category.效率陷阱與認知侵蝕五部曲']?.message || 'Efficiency Trap & Cognitive Erosion Quintet',
      zhHK: zhHKCurrent['sidebar.docs.category.效率陷阱與認知侵蝕五部曲']?.message || '效率陷阱與認知侵蝕五部曲',
      note: '清醒記錄子 category 遷移',
    },
    {
      oldKey: 'sidebar.docs.category.平台消音五部曲',
      newKey: 'sidebar.lucidRecord.category.平台消音與認知封鎖五部曲',
      zhHant: '平台消音與認知封鎖五部曲',
      en: enCurrent['sidebar.lucidRecord.category.平台消音與認知封鎖五部曲']?.message || 'Platform Silencing and Cognitive Blockade: A Five-Part Series',
      zhHK: zhHKCurrent['sidebar.lucidRecord.category.平台消音與認知封鎖五部曲']?.message || '平台消音與認知封鎖五部曲',
      note: '清醒記錄子 category 遷移並更名',
    },
    {
      oldKey: '(原無 key，補齊)',
      newKey: 'sidebar.lucidRecord.category.衰減：可見度如何被分配',
      zhHant: '衰減：可見度如何被分配',
      en: enCurrent['sidebar.lucidRecord.category.衰減：可見度如何被分配']?.message || 'Attenuation: How Visibility Is Allocated',
      zhHK: zhHKCurrent['sidebar.lucidRecord.category.衰減：可見度如何被分配']?.message || '衰減：可見度如何被分配',
      note: '清醒記錄新補 category 並更名',
    },
    {
      oldKey: 'sidebar.docs.category.退出機制三部曲',
      newKey: 'sidebar.lucidRecord.category.退出機制三部曲',
      zhHant: '退出機制三部曲',
      en: enCurrent['sidebar.docs.category.退出機制三部曲']?.message || 'Exit Mechanism Trilogy',
      zhHK: zhHKCurrent['sidebar.docs.category.退出機制三部曲']?.message || '退出機制三部曲',
      note: '清醒記錄子 category 遷移',
    },
    {
      oldKey: '(原無 key，補齊)',
      newKey: 'sidebar.lucidRecord.category.獨立篇',
      zhHant: '獨立篇',
      en: 'Standalone Articles',
      zhHK: '獨立篇',
      note: '清醒記錄獨立篇 category',
    },
    {
      oldKey: '(原無 key，補齊)',
      newKey: 'sidebar.essays.category.七日書',
      zhHant: '七日書',
      en: 'Seven Days Book',
      zhHK: '七日書',
      note: '散文七日書 category',
    },
    {
      oldKey: '(原無 key，補齊)',
      newKey: 'sidebar.essays.category.合法傷害權',
      zhHant: '合法傷害權',
      en: 'Legal Right to Harm',
      zhHK: '合法傷害權',
      note: '散文合法傷害權 category',
    },
    {
      oldKey: '(原無 key，補齊)',
      newKey: 'sidebar.essays.category.隨筆',
      zhHant: '隨筆',
      en: 'Essays & Musings',
      zhHK: '隨筆',
      note: '散文隨筆 category',
    },
  ];

  let translationTable = `### 翻譯 Key 對照表（舊 Key → 新 Key）\n\n`;
  translationTable += `| 舊 Translation Key (\`sidebar.docs.*\`) | 新 Translation Key (\`sidebar.<newSidebar>.*\`) | 繁中 (zh-Hant) 原文 | 英文 (en) 譯名 | 港繁 (zh-HK) 譯名 | 備註 |\n`;
  translationTable += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
  for (const r of translationKeyRows) {
    translationTable += `| \`${r.oldKey}\` | \`${r.newKey}\` | ${r.zhHant} | ${r.en} | ${r.zhHK} | ${r.note} |\n`;
  }

  return {
    booksTable,
    seriesTable,
    essaysTable,
    standaloneTable,
    essaysListTable,
    translationTable,
  };
}

if (require.main === module) {
  const { outputData, selfCheckResult } = generateHubs();
  if (process.argv.includes('--report')) {
    const report = generateReportTables(outputData);
    console.log('\n==================== [REPORT TABLES START] ====================\n');
    console.log('## 一、分類表（標題＋URL）\n');
    console.log(report.booksTable);
    console.log(report.seriesTable);
    console.log(report.essaysTable);
    console.log('\n## 二、獨立篇清單\n');
    console.log(report.standaloneTable);
    console.log('\n## 三、散文清單\n');
    console.log(report.essaysListTable);
    console.log('\n## 四、generateHubs.js 自我檢查輸出\n');
    console.log('```text');
    console.log(selfCheckResult.message);
    console.log('```');
    console.log('\n## 五、翻譯 key 對照表\n');
    console.log(report.translationTable);
    console.log('\n==================== [REPORT TABLES END] ====================\n');
  }
}

module.exports = {
  generateHubs,
  runSelfCheck,
  checkDocFiles,
  checkSitemapInventory,
  generateReportTables,
};
