/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 14:39:28
 * @LastEditTime: 2021-02-22 17:25:22
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/store/index.js
 */
const cookieParser = process.server ? require('cookieparser') : undefined
export const state = () => {
  return {
    // 用户登录状态
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit是一个特殊的action方法
  // 这个方法会在服务端渲染期间自动调用
  // 用来初始化数据，供客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (error) {
      }
    }
    // 提交miutaions修改user
    commit('setUser', user)
  }
}