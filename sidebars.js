const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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
  const label = list[0].name;
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

  const knownSevenDaysDocs = new Set([
    'Diary/七日書｜身心靈',
    'Diary/七日書｜傳奇一曲',
    'Diary/七日書_無用之用_道',
  ]);

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

const sidebars = {
  // 1. 大道無形 (The Invisible Path)
  aiTao: [
    {
      type: 'category',
      label: '大道無形',
      collapsible: false,
      items: [
        'AI_TAO/INFO_PAGE',
        'AI_TAO/intro',
        'AI_TAO/prologue',
        'AI_TAO/ch01',
        'AI_TAO/ch02',
        'AI_TAO/ch03',
        'AI_TAO/ch04',
        'AI_TAO/ch05',
        'AI_TAO/ch06',
        'AI_TAO/ch07',
        'AI_TAO/ch08',
        'AI_TAO/ch09',
        'AI_TAO/ch10',
        'AI_TAO/ch11',
        'AI_TAO/ch12',
        'AI_TAO/ch13',
        'AI_TAO/ch14',
        'AI_TAO/ch15',
        'AI_TAO/ch16',
        'AI_TAO/ch17',
        'AI_TAO/ch18',
        'AI_TAO/epilogue',
        'AI_TAO/afterword',
        'AI_TAO/附錄_資料來源_最終版_中英對照',
      ],
    },
  ],

  // 2. 鏡界 (Mirror Realm)
  mirrorRealm: [
    {
      type: 'category',
      label: '鏡界',
      collapsible: false,
      items: [
        'mirror-realm/prologue',
        'mirror-realm/ch01',
        'mirror-realm/ch02',
        'mirror-realm/ch03',
        'mirror-realm/ch04',
        'mirror-realm/ch05',
        'mirror-realm/ch06',
        'mirror-realm/ch07',
        'mirror-realm/ch08',
        'mirror-realm/ch09',
        'mirror-realm/ch10',
        'mirror-realm/ch11',
        'mirror-realm/ch12',
        'mirror-realm/ch12b',
        'mirror-realm/ch13',
        'mirror-realm/ch14',
        'mirror-realm/ch15',
        'mirror-realm/ch16',
        'mirror-realm/ch17',
        'mirror-realm/ch18',
        'mirror-realm/ch19',
        'mirror-realm/epilogue',
      ],
    },
  ],

  // 3. 遊戲致勝 (GameVictory)
  gameVictory: [
    {
      type: 'category',
      label: '遊戲致勝',
      collapsible: false,
      items: [
        'GameVictory/INFO_PAGE',
        'GameVictory/自序_玩住學_v17',
        'GameVictory/序章_看不見的代價_v1',
        'GameVictory/第一章_神仙打架的DOS時代_v4',
        'GameVictory/第二章_特洛伊木馬_v3',
        'GameVictory/第三章_微軟的恐懼與 Xbox 的誕生',
        'GameVictory/第四章_世嘉的五百萬美元善款_v1',
        'GameVictory/第五章_AI的野蠻生長與Wintel的盲區_v2',
        'GameVictory/第六章_Gabe Newell 的越獄行動_v5',
        'GameVictory/間章_全面性的消亡_v1',
        'GameVictory/第七章_CUDA豪賭與遊戲玩家的RD稅_v3',
        'GameVictory/第八章_唯一的軍工廠_台積電的終極壟斷_v2',
        'GameVictory/第九章_CEO的生死時速_Lisa_Su_vs_Pat_Gelsinger_v2',
        'GameVictory/第十章_最後一根救命稻草_v2',
        'GameVictory/第十一章_給遊戲玩家的情書_v4',
        'GameVictory/終章_遊戲即未來_v5b',
        'GameVictory/外傳上篇_逃獄者_Google的無魂豪賭與TPU閉環_v1',
        'GameVictory/外傳下篇_缺課者_中國的應用狂歡與底層斷裂_v1',
        'GameVictory/back_cover',
      ],
    },
  ],

  // 4. 資本遊戲玩什麼（單頁長文）
  capitalGame: [
    {
      type: 'category',
      label: '資本遊戲玩什麼',
      collapsible: false,
      items: [
        'capital-game/資本遊戲玩什麼（實例檔案：遊戲業）',
      ],
    },
  ],

  // 5. 誰在門口收錢
  whoCollects: [
    {
      type: 'category',
      label: '誰在門口收錢',
      collapsible: false,
      items: [
        'capital-game/誰在門口收錢/INFO_PAGE',
        'capital-game/誰在門口收錢/preface',
        'capital-game/誰在門口收錢/ch01',
        'capital-game/誰在門口收錢/ch02',
        'capital-game/誰在門口收錢/ch03',
        'capital-game/誰在門口收錢/ch04',
        'capital-game/誰在門口收錢/ch05',
        'capital-game/誰在門口收錢/ch06',
        'capital-game/誰在門口收錢/ch07',
        'capital-game/誰在門口收錢/ch08',
        'capital-game/誰在門口收錢/ch09',
        'capital-game/誰在門口收錢/conclusion',
        'capital-game/誰在門口收錢/full',
      ],
    },
  ],

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
    {
      type: 'category',
      label: '七日書',
      items: [
        'Diary/七日書｜身心靈',
        'Diary/七日書｜傳奇一曲',
        'Diary/七日書_無用之用_道',
      ],
    },
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
