const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { listDocs, LOCALE_ROOTS, slugToUrl } = require('./lib/docs');

// 散文列表：docs/essays/（七日書、各季隨筆）＋ docs/series/legal-harm/
const SOURCES = ['essays', 'series/legal-harm'];

const outputData = {
  'zh-Hant': [],
  'zh-HK': [],
  'en': []
};

const projectRoot = path.resolve(__dirname, '..');

for (const locale of Object.keys(LOCALE_ROOTS)) {
  for (const d of SOURCES.flatMap((dir) => listDocs(dir, { locale }))) {
    const file = path.basename(d.rel);

    // Skip orphan i18n files that have no counterpart in default locale docs/
    if (locale !== 'zh-Hant' && !fs.existsSync(path.join(projectRoot, LOCALE_ROOTS['zh-Hant'], d.rel))) {
      console.warn(`[WARN] Skipping orphan i18n file without default locale counterpart: ${locale}/${d.rel}`);
      continue;
    }

    const filePath = d.full;
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
      const slug = parsed.data.slug ? slugToUrl(parsed.data.slug) : `/docs/${encodeURIComponent(d.docId).replace(/%2F/g, '/')}`;
      
      outputData[locale].push({
        id,
        slug,
        title: parsed.data.title,
        date: parsed.data.date || null,
        lang: parsed.data.lang || locale,
        section: parsed.data.section || 'freewrite',
        topic: parsed.data.topic || '',
        category: parsed.data.category || '',
        tags: parsed.data.article_tags || parsed.data.tags || {},
        keywords: parsed.data.keywords || [],
        summary: parsed.data.summary || '',
        status: parsed.data.status || 'draft',
        reading_time: parsed.data.reading_time || 0,
        sidebar_position: parsed.data.sidebar_position,
      });
    }
  }

  // Sort by date descending, or by sidebar_position
  outputData[locale].sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    if (timeA !== timeB) {
      return timeB - timeA;
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

const outPath = path.join(outDir, 'diary.json');
fs.writeFileSync(outPath, JSON.stringify(outputData, null, 2));

console.log(`Successfully generated diary metadata at ${outPath}`);
