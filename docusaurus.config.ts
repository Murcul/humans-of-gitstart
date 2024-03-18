import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GitStart',
  tagline: 'Humans of GitStart',
  favicon: 'img/favicon.ico',

  url: 'https://humansof.gitstart.com',
  baseUrl: '/',
  organizationName: 'gitstart',
  projectName: 'humans-of-gitstart',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
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
        {to: '/blog', label: 'Writing Wall', position: 'left'},
        {
          href: 'https://github.com/GitStartHQ',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Humans of GitStart`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
