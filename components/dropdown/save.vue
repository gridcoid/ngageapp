<template>
  <div class="dropdown-container">
    <div
      class="dropdown-btn noselect flex items-center justify-between cursor-pointer"
      :style="
        show ? 'border-top-left-radius:0px;border-top-right-radius:0px' : ''
      "
      :class="{ disabled: loading }"
      @click="!loading && $emit('preview')"
    >
      <div class="flex card-dropdown items-center justify-center">
        <IconSave class="icon-prev" />
        <div class="title-dropdown">
          {{ nameBtn }}
        </div>
      </div>
      <div
        class="btn-show flex items-center justify-center"
        @click="!loading && open()"
      >
        <img src="~/assets/images/icon_kanan.svg" />
      </div>
    </div>
    <div v-if="show" class="dropdown-list">
      <slot name="body" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nameBtn: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    open() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  // position: relative;
  .dropdown-btn {
    width: 161px;
    height: 40px;
    background: #1b63d4;
    border-radius: 5px;
    // padding-left:18px;
    .card-dropdown {
      width: 120px;
      height: 100%;
      .icon-prev {
        margin-right: 10px;
      }
      .icon-next {
        margin-right: 10px;
      }
      .title-dropdown {
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: white;
      }
    }
    .btn-show {
      width: 40px;
      height: 100%;
      border-left: 1px solid #e2e2e2;
    }
  }
  .dropdown-btn:hover {
    opacity: 0.8;
  }
  .dropdown-list {
    position: absolute;
    top: -24px;
    z-index: 9999;
    width: 161px;
    .item-menu {
      cursor: pointer;
      height: 40px;
      padding-left: 15px;
      border-left: 1px solid #e2e2e2;
      border-right: 1px solid #e2e2e2;
      width: 161px;
      height: 40px;
      background: #ffffff;
      .icon-item {
        margin-right: 12px;
      }
    }
    .item-menu:hover {
      background-color: rgb(243 244 246);
    }
  }
}
</style>
