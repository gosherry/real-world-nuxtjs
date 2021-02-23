/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-23 15:53:28
 * @LastEditTime: 2021-02-23 16:01:13
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/plugins/dayjs.js
 */
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(value).format(format)
})