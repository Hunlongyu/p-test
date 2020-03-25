<template>
  <div class="film">
    <div class="top">
      <div class="left">https://uilibrary.github.io/done-design-system/docs/plugins/select.html</div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'film',
  data () {
    return {
      site: null,
      options: ['site', 'of', 'options']
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.film{
  height: 100%;
  width: 100%;
  background-color: #fff;
  animation: viewFadeIn 1s ease-in both;
  @keyframes viewFadeIn {
    to{
      box-shadow: 0 2px 12px 0 #00000033;
    }
  }
  .top{
    width: 100%;
    height: 60px;
    display: flex;
    // border: 1px solid #000;
    .left, .right{
      width: 30%;
      height: 100%;
      // border: 1px solid #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
    }
  }
}
</style>
