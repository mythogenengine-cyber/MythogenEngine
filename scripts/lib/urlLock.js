// 網址鎖：src/data/url-lock.json 記錄所有已發佈文章的網址（三個語系）。
// 每次 npm run generate 檢查：
//   - 鎖內任何網址消失（有人改了／刪了 slug，或搬檔時漏了 slug）→ build 失敗
//   - 新文章的網址 → 自動加入鎖（記得連同 url-lock.json 一起 commit）
// 真的要下架或改網址：先在 url-lock.json 刪掉該行，並在 commit 訊息說明。
const fs = require('fs');
const path = require('path');
const { projectRoot, LOCALE_ROOTS, listDocs, slugToUrl } = require('./docs');

const LOCK_PATH = path.join(projectRoot, 'src', 'data', 'url-lock.json');

// 每篇 zh-Hant 文章在三個語系都會出一頁；有譯本就用譯本的 slug，否則沿用原文
function urlOf(doc) {
  const url = doc.data.slug
    ? slugToUrl(doc.data.slug)
    : '/docs/' + doc.docId.split('/').map(encodeURIComponent).join('/');
  return decodeURIComponent(url).replace(/\/+$/, '');
}

function currentUrls() {
  const urls = new Map(); // url -> 檔案
  const translated = {};
  for (const locale of Object.keys(LOCALE_ROOTS)) {
    if (locale === 'zh-Hant') continue;
    translated[locale] = new Map(listDocs('', { locale, includeIndex: true }).map((d) => [d.rel, d]));
  }
  for (const doc of listDocs('', { includeIndex: true })) {
    urls.set(urlOf(doc), `docs/${doc.rel}`);
    for (const locale of Object.keys(translated)) {
      const tr = translated[locale].get(doc.rel);
      urls.set(`/${locale}` + urlOf(tr || doc), tr ? `${LOCALE_ROOTS[locale]}/${doc.rel}` : `docs/${doc.rel}`);
    }
  }
  return urls;
}

function checkUrlLock() {
  const urls = currentUrls();
  const lock = fs.existsSync(LOCK_PATH) ? JSON.parse(fs.readFileSync(LOCK_PATH, 'utf8')) : { urls: [] };
  const locked = new Set(lock.urls);

  const missing = [...locked].filter((u) => !urls.has(u));
  if (missing.length > 0) {
    console.error(
      `\n[Self-Check ERROR] 以下已發佈網址消失了（slug 被改或刪、或搬檔時漏了 slug）。Google 已收錄這些網址，不可改動：\n` +
        missing.map((u) => '  - ' + u).join('\n') +
        `\n修正方法：把原來的 slug 加回對應文章的 YAML。真的要下架，才在 src/data/url-lock.json 刪掉該行。\n`
    );
    process.exit(1);
  }

  const added = [...urls.keys()].filter((u) => !locked.has(u)).sort();
  if (added.length > 0) {
    lock.urls = [...locked, ...added].sort();
    lock._說明 =
      '已發佈網址清單（由 scripts/lib/urlLock.js 自動維護）。新文章網址會自動加入；清單內網址消失會令 build 失敗。只有真的下架時才手動刪行。';
    fs.writeFileSync(LOCK_PATH, JSON.stringify({ _說明: lock._說明, urls: lock.urls }, null, 2) + '\n', 'utf8');
    console.log(`[url-lock] 新增 ${added.length} 個網址到 src/data/url-lock.json（請一併 commit）：\n${added.slice(0, 20).map((u) => '  + ' + u).join('\n')}${added.length > 20 ? '\n  …' : ''}`);
  }
  console.log(`[Self-Check] 網址鎖 PASSED：${lock.urls.length} 個已發佈網址全部存在。`);
}

module.exports = { checkUrlLock, currentUrls };
