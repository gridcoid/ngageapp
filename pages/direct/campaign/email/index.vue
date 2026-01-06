<template>
  <div class="kg-construction flex flex-col items-center justify-center">
    <img src="~/assets/images/not_ready.png" width="150" />
    <div class="title-cons">This page is not available yet.</div>
  </div>
</template>

<script>
export default {
  name: 'EmailPage',
  layout: 'default',
  head() {
    return {
      title: 'Email Campaign - ' + this.$config.appName,
    }
  },
}
</script>

<style lang="scss" scoped>
.kg-construction {
  height: 93vh;
  width: 100%;
  background-color: #fafbfc;
}
.title-cons {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #333333;
}
</style>
