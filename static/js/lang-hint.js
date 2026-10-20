(function () {
  'use strict';

  var STORAGE_KEY = 'mythogen_lang_hint';
  var HINT_ID = 'mythogen-lang-hint';
  var STYLE_ID = 'mythogen-lang-hint-styles';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      '.mythogen-lang-hint {',
      '  position: sticky;',
      '  top: 60px;',
      '  z-index: 99;',
      '  width: 100%;',
      '  box-sizing: border-box;',
      '  background: rgba(14, 14, 14, 0.96);',
      '  backdrop-filter: blur(12px);',
      '  -webkit-backdrop-filter: blur(12px);',
      '  border-bottom: 1px solid rgba(0, 243, 255, 0.25);',
      '  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);',
      '  color: #e5e2e1;',
      '  font-family: var(--ifm-font-family-base, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);',
      '  font-size: 0.85rem;',
      '  line-height: 1.4;',
      '}',
      '.mythogen-lang-hint-inner {',
      '  max-width: 1400px;',
      '  margin: 0 auto;',
      '  padding: 8px 44px 8px 16px;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  gap: 12px;',
      '  flex-wrap: wrap;',
      '  text-align: center;',
      '  position: relative;',
      '  min-height: 38px;',
      '  box-sizing: border-box;',
      '}',
      '.mythogen-lang-hint-text {',
      '  color: #e5e2e1;',
      '  font-weight: 300;',
      '  letter-spacing: 0.02em;',
      '}',
      '.mythogen-lang-hint-link {',
      '  color: #00f3ff;',
      '  font-weight: 500;',
      '  text-decoration: none;',
      '  display: inline-flex;',
      '  align-items: center;',
      '  gap: 4px;',
      '  white-space: nowrap;',
      '  transition: color 0.2s ease, text-decoration 0.2s ease;',
      '}',
      '.mythogen-lang-hint-link:hover {',
      '  color: #73faff;',
      '  text-decoration: underline;',
      '}',
      '.mythogen-lang-hint-close {',
      '  position: absolute;',
      '  right: 12px;',
      '  top: 50%;',
      '  transform: translateY(-50%);',
      '  background: transparent;',
      '  border: none;',
      '  color: #b9cacb;',
      '  font-size: 1.35rem;',
      '  line-height: 1;',
      '  cursor: pointer;',
      '  padding: 4px 8px;',
      '  border-radius: 4px;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  transition: color 0.2s ease, background 0.2s ease;',
      '}',
      '.mythogen-lang-hint-close:hover {',
      '  color: #ffffff;',
      '  background: rgba(255, 255, 255, 0.1);',
      '}',
      '@media (max-width: 600px) {',
      '  .mythogen-lang-hint-inner {',
      '    padding: 6px 38px 6px 12px;',
      '    gap: 4px 8px;',
      '    font-size: 0.8rem;',
      '  }',
      '  .mythogen-lang-hint-link {',
      '    font-size: 0.8rem;',
      '  }',
      '}'
    ].join('\n');

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  function hasChineseLanguage() {
    try {
      // Testing helpers: ?test_lang=en or window.__MYTHOGEN_LANG_OVERRIDE__ = 'en'
      if (typeof window !== 'undefined' && window.__MYTHOGEN_LANG_OVERRIDE__) {
        return window.__MYTHOGEN_LANG_OVERRIDE__.toLowerCase().indexOf('zh') === 0;
      }
      if (typeof window !== 'undefined' && window.location && window.location.search) {
        var testParam = new URLSearchParams(window.location.search).get('test_lang');
        if (testParam === 'en') return false;
        if (testParam && testParam.toLowerCase().indexOf('zh') === 0) return true;
      }

      var langs = (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || ''];

      for (var i = 0; i < langs.length; i++) {
        var lang = String(langs[i] || '').toLowerCase().trim();
        if (lang.indexOf('zh') === 0) {
          return true;
        }
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  function isEnglishPath() {
    var pathname = window.location.pathname || '';
    return pathname === '/en' || pathname.indexOf('/en/') === 0;
  }

  function isDismissed() {
    try {
      return !!(window.localStorage && window.localStorage.getItem(STORAGE_KEY) === 'dismissed');
    } catch (e) {
      return false;
    }
  }

  function setDismissed() {
    try {
      if (window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, 'dismissed');
      }
    } catch (e) {}
  }

  function getEnglishUrl() {
    var pathname = window.location.pathname || '/';
    var cleanPath = pathname;

    if (cleanPath === '/zh-HK') {
      cleanPath = '/';
    } else if (cleanPath.indexOf('/zh-HK/') === 0) {
      cleanPath = cleanPath.slice('/zh-HK'.length);
    }

    if (!cleanPath || cleanPath.charAt(0) !== '/') {
      cleanPath = '/' + cleanPath;
    }

    var enPath = cleanPath === '/' ? '/en/' : '/en' + cleanPath;
    var search = window.location.search || '';
    var hash = window.location.hash || '';

    return enPath + search + hash;
  }

  function shouldShowHint() {
    // a. navigator.languages 中沒有任何以 'zh' 開頭的語言
    if (hasChineseLanguage()) return false;

    // b. 目前路徑不是以 /en/ 開頭
    if (isEnglishPath()) return false;

    // c. localStorage 的 'mythogen_lang_hint' 不是 'dismissed'
    if (isDismissed()) return false;

    return true;
  }

  function dismiss() {
    setDismissed();
    var el = document.getElementById(HINT_ID);
    if (el) {
      el.remove();
    }
  }

  function createBanner() {
    var el = document.createElement('div');
    el.id = HINT_ID;
    el.className = 'mythogen-lang-hint';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'English translation available');

    var inner = document.createElement('div');
    inner.className = 'mythogen-lang-hint-inner';

    var text = document.createElement('span');
    text.className = 'mythogen-lang-hint-text';
    text.textContent = 'This page is also available in English.';

    var link = document.createElement('a');
    link.id = 'mythogen-lang-hint-link';
    link.className = 'mythogen-lang-hint-link';
    link.textContent = 'Read in English \u2192';
    link.href = getEnglishUrl();
    link.addEventListener('click', function () {
      setDismissed();
    });

    var closeBtn = document.createElement('button');
    closeBtn.id = 'mythogen-lang-hint-close';
    closeBtn.className = 'mythogen-lang-hint-close';
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      dismiss();
    });

    inner.appendChild(text);
    inner.appendChild(link);
    inner.appendChild(closeBtn);
    el.appendChild(inner);

    return el;
  }

  function updateBanner() {
    var show = shouldShowHint();
    var existing = document.getElementById(HINT_ID);

    if (!show) {
      if (existing) {
        existing.remove();
      }
      return;
    }

    injectStyles();

    var nav = document.querySelector('.navbar');
    if (!nav || !nav.parentNode) {
      return;
    }

    var banner = existing;
    if (!banner) {
      banner = createBanner();
      nav.parentNode.insertBefore(banner, nav.nextSibling);
    } else if (banner.parentNode !== nav.parentNode || banner.previousSibling !== nav) {
      nav.parentNode.insertBefore(banner, nav.nextSibling);
    }

    var navHeight = nav.offsetHeight || 60;
    banner.style.top = navHeight + 'px';

    var link = banner.querySelector('#mythogen-lang-hint-link');
    if (link) {
      link.href = getEnglishUrl();
    }
  }

  // Expose global updater for testing/programmatic use
  if (typeof window !== 'undefined') {
    window.__mythogen_update_lang_hint__ = updateBanner;
  }

  function init() {
    updateBanner();

    // Hook SPA navigation: history.pushState and replaceState
    if (window.history) {
      var origPushState = window.history.pushState;
      if (origPushState) {
        window.history.pushState = function () {
          var res = origPushState.apply(this, arguments);
          setTimeout(updateBanner, 0);
          return res;
        };
      }

      var origReplaceState = window.history.replaceState;
      if (origReplaceState) {
        window.history.replaceState = function () {
          var res = origReplaceState.apply(this, arguments);
          setTimeout(updateBanner, 0);
          return res;
        };
      }
    }

    window.addEventListener('popstate', function () {
      setTimeout(updateBanner, 0);
    });

    window.addEventListener('resize', function () {
      var banner = document.getElementById(HINT_ID);
      var nav = document.querySelector('.navbar');
      if (banner && nav) {
        banner.style.top = (nav.offsetHeight || 60) + 'px';
      }
    });

    // MutationObserver to watch for route transitions where navbar or main container updates
    if (window.MutationObserver) {
      var observer = new MutationObserver(function () {
        var banner = document.getElementById(HINT_ID);
        var nav = document.querySelector('.navbar');
        if (shouldShowHint()) {
          if (!banner || (nav && banner.previousSibling !== nav)) {
            updateBanner();
          }
        } else if (banner) {
          banner.remove();
        }
      });

      var target = document.getElementById('__docusaurus') || document.body;
      if (target) {
        observer.observe(target, { childList: true, subtree: false });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
