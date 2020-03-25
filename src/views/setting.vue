<template>
  <div class="setting">setting</div>
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
