import comp from "/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/guidelines/index.html.vue"
const data = JSON.parse("{\"path\":\"/guidelines/\",\"title\":\"Guidelines\",\"lang\":\"de-DE\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"guidelines/readme.md\"}")
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
