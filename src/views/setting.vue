<template>
  <div class="setting">{{ $t('zh') }}</div>
</template>
<script>
import { mapMutations } from 'vuex'
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
  animation: viewFadeIn 1s ease-in both;
  padding: 10px 10px 0;
  @keyframes viewFadeIn {
    to{
      box-shadow: 0 3px 1px -2px #8e8da233, 0 2px 2px 0 #8e8da224, 0 1px 5px 0 #8e8da21f;
    }
  }
}
</style>
