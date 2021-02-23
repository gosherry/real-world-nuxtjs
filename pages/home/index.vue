<!--
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-20 16:51:51
 * @LastEditTime: 2021-02-23 16:18:17
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/home/index.vue
-->
<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link exact :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                    page: page,
                  }
                }" :class="{active: tab === 'your_feed'}" class="nav-link" href="">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link exact :to="{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                    page: page,
                  }
                }" :class="{active: tab === 'global_feed'}" class="nav-link" href="">Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <!-- <a class="nav-link active" href="">#{{ tag }}</a> -->
                <nuxt-link exact :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: tag,
                    page: page,
                  }
                }" :class="{active: tab === 'tag'}" class="nav-link" href="">#{{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div v-for="article in articles" :key="article.slug" class="article-preview">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }"><img :src="article.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }" class="author">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{
                active: article.favorited
              }" @click="onFavorite(article)" :disabled="article.disabled">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{
                name: 'article',
                params: {
                  slug: article.slug
                }
              }" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <nav>
            <ul class="pagination">
              <li v-for="index in totalPage" :key="index" :class="{active: index === page}" class="page-item">
                <nuxt-link :to="{
                  name: 'home',
                  query: {
                    page: index,
                    tag: $route.query.tag,
                    tab: tab
                  }
                }" class="page-link">{{ index }}</nuxt-link>
              </li>
            </ul>
          </nav>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link :to="{
                name: 'home',
                query: { tag, page: $route.query.page, tab: 'tag', }
              }" v-for="tag in tags" :key="tag" class="tag-pill tag-default">
                {{ tag }}
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import { getTags } from '@/api/tag'
import { getArticles, getFeedArticles, addFavorited, deleteFavorited } from '@/api/article'
import { mapState } from 'vuex'
export default {
  // 监听参数字符串更改并在更改时执行组件方法
  watchQuery: ['page', 'tag', 'tab'],
  name: 'HomeIndex',
  async asyncData ({ query, store }) {
    const { tag } = query
    const limit = 20
    const page = Number.parseInt(query.page || 1)
    const tab = query.tab || 'global_feed'

    const loadArticles = store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles
    
    const [ tagRes, articleRes ] = await Promise.all([
      getTags(),
      loadArticles({ limit, offset: (page - 1) * limit, tag: query.tag })
    ])
    
    const { tags } = tagRes.data
    const { articles, articlesCount } = articleRes.data

    articles.forEach(item => item.disabled = false)

    return { page, limit, tags, articles, articlesCount, tag, tab  }
  },
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite (article) {
      article.disabled = true
      if (article.favorited) {
        await deleteFavorited(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorited(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.disabled = false
    }
  }
}
</script>
<style>
  
</style>