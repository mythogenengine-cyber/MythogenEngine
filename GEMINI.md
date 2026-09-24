# Blog Article Publishing & PREVIEW Guidelines

Whenever a new article is added or edited in this workspace (`docs/TechNotes/` or `docs/Diary/`):

1. **YAML Frontmatter**:
   - Must have a suitable YAML header including `title`, `date`, `lang`, `section`, `topic`, `category`, `article_tags` (zh & en), `keywords`, `summary`, `status: published`, `reading_time`.
   - Category must be one of the six categories: `資本與退出機制`, `半導體週期`, `平台與分發`, `產業與資本競爭`, `認知與敘事`, `教育與勞動`.

2. **i18n Translation & Sync**:
   - `zh-HK`: `i18n/zh-HK/docusaurus-plugin-content-docs/current/...` (copy/localize with `lang: zh-HK`).
   - `en`: `i18n/en/docusaurus-plugin-content-docs/current/...` (fluent English translation with `lang: en`).
   - Filenames must match `docs/` exactly.

3. **PREVIEW PAGES (Preview List / Grid)**:
   - Always run `node scripts/generateTechNotes.js` (and `node scripts/generateDiary.js` if diary) to regenerate `src/data/technotes.json` and ensure the article appears with preview card, excerpt, and category filter on `/docs/TechNotes`.
   - If preview images are needed, configure them in `images/` directory.
