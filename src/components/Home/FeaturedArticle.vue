<template>
  <article class="mb-8">
    <h2 class="text-3xl text-center leading-tight mb-4 text-grey-700 font-bold">
      {{ article.title }}
    </h2>
    <div class="">
      <img :src="article.urlToImage" />
      <div class="text-sm text-grey-700">{{ article.description }}</div>
    </div>
    <hr />
  </article>
</template>

<script>
export default {
  props: ['article']
}
</script>
