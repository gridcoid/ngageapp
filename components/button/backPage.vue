<template>
  <div
    class="flex items-center justify-center btn-back no-select"
  >
    <IconLeft />
    <span class="name-btn">{{ text }}</span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-back {
      width: fit-content;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 34px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .btn-back:hover {
      background-color: rgb(243 244 246);
      border: 1px solid rgb(243 244 246);
    }
</style>
