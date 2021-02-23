/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 18:30:15
 * @LastEditTime: 2021-02-23 15:48:39
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/api/tag.js
 */
import { request } from '@/plugins/request'

export const getTags = params => {
  return request({
    method: 'GET',
    url: '/api/tags',
    params
  })
}