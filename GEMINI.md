# Mythogen Engine 網站：AI 助手必讀規則

本檔每次對話都會自動載入（Antigravity / Gemini 會讀 repo 根目錄的 GEMINI.md）。所有規則以本檔為準；`architecture.md` 是詳細說明。

## 0. 每次動手前

1. 先執行 `Get-Location` 和 `git branch --show-current`，確認在 `D:\Note\BLOG` 及正確分支。
2. 只做用戶明確要求的事。不要「順手」整理、改名、搬檔、修格式或修連結。
3. 列出的檔案清單、統計數字，一律貼腳本或指令的原始輸出，不要自己整理或估計。

## 1. 絕對不可以做

- **不可改動或刪除任何現有文章 YAML 的 `slug`。** 網址已被 Google 收錄；`src/data/url-lock.json` 會檢查，網址消失 build 即失敗。
- **不可手動編輯 `src/data/url-lock.json`**，除非用戶明確說要下架某篇文章。
- 不可搬動、改名現有文章或資料夾（`docs/books/`、`docs/series/`、`docs/notes/`、`docs/finance/`、`docs/essays/` 及 i18n 對應位置），除非用戶明確要求。
- 不可在 `sidebars.js`、`scripts/*.js`、`src/pages/*.tsx`、`i18n/*/docusaurus-plugin-content-docs/current.json` 寫死書名或系列名。名稱只在 `src/data/catalog.json`。
- 不可手動編輯自動生成的檔案：`src/data/hubs.json`、`finance.json`、`technotes.json`、`diary.json`。改來源（文章 YAML、catalog.json），再 `npm run generate`。
- 不可執行 `scripts/archive/` 內的腳本（舊路徑，會在錯誤位置建檔）。
- 不可刪除 `_待確認圖片/` 內的圖片，除非用戶明確要求。

## 2. 資料夾 = 網站分類

| 位置 | 內容 | 網站上出現在 |
|---|---|---|
| `docs/books/<書>/` | 書的章節（章節次序在 `src/data/catalog.json` 的 `chapters`） | 書 |
| `docs/series/<系列 id>/` | 系列文章；資料夾即系列，YAML 只寫 `series: { order: N }`（0 = 導讀頁） | 系列 |
| `docs/notes/<2026Q4>/` | 清醒記錄獨立篇；資料夾即季度 | 清醒記錄 → 獨立篇 |
| `docs/finance/<財經系列 id>/` | 財經學習；資料夾即財經系列，YAML 只寫 `series: { order: N }` | 財經學習（/finance） |
| `docs/essays/<2026Q4>/` | 散文隨筆；`docs/essays/seven-days/` 為七日書 | 散文 |

- 季度資料夾一律寫 `2026Q4`，**不可寫 `2026-Q4`**（Docusaurus 會把「數字-」當排序前綴刪掉）。
- 新系列：先在 `src/data/catalog.json` 的 `series` 登記 id 和三語名稱，再建 `docs/series/<id>/`。
- 新財經系列：先在 `src/data/catalog.json` 的 `finance` 登記 id 和名稱，再建 `docs/finance/<id>/`。現有財經系列：`ai-in-financial-statements`（財報裡的 AI）。
- 一篇文同時屬於兩個系列：文章只放一個資料夾（主位），YAML 加 `also_in: { series: <系列 id>, order: N }`，另一個系列的側欄和 /series 頁會自動加連結。不要複製文章。
- 圖片放在文章所在資料夾的 `img/`，以 `./img/檔名` 引用。

## 3. 新增文章

1. 按上表決定資料夾（清醒記錄獨立篇放當季，如 `docs/notes/2026Q4/`）。
2. YAML 必須有：`title`、`date`（YYYY-MM-DD）、**`slug`**、`lang`、`section`、`topic`、`category`、`article_tags`（zh 與 en）、`keywords`、`summary`、`status: published`、`reading_time`。
   - `slug` 用英文，例如 `slug: /notes/english-title`、`slug: /essays/english-title`、`slug: /finance/english-title`。
   - 財經學習：`section: finance`。
   - `category` 只可用六個之一：`資本與退出機制`、`半導體週期`、`平台與分發`、`產業與資本競爭`、`認知與敘事`、`教育與勞動`。
   - 系列文加 `series: { order: N }`，不寫 series 的 id 或 name。
   - 作者署名一律寫「@Mythogen Engine」，不可簡寫成「@Mythogen」。
3. 翻譯：`i18n/zh-HK/docusaurus-plugin-content-docs/current/` 與 `i18n/en/docusaurus-plugin-content-docs/current/` 下建立**完全相同路徑、相同檔名**的檔案（`lang: zh-HK` / `lang: en`），`slug` 與原文相同。

## 4. 完成後必做

1. 執行 `npm run build`。
2. 把最後約 30 行輸出**原樣**貼給用戶。必須看到三行 `[SUCCESS] Generated static files`。
3. 出現以下任何一項，停下來報告，不要自行「修正」：
   - `[Self-Check ERROR]`（例如網址消失、系列未登記）
   - `[WARN]`：文章沒有 slug、季度資料夾與日期不符
   - 新增的 `Broken link`
4. `src/data/url-lock.json` 若新增了網址（新文章），連同文章一起 commit。
