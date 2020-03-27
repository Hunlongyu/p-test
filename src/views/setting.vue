<template>
  <div class="setting">
    <div class="logo"><img src="@/assets/image/logo.png"></div>
    <div class="language">{{ $t('zh') }}</div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import setting from '../lib/dexie/setting'
export default {
  name: 'setting',
  computed: {
    theme: {
      get () {
        return this.$store.getters.getTheme
      },
      set (val) {
        this.SET_THEME(val)
      }
    },
    language: {
      get () {
        return this.$store.getters.getLanguage
      },
      set (val) {
        this.SET_LANGUAGE(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_THEME', 'SET_LANGUAGE'])
  },
  created () {
    setting.find().then(res => {
      console.log(res, 'find')
    })
  }
}
</script>
<style lang="scss" scoped>
.setting{
  height: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
  .logo{
    margin-top: 40px;
    width: 100%;
    text-align: center;
    img{
      width: 120px;
      height: auto;
    }
  }
}
</style>
