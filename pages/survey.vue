<template>
  <div class="kg-construction flex flex-col items-center justify-center">
    <img src="~/assets/images/construction.svg" />
    <div class="title-cons">
      Ups, this gonna be interesting stuff, we're cooking it!
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Survey - ' + this.$config.appName,
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
.sub-cons {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #757575;
}
</style>
