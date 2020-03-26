<template>
  <div class="table">
    <div class="tHead">
      <span class="name">影片名称</span>
      <span class="type">类型</span>
      <span class="time">时间</span>
      <span class="from">来源</span>
      <span class="operate">操作</span>
    </div>
    <div class="tBody" :style="{overflowY:scroll? 'auto' : 'hidden',paddingRight: scroll ? '0': '5px' }" @mouseenter="scroll = true" @mouseleave="scroll = false">
      <ul>
        <li v-for="(i, j) in 50" :key="j">
          <span class="name">良医</span>
          <span class="type">欧美剧</span>
          <span class="time">2019-09-16 16:40:60</span>
          <span class="from">OK资源网</span>
          <span class="operate">删除 播放 分享</span>
        </li>
      </ul>
    </div>
    <div class="tFooter">
      <span>共124条</span>
      <span class="icon">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle">
          <title id="chevronLeftIconTitle">Chevron Left</title>
          <polyline points="14 18 8 12 14 6 14 6"></polyline>
        </svg>
      </span>
      <span>2</span>
      <span class="icon">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle">
          <title id="chevronRightIconTitle">Chevron Right</title>
          <polyline points="10 6 16 12 10 18 10 18"></polyline>
        </svg>
      </span>
      <span>
        <input class="jump" type="text">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vtb',
  data () {
    return {
      scroll: false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.table{
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #332f5c;
  font-size: 15px;
  padding: 0 10px;
  .tHead{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #823aa022;
    span{
      display: flex;
      width: 180px;
      padding-left: 10px;
      font-size: 16px;
      &.name{
        flex: 1;
        padding-left: 10px;
      }
      &.type{
        width: 120px;
      }
      &.from{
        width: 120px;
      }
    }
  }
  .tBody{
    flex: 1;
    overflow-y: auto;
    border-bottom: 1px solid #823aa022;
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
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        height: 50px;
        border-bottom: 1px solid #823aa010;
        cursor: pointer;
        &:hover{
          animation: tableHoverAni 0.5s ease both;
          @keyframes tableHoverAni {
            to{
              box-shadow: 0 14px 26px -12px #8e8da26b, 0 4px 23px 0 #8e8da21f, 0 8px 10px -5px #8e8da233;
            }
          }
        }
        span{
          display: flex;
          width: 180px;
          padding-left: 10px;
          font-size: 13px;
          &.name{
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &.type{
            width: 120px;
          }
          &.from{
            width: 120px;
          }
        }
      }
    }
  }
  .tFooter{
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
    .icon{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      &:hover{
        background-color: #823aa011;
      }
    }
    .jump{
      width: 40px;
      height: 20px;
      text-align: center;
      &:focus{
        outline: none;
      }
    }
  }
}
</style>
