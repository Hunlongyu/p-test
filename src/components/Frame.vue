<template>
  <div class="frame">
    <span class="min" @click="frameClickEvent('min')"></span>
    <span class="close" @click="frameClickEvent('close')"></span>
  </div>
</template>
<script>
const ipc = require('electron').ipcRenderer
export default {
  name: 'frame',
  methods: {
    frameClickEvent (e) {
      ipc.send(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.frame{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  -webkit-app-region: drag;
  span{
    -webkit-app-region: no-drag;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    &.min{
      background-color: #ffbe2a;
    }
    &.close{
      background-color: #ff5f56;
    }
  }
}
</style>
