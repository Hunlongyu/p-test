<template>
  <div class="star">
    <Vtb />
  </div>
</template>
<script>
import Vtb from '../components/Table'
export default {
  name: 'star',
  components: {
    Vtb
  }
}
</script>
<style lang="scss" scoped>
.star{
  height: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  animation: viewFadeIn 1s ease-in both;
  padding: 10px 10px 0;
  @keyframes viewFadeIn {
    to{
      box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
    }
  }
}
</style>
