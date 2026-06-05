const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const targetDirs = {
  'zh-Hant': 'docs/Diary',
  'zh-HK': 'i18n/zh-HK/docusaurus-plugin-content-docs/current/Diary',
  'en': 'i18n/en/docusaurus-plugin-content-docs/current/Diary'
};

const outputData = {
  'zh-Hant': [],
  'zh-HK': [],
  'en': []
};

const projectRoot = path.resolve(__dirname, '..');

for (const [locale, relativePath] of Object.entries(targetDirs)) {
  const dirPath = path.join(projectRoot, relativePath);
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    continue;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  for (const file of files) {
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
      const slug = parsed.data.slug || `/docs/Diary/${encodeURIComponent(id)}`;
      
      outputData[locale].push({
        id,
        slug,
        title: parsed.data.title,
        date: parsed.data.date || null,
        lang: parsed.data.lang || locale,
        section: parsed.data.section || 'freewrite',
        topic: parsed.data.topic || '',
        tags: parsed.data.article_tags || {},
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
    // If date exists, sort descending
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    // Fallback to sidebar position if available
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
