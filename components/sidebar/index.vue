<template>
  <div v-if="!sidebar" class="flex flex-col h-screen overflow-y-auto k-sidebar">
    <div class="header">
      <div class="grid grid-cols-2 place-items-center">
        <div class="justify-self-start">
          <img
            src="~/assets/images/logo_baru.svg"
            class="logo-unimind"
            @click="toHome()"
          />
        </div>
        <div class="justify-self-end">
          <div class="btn-nav grid place-items-center" @click="onSidebar()">
            <IconArrowLeft class="icon-arrow-expand" bg-color="#1B63D4" />
          </div>
        </div>
      </div>
      <button
        v-show="handleRole"
        type="button"
        class="k-btn flex items-center justify-center"
      >
        <IconPlus class="icon-btn" bg-color="#1B63D4" />
        Create Something
      </button>
    </div>
    <div class="flex flex-col justify-between mt-0" style="margin-top: 10px">
      <SidebarItemList />
    </div>
  </div>
  <div
    v-else
    class="flex flex-col h-screen overflow-y-auto k-sidebar"
    style="width: 84px"
  >
    <div class="header">
      <div class="grid grid-flow-row auto-rows-max place-items-center">
        <div class="justify-self-center" style="margin-bottom: 20px">
          <img
            src="~/assets/images/logo_small.png"
            style="cursor: pointer"
            @click="toHome()"
          />
        </div>
        <div class="justify-self-center">
          <div class="btn-nav grid place-items-center" @click="onSidebar()">
            <IconArrowRight bg-color="#1B63D4" class="icon-arrow-collapse" />
          </div>
        </div>
      </div>

      <div v-show="handleRole" class="btn-plus grid place-items-center">
        <IconPlus class="icon-arrow" bg-color="#1B63D4" />
      </div>
    </div>
    <div class="flex flex-col justify-between" style="margin-top: 30px">
      <SidebarItemList />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      handleRole: true,
      tinggi: 0,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      roleId: (state) => {
        return state.user.roleId
      },
    }),
  },
  mounted() {
    this.checkRole()
  },

  methods: {
    open() {},
    onSidebar() {
      this.$store.commit('user/SET_SIDEBAR')
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
    checkRole() {
      if (this.roleId === 4) {
        this.handleRole = false
      } else {
        this.handleRole = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.title-navmenu {
  padding-top: 2px;
  margin-left: 10px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 50ms ease-in 0s;
}

.k-sidebar {
  width: 310px;
  // border: 1px solid #f1f1f1;
  border-right: 1px solid #c3ced9;
  position: sticky;
  top: 0;
  -webkit-transition: width 0.3s ease-out;
  -moz-transition: width 0.3s ease-out;
  -o-transition: width 0.3s ease-out;
  transition: width 0.3s ease-out;
  .header {
    padding: 20px 20px 0px 20px;
    .logo-unimind {
      width: 142.5px;
      max-width: none;
      cursor: pointer;
    }
    .btn-nav {
      width: 36px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 1000px;
      cursor: pointer;
      .icon-arrow-expand {
        margin-right: 2px;
      }
      .icon-arrow-collapse {
        margin-left: 2px;
      }
    }
    .btn-nav:hover {
      background-color: rgb(243 244 246);
    }
    .btn-plus {
      width: 36px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      .icon-arrow {
        margin-left: 1px;
      }
    }
    .btn-plus:hover {
      background-color: rgb(243 244 246);
    }
    .k-btn {
      font-family: 'Cabin';
      margin-top: 20px;
      margin-bottom: 10px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      font-weight: 700;
      height: 36px;
      width: 209px;
      .icon-btn {
        margin-right: 9px;
        margin-top: 0.9px;
      }
    }
    .k-btn:hover {
      background-color: rgb(243 244 246);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
