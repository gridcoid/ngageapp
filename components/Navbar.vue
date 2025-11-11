<template>
  <Transition name="nav">
    <nav
      class="flex nav-menu items-center justify-between"
      style="width:100%"
    >
      <Breadcumb class="py-4" />
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
            <div v-show="handleRole" class="btn-popover flex items-center mt-2" @click="toProfile()">
              <IconProfile class="ml-1" style="width: 30px" />
              <div class="title-1">
                Your Profile
              </div>
            </div>
            <div v-show="handleRole" class="btn-popover flex items-center" @click="btnChangePassword()">
              <IconPassword class="ml-1" style="width: 30px" />
              <div class="title-1">
                Change Password
              </div>
            </div>
            <div v-show="handleRole" class="btn-popover flex items-center">
              <IconUser class="ml-1" style="width: 30px" />
              <div class="title-1">
                Manage User
              </div>
            </div>
            <div v-show="handleRole" class="btn-popover flex items-center">
              <IconOrganization class="ml-1" style="width: 30px" />
              <div class="title-1">
                Manage Organization
              </div>
            </div>
            <div
              class="btn-popover flex items-center mb-2 mt-2"
              @click="logout()"
            >
              <IconLogout class="ml-1" style="width: 30px" />
              <div class="title-1">
                Logout
              </div>
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

  data () {
    return {
      handleRole: true,
      iconSurvey: false,
      iconSetting: false,
      changePassword: false,
      visible: false
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
      }
    })
  },
  mounted () {
    this.checkRole()
  },
  methods: {
    btnChangePassword () {
      this.visible = false
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('user/SET_CHANGE_DIALOG', true)
    },
    toProfile () {
      this.$router.push('/profile')
    },
    logout () {
      this.$auth.logout()
      this.$router.push('/login')
    },
    checkRole () {
      if (this.roleId === 4) {
        this.handleRole = false
      } else {
        this.handleRole = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 56px;
  // position: absolute;
  top: 0;
  background: #ffffff;
  border-bottom: 1px solid #C3CED9 !important;
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
