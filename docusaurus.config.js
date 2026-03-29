/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Blog',
  tagline: 'Refining AI and Stories',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en', 'zh-HK'],
    localeConfigs: {
      'zh-Hant': {
        label: '繁體中文 (台灣)',
      },
      en: {
        label: 'English',
      },
      'zh-HK': {
        label: '繁體中文 (香港)',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'My Site',
        items: [
          {
            type: 'doc',
            docId: 'ai-war/00_guide',
            position: 'left',
            label: 'AI Ecosystem War',
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
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
