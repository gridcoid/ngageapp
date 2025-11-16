<template>
  <div
    class="btn-next flex items-center justify-center"
    :class="value === 1 ? 'btn-disable' : 'btn-next'"
  >
    <IconPrev :bg-color="value === 1 ? '#A1ADB9' : '#1B63D4'" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-next {
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c3ced9;
  border-radius: 5px;
  cursor: pointer;
}
.btn-disable {
  width: 40px;
  height: 40px;
  background: #f1f1f1;
  border: 1px solid #c3ced9;
  border-radius: 5px;
  cursor: pointer;
}
.btn-next:hover {
  background: #f1f1f1;
}
</style>
