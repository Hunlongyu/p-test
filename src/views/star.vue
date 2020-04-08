<template>
  <div class="star">
    <div class="vue-table">
      <div class="tHead">
        <span class="name">影片名称</span>
        <span class="type">类型</span>
        <span class="time">时间</span>
        <span class="from">来源</span>
        <span class="operate">操作</span>
      </div>
      <div class="tBody">
        <ul v-show="!loading">
          <li v-for="(i, j) in data" :key="j" @click="detailEvent(i)">
            <span class="name">{{i.name}}</span>
            <span class="type">{{i.type}}</span>
            <span class="time">{{i.time}}</span>
            <span class="from">{{ sites[i.site].name }}</span>
            <span class="operate">
              <span class="btn" @click.stop="playEvent(i)">播放</span>
              <span class="btn" @click.stop="deleteEvent(i)">删除</span>
              <span class="btn" @click.stop="shareEvent(i)">分享</span>
            </span>
          </li>
        </ul>
        <div class="tBody-mask" v-show="loading">
          <div class="loader"></div>
        </div>
      </div>
      <div class="tFooter">
        <span class="tFooter-span">共 {{total}} 条数据</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import video from '../lib/dexie/video'
import sites from '../lib/site/sites'
export default {
  name: 'star',
  data () {
    return {
      sites: sites,
      data: [],
      loading: true,
      total: 0
    }
  },
  computed: {
    view () {
      return this.$store.getters.getView
    },
    detail: {
      get () {
        return this.$store.getters.getDetail
      },
      set (val) {
        this.SET_DETAIL(val)
      }
    },
    video: {
      get () {
        return this.$store.getters.getVideo
      },
      set (val) {
        this.SET_VIDEO(val)
      }
    }
  },
  watch: {
    view () {
      this.getAllStar()
    }
  },
  methods: {
    ...mapMutations(['SET_DETAIL', 'SET_VIDEO']),
    detailEvent (e) {
      this.detail = {
        show: true,
        url: e.detail
      }
    },
    playEvent (e) {
      console.log(e, 'play')
    },
    deleteEvent (e) {
      video.remove(e.id).then(res => {
        if (res) {
          this.$message.warning('删除失败')
        } else {
          this.$message.success('删除成功')
        }
        this.getAllStar()
      })
    },
    shareEvent (e) {
      console.log(e, 'share')
    },
    getAllStar () {
      video.all().then(res => {
        this.data = res.reverse()
        this.loading = false
        this.total = res.length
      })
    }
  },
  created () {
    this.getAllStar()
  }
}
</script>
<style lang="scss" scoped>
.star{
  height: 660px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
}
</style>
