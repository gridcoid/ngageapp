import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4c593be = () => interopDefault(import('..\\pages\\audience.vue' /* webpackChunkName: "pages/audience" */))
const _b0ada5f4 = () => interopDefault(import('..\\pages\\buka.vue' /* webpackChunkName: "pages/buka" */))
const _c5ff1e96 = () => interopDefault(import('..\\pages\\campaign\\index.vue' /* webpackChunkName: "pages/campaign/index" */))
const _4d8cf8b6 = () => interopDefault(import('..\\pages\\creative\\index.vue' /* webpackChunkName: "pages/creative/index" */))
const _2d36cd00 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _1c7cfbe2 = () => interopDefault(import('..\\pages\\kgrhythm.vue' /* webpackChunkName: "pages/kgrhythm" */))
const _33567fc8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c15c00c8 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _7ba6b2de = () => interopDefault(import('..\\pages\\report.vue' /* webpackChunkName: "pages/report" */))
const _26e275b7 = () => interopDefault(import('..\\pages\\survey.vue' /* webpackChunkName: "pages/survey" */))
const _350f118e = () => interopDefault(import('..\\pages\\tools.vue' /* webpackChunkName: "pages/tools" */))
const _57afbf7c = () => interopDefault(import('..\\pages\\admin\\template.vue' /* webpackChunkName: "pages/admin/template" */))
const _7ec5d966 = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages/admin/user" */))
const _2ac1f0a9 = () => interopDefault(import('..\\pages\\campaign\\create.vue' /* webpackChunkName: "pages/campaign/create" */))
const _46368f76 = () => interopDefault(import('..\\pages\\creative\\templates\\index.vue' /* webpackChunkName: "pages/creative/templates/index" */))
const _2baccb4d = () => interopDefault(import('..\\pages\\creative\\upload.vue' /* webpackChunkName: "pages/creative/upload" */))
const _9c31094a = () => interopDefault(import('..\\pages\\campaign\\detail\\edit\\_index.vue' /* webpackChunkName: "pages/campaign/detail/edit/_index" */))
const _3b45804e = () => interopDefault(import('..\\pages\\creative\\templates\\preview\\_index.vue' /* webpackChunkName: "pages/creative/templates/preview/_index" */))
const _c3ef3bde = () => interopDefault(import('..\\pages\\campaign\\detail\\_index\\index.vue' /* webpackChunkName: "pages/campaign/detail/_index/index" */))
const _c4f762ca = () => interopDefault(import('..\\pages\\creative\\create\\_index.vue' /* webpackChunkName: "pages/creative/create/_index" */))
const _ef9d21ba = () => interopDefault(import('..\\pages\\creative\\detail\\_detail.vue' /* webpackChunkName: "pages/creative/detail/_detail" */))
const _679152fa = () => interopDefault(import('..\\pages\\creative\\edit\\_edit.vue' /* webpackChunkName: "pages/creative/edit/_edit" */))
const _5ae901a0 = () => interopDefault(import('..\\pages\\campaign\\detail\\_index\\placement\\create.vue' /* webpackChunkName: "pages/campaign/detail/_index/placement/create" */))
const _81046afe = () => interopDefault(import('..\\pages\\campaign\\detail\\_index\\placement\\edit\\_index.vue' /* webpackChunkName: "pages/campaign/detail/_index/placement/edit/_index" */))
const _ff28ae12 = () => interopDefault(import('..\\pages\\campaign\\detail\\_index\\placement\\_index.vue' /* webpackChunkName: "pages/campaign/detail/_index/placement/_index" */))
const _1cad1d05 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/audience",
    component: _c4c593be,
    name: "audience"
  }, {
    path: "/buka",
    component: _b0ada5f4,
    name: "buka"
  }, {
    path: "/campaign",
    component: _c5ff1e96,
    name: "campaign"
  }, {
    path: "/creative",
    component: _4d8cf8b6,
    name: "creative"
  }, {
    path: "/demo",
    component: _2d36cd00,
    name: "demo"
  }, {
    path: "/kgrhythm",
    component: _1c7cfbe2,
    name: "kgrhythm"
  }, {
    path: "/login",
    component: _33567fc8,
    name: "login"
  }, {
    path: "/profile",
    component: _c15c00c8,
    name: "profile"
  }, {
    path: "/report",
    component: _7ba6b2de,
    name: "report"
  }, {
    path: "/survey",
    component: _26e275b7,
    name: "survey"
  }, {
    path: "/tools",
    component: _350f118e,
    name: "tools"
  }, {
    path: "/admin/template",
    component: _57afbf7c,
    name: "admin-template"
  }, {
    path: "/admin/user",
    component: _7ec5d966,
    name: "admin-user"
  }, {
    path: "/campaign/create",
    component: _2ac1f0a9,
    name: "campaign-create"
  }, {
    path: "/creative/templates",
    component: _46368f76,
    name: "creative-templates"
  }, {
    path: "/creative/upload",
    component: _2baccb4d,
    name: "creative-upload"
  }, {
    path: "/campaign/detail/edit/:index",
    component: _9c31094a,
    name: "campaign-detail-edit"
  }, {
    path: "/creative/templates/preview/:index",
    component: _3b45804e,
    name: "creative-templates-preview"
  }, {
    path: "/campaign/detail/:index",
    component: _c3ef3bde,
    name: "campaign-detail-index"
  }, {
    path: "/creative/create/:index",
    component: _c4f762ca,
    name: "creative-create"
  }, {
    path: "/creative/detail/:detail?",
    component: _ef9d21ba,
    name: "creative-detail-detail"
  }, {
    path: "/creative/edit/:edit?",
    component: _679152fa,
    name: "creative-edit-edit"
  }, {
    path: "/campaign/detail/:index/placement/create",
    component: _5ae901a0,
    name: "campaign-detail-index-placement-create"
  }, {
    path: "/campaign/detail/:index/placement/edit/:index",
    component: _81046afe,
    name: "campaign-detail-index-placement-edit"
  }, {
    path: "/campaign/detail/:index/placement/:index",
    component: _ff28ae12,
    name: "campaign-detail-index-placement"
  }, {
    path: "/",
    component: _1cad1d05,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
