<template>
  <div class="play">
    <div class="box">
      <div class="title"></div>
      <div id="xg"></div>
      <div class="more">
        <button @click="show = !show">show</button>
        <button @click="play">play</button>
      </div>
    </div>
    <transition name="slideX">
      <div v-if="show" class="list">
        <button>list</button>
        <button>history</button>
      </div>
    </transition>
  </div>
</template>
<script>
import 'xgplayer'
import Hls from 'xgplayer-hls.js'
export default {
  name: 'play',
  data () {
    return {
      xg: null,
      show: false,
      config: {
        id: 'xg',
        lang: 'zh-cn',
        url: 'https://shuixian.nihaozuida.com/20200213/285_99244172/index.m3u8',
        fluid: true,
        autoplay: true,
        videoInit: true,
        keyShortcut: 'on',
        crossOrigin: true,
        defaultPlaybackRate: 1,
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        playNext: {
          urlList: []
        }
      },
      urls: [
        'https://shuixian.nihaozuida.com/20200213/285_99244172/index.m3u8',
        'https://shuixian.nihaozuida.com/20200228/797_3ae5e907/index.m3u8',
        'https://shuixian.nihaozuida.com/20200312/1365_9ef884db/index.m3u8',
        'https://shuixian.nihaozuida.com/20200319/1702_ab88b00c/index.m3u8'
      ],
      num: ''
    }
  },
  methods: {
    play () {
      this.xg = new Hls(this.config)
      this.xg.src = 'https://shuixian.nihaozuida.com/20200213/285_99244172/index.m3u8'
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.play{
  position: relative;
  height: 670px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  .box{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title{
      width: 100%;
      height: 40px;
    }
    .more{
      width: 100%;
      height: 60px;
      border: 1px solid red;
    }
  }
  .list{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    border: 1px solid #000;
    background-color: #fff;
    z-index: 555;
  }
  .slideX-enter-active, .slideX-leave-active{
    transition: all .5s ease;
  }
  .slideX-enter, .slideX-leave-to{
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
