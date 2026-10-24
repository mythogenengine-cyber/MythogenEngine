// Docusaurus sets DOCUSAURUS_CURRENT_LOCALE before building each locale
// (see facebook/docusaurus#4542). It may be unset or the literal string
// "undefined", so whitelist known values. It must be read inside the exported
// function below: the config module itself is evaluated only once and reused
// for every locale, but the exported function is called once per locale.
const KNOWN_LOCALES = ['zh-Hant', 'en', 'zh-HK'];
function getCurrentLocale() {
  const env = process.env.DOCUSAURUS_CURRENT_LOCALE;
  return KNOWN_LOCALES.includes(env) ? env : 'zh-Hant';
}

// Always-visible link to the other language. The href is a safe fallback
// (home page); static/js/lang-hint.js rewrites it to the same article.
function getLangSwitchHtml(locale) {
  return locale === 'en'
    ? '<a href="/" class="navbar__link nav-lang-switch" lang="zh-Hant" hreflang="zh-Hant">中文</a>'
    : '<a href="/en/" class="navbar__link nav-lang-switch" lang="en" hreflang="en">English</a>';
}
const LANG_SWITCH_ITEM_CLASS = 'nav-lang-switch-item';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mythogen Engine',
  tagline: 'Refining AI and Speculative Narratives',
  url: 'https://mythogenengine.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config.
  organizationName: 'mythogenengine-cyber', // GitHub org/user name.
  projectName: 'MythogenEngine', // Repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  scripts: [
    { src: '/js/me.js', async: false },
    { src: '/js/lang-hint.js', async: false },
  ],

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en', 'zh-HK'],
    localeConfigs: {
      'zh-Hant': { label: '繁體中文 (台灣)' },
      en: { label: 'English' },
      'zh-HK': { label: '繁體中文 (香港)' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-C089DF9NW5',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mythogen Engine',
        items: [
          {
            type: 'doc',
            docId: 'ai-war/guide',
            position: 'left',
            label: 'AI Archive',
          },
          {
            type: 'doc',
            docId: 'mirror-realm/prologue',
            position: 'left',
            label: 'Mirror Realm',
          },
          {
            type: 'doc',
            docId: 'GameVictory/INFO_PAGE',
            position: 'left',
            label: 'GameVictory',
          },
          {
            type: 'doc',
            docId: 'AI_TAO/INFO_PAGE',
            position: 'left',
            label: 'The Invisible Path',
          },
          {
            to: '/docs/TechNotes',
            position: 'left',
            label: 'Lucid Record',
          },
          {
            type: 'doc',
            docId: 'capital-game/誰在門口收錢/INFO_PAGE',
            position: 'left',
            label: '資本遊戲玩什麼',
          },
          {
            to: '/docs/Diary',
            position: 'left',
            label: 'Diary',
          },
          {
            to: '/about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'html',
            position: 'right',
            className: LANG_SWITCH_ITEM_CLASS,
            value: getLangSwitchHtml('zh-Hant'), // replaced per locale below
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://matters.town/@mythogenengine',
            position: 'right',
            className: 'header-icon-link',
            'aria-label': 'Matters',
            html: '<svg viewBox="0 0 24 24" width="24" height="24" style="fill: var(--color-on-surface);"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg><span class="mobile-icon-label">Matters</span>',
          },
          {
            href: 'https://portaly.cc/Mythogen',
            position: 'right',
            className: 'header-icon-link',
            'aria-label': 'Sponsor',
            html: '<svg viewBox="0 0 24 24" width="24" height="24" style="fill: var(--color-secondary-container);"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg><span class="mobile-icon-label">支持/Sponsor</span>',
          },
          {
            href: 'https://www.facebook.com/MythogenEngine',
            position: 'right',
            className: 'header-icon-link',
            'aria-label': 'Facebook',
            html: '<svg viewBox="0 0 24 24" width="24" height="24" style="fill: var(--color-on-surface);"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg><span class="mobile-icon-label">Facebook</span>',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mythogen Engine. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = function createConfig() {
  const value = getLangSwitchHtml(getCurrentLocale());
  const { navbar } = config.themeConfig;
  return {
    ...config,
    themeConfig: {
      ...config.themeConfig,
      navbar: {
        ...navbar,
        items: navbar.items.map((item) =>
          item.className === LANG_SWITCH_ITEM_CLASS ? { ...item, value } : item,
        ),
      },
    },
  };
};
