/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-20 16:43:38
 * @LastEditTime: 2021-02-23 17:52:46
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: nuxt配置文件 
 * @FilePath: /realworld-nuxtjs/nuxt.config.js
 */
module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清除默认生成的路由表规则
      routes.splice(0)
      // 自定义路由配置
      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [
          {
            path: '',
            name: 'home',
            component: resolve(__dirname, 'pages/home/')
          },
          {
            path: '/login',
            name: 'login',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/register',
            name: 'register',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/profile/:username',
            name: 'profile',
            component: resolve(__dirname, 'pages/profile/')
          },
          {
            path: '/settings',
            name: 'settings',
            component: resolve(__dirname, 'pages/settings/')
          },
          {
            path: '/editor',
            name: 'editor',
            component: resolve(__dirname, 'pages/editor/')
          },
          {
            path: '/article/:slug',
            name: 'article',
            component: resolve(__dirname, 'pages/article/')
          },
        ]
      }])
    }
  },
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}