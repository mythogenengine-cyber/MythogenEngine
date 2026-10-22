/**
 * lang-hint.js — "This page is also available in English." banner.
 *
 * Shown only when ALL of the following hold:
 *   a. no entry in navigator.languages starts with "zh"
 *   b. the current path is not under /en/
 *   c. localStorage["mythogen_lang_hint"] !== "dismissed"
 *
 * The banner is inserted as the first child of <body>, i.e. OUTSIDE the
 * React root (#__docusaurus), so it never interferes with hydration and
 * never covers the sticky navbar (it sits above it and scrolls away).
 *
 * Docusaurus is an SPA, so we re-evaluate on history.pushState /
 * replaceState, popstate and hashchange.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'mythogen_lang_hint';
  var HINT_ID = 'mythogen-lang-hint';
  var LINK_ID = 'mythogen-lang-hint-link';
  var CLOSE_ID = 'mythogen-lang-hint-close';
  var STYLE_ID = 'mythogen-lang-hint-styles';

  var CSS = [
    '#' + HINT_ID + '{',
    '  position:relative;z-index:199;width:100%;box-sizing:border-box;',
    '  background:linear-gradient(90deg,rgba(0,243,255,.10),rgba(182,0,248,.10)),#0e0e0e;',
    '  border-bottom:1px solid rgba(0,243,255,.25);',
    '  color:#e5e2e1;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;',
    '  font-size:.875rem;line-height:1.4;',
    '}',
    '#' + HINT_ID + ' .lh-inner{',
    '  max-width:1400px;margin:0 auto;box-sizing:border-box;',
    '  padding:8px 48px;min-height:40px;',
    '  display:flex;flex-wrap:wrap;align-items:center;justify-content:center;',
    '  gap:4px 12px;text-align:center;position:relative;',
    '}',
    '#' + HINT_ID + ' .lh-text{font-weight:300;letter-spacing:.02em;min-width:0;overflow-wrap:anywhere;}',
    '#' + HINT_ID + ' a{',
    '  color:#00f3ff;font-weight:500;text-decoration:none;white-space:nowrap;',
    '  transition:color .2s ease;',
    '}',
    '#' + HINT_ID + ' a:hover,#' + HINT_ID + ' a:focus-visible{color:#73faff;text-decoration:underline;}',
    '#' + HINT_ID + ' button{',
    '  position:absolute;right:8px;top:50%;transform:translateY(-50%);',
    '  width:32px;height:32px;padding:0;border:0;border-radius:6px;',
    '  background:transparent;color:#b9cacb;font-size:1.4rem;line-height:1;cursor:pointer;',
    '  transition:color .2s ease,background .2s ease;',
    '}',
    '#' + HINT_ID + ' button:hover,#' + HINT_ID + ' button:focus-visible{color:#fff;background:rgba(255,255,255,.1);}',
    '[data-theme="light"] #' + HINT_ID + '{',
    '  background:linear-gradient(90deg,rgba(0,171,183,.10),rgba(182,0,248,.08)),#f6f7f8;',
    '  color:#1c1b1b;border-bottom-color:rgba(0,171,183,.35);',
    '}',
    '[data-theme="light"] #' + HINT_ID + ' a{color:#00808a;}',
    '[data-theme="light"] #' + HINT_ID + ' button{color:#444;}',
    '@media (max-width:600px){',
    '  #' + HINT_ID + '{font-size:.8125rem;}',
    '  #' + HINT_ID + ' .lh-inner{padding:6px 44px 6px 12px;}',
    '}',
  ].join('\n');

  function hasChineseLanguage() {
    try {
      var langs = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ''];
      for (var i = 0; i < langs.length; i++) {
        if (String(langs[i] || '').toLowerCase().indexOf('zh') === 0) return true;
      }
    } catch (e) {}
    return false;
  }

  function isEnglishPath() {
    var p = window.location.pathname || '/';
    return p === '/en' || p.indexOf('/en/') === 0;
  }

  function isDismissed() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'dismissed';
    } catch (e) {
      return false;
    }
  }

  function setDismissed() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'dismissed');
    } catch (e) {}
  }

  function getEnglishUrl() {
    var p = window.location.pathname || '/';
    if (p === '/zh-HK') p = '/';
    else if (p.indexOf('/zh-HK/') === 0) p = p.slice('/zh-HK'.length);
    var enPath = p === '/' ? '/en/' : '/en' + p;
    return enPath + (window.location.search || '') + (window.location.hash || '');
  }

  function shouldShow() {
    return !hasChineseLanguage() && !isEnglishPath() && !isDismissed();
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function removeBanner() {
    var el = document.getElementById(HINT_ID);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function createBanner() {
    var el = document.createElement('div');
    el.id = HINT_ID;
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Language');
    el.setAttribute('lang', 'en');

    var inner = document.createElement('div');
    inner.className = 'lh-inner';

    var text = document.createElement('span');
    text.className = 'lh-text';
    text.textContent = 'This page is also available in English.';

    var link = document.createElement('a');
    link.id = LINK_ID;
    link.hreflang = 'en';
    link.textContent = 'Read in English \u2192';
    // Full page navigation to /en/... (outside React router); remember choice.
    link.addEventListener('click', setDismissed);

    var close = document.createElement('button');
    close.id = CLOSE_ID;
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss');
    close.textContent = '\u00d7';
    close.addEventListener('click', function () {
      setDismissed();
      removeBanner();
    });

    inner.appendChild(text);
    inner.appendChild(link);
    inner.appendChild(close);
    el.appendChild(inner);
    return el;
  }

  function update() {
    if (!document.body) return;
    if (!shouldShow()) {
      removeBanner();
      return;
    }
    injectStyles();
    var el = document.getElementById(HINT_ID);
    if (!el) {
      el = createBanner();
      document.body.insertBefore(el, document.body.firstChild);
    }
    document.getElementById(LINK_ID).href = getEnglishUrl();
  }

  function scheduleUpdate() {
    setTimeout(update, 0);
  }

  // Hook SPA navigation as early as possible (before React's router loads).
  ['pushState', 'replaceState'].forEach(function (method) {
    var orig = window.history && window.history[method];
    if (typeof orig !== 'function') return;
    window.history[method] = function () {
      var result = orig.apply(this, arguments);
      scheduleUpdate();
      return result;
    };
  });
  window.addEventListener('popstate', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', update);
  } else {
    update();
  }
})();
