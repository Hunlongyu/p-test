<template>
  <div class="aside">{{ $t('zh') }}</div>
</template>
<script>
export default {
  name: 'Aside'
}
</script>
<style lang="scss" scoped>
.aside{
  width: 60px;
  height: 100%;
  user-select: none;
  -webkit-app-region: drag;
}
</style>
