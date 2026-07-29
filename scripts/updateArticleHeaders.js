const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  const day = String(d.getUTCDate()).padStart(2, '0');
  const mon = months[d.getUTCMonth()];
  const yr = d.getUTCFullYear();
  return day + mon + yr;
}

function scanDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else if ((file.endsWith('.md') || file.endsWith('.mdx')) && !file.endsWith('index.mdx')) {
      results.push(fullPath);
    }
  });
  return results;
}

function processRawFile(filePath) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(rawContent);
  const data = parsed.data;
  if (!data || !data.date) return null;

  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatterStr = match[1];
  const bodyStr = match[2];

  const isEn = filePath.includes(path.sep + 'en' + path.sep) || data.lang === 'en';
  const formattedDate = formatDate(data.date);
  const summary = (data.summary || data.description || '').trim();

  const authorLine = isEn ? 'Author: Nebula Walker' : '作者：星忘塵 Nebula Walker';
  const dateLine = 'Date: ' + formattedDate;
  const brandLine = isEn ? 'MYTHOGEN ENGINE (mythogenengine.com)' : '創象引擎 Mythogen Engine (mythogenengine.com)';

  const headerBlockLines = [authorLine, dateLine, brandLine];
  const summaryLine = summary ? '**📌 ' + summary + '**' : '';

  let bodyLines = bodyStr.split(/\r?\n/);

  let newBodyLines = [];
  let leadingImages = [];
  let inLeading = true;

  for (let i = 0; i < bodyLines.length; i++) {
    const line = bodyLines[i];
    const trimmed = line.trim();

    if (inLeading && (trimmed.startsWith('!['))) {
      leadingImages.push(line);
      continue;
    }

    const isHeaderLine = 
      trimmed.startsWith('作者：') ||
      trimmed.startsWith('Author:') ||
      trimmed.startsWith('Date:') ||
      trimmed.includes('創象引擎') ||
      trimmed.includes('MYTHOGEN ENGINE') ||
      trimmed.includes('Mythogen Engine') ||
      trimmed.startsWith('**星忘塵') ||
      trimmed.startsWith('*創象引擎');

    const isSummaryLine = trimmed.startsWith('**📌') || trimmed.startsWith('📌');

    if (isHeaderLine || isSummaryLine) {
      continue;
    }

    if (trimmed !== '') {
      inLeading = false;
    }

    newBodyLines.push(line);
  }

  while (newBodyLines.length > 0 && newBodyLines[0].trim() === '') {
    newBodyLines.shift();
  }

  let assembledBody = [];
  if (leadingImages.length > 0) {
    assembledBody.push(...leadingImages);
    assembledBody.push('');
  }
  assembledBody.push(...headerBlockLines);
  assembledBody.push('');
  if (summaryLine) {
    assembledBody.push(summaryLine);
    assembledBody.push('');
  }
  assembledBody.push(...newBodyLines);

  return '---\n' + frontmatterStr + '\n---\n' + assembledBody.join('\n');
}

const allFiles = [...scanDir('docs'), ...scanDir('i18n')];
let updatedCount = 0;

allFiles.forEach(f => {
  const newContent = processRawFile(f);
  if (newContent !== null) {
    fs.writeFileSync(f, newContent, 'utf-8');
    updatedCount++;
    console.log(`Updated [${updatedCount}]: ${f}`);
  }
});

console.log(`\nSuccessfully updated ${updatedCount} article files.`);
