<template>
  <div>
    <div
      class="kg-container"
      :style="dialogInfo ? 'width: calc(100% - 300px)' : 'width:100%'"
    >
      <div class="header-content flex items-center justify-between">
        <div class="flex items-center made-in">
          Made with
          <img src="~/assets/images/logo_baru.svg" class="logo-unimind" />
        </div>
        <div class="flex items-center">
          <div class="kompas-select flex">
            <div
              class="kompas-dropdown no-select flex items-center justify-between"
              :style="
                showDevice
                  ? 'border-end-end-radius: 0px;border-end-start-radius: 0px;'
                  : ''
              "
            >
              <div
                class="flex items-center w-full pl-4 cursor-pointer"
                @click="openDevice()"
              >
                <img v src="~/assets/images/icon/ios.svg" class="mr-2" />
                Mobile
              </div>
              <div
                class="action-btn flex items-center justify-center no-select cursor-pointer"
                @click="openDevice()"
              >
                <img
                  v-if="!showDevice"
                  src="~/assets/images/icon/arrow_down.svg"
                  class="mt-1"
                />
                <img
                  v-else
                  src="~/assets/images/icon/arrow_up.svg"
                  class="mt-1"
                />
              </div>
            </div>
          </div>
          <div class="kompas-select flex">
            <div
              class="kompas-dropdown no-select flex items-center justify-between"
              :style="
                showPreview
                  ? 'border-end-end-radius: 0px;border-end-start-radius: 0px;'
                  : ''
              "
            >
              <div
                v-if="selectedPreviewTemplate !== null"
                class="flex items-center w-full pl-4 cursor-pointer"
                @click="openPreview()"
              >
                <img
                  :src="
                    require(`~/assets/images/icon/${selectedPreviewTemplate.icon}.svg`)
                  "
                  class="mr-2"
                />
                {{ selectedPreviewTemplate.name }}
              </div>
              <div
                v-else
                class="flex items-center w-full pl-4 cursor-pointer"
                style="color: #a1adb9; font-weight: 400; font-size: 14px"
                @click="openPreview()"
              >
                Choose Publisher
              </div>
              <div
                class="action-btn flex items-center justify-center no-select cursor-pointer"
                @click="openPreview()"
              >
                <img
                  v-if="!showPreview"
                  src="~/assets/images/icon/arrow_down.svg"
                  class="mt-1"
                />
                <img
                  v-else
                  src="~/assets/images/icon/arrow_up.svg"
                  class="mt-1"
                />
              </div>
            </div>
            <div v-if="showPreview" class="kompas-body-select">
              <div
                v-for="(item, index) in previewTemplate"
                :key="index"
                class="kompas-child-body flex items-center pl-4"
                @click="selectPreview(item, index)"
              >
                <img
                  :src="require(`~/assets/images/icon/${item.icon}.svg`)"
                  class="mr-2"
                />
                {{ item.name }}
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-center btn-refresh no-select"
            @click="refresh()"
          >
            <IconReload />
          </div>
          <div
            class="flex items-center justify-center btn-refresh no-select"
            @click="btnInfo()"
          >
            <IconInfo bg-color="#757575" />
          </div>
          <div
            class="flex items-center justify-center btn-refresh no-select"
            style="margin-right: 0px"
            @click="copyURL()"
          >
            <IconCopy />
          </div>
        </div>
      </div>
      <div
        class="body-content flex items-center justify-center"
        style="margin-top: 30px"
      >
        <div class="ios-img">
          <iframe
            v-if="!isLoading"
            id="ios-iframe"
            ref="iframe"
            contenteditable="true"
            crossorigin="anonymous"
            :src="staticSrc"
            :style="'width:414px'"
          />
        </div>
      </div>
    </div>
    <div v-if="dialogInfo" class="panel-dialog flex flex-col">
      <div class="flex justify-between items-center header-dialog">
        <div class="flex items-center">
          <img src="~/assets/images/info.svg" class="logo-info" />Creative Info
        </div>
        <img
          src="~/assets/images/campaign/icon_close.svg"
          class="icon-close"
          @click="dialogInfo = false"
        />
      </div>
      <div class="flex flex-col items-start body-dialog">
        <div class="title-body">Template Used</div>
        <div class="value-body">
          {{ device }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

let titlePage = ''
let backupImage = ''
function isValidHttpUrl(string) {
  let url
  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}
export default {
  name: 'PrevieTemplatePage',
  async asyncData({ params }) {
    await axios
      .get(`https://dev-api.unimind.id/v1/creative/${params.detail}`)
      .then((res) => {
        titlePage = res.data.data.name
        if (res.data.data.config.backupImg !== undefined) {
          if (isValidHttpUrl(res.data.data.config.backupImg)) {
            backupImage = res.data.data.config.backupImg
          } else {
            backupImage =
              'https://dev-api.unimind.id/v1/obs?fileKey=' +
              res.data.data.config.backupImg
          }
        } else if (isValidHttpUrl(res.data.data.template.thumbnail)) {
          backupImage = res.data.data.template.thumbnail
        } else {
          backupImage =
            'https://dev-api.unimind.id/v1/obs?fileKey=' +
            res.data.data.template.thumbnail
        }
      })
      .catch(() => {})
  },
  data() {
    return {
      type: '',
      url: '',
      isLoading: true,
      dialogInfo: true,
      fileKey: '',
      height: 0,
      width: 0,
      campaignName: '',
      creativeName: '',
      templateName: '',
      window: {
        width: 0,
        height: 0,
      },
      staticSrc: '',
      dataFormDetail: {},
      contentHTML: '',
      format: '',
      handleRole: true,
      templateId: null,
      previewSrc: '',
      previewDevice: [
        // {
        //   id: 2,
        //   name: 'Desktop (1366x768)',
        //   icon: 'dekstop'
        // },
        // {
        //   id: 5,
        //   name: 'iOS (414 x 896)',
        //   icon: 'ios'
        // }
      ],
      selectedPreviewDevice: {
        id: 1,
        name: 'Creative Only',
        icon: 'full_canvas',
      },
      showDevice: false,
      previewTemplate: [
        {
          id: 1,
          name: 'Kompas.com',
          icon: 'kompas',
        },
      ],
      selectedPreviewTemplate: {
        id: 1,
        name: 'Kompas.com',
        icon: 'kompas',
      },
      publisher: null,
      showPreview: false,
      device: null,
    }
  },
  head() {
    return {
      title: 'n-gage Preview | ' + titlePage,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'n-gage Preview | ' + titlePage,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Made with n-gage. Copyright Ⓒ 2023 Kompas Gramedia',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: backupImage,
        },
        {
          hid: 'og:thumb',
          property: 'og:thumb',
          content: backupImage,
        },
      ],
    }
  },
  layout: 'login',
  auth: false,
  computed: {
    ...mapState({
      dataDetailCreative: (state) => {
        return state.creative.dataDetailCreative
      },
      dataForm: (state) => {
        return state.creative.dataForm
      },
      isLoadingForm: (state) => {
        return state.creative.isLoading
      },
      roleId: (state) => {
        return state.user.roleId
      },
    }),
  },
  mounted() {
    // window.addEventListener('resize', this.handleResize)
    // this.handleResize()
    // this.getAll()
    // this.checkRole()
    this.checkParam()
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
    checkParam() {
      this.isLoading = true
      this.device = this.$router.currentRoute.query.type
      if (this.device === null || this.device === undefined) {
        this.staticSrc =
          'https://dev-static.unimind.id/creative_template/custom/scrollFX/preview/kompas-mobile.html'
        this.isLoading = false
      }
      if (this.device === 'scrollfx') {
        this.staticSrc =
          'https://dev-static.unimind.id/creative_template/custom/scrollFX/preview/kompas-mobile.html'
        this.isLoading = false
      }
      if (this.device === 'expandable') {
        this.staticSrc =
          'https://dev-static.unimind.id/creative_template/custom/kompas-mobile.html'
        this.isLoading = false
      }
    },
    openDevice() {
      this.showDevice = !this.showDevice
      this.showPreview = false
    },
    openPreview() {
      this.showPreview = !this.showPreview
      this.showDevice = false
    },
    toUrl() {
      window.open(this.dataDetailCreative.config.targets[0].url)
    },
    back() {
      this.$router.go(-1)
    },
    btnInfo() {
      this.dialogInfo = !this.dialogInfo
    },
    checkRole() {
      if (this.roleId === 4) {
        this.handleRole = false
      } else {
        this.handleRole = true
      }
    },
    async copyURL() {
      const host =
        'https://dev-space.unimind.id/demo?type=' +
        this.$router.currentRoute.query.type
      try {
        await navigator.clipboard.writeText(host)
        this.$notifier.showMessage({
          content: 'Link copied to clipboard.',
          type: 'success',
        })
      } catch ($e) {
        this.$notifier.showMessage({
          content: 'Cannot copy',
          type: 'failed',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#da-iframe {
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.da-iframe::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.kompas-select {
  position: relative;
  .kompas-dropdown {
    width: 230px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #c3ced9;
    border-radius: 5px;
    margin-right: 10px;
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #1b63d4;
    line-height: 18px;
    .action-btn {
      width: 40px;
      height: 100%;
      border-left: 1px solid #c3ced9;
    }
  }
  .kompas-body-select {
    position: absolute;
    top: 40px;
    left: 0px;
    height: 100%;
    width: 230px;
    z-index: 3;
    .kompas-child-body {
      cursor: pointer;
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-left: 1px solid #c3ced9;
      border-right: 1px solid #c3ced9;
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
    .kompas-child-body:last-child {
      border-bottom: 1px solid #c3ced9;
      border-end-end-radius: 5px;
      border-end-start-radius: 5px;
    }
    .kompas-child-body:hover {
      background-color: rgb(243 244 246);
    }
  }
}

.dropdown-action {
  width: 180px;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #1b63d4;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  .icon-item {
    margin-right: 13px;
  }
}
.title-dropdown {
  font-weight: 700;
  font-size: 14px;
  color: #1b63d4;
}
@media screen and (min-width: 0px) and (max-width: 600px) {
  .kg-container {
    padding: 0px !important;
    .body-content {
      margin-top: 0px !important;
      .ios-img {
        background-image: none !important;
        padding: 0px !important;
        height: auto !important;
        width: auto !important;
      }
    }
  }
  .header-content {
    display: none;
  }
}
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 50);
}

.slide-enter,
.slide-leave {
  transition: all 0.15s ease;
}

.slide-enter-start,
.slide-leave-end {
  transform: translateX(-100px);
}
.kg-container {
  height: 100vh;
  width: 100%;
  transform: translateX(0%);
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, visibility, width;
  .header-content {
    padding: 0px 30px 0px 30px;
    border-bottom: 1px solid #c3ced9;
    height: 72px;
    .made-in {
      font-weight: 400;
      font-size: 12px;
      color: #333333;
      .logo-unimind {
        width: 95px;
        margin-left: 5px;
      }
    }
    .btn-refresh {
      margin-right: 10px;
      width: 40px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 40px;
      cursor: pointer;
    }
    .btn-refresh:hover {
      background-color: rgb(243 244 246);
      border: 1px solid transparent;
    }
  }
  .body-content {
    .ios-img {
      background-image: url('~/assets/images/ios_v2.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      height: 972px;
      width: 491px;
      padding: 90px 40px 40px 40px;
      #ios-iframe {
        height: 710px !important;
      }
    }
    .box-container {
      object-fit: none;
      object-position: left top;
      width: 100%;
      height: 100%;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      margin-bottom: 20px;
    }
  }
}
.panel-dialog {
  width: 300px;
  height: 100vh;
  right: 0px;
  top: 0px;
  position: fixed;
  background: #f8f8f8;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
  transform: translateX(0%);
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, visibility, width;
  .header-dialog {
    padding: 0px 15px 0px 15px;
    height: 72px;
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    background: #ffffff;
    border-bottom: 2px solid #e2e2e2;
    .logo-info {
      margin-right: 10px;
    }
    .icon-close {
      cursor: pointer;
    }
  }
  .body-dialog {
    padding: 20px;
    background-color: #fafafa;
    .title-body {
      font-weight: 500;
      font-size: 16px;
      color: #454545;
    }
    .value-body {
      font-weight: 400;
      font-size: 16px;
      color: #757575;
      margin-bottom: 20px;
    }
    .hr-dialog {
      border: 1px solid #e2e2e2;
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
</style>
