<template>
  <div class="flex" style="height: 100%; width: 100%">
    <client-only>
      <Sidebar />
      <div class="flex flex-col w-full h-full min-h-screen bg-gray-50">
        <Navbar class="k-navbar" />
        <div class="main-menu">
          <Nuxt />
        </div>
      </div>
      <Snackbar style="position: fixed; bottom: 30px; right: 40px" />
      <ChangePassword v-show="changePassword" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      changePassword: (state) => {
        return state.user.changePassword
      },
    }),
  },
  mounted() {
    this.$store.commit('user/SET_CHANGE_DIALOG', false)
  },
}
</script>
<style lang="scss" scoped>
html {
  font-family: 'Cabin';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: $colorGrey;
}
.main-menu {
  height: 100%;
}
:root {
  --vs-line-height: 1.75;
}
:deep() {
  --vs-line-height: 1.75;
}
.k-navbar {
  z-index: 2;
}
</style>
