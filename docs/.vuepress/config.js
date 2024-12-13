import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import injectAssetsPlugin from './plugins/inject-assets.js'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'de-DE',
  title: 'Accessibility-Guidelines',
  description: 'Dokumentation für barrierefreie E-Commerce-Komponenten',
  theme: defaultTheme({
    logo: '/images/brand/logo.svg',
    logoDark: '/images/brand/logo-contrast.svg',
    logoAlt: 'digitalmanufaktur Accessibility-Guidelines, Logo: Home',
    navbar: [
      { text: 'Start', link: '/' },
      { 
        text: 'Komponenten', 
        link: '/component-pattern/'
      },
      { 
        text: 'Guidelines', 
        link: '/guidelines/',
        children: [
          '/guidelines/bfsg.md',
          '/guidelines/wai-aria.md'
        ]
      },
      { text: 'Beitragen', link: '/contribute.md' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Einführung',
          children: [
            '/',
            '/contribute.md'
          ]
        }
      ],
      '/component-pattern/': [
        {
          text: 'Komponenten',
          collapsible: true,
          children: [
            '/component-pattern/readme.md',
            { 
              text: 'Buttons', 
              link: '/component-pattern/buttons/readme.md',
              collapsible: true,
              children: [
                '/component-pattern/buttons/text-button.md',
                '/component-pattern/buttons/icon-button.md',
                '/component-pattern/buttons/text-icon-button.md',
                '/component-pattern/buttons/menu-button.md',
                '/component-pattern/buttons/account-menu-button.md',
                '/component-pattern/buttons/status-buttons.md',
              ]
            },
            {
              text: 'Bilder',
              link: '/component-pattern/images/readme.md',
              collapsible: true,
              children: [
                '/component-pattern/images/informative-images.md',
                '/component-pattern/images/decorative-images.md',
                '/component-pattern/images/functional-images.md',
                '/component-pattern/images/groups-of-images.md',
              ]
            },
            { 
              text: 'Inputs', 
              link: '/component-pattern/inputs/readme.md',
              collapsible: true,
              children: [
                '/component-pattern/inputs/searchbar.md'
              ]
            },
            '/component-pattern/usp-bar.md',
          ]
        }
      ],
      '/guidelines/': [
        {
          text: 'Guidelines',
          collapsible: true,
          children: [
            '/guidelines/bfsg.md',
            '/guidelines/wai-aria.md'
          ]
        }
      ]
    },
    editLink: false,
    lastUpdated: true,
    contributors: true,
    docsDir: 'docs',
    docsBranch: 'main',
    selectLanguageName: 'Deutsch',
    selectLanguageText: 'Sprachen',
    selectLanguageAriaLabel: 'Sprachen',
    search: true,
    searchMaxSuggestions: 10,
  }),
  plugins: [
    mdEnhancePlugin({
      tasklist: true,
    }),
    injectAssetsPlugin()
  ],
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})