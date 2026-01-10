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
            path: '/analytic',
            name: 'Analytics',
            type: 'single',
            icon: 'ti ti-chart-bubble',
          },
          {
            path: '',
            name: 'Direct Channels',
            type: 'multiple',
            icon: 'ti ti-direction-sign',
            children: [
              {
                path: '',
                name: 'Campaigns',
                type: 'multiple',
                icon: 'ti ti-speakerphone',
                children: [
                  {
                    path: '/direct/campaign/email',
                    name: 'E-mail Campaigns',
                    type: 'single',
                    icon: 'ti ti-mail',
                  },
                  {
                    path: '/direct/campaign/sms',
                    name: 'SMS Campaigns',
                    type: 'single',
                    icon: 'ti ti-message-2',
                  },
                  {
                    path: '/direct/campaign/whatsapp',
                    name: 'WhatsApp Campaigns',
                    type: 'single',
                    icon: 'ti ti-brand-whatsapp',
                  },
                ],
              },
              {
                path: '',
                name: 'Templates',
                type: 'multiple',
                icon: 'ti ti-geometry',
                children: [
                  {
                    path: '/direct/template/email/create',
                    name: 'E-mail',
                    type: 'single',
                    icon: 'ti ti-template',
                  },
                ],
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
            ],
          },
          {
            path: '',
            name: 'Placement',
            type: 'multiple',
            icon: 'ti ti-vector',
            children: [
              {
                path: '/placement/running',
                name: 'Running Campaigns',
                type: 'single',
                icon: 'ti ti-alarm',
              },
              {
                path: '/placement/campaign',
                name: 'Campaigns',
                type: 'single',
                icon: 'ti ti-speakerphone',
              },
              {
                path: '/placement/creative',
                name: 'Creatives',
                type: 'single',
                icon: 'ti ti-palette',
              },
              {
                path: '/placement/report',
                name: 'Reports',
                type: 'single',
                icon: 'ti ti-chart-bar',
              },
              {
                path: '/placement/template',
                name: 'Template Uploader',
                type: 'single',
                icon: 'ti ti-upload',
              },
            ],
          },
          {
            path: '',
            name: 'Administration',
            type: 'multiple',
            icon: 'ti ti-adjustments',

            children: [
              {
                path: '/admin/query',
                name: 'Query Management',
                type: 'single',
                icon: 'ti ti-code',
              },
              {
                path: '/admin/api-key',
                name: 'API Key Management',
                type: 'single',
                icon: 'ti ti-key',
              },
              {
                path: '',
                name: 'Mailjet',
                type: 'multiple',
                icon: 'ti ti-send',

                children: [
                  {
                    path: '/admin/mailjet/contact-list',
                    name: 'Contact Lists',
                    type: 'single',
                    icon: 'ti ti-folder',
                  },
                  {
                    path: '/admin/mailjet/contact',
                    name: 'Contacts',
                    type: 'single',
                    icon: 'ti ti-id-badge-2',
                  },
                  {
                    path: '/admin/mailjet/template',
                    name: 'Email Templates',
                    type: 'single',
                    icon: 'ti ti-template',
                  },
                  {
                    path: '/admin/mailjet/sender',
                    name: 'Senders',
                    type: 'single',
                    icon: 'ti ti-mailbox',
                  },
                ],
              },

              {
                path: '/admin/setting',
                name: 'Settings',
                type: 'single',
                icon: 'ti ti-settings',
              },
            ],
          },
          {
            path: '',
            name: 'Reference',
            type: 'multiple',
            icon: 'ti ti-book',

            children: [
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
            path: '/placement/running',
            name: 'Running Campaigns',
            type: 'single',
          },
          {
            path: '/placement/campaign',
            name: 'Campaigns',
            type: 'single',
          },
          {
            path: '/placement/creative',
            name: 'Creatives',
            type: 'single',
          },
          {
            path: '/placement/report',
            name: 'Reports',
            type: 'single',
          },
        ]
      }
      if (this.roleId === 4) {
        this.data = [
          {
            path: '/placement/creative',
            name: 'Creatives',
            type: 'single',
          },
        ]
      }
      this.total = this.data.length
    },
  },
}
</script>
