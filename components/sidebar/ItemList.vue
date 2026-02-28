<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="showSidebar"
      :collapse-transition="false"
      :unique-opened="true"
    >
      <menu-item
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        :uid="index.toString()"
        @active="activeIcon"
      />
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
      userId: (state) => {
        return state.user.userId
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

      if (this.$route.path === item.path) {
        this.$root.$emit(`flag-${this.$route.name}`)
      } else {
        this.$router.push({
          path: item.path,
        })
      }
    },
    checkRole() {
      const isSuperUser = this.userId === 1
      const isAdminRole = this.roleId === 1

      if (isSuperUser || isAdminRole) {
        const baseSettingsChildren = [
          {
            path: '/setting/api-key',
            name: 'API Keys',
            type: 'single',
            icon: 'ti ti-key',
          },
          {
            path: '/setting/definition',
            name: 'Widget',
            type: 'single',
            icon: 'ti ti-code',
          },
          {
            path: '/setting/general',
            name: 'General',
            type: 'single',
            icon: 'ti ti-settings',
          },
        ]

        // Only for userId === 1
        if (isSuperUser) {
          baseSettingsChildren.push(
            {
              path: '/setting/root/org',
              name: 'Organization',
              type: 'single',
              icon: 'ti ti-building-bank',
            },
            {
              path: '/setting/root/user',
              name: 'Users',
              type: 'single',
              icon: 'ti ti-users',
            }
          )
        }

        this.data = [
          {
            path: '/',
            name: 'Dashboard',
            type: 'single',
            icon: 'ti ti-dashboard',
          },
          {
            path: '',
            name: 'Direct Channels',
            type: 'multiple',
            icon: 'ti ti-direction-sign',
            children: [
              {
                path: '/direct/segment',
                name: 'Segments',
                type: 'single',
                icon: 'ti ti-folder',
              },
              {
                path: '/direct/audience',
                name: 'Audiences',
                type: 'single',
                icon: 'ti ti-users',
              },
              {
                path: '',
                name: 'Templates',
                type: 'multiple',
                icon: 'ti ti-geometry',
                children: [
                  {
                    path: '/direct/template/email',
                    name: 'Email',
                    type: 'single',
                    icon: 'ti ti-mail',
                  },
                ],
              },
              {
                path: '',
                name: 'Campaigns',
                type: 'multiple',
                icon: 'ti ti-speakerphone',
                children: [
                  {
                    path: '/direct/campaign/email',
                    name: 'Email',
                    type: 'single',
                    icon: 'ti ti-mail',
                  },
                ],
              },
            ],
          },
          {
            path: '',
            name: 'Settings',
            type: 'multiple',
            icon: 'ti ti-adjustments',
            children: baseSettingsChildren,
          },
          {
            path: '',
            name: 'References',
            type: 'multiple',
            icon: 'ti ti-book',
            children: [
              // keep your existing references structure here
            ],
          },
        ]
      }

      this.total = this.data.length
    },
  },
}
</script>
