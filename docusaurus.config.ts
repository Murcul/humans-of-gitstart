import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Humans of GitStart',
  tagline: 'Humans of GitStart',
  favicon: 'img/favicon.ico',

  url: 'https://humansof.gitstart.com',
  baseUrl: '/',
  organizationName: 'gitstart',
  projectName: 'humans-of-gitstart',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TO REPLACE https://gitstart.com/_astro/ogimage.b7ebcb01.png
    image: 'img/gs-ogimage.png',
    navbar: {
      title: 'Humans of GitStart',
      logo: {
        alt: 'Site Logo',
        src: 'img/gitstart.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'humansOfGitstartSidebar',
        //   position: 'left',
        //   label: 'Humans of GitStart',
        // },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/GitStartHQ',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Company',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Humans of GitStart, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
