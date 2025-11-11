<template>
  <div class="flex items-center flex-wrap">
    <div class="progress-card">
      <div class="bg-progress" />
      <div class="item-progress" :style="'left:' + value + '%'" />
    </div>
    <div v-if="value % 1 != 0" class="value-progress">
      {{ value.toFixed(2) }}%
    </div>
    <div v-else class="value-progress">
      {{ value }}%
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.value-progress {
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #5C6B7A;
  margin-left:10px;
}
.progress-card {
  width: 70px;
  height: 32px;
  position: relative;
  .bg-progress {
    position: absolute;
    top: 4px;
    background: #7bbc49;
    border: 1px solid #00786a;
    border-radius: 2px;
    width: 71px;
    height: 24px;
  }
  .item-progress {
    width: 2px;
    height: 32px;
    background: #454545;
    position: absolute;
    top: 0px;
    left: 100%;
  }
}
</style>
