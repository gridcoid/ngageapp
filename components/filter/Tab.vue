<template>
  <div class="status-filter flex items-center justify-around">
    <div
      class="flex items-center justify-center card-filter"
      :style="activeStatus === 'all' ? 'border-bottom: 2px solid #1B63D4;' : ''"
      @click="statusActive('all')"
    >
      <img src="~/assets/images/campaign/icon_all.svg" />
      <div class="name-status">All</div>
    </div>
    <div
      class="flex items-center justify-center card-filter"
      :style="
        activeStatus === 'delivering' ? 'border-bottom: 2px solid #1B63D4;' : ''
      "
      @click="statusActive('delivering')"
    >
      <img src="~/assets/images/campaign/icon_delivering.svg" />
      <div class="name-status">Delivering</div>
    </div>
    <div
      class="flex items-center justify-center card-filter"
      :style="
        activeStatus === 'inactive' ? 'border-bottom: 2px solid #1B63D4;' : ''
      "
      @click="statusActive('inactive')"
    >
      <img src="~/assets/images/campaign/icon_inactive.svg" />
      <div class="name-status">Inactive</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    activeStatus: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.status-filter {
  width: 420px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  .card-filter {
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    .name-status {
      color: #454545;
      font-weight: 400;
      font-size: 16px;
      margin-left: 10px;
      line-height: 40px;
    }
  }
}
</style>
