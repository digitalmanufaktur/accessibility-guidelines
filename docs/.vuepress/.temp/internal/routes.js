export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contribute.html", { loader: () => import(/* webpackChunkName: "contribute.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/contribute.html.js"), meta: {"title":"Beitragen"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Accessibility-Guidelines"} }],
  ["/component-pattern/buttons.html", { loader: () => import(/* webpackChunkName: "component-pattern_buttons.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/buttons.html.js"), meta: {"title":"Buttons"} }],
  ["/component-pattern/carousels.html", { loader: () => import(/* webpackChunkName: "component-pattern_carousels.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/carousels.html.js"), meta: {"title":"Slider oder Carousels"} }],
  ["/component-pattern/forms.html", { loader: () => import(/* webpackChunkName: "component-pattern_forms.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/forms.html.js"), meta: {"title":"Formulare"} }],
  ["/component-pattern/menus.html", { loader: () => import(/* webpackChunkName: "component-pattern_menus.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/menus.html.js"), meta: {"title":"Menüs und Navigation"} }],
  ["/component-pattern/product-box.html", { loader: () => import(/* webpackChunkName: "component-pattern_product-box.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/product-box.html.js"), meta: {"title":"Produktbox"} }],
  ["/component-pattern/", { loader: () => import(/* webpackChunkName: "component-pattern_index.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/index.html.js"), meta: {"title":"Compontent Pattern"} }],
  ["/component-pattern/tabs.html", { loader: () => import(/* webpackChunkName: "component-pattern_tabs.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/component-pattern/tabs.html.js"), meta: {"title":"Tabs"} }],
  ["/guidelines/accessibility.html", { loader: () => import(/* webpackChunkName: "guidelines_accessibility.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/guidelines/accessibility.html.js"), meta: {"title":"Barrierefreiheit"} }],
  ["/guidelines/best-practices.html", { loader: () => import(/* webpackChunkName: "guidelines_best-practices.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/guidelines/best-practices.html.js"), meta: {"title":"Best-Practices"} }],
  ["/guidelines/bfsg.html", { loader: () => import(/* webpackChunkName: "guidelines_bfsg.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/guidelines/bfsg.html.js"), meta: {"title":"BFSG-Konformität"} }],
  ["/guidelines/", { loader: () => import(/* webpackChunkName: "guidelines_index.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/guidelines/index.html.js"), meta: {"title":"Guidelines"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/dgk/workspace/accessibility-guidelines/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
