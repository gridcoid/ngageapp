<template>
  <div class="card-status flex items-center justify-center no-select" :style="checkType">
    <div :style="checkStatus" class="status-card" />
    {{ text }}
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
  computed: {
    checkType () {
      if (this.text.toLowerCase() === 'paused') {
        return 'background: #C3CED9;border: 1px solid #5C6B7A;color: #5C6B7A;'
      }
      if (this.text.toLowerCase() === 'running') {
        return 'background: #ECF5E5;border: 1px solid #7BBC49;color: #7BBC49;'
      }
      if (this.text.toLowerCase() === 'inactive') {
        return 'background: #FFF3DD;border: 1px solid #FBAB18;color: #FBAB18;'
      } else {
        return 'background: #E1EDFF;border: 1px solid #1B63D4;color: #1B63D4;'
      }
    },
    checkStatus () {
      if (this.text.toLowerCase() === 'paused') {
        return 'background: #5C6B7A;border: 2px solid #5C6B7A;'
      }
      if (this.text.toLowerCase() === 'running') {
        return 'background: #7BBC49;border: 2px solid #7BBC49;'
      }
      if (this.text.toLowerCase() === 'inactive') {
        return 'background: #FBAB18;border: 2px solid #FBAB18;'
      } else {
        return 'background: #1B63D4;border: 2px solid #1B63D4;'
      }
    }
  },
  methods: {
    statusActive (x) {
      this.activeStatus = x
    }
  }
}
</script>
<style lang="scss" scoped>
.card-status {
  padding-left:18px;
  padding-right:18px;
  width:fit-content;
  height: 33px;
  background: #FFF3DD;
  border: 1px solid #FBAB18;
  border-radius: 5px;

  font-family: 'Cabin';
  font-weight: 600;
  font-size: 18px;
  color: #FBAB18;
  text-transform:capitalize;
  .status-card {
    width: 10px;
    height: 10px;
    background: #5C6B7A;
    border: 2px solid #5C6B7A;
    border-radius: 100px;
    margin-right:10px;
  }
}
</style>
