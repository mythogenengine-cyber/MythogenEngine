const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { listDocs, seriesIdOf, slugToUrl } = require('./lib/docs');

const LOCALE_ROOTS = {
  'zh-Hant': 'docs',
  'zh-HK': 'i18n/zh-HK/docusaurus-plugin-content-docs/current',
  'en': 'i18n/en/docusaurus-plugin-content-docs/current'
};

// Folders or files (relative to each locale root) whose articles appear in the
// Lucid Record preview grid. Series published elsewhere in docs/ can be
// listed here; their ids get a prefix so they never collide with TechNotes.
const SOURCES = [
  { dir: 'notes', idPrefix: '' },
  { dir: 'series/memory-series', idPrefix: '' },
  { dir: 'series/efficiency-trap-cognition-erosion', idPrefix: '' },
  { dir: 'series/platform-silencing', idPrefix: '' },
  { dir: 'series/attenuation-visibility', idPrefix: '' },
  { dir: 'series/exit-mechanism', idPrefix: '' },
  { dir: 'series/beggars-bowl', idPrefix: 'beggars-bowl/' },
];

const outputData = {
  'zh-Hant': [],
  'zh-HK': [],
  'en': []
};

const projectRoot = path.resolve(__dirname, '..');

for (const [locale, localeRoot] of Object.entries(LOCALE_ROOTS)) {
  for (const source of SOURCES) {
    const fileEntries = listDocs(source.dir, { locale }).map((d) => ({
      fileName: path.basename(d.rel),
      filePath: d.full,
      sourceDir: path.dirname(d.rel),
      defaultLocalePath: path.join(projectRoot, LOCALE_ROOTS['zh-Hant'], d.rel),
    }));
    for (const entry of fileEntries) {
      // Skip orphan i18n files that have no counterpart in default locale docs/
      if (locale !== 'zh-Hant') {
        if (!fs.existsSync(entry.defaultLocalePath)) {
          console.warn(`[WARN] Skipping orphan i18n file without default locale counterpart: ${locale}/${entry.sourceDir}/${entry.fileName}`);
          continue;
        }
      }

      const content = fs.readFileSync(entry.filePath, 'utf-8');
      const parsed = matter(content);

      // Ignore category index or info pages if needed, but we will list everything that has a title.
      if (parsed.data.title) {
        // Calculate id / slug based on filename, same as Docusaurus defaults
        let id = parsed.data.id || entry.fileName.replace(/\.mdx?$/, '');
        if (!parsed.data.id) {
          id = id.replace(/^\d{4}-\d{2}-\d{2}[-_]/, '').replace(/^\d{8}[-_]/, '');
          id = id.replace(/^\d+[-_]/, '');
        }
        const slug = parsed.data.slug
          ? slugToUrl(parsed.data.slug)
          : `/docs/${entry.sourceDir}/${encodeURIComponent(id)}`;
        id = (source.idPrefix || '') + id;

        outputData[locale].push({
          id,
          slug,
          title: parsed.data.title,
          date: parsed.data.date || null,
          lang: parsed.data.lang || locale,
          section: parsed.data.section || 'sober-record',
          topic: parsed.data.topic || '',
          category: parsed.data.category || '',
          tags: parsed.data.article_tags || parsed.data.tags || {},
          keywords: parsed.data.keywords || [],
          summary: parsed.data.summary || '',
          status: parsed.data.status || 'draft',
          reading_time: parsed.data.reading_time || 0,
          sidebar_position: parsed.data.sidebar_position,
          series: parsed.data.series ? { ...parsed.data.series, id: seriesIdOf(path.relative(path.join(projectRoot, localeRoot), entry.filePath).split(path.sep).join('/')) } : null,
        });
      }
    }
  }

  // Sort by date descending, or by sidebar_position
  outputData[locale].sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    if (timeA !== timeB) {
      return timeB - timeA;
    }
    // Same day, same series: keep reading order (prologue before finale).
    if (a.series && b.series && a.series.id === b.series.id) {
      return (a.series.order || 0) - (b.series.order || 0);
    }
    if (a.sidebar_position !== undefined && b.sidebar_position !== undefined) {
      return a.sidebar_position - b.sidebar_position;
    }
    return 0;
  });
}

const outDir = path.join(projectRoot, 'src', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outPath = path.join(outDir, 'technotes.json');
fs.writeFileSync(outPath, JSON.stringify(outputData, null, 2));

console.log(`Successfully generated technotes metadata at ${outPath}`);
