# Architecture — MythogenEngine 網站結構與擴充守則

> **用途**：本文件是 AI 助手與維護者的「大腦記憶」，記錄專案資料夾結構、各部件用途、以及未來擴充時的規則。
>
> **最後更新**：2026-07-15

---

## 1. 技術棧概覽

| 項目 | 值 |
|---|---|
| 框架 | Docusaurus 3.5.2（`@docusaurus/preset-classic`） |
| 前端 | React 18, TypeScript |
| 樣式 | CSS Modules + `custom.css` |
| 多語系 | `zh-Hant`（預設）, `en`, `zh-HK` |
| 部署 | GitHub Pages（`gh-pages` branch） |
| 追蹤 | Google Analytics (gtag: `G-C089DF9NW5`) |

---

## 2. 根目錄結構

```
BLOG/
├── docs/                      # 📖 所有文章的主語系（zh-Hant）內容
├── i18n/                      # 🌐 多語系翻譯
│   ├── en/
│   ├── zh-HK/
│   └── zh-Hant/
├── src/
│   ├── components/            # ⚛️  React 元件
│   ├── css/                   # 🎨 全域樣式
│   ├── data/                  # 📊 建置時生成的 JSON 資料
│   └── pages/                 # 📄 獨立頁面（首頁）
├── static/                    # 🖼️  靜態資源（直接複製到建置輸出）
│   ├── downloads/             # 📥 所有可下載檔案（epub 等）
│   └── img/                   # 🖼️  全站通用圖片（favicon、封面）
├── scripts/                   # ⚙️  建置腳本（npm scripts 呼叫）
├── .github/workflows/         # 🚀 CI/CD 配置
├── docusaurus.config.js       # ⚙️  網站主設定
├── sidebars.js                # 📑 側邊欄結構
├── package.json               # 📦 依賴與腳本
├── architecture.md            # 📋 本文件
└── bdd_guidelines.md          # ✅ AI 更新檢查清單
```

---

## 3. 各資料夾詳細用途

### 3.1 `docs/` — 主要內容

所有文章（zh-Hant 版本）的來源。Docusaurus 會自動將此目錄下的 `.md`/`.mdx` 轉為頁面。

| 子目錄 | 內容 | 網站位置 |
|---|---|---|
| `books/<書>/` | 書（ai-tao、who-collects、capital-game、mirror-realm、game-victory）；章節次序在 `src/data/catalog.json` | 書 |
| `series/<系列 id>/` | 系列文章；資料夾 = 系列，YAML `series: { order }` = 次序（0 = 導讀頁） | 系列（清醒記錄／散文側欄內亦會出現） |
| `notes/<2026Q4>/` | 清醒記錄獨立篇，資料夾 = 季度 | 清醒記錄 → 獨立篇 → 季度 |
| `essays/<2026Q4>/`、`essays/seven-days/` | 散文隨筆（按季度）、七日書 | 散文 |
| `notes/index.mdx`、`essays/index.mdx` | 清醒記錄、散文列表頁（網址 `/docs/TechNotes`、`/docs/Diary`） | |

**規則**：
- 系列 id 資料夾名必須已在 `src/data/catalog.json` 的 `series` 登記。季度資料夾名一律 `2026Q4` 格式（不要寫成 `2026-Q4`，Docusaurus 會把「數字-」當作排序前綴刪掉）。
- **圖片**放在文章所在資料夾的 `img/`，以 `./img/檔名` 引用。Obsidian 已設定（`.obsidian/app.json` 的 `attachmentFolderPath: ./img`）貼圖自動落 `img/`。
- **網址由 YAML `slug` 決定，與資料夾無關。** 2026-11-04 前的舊文已全部釘死原有網址（如 `/TechNotes/xxx`）。新文必須寫 `slug`，建議 `/notes/<english-title>`、`/essays/<english-title>`；這樣日後由獨立篇歸入系列、搬資料夾，網址都不變。沒有 slug 的文章 build 時會出警告。
- 搬文章：連同它在 `img/` 的圖一起搬，並改相對連結；三個語系同步搬。
- 未被任何文章引用的舊圖片已移到 repo 根目錄 `_待確認圖片/`（不會發佈），確認無用後可刪。
- **網址鎖**：`src/data/url-lock.json` 列出所有已發佈網址。任何一個消失（slug 被改／刪、搬檔漏了 slug），`npm run generate` 即失敗。新文章網址自動加入，請連同文章 commit。只有真的下架才手動刪行。
- **AI 助手規則**：全部寫在 repo 根目錄 `GEMINI.md`（Antigravity 每次對話自動載入）。舊的 `.agents/rules/article-publishing.md` 因缺 `trigger` 欄位一直被 Antigravity 靜默忽略，已刪除並併入 GEMINI.md。

