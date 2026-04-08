<template>
  <div class="kg-container flex">
    <div
      class="header-content flex items-center justify-between"
      :style="
        showPanel ? 'width:calc(100% - 360px)' : 'width:calc(100% - 50px)'
      "
    >
      <div class="flex items-center made-in">
        Made with
        <img :src="logo" alt="n-gage" class="logo-unimind" />
      </div>
      <div class="flex items-center">
        <div
          class="flex items-center justify-center btn-refresh no-select"
          @click="type === 'video' ? refresh() : sendToIframe()"
        >
          <IconReload />
        </div>
        <div
          class="flex items-center justify-center btn-refresh no-select"
          style="margin-right: 0px"
          @click="showPanel = !showPanel"
        >
          <IconInfo bg-color="#757575" />
        </div>
      </div>
    </div>
    <div class="preview flex-auto flex flex-col items-center justify-center">
      <span
        v-if="!isLoadingDetail"
        :style="
          type === 'video' && showZoom ? 'height:670px;max-width:1000px;' : ''
        "
      >
        <span v-if="type === 'rmb'">
          <iframe
            id="edit-iframe"
            ref="iframe"
            contenteditable="true"
            :src="staticSrc"
            :style="
              'height: ' +
              resolution.height +
              'px;width: ' +
              resolution.width +
              'px;'
            "
            style="margin-bottom: 20px"
            @load="sendToIframe()"
          />
        </span>
        <div v-if="type === 'video'" style="height: 100%">
          <div
            v-if="!showIframe"
            :class="showZoom ? alignCenter : ''"
            :style="
              'height: ' +
              resolution.height +
              'px;width: ' +
              resolution.width +
              'px;'
            "
            class="thumbnail-video flex items-center justify-center"
          >
            <div class="linear-background" />
            <div class="thumbnail-image" />
            <div
              class="play-btn flex items-center justify-center"
              @click="toPlay()"
            >
              <IconPlayV2 bg-color="#0056DE" class="icon-play" />
            </div>
          </div>
          <iframe
            v-else
            id="edit-iframe"
            ref="iframe"
            contenteditable="true"
            :src="staticSrc"
            :style="
              'height: ' +
              resolution.height +
              'px;width: ' +
              resolution.width +
              'px;'
            "
            :class="showZoom ? alignCenter : ''"
            @load="sendToIframe()"
            scrolling="no"
          />
        </div>
        <span v-if="type === 'display'" style="margin-bottom: 20px">
          <img
            v-if="typeof dataImageRaw[0].default === 'string'"
            :src="dataImageRaw[0].default"
          />
          <img v-else :src="dataUrl" />
        </span>
      </span>
      <el-skeleton v-else style="width: 240px" class="mb-4" animated>
        <template slot="template">
          <el-skeleton-item
            variant="image"
            style="width: 240px; height: 270px"
          />
          <div style="padding: 5px">
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>

    <transition name="slide">
      <div v-if="showPanel" class="panel-customize flex flex-col">
        <div class="header-panel flex flex-col justify-start">
          <div class="title-header">Chosen template</div>
          <div class="sub-header">
            {{ templateName }}
          </div>
        </div>
        <div class="body-panel">
          <div class="card-box flex flex-col">
            <div class="flex header-card items-center">
              <IconInfo class="mr-3" />Basic Properties
            </div>
            <div class="form-panel">
              <div class="flex flex-col box-form">
                <div class="title-form">Creative Name</div>
                <el-input v-model="name" />
              </div>
              <div class="flex flex-col box-form">
                <div class="title-form">Dimension</div>
                <el-select
                  v-model="selectedResolution"
                  style="width: 100%"
                  placeholder="Choose Dimension"
                  @change="getTemplateDetail()"
                >
                  <el-option
                    v-for="item in dataResolution"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div v-if="type !== 'video'" class="flex flex-col box-form">
                <div class="title-form">URL</div>
                <el-input v-model="url" @change="sendToIframe()" />
              </div>
              <div v-if="youtubeId !== null" class="flex flex-col box-form">
                <div class="title-form">Youtube ID</div>
                <el-input v-model="youtubeId" @input="onChangeData2()" />
              </div>
              <div class="flex flex-col box-form">
                <div class="title-form">Duration</div>
                <el-input
                  v-if="!isLoadingDuration"
                  v-model="duration"
                  disabled
                />
                <el-skeleton v-else :rows="2" animated />
              </div>
            </div>
          </div>
          <div class="card-box flex flex-col" style="margin-bottom: 125px">
            <div class="flex header-card items-center">
              <IconComponent class="mr-3" />Assets
            </div>
            <div class="form-panel">
              <div
                ref="scroll_container"
                class="card-assets flex flex-row flex-wrap"
                @mousewheel="scrollX"
              >
                <div
                  v-for="(item, index) in filteredItems"
                  :key="index"
                  :class="{ 'item-active': item.type === activeItem }"
                  class="flex flex-row items-center justify-center item-assets noselect"
                  @click="clickActiveItem(item.type)"
                >
                  <span v-if="item.type === 'Image_array'">
                    Multiple Image
                  </span>
                  <span v-if="item.type === 'Color_pallete'"> Color Only </span>
                  <span
                    v-if="
                      item.type !== 'Image_array' &&
                      item.type !== 'Color_pallete'
                    "
                  >
                    {{ item.type | spaceUnderscore }}
                  </span>
                </div>
              </div>
              <div v-for="(itemForm, IndexForm) in dataForm" :key="IndexForm">
                <CardForm
                  v-if="itemForm.type !== undefined && itemForm.type !== 'Json'"
                  :style="
                    itemForm.type === activeItem || activeItem === 'All'
                      ? ''
                      : 'display:none'
                  "
                >
                  <template v-slot:header>
                    {{ itemForm.title }}
                  </template>
                  <template v-slot:body>
                    <div v-if="!loadingData">
                      <FormEditAudio
                        v-if="itemForm.type === 'Audio'"
                        :title-form="itemForm.title"
                        :mood="dataMood"
                        @changeAudio="onChangeAudio"
                        ref="formEditAudio"
                      />
                      <FormEditTextOnly
                        v-if="itemForm.type === 'Text_only'"
                        :title-form="itemForm.title"
                        @changeText="onChangeData"
                      />
                      <FormEditImage
                        v-if="itemForm.type === 'Image'"
                        class="mr-2"
                        :title-image="itemForm.title"
                        :data-image="defaultImage"
                        @reloadback="onChangeData"
                        @openEditor="openEditor"
                      />
                      <FormEditImageArray
                        v-if="itemForm.type === 'Image_array'"
                        :title-image="itemForm.title"
                        :data-image="defaultImage"
                        @reloadback="onChangeData"
                        @openEditor="openEditor"
                      />
                      <FormEditColor
                        v-if="itemForm.type === 'Color'"
                        class="mr-2"
                        :title-form="itemForm.title"
                        @changeColor="onChangeData"
                      />
                      <FormEditText
                        v-if="itemForm.type === 'Text'"
                        class="mr-2"
                        :title-form="itemForm.title"
                        @changeText="onChangeData"
                      />
                      <FormEditButton
                        v-if="itemForm.type === 'Button'"
                        class="mr-2"
                        :title-form="itemForm.title"
                        @changeButton="onChangeData"
                      />
                      <FormEditTextColor
                        v-if="itemForm.type === 'Text_color'"
                        :title-form="itemForm.title"
                        @changeTextColor="onChangeData"
                      />
                      <FormEditColorPallete
                        v-if="itemForm.type === 'Color_pallete'"
                        :title-form="itemForm.title"
                        @changeColorOnly="onChangeData"
                      />
                      <FormEditCustomSound
                        v-if="itemForm.type === 'Custom_audio'"
                        :title-audio="itemForm.title"
                        ref="formEditCustomSound"
                        @reloadback="onChangeData"
                      />
                    </div>
                  </template>
                </CardForm>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-panel">
          <div class="box-action flex items-center">
            <k-button
              text="Discard"
              class="grow w-full pl-3 pr-1"
              type="secondary"
              @click.native="back()"
            />
            <DropdownSave
              name-btn="Save"
              class="grow w-full pr-3 pl-1"
              @preview="saveData()"
            >
              <template v-slot:body>
                <div
                  class="dropdown-action flex items-center justify-center no-select"
                  @click="saveData2()"
                >
                  <img
                    src="~/assets/images/icon/duplicate.svg"
                    class="icon-item"
                  />
                  Save & Duplicate
                </div>
              </template>
            </DropdownSave>
            <!-- <k-button
              text="Save"
              class="grow w-full pr-3 pl-1"
              @click.native="saveData()"
            /> -->
          </div>
        </div>
      </div>
      <div v-else class="panel-hide flex flex-col items-center justify-center">
        <div class="name-panel">DESIGN PANEL</div>
      </div>
    </transition>
    <ImagesEditor
      v-if="showImages"
      :img-src="dataImageEditor"
      @closeEditor="showImages = false"
      @saveEditor="saveEditor"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardForm from '~/components/card/Form.vue'
