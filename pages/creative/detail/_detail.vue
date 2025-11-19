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
                <img
                  v-if="selectedPreviewDevice.id === 1"
                  src="~/assets/images/icon/full_canvas.svg"
                  class="mr-2"
                />
                <img v-else :src="selectedPreviewDevice.icon" class="mr-2" />
                {{ selectedPreviewDevice.name }}
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
            <div v-if="showDevice" class="kompas-body-select">
              <div
                v-for="(item, index) in previewDevice"
                :key="index"
                class="kompas-child-body flex items-center pl-4"
                @click="selectDevice(item, index)"
              >
                <img
                  v-if="item.id === 1"
                  src="~/assets/images/icon/full_canvas.svg"
                  class="mr-2"
                />
                <img v-else :src="item.icon" class="mr-2" />
                {{ item.name }}
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
        v-if="selectedPreviewDevice.id === 1"
        class="body-content flex items-center justify-center"
        style="margin-top: 30px"
      >
        <client-only v-if="type === 'video'">
          <div v-if="!isLoading" style="max-height: 1000px; max-width: 1000px">
            <!-- <div
              v-if="!showIframe"
              :class="alignCenter"
              :style="'width:' + width + 'px;height:' + height + 'px;'"
              class="thumbnail-video flex items-center justify-center"
            >
              <div class="linear-background" />
              <div class="thumbnail-image" />
              <div class="play-btn flex items-center justify-center" @click="showIframe = true">
                <IconPlayV2
                  bg-color="#0056DE"
                  class="icon-play"
                />
              </div>
            </div> -->
            <iframe
              id="da-iframe"
              ref="iframe"
              contenteditable="true"
              crossorigin="anonymous"
              :src="staticSrc + '?preview'"
              :style="'width:' + width + 'px;height:' + height + 'px;'"
              :class="alignCenter"
              scrolling="no"
            />
          </div>
          <div v-else class="flex items-center justify-center">
            <el-skeleton style="width: 240px" :rows="10" animated />
          </div>
        </client-only>
        <client-only v-else>
          <iframe
            v-if="!isLoading"
            id="da-iframe"
            ref="iframe"
            contenteditable="true"
            crossorigin="anonymous"
            :src="staticSrc"
            :style="'width:' + width + 'px;height:' + height + 'px;'"
          />
          <div v-else class="flex items-center justify-center">
            <el-skeleton style="width: 240px" :rows="10" animated />
          </div>
        </client-only>
      </div>
      <div
        v-if="selectedPreviewDevice.id === 2"
        class="body-content flex items-center justify-center"
      >
        <client-only v-if="selectedPreviewTemplate !== null">
          <iframe
            v-if="!isLoading"
            id="dekstop-iframe"
            ref="iframe"
            contenteditable="true"
            crossorigin="anonymous"
            :src="
              selectedPreviewTemplate.id === 1
                ? '/preview/kompascom-desktop-2.html'
                : selectedPreviewTemplate.id === 2
                ? '/preview/tribun-dekstop.html'
                : '/preview/grid-desktop.html'
            "
            :style="
              'width:' + window.width + 'px;height:' + window.height + 'px;'
            "
            @load="sendToIframe()"
          />
          <div v-else class="flex items-center justify-center">
            <el-skeleton style="width: 240px" :rows="10" animated />
          </div>
        </client-only>
        <client-only v-else>
          <iframe
            v-if="!isLoading"
            id="dekstop-iframe"
            ref="iframe"
            contenteditable="true"
            crossorigin="anonymous"
            :style="
              'width:' + window.width + 'px;height:' + window.height + 'px;'
            "
          />
        </client-only>
      </div>
      <div
        v-if="selectedPreviewDevice.id === 5"
        class="body-content flex items-center justify-center"
        style="margin-top: 30px"
      >
        <div class="ios-img">
          <client-only v-if="selectedPreviewTemplate !== null">
            <iframe
              v-if="!isLoading"
              id="ios-iframe"
              ref="iframe"
              contenteditable="true"
              crossorigin="anonymous"
              :src="
                selectedPreviewTemplate.id === 1
                  ? '/preview/kompascom-mobile-2.html'
                  : selectedPreviewTemplate.id === 2
                  ? '/preview/tribun-mobile.html'
                  : '/preview/grid-mobile.html'
              "
              :style="
                window.width < 600
                  ? 'width:' + window.width + 'px;'
                  : 'width:413px'
              "
              @load="sendToIframe()"
            />
            <div v-else class="flex items-center justify-center">
              <el-skeleton style="width: 240px" :rows="10" animated />
            </div>
          </client-only>
          <client-only v-else>
            <iframe
              v-if="!isLoading"
              id="ios-iframe"
              ref="iframe"
              contenteditable="true"
              crossorigin="anonymous"
              :style="
                window.width < 600
                  ? 'width:' + window.width + 'px;'
                  : 'width:413px'
              "
            />
          </client-only>
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
        <div class="title-body">Creative Name</div>
        <div class="value-body">
          {{ creativeName }}
        </div>
        <div v-if="format === 'rmb'" class="title-body">Dimension</div>
        <div v-if="format === 'rmb'" class="value-body">
          {{ width }} x {{ height }} px
        </div>
        <div class="title-body">Template Used</div>
        <div class="value-body">
          {{ templateName }}
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
      .get(`https://api.unimind.id/v1/creative/${params.detail}`)
      .then((res) => {
        console.log('res : ', res)
        titlePage = res.data.data.name
        if (res.data.data.config.backupImg !== undefined) {
          if (isValidHttpUrl(res.data.data.config.backupImg)) {
            backupImage = res.data.data.config.backupImg
          } else {
            backupImage =
              'https://api.unimind.id/v1/obs?fileKey=' +
              res.data.data.config.backupImg
          }
        } else if (isValidHttpUrl(res.data.data.template.thumbnail)) {
          backupImage = res.data.data.template.thumbnail
        } else {
          backupImage =
            'https://api.unimind.id/v1/obs?fileKey=' +
            res.data.data.template.thumbnail
        }
      })
      .catch(() => {})
  },
  data() {
    return {
      showIframe: false,
      thumbnail: null,
      showZoom: false,
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
        {
          id: 3,
          name: 'Grid.id',
          icon: 'grid',
        },
        {
          id: 2,
          name: 'Tribunnews.com',
          icon: 'tribun',
        },
      ],
      selectedPreviewTemplate: null,
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
          content:
            'Made with n-gage. Copyright Ⓒ ' +
            new Date().getFullYear() +
            ' Kompas Gramedia',
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
    alignCenter() {
      if (this.showZoom) {
        if (this.width > 1000) {
          if (this.height > 1080) {
            return 'iframe-align'
          } else if (this.height < 800) {
            return 'center-iframe-2'
          } else {
            return 'left-iframe'
          }
        } else {
          return 'center-iframe'
        }
      } else {
        return ''
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.getAll()
    this.checkRole()
  },
  methods: {
    isValidUrl(string) {
      try {
        // eslint-disable-next-line no-new
        new URL(string)
        return true
      } catch (err) {
        return false
      }
    },
    getAll() {
      this.getDetail()
    },
    refresh() {
      this.getAll()
    },
    getDetail() {
      this.isLoading = true
      const data = {
        id: this.$route.params.detail,
      }
      this.$store
        .dispatch('creative/getDetail', data)
        .then((res) => {
          titlePage = res.data.data.name
          console.log('titlepage : ', titlePage)
          this.format = res.data.data.template.format
          if (this.format === 'display') {
            this.staticSrc =
              res.data.data.configSchema.properties.image.currentValue
          }
          if (this.format === 'rmb') {
            this.staticSrc =
              this.$config.baseURL +
              'creative/' +
              this.$route.params.detail +
              '/html'
          }
          if (this.format === 'custom_upload') {
            this.staticSrc = res.data.data.previewUrl
          }
          if (this.format === 'video') {
            this.staticSrc = res.data.data.previewUrl
            const thumbnail = res.data.data.template.thumbnail
            if (this.isValidUrl(thumbnail)) {
              this.thumbnail = thumbnail
            } else {
              this.thumbnail = this.$config.baseURL + 'obs?fileKey=' + thumbnail
            }
          }
          this.url = res.data.data.configSchema.clickUrl
          this.height = res.data.data.resolution.height
          this.width = res.data.data.resolution.width
          if (this.height > 1000 || this.width > 1000) {
            this.showZoom = true
          } else {
            this.showZoom = false
          }
          this.creativeName = res.data.data.name
          this.templateName = res.data.data.template.name
          this.type = res.data.data.template.format
          this.templateId = res.data.data.template.templateId
          if (res.data.data.campaigns.length === 0) {
            this.campaignName = '-'
          }
          this.contentHTML = res.data.data.htmlContent
          // this.sendToIframe()
          this.isLoading = false
          this.getPreviewDevices()
        })
        .catch((er) => {
          this.isLoading = false
        })
    },
    getPreviewDevices() {
      const data = {
        id: this.templateId,
      }
      this.previewDevice = []
      this.$store
        .dispatch('template/getPreviewDevices', data)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            if (res.data.data.length > 0) {
              this.previewDevice = res.data.data
              this.checkParam()
              // this.getPreviewWebsites(2)
            }
          }
        })
        .catch(() => {})
    },
    getPreviewWebsites(id) {
      const data = {
        id,
      }
      this.$store
        .dispatch('template/getPreviewWebsites', data)
        .then((res) => {})
        .catch(() => {})
    },
    checkParam() {
      this.device = this.$router.currentRoute.query.device
      if (this.device === null || this.device === undefined) {
        this.selectedPreviewDevice.id = 1
        this.selectedPreviewDevice.name = 'Creative Only'
        this.checkParamPublisher()
      }
      if (this.device === 'mobile' || this.device === 'Mobile') {
        if (this.previewDevice.find((item) => item.id === 5)) {
          this.selectDevice(
            this.previewDevice.find((item) => item.id === 5),
            this.previewDevice.findIndex((i) => i.id === 5)
          )
          this.checkParamPublisher()
        } else {
          this.$message.error('This creative not available for mobile devices')
          this.selectedPreviewDevice.id = 1
          this.selectedPreviewDevice.name = 'Creative Only'
          this.checkParamPublisher()
        }
      }
      if (this.device === 'desktop' || this.device === 'Desktop') {
        if (this.previewDevice.find((item) => item.id === 2)) {
          this.selectDevice(
            this.previewDevice.find((item) => item.id === 2),
            this.previewDevice.findIndex((i) => i.id === 2)
          )
          this.dialogInfo = false
          this.checkParamPublisher()
        } else {
          this.$message.error('This creative not available for dekstop devices')
          this.selectedPreviewDevice.id = 1
          this.selectedPreviewDevice.name = 'Creative Only'
          this.checkParamPublisher()
        }
      }
    },
    checkParamPublisher() {
      this.publisher = this.$router.currentRoute.query.publisher
      const kompas = ['kompas', 'kompas.com', 'kompascom']

      const tribun = ['tribun', 'tribunnews', 'tribunnews.com', 'tribunnewscom']

      const grid = ['grid', 'grid.id', 'gridid']
      if (this.publisher === null || this.publisher === undefined) {
        // this.$message.error('Publisher null')
      } else if (kompas.includes(this.publisher.toLowerCase())) {
        this.selectPreview(
          this.previewTemplate.find((item) => item.id === 1),
          0
        )
      } else if (grid.includes(this.publisher.toLowerCase())) {
        this.selectPreview(
          this.previewTemplate.find((item) => item.id === 3),
          1
        )
      } else if (tribun.includes(this.publisher.toLowerCase())) {
        this.selectPreview(
          this.previewTemplate.find((item) => item.id === 2),
          2
        )
      } else {
        this.$message.error('Publisher is not available')
      }
    },
    selectDevice(item, index) {
      this.previewDevice[index] = this.selectedPreviewDevice
      this.selectedPreviewDevice = item
      this.showDevice = false
      if (this.selectedPreviewDevice.id === 2) {
        this.dialogInfo = false
      }
      if (this.selectedPreviewDevice.id === 1) {
        if (this.$router.currentRoute.query.publisher === undefined) {
          this.$router
            .replace({ path: '/creative/detail/' + this.$route.params.detail })
            .catch(() => {})
        } else {
          this.$router
            .replace({
              path:
                '/creative/detail/' +
                this.$route.params.detail +
                '?publisher=' +
                this.$router.currentRoute.query.publisher,
            })
            .catch(() => {})
        }
      } else if (this.$router.currentRoute.query.publisher === undefined) {
        this.$router
          .replace({
            path:
              '/creative/detail/' +
              this.$route.params.detail +
              '?device=' +
              this.selectedPreviewDevice.name.toLowerCase(),
          })
          .catch(() => {})
      } else {
        this.$router
          .replace({
            path:
              '/creative/detail/' +
              this.$route.params.detail +
              '?publisher=' +
              this.$router.currentRoute.query.publisher +
              '&device=' +
              this.selectedPreviewDevice.name.toLowerCase(),
          })
          .catch(() => {})
      }
    },
    selectPreview(item, index) {
      // this.previewTemplate[index] = this.selectedPreviewTemplate
      this.selectedPreviewTemplate = item
      this.showPreview = false

      if (this.$router.currentRoute.query.device === undefined) {
        this.$router
          .replace({
            path:
              '/creative/detail/' +
              this.$route.params.detail +
              '?publisher=' +
              this.selectedPreviewTemplate.name.toLowerCase(),
          })
          .catch(() => {})
      } else {
        this.$router
          .replace({
            path:
              '/creative/detail/' +
              this.$route.params.detail +
              '?publisher=' +
              this.selectedPreviewTemplate.name.toLowerCase() +
              '&device=' +
              this.$router.currentRoute.query.device,
          })
          .catch(() => {})
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
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < 800) {
        this.dialogInfo = false
      } else {
        this.dialogInfo = true
      }
    },
    sendToIframe() {
      const data = {
        height: this.height,
        width: this.width,
        format: this.format,
        src: this.staticSrc,
        url: this.url,
      }
      this.$refs.iframe.contentWindow.sendToken(data)
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
      let host = ''
      if (
        this.$router.currentRoute.query.device === undefined &&
        this.$router.currentRoute.query.publisher === undefined
      ) {
        host =
          'https://space.unimind.id/creative/detail/' +
          this.$route.params.detail
      }
      if (
        this.$router.currentRoute.query.device !== undefined &&
        this.$router.currentRoute.query.publisher === undefined
      ) {
        host =
          'https://space.unimind.id/creative/detail/' +
          this.$route.params.detail +
          '?device=' +
          this.selectedPreviewDevice.name.toLowerCase()
      }
      if (
        this.$router.currentRoute.query.device === undefined &&
        this.$router.currentRoute.query.publisher !== undefined
      ) {
        host =
          'https://space.unimind.id/creative/detail/' +
          this.$route.params.detail +
          '?publisher=' +
          this.$router.currentRoute.query.publisher
      }
      if (
        this.$router.currentRoute.query.device !== undefined &&
        this.$router.currentRoute.query.publisher !== undefined
      ) {
        host =
          'https://space.unimind.id/creative/detail/' +
          this.$route.params.detail +
          '?device=' +
          this.selectedPreviewDevice.name.toLowerCase() +
          '&publisher=' +
          this.$router.currentRoute.query.publisher
      }
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
.thumbnail-video {
  position: relative;
  .linear-background {
    position: absolute;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgb(27, 54, 97, 0.8);
  }
  .thumbnail-image {
    position: absolute;
    top: 0px;
    z-index: 9;
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: black;
  }
  .play-btn {
    height: 200px;
    width: 200px;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    z-index: 11;
    .icon-play {
      height: 85px;
      width: 85px;
      margin-left: 18px;
    }
  }
  .play-btn:hover {
    opacity: 0.8;
  }
}
.iframe-align {
  margin-top: 10px;
  transform: scale(0.32, 0.32);
  transform-origin: top center;
  position: relative;
  left: -35px;
}
.center-iframe {
  margin-top: 10px;
  transform: scale(0.5, 0.5);
  transform-origin: top center;
}
.left-iframe {
  margin-top: 10px;
  transform: scale(0.5, 0.5);
  transform-origin: top left;
  position: relative;
  left: 35px;
}
.center-iframe-2 {
  position: relative;
  margin-top: 10px;
  transform: scale(0.6, 0.6);
  left: -80px !important;
  transform-origin: top center;
}
.class-zoom {
  transform-origin: top center;
}
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
