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
    <div class="bottom">
      <span>共124条</span>
      <span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle">
          <title id="chevronLeftIconTitle">Chevron Left</title>
          <polyline points="14 18 8 12 14 6 14 6"></polyline>
        </svg>
      </span>
      <span>2</span>
      <span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle">
          <title id="chevronRightIconTitle">Chevron Right</title>
          <polyline points="10 6 16 12 10 18 10 18"></polyline>
        </svg>
      </span>
      <span>
        <input type="number">
      </span>
    </div>
  </div>
</template>
<script>
import Vst from '../components/Select'
import Vtb from '../components/Table'
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
  }
}
</script>
<style lang="scss" scoped>
.film{
  height: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  animation: viewFadeIn 1s ease-in both;
  @keyframes viewFadeIn {
    to{
      box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
    }
  }
  .top{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search{
      margin: 10px;
      width: 220px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
      svg{
        width: 24px;
        height: 24px;
        stroke: #823aa099;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .search-icon{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-box{
        width: 180px;
        height: 40px;
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
    height: 580px;
    width: 100%;
    padding: 10px;
  }
  .bottom{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    padding-right: 10px;
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      font-size: 12px;
    }
    svg{
      width: 24px;
      height: 24px;
      stroke: #823aa099;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  }
}
</style>