import FormEditAudio from '~/components/form/edit/Audio.vue'
import FormEditCustomSound from '~/components/form/edit/CustomSound.vue'

import logoDev from '~/assets/images/logo_ngage_dev.svg'
import logoProd from '~/assets/images/logo_ngage.svg'

export default {
  name: 'CreateCreativePage',
  layout: 'login',
  head() {
    return {
      title: 'Edit - Creative - ' + this.$config.appName,
    }
  },
  components: {
    CardForm,
    FormEditAudio,
    FormEditCustomSound,
  },
  filters: {
    capitalising(data) {
      const capitalized = []
      data.split(' ').forEach((word) => {
        capitalized.push(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
      })
      return capitalized.join(' ')
    },
    spaceUnderscore(data) {
      if (!data) {
        return ''
      }
      data = data.toString()
      return data.replace(/_/g, ' ')
    },
  },

  data() {
    const isLocalhost =
      process.client &&
      ['localhost', '127.0.0.1'].includes(window.location.hostname)

    const day = new Date().getDay()
    const isWeekday = day !== 0 && day !== 6

    return {
      logo: isLocalhost && isWeekday ? logoDev : logoProd,
      isLoadingDuration: false,
      duration: '0',
      dataMood: '',
      showIframe: false,
      thumbnail: null,
      showZoom: false,
      templateName: '',
      isLoading: false,
      creativeName: '',
      ads: '',
      url: '',
      youtubeId: null,
      itemFilter: ['All', 'Image', 'Text', 'Color', 'Button'],
      imageLoaded: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 8,
      imageData: '',
      imageUrl: '',
      imageName: '',
      imageFormat: '',
      imageSize: '',
      resolution: {
        width: '',
        height: '',
      },
      image: {
        width: 0,
        height: 0,
      },
      fileKey: [],
      fileKey2: [],
      dataResolution: [],
      staticSrc: '',
      activeItem: 'All',
      defaultImage: '',
      loadingData: false,
      showImages: false,
      dataImageEditor: {},
      type: '',
      newData: [],
      templateId: null,
      selectedResolution: [],
      isLoadingDetail: false,
      selectedAudio: {},
    }
  },
  computed: {
    ...mapState({
      orgId: (state) => {
        return state.user.orgId
      },
      dataDetailCreative: (state) => {
        return state.creative.dataDetailCreative
      },
      dataForm: (state) => {
        return state.creative.dataForm
      },
      dataImageRaw: (state) => {
        return state.creative.dataImageRaw
      },
      keyName: (state) => {
        return state.creative.keyName
      },
      keyFilter: (state) => {
        return state.creative.keyFilter
      },
      dataImageArrayRaw: (state) => {
        return state.creative.dataImageArrayRaw
      },
      dataImageArrayRaw2: (state) => {
        return state.creative.dataImageArrayRaw2
      },
      filteredItems() {
        return this.keyFilter.filter((item) => item.type !== 'Json')
      },
    }),
    // eslint-disable-next-line vue/return-in-computed-property
    dataUrl() {
      if (this.dataImageRaw[0].default !== null) {
        return URL.createObjectURL(this.dataImageRaw[0].default.raw)
      }
    },
    alignCenter() {
      if (this.resolution.width > 1000) {
        if (this.resolution.height > 1080) {
          return 'iframe-align'
        } else if (this.resolution.height < 800) {
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
    this.$store.commit('creative/SET_CLEAR_IMAGE')
    this.getAll()
  },
  methods: {
    getDuration(bodyTxt, type) {
      this.isLoadingDuration = true
      this.$store
        .dispatch('creative/getDuration', {
          templateId: this.templateId,
          bodyTxt: bodyTxt,
          type: type,
        })
        .then((res) => {
          this.duration = res?.data.data.duration + ' seconds'
        })
        .finally(() => (this.isLoadingDuration = false))
    },
    onChangeAudio(data) {
      this.selectedAudio = data
    },
    toPlay() {
      this.showIframe = true
    },
    clickActiveItem(x) {
      this.activeItem = x
    },
    saveEditor(val) {
      if (val.type === 'Image') {
        const dataJSON = {
          index: val.indexRawImage,
          default: val.data,
        }
        this.$store.commit('creative/SET_CHANGE_IMAGE', dataJSON)
        const data = {
          index: val.indexForm,
          title: val.title,
          type: 'Image',
          src: val.src,
        }
        this.$store.commit('creative/SET_DATA_FORM', data)
        this.sendToIframe()
        this.showImages = false
      }
      if (val.type === 'ImageArray') {
        const dataJSON = {
          indexImage: val.indexRawImage,
          default: val.data,
        }
        this.$store.commit('creative/SET_CHANGE_IMAGEARRAY', dataJSON)

        const dataJSON2 = {
          indexImage: val.indexRawImage,
          default: val.src,
        }
        this.$store.commit('creative/SET_CHANGE_IMAGEARRAY2', dataJSON2)

        const data = {
          index: val.indexForm,
          title: val.title,
          type: val.type,
          src: this.dataImageArrayRaw2,
        }
        this.$store.commit('creative/SET_DATA_FORM', data)
        this.sendToIframe()
        this.showImages = false
        this.$store.commit('user/SET_DROPDOWN', null)
      }
    },
    openEditor(val) {
      this.showImages = val.dialog
      this.dataImageEditor = val
    },
    async saveData() {
      if (this.name !== '') {
        this.fileKey = []
        this.fileKey2 = []
        const dataUpload = []
        for (let i = 0; i < this.dataImageRaw.length; i++) {
          if (this.dataImageRaw[i].default instanceof Object) {
            this.fileKey.push({
              src: this.dataImageRaw[i],
              fileKey: '',
            })
          } else {
            if (this.dataImageRaw[i].default?.includes(this.$config.baseURL)) {
              const text = this.dataImageRaw[i].default
              let data = text.indexOf('fileKey=')
              data = data + 8
              dataUpload.push({
                src: text.slice(data, text.length),
                title: this.dataImageRaw[i].title,
              })
            } else {
              dataUpload.push({
                src: this.dataImageRaw[i].default,
                title: this.dataImageRaw[i].title,
              })
            }
          }
        }
        if (this.fileKey.length > 0) {
          this.imageLoaded = true
          const data = new FormData()
          for (let i = 0; i < this.fileKey.length; i++) {
            data.append('files', this.fileKey[i].src.default.raw)
          }
          await this.$axios
            .post('obs/array', data, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((res) => {
              const keys = res?.data.data.fileKeys
              for (let i = 0; i < keys.length; i++) {
                this.fileKey[i].fileKey = keys[i]
              }
              this.imageLoaded = false
            })
            .catch((error) => {
              this.$notifier.showMessage({
                content: 'Upload failed. Please try again ! ' + error,
                type: 'failed',
              })
              this.imageLoaded = false
            })
        }
        if (!this.imageLoaded) {
          for (let i = 0; i < this.fileKey.length; i++) {
            dataUpload.push({
              src: this.fileKey[i].fileKey,
              title: this.fileKey[i].src.title,
            })
          }

          for (let i = 0; i < this.dataImageArrayRaw2.length; i++) {
            if (this.dataImageArrayRaw2[i]?.includes(this.$config.baseURL)) {
              const text = this.dataImageArrayRaw2[i]
              let data = text.indexOf('fileKey=')
              data = data + 8
              this.dataImageArrayRaw2[i] = text.slice(data, text.length)
            }
          }
          const payloadImage = this.keyName
            .filter(({ type }) => type === 'Image')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: dataUpload.filter(
                  ({ title }) => title === value.title
                )[0].src,
              }
            }, {})
          const payloadImage2 = this.keyName
            .filter(({ type }) => type === 'Image_array')
            .reduce((item, value) => {
              return { ...item, [value.key]: this.dataImageArrayRaw2 }
            }, {})
          const payloadTextColor = this.keyName
            .filter(({ type }) => type === 'Text' || type === 'Color')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadButton = this.keyName
            .filter(({ type }) => type === 'Button')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadTextOnly = this.keyName
            .filter(({ type }) => type === 'Text_only')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadAudio = this.keyName
            .filter(({ type }) => type === 'Audio')
            .reduce((item, value) => {
              return { ...item, [value.key]: this.selectedAudio }
            }, {})
          const payloadTextColor2 = this.keyName
            .filter(({ type }) => type === 'Text_color')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})

          const payloadColorOnly = this.keyName
            .filter(({ type }) => type === 'Color_pallete')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})

          const payloadJson = this.keyName
            .filter(({ type }) => type === 'Json')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadCustomAudio = this.keyName
            .filter(({ type }) => type === 'Custom_audio')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          let payload = {}
          if (this.type !== 'video') {
            if (this.youtubeId === null) {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  properties: {},
                },
              }
            } else {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  youtubeId: this.youtubeId,
                  properties: {},
                },
              }
            }
          } else {
            payload = {
              name: this.name,
              resolutionId: this.resolutionId,
              config: {
                properties: {},
              },
            }
          }
          if (payloadJson !== null) {
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadAudio,
              payloadJson
            )
          }

          if (payloadImage.backupImg === undefined) {
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadImage,
              payloadImage2,
              payloadTextColor,
              payloadButton,
              payloadTextOnly,
              payloadAudio,
              payloadTextColor2,
              payloadColorOnly,
              payloadCustomAudio
            )
          } else {
            payload.config.backupImg = payloadImage.backupImg
            delete payloadImage.backupImg
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadImage,
              payloadImage2,
              payloadTextColor,
              payloadButton,
              payloadTextOnly,
              payloadAudio,
              payloadTextColor2,
              payloadColorOnly,
              payloadCustomAudio
            )
          }
          this.$store
            .dispatch('creative/updateCreative', {
              payload,
              id: this.$route.params.edit,
            })
            .then((res) => {
              if (res.status === 200) {
                // this.$store.commit('creative/SET_CLEAR')
                this.$notifier.showMessage({
                  content: 'Creative edited',
                  type: 'success',
                })
                this.$router.push({
                  path: '/placement/creative/',
                })
              }
            })
            .catch((error) => {
              this.$notifier.showMessage({
                content: 'Creative failed. Please try again ! ' + error,
                type: 'failed',
              })
            })
        }
      } else {
        this.$notifier.showMessage({
          content: '"Name" is not allowed to be empty',
          type: 'failed',
        })
      }
    },
    async saveData2() {
      if (this.name !== '') {
        this.fileKey = []
        this.fileKey2 = []
        const dataUpload = []
        for (let i = 0; i < this.dataImageRaw.length; i++) {
          if (this.dataImageRaw[i].default instanceof Object) {
            this.fileKey.push({
              src: this.dataImageRaw[i],
              fileKey: '',
            })
          } else {
            if (this.dataImageRaw[i].default?.includes(this.$config.baseURL)) {
              const text = this.dataImageRaw[i].default
              let data = text.indexOf('fileKey=')
              data = data + 8
              dataUpload.push({
                src: text.slice(data, text.length),
                title: this.dataImageRaw[i].title,
              })
            } else {
              dataUpload.push({
                src: this.dataImageRaw[i].default,
                title: this.dataImageRaw[i].title,
              })
            }
          }
        }
        if (this.fileKey.length > 0) {
          this.imageLoaded = true
          const data = new FormData()
          for (let i = 0; i < this.fileKey.length; i++) {
            data.append('files', this.fileKey[i].src.default.raw)
          }
          await this.$axios
            .post('obs/array', data, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((res) => {
              const keys = res?.data.data.fileKeys
              for (let i = 0; i < keys.length; i++) {
                this.fileKey[i].fileKey = keys[i]
              }
              this.imageLoaded = false
            })
            .catch((error) => {
              this.$notifier.showMessage({
                content: 'Upload failed. Please try again ! ' + error,
                type: 'failed',
              })
              this.imageLoaded = false
            })
        }
        if (!this.imageLoaded) {
          for (let i = 0; i < this.fileKey.length; i++) {
            dataUpload.push({
              src: this.fileKey[i].fileKey,
              title: this.fileKey[i].src.title,
            })
          }

          for (let i = 0; i < this.dataImageArrayRaw2.length; i++) {
            if (this.dataImageArrayRaw2[i]?.includes(this.$config.baseURL)) {
              const text = this.dataImageArrayRaw2[i]
              let data = text.indexOf('fileKey=')
              data = data + 8
              this.dataImageArrayRaw2[i] = text.slice(data, text.length)
            }
          }
          const payloadImage = this.keyName
            .filter(({ type }) => type === 'Image')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: dataUpload.filter(
                  ({ title }) => title === value.title
                )[0].src,
              }
            }, {})
          const payloadImage2 = this.keyName
            .filter(({ type }) => type === 'Image_array')
            .reduce((item, value) => {
              return { ...item, [value.key]: this.dataImageArrayRaw2 }
            }, {})
          const payloadTextColor = this.keyName
            .filter(({ type }) => type === 'Text' || type === 'Color')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadButton = this.keyName
            .filter(({ type }) => type === 'Button')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadTextOnly = this.keyName
            .filter(({ type }) => type === 'Text_only')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})
          const payloadAudio = this.keyName
            .filter(({ type }) => type === 'Audio')
            .reduce((item, value) => {
              return { ...item, [value.key]: this.selectedAudio }
            }, {})
          const payloadTextColor2 = this.keyName
            .filter(({ type }) => type === 'Text_color')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})

          const payloadColorOnly = this.keyName
            .filter(({ type }) => type === 'Color_pallete')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})

          const payloadJson = this.keyName
            .filter(({ type }) => type === 'Json')
            .reduce((item, value) => {
              return {
                ...item,
                [value.key]: this.dataForm.filter(
                  ({ title }) => title === value.title
                )[0].default,
              }
            }, {})

          let payload = {}
          if (this.type !== 'video') {
            if (this.youtubeId === null) {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  properties: {},
                },
              }
            } else {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  youtubeId: this.youtubeId,
                  properties: {},
                },
              }
            }
          } else {
            payload = {
              name: this.name,
              resolutionId: this.resolutionId,
              config: {
                properties: {},
              },
            }
          }

          if (payloadJson !== null) {
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadAudio,
              payloadJson
            )
          }

          if (payloadImage.backupImg === undefined) {
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadImage,
              payloadImage2,
              payloadTextColor,
              payloadButton,
              payloadTextOnly,
              payloadAudio,
              payloadTextColor2,
              payloadColorOnly
            )
          } else {
            payload.config.backupImg = payloadImage.backupImg
            delete payloadImage.backupImg
            payload.config.properties = Object.assign(
              payload.config.properties,
              payloadImage,
              payloadImage2,
              payloadTextColor,
              payloadButton,
              payloadTextOnly,
              payloadAudio,
              payloadTextColor2,
              payloadColorOnly
            )
          }
          this.$store
            .dispatch('creative/updateCreative', {
              payload,
              id: this.$route.params.edit,
            })
            .then((res) => {
              if (res.status === 200) {
                this.$store
                  .dispatch('creative/duplicateCreative', {
                    id: this.$route.params.edit,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      this.$notifier.showMessage({
                        content: 'Creative update and duplicate success',
                        type: 'success',
                      })
                      this.$router.push({
                        path: `/placement/creative/edit/${res?.data.data.id}`,
                      })
                    }
                  })
                  .catch(() => {})
              }
            })
            .catch((error) => {
              this.$notifier.showMessage({
                content: 'Creative failed. Please try again ! ' + error,
                type: 'failed',
              })
            })
        }
      } else {
        this.$notifier.showMessage({
          content: '"Name" is not allowed to be empty',
          type: 'failed',
        })
      }
    },
    async toDataUrl(url, callback) {
      const data = await fetch(url)
      const blob = await data.blob()
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
          const base64data = reader.result
          resolve(base64data)
        }
      })
    },
    setDefaultValue() {
      this.loadingData = true
      for (let i = 0; i < this.dataForm.length; i++) {
        if (this.dataForm[i].type === 'Image') {
          this.defaultImage = this.dataForm[i].default
          this.loadingData = false
          this.toDataUrl(this.dataForm[i].default).then((res) => {
            const val = {
              index: i,
              title: this.dataForm[i].title,
              type: 'Image',
              src: res,
            }
            this.onChangeData(val)
          })
        }
        if (this.dataForm[i].type === 'Json') {
          this.loadingData = false
        }
      }
      this.isLoadingDetail = false
    },
    onChangeData(val) {
      if (this.type === 'rmb' || this.type === 'video') {
        this.$store.commit('creative/SET_DATA_FORM', val)
        if (this.type !== 'video') {
          this.sendToIframe()
        }
      }
      this.newData = []
      for (let i = 0; i < this.dataImageArrayRaw.length; i++) {
        this.newData.push(this.dataImageArrayRaw[i].img)
      }
    },
    onChangeData2() {
      const data = {
        title: 'youtubeId',
        src: this.youtubeId,
      }
      this.$store.commit('creative/SET_DATA_FORM', data)
      this.sendToIframe()
    },
    scrollX(e) {
      this.$refs.scroll_container.scrollLeft += e.deltaY
    },
    sendToIframe() {
      if (this.type === 'rmb' || this.type === 'video') {
        const payloadImage = this.keyName
          .filter(({ type }) => type === 'Image')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})
        const payloadImage2 = this.keyName
          .filter(({ type }) => type === 'Image_array')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})
        const payloadTextColor = this.keyName
          .filter(({ type }) => type === 'Text' || type === 'Color')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})
        const payloadButton = this.keyName
          .filter(({ type }) => type === 'Button')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})
        const payloadTextOnly = this.keyName
          .filter(({ type }) => type === 'Text_only')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})
        const payloadAudio = this.keyName
          .filter(({ type }) => type === 'Audio')
          .reduce((item, value) => {
            return { ...item, [value.key]: this.selectedAudio }
          }, {})
        const payloadTextColor2 = this.keyName
          .filter(({ type }) => type === 'Text_color')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0],
            }
          }, {})

        const payloadColorOnly = this.keyName
          .filter(({ type }) => type === 'Color_pallete')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0].default,
            }
          }, {})

        const payloadJson = this.keyName
          .filter(({ type }) => type === 'Json')
          .reduce((item, value) => {
            return {
              ...item,
              [value.key]: this.dataForm.filter(
                ({ title }) => title === value.title
              )[0].default,
            }
          }, {})

        //
        if (this.type === 'video') {
          if (this.keyName.some(({ key }) => key === 'bodyTxt')) {
            const bodyTxt = this.keyName
              .filter(({ key }) => key === 'bodyTxt')
              .reduce((item, value) => {
                return {
                  ...item,
                  [value.key]: this.dataForm.filter(
                    ({ title }) => title === value.title
                  )[0].default,
                }
              }, {})
            this.getDuration(bodyTxt.bodyTxt.split('\n').join('\\n'), 'text')
          }

          if (this.keyName.some(({ key }) => key === 'dataCuaca')) {
            const jsonList = this.keyName
              .filter(({ type }) => type === 'Json')
              .reduce((item, value) => {
                return {
                  ...item,
                  [value.key]: this.dataForm.filter(
                    ({ title }) => title === value.title
                  )[0].default,
                }
              }, {})
            this.getDuration(jsonList.dataCuaca, 'json')
          }

          const configSchema = {
            properties: null,
            resolutions: this.selectedResolution,
            format: this.type,
          }
          delete payloadImage.backupImg
          configSchema.properties = Object.assign(
            payloadImage,
            payloadImage2,
            payloadTextColor,
            payloadButton,
            payloadTextOnly,
            payloadAudio,
            payloadTextColor2,
            payloadColorOnly,
            payloadJson
          )
          const iframeWin2 =
            document.getElementById('edit-iframe').contentWindow
          iframeWin2.postMessage(configSchema, '*')
          this.isLoading = false
        } else {
          const configSchema = {
            properties: null,
            clickUrl: {
              default: this.url,
              description: '',
            },
            resolutions: this.selectedResolution,
            format: this.type,
          }
          configSchema.properties = Object.assign(
            payloadImage,
            payloadImage2,
            payloadTextColor,
            payloadButton,
            payloadTextOnly,
            payloadAudio,
            payloadTextColor2,
            payloadColorOnly
          )

          const iframeWin2 =
            document.getElementById('edit-iframe').contentWindow
          iframeWin2.postMessage(configSchema, '*')
          this.isLoading = false
          //
          //   const iframeWin2 =
          //     document.getElementById('edit-iframe').contentWindow
          //   iframeWin2.postMessage(this.dataForm, '*')
          //   this.isLoading = false
        }
      }
    },
    refresh() {
      const iframe = document.getElementById('edit-iframe')
      iframe.src = iframe.src + '?c=' + Math.random()
      const iframeWin = document.getElementById('edit-iframe').contentWindow
      iframeWin.postMessage(this.dataForm, '*')
      // if (this.$refs.formEditAudio){
      //   this.$refs.formEditAudio[0].callAudio()
      // }
      // if (this.$refs.formEditCustomSound){
      //   this.$refs.formEditCustomSound[0].togglePlay('play')
      // }
    },
    validateUrl(str) {
      const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      ) // fragment locator
      return !!pattern.test(str)
    },
    back() {
      this.$router.push({
        path: '/placement/creative/',
      })
    },
    getAll() {
      this.getData()
    },
    getData() {
      this.$store.commit(
        'creative/SET_CHANGE_RESOLUTION',
        this.selectedResolution
      )
      this.isLoadingDetail = true
      this.$store
        .dispatch('creative/getDetail', {
          id: this.$route.params.edit,
        })
        .then((res) => {
          this.type = res?.data.data.template.format
          this.name = res?.data.data.name
          // this.dataResolution = res?.data.data.configSchema.resolutions
          this.resolutionId = res?.data.data.resolution.resolutionId
          this.url = res?.data.data.config.clickUrl
          this.staticSrc = res?.data.data.template.staticSrc
          const thumbnail = res?.data.data.template.thumbnail
          if (this.isValidUrl(thumbnail)) {
            this.thumbnail = thumbnail
          } else {
            this.thumbnail = this.$config.baseURL + 'obs?fileKey=' + thumbnail
          }
          this.resolution.height = res?.data.data.resolution.height
          this.resolution.width = res?.data.data.resolution.width
          this.templateName = res?.data.data.template.name
          this.templateId = res?.data.data.template.templateId
          const configSchema = res?.data.data.configSchema
          if (configSchema !== null) {
            if (configSchema.youtubeId !== undefined) {
              this.youtubeId = configSchema.youtubeId.currentValue
            }
          }
          this.setDefaultValue()
          this.getResolutionTemplate()

          if (
            res?.data.data.config.properties.dataCuaca &&
            Object.keys(res?.data.data.config.properties.dataCuaca).length > 0
          ) {
            this.getDuration(res?.data.data.config.properties.dataCuaca, 'json')
          } else {
            this.getDuration(
              res?.data.data.config.properties.bodyTxt.split('\n').join('\\n'),
              'text'
            )
          }
        })
        .catch(() => {
          this.imageLoaded = false
          this.isLoading = false
        })
    },
    isValidUrl(string) {
      try {
        // eslint-disable-next-line no-new
        new URL(string)
        return true
      } catch (err) {
        return false
      }
    },
    async getTemplateDetail() {
      this.$store.commit(
        'creative/SET_CHANGE_RESOLUTION',
        this.selectedResolution
      )
      this.isLoadingDetail = true
      const payload = {
        id: this.templateId,
        resolution: this.selectedResolution,
      }
      const endpoint = `template/${payload.id}?orgId=${this.orgId}&resolutionId=${payload.resolution}`
      await this.$axios
        .get(endpoint)
        .then((res) => {
          this.templateName = res?.data.data.name
          this.type = res?.data.data.format
          if (this.type === 'display') {
            this.staticSrc =
              this.$config.baseURL +
              'obs?fileKey=' +
              res?.data.data.configExample.properties.image
          }
          if (this.type === 'rmb') {
            this.staticSrc = res?.data.data.staticSrc
          }
          if (this.type === 'video') {
            this.staticSrc = res?.data.data.staticSrc
          }
          const configSchema = res?.data.data.configSchema
          if (configSchema !== null) {
            this.resolutionId = configSchema.resolutions[0].id
            this.resolution.height = configSchema.resolutions[0].height
            this.resolution.width = configSchema.resolutions[0].width
          }
          this.isLoadingDetail = false
          this.setDefaultValue()
        })
        .catch((e) => {
          this.$notifier.showMessage({
            content: 'Error status code: ' + (e.response?.status || 'Unknown'),
            type: 'failed',
          })
        })
    },
    getResolutionTemplate() {
      this.$store
        .dispatch('template/getResolutionByTemplate', {
          id: this.templateId,
        })
        .then((res) => {
          if (res.status === 200) {
            const data = res?.data.data
            if (data.length > 0) {
              const id = this.resolutionId
              this.selectedResolution = data.find(
                (item) => item.id === parseInt(id)
              ).id
              this.dataResolution = data
              this.$store.commit(
                'creative/SET_CHANGE_RESOLUTION',
                this.selectedResolution
              )
              if (
                this.dataResolution[0].height > 1000 ||
                this.dataResolution[0].width > 1000
              ) {
                this.showZoom = true
              } else {
                this.showZoom = false
              }
            }
          }
        })
        .catch(() => {})
    },
    updateCreative() {
      if (this.imageData === '' && this.imageUrl === '') {
        this.$notifier.showMessage({
          content: 'Please select image',
          type: 'failed',
        })
      }
      if (this.imageData !== '' && this.imageUrl === '') {
        this.$notifier.showMessage({
          content: 'Please select image',
          type: 'failed',
        })
      }
      if (this.imageData === '' && this.imageUrl !== '') {
        if (this.validateUrl(this.url)) {
          this.$notifier.showMessage({
            content: 'Updating creative...',
            type: 'loading',
          })
          const sto = setTimeout(
            () =>
              this.$store
                .dispatch('creative/updateCreative', {
                  name: this.name,
                  id: this.$route.params.edit,
                  resolutionId: this.resolutionId,
                  src: this.fileKey,
                  url: this.url,
                  thumbnail: this.fileKey,
                  resolutions:
                    this.resolution.width + 'x' + this.resolution.height,
                })
                .then((res) => {
                  if (res.status === 200) {
                    this.$notifier.showMessage({
                      content: 'Creative updated successfully.',
                      type: 'success',
                    })
                    clearInterval(sto)
                    this.$router.push({
                      path: '/placement/creative/',
                    })
                  } else {
                    const keys = Object.keys(res?.data.data.errors[0])
                    const arr = []
                    keys.forEach((key, index) => {
                      arr.push(res?.data.data.errors[0][key])
                    })

                    this.$notifier.showMessage({
                      content: 'Creative edit failed : ' + arr.join(', '),
                      type: 'failed',
                    })
                    clearInterval(sto)
                  }
                })
                .catch((error) => {
                  this.$notifier.showMessage({
                    content: 'Creative edit failed : ' + error,
                    type: 'failed',
                  })
                  clearInterval(sto)
                }),
            1000
          )
        } else {
          this.$notifier.showMessage({
            content: 'URL is not valid',
            type: 'failed',
          })
        }
      }
      if (this.imageData !== '' && this.imageUrl !== '') {
        if (this.validateUrl(this.url)) {
          this.saveCreative()
        } else {
          this.$notifier.showMessage({
            content: 'URL is not valid',
            type: 'failed',
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.iframe-card {
  height: 250px;
  width: 300px;
}
.thumbnail-video {
  position: relative;
  .linear-background {
    position: absolute;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 69, 164, 1);
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
  margin-top: 50px;
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
  margin-top: 60px;
  transform: scale(0.6, 0.6);
  left: -120px !important;
  transform-origin: top center;
}
.dropdown-action {
  width: 160px;
  cursor: pointer;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #1b63d4;
  height: 40px;
  background: #ffffff;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #c3ced9;
  border-radius: 5px 5px 0px 0px;
  .icon-item {
    margin-right: 13px;
  }
}
.dropdown-action:hover {
  background-color: rgb(243 244 246);
}
.title-dropdown {
  font-weight: 700;
  font-size: 14px;
  color: #1b63d4;
}
.kg-container {
  .header-content {
    position: fixed;
    top: 0px;
    padding: 0px 30px 0px 30px;
    border-bottom: 1px solid #c3ced9;
    height: 75px;
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
  .preview {
    background: #fafbfc;
    .box-container {
      width: 300px;
      height: 600px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      // padding: 20px;
      margin-bottom: 20px;
      .img-empty {
        // max-width: 200px;
        // padding-top: 10px;
        // margin-top: 13px;
        opacity: 0.5;
        // padding-top: 20px;
      }
      .img-data {
        width: 100%;
        height: 100%;
        object-fit: none;
        object-position: left top;
      }
      .title-1 {
        font-weight: 600;
        font-size: 20px;
        color: #454545;
        margin-top: 18px;
        margin-bottom: 5px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
      }
      .subtitle-1 {
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }
    }
    .btn-save {
      max-width: 125px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 36px;
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
    .btn-save:hover {
      background-color: rgb(243 244 246);
      border: 1px solid transparent;
    }
  }
  .panel-customize {
    width: 360px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f8f8f8;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
    transform: translateX(0%);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    .back-btn {
      width: 100%;
      height: 40px;
      background: #ffffff;
      padding-left: 20px;
      font-weight: 700;
      font-size: 14px;
      color: #1b63d4;
      cursor: pointer;
    }
    .back-btn:hover {
      background: #f8f8f8;
    }
    .header-panel {
      margin-bottom: 10px;
      padding: 15px;
      border-top: 1px solid #e2e2e2;
      background: #ffffff;
      border-bottom: 1px solid #e2e2e2;
      .back-button {
        width: 40px;
        margin-right: 10px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        cursor: pointer;
      }
      .back-button:hover {
        background-color: rgb(243, 244, 246);
      }
      .title-header {
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
      }
      .sub-header {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
      }
    }
    .body-panel {
      overflow-y: scroll;
      .card-box {
        width: 100%;
        padding: 15px;
        background: #ffffff;
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        border-left: 2px solid transparent;
        margin-bottom: 10px;
        .header-card {
          margin-bottom: 22px;
          font-weight: 500;
          font-size: 16px;
          color: #454545;
        }
        .form-panel {
          padding: 0px;
          background: #ffffff;
          position: relative;
          .card-assets {
            // overflow-x: scroll;
            // scrollbar-width: none; /* Firefox */
            // -ms-overflow-style: none; /* Internet Explorer 10+ */
            .item-assets {
              padding: 2px 12px 2px 12px;
              background: #ffffff;
              border: 1px solid #e2e2e2;
              font-size: 14px;
              border-radius: 500px;
              color: #1b63d4;
              width: fit-content;
              cursor: pointer;
              margin-right: 4px;
              margin-bottom: 10px;
            }
            .item-active {
              background: #1b63d4;
              border: 1px solid #1b63d4;
              color: #ffffff;
            }
          }
          .card-assets::-webkit-scrollbar {
            /* WebKit */
            width: 0;
            height: 0;
          }

          .image-data-2 {
            position: absolute;
            top: 16px;
            width: 266px;
            left: 16px;
            .img-iklan {
              height: 135px;
              border-radius: 5px 5px 0px 0px;
              object-fit: cover;
              width: 100%;
            }
          }
          .btn-icon {
            height: 40px;
            padding: 10px;
            width: 40px;
            position: absolute;
            bottom: 33px;
            right: 26px;
            background: #ffffff;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            margin-left: 10px;
            cursor: pointer;
          }
          .btn-icon:hover {
            background-color: rgb(243 244 246);
          }
          .image-data {
            background: #ffffff;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            padding-bottom: 10px;
            .img-iklan {
              height: 135px;
              border-radius: 5px 5px 0px 0px;
              object-fit: cover;
              width: 100%;
            }
            .footer-iklan {
              padding-left: 10px;
              width: 205px;
              margin-top: 10px;
              .btn-change {
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
              .btn-change:hover {
                background-color: rgb(243 244 246);
                border: 1px solid transparent;
              }
            }
          }
          .box-form {
            margin-bottom: 10px;
            .title-form {
              font-weight: 400;
              font-size: 16px;
              color: #454545;
              margin-bottom: 3px;
            }
          }

          .upload-demo {
            width: 100%;
            .el-upload {
              width: 100%;
            }
          }
          .upload-card {
            height: 100%;
            border: 1px dashed #1b63d4;
            .icon-upload {
              height: 45.5px;
              padding-left: 15px;
              margin-right: 8px;
            }
            .empty-space {
              font-weight: 700;
              font-size: 14px;
              text-align: left;
              color: #333333;
            }
            .upload-name {
              font-weight: 400;
              font-size: 12px;
              text-align: left;
              color: #757575;
            }

            .btn-upload {
              width: 90%;
              margin-left: auto;
              margin-right: auto;
              background: #ffffff;
              border: 1px solid #1b63d4;
              color: #1b63d4;
              border-radius: 5px;
              height: 34px;
              margin-top: 20px;
              cursor: pointer;
              .name-btn {
                font-weight: 700;
                font-size: 14px;
                color: #1b63d4;
                padding-left: 10px;
              }
            }
            .btn-upload:hover {
              background-color: rgb(243 244 246);
              border: 0px;
            }
          }
        }
        .component-card {
          background: #ffffff;
          border: 1px solid #e2e2e2;
          margin-bottom: 10px;
          .header-component {
            border-bottom: 1px solid #e2e2e2;
            height: 48px;
            padding-left: 15px;
            padding-right: 15px;
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            .icon-header {
              margin-right: 10px;
            }
            .btn-preview {
              cursor: pointer;
            }
          }
          .body-component {
            padding: 10px 15px 10px 15px;
          }
        }
      }
    }
    .footer-panel {
      bottom: 0px;
      position: fixed;
      width: 100%;
      .hide-panel {
        height: 40px;
        background: #ffffff;
        width: inherit;
        cursor: pointer;
        padding-right: 15px;
        padding-left: 15px;
        .hide-text {
          font-weight: 700;
          font-size: 14px;
          color: #1b63d4;
        }
      }
      .hide-panel:hover {
        background: #f8f8f8;
      }
      .box-action {
        height: 70px;
        background: #ffffff;
        width: inherit;
        border-top: 1px solid #e2e2e2;
      }
    }
  }
  .panel-hide {
    width: 50px;
    height: 100vh;
    background: #f8f8f8;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
    transform: translateX(0%);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    .btn-show {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-bottom: 1px solid #e2e2e2;
      cursor: pointer;
    }
    .btn-show:hover {
      background: #f8f8f8;
    }
    .name-panel {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #757575;
      width: 107px;
      transform: rotate(-90deg);
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
