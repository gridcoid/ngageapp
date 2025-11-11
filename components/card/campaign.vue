<template>
  <div class="card-container">
    <div class="header-card cursor-pointer flex justify-between">
      <div class="text-header" @click="$emit('detail')">
        <slot name="header" />
      </div>
      <!-- <div
        class="circle-header"
        :style="status === 'inactive' ? 'border-color:#E2E2E2' : ''"
      /> -->
    </div>
    <div class="cursor-pointer" @click="$emit('detail')">
      <div
        v-if="status === 'running'"
        class="status-card flex items-center justify-center no-select"
      >
        Running
      </div>
      <div
        v-if="status === 'inactive'"
        class="status-card flex items-center justify-center no-select"
        style="background: #fff3dd; color: #fbab18"
      >
        Inactive
      </div>
      <div
        v-if="status === 'paused'"
        class="status-card flex items-center justify-center no-select"
      >
        Paused
      </div>
      <div
        v-if="status === 'completed'"
        class="status-card flex items-center justify-center no-select"
      >
        Completed
      </div>
    </div>
    <div class="statistics-card">
      <!-- <div class="flex justify-between items-center">
        <div class="text-price">
          CPM: <span class="font-bold"> 0.001 USD </span>
        </div>
        <IconDollar />
      </div>
      <div class="audience">
        1 audiences
      </div>
      <div class="flex justify-between items-center">
        <div class="text-user">
          Est. 2.000.000 users
        </div>
        <IconUser />
      </div> -->
      <div class="audience">
        1 creatives
      </div>
      <div class="flex justify-between items-center">
        <div class="text-user flex items-center">
          <IconPriceUp class="mr-2" />
          Top CTR 0.05%
        </div>
        <IconCreative />
      </div>
    </div>
    <div class="status-filter flex items-center justify-around">
      <div
        class="flex items-center justify-center card-filter"
        :style="
          activeStatus === 'Goal' ? 'border-bottom: 2px solid #1B63D4;' : ''
        "
        @click="statusActive('Goal')"
      >
        <div class="name-status">
          Impression
        </div>
      </div>
      <!-- <div
        class="flex items-center justify-center card-filter"
        :style="
          activeStatus === 'Summary' ? 'border-bottom: 2px solid #1B63D4;' : ''
        "
        @click="statusActive('Summary')"
      >
        <div class="name-status">
          Summary
        </div>
      </div> -->
    </div>
    <div v-if="activeStatus === 'Goal'">
      <slot name="Goal" />
    </div>
    <div v-if="activeStatus === 'Summary'">
      <slot name="Summary" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeStatus: 'Goal'
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
.card-container {
  height: 100%;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 15px;
  .header-card {
    .text-header {
      font-family: 'Cabin';
      font-weight: 700;
      font-size: 16px;
      color: #454545;
      max-width: 90%;
    }
    .circle-header {
      border: 2px solid #7bbc49;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-top: 6px;
    }
  }
  .status-card {
    font-family: 'Cabin';
    color: #7bbc49;
    font-weight: 400;
    font-size: 14px;
    background: #ecf5e5;
    border-radius: 5px;
    height: 25px;
    margin-top: 10px;
    width: 120px;
  }
  .statistics-card {
    margin-top: 17px;
    border-top: 1px solid #e2e2e2;
    padding-top: 15px;
    margin-bottom: 15px;
    .text-price {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 14px;
      color: #454545;
    }
    .audience {
      font-family: 'Cabin';
      margin-top: 10px;
    }
    .text-user {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 14px;
      color: #757575;
    }
  }

  .status-filter {
    width: 100%;
    height: 44px;
    background: #ffffff;
    border-radius: 5px;
    .card-filter {
      width: 100%;
      margin-right: 5px;
      margin-left: 5px;
      cursor: pointer;
      .name-status {
        font-family: 'Cabin';
        color: #454545;
        font-weight: 400;
        font-size: 16px;
        margin-left: 10px;
        line-height: 40px;
      }
    }
  }
}
</style>
