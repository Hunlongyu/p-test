import Vue from 'vue'
import Film from './film.vue'
import Play from './play.vue'
import Star from './star.vue'
import Setting from './setting.vue'

export default {
  registerComponents () {
    Vue.component('Film', Film)
    Vue.component('Play', Play)
    Vue.component('Star', Star)
    Vue.component('Setting', Setting)
  }
}
