<template>
  <div class="home">
    <wrapper>
      <div v-for="(article, index) in articles" :key="article.id">
        <featured-article v-if="index === 0" :article="article" />
        <link-router v-else>{{ article.title }}</link-router>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import FeaturedArticle from '@/components/Home/FeaturedArticle'
import HeadlinesService from '../services/headlines.service'

export default {
  name: 'home',
  components: {
    wrapper: Wrapper,
    'featured-article': FeaturedArticle
  },
  data() {
    return {
      counrty: 'us',
      category: 'business',
      articles: []
    }
  },
  created() {
    const _self = this
    HeadlinesService.getAll(_self.counrty, _self.category).then(res => {
      _self.articles = res.data.articles
    })
  }
}
</script>
