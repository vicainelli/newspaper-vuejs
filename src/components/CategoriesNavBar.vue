<template>
  <div class="border-t-2 border-b border-grey-darker py-3">
    <nav class="text-center text-xs">
      <a
        class="no-underline p-1 text-black hover:bg-grey-light"
        v-for="category in categories"
        :key="category.id"
        >{{ category }}</a
      >
      <a href="#" class="no-underline p-1 text-black hover:bg-grey-light"
        >ALL</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CategoriesNavBar',
  data() {
    return {
      categories: [
        'World',
        'U.S.',
        'Politics',
        'N.Y.',
        'Business',
        'Opinion',
        'Tech',
        'Science',
        'Health',
        'Sports',
        'Arts',
        'Books',
        'Style',
        'Food',
        'Travel',
        'Magazine',
        'T Magazine',
        'Real Estate',
        'ALL'
      ]
    }
  }
}
</script>
