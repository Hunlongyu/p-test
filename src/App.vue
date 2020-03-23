<template>
  <div id="app">
    <Aside />
    <div class="body">
      <Frame />
      <main :is="main" />
    </div>
    <!-- <Detail /> -->
  </div>
</template>

<script>
import Aside from './components/Aside'
import Frame from './components/Frame'
// import Detail from './components/Detail'
export default {
  name: 'App',
  data () {
    return {
      main: 'Film'
    }
  },
  components: {
    Aside,
    Frame
    // Detail
  }
}
</script>

<style lang="scss">
html, body, #app{
  height: 100%;
}
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  will-change: transform;
  background-color: #ffffff;
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
    background-color: #f9f9f9;
  }
}
</style>
