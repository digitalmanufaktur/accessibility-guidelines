export const themeData = JSON.parse("{\"logo\":\"/images/brand/logo.svg\",\"logoDark\":\"/images/brand/logo-contrast.svg\",\"logoAlt\":\"digitalmanufaktur Accessibility-Guidelines, Logo: Home\",\"navbar\":[{\"text\":\"Start\",\"link\":\"/\"},{\"text\":\"Komponenten\",\"link\":\"/component-pattern/\",\"children\":[\"/component-pattern/buttons.md\",\"/component-pattern/carousels.md\",\"/component-pattern/forms.md\",\"/component-pattern/menus.md\",\"/component-pattern/product-box.md\",\"/component-pattern/tabs.md\"]},{\"text\":\"Guidelines\",\"link\":\"/guidelines/\",\"children\":[\"/guidelines/accessibility.md\",\"/guidelines/best-practices.md\",\"/guidelines/bfsg.md\"]},{\"text\":\"Beitragen\",\"link\":\"/contribute.md\"}],\"sidebar\":{\"/\":[{\"text\":\"Einführung\",\"children\":[\"/\",\"/contribute.md\"]}],\"/component-pattern/\":[{\"text\":\"Komponenten\",\"collapsible\":true,\"children\":[\"/component-pattern/readme.md\",\"/component-pattern/buttons.md\",\"/component-pattern/carousels.md\",\"/component-pattern/forms.md\",\"/component-pattern/menus.md\",\"/component-pattern/product-box.md\",\"/component-pattern/tabs.md\"]}],\"/guidelines/\":[{\"text\":\"Guidelines\",\"collapsible\":true,\"children\":[\"/guidelines/readme.md\",\"/guidelines/accessibility.md\",\"/guidelines/best-practices.md\",\"/guidelines/bfsg.md\"]}]},\"editLink\":false,\"lastUpdated\":true,\"contributors\":true,\"docsDir\":\"docs\",\"docsBranch\":\"main\",\"selectLanguageName\":\"Deutsch\",\"selectLanguageText\":\"Sprachen\",\"selectLanguageAriaLabel\":\"Sprachen\",\"search\":true,\"searchMaxSuggestions\":10,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
