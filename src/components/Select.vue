<template>
  <div class="vst" @mouseleave="show=false">
    <div class="vst-placeholder" @click="show = true">{{select}}</div>
    <div class="vst-options" v-show="show">
      <ul>
        <li :class="select === i ? 'active' : ''" v-for="(i, j) in options" :key="j" @click="optionClick(i)">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vst',
  data () {
    return {
      show: false,
      select: null
    }
  },
  props: [
    'placeholder',
    'options'
  ],
  methods: {
    optionClick (e) {
      this.select = e
      this.show = false
    }
  },
  created () {
    this.select = this.placeholder
  }
}
</script>
<style lang="scss" scoped>
.vst{
  margin: 10px;
  position: relative;
  display: inline-block;
  width: 220px;
  height: 40px;
  vertical-align: middle;
  color: #332f5c;
  box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  cursor: pointer;
  border-radius: 2px;
  user-select: none;
  &:hover{
    box-shadow: 0 14px 26px -12px #8e8da26b, 0 4px 23px 0 #8e8da21f, 0 8px 10px -5px #8e8da233;
  }
  .vst-placeholder{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    &::after{
      display: inline-block;
      margin-left: .255em;
      vertical-align: .255em;
      content: "";
      border-top: .3em solid;
      border-right: .3em solid transparent;
      border-bottom: 0;
      border-left: .3em solid transparent;
    }
  }
  .vst-options{
    z-index: 2;
    background-color: #fff;
    width: 100%;
    overflow-y: auto;
    min-height: 0;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.12);
    ul{
      padding: 0;
      margin: 0;
      list-style: none;
      li{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 25px;
        &:hover{
          background-color: #823aa022;
        }
        &.active{
          background-color: #823aa033;
        }
      }
    }
  }
}
</style>
