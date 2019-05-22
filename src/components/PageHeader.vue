<template>
  <div>
    <div>
      <img
        class="h-16"
        alt="The Vue News Logo"
        src="../assets/images/logo.svg"
      />
    </div>
    <div>
      <div v-if="home">Home</div>
      <div v-if="category != ''">{{ category }}</div>
    </div>
    <div>menu</div>
  </div>
</template>

<script>
export default {
  props: ['home', 'category']
}
</script>

<style lang="scss" scoped></style>
