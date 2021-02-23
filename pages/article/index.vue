<!--
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-20 17:18:21
 * @LastEditTime: 2021-02-23 16:58:40
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/article/index.vue
-->
<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <article-meta :article="article" />

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :slug="article.slug"/>
          
        </div>

      </div>

    </div>

  </div>
</template>
<script>
import { getArticlesDetail } from '@/api/article'
import MarkDownIt from 'markdown-it'
import ArticleMeta from './components/article-meta'
import ArticleComments from './components/article-comments'

export default {
  components: { ArticleMeta, ArticleComments },
  name: 'ArticleIndex',
  async asyncData({ params }) {
    const { data } = await getArticlesDetail(params.slug)
    
    data.article.body = new MarkDownIt().render(data.article.body)
    
    return {
      article: data.article
    }
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>
<style lang="">
  
</style>