<!--
 * @Author: sunkai@xinxinapp.cn
 * @Date: 2021-02-23 16:52:20
 * @LastEditTime: 2021-02-23 17:16:41
 * @LastEditors: sunkai@xinxinapp.cn
 * @Description: 
 * @FilePath: /realworld-nuxtjs/pages/article/components/article-comments.vue
-->
<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" v-model="body" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="onAddComments">
        Post Comment
        </button>
      </div>
    </form>
    
    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{name: 'profile', params: {username: comment.author.username}}">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{name: 'profile', params: {username: comment.author.username}}">
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.author.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>

  </div>
</template>
<script>
import { getComments, addComments } from '@/api/article'
export default {
  name: 'ArticleComments',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      comments: [],
      body: ''
    }
  },
  async mounted () {
    const { data } = await getComments(this.slug)
    this.comments = data.comments
  },
  methods: {
    async onAddComments () {
      console.log('1---addComments:-')
      const { data } = await addComments({
        slug: this.slug,
        body: this.body
      })
      console.log('1---data:-', data)
    }
  }
}
</script>
<style lang="">
  
</style>