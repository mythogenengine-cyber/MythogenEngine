---
description: Rules for creating, publishing, and updating articles to ensure they appear on PREVIEW PAGES (TechNotes & Diary list pages)
globs: docs/TechNotes/**/*.md, docs/Diary/**/*.md, i18n/**/*.md
---

# Article Publishing & PREVIEW PAGES Rule

Whenever a new article or note is added or updated in `docs/TechNotes/` or `docs/Diary/`:

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
     - `node scripts/generateTechNotes.js` (for TechNotes)
     - `node scripts/generateDiary.js` (for Diary)
   - This updates `src/data/technotes.json` / `diary.json` so the article properly displays on the PREVIEW PAGES (e.g. the `/docs/TechNotes` card grid with category filter, search, reading time, and preview excerpt).
   - If preview images are provided or needed, place them in the corresponding `images/` directory and configure them in markdown.
