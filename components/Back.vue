<template>
  <el-button type="text" @click="goBack" class="flex items-center space-x-2">
    <i class="ti ti-arrow-left text-base"></i>
    <span>Back</span>
  </el-button>
</template>

<script>
export default {
  name: 'Back',

  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push('/') // change to your fallback route
      }
    },
  },
}
</script>
