<template>
  <div>
			<h2 class="font-serif italic text-xl tracking-wide">{{ title }}</h2>
			<p class="text-xs text-grey mt-1">By <span class="uppercase">{{ author }}</span> {{ date }}</p>
      <p class="font-serif text-sm leading-tight list-reset">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsSingleBlock',
  props: [
    'title',
    'author',
    'date',
    'content'
  ]
}
</script>