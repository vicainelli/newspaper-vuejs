import Vue from 'vue'
import App from './App.vue'
import { format } from 'date-fns'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$format', { value: format })

new Vue({
  render: h => h(App)
}).$mount('#app')
