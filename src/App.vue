<template>
  <div id="app">
    <img class="h-10" alt="The VueJS News Logo" src="./assets/images/the-vuejs-news.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>