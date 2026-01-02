<template>
  <div>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="showSidebar"
      :collapse-transition="false"
      :unique-opened="true"
    >
      <div v-for="(item, index) in data" :key="index">
        <el-menu-item
          v-if="item.type === 'single'"
          :index="index.toString()"
          @click="activeIcon(item)"
        >
          <div
            class="flex items-center h-full"
            :class="showSidebar ? 'justify-center' : 'justify-start'"
          >
            <i :class="item.icon" />
            <div
              v-show="!showSidebar"
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
            <div
              class="flex items-center h-full"
              :class="showSidebar ? 'justify-center' : 'justify-start'"
            >
              <i :class="item.icon" />
              <div
                v-show="showSidebar"
                class="close-icon"
                :style="hover ? 'background-color: #ecf5ff' : ''"
              />
              <div
                v-show="!showSidebar"
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
            icon: 'ti ti-dashboard',
          },
          {
            path: '/running-campaign',
            name: 'Running Campaigns',
            type: 'single',
            icon: 'ti ti-speakerphone',
          },
          {
            path: '/campaign',
            name: 'Campaigns',
            type: 'single',
            icon: 'ti ti-flag',
          },
          {
            path: '/survey',
            name: 'Surveys',
            type: 'single',
            icon: 'ti ti-list-check',
          },
          {
            path: '/segment',
            name: 'Segments',
            type: 'single',
            icon: 'ti ti-folder',
          },
          {
            path: '/audience',
            name: 'Audiences',
            type: 'single',
            icon: 'ti ti-users',
          },
          {
            path: '/creative',
            name: 'Creatives',
            type: 'single',
            icon: 'ti ti-palette',
          },
          {
            path: '/report',
            name: 'Reports',
            type: 'single',
            icon: 'ti ti-chart-bar',
          },
          {
            path: '/tools',
            name: 'Tools',
            type: 'single',
            icon: 'ti ti-tools',
          },
          {
            path: '',
            name: 'Admins',
            type: 'multiple',
            icon: 'ti ti-adjustments',
            child: [
              {
                path: '/admin/query',
                name: 'Query Management',
                icon: 'ti ti-code',
              },
              {
                path: '/admin/api-key',
                name: 'API Key Management',
                icon: 'ti ti-key',
              },
              {
                path: '/admin/user',
                name: 'User Management',
                icon: 'ti ti-users',
              },
              {
                path: '/admin/template',
                name: 'Template Uploader',
                icon: 'ti ti-upload',
              },
              {
                path: '/admin/setting',
                name: 'Settings',
                icon: 'ti ti-settings',
              },
            ],
          },
          {
            path: '',
            name: 'References',
            type: 'multiple',
            icon: 'ti ti-book',
            child: [
              {
                path: '/reference/contact-type',
                name: 'Contact Types',
                icon: 'ti ti-address-book',
              },
              {
                path: '/reference/gender',
                name: 'Genders',
                icon: 'ti ti-gender-bigender',
              },
              {
                path: '/reference/religion',
                name: 'Religions',
                icon: 'ti ti-building-mosque',
              },
              {
                path: '/reference/province',
                name: 'Provinces',
                icon: 'ti ti-building',
              },
              {
                path: '/reference/regency',
                name: 'Regencies',
                icon: 'ti ti-building-skyscraper',
              },
              {
                path: '/reference/district',
                name: 'Districts',
                icon: 'ti ti-building-community',
              },
              {
                path: '/reference/village',
                name: 'Villages',
                icon: 'ti ti-building-estate',
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
            path: '/running-campaign',
            name: 'Running Campaigns',
            type: 'single',
          },
          {
            path: '/campaign',
            name: 'Campaigns',
            type: 'single',
          },
          {
            path: '/creative',
            name: 'Creatives',
            type: 'single',
          },
          {
            path: '/report',
            name: 'Reports',
            type: 'single',
          },
        ]
      }
      if (this.roleId === 4) {
        this.data = [
          {
            path: '/creative',
            name: 'Creatives',
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