### 3.2 `i18n/` — 多語系翻譯

遵循 Docusaurus i18n 標準結構：

```
i18n/<locale>/
├── code.json                                    # UI 字串翻譯
├── docusaurus-plugin-content-docs/current/      # 文章翻譯
├── docusaurus-plugin-content-blog/              # 部落格翻譯（如有）
└── docusaurus-theme-classic/                    # 主題字串翻譯
```

**規則**：翻譯的文章結構必須**鏡像** `docs/` 的目錄結構。

### 3.3 `src/` — 前端程式碼

| 路徑 | 用途 |
|---|---|
| `src/pages/index.tsx` | 首頁（含 `index.module.css`） |
| `src/pages/books.tsx` | 書入口頁（含 `books.module.css`，讀取 `hubs.json`） |
| `src/pages/series.tsx` | 系列入口頁（含 `series.module.css`，讀取 `hubs.json`） |
| `src/pages/essays.tsx` | 散文入口頁（含 `essays.module.css`，讀取 `hubs.json`） |
| `src/components/DiaryList/` | Diary 列表元件 |
| `src/components/TechNotesList/` | TechNotes 列表元件 |
| `src/css/custom.css` | 全域自訂樣式 |
| `src/data/diary.json` | 建置時由 `scripts/generateDiary.js` 生成 |
| `src/data/technotes.json` | 建置時由 `scripts/generateTechNotes.js` 生成 |
| `src/data/catalog.json` | **唯一名稱來源**：書名、系列名、散文組名（三語）、書的章節次序。改名只改這裡 |
| `src/data/hubs.json` | 建置時由 `scripts/generateHubs.js` 生成的彙總資料 |

### 3.4 `static/` — 靜態資源

直接複製到建置輸出的資源。在 markdown 中引用時**不需要** `static/` 前綴。

| 路徑 | 用途 | 引用方式 |
|---|---|---|
| `static/downloads/` | 所有可下載檔案（epub、pdf 等） | `/downloads/GameVictory_EN.epub` |
| `static/img/` | 全站共用圖片（favicon、書封） | `/img/book_cover_invisible_path.jpg` |
| `static/CNAME` | GitHub Pages 自訂域名 | 自動使用 |
| `static/robots.txt` | 搜尋引擎爬蟲規則 | 自動使用 |

### 3.5 `scripts/` — 建置腳本

| 檔案 | 功能 | 呼叫時機 |
|---|---|---|
| `generateHubs.js` | 讀取 `catalog.json` 及文章 YAML，生成 `src/data/hubs.json` 並自我檢查 | `npm run generate`（start / build / deploy 自動執行） |
| `syncSidebarTranslations.js` | 由 `catalog.json` 重寫 `i18n/en`、`i18n/zh-HK` 的 sidebar 書名／系列名翻譯，刪除舊 key | 同上 |
| `lib/catalog.js` | 讀取 catalog 的共用函式 |
| `lib/docs.js` | 掃描文章、由資料夾推出系列與季度的共用函式 |
| `lib/urlLock.js` | 網址鎖：`src/data/url-lock.json` 記錄全部已發佈網址（三語）；網址消失即 build 失敗，新網址自動加入 | 被上述腳本及 `sidebars.js` 引用 |
| `generateTechNotes.js` | 掃描 `docs/notes/` 及清醒記錄系列，生成 `src/data/technotes.json` | `npm start`, `npm build`, `npm deploy` |
| `generateDiary.js` | 掃描 `docs/essays/` 及合法傷害權系列，生成 `src/data/diary.json` | 同上 |
| `fixTags.js` | 修正標籤格式 | 手動執行 |

---

## 4. 關鍵設定檔

| 檔案 | 重點內容 |
|---|---|
| `docusaurus.config.js` | 網站標題、URL、i18n 語系、navbar 項目（書、系列、清醒記錄、散文、關於）、footer、gtag |
| `sidebars.js` | 側邊欄結構，拆分為 9 個獨立 sidebar（`aiTao`, `mirrorRealm`, `gameVictory`, `capitalGame`, `whoCollects`, `aiWar`, `beggarsBowl`, `lucidRecord`, `essays`）；系列與獨立篇、隨筆全部透過動態掃描文章 front matter 生成 |
| `package.json` | `generate` 依序跑 generateTechNotes、generateDiary、generateHubs、syncSidebarTranslations；`start` / `build` / `deploy` 先跑 `generate` |

---

## 5. 文章管理 SOP

### 新增一篇文章（清醒記錄／散文／系列）

