<template>
  <div class="component-card flex flex-col">
    <div class="header-component flex items-center justify-between">
      <div class="flex items-center">
        <slot name="header" />
      </div>
      <div class="flex btn-preview noselect" v-on:click="toggleBody">
        <img src="~/assets/images/icon/preview.svg" />
      </div>
    </div>
    <div class="body-component" v-if="isBodyVisible">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeStatus: 'Goal',
      isBodyVisible: true,
    }
  },
  methods: {
    statusActive(x) {
      this.activeStatus = x
    },
    toggleBody() {
      this.isBodyVisible = !this.isBodyVisible
    },
  },
}
</script>

<style lang="scss" scoped>
.component-card {
  background: #ffffff;
  border: 1px solid #e2e2e2;
  margin-bottom: 10px;
  .header-component {
    border-bottom: 1px solid #e2e2e2;
    height: 48px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 500;
    font-size: 16px;
    color: #333333;
    .icon-header {
      margin-right: 10px;
    }
    .btn-preview {
      cursor: pointer;
    }
  }
  .body-component {
    padding: 10px 15px 10px 15px;
  }
}
</style>
