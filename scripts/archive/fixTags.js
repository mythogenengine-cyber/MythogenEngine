const fs = require('fs');
const path = require('path');

const targetDirs = [
  'docs/TechNotes',
  'i18n/zh-HK/docusaurus-plugin-content-docs/current/TechNotes',
  'i18n/en/docusaurus-plugin-content-docs/current/TechNotes'
];

const projectRoot = path.resolve(__dirname, '..');

for (const relativePath of targetDirs) {
  const dirPath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Only replace the top level tags field in the YAML
    // Using a regex to match the tags: line at the start of the line inside YAML
    content = content.replace(/^tags:\s*$/m, 'article_tags:');
    
    fs.writeFileSync(filePath, content);
  }
}

console.log('Renamed tags to article_tags in all markdown files');
