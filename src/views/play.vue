<template>
  <div class="play">
    <div class="box">
      <div class="title">{{name}}</div>
      <div id="xg"></div>
      <div class="more">
        <button @click="show = !show">show</button>
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
import { mapMutations } from 'vuex'
import tools from '../lib/site/tools'
// import video from '../lib/dexie/video'
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
        url: '',
        fluid: true,
        autoplay: false,
        videoInit: true,
        keyShortcut: 'on',
        crossOrigin: true,
        defaultPlaybackRate: 1,
        playbackRate: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        playNext: {
          urlList: ['https://yuledy.helanzuida.com/20200312/131_41fc5eef/index.m3u8', 'https://meng.wuyou-zuida.com/20200319/28142_6f46cf60/index.m3u8', 'https://meng.wuyou-zuida.com/20200326/28476_ecccdfde/index.m3u8', 'https://yuledy.helanzuida.com/20200402/1725_0017a862/index.m3u8', 'https://yuledy.helanzuida.com/20200409/2133_2e6c127a/index.m3u8']
        }
      },
      name: ''
    }
  },
  computed: {
    video: {
      get () {
        return this.$store.getters.getVideo
      },
      set (val) {
        this.SET_VIDEO(val)
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
  watch: {
    video: {
      handler () {
        this.getUrls()
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['SET_VIEW', 'SET_DETAIL', 'SET_VIDEO']),
    getUrls () {
      tools.detail_get(this.video.site, this.video.detail).then(res => {
        this.name = this.video.name
        if (res.m3u8_urls.length > 1) {
          const m3 = res.m3u8_urls
          const arr = []
          for (const i of m3) {
            arr.push(i.split('$')[1])
          }
          this.xg.src = arr[this.video.index]
          this.xg.play()
        } else {
          const link = res.m3u8_urls[this.video.index]
          const src = link.split('$')[1]
          this.xg.src = src
          this.xg.play()
        }
      })
    }
  },
  mounted () {
    this.xg = new Hls(this.config)
  }
}
</script>
<style lang="scss" scoped>
.play{
  position: relative;
  height: 660px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  .box{
    width: 92%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .more{
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .list{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    border: 1px solid #00000022;
    background-color: #fff;
    z-index: 555;
    border-radius: 3px;
  }
  .slideX-enter-active, .slideX-leave-active{
    transition: all .5s ease-in-out;
  }
  .slideX-enter, .slideX-leave-to{
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
