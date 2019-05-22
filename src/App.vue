<template>
  <div id="app">
    <page-header :home="true" />
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view />
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
  components: {
    'page-header': PageHeader
  }
}
</script>
