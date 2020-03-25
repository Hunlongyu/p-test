import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import Register from './views/register'
import 'modern-normalize'
import { languages, defaultLocal } from './locales/index'

Vue.config.productionTip = false
Vue.use(VueI18n)
Register.registerComponents()

const messages = Object.assign(languages)

const i18n = new VueI18n({
  locale: defaultLocal,
  fallbackLocale: 'zhCn',
  messages
})

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
