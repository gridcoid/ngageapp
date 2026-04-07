<template>
  <transition name="slide">
    <div
      v-show="show"
      class="snackbar-card flex justify-between items-center"
      :class="styleSnackbar"
    >
      <div class="flex items-center">
        <IconAlertLoading
          v-if="type === 'loading'"
          style="margin-right: 10px"
        />
        <IconAlertSuccess
          v-if="type === 'success'"
          style="margin-right: 10px"
        />
        <IconAlertFailed v-if="type === 'failed'" style="margin-right: 10px" />

        <div style="max-width: 350px">
          {{ message }}
        </div>
      </div>
      <IconClose class="cursor-pointer" @click.native="closeSnackbar()" />
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      type: 'loading',
      percentage: 0,
      t: null,
    }
  },
  computed: {
    styleSnackbar() {
      if (this.type === 'loading') {
        return 'border-loading'
      }
      if (this.type === 'success') {
        return 'border-success'
      } else {
        return 'border-failed'
      }
    },
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.type = state.snackbar.type
        this.show = true
      }

      // this.countDownTimer()
      if (this.type !== 'loading') {
        this.t = setTimeout(() => this.closeSnackbar(), 3000)
      }
    })
  },

  methods: {
    closeSnackbar() {
      this.show = false
      clearInterval(this.t)
    },
  },
}
</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.snackbar-card {
  width: 450px;
  min-height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  border-left: 4px solid #fbab18;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  z-index: 9999;
}
.border-loading {
  border-left: 4px solid #fbab18;
}
.border-success {
  border-left: 4px solid #7bbc49;
}
.border-failed {
  border-left: 4px solid #ed543a;
}
</style>
