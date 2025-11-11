<template>
  <div class="alert-card flex items-center justify-center">
    <img src="~/assets/images/icon_alert.svg" class="flex">
    <div class="flex-auto text-alert">
      Creating placement...
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.alert-card {
  width: 450px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  border-left: 3px solid #ed543a;
  padding: 14px 14px 14px 15px;
  .text-alert {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
    padding-left: 15px;
  }
}
</style>
