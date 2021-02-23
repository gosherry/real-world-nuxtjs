/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 11:08:45
 * @LastEditTime: 2021-02-23 17:20:28
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/api/user.js
 */
import { request } from '@/plugins/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

export const getUser = slug => {
  return request({
    method: 'GET',
    url: `/api/profiles/${slug}`,
  })
}