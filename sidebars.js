const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const projectRoot = __dirname;

function getTechNotesStandaloneDocs() {
  const dir = path.join(projectRoot, 'docs', 'TechNotes');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(
    (f) =>
      (f.endsWith('.md') || f.endsWith('.mdx')) &&
      f !== 'index.mdx' &&
      f !== 'index.md'
  );

  const knownSeriesDocs = new Set([
    'TechNotes/HBM 不是下一個台積電：記憶體與邏輯晶片的結構性鴻溝',
    'TechNotes/900 層的真相：當你的 Switch 和 Steam Deck 在替 AI 買單',
    'TechNotes/我問了 AI「記憶體股還能不能買」',
    'TechNotes/真話是付費功能：AI 定價結構如何決定真相的分配',
    'TechNotes/認知與判斷——AI 時代人類最後的不可取代性',
    'TechNotes/環境如何令人變蠢——認知與判斷（後記）',
    'TechNotes/當所有人都在學AI',
    'TechNotes/殺死創新的標準作業程序',
    'TechNotes/效率陷阱續章・續章：你以為你贏了',
    'TechNotes/機器點樣幫手執行一場已經發生咗嘅刪除',
    'TechNotes/異常報告裡的讀者——當真話與垃圾走同一條通道入場',
    'TechNotes/異常報告裡的讀者・後記——我以為門關了',
    'TechNotes/零違規，每篇二十四個曝光——一個帳號的分發帳本',
    'TechNotes/半個鐘頭的生產線',
    'TechNotes/批准之後沒有人看見',
    'TechNotes/最不像AI的文章反而是AI寫的',
    'TechNotes/一個讚一分一場罵戰三十分',
    'TechNotes/退出機制三部曲',
    'TechNotes/你的定期存款，補貼了德國人買車',
    'TechNotes/四個地方，沒有一個人拿到那筆便宜',
    'TechNotes/錢不走，人也不走',
  ]);

  const items = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const content = fs.readFileSync(full, 'utf8');
    const parsed = matter(content);
    let id = parsed.data.id || f.replace(/\.mdx?$/, '');
    if (!parsed.data.id) {
      id = id
        .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
        .replace(/^\d{8}[-_]/, '')
        .replace(/^\d+[-_]/, '');
    }
    const docId = 'TechNotes/' + id;
    if (!knownSeriesDocs.has(docId)) {
      items.push({
        docId,
        date: parsed.data.date ? new Date(parsed.data.date).getTime() : 0,
      });
    }
  }

  items.sort((a, b) => b.date - a.date);
  return items.map((it) => it.docId);
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

  const knownDocs = new Set([
    'Diary/七日書｜身心靈',
    'Diary/七日書｜傳奇一曲',
    'Diary/七日書_無用之用_道',
    'Diary/樂風集團案的食物鏈結構',
    'Diary/收費結構決定言論自由',
    'Diary/合法的不公平與不合法的欺瞞——樂風集團案中兩種「欺詐」的分界線',
    'Diary/一場豪賭的正常與不正常',
  ]);

  const items = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const content = fs.readFileSync(full, 'utf8');
    const parsed = matter(content);
    let id = parsed.data.id || f.replace(/\.mdx?$/, '');
    if (!parsed.data.id) {
      id = id
        .replace(/^\d{4}-\d{2}-\d{2}[-_]/, '')
        .replace(/^\d{8}[-_]/, '')
        .replace(/^\d+[-_]/, '');
    }
    const docId = 'Diary/' + id;
    if (!knownDocs.has(docId)) {
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
    {
      type: 'category',
      label: 'AI Ecosystem War',
      collapsible: false,
      items: [
        'ai-war/guide',
        'ai-war/food_chain',
        'ai-war/ms_openai',
        'ai-war/perpetual_motion',
        'ai-war/limitations',
        'ai-war/claude_code',
        'ai-war/apple_counter',
        'ai-war/ai_film',
        'ai-war/xbox',
      ],
    },
  ],

  // 7. 從乞丐碗裡搶飯
  beggarsBowl: [
    {
      type: 'category',
      label: '從乞丐碗裡搶飯',
      collapsible: false,
      items: [
        'capital-game/從乞丐碗裡搶飯/prologue',
        'capital-game/從乞丐碗裡搶飯/part1',
        'capital-game/從乞丐碗裡搶飯/part2',
        'capital-game/從乞丐碗裡搶飯/part3',
        'capital-game/從乞丐碗裡搶飯/part4',
        'capital-game/從乞丐碗裡搶飯/finale',
      ],
    },
  ],

  // 8. 清醒記錄 (lucidRecord)
  lucidRecord: [
    {
      type: 'category',
      label: '記憶體四部曲',
      items: [
        'TechNotes/HBM 不是下一個台積電：記憶體與邏輯晶片的結構性鴻溝',
        'TechNotes/900 層的真相：當你的 Switch 和 Steam Deck 在替 AI 買單',
        'TechNotes/我問了 AI「記憶體股還能不能買」',
        'TechNotes/真話是付費功能：AI 定價結構如何決定真相的分配',
      ],
    },
    {
      type: 'category',
      label: '效率陷阱與認知侵蝕五部曲',
      items: [
        'TechNotes/認知與判斷——AI 時代人類最後的不可取代性',
        'TechNotes/環境如何令人變蠢——認知與判斷（後記）',
        'TechNotes/當所有人都在學AI',
        'TechNotes/殺死創新的標準作業程序',
        'TechNotes/效率陷阱續章・續章：你以為你贏了',
      ],
    },
    {
      type: 'category',
      label: '平台消音五部曲',
      items: [
        'TechNotes/機器點樣幫手執行一場已經發生咗嘅刪除',
        'TechNotes/異常報告裡的讀者——當真話與垃圾走同一條通道入場',
        'TechNotes/異常報告裡的讀者・後記——我以為門關了',
        'TechNotes/零違規，每篇二十四個曝光——一個帳號的分發帳本',
        'TechNotes/半個鐘頭的生產線',
      ],
    },
    {
      type: 'category',
      label: '衰減：可見度如何被分配三部曲',
      items: [
        'TechNotes/批准之後沒有人看見',
        'TechNotes/最不像AI的文章反而是AI寫的',
        'TechNotes/一個讚一分一場罵戰三十分',
      ],
    },
    {
      type: 'category',
      label: '退出機制三部曲',
      link: {
        type: 'doc',
        id: 'TechNotes/退出機制三部曲',
      },
      items: [
        'TechNotes/你的定期存款，補貼了德國人買車',
        'TechNotes/四個地方，沒有一個人拿到那筆便宜',
        'TechNotes/錢不走，人也不走',
      ],
    },
    {
      type: 'category',
      label: '獨立篇',
      items: [
        'capital-game/誰說遊戲做不起',
        ...getTechNotesStandaloneDocs(),
      ],
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
    {
      type: 'category',
      label: '合法傷害權',
      items: [
        'Diary/樂風集團案的食物鏈結構',
        'Diary/收費結構決定言論自由',
        'Diary/合法的不公平與不合法的欺瞞——樂風集團案中兩種「欺詐」的分界線',
        'Diary/一場豪賭的正常與不正常',
      ],
    },
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
