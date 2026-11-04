/**
 * 將《誰在門口收錢》中英文書稿（REF/誰在門口收錢/）拆成網頁版。
 *
 * 雙軌展示架構：
 * 1. 簡約經典門戶頁（INFO_PAGE.md，仿 GameVictory 風格）：封面、中英雙語下載表格、雙閱讀模式入口、核心命題目錄表、版權聲明
 * 2. 分章獨立頁（preface, ch01~ch09, conclusion）：每頁含頂部導航指示、正文、GFM章節腳注、章末導航
 * 3. 單頁完整版（full.md）：全書一頁連讀（序、九章、終章、完整注釋），適合電腦閱讀與 Ctrl+F 全文搜尋
 *
 * 輸出目錄：
 * - docs/（zh-Hant）
 * - i18n/zh-HK/docusaurus-plugin-content-docs/current/（zh-HK）
 * - i18n/en/docusaurus-plugin-content-docs/current/（en）
 *
 * 書稿修改後重跑：node scripts/splitWhoCollects.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const REF = path.join(ROOT, 'REF', '誰在門口收錢');
const SERIES = 'capital-game';
const BOOK_DIR = '誰在門口收錢';
const SLUG = '/who-collects-at-the-door';
const DL = 'pathname:///downloads/who-collects-at-the-door';

const OUT = {
  'zh-Hant': path.join(ROOT, 'docs', SERIES, BOOK_DIR),
  'zh-HK': path.join(ROOT, 'i18n', 'zh-HK', 'docusaurus-plugin-content-docs', 'current', SERIES, BOOK_DIR),
  en: path.join(ROOT, 'i18n', 'en', 'docusaurus-plugin-content-docs', 'current', SERIES, BOOK_DIR),
};

const ZH_NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
const pad = (n) => String(n).padStart(2, '0');

const CHAPTER_THESIS = {
  zh: {
    preface: '四則消息，四個說法；看懂錢怎樣流',
    1: '否決權的剝奪與組織置換',
    2: '縮水式退化與原味消失的帳本',
    3: '教育、資產與防守性底盤',
    4: '機制設計、排隊與可見度特權',
    5: '餅縮小時的內鬥與功勞轉移',
    6: '數字的選邊站與預防的不對稱',
    7: '當處境被話術解釋成性格缺陷',
    8: '賣課經濟、注意力分配與演算法租金',
    9: '地板的有無與八十元牛肉麵的秘密',
    conclusion: '兩種擺脫、不參與的底氣與留給下一代的鑰匙',
  },
  en: {
    preface: 'Four headlines; seeing where the money flows',
    1: 'The stripping of veto power and organizational replacement',
    2: 'Shrinkflation and the ledger behind lost taste',
    3: 'Credentials, capital, and defensive safety nets',
    4: 'Mechanism design, queuing, and allocation',
    5: 'Zero-sum infighting when the pie shrinks',
    6: 'Partisan numbers and the asymmetry of prevention',
    7: 'When structural traps are framed as personality flaws',
    8: 'The course-selling economy and algorithmic rent',
    9: 'The presence of a floor and the 80-dollar beef noodles',
    conclusion: 'Two types of escape, dignity without winning, and a key for the next generation',
  },
};

const LANG = {
  zh: {
    file: '誰在門口收錢（書稿）.md',
    isPreface: (t) => t.startsWith('序'),
    isPart: (t) => /^第[一二三]部/.test(t),
    isConclusion: (t) => t.startsWith('終章'),
    isNotes: (t) => t.startsWith('注釋'),
    tocHeading: '## 目錄',
    chapterNum: (t) => ZH_NUM[(t.match(/^第([一二三四五六七八九])章/) || [])[1]],
    linkXrefs: (s) =>
      s.replace(/（見第([一二三四五六七八九])章）/g, (_, n) => `（見[第${n}章](./ch${pad(ZH_NUM[n])}.md)）`),
    notesSentence: ['以註釋編號，全部放在書末。', '以註釋編號；網頁版的註釋附於各章末。'],
  },
  en: {
    file: "Who's Collecting at the Door (manuscript).md",
    isPreface: (t) => t.startsWith('Preface'),
    isPart: (t) => /^Part /.test(t),
    isConclusion: (t) => t.startsWith('Conclusion'),
    isNotes: (t) => t.startsWith('Notes'),
    tocHeading: '## Contents',
    chapterNum: (t) => Number((t.match(/^Chapter (\d+)/) || [])[1]),
    linkXrefs: (s) => s.replace(/\(see Chapter (\d)\)/g, (_, n) => `(see [Chapter ${n}](./ch${pad(n)}.md))`),
    notesSentence: [
      'cited by numbered notes, all collected at the back of the book.',
      'cited by numbered notes; in this web edition they appear at the end of each chapter.',
    ],
  },
};

function parse(lang) {
  const cfg = LANG[lang];
  const lines = fs.readFileSync(path.join(REF, cfg.file), 'utf8').replace(/\r\n/g, '\n').split('\n');
  const book = { front: [], preface: null, parts: [], chapters: [], conclusion: null, notes: {} };
  let cur = { lines: book.front };
  let part = null;
  let inNotes = false;
  let notesCh = null;

  for (const line of lines) {
    const h1 = line.match(/^# (.+)$/);
    const h2 = line.match(/^## (.+)$/);
    if ((h1 && cur.lines !== book.front) || (h1 && cfg.isPreface(h1[1]))) {
      const t = h1[1].trim();
      if (cfg.isPreface(t)) cur = book.preface = { title: t, lines: [] };
      else if (cfg.isPart(t)) {
        part = t;
        book.parts.push(t);
        cur = { lines: [] };
      } else if (cfg.isConclusion(t)) {
        part = null;
        cur = book.conclusion = { title: t, lines: [] };
      } else if (cfg.isNotes(t)) {
        inNotes = true;
        cur = { lines: [] };
      } else throw new Error(`Unknown H1: ${t}`);
      continue;
    }
    if (h2 && inNotes) {
      notesCh = cfg.chapterNum(h2[1].trim());
      book.notes[notesCh] = [];
      continue;
    }
    if (h2 && part && !inNotes && cfg.chapterNum(h2[1].trim())) {
      const t = h2[1].trim();
      cur = { num: cfg.chapterNum(t), title: t, part, lines: [] };
      book.chapters.push(cur);
      continue;
    }
    if (inNotes) {
      if (notesCh && line.trim()) book.notes[notesCh].push(line);
      continue;
    }
    cur.lines.push(line);
  }
  return book;
}

/** 上標數字 → GFM 腳注；回傳 [正文, 腳注定義, 腳注條目數組] */
function footnotes(body, noteLines, label, prefix = '', warn = console.warn) {
  const refs = new Set();
  const out = body.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => {
    const n = Number([...m].map((c) => SUP[c]).join(''));
    refs.add(n);
    return `[^${prefix}${n}]`;
  });
  const defs = new Map();
  for (const l of noteLines || []) {
    const m = l.match(/^(\d+)\.\s+(.*)$/);
    if (!m) {
      warn(`${label}: 無法解析注釋行：${l.slice(0, 60)}`);
      continue;
    }
    defs.set(Number(m[1]), m[2]);
  }
  for (const n of refs) if (!defs.has(n)) warn(`${label}: 正文有 [^${prefix}${n}] 但沒有注釋`);
  for (const n of defs.keys()) if (!refs.has(n)) warn(`${label}: 注釋 ${n} 沒有在正文引用`);
  const defText = [...defs.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([n, t]) => `[^${prefix}${n}]: ${t}`)
    .join('\n');
  return [out, defText, defs];
}

