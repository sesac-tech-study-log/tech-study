// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '테크 스터디 아카이브',
  tagline: '주말 테크 스터디 기록',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sesac-tech-study-log.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tech-study/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sesac-tech-study-log', // Usually your GitHub org/user name.
  projectName: 'tech-study', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sesac-tech-study-log/tech-study/settings/pages',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '테크 스터디 아카이브',
        // 나중에 로고 넣고 주석 해제
        // logo: {
        //  alt: '테크 스터디 아카이브',
        //  src: 'img/logo.svg',
        // },
        items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '스터디 로그',
        },
        {
          to: '/docs/materials',
          label: '기타자료',
          position: 'left',
        },
        {
          to: '/docs/github',
          label: '참여인원 GitHub',
          position: 'left',
        },
        {
          href: 'https://github.com/sesac-tech-study-log/tech-study',
          label: 'Repository',
          position: 'right',
        },
      ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Study',
            items: [
              {
                label: '스터디 소개',
                to: '/docs/intro',
              },
              {
                label: '스터디 로그',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: '기타자료',
                to: '/docs/materials',
              },
              {
                label: '참여인원 GitHub',
                to: '/docs/github',
              },
            ],
          },
          {
            title: 'Repository',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sesac-tech-study-log/tech-study',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SESAC Tech Study Log.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
