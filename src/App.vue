<template>
  <div id="app">
    <page-header :home="true" />
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