function cleanBody(lines) {
  const out = lines.map((l) => l.replace(/^(#{3,6}) /, (m, h) => `${h.slice(1)} `));
  while (out.length && (!out[out.length - 1].trim() || out[out.length - 1].trim() === '---')) out.pop();
  while (out.length && !out[0].trim()) out.shift();
  return out.join('\n');
}

function excerpt(body, max) {
  const para = body.split('\n').find((l) => l.trim() && !/^(#|>|\*\*|-|\d+\.)/.test(l.trim())) || '';
  const plain = para.replace(/\[\^[^\]]+\]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').trim();
  return plain.length > max ? plain.slice(0, max).trim() + '…' : plain;
}

function frontmatter(obj) {
  const rows = Object.entries(obj).map(([k, v]) =>
    Array.isArray(v) ? `${k}: [${v.map((x) => JSON.stringify(x)).join(', ')}]` : `${k}: ${JSON.stringify(v)}`
  );
  return `---\n${rows.join('\n')}\n---\n\n`;
}

const META = {
  zh: {
    bookTitle: '誰在門口收錢',
    subtitle: '金融化時代，不是你不夠好',
    keywords: ['誰在門口收錢', '金融化', '星忘塵', 'Mythogen Engine', '結構', '資本遊戲'],
    cover: 'cover-zh.jpg',
    coverAlt: '《誰在門口收錢》封面',
    about: '關於本書 · Info',
    meta: [
      '**作者** 星忘塵 Nebula Walker',
      '**初版日期** 2026年10月',
      '**出版** 專頁創象引擎 MYTHOGEN ENGINE',
      '**網頁** https://mythogenengine.com/',
      '**Facebook** https://www.facebook.com/mythogenengine',
    ].join('\n\n'),
    dlHeading: '### 📖 下載電子書 Download eBook',
    dlTable: [
      '| 格式 Format | 繁體中文 Traditional Chinese | English Edition |',
      '| --- | --- | --- |',
      `| EPUB | [繁中 EPUB 下載](${DL}-tc.epub) | [English EPUB Download](${DL}-en.epub) |`,
      `| PDF | [繁中 PDF 下載](${DL}-tc.pdf) | [English PDF Download](${DL}-en.pdf) |`,
    ],
    modeHeading: '### 📖 在線閱讀模式 Online Reading',
    modes: [
      '- **按章閱讀（推薦手機／逐章細讀）**：[從序章開始閱讀 →](./preface.md)',
      '- **單頁完整版（適合電腦連讀與全文搜尋）**：[點此進入單頁完整版（全文一覽）→](./full.md)',
    ].join('\n'),
    quote: '> *「當有人告訴你，你吃虧是因為你不夠好，先別急著相信。先問一句：外面發生了什麼？」*\n>\n> — 終章：不是缺陷',
    tocTitle: '## 章節目錄 · Table of Contents',
    readHint: '每一章都可以單獨讀；網頁版的註釋附於各章末。如需連續閱讀或全文搜尋，可使用 [單頁完整版](./full.md)。',
    copyrightTitle: '## 版權聲明 · Copyright Notice',
    fullTitle: '誰在門口收錢：全書單頁完整版',
    fullSidebar: '📖 單頁完整版（全文）',
    fullDesc: '《誰在門口收錢：金融化時代，不是你不夠好》全書單頁完整版，包含序、第一至三部共九章、終章與全部注釋。',
    backToToc: '返回目錄',
    fullLinkText: '單頁完整版',
    preface: '序',
    conclusion: '終章',
  },
  en: {
    bookTitle: "Who's Collecting at the Door",
    subtitle: 'In the Age of Financialization, You Are Not the Problem',
    keywords: ["Who's Collecting at the Door", 'financialization', 'Nebula Walker', 'Mythogen Engine', 'structure'],
    cover: 'cover-en.jpg',
    coverAlt: "Cover of Who's Collecting at the Door",
    about: 'Book Info',
    meta: [
      '**Author** Nebula Walker (星忘塵)',
      '**First Edition** October 2026',
      '**Published by** Mythogen Engine',
      '**Website** https://mythogenengine.com/',
      '**Facebook** https://www.facebook.com/mythogenengine',
    ].join('\n\n'),
    dlHeading: '### 📖 Download eBook',
    dlTable: [
      '| Format | English Edition | Traditional Chinese |',
      '| --- | --- | --- |',
      `| EPUB | [English EPUB Download](${DL}-en.epub) | [繁中 EPUB 下載](${DL}-tc.epub) |`,
      `| PDF | [English PDF Download](${DL}-en.pdf) | [繁中 PDF 下載](${DL}-tc.pdf) |`,
    ],
    modeHeading: '### 📖 Online Reading Options',
    modes: [
      '- **Chapter by Chapter (Recommended for Mobile)**: [Start with Preface →](./preface.md)',
      '- **Complete Single Page (Continuous Reading & Search)**: [Open Full Edition →](./full.md)',
    ].join('\n'),
    quote:
      "> *\"When someone tells you that you lost out because you're not good enough, don't rush to believe it. Ask first: what happened out there?\"*\n>\n> — Conclusion: Not a Flaw",
    tocTitle: '## Table of Contents',
    readHint: 'Each chapter can be read on its own. For continuous reading or in-page search (Ctrl+F), use the [Complete Single Page Edition](./full.md).',
    copyrightTitle: '## Copyright Notice',
    fullTitle: "Who's Collecting at the Door: Complete Edition",
    fullSidebar: '📖 Complete Full Edition',
    fullDesc: "Complete manuscript of Who's Collecting at the Door: In the Age of Financialization, You Are Not the Problem. Includes Preface, Parts 1-3 (Chapters 1-9), Conclusion and Notes.",
    backToToc: 'Back to Contents',
    fullLinkText: 'Full Edition',
    preface: 'Preface',
    conclusion: 'Conclusion',
  },
};

function enShortLabel(title) {
  const m = title.match(/^Chapter (\d+): (.+)$/);
  if (!m) return title;
  return `${m[1]}. ${m[2].split(/, |: /)[0]}`;
}

function build(lang) {
  const cfg = LANG[lang];
  const M = META[lang];
  const thesis = CHAPTER_THESIS[lang];
  const book = parse(lang);
  const warnings = [];
  const warn = (w) => warnings.push(w);
  const pages = {};

  // 1. 序
  let prefaceBody = cleanBody(book.preface.lines);
  if (!prefaceBody.includes(cfg.notesSentence[0])) warn('序：找不到「註釋放在書末」句子，未替換');
  prefaceBody = cfg.linkXrefs(prefaceBody.replace(cfg.notesSentence[0], cfg.notesSentence[1]));
  pages.preface = {
    title: book.preface.title,
    label: lang === 'en' ? M.preface : book.preface.title,
    slug: 'preface',
    body: prefaceBody,
    thesis: thesis.preface,
  };

  // 2. 各章
  for (const ch of book.chapters) {
    let body = cleanBody(ch.lines);
    const [withRefs, defs] = footnotes(body, book.notes[ch.num], `Ch${ch.num}(${lang})`, '', warn);
    body = cfg.linkXrefs(withRefs);
    pages[`ch${pad(ch.num)}`] = {
      num: ch.num,
      title: ch.title,
      label: lang === 'en' ? enShortLabel(ch.title) : ch.title,
      slug: `ch${pad(ch.num)}`,
      body,
      defs,
      part: ch.part,
      thesis: thesis[ch.num] || '',
    };
  }

  // 3. 終章
  const conclusionBody = cfg.linkXrefs(cleanBody(book.conclusion.lines));
  pages.conclusion = {
    title: book.conclusion.title,
    label: lang === 'en' ? M.conclusion : book.conclusion.title,
    slug: 'conclusion',
    body: conclusionBody,
    thesis: thesis.conclusion,
  };

  // 4. 單頁完整版 (full.md)
  // 將各章腳注加上章號前綴以避免單頁碰撞（例如 [^1-1], [^2-1]）
  const fullBlocks = [];
  fullBlocks.push(`# ${M.bookTitle}\n\n## ${M.subtitle}\n\n${M.quote}\n\n---`);
  fullBlocks.push(`## ${pages.preface.title}\n\n${cleanBody(book.preface.lines)}`);

  const fullNoteDefs = [];
  for (const ch of book.chapters) {
    const rawBody = cleanBody(ch.lines);
    const [withPrefixRefs, defs] = footnotes(rawBody, book.notes[ch.num], `Full-Ch${ch.num}(${lang})`, `${ch.num}-`, warn);
    fullBlocks.push(`---\n\n*${ch.part}*\n\n## ${ch.title}\n\n${withPrefixRefs}`);
    if (defs) {
      fullNoteDefs.push(defs);
    }
  }
  fullBlocks.push(`---\n\n## ${pages.conclusion.title}\n\n${cleanBody(book.conclusion.lines)}`);
  if (fullNoteDefs.length) {
    fullBlocks.push(`\n\n${fullNoteDefs.join('\n\n')}`);
  }
  const fullBody = cfg.linkXrefs(fullBlocks.join('\n\n'));

  // 5. 門戶頁 (INFO_PAGE.md) —— 仿 GameVictory 經典風格
  const front = book.front;
  const tocIdx = front.indexOf(cfg.tocHeading);
  const boldTitles = front.map((l, i) => (/^\*\*.+\*\*$/.test(l.trim()) ? i : -1)).filter((i) => i >= 0);
  const copyStart = boldTitles.length > 1 ? boldTitles[1] + 1 : 0;
  const copyright = cleanBody(front.slice(copyStart, tocIdx === -1 ? front.length : tocIdx));

  // 目錄表格
  const tocRows = [
    `| ${lang === 'en' ? 'Preface' : '序'} | [${pages.preface.title}](./preface.md) | ${thesis.preface} |`,
  ];
  for (const ch of book.chapters) {
    tocRows.push(
      `| ${lang === 'en' ? `Ch. ${ch.num}` : `第${['一','二','三','四','五','六','七','八','九'][ch.num - 1]}章`} | [${ch.title}](./ch${pad(ch.num)}.md) | ${thesis[ch.num]} |`
    );
  }
  tocRows.push(`| ${lang === 'en' ? 'Conclusion' : '終章'} | [${pages.conclusion.title}](./conclusion.md) | ${thesis.conclusion} |`);
  tocRows.push(
    `| ${lang === 'en' ? 'Full' : '全書'} | [${lang === 'en' ? 'Complete Edition (All-in-One)' : '單頁完整版（全文一覽）'}](./full.md) | ${lang === 'en' ? 'Continuous reading & search' : '適合電腦連讀與全文檢索'} |`
  );

  const infoBody = [
    `# ${M.bookTitle}`,
    `## ${M.subtitle}`,
    '',
    `<img src={require('./${M.cover}').default} alt="${M.coverAlt}" style={{maxWidth: '340px', width: '100%', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,.5)', display: 'block', margin: '1.5rem 0 2rem 0'}} />`,
    '',
    '---',
    '',
    '&nbsp;',
    '',
    M.meta,
    '',
    '&nbsp;',
    '',
    '---',
    '',
    M.dlHeading,
    '',
    ...M.dlTable,
    '',
    '&nbsp;',
    '',
    M.modeHeading,
    '',
    M.modes,
    '',
    '&nbsp;',
    '',
    '---',
    '',
    '&nbsp;',
    '',
    M.quote,
    '',
    '&nbsp;',
    '',
    '---',
    '',
    M.copyrightTitle,
    '',
    copyright,
    '',
    '&nbsp;',
    '',
    '---',
    '',
    M.tocTitle,
    '',
    `*${M.readHint}*`,
    '',
    `| # | ${lang === 'en' ? 'Chapter' : '章節'} | ${lang === 'en' ? 'Core Thesis' : '核心提要'} |`,
    `| --- | --- | --- |`,
    ...tocRows,
    '',
    '&nbsp;',
    '',
    '---',
    '',
    `*© 星忘塵 Nebula Walker · 2026*  `,
    `*出品：專頁創象引擎 MYTHOGEN ENGINE*`,
  ].join('\n');

  const files = {
    INFO_PAGE:
      frontmatter({
        title: `${M.bookTitle}：${M.subtitle}`.replace('Door：', 'Door: '),
        sidebar_label: M.about,
        slug: SLUG,
        description: excerpt(pages.preface.body, 140),
        keywords: M.keywords,
      }) +
      infoBody +
      '\n',
    full:
      frontmatter({
        title: M.fullTitle,
        sidebar_label: M.fullSidebar,
        slug: `${SLUG}/full`,
        description: M.fullDesc,
        keywords: M.keywords,
      }) +
      fullBody +
      '\n',
  };

  // 生成各獨立章節頁
  const chapterKeys = ['preface', ...book.chapters.map((c) => `ch${pad(c.num)}`), 'conclusion'];
  for (let i = 0; i < chapterKeys.length; i++) {
    const key = chapterKeys[i];
    const p = pages[key];
    const prevKey = i > 0 ? chapterKeys[i - 1] : null;
    const nextKey = i < chapterKeys.length - 1 ? chapterKeys[i + 1] : null;

    // 頂部導航指示：使用純 Markdown 相對連結，Docusaurus 會正確轉譯為當前語言的完整路徑
    const navTop = p.part
      ? `*${p.part}* ｜ [📖 ${M.bookTitle}](./INFO_PAGE.md) ｜ [📖 ${M.fullLinkText}](./full.md)\n\n---\n\n`
      : `[📖 ${M.bookTitle}](./INFO_PAGE.md) ｜ [📖 ${M.fullLinkText}](./full.md)\n\n---\n\n`;

    // 底部導航：使用 Markdown 表格，連結到相對 md 檔案，由 Docusaurus 自動轉譯為正確路由
    const navBottom = [
      '',
      '---',
      '',
      `| ${prevKey ? `[← ${pages[prevKey].title}](./${pages[prevKey].slug}.md)` : ''} | [📖 ${M.backToToc}](./INFO_PAGE.md) | ${nextKey ? `[${pages[nextKey].title} →](./${pages[nextKey].slug}.md)` : ''} |`,
      '| :--- | :---: | ---: |',
      '',
    ].join('\n');

    files[key] =
      frontmatter({
        title: p.title,
        sidebar_label: p.label,
        slug: `${SLUG}/${p.slug}`,
        description: excerpt(p.body, 140),
        keywords: [M.bookTitle, ...M.keywords.slice(1, 3)],
      }) +
      navTop +
      `# ${p.title}\n\n${p.body}\n` +
      navBottom +
      (p.defs ? `\n\n${p.defs}\n` : '\n');
  }

  return { files, warnings };
}

function write(locale, files, langTag) {
  const dir = OUT[locale];
  fs.mkdirSync(dir, { recursive: true });
  for (const [id, content] of Object.entries(files)) {
    const withLang = content.replace(/^---\n/, `---\nlang: ${JSON.stringify(langTag)}\n`);
    fs.writeFileSync(path.join(dir, `${id}.md`), withLang, 'utf8');
  }
  console.log(`✓ ${locale}: ${Object.keys(files).length} 頁 → ${path.relative(ROOT, dir)}`);
}

const zh = build('zh');
const en = build('en');
write('zh-Hant', zh.files, 'zh-Hant');
write('zh-HK', zh.files, 'zh-HK');
write('en', en.files, 'en');
for (const w of [...zh.warnings, ...en.warnings]) console.warn('⚠ ' + w);
