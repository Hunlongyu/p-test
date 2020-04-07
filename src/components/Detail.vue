<template>
  <div class="detail">
    <div class="detail-content">
      <div class="detail-header">
        <span class="detail-title">详情</span>
        <span class="detail-close" @click="closeDetail">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="cancelIconTitle">
            <title id="cancelIconTitle">Close</title>
            <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path>
            <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path>
          </svg>
        </span>
      </div>
      <div class="detail-body" :style="{overflowY:scroll? 'auto' : 'hidden',paddingRight: scroll ? '0': '5px' }" @mouseenter="scroll = true" @mouseleave="scroll = false">
        <div class="info" v-html="vDetail.info"></div>
        <div class="desc" v-html="vDetail.desc"></div>
        <div class="m3u8_urls">
          <span>m3u8</span>
        </div>
        <div class="mp4_urls">
          <span>mp4</span>
        </div>
      </div>
      <div class="detail-mask"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import tools from '../lib/site/tools'
export default {
  name: 'detail',
  data () {
    return {
      scroll: false,
      loading: true,
      vDetail: {}
    }
  },
  computed: {
    site () {
      return this.$store.getters.getSite
    },
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
  methods: {
    ...mapMutations(['SET_VIDEO', 'SET_DETAIL']),
    closeDetail () {
      console.log('close')
      this.detail.show = false
    },
    getDetail () {
      console.log(this.detail.url)
      tools.detail_get(this.site, this.detail.url).then(res => {
        console.log(res)
        this.vDetail = res
      })
    }
  },
  created () {
    this.getDetail()
  }
}
</script>
<style lang="scss">
.detail{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 680px;
  background-color: #fff;
  box-shadow:0 -4px 12px 0 #8e8da21f;
  padding: 10px;
  .detail-content{
    .detail-header{
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .detail-title{
        font-size: 16px;
      }
      .detail-close{
        svg{
          width: 24px;
          height: 24px;
          stroke: #823aa099;
          stroke-width: 1;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }
        cursor: pointer;
      }
    }
  }
  .detail-body{
    padding: 10px;
    border: 1px solid #000;
    height: 620px;
    overflow-y: auto;
    &::-webkit-scrollbar{
      width: 5px;
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px #823aa005;
      background: #823aa055;
      position: absolute;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #823aa005;
      border-radius: 10px;
      background: #EDEDED;
      position: absolute;
    }
    .info{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
      .vodImg{
        width: 200px;
        img{
          width: 100%;
          height: auto;
        }
      }
      .vodAd{
        display: none;
      }
      .vodInfo{
        flex: 1;
        margin-left: 20px;
        .vodh{
          h2{
            display: inline-block;
          }
          span{
            font-size: 12px;
            margin-left: 10px;
          }
          label{
            font-size: 20px;
            font-weight: bold;
            margin-left: 20px;
          }
        }
        .cont, .tags{
          display: none;
        }
        li{
          list-style: none;
          font-size: 14px;
          height: 20px;
          overflow: hidden;
          a{
            display: none;
            pointer-events: none;
          }
          span{
            word-wrap:break-word
          }
        }
      }
    }
  }
}
</style>
