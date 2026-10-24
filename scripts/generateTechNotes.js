const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const LOCALE_ROOTS = {
  'zh-Hant': 'docs',
  'zh-HK': 'i18n/zh-HK/docusaurus-plugin-content-docs/current',
  'en': 'i18n/en/docusaurus-plugin-content-docs/current'
};

// Folders (relative to each locale root) whose articles appear in the
// Lucid Record preview grid. Series published elsewhere in docs/ can be
// listed here; their ids get a prefix so they never collide with TechNotes.
const SOURCES = [
  { dir: 'TechNotes', idPrefix: '' },
  { dir: 'capital-game/從乞丐碗裡搶飯', idPrefix: 'beggars-bowl/' },
];

const outputData = {
  'zh-Hant': [],
  'zh-HK': [],
  'en': []
};

const projectRoot = path.resolve(__dirname, '..');

// A frontmatter slug is relative to the docs route (/docs).
function toDocsUrl(slug) {
  const s = slug.startsWith('/') ? slug : `/${slug}`;
  return s.startsWith('/docs/') ? s : `/docs${s}`;
}

for (const [locale, localeRoot] of Object.entries(LOCALE_ROOTS)) {
for (const source of SOURCES) {
  const dirPath = path.join(projectRoot, localeRoot, source.dir);
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    continue;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  for (const file of files) {
    if (file === 'index.mdx' || file === 'index.md') continue;

    // Skip orphan i18n files that have no counterpart in default locale docs/
    if (locale !== 'zh-Hant') {
      const defaultLocalePath = path.join(projectRoot, LOCALE_ROOTS['zh-Hant'], source.dir, file);
      if (!fs.existsSync(defaultLocalePath)) {
        console.warn(`[WARN] Skipping orphan i18n file without default locale counterpart: ${locale}/${source.dir}/${file}`);
        continue;
      }
    }

    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(content);
    
    // Ignore category index or info pages if needed, but we will list everything that has a title.
    if (parsed.data.title) {
      // Calculate id / slug based on filename, same as Docusaurus defaults
      let id = parsed.data.id || file.replace(/\.mdx?$/, '');
      if (!parsed.data.id) {
        id = id.replace(/^\d{4}-\d{2}-\d{2}[-_]/, '').replace(/^\d{8}[-_]/, '');
        id = id.replace(/^\d+[-_]/, '');
      }
      const slug = parsed.data.slug
        ? toDocsUrl(parsed.data.slug)
        : `/docs/${source.dir}/${encodeURIComponent(id)}`;
      id = source.idPrefix + id;
      
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
        series: parsed.data.series || null,
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
