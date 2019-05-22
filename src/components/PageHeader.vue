<template>
  <div
    class="flex justiy-between items-center px-3 border-b border-grey-100 mb-2"
  >
    <div class="items-center flex flex-1">
      <router-link to="/"
        ><img
          class="h-16"
          alt="The Vue News Logo"
          src="../assets/images/logo.svg"
      /></router-link>
      <div class="flex-1 ml-3">
        <div class="text-lg font-thin text-grey-600" v-if="home">Home</div>
        <div v-if="category != ''">{{ category }}</div>
      </div>
    </div>
    <div>
      <button
        class="border border-grey-400 rounded-full text-xs px-3 py-1 text-grey-500 uppercase"
      >
        menu
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['home', 'category']
}
</script>

<style lang="scss" scoped></style>
