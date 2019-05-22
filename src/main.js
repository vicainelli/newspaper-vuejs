import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

Axios.defaults.baseURL = process.env.VUE_APP_NEWS_URL

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
