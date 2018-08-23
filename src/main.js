import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$moment', { value: moment });

new Vue({
  render: h => h(App)
}).$mount('#app')
