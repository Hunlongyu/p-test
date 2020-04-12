<template>
  <div id="app" class="theme-light">
    <Aside />
    <div class="body">
      <Frame />
      <Film v-show="view === 'Film'" />
      <Play v-show="view === 'Play'" />
      <Star v-show="view === 'Star'" />
      <Setting v-show="view === 'Setting'" />
    </div>
    <transition name="slide">
      <Detail v-if="detail.show"/>
    </transition>
  </div>
</template>

<script>
import Aside from './components/Aside'
import Frame from './components/Frame'
import Detail from './components/Detail'
import { mapMutations } from 'vuex'
import './lib/dexie/index'
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  components: {
    Aside,
    Frame,
    Detail
  },
  computed: {
    view: {
      get () {
        return this.$store.getters.getView
      },
      set (val) {
        this.SET_VIEW(val)
      }
    },
    detail: {
      get () {
        return this.$store.getters.getDetail
      },
      set (val) {
        this.SET_DETAIL(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_VIEW', 'SET_DETAIL'])
  }
}
</script>

<style lang="scss">
@import './assets/scss/theme.scss';
@import url('./assets/scss/style.scss');
html, body, #app{
  height: 100%;
  border-radius: 6px;
}
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  will-change: transform;
  overflow: hidden;
  // backdrop-filter: blur(1px);
  @keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  .body{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: #f2f6f9;
    padding: 0 20px 20px;
  }
  .slide-enter-active, .slide-leave-active{
    transition: all 0.3s ease-in-out;
  }
  .slide-enter, .slide-leave-to{
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
