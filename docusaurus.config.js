/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mythogen Engine',
  tagline: 'Refining AI and Speculative Narratives',
  url: 'https://mythogenengine-cyber.github.io',
  baseUrl: '/MythogenEngine/', // Target repository name
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config.
  organizationName: 'mythogenengine-cyber', // GitHub org/user name.
  projectName: 'MythogenEngine', // Repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://portaly.cc/Mythogen',
            position: 'right',
            className: 'header-sponsor-link',
            'aria-label': 'Sponsor',
          },
          {
            href: 'https://www.facebook.com/MythogenEngine',
            position: 'right',
            className: 'header-facebook-link',
            'aria-label': 'Facebook',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mythogen Engine. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // Force dark mode for experimental feel
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
