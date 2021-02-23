import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bda4275a = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _f29fc770 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4f8bb520 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _7499bda0 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _a043f1e8 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _d541dad4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _5b6400ed = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _bda4275a,
    children: [{
      path: "",
      component: _f29fc770,
      name: "home"
    }, {
      path: "/login",
      component: _4f8bb520,
      name: "login"
    }, {
      path: "/register",
      component: _4f8bb520,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7499bda0,
      name: "profile"
    }, {
      path: "/settings",
      component: _a043f1e8,
      name: "settings"
    }, {
      path: "/editor",
      component: _d541dad4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5b6400ed,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
