import comp from "/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/menus.html.vue"
const data = JSON.parse("{\"path\":\"/component-pattern/menus.html\",\"title\":\"Menüs und Navigation\",\"lang\":\"de-DE\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"component-pattern/menus.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
