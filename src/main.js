import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// window.onload = function () {
//   // similar behavior as an HTTP redirect
//   window.location.replace('https://gofund.me/c74e8676')
// }
