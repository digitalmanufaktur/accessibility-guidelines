import comp from "/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/product-box.html.vue"
const data = JSON.parse("{\"path\":\"/component-pattern/product-box.html\",\"title\":\"Produktbox\",\"lang\":\"de-DE\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1732704746000,\"contributors\":[{\"name\":\"David Große-Kleimann\",\"email\":\"dgk@Mac.fritz.box\",\"commits\":1}]},\"filePathRelative\":\"component-pattern/product-box.md\"}")
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
