/*
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-22 17:19:42
 * @LastEditTime: 2021-02-23 17:12:59
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/api/article.js
 */
import { request } from '@/plugins/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

export const addFavorited = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

export const deleteFavorited = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

export const getArticlesDetail = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

export const addComments = params => {
  return request({
    method: 'POST',
    url: `/api/articles/${params.slug}/comments`,
    data: { comment: { body: params.body } }
  })
}