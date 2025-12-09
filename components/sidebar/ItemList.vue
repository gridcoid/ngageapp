<template>
  <div>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="showSidebar"
    >
      <div v-for="(item, index) in data" :key="index">
        <el-menu-item
          v-if="item.type === 'single'"
          :index="index.toString()"
          @click="activeIcon(item)"
        >
          <div class="flex items-center h-full">
            <i :class="item.icon" />
            <div
              v-if="!showSidebar"
              class="name-menu"
              :class="item.name === activeItem ? 'item-active' : ''"
            >
              {{ item.name }}
            </div>
          </div>
        </el-menu-item>
        <el-submenu
          v-if="item.type === 'multiple'"
          :index="index.toString()"
          @mouseover.native="hover = true"
          @mouseleave.native="hover = false"
        >
          <template slot="title">
            <div class="flex items-center h-full">
              <i :class="item.icon" />
              <div
                v-if="showSidebar"
                class="close-icon"
                :style="hover ? 'background-color: #ecf5ff' : ''"
              />
              <div
                v-if="!showSidebar"
                class="name-menu"
                :class="item.name === activeItem ? 'item-active' : ''"
              >
                {{ item.name }}
              </div>
            </div>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.child"
            :key="index2"
            :index="(total + index2).toString()"
            @click="activeIcon(item2)"
          >
            <div class="flex items-center h-full">
              <i
                :class="item2.icon + ' icon-menu'"
                style="margin-left: 1.6px"
                :bg-color="item2.name === activeItem ? '#1B63D4' : '#454545'"
              />
              <div
                class="name-menu"
                :class="item2.name === activeItem ? 'item-active' : ''"
              >
                {{ item2.name }}
              </div>
            </div>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      hover: false,
      isCollapse: true,
      sideBar: true,
      data: [],
      total: 0,
    }
  },
  computed: {
    ...mapState({
      showSidebar: (state) => {
        return state.user.sidebar
      },
      activeItem: (state) => {
        return state.user.activeItem
      },
      roleId: (state) => {
        return state.user.roleId
      },
    }),
  },
  mounted() {
    if (
      this.$nuxt.$route.name.replace(
        /^./,
        this.$nuxt.$route.name[0].toUpperCase()
      ) === 'Index'
    ) {
      this.$store.commit('user/SET_ACTIVE', 'Dashboard')
    }
    this.checkRole()
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    activeIcon(item) {
      this.$store.commit('user/SET_ACTIVE', item.name)
      this.$router.push({
        path: item.path,
      })
    },
    checkRole() {
      if (this.roleId === 1) {
        this.data = [
          {
            path: '/',
            name: 'Dashboard',
            type: 'single',
            icon: 'pi pi-home',
          },
          {
            path: '/campaign',
            name: 'Campaign',
            type: 'single',
            icon: 'pi pi-megaphone',
          },
          {
            path: '/survey',
            name: 'Survey',
            type: 'single',
            icon: 'pi pi-list-check',
          },
          {
            path: '/segment',
            name: 'Segment',
            type: 'single',
            icon: 'pi pi-filter',
          },
          {
            path: '/audience',
            name: 'Audience',
            type: 'single',
            icon: 'pi pi-users',
          },
          {
            path: '/creative',
            name: 'Creative',
            type: 'single',
            icon: 'pi pi-palette',
          },
          {
            path: '/report',
            name: 'Report',
            type: 'single',
            icon: 'pi pi-chart-bar',
          },
          {
            path: '/tools',
            name: 'Tools',
            type: 'single',
            icon: 'pi pi-wrench',
          },
          {
            path: '',
            name: 'Admin',
            type: 'multiple',
            icon: 'pi pi-cog',
            child: [
              {
                path: '/admin/api-key',
                name: 'API Key Management',
                icon: 'pi pi-key',
              },
              {
                path: '/admin/user',
                name: 'User Management',
                icon: 'pi pi-user',
              },
              {
                path: '/admin/template',
                name: 'Template Uploader',
                icon: 'pi pi-upload',
              },
            ],
          },
        ]
      }
      if (this.roleId === 3) {
        this.data = [
          {
            path: '/',
            name: 'Dashboard',
            type: 'single',
          },
          {
            path: '/campaign',
            name: 'Campaign',
            type: 'single',
          },
          {
            path: '/creative',
            name: 'Creative',
            type: 'single',
          },
          {
            path: '/report',
            name: 'Report',
            type: 'single',
          },
        ]
      }
      if (this.roleId === 4) {
        this.data = [
          {
            path: '/creative',
            name: 'Creative',
            type: 'single',
          },
          // {
          //   path: '/report',
          //   name: 'Report',
          //   type: 'single'
          // }
        ]
      }
      this.total = this.data.length
    },
  },
}
</script>

<style lang="scss" scoped>
.close-icon {
  height: 20px;
  width: 10px;
  background: white;
  position: absolute;
  right: 20px;
  z-index: 2;
}
.name-menu {
  font-family: 'Cabin';
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: #5c6b7a;
  line-height: normal;
}
.item-active {
  font-weight: 600;
  color: #1b63d4;
  font-family: 'Cabin';
  font-size: 16px;
  margin-left: 8px;
  line-height: normal;
}
.icon-menu {
  margin-left: 4px;
}

.title-navmenu {
  padding-top: 2px;
  margin-left: 10px;
}
.navigations {
  background: white;
  cursor: pointer;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  height: 36px;
  color: #383838;
}

.navigations:hover {
  background-color: rgb(243 244 246);
  border-left-color: #1b63d4;
}
// .navigations.nuxt-link-active {
//   background: #ffffff;
//   border-left-color: #1b63d4;
//   .name-menu {
//     color: #1b63d4;
//     font-weight: 700;
//   }
// }
// .navigations.nuxt-link-exact-active {
//   background: #ffffff;
//   border-left-color: #1b63d4;
//   .name-menu {
//     color: #1b63d4;
//     font-weight: 700;
//   }
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
