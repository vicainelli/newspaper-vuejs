<template>
  <header class="border-b border-grey-100 mb-3">
    <wrapper>
      <div class="flex justiy-between items-center">
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
    </wrapper>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper'
export default {
  props: ['home', 'category'],
  components: {
    wrapper: Wrapper
  }
}
</script>

<style lang="scss" scoped></style>
