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

      const baseSettingsChildren = []

      // Build References children first
      const referenceChildren = []

      // Only for root (userId === 1)
      if (isSuperUser) {
        referenceChildren.push({
          path: '',
          name: 'Mailjet',
          type: 'multiple',
          icon: 'ti ti-send',
          children: [
            {
              path: '/reference/mailjet/contact-list',
              name: 'Contact Lists',
              type: 'single',
              icon: 'ti ti-folder',
            },
            {
              path: '/reference/mailjet/contact',
              name: 'Contacts',
              type: 'single',
              icon: 'ti ti-id-badge-2',
            },
            {
              path: '/reference/mailjet/template',
              name: 'Email Templates',
              type: 'single',
              icon: 'ti ti-template',
            },
            {
              path: '/reference/mailjet/sender',
              name: 'Email Senders',
              type: 'single',
              icon: 'ti ti-mailbox',
            },
            {
              path: '/reference/mailjet/campaigndraft',
              name: 'Campaign Drafts',
              type: 'single',
              icon: 'ti ti-notes',
            },
            {
              path: '/reference/mailjet/campaign',
              name: 'Campaigns',
              type: 'single',
              icon: 'ti ti-speakerphone',
            },
          ],
        })
      }

      // Always available reference menus
      referenceChildren.push(
        {
          path: '/reference/contact-type',
          name: 'Contact Types',
          type: 'single',
          icon: 'ti ti-address-book',
        },
        {
          path: '/reference/gender',
          name: 'Genders',
          type: 'single',
          icon: 'ti ti-gender-bigender',
        },
        {
          path: '/reference/education',
          name: 'Education Levels',
          type: 'single',
          icon: 'ti ti-school',
        },
        {
          path: '/reference/religion',
          name: 'Religions',
          type: 'single',
          icon: 'ti ti-building-mosque',
        },
        {
          path: '/reference/province',
          name: 'Provinces',
          type: 'single',
          icon: 'ti ti-building',
        },
        {
          path: '/reference/regency',
          name: 'Regencies',
          type: 'single',
          icon: 'ti ti-building-skyscraper',
        },
        {
          path: '/reference/district',
          name: 'Districts',
          type: 'single',
          icon: 'ti ti-building-community',
        },
        {
          path: '/reference/village',
          name: 'Villages',
          type: 'single',
          icon: 'ti ti-building-estate',
        }
      )

      baseSettingsChildren.push(
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
        }
      )

      if (isSuperUser || isAdminRole) {
        baseSettingsChildren.push({
          path: '/setting/general',
          name: 'General',
          type: 'single',
          icon: 'ti ti-settings',
        })
      }

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
      } else if (isAdminRole) {
        baseSettingsChildren.push({
          path: '/setting/admin/user',
          name: 'Users',
          type: 'single',
          icon: 'ti ti-users',
        })
      }

      this.data = [
        {
          path: '/',
          name: 'Dashboard',
          type: 'single',
          icon: 'ti ti-dashboard',
        },
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
          name: 'Campaigns',
          type: 'multiple',
          icon: 'ti ti-speakerphone',
          children: [
            {
              path: '',
              name: 'Templates',
              type: 'multiple',
              icon: 'ti ti-geometry',
              children: [
                {
                  path: '/direct/template/whatsapp',
                  name: 'Whatsapp',
                  type: 'single',
                  icon: 'ti ti-brand-whatsapp',
                },
                {
                  path: '/direct/template/email',
                  name: 'Email',
                  type: 'single',
                  icon: 'ti ti-mail',
                },
                {
                  path: '/direct/template/sms',
                  name: 'SMS',
                  type: 'single',
                  icon: 'ti ti-message-2',
                },
              ],
            },
            {
              path: '',
              name: 'Channels',
              type: 'multiple',
              icon: 'ti ti-arrow-guide',
              children: [
                {
                  path: '/direct/campaign/whatsapp',
                  name: 'Whatsapp',
                  type: 'single',
                  icon: 'ti ti-brand-whatsapp',
                },
                {
                  path: '/direct/campaign/email',
                  name: 'Email',
                  type: 'single',
                  icon: 'ti ti-mail',
                },
                {
                  path: '/direct/campaign/sms',
                  name: 'SMS',
                  type: 'single',
                  icon: 'ti ti-message-2',
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
        // {
        //   path: '',
        //   name: 'References',
        //   type: 'multiple',
        //   icon: 'ti ti-book',
        //   children: referenceChildren,
        // },
      ]

      this.total = this.data.length
    },
  },
}
</script>
