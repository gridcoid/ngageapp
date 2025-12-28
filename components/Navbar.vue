<template>
  <Transition name="nav">
    <nav class="flex nav-menu items-center justify-between" style="width: 100%">
      <el-breadcrumb separator="/">
        <!-- Home -->
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="ti ti-home text-gray-500" />
        </el-breadcrumb-item>

        <!-- Dynamic segments -->
        <el-breadcrumb-item v-for="(item, idx) in items" :key="idx">
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="2xl:hidden"></div>

      <div class="py-4 flex items-center">
        <SwitchOrganization />
        <div
          v-show="handleRole"
          class="btn-icon"
          @mouseover="iconSurvey = true"
          @mouseleave="iconSurvey = false"
        >
          <IconMenuSurvey
            :bg-color="iconSurvey ? '#1B63D4' : '#757575'"
            height="24"
            width="24"
          />
        </div>
        <IconNotification v-show="handleRole" class="btn-icon" />
        <el-popover
          placement="bottom"
          width="250"
          trigger="click"
          style="padding: 0px !important"
          v-model="visible"
        >
          <div class="list-popover flex-col items-center">
            <div
              v-show="handleRole"
              class="btn-popover flex items-center mt-2"
              @click="toProfile()"
            >
              <i class="ti ti-user-circle ml-1" />
              <div class="title-1">Your Profile</div>
            </div>

            <div
              v-show="handleRole"
              class="btn-popover flex items-center"
              @click="btnChangePassword()"
            >
              <i class="ti ti-key ml-1" />
              <div class="title-1">Change Password</div>
            </div>

            <div v-show="handleRole" class="btn-popover flex items-center">
              <i class="ti ti-users ml-1" />
              <div class="title-1">Manage User</div>
            </div>

            <div v-show="handleRole" class="btn-popover flex items-center">
              <i class="ti ti-building-warehouse ml-1" />
              <div class="title-1">Manage Organization</div>
            </div>

            <div class="btn-popover flex items-center mb-2" @click="logout()">
              <i class="ti ti-logout ml-1" />
              <div class="title-1">Logout</div>
            </div>
          </div>

          <div
            slot="reference"
            class="circle-photo flex items-center justify-center cursor-pointer no-select"
          >
            {{ dataUser }}
          </div>
        </el-popover>
      </div>
    </nav>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},

  data() {
    return {
      handleRole: true,
      iconSurvey: false,
      iconSetting: false,
      changePassword: false,
      visible: false,
      home: { icon: 'ti ti-home', to: '/' },
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      dataUser: (state) => {
        return state.user.dataUser
      },
      roleId: (state) => {
        return state.user.roleId
      },
    }),
    items() {
      let segments = this.$route.path.split('/').filter(Boolean)

      // regex for UUID v1–v5 (case-insensitive)
      const isUuid = (val) =>
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
          val
        )

      // ❗ remove ANY segment that is a number OR UUID
      segments = segments.filter((s) => !(/^\d+$/.test(s) || isUuid(s)))

      return segments.map((segment) => {
        let label = this.formatLabel(segment)

        // rename Api → API (also covers api, aPi, etc.)
        if (label.toLowerCase().includes('api')) {
          label = label.replace(/api/gi, 'API')
        }

        if (label.toLowerCase().includes('json')) {
          label = label.replace(/json/gi, 'JSON')
        }

        return { label }
      })
    },
  },
  mounted() {
    this.checkRole()
  },
  methods: {
    btnChangePassword() {
      this.visible = false
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('user/SET_CHANGE_DIALOG', true)
    },
    toProfile() {
      this.$router.push('/profile')
    },
    logout() {
      this.$auth.logout()
      this.$store.dispatch('reset')
      this.$router.push('/login')
    },
    checkRole() {
      if (this.roleId === 4) {
        this.handleRole = false
      } else {
        this.handleRole = true
      }
    },
    formatLabel(segment) {
      return segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.p-breadcrumb {
  border: 0;
  background: transparent;
}
.nav-menu {
  height: 56px;
  // position: absolute;
  top: 0;
  background: #ffffff;
  border-bottom: 1px solid #c3ced9 !important;
  padding-left: 20px;
  padding-right: 20px;
  .btn-icon {
    margin-right: 18px;
    cursor: pointer;
  }
  .avatar-profile {
    cursor: pointer;
  }
}
.nav-enter-active,
.nav-leave-active {
  opacity: 1;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.nav-enter,
.nav-leave-to {
  opacity: 0;
}
.dd-enter-active,
.dd-leave-active {
  opacity: 1;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.dd-enter,
.dd-leave-to {
  opacity: 0;
}
.circle-photo {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
}
</style>