1. 決定位置：獨立篇 → `docs/notes/<當季，如 2026Q4>/`；散文 → `docs/essays/<當季>/`；系列文 → `docs/series/<系列 id>/`
2. 填寫 frontmatter（`title`, `date`, **`slug`**, `section`, `topic`, `article_tags`, `summary`...）；系列文加 `series: { order: N }`
3. 圖片放在同資料夾的 `img/`，以 `./img/檔名` 引用
4. 多語版本：在 `i18n/<locale>/docusaurus-plugin-content-docs/current/` 下相同路徑建立翻譯（資料夾、檔名與 docs/ 完全一致）
5. 新系列：先在 `src/data/catalog.json` 的 `series` 登記 id 與三語名稱，再建 `docs/series/<id>/`
6. 執行 `npm run generate` 驗證並更新列表、hubs 及 sidebar 翻譯

### 新增一本書的章節

1. 在 `docs/books/<書>/` 下新增 `chXX.md`（記得寫 `slug`）
2. 在 `src/data/catalog.json` 對應書本的 `chapters` 加入新章節 ID（次序即側欄次序）
3. 圖片放在同資料夾的 `img/`
4. 執行 `npm run generate`（書的入口 = `chapters` 第一項）

---

## 6. 擴充守則：未來新功能模組

### 6.1 通用原則

- **獨立性**：新功能模組不得修改現有 `docs/` 文章的結構或邏輯。
- **隔離性**：新模組的路由、元件、樣式必須自包含，不汙染主站。
- **一致性**：遵循現有的命名風格和資料夾結構。

### 6.2 Forum（討論區）

**建議架構**：

```
src/
├── pages/
│   └── forum/                    # 討論區頁面
│       ├── index.tsx             # 討論區首頁
│       └── forum.module.css      # 討論區樣式
├── components/
│   └── Forum/                    # 討論區專用元件
│       ├── ThreadList.tsx
│       ├── ThreadDetail.tsx
│       └── styles.module.css
```

**規則**：
- Forum 是獨立頁面，放在 `src/pages/forum/` 下，路由為 `/forum`
- Forum 不使用 `docs/` 系統，避免汙染文章的 sidebar 和 autogenerated 索引
- Forum 的 React 元件放在 `src/components/Forum/`
- 若有後端 API，config 放在 `src/data/forum-config.json`
- 在 `docusaurus.config.js` 的 `navbar` 中新增一個 `to: '/forum'` 的項目

### 6.3 AIGame（AI 遊戲）

**建議架構**：

```
src/
├── pages/
│   └── aigame/                   # AI 遊戲頁面
│       ├── index.tsx             # 遊戲首頁/啟動器
│       └── aigame.module.css     # 遊戲樣式
├── components/
│   └── AIGame/                   # 遊戲專用元件
│       ├── GameEngine.tsx
│       ├── GameUI.tsx
│       └── styles.module.css
```

**規則**：
- AIGame 是獨立頁面，放在 `src/pages/aigame/`，路由為 `/aigame`
- AIGame 不使用 `docs/` 系統
- 遊戲的靜態資源（圖片、音效等）放在 `static/aigame/`
- AI 遊戲元件放在 `src/components/AIGame/`
- 若有需要與 LLM API 互動，API key 配置放在 `.env` 中（已在 `.gitignore`）

### 6.4 新功能 Checklist

新增任何模組前，確認：

- [ ] 路由獨立：不影響現有 `/docs/*` 路由
- [ ] 樣式隔離：使用 CSS Modules，不汙染全域 `custom.css`
- [ ] Sidebar 獨立：新模組若在 docs 內，依其領域歸入相應的獨立 sidebar，或配置獨立 sidebar
- [ ] i18n 支援：如需多語，在 `i18n/<locale>/` 下鏡像建立翻譯
- [ ] Navbar 更新：在 `docusaurus.config.js` 加入導覽項目
- [ ] 靜態資源歸位：遊戲/論壇的專屬資源放 `static/<module-name>/`

---

## 7. 命名慣例

| 對象 | 慣例 | 範例 |
|---|---|---|
| docs 子目錄 | 英文 kebab-case；季度 `2026Q4` | `books/ai-tao`, `notes/2026Q4` |
| 章節 markdown | `chXX.md` | `ch01.md`, `ch12b.md` |
| React 元件目錄 | PascalCase | `DiaryList/`, `Forum/` |
| CSS Modules | `*.module.css` | `styles.module.css` |
| 靜態資源子目錄 | kebab-case | `static/downloads/`, `static/aigame/` |
| 圖片檔名 | 描述性 kebab-case（避免 AI hash 名） | `cover-hk.jpg`（理想）vs `Gemini_Generated_Image_xxx.jpg`（現狀，逐步改善） |

---

## 8. Git 規則

- `*.epub` 已在 `.gitignore` 中排除
- `/build/`, `/scratch/`, `/_archive/`, `/.docusaurus/` 均已排除
- 大型二進位檔案（>10MB 的圖片）應考慮壓縮後再提交
- `.env` 檔案不得提交
