<template>
  <div class="dropdown-container">
    <div
      class="dropdown-btn noselect flex items-center justify-between cursor-pointer"
      :style="
        indexList == activeDropdown
          ? 'border-end-end-radius:0px;border-end-start-radius:0px'
          : ''
      "
    >
      <div class="flex card-dropdown items-center" @click="$emit('preview')">
        <i
          v-if="icons === 'preview'"
          class="ti ti-eye mr-3"
          style="color: #1b63d4"
        />
        <i
          v-if="icons === 'refresh'"
          class="ti ti-refresh mr-3"
          style="color: #1b63d4"
        />
        <i
          v-if="icons === 'play'"
          class="ti ti-player-play mr-3"
          style="color: #1b63d4"
        />
        <i
          v-if="icons === 'pause'"
          class="ti ti-player-pause mr-3"
          style="color: #1b63d4"
        />
        <i
          v-if="icons === 'stop'"
          class="ti ti-player-stop mr-3"
          style="color: #1b63d4"
        />

        <div class="title-dropdown" :style="'color: ' + colorText">
          {{ nameBtn }}
        </div>
      </div>
      <div class="btn-show flex items-center justify-center" @click="open()">
        <img
          v-if="indexList == activeDropdown"
          src="~/assets/images/icon/arrow_up.svg"
        />
        <img v-else src="~/assets/images/icon/arrow_down.svg" />
      </div>
    </div>
    <div v-if="indexList == activeDropdown" class="dropdown-list">
      <slot name="body" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    showBtn: {
      type: Boolean,
      default: false,
    },
    indexList: {
      type: Number,
      default: 0,
    },
    nameBtn: {
      type: String,
      default: '',
    },
    icons: {
      type: String,
      default: '',
    },
    colorText: {
      type: String,
      default: '#1B63D4',
    },
  },
  data() {
    return {
      activeItem: null,
    }
  },
  computed: {
    ...mapState({
      activeDropdown: (state) => {
        return state.user.activeDropdown
      },
    }),
  },
  mounted() {
    this.$store.commit('user/SET_DROPDOWN', null)
  },
  methods: {
    open() {
      if (this.activeDropdown !== null) {
        this.$store.commit(
          'user/SET_DROPDOWN',
          this.activeDropdown === this.indexList ? null : this.indexList
        )
      } else {
        this.$store.commit('user/SET_DROPDOWN', this.indexList)
      }
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
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    // padding-left:18px;
    .card-dropdown {
      width: 120px;
      height: 100%;
      padding-left: 20px;
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
        color: #1b63d4;
      }
    }
    .btn-show {
      width: 40px;
      height: 100%;
      border-left: 1px solid #e2e2e2;
    }
  }
  .dropdown-btn:hover {
    background-color: rgb(243 244 246);
  }
  .dropdown-list {
    position: absolute;
    // top:55px;
    z-index: 3;
    width: 161px;
    .item-menu {
      cursor: pointer;
      height: 40px;
      padding-left: 20px;
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
