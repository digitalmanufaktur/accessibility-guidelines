import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

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
        link: '/component-pattern/',
        children: [
          '/component-pattern/benefit-bar.md',
          '/component-pattern/buttons.md',
          '/component-pattern/carousels.md',
          '/component-pattern/forms.md',
          '/component-pattern/menus.md',
          '/component-pattern/product-box.md',
          '/component-pattern/tabs.md'
        ]
      },
      { 
        text: 'Guidelines', 
        link: '/guidelines/',
        children: [
          '/guidelines/accessibility.md',
          '/guidelines/best-practices.md',
          '/guidelines/bfsg.md'
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
            '/component-pattern/benefit-bar.md',
            '/component-pattern/buttons.md',
            '/component-pattern/carousels.md',
            '/component-pattern/forms.md',
            '/component-pattern/menus.md',
            '/component-pattern/product-box.md',
            '/component-pattern/tabs.md'
          ]
        }
      ],
      '/guidelines/': [
        {
          text: 'Guidelines',
          collapsible: true,
          children: [
            '/guidelines/readme.md',
            '/guidelines/accessibility.md',
            '/guidelines/best-practices.md',
            '/guidelines/bfsg.md'
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
  ],
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})