<template>
  <div class="kg-container">
    <div class="header-content flex justify-between">
      <Back />

      <div
        class="flex items-center justify-center btn-refresh no-select"
        @click="getTemplateDetail()"
      >
        <IconRefresh />
      </div>
    </div>
    <div
      v-if="!isLoading"
      class="body-content flex items-center justify-center"
    >
      <iframe
        v-if="type === 'rmb'"
        :src="staticSrc"
        class="iframe-body"
        :style="'height: ' + height + 'px;width: ' + width + 'px;'"
      />
      <img v-if="type === 'display'" :src="staticSrc" />
      <div v-if="type === 'video'" style="height: 100%">
        <iframe
          :src="staticSrc"
          :class="showZoom ? alignCenter : ''"
          class="iframe-body"
          :style="'height: ' + height + 'px;width: ' + width + 'px;'"
          scrolling="no"
        />
      </div>
    </div>
    <div class="footer-content flex items-center justify-between">
      <img src="~/assets/images/hak_cipta.svg" />
      <k-button
        v-if="!isActive"
        text="Use this Template"
        size="large"
        type="disabled"
        style="font-weight: 700; font-size: 14px; width: 200px; height: 40px"
      />
      <k-button
        v-else
        text="Use this Template"
        size="large"
        style="font-weight: 700; font-size: 14px; width: 200px; height: 40px"
        @click.native="create($route.params.index, resolutionId)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PrevieTemplatePage',
  layout: 'login',
  head() {
    return {
      title: 'Preview - Templates - Creative - ' + this.$config.appName,
    }
  },
  data() {
    return {
      url: '',
      isLoading: false,
      staticSrc: '',
      isActive: false,
      type: '',
      height: 0,
      width: 0,
      resolutionId: null,
      showZoom: false,
    }
  },
  computed: {
    ...mapState({
      dataDetailTemplate: (state) => {
        return state.template.dataDetailTemplate
      },
      orgId: (state) => {
        return state.user.orgId
      },
    }),
    alignCenter() {
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
    },
  },
  mounted() {
    this.getTemplateDetail()
  },
  methods: {
    create(id, resId) {
      this.$router.push({
        path: `/placement/creative/create/${id}?resolution=${resId}`,
      })
    },
    getTemplateDetail() {
      this.isLoading = true
      this.$store
        .dispatch('template/getDetail', {
          id: this.$route.params.index,
          resolution: this.$router.currentRoute.query.resolution,
        })
        .then((res) => {
          this.type = res?.data.data.format
          if (this.type === 'display') {
            this.staticSrc =
              this.$config.baseURL +
              'obs?fileKey=' +
              res?.data.data.configExample.properties.image
          }
          if (this.type === 'rmb') {
            this.staticSrc =
              this.$config.baseURL +
              'template/' +
              this.$route.params.index +
              '/html'
          }
          if (this.type === 'video') {
            this.staticSrc = res?.data.data.staticSrc
          }
          this.isActive = res?.data.data.isActive
          this.height = res?.data.data.configSchema.resolutions[0].height
          this.width = res?.data.data.configSchema.resolutions[0].width
          this.resolutionId = res?.data.data.resolutionId
          if (this.height > 1000 || this.width > 1000) {
            this.showZoom = true
          } else {
            this.showZoom = false
          }
        })
        .finally(() => (this.isLoading = false))
    },
    refresh() {},
  },
}
</script>

<style lang="scss" scoped>
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
  transform-origin: top center;
  position: relative;
  left: 35px;
}
.center-iframe-2 {
  position: relative;
  margin-top: 10px;
  transform: scale(0.6, 0.6);
  left: -50px !important;
  transform-origin: top center;
}
.kg-container {
  height: 100vh;
  width: 100%;
  .header-content {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 20px;
    .btn-create {
      max-width: 190px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      .name-btn {
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 1px solid transparent;
    }
    .btn-refresh {
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
    margin-top: 30px;
    .iframe-body {
      width: 320px;
      height: 480px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      overflow: hidden;
    }
    .iframe-body::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  .footer-content {
    position: fixed;
    bottom: 0;
    height: 64px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
