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
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
  background-size: 300%;
  animation: gradient 60s ease infinite;
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
  }
}
</style>
