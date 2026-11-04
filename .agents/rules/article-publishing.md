---
description: Rules for creating, publishing, and updating articles to ensure they appear on PREVIEW PAGES (TechNotes & Diary list pages)
globs: docs/**/*.md, i18n/**/*.md
---

# Article Publishing & PREVIEW PAGES Rule

Whenever a new article or note is added or updated in `docs/notes/`, `docs/essays/`, `docs/series/` or `docs/books/`:

1. **Complete Frontmatter (YAML Header)**:
   - Every article MUST contain a complete YAML header with:
     - `title`: Article title
     - `date`: Publication date (`YYYY-MM-DD`)
     - `lang`: `zh-Hant` for default docs, `zh-HK` for HK, `en` for English
     - `section`: Section identifier (e.g. `sober-record`)
     - `topic`: Topic identifier (e.g. `t-education`, `platform-silencing`, etc.)
     - `category`: Must match one of the 6 main categories (`資本與退出機制`, `半導體週期`, `平台與分發`, `產業與資本競爭`, `認知與敘事`, `教育與勞動`)
     - `article_tags`: Both `zh` and `en` arrays
     - `keywords`: Array of search keywords
     - `summary`: Concise summary for preview cards / excerpts
     - `status`: `published` (or `draft`)
     - `reading_time`: Estimated reading time in minutes

2. **i18n Synchronization**:
   - Always generate the corresponding locale files:
     - `i18n/zh-HK/docusaurus-plugin-content-docs/current/...` (HK copy / localization with `lang: zh-HK`)
     - `i18n/en/docusaurus-plugin-content-docs/current/...` (English translation with `lang: en`)
   - The file path and file name MUST strictly match the default locale file in `docs/`.

3. **Mandatory PREVIEW PAGES Update**:
   - Whenever an article is created or updated, ALWAYS execute:
     - `npm run generate`
   - This updates `src/data/technotes.json` / `diary.json` so the article properly displays on the PREVIEW PAGES (e.g. the `/docs/TechNotes` card grid with category filter, search, reading time, and preview excerpt).
   - Images go in the `img/` subfolder next to the article.

4. **Series, Books & Hubs Registration**:
   - Folder decides where it appears: standalone 清醒記錄 → `docs/notes/<2026Q4>/`; essays → `docs/essays/<2026Q4>/`; series article → `docs/series/<series-id>/` (YAML `series: { order: N }`, no id — the folder is the series).
   - Every new article MUST have `slug` in YAML (e.g. `slug: /notes/english-title`). URLs come from slug, never from the folder.
   - Images go in the `img/` subfolder of the article's folder, referenced as `./img/name.png`.
   - 系列名只在 `src/data/catalog.json`；YAML 不寫 series name／id。
   - 書名、系列名、散文組名、書的章節次序：只改 `src/data/catalog.json`。不要在 `sidebars.js`、`generateHubs.js`、`i18n/*/current.json`、頁面 tsx 寫死名稱。
   - 新系列：先在 `catalog.json` 的 `series` 加 id 與三語名稱，否則 build 報錯。
   - 執行 `npm run generate` 重新生成 hubs.json 及英文／港版 sidebar 翻譯，所有導航頁（`/books`, `/series`, `/essays`）自動同步。
