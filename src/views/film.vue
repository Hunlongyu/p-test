<template>
  <div class="film">
    <div class="top">
      <!-- site -->
      <div class="vue-select" @mouseleave="show.site = false">
        <div class="vs-placeholder" @click="show.site = true">{{sites[site].name}}</div>
        <div class="vs-options" v-show="show.site">
          <ul>
            <li :class="site === j ? 'active' : ''" v-for="(i, j) in sites" :key="j" @click="siteClick(i, j)">{{ i.name }}</li>
          </ul>
        </div>
      </div>
      <!-- tags -->
      <div class="vue-select" @mouseleave="show.tags = false" v-if="tags.length > 0">
        <div class="vs-placeholder" @click="show.tags = true">{{tags[tag].title}}</div>
        <div class="vs-options" v-show="show.tags">
          <ul>
            <li :class="tag === j ? 'active' : ''" v-for="(i, j) in tags" :key="j" @click="tagClick(i, j)">{{ i.title }}</li>
          </ul>
        </div>
      </div>
      <!-- type -->
      <div class="vue-select" @mouseleave="show.type = false" v-if="types.length > 0">
        <div class="vs-placeholder" @click="show.type = true">{{types[type].title}}</div>
        <div class="vs-options" v-show="show.type">
          <ul>
            <li :class="type === j ? 'active' : ''" v-for="(i, j) in types" :key="j" @click="typeClick(i, j)">{{ i.title }}</li>
          </ul>
        </div>
      </div>
      <div :class="[inputFocus ? 'active ': ''] + 'search'" @mouseover="inputFocus = true" @mouseleave="inputFocus = false">
        <div class="search-icon">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="searchIconTitle">
            <title id="searchIconTitle">Search</title>
            <path d="M14.4121122,14.4121122 L20,20"></path>
            <circle cx="10" cy="10" r="6"></circle>
          </svg>
        </div>
        <input type="text" class="search-box">
      </div>
    </div>
    <div class="middle">
      <Vtb />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Vtb from '../components/Table'
import sites from '../lib/site/sites'
import tools from '../lib/site/tools'
export default {
  name: 'film',
  data () {
    return {
      sites: sites,
      tags: [],
      tag: 0,
      types: [],
      type: 0,
      show: {
        site: false,
        tags: false,
        type: false
      },
      inputFocus: false
    }
  },
  components: {
    Vtb
  },
  computed: {
    site: {
      get () {
        return this.$store.getters.getSite
      },
      set (val) {
        this.SET_SITE(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_SITE']),
    siteClick (e, n) {
      this.site = n
      this.tags = this.sites[n].tags
      this.tag = 0
      this.show.site = false
      const id = this.tags[0].id
      tools.film_get(n, id).then(res => {})
    },
    tagClick (e, n) {
      this.tag = n
      this.types = this.tags[n].children
      this.type = 0
      this.show.tags = false
      tools.film_get(this.site, n).then(res => {})
    },
    typeClick (e, n) {
      this.type = n
      this.show.type = false
    }
  },
  created () {
    // this.tags = this.sites[this.site].tags

    // tools.film_get(6).then(res => {
    //   console.log(res, 'film')
    //   const url = res.list[2].detail
    //   // console.log(url, 'url')
    //   tools.detail_get(6, url).then(res => {
    //     console.log(res, 'detail')
    //   })
    // })

    // tools.film_get(6).then(res => {
    //   // console.log(res, 'film')
    //   const url = res.list[2].detail
    //   // console.log(url, 'url')
    //   tools.detail_get(6, url).then(res => {
    //     // console.log(res, 'detail')
    //   })
    // })
    // tools.search_get(5, '人').then(res => {
    //   console.log(res, 'search')
    // })
  }
}
</script>
<style lang="scss" scoped>
.film{
  height: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: viewFadeIn 1s ease-in both;
  .top{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search{
      width: 200px;
      height: 30px;
      display: flex;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
      svg{
        width: 20px;
        height: 20px;
        stroke: #823aa099;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .search-icon{
        width: 40px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-box{
        width: 160px;
        height: 30px;
        border-radius: 20px;
        border: none;
        background-color: #00000000;
        text-indent: 2px;
        &:focus{
          outline: none;
          border: none;
        }
      }
      &.active{
        box-shadow: 0 14px 26px -12px #8e8da26b, 0 4px 23px 0 #8e8da21f, 0 8px 10px -5px #8e8da233;
        svg{
          stroke-width: 1.5;
          fill: #823aa022;
        }
      }
    }
  }
  .middle{
    height: 630px;
    width: 100%;
    margin-top: 10px;
    padding-bottom:0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  }
}
</style>
