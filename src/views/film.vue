<template>
  <div class="film">
    <div class="top">
      <Vst :placeholder="site" :options="options" />
      <Vst :placeholder="site" :options="options" />
      <Vst :placeholder="site" :options="options" />
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
import Vst from '../components/Select'
import Vtb from '../components/Table'
import tools from '../lib/site/tools'
export default {
  name: 'film',
  data () {
    return {
      site: 'of',
      options: ['site', 'of', 'options'],
      inputFocus: false
    }
  },
  components: {
    Vst,
    Vtb
  },
  created () {
    // tools.film_get(6).then(res => {
    //   console.log(res, 'film')
    // })

    tools.film_get(6).then(res => {
      console.log(res, 'film')
      const url = res.list[2].detail
      // console.log(url, 'url')
      tools.detail_get(6, url).then(res => {
        console.log(res, 'detail')
      })
    })
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
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
    .search{
      margin: 10px;
      width: 200px;
      height: 30px;
      display: flex;
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
        &:focus{
          outline: none;
        }
      }
      &.active{
        box-shadow: 0 14px 26px -12px #8e8da26b, 0 4px 23px 0 #8e8da21f, 0 8px 10px -5px #8e8da233;
        svg{
          stroke-width: 1.5;
          // fill: #823aa022;
        }
      }
    }
  }
  .middle{
    height: 610px;
    width: 100%;
    margin-top: 10px;
    padding-bottom:0px;
    background-color: #fff;
    box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  }
}
</style>
