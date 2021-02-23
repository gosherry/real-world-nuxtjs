/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 15:52:15
 * @LastEditTime: 2021-02-22 15:53:52
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 校验用户是否登录中间件
 * @FilePath: /realworld-nuxtjs/middleware/authenticated.js
 */

export default ({ store, redirect }) => {
  if (!store.state.user) {
    return redirect('/login')
  }
}