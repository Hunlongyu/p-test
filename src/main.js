import Vue from 'vue'
import App from './App.vue'
import Register from './views/register'
import 'modern-normalize'

Register.registerComponents()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
