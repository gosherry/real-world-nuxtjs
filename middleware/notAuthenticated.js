/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 15:58:58
 * @LastEditTime: 2021-02-22 15:59:15
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/middleware/notAuthenticated.js
 */
export default ({ store, redirect }) => {
  if (store.state.user) {
    return redirect('/')
  }
}