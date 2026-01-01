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
          v-if="!advanceMode"
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
        <span v-if="!advanceMode">
          <span v-if="type === 'rmb'">
            <iframe
              id="da-iframe"
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
              id="da-iframe"
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
              scrolling="no"
              :class="showZoom ? alignCenter : ''"
              @load="sendToIframe()"
            />
          </div>
          <span v-if="type === 'display'">
            <img
              v-if="typeof dataImageRaw[0].default === 'string'"
              :src="dataImageRaw[0].default"
            />
            <img v-else :src="dataUrl" />
          </span>
        </span>
        <span v-else>
          <span v-if="type === 'rmb'">
            <iframe
              id="da-iframe"
              ref="iframe"
              contenteditable="true"
              :srcdoc="dataCode"
              :style="
                'height: ' +
                resolution.height +
                'px;width: ' +
                resolution.width +
                'px;'
              "
              style="margin-bottom: 20px"
            />
          </span>
          <div v-if="type === 'video'" style="height: 100%">
            <!-- <div
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
              </div> -->
            <iframe
              id="da-iframe"
              ref="iframe"
              contenteditable="true"
              :srcdoc="dataCode"
              :style="
                'height: ' +
                resolution.height +
                'px;width: ' +
                resolution.width +
                'px;'
              "
              :class="showZoom ? alignCenter : ''"
            />
          </div>
          <span v-if="type === 'display'">
            <iframe
              v-if="typeof dataImageRaw[0].default === 'string'"
              :srcdoc="dataCode"
            />
            <iframe v-else :srcdoc="dataCode" />
          </span>
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
      <!-- <button v-if="type === 'video'" class="flex items-center justify-center btn-save no-select" @click="refresh()">
          <IconRefresh />
          <span class="name-btn">Refresh</span>
        </button>
        <button v-else class="flex items-center justify-center btn-save no-select" @click="sendToIframe()">
          <IconRefresh />
          <span class="name-btn">Refresh</span>
        </button> -->
    </div>

    <transition name="slide">
      <div
        v-if="showPanel && !advanceMode"
        class="panel-customize flex flex-col"
      >
        <div class="header-panel flex flex-col justify-start">
          <div class="title-header">Chosen template</div>
          <div class="sub-header">
            {{ nameTemplate }}
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
                  @change="getTemplateDetail2()"
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
                <el-input v-model="url" @input="sendToIframe()" />
              </div>
              <div
                v-if="type === 'video' && showScrapping"
                class="flex flex-col box-form"
              >
                <div v-if="!isWeather">
                  <div class="title-form">URL</div>
                  <el-input v-model="url">
                    <template slot="append">
                      <div
                        class="flex items-center justify-center"
                        style="width: 30px; height: 30px; cursor: pointer"
                        @click="generateScrape()"
                      >
                        <i class="el-icon-video-play cursor-pointer" />
                      </div>
                    </template>
                  </el-input>
                </div>

                <div v-if="isWeather">
                  <div class="flex flex-col box-form">
                    <div class="title-form">Region</div>
                    <el-select
                      v-model="selectedRegion"
                      style="width: 100%"
                      placeholder="Choose Region"
                    >
                      <el-option label="Sumatera" value="sumatera"></el-option>
                      <el-option
                        label="Jawa Bali Nusa Tenggara"
                        value="jawa-bali-nusa-tenggara"
                      ></el-option>
                      <el-option
                        label="Kalimantan Sulawesi"
                        value="kalimantan-sulawesi"
                      ></el-option>
                      <el-option
                        label="Papua Maluku"
                        value="papua-maluku"
                      ></el-option>
                    </el-select>
                  </div>

                  <div class="title-form">Date</div>
                  <div class="flex items-center">
                    <el-date-picker
                      :disabled="!selectedRegion"
                      v-model="dateWeather"
                      type="date"
                      placeholder="Select date"
                      style="width: 100%"
                      format="yyyy-MM-dd"
                      :picker-options="{
                        shortcuts: [
                          {
                            text: 'Today',
                            onClick: () => {
                              date = new Date()
                            },
                          },
                        ],
                      }"
                    ></el-date-picker>
                    <div
                      class="flex items-center justify-center bg-gray-200 rounded-sm rounded-tl rounded-tr rounded-bl rounded-br"
                      style="width: 30px; height: 40px; cursor: pointer"
                      @click="generateScrapeWeather()"
                    >
                      <i class="el-icon-video-play cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div class="note-form">
                  Fitur Scrapping dari Artikel hanya tersedia dari jam 9:00 WIB
                  s/d 19:00 WIB
                </div>
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
            <div class="flex header-card items-center justify-between">
              <div class="flex items-center">
                <IconComponent class="mr-3" />Assets
              </div>
              <div @click="advanceMode = true" class="btn-advance">
                Advance Mode
              </div>
            </div>
            <div v-if="!isLoadingForm" class="form-panel">
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
                      <FormAudio
                        v-if="itemForm.type === 'Audio'"
                        :title-form="itemForm.title"
                        :mood="dataMood"
                        @changeAudio="onChangeAudio"
                        style="padding-right: 10px !important"
                        ref="formAudio"
                      />
                      <FormTextOnly
                        v-if="itemForm.type === 'Text_only'"
                        :title-form="itemForm.title"
                        @changeText="onChangeData"
                      />
                      <FormImage
                        v-if="itemForm.type === 'Image'"
                        :title-image="itemForm.title"
                        :data-image="defaultImage"
                        @openEditor="openEditor"
                        @reloadback="onChangeData"
                      />
                      <FormImageArray
                        v-if="itemForm.type === 'Image_array'"
                        :title-image="itemForm.title"
                        :data-image="defaultImage"
                        @reloadback="onChangeData"
                        @openEditor="openEditor"
                      />
                      <FormColor
                        v-if="itemForm.type === 'Color'"
                        :title-form="itemForm.title"
                        @changeColor="onChangeData"
                      />
                      <FormText
                        v-if="itemForm.type === 'Text'"
                        :title-form="itemForm.title"
                        @changeText="onChangeData"
                      />
                      <FormButton
                        v-if="itemForm.type === 'Button'"
                        :title-form="itemForm.title"
                        @changeButton="onChangeData"
                      />
                      <FormTextColor
                        v-if="itemForm.type === 'Text_color'"
                        :title-form="itemForm.title"
                        @changeTextColor="onChangeData"
                      />
                      <FormColorPallete
                        v-if="itemForm.type === 'Color_pallete'"
                        :title-form="itemForm.title"
                        @changeColorOnly="onChangeData"
                      />
                      <FormCustomSound
                        v-if="itemForm.type === 'Custom_audio'"
                        :title-audio="itemForm.title"
                        ref="formCustomSound"
                        @reloadback="onChangeData"
                      />
                    </div>
                  </template>
                </CardForm>
              </div>
            </div>
            <div v-else>
              <el-skeleton :rows="10" animated />
            </div>
          </div>
        </div>
        <div class="footer-panel">
          <div class="box-action flex items-center">
            <k-button
              text="Discard"
              class="grow w-full pl-3 pr-1"
              type="secondary"
              size="large"
              @click.native="back()"
            />
            <DropdownSave
              :name-btn="saveLoaded ? 'Loading...' : 'Save'"
              class="grow w-full pr-3 pl-1"
              @preview="saveData()"
              :loading="saveLoaded"
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
          </div>
        </div>
      </div>
      <div
        v-if="showPanel && advanceMode"
        class="panel-customize flex flex-col"
      >
        <div class="header-panel flex flex-row gap-4 justify-start">
          <div
            class="btn-show flex items-center justify-center cursor-pointer"
            @click="advanceMode = false"
          >
            <IconShowPanel />
          </div>
          <div class="flex flex-col">
            <div class="title-header">Customizing</div>
            <div class="sub-header">
              {{ nameTemplate }}
            </div>
          </div>
        </div>
        <div class="body-panel" style="overflow: hidden">
          <client-only>
            <codemirror
              ref="cmEditor"
              v-model="dataCode"
              :options="cmOptions"
              style="height: 100vh"
            />
          </client-only>
        </div>
        <div class="footer-panel">
          <div class="box-action flex items-center">
            <k-button
              text="Discard"
              class="grow w-full pl-3 pr-1"
              type="secondary"
              size="large"
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
          </div>
        </div>
      </div>
      <div
        v-if="!showPanel"
        class="panel-hide flex flex-col items-center justify-center"
      >
        <!-- <div
            class="btn-show flex items-center justify-center"
            @click="showPanel = true"
          >
            <IconShowPanel />
          </div> -->
        <div class="name-panel">DESIGN PANEL</div>
        <!-- <div
            class="btn-show position-bottom flex items-center justify-center"
            style="border-top: 1px solid #e2e2e2; border-bottom: 0px"
            @click="showPanel = true"
          >
            <IconShowPanel />
          </div> -->
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
import FormAudio from '~/components/form/Audio.vue'
import FormCustomSound from '~/components/form/CustomSound.vue'

import logoDev from '~/assets/images/logo_ngage_dev.svg'
import logoProd from '~/assets/images/logo_ngage.svg'

export default {
  name: 'LoremIpsumPage',
  layout: 'login',
  auth: false,
  head() {
    return {
      title: 'KG Rhythm - ' + this.$config.appName,
    }
  },
  components: {
    CardForm,
    FormAudio,
    FormCustomSound,
  },
  computed: {
    ...mapState({
      orgId: (state) => {
        return state.user.orgId
      },
      dataForm: (state) => {
        return state.template.dataForm
      },
      dataImageRaw: (state) => {
        return state.template.dataImageRaw
      },
      keyName: (state) => {
        return state.template.keyName
      },
      keyFilter: (state) => {
        return state.template.keyFilter
      },
      dataImageArrayRaw: (state) => {
        return state.template.dataImageArrayRaw
      },
      dataImageArrayRaw2: (state) => {
        return state.template.dataImageArrayRaw2
      },
      dataScrapeImage: (state) => {
        return state.template.dataScrapeImage
      },
      dataTemplateScraping: (state) => {
        return state.template.dataScraping
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

    return {
      logo: isLocalhost ? logoDev : logoProd,
      isLoadingDuration: false,
      duration: '0',
      dataCode: null,
      cmOptions: {
        tabSize: 2,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      },
      advanceMode: false,
      dataMood: '',
      showIframe: false,
      thumbnail: null,
      showScrapping: false,
      dataScraping: {},
      dataProperties: null,
      showZoom: false,
      nameTemplate: '',
      imageLoaded: false,
      isLoading: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 7,
      url: 'https://',
      youtubeId: null,
      imageData: '',
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
      editor: null,
      value: '',
      imgBase64: '',
      itemFilter: ['All', 'Image', 'Text', 'Color', 'Button'],
      activeItem: 'All',
      dataConvert: '',
      defaultImage: '',
      loadingData: false,
      fileKey: [],
      fileKey2: [],
      showImages: false,
      dataImageEditor: {},
      type: '',
      staticSrc: '',
      newData: [],
      selectedResolution: [],
      dataResolution: [],
      isLoadingDetail: false,
      idQuery: null,
      dataSearch: [],
      staticSrc2: '',
      isLoadingForm: false,
      selectedAudio: {},
      dataScrapeText: {},
      isWeather: false,
      dateWeather: '',
      selectedRegion: '',
      saveLoaded: false,
    }
  },
  beforeMount() {
    this.$axios.defaults.headers.common = {
      'X-TOKENKGRHYTHM': '97bee129e3e6661dbb7c31da61220c34',
    }
    this.login()
  },
  mounted() {
    this.$store.commit('template/SET_CLEAR_IMAGE')
    this.getAll()
    this.url = this.$router.currentRoute.query.url
    this.generateScrape()
  },
  methods: {
    login() {
      this.$axios
        .post(`auth/login`, {
          email: 'dendy.ardany@kgmedia.id',
          password: 'Password',
        })
        .then((res) => {
          if (res?.data.status.code == 200) {
            this.$store.commit('user/SET_ORG', res?.data.data.defaultOrgId)
            this.$store.commit('user/SET_USER', res?.data.data)
            this.getTemplateDetailNew()
          }
        })
    },

    async getURL() {
      await fetch(this.staticSrc)
        .then((response) => response.text()) // 1
        .then((json) => {
          this.dataCode = json
        })
        .catch((error) => {
          // 3
          // handle error
        })
    },
    saveAdvance() {
      var blob = new Blob([this.dataCode], { type: 'text/html' })
      var file = new File([blob], this.name + '.html', { type: 'text/html' })
    },
    toPlay() {
      this.showIframe = true
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
    generateScrape() {
      if (this.isValidUrl(this.url)) {
        this.isLoadingForm = true
        const payload = {
          url: this.url,
        }
        this.$store
          .dispatch('template/getScrapeText', payload)
          .then((res) => {
            this.dataScrapeText = res?.data.data
            this.name = this.dataScrapeText.titleTxt
            this.dataMood = this.dataScrapeText.mood
            const keys = Object.keys(this.dataScrapeText)

            const keysProperties = Object.keys(this.dataProperties)

            const dataTemplateScraping = Object.keys(this.dataTemplateScraping)

            keys.forEach((key, index) => {
              if (dataTemplateScraping.includes(key)) {
                const scrapeTextColor = {
                  color: '',
                  text: '',
                }
                if (
                  this.dataProperties[this.dataTemplateScraping[key]].type ===
                  'Text_color'
                ) {
                  ;(scrapeTextColor.color =
                    this.dataProperties[
                      this.dataTemplateScraping[key]
                    ].default.color),
                    (scrapeTextColor.text = Array.isArray(
                      this.dataScrapeText[key]
                    )
                      ? this.dataScrapeText[key].join('')
                      : this.dataScrapeText[key])
                }
                const data = {
                  title:
                    this.dataProperties[this.dataTemplateScraping[key]].title,
                  type:
                    this.dataProperties[this.dataTemplateScraping[key]].type ===
                    'Text_only'
                      ? 'TextOnly'
                      : this.dataProperties[this.dataTemplateScraping[key]]
                          .type,
                  src:
                    this.dataProperties[this.dataTemplateScraping[key]].type ===
                    'Text_color'
                      ? scrapeTextColor
                      : this.dataProperties[this.dataTemplateScraping[key]]
                          .type === 'Text'
                      ? "<p class='text-unimind' style='text-align: right'><span style='font-family: Arial, sans-serif; font-size: 20px;color: #fff;'>Penulis: " +
                        this.dataScrapeText[key] +
                        '</span></p>'
                      : this.dataProperties[this.dataTemplateScraping[key]]
                          .type === 'Text_only'
                      ? Array.isArray(this.dataScrapeText[key])
                        ? this.dataScrapeText[key].join('')
                        : this.dataScrapeText[key]
                      : this.dataScrapeText[key],
                }
                this.$store.commit('template/SET_DATA_FORM', data)
              }
            })

            const hasPicsValue = keysProperties.includes('pics')
            const payloadData = {
              url: this.url,
              multiple: hasPicsValue,
            }
            this.$store
              .dispatch('template/getScrapeImage', payloadData)
              .then(() => {
                this.uploadFile(hasPicsValue)
              })
              .catch(() => {})
          })
          .catch(() => {})
      } else {
        this.$notify.error({
          title: 'Error',
          message: '"URL" is not valid',
        })
      }
    },
    async uploadFile(type) {
      if (type) {
        this.multipleFileUpload()
      } else {
        this.fileUpload()
      }
    },
    async fileUpload() {
      const file = this.dataURLtoFile(
        'data:image/png;base64,' + this.dataScrapeImage.bgmain,
        'image-' + Date.now()
      )
      const data = {
        fileUrl: this.dataScrapeImage.bgmain_url,
      }
      await this.$axios
        .post('obs/url', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          // image process
          const dataFile = {
            status: 'ready',
            name: 'result_crop_' + Date.now() + '.png',
            size: file.size,
            percentage: 0,
            uid: '-',
            raw: file,
          }
          const titleData =
            this.dataProperties[this.dataScraping.bgmain_url].title
          const indexImage = this.dataImageRaw.findIndex(
            (x) => x.title === titleData
          )
          const dataJSON = {
            index: indexImage,
            default: dataFile,
          }
          this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
          const fileKey =
            this.$config.baseURL + 'obs?fileKey=' + res?.data.data.fileKey[0]
          const indexForm = this.dataForm.findIndex(
            (x) => x.title === titleData
          )
          const data = {
            index: indexForm,
            title: titleData,
            type: 'Image',
            src: fileKey,
          }
          this.$store.commit('template/SET_DATA_FORM', data)
          this.isLoadingForm = false
          this.toPlay()
          this.sendToIframe()
        })
        .catch(() => {
          // this.$notifier.showMessage({
          //   content: 'Upload failed. Please try again ! ' + error,
          //   type: 'failed'
          // })
          this.imageUpload = false
        })
    },
    async multipleFileUpload() {
      const file = this.dataScrapeImage.bgmain.map((item) => {
        return this.dataURLtoFile(
          'data:image/png;base64,' + item,
          'image-' + Date.now()
        )
      })
      const sendData = {
        fileUrl: this.dataScrapeImage.bgmain_url,
      }

      await this.$axios
        .post('obs/url', sendData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const dataJSONArray = []
          const dataJSONArray2 = []
          for (let i = 0; i < file.length; i++) {
            const dataFile = {
              status: 'ready',
              name: 'result_crop_' + Date.now() + '.png',
              size: file[i].size,
              percentage: 0,
              uid: '-',
              raw: file[i],
            }

            const dataJSON = {
              indexImage: i,
              default: dataFile,
            }
            dataJSONArray.push(dataJSON)

            const fileKey =
              this.$config.baseURL + 'obs?fileKey=' + res?.data.data.fileKey[i]

            const dataJSON2 = {
              indexImage: i,
              default: fileKey,
            }
            dataJSONArray2.push(dataJSON2)
          }

          this.$store.commit(
            'template/SET_CHANGE_IMAGEARRAY_BULK',
            dataJSONArray
          )
          this.$store.commit(
            'template/SET_CHANGE_IMAGEARRAY2_BULK',
            dataJSONArray2
          )

          const titleData =
            this.dataProperties[this.dataScraping.bgmain_url].title

          const dataImageArrayRaw2Array = Object.values(
            this.dataImageArrayRaw2.reduce((obj, item, index) => {
              obj[index] =
                index < file.length
                  ? item
                  : 'https://unimind.kgnow.com/templates/extracted-zip/1c9cd494908e01609b578778e01560f6/blank.png'
              return obj
            }, {})
          )

          const indexForm = this.dataForm.findIndex(
            (x) => x.title === titleData
          )
          const data = {
            index: indexForm,
            title: titleData,
            type: 'ImageArray',
            src: dataImageArrayRaw2Array,
          }

          this.$store.commit('template/SET_DATA_FORM', data)
          this.isLoadingForm = false
          this.toPlay()
          this.sendToIframe()
        })
        .catch(() => {
          // this.$notifier.showMessage({
          //   content: 'Upload failed. Please try again ! ' + error,
          //   type: 'failed'
          // })
          this.imageUpload = false
        })
    },
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[arr.length - 1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    getAll() {
      this.getResolutionTemplateNew()
    },
    getResolutionTemplateNew() {
      this.isLoading = true
      this.idQuery = this.$router.currentRoute.query.resolution
      const payload = {
        id: this.$router.currentRoute.query.id,
        resolution: this.selectedResolution,
      }
      const endpoint = `template/${payload.id}/resolution?orgId=${this.orgId}`
      this.$axios.get(endpoint).then((res) => {
        const data = res?.data.data
        if (data.length > 0) {
          const id = this.$router.currentRoute.query.resolution
          // this.selectedResolution = data[0].id
          this.selectedResolution = data.find(
            (item) => item.id === parseInt(id)
          ).id
          this.dataResolution = data
          if (
            this.dataResolution[0].height > 1000 ||
            this.dataResolution[0].width > 1000
          ) {
            this.showZoom = true
          } else {
            this.showZoom = false
          }
        }
      })
    },
    getResolutionTemplate() {
      this.isLoading = true
      this.$store
        .dispatch('template/getResolutionByTemplate', {
          id: this.$router.currentRoute.query.id,
        })
        .then((res) => {
          if (res.status === 200) {
            const data = res?.data.data
            if (data.length > 0) {
              const id = this.$router.currentRoute.query.resolution
              // this.selectedResolution = data[0].id
              this.selectedResolution = data.find(
                (item) => item.id === parseInt(id)
              ).id
              this.dataResolution = data
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
        .finally(() => {
          this.isLoading = false
        })
    },
    getDuration(bodyTxt, type) {
      this.isLoadingDuration = true
      this.$store
        .dispatch('creative/getDuration', {
          // templateId: this.$router.currentRoute.query.id,
          bodyTxt: bodyTxt,
          type: type,
          resolutionId: this.$router.currentRoute.query.resolution,
          templateId: this.$router.currentRoute.query.id,
        })
        .then((res) => {
          this.duration = res?.data.data.duration + ' seconds'
          this.isLoadingDuration = false
        })
        .catch(() => {
          this.isLoadingDuration = false
        })
    },
    getTemplateDetailNew() {
      // axios.get(`${resource}/${payload.id}?orgId=${orgId}&resolutionId=${payload.resolution}`)
      //     .then((res) => {
      this.$store.commit(
        'template/SET_CHANGE_RESOLUTION',
        this.selectedResolution
      )
      this.idQuery = this.$router.currentRoute.query.resolution
      const payload = {
        id: this.$router.currentRoute.query.id,
        resolution: this.selectedResolution,
      }
      const endpoint = `template/${payload.id}?orgId=${this.orgId}&resolutionId=${payload.resolution}`

      this.$axios.get(endpoint).then((res) => {
        this.$store.commit('template/SET_DATA_DETAIL_TEMPLATE', res?.data.data)
        this.nameTemplate = res?.data.data.name
        this.type = res?.data.data.format
        const configSchema = res?.data.data.configSchema
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
          const thumbnail = res?.data.data.thumbnail
          if (this.isValidUrl(thumbnail)) {
            this.thumbnail = thumbnail
          } else {
            this.thumbnail = this.$config.baseURL + 'obs?fileKey=' + thumbnail
          }
          if (configSchema.scraping !== undefined) {
            const scraping = configSchema.scraping
            this.showScrapping = scraping.enabled
            this.dataScraping = scraping
            this.dataProperties = configSchema.properties
            if (this.dataProperties.hasOwnProperty('dataCuaca')) {
              this.isWeather = true
            }
          }
        }
        if (configSchema !== null) {
          if (configSchema.youtubeId !== undefined) {
            this.youtubeId = configSchema.youtubeId.default
          }
          this.resolutionId = configSchema.resolutions[0].id
          this.resolution.height = configSchema.resolutions[0].height
          this.resolution.width = configSchema.resolutions[0].width
        }
        this.setDefaultValue()
        this.getURL()
      })
    },
    getTemplateDetail() {
      this.idQuery = this.$router.currentRoute.query.resolution
      if (this.idQuery !== null) {
        this.$store.commit(
          'template/SET_CHANGE_RESOLUTION',
          this.selectedResolution
        )
        this.isLoadingDetail = true
        this.$store
          .dispatch('template/getDetail', {
            id: this.$router.currentRoute.query.id,
            resolution: this.idQuery,
          })
          .then((res) => {
            this.nameTemplate = res?.data.data.name
            this.type = res?.data.data.format
            const configSchema = res?.data.data.configSchema
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
              const thumbnail = res?.data.data.thumbnail
              if (this.isValidUrl(thumbnail)) {
                this.thumbnail = thumbnail
              } else {
                this.thumbnail =
                  this.$config.baseURL + 'obs?fileKey=' + thumbnail
              }
              if (configSchema.scraping !== undefined) {
                const scraping = configSchema.scraping
                this.showScrapping = scraping.enabled
                this.dataScraping = scraping
                this.dataProperties = configSchema.properties
                if (this.dataProperties.hasOwnProperty('dataCuaca')) {
                  this.isWeather = true
                }
              }
            }
            if (configSchema !== null) {
              if (configSchema.youtubeId !== undefined) {
                this.youtubeId = configSchema.youtubeId.default
              }
              this.resolutionId = configSchema.resolutions[0].id
              this.resolution.height = configSchema.resolutions[0].height
              this.resolution.width = configSchema.resolutions[0].width
            }
            this.setDefaultValue()
            this.getURL()
          })
          .catch(() => {})
      }
    },
    async getTemplateDetail2() {
      this.$store.commit(
        'template/SET_CHANGE_RESOLUTION',
        this.selectedResolution
      )
      this.isLoadingDetail = true
      const payload = {
        id: this.$router.currentRoute.query.id,
        resolution: this.selectedResolution,
      }
      const endpoint = `template/${payload.id}?orgId=${this.orgId}&resolutionId=${payload.resolution}`
      await this.$axios
        .get(endpoint)
        .then((res) => {
          this.nameTemplate = res?.data.data.name
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
    clickActiveItem(x) {
      this.activeItem = x
    },
    saveEditor(val) {
      if (val.type === 'Image') {
        const dataJSON = {
          index: val.indexRawImage,
          default: val.data,
        }
        this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
        const data = {
          index: val.indexForm,
          title: val.title,
          type: 'Image',
          src: val.src,
        }
        this.$store.commit('template/SET_DATA_FORM', data)
        this.sendToIframe()
        this.showImages = false
      }
      if (val.type === 'ImageArray') {
        const dataJSON = {
          indexImage: val.indexRawImage,
          default: val.data,
        }
        this.$store.commit('template/SET_CHANGE_IMAGEARRAY', dataJSON)

        const dataJSON2 = {
          indexImage: val.indexRawImage,
          default: val.src,
        }
        this.$store.commit('template/SET_CHANGE_IMAGEARRAY2', dataJSON2)

        const data = {
          index: val.indexForm,
          title: val.title,
          type: val.type,
          src: this.dataImageArrayRaw2,
        }
        this.$store.commit('template/SET_DATA_FORM', data)
        this.sendToIframe()
        this.showImages = false
        this.$store.commit('user/SET_DROPDOWN', null)
      }
    },
    openEditor(val) {
      this.dataImageEditor = val
      this.showImages = val.dialog
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
                templateId: this.$router.currentRoute.query.id,
                resolutionId: this.selectedResolution,
                config: {
                  clickUrl: this.url,
                  properties: {},
                },
              }
            } else {
              payload = {
                name: this.name,
                templateId: this.$router.currentRoute.query.id,
                resolutionId: this.selectedResolution,
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
              templateId: this.$router.currentRoute.query.id,
              resolutionId: this.selectedResolution,
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
          if (this.dataCode !== null) {
            var blob = new Blob([this.dataCode], { type: 'text/html' })
            var file = new File([blob], this.name + '.html', {
              type: 'text/html',
            })
            const data = new FormData()
            data.append('file', file)
            this.saveLoaded = true
            await this.$axios
              .post('obs', data, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then((res) => {
                payload.customStaticHtml = res?.data.fileKey
                this.$store
                  .dispatch('creative/createCreative', payload)
                  .then((res) => {
                    if (res.status === 200) {
                      this.$notifier.showMessage({
                        content: 'Creative created',
                        type: 'success',
                      })
                      this.$router.push({
                        path: '/creative/',
                      })
                    }
                  })
                  .catch((error) => {
                    this.$notifier.showMessage({
                      content: 'Creative failed. Please try again ! ' + error,
                      type: 'failed',
                    })
                    this.saveLoaded = false
                  })
              })
              .catch((err) => {})
          } else {
            this.$store
              .dispatch('creative/createCreative', payload)
              .then((res) => {
                if (res.status === 200) {
                  this.$notifier.showMessage({
                    content: 'Creative created',
                    type: 'success',
                  })
                  this.$router.push({
                    path: '/creative/',
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
                templateId: this.$router.currentRoute.query.id,
                resolutionId: this.selectedResolution,
                config: {
                  clickUrl: this.url,
                  properties: {},
                },
              }
            } else {
              payload = {
                name: this.name,
                templateId: this.$router.currentRoute.query.id,
                resolutionId: this.selectedResolution,
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
              templateId: this.$router.currentRoute.query.id,
              resolutionId: this.selectedResolution,
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
            .dispatch('creative/createCreative', payload)
            .then((res) => {
              if (res.status === 200) {
                this.$store
                  .dispatch('creative/duplicateCreative', {
                    id: res?.data.data.id,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      this.$notifier.showMessage({
                        content: 'Creative save and duplicate success',
                        type: 'success',
                      })
                      this.$router.push({
                        path: `/creative/edit/${res?.data.data.id}`,
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
        const type = this.dataForm[i].type
        // if (type === 'Text_only') {
        //   const slash = this.dataForm[i].default.indexOf('||')
        //   if (slash === -1) {
        //     const eachLine = this.dataForm[i].default.split('\n')
        //     for (let i = 0, l = eachLine.length; i < l; i++) {
        //       eachLine[i] = eachLine[i] + '\n\n'
        //     }
        //     const data = {
        //       title: this.dataForm[i].title,
        //       type: 'TextOnly',
        //       src: eachLine.join('')
        //     }
        //     this.$store.commit('template/SET_DATA_FORM', data)
        //   } else {
        //     const payload = this.dataForm[i].default.replaceAll('||', '\n\n')
        //     const data = {
        //       title: this.dataForm[i].title,
        //       type: 'TextOnly',
        //       src: payload
        //     }
        //     this.$store.commit('template/SET_DATA_FORM', data)
        //   }
        // }
        if (type === 'Image') {
          this.defaultImage = this.dataForm[i].default
          this.loadingData = false
          this.toDataUrl(this.dataForm[i].default).then((res) => {
            const val = {
              title: this.dataForm[i].title,
              type: 'Image',
              src: res,
            }
            this.onChangeData(val)
          })
        }

        if (type === 'Json') {
          this.loadingData = false
        }
      }
      this.isLoadingDetail = false
    },
    onChangeData(val) {
      if (this.type === 'rmb' || this.type === 'video') {
        this.$store.commit('template/SET_DATA_FORM', val)
        if (this.type !== 'video') {
          this.sendToIframe()
        }
      }
    },
    onChangeAudio(data) {
      this.selectedAudio = data
    },
    onChangeData2() {
      const data = {
        title: 'youtubeId',
        src: this.youtubeId,
      }
      this.$store.commit('template/SET_DATA_FORM', data)
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

          const iframeWin = document.getElementById('da-iframe').contentWindow

          iframeWin.postMessage(configSchema, '*')
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

          const iframeWin = document.getElementById('da-iframe').contentWindow
          iframeWin.postMessage(configSchema, '*')
          this.isLoading = false
        }
      }
    },
    refresh() {
      const iframe = document.getElementById('da-iframe')

      iframe.src = iframe.src + '?c=' + Math.random()
      const iframeWin = document.getElementById('da-iframe').contentWindow
      iframeWin.postMessage(this.dataForm, '*')
      // if (this.$refs.formAudio){
      //   this.$refs.formAudio[0].callAudio()
      // }
      // if (this.$refs.formCustomSound){
      //   this.$refs.formCustomSound[0].togglePlay('play')
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
        path: '/creative/templates/',
      })
    },
    isValidDate(date) {
      return date instanceof Date && !isNaN(date)
    },
    convertDate(date) {
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        this.dateWeather.getDate().toString().padStart(2, '0')
      )
    },
    generateScrapeWeather() {
      if (this.isValidDate(this.dateWeather) && this.selectedRegion !== '') {
        this.isLoadingForm = true
        const dateNew = this.convertDate(this.dateWeather)
        const payload = {
          date: dateNew,
          island: this.selectedRegion,
        }
        this.$store
          .dispatch('template/getScrapeWeather', payload)
          .then((res) => {
            this.dataScrapeText = res?.data.data
            this.name =
              'Weather ' + dateNew + ' -( ' + this.selectedRegion + ' )'
            this.dataMood = 'Weather'
            const keysProperties = Object.keys(this.dataProperties)
            const keys = Object.keys(this.dataScrapeText)
            const dataTemplateScraping = Object.keys(this.dataTemplateScraping)
            keys.forEach((key, index) => {
              if (dataTemplateScraping.includes(key)) {
                const data = {
                  title:
                    this.dataProperties[this.dataTemplateScraping[key]].title,
                  type: this.dataProperties[this.dataTemplateScraping[key]]
                    .type,
                  src: this.dataScrapeText[key],
                }
                this.$store.commit('template/SET_DATA_FORM', data)
                this.isLoadingForm = false
              }
            })
            this.toPlay()
            this.sendToIframe()
          })
          .catch(() => {
            this.isLoadingForm = false
          })
      } else {
        this.$notifier.showMessage({
          type: 'failed',
          content: '"Date" or "Region" is not valid',
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
  margin-top: 50px;
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
.center-iframe-2 {
  position: relative;
  margin-top: 100px;
  transform: scale(0.6, 0.6);
  left: -120px !important;
  transform-origin: top center;
  overflow: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}
.left-iframe {
  margin-top: 10px;
  transform: scale(0.5, 0.5);
  transform-origin: top left;
  position: relative;
  left: 35px;
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

.save-btn {
  width: 100%;
  background: #1b63d4;
  border: 1px solid #1b63d4;
  color: #ffffff;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  .name-btn {
    font-family: 'Cabin';
    font-weight: 700;
    font-size: 14px;
    padding-top: 2.6px;
    color: #ffffff;
    padding-left: 10px;
  }
  .icon-item {
    margin-right: 13px;
  }
}
.save-btn:hover {
  background-color: #053f67;
  border: 0px;
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
    .iframe-card {
      height: 250px;
      width: 300px;
    }
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
        .btn-advance {
          padding: 2px 12px 2px 12px;
          background: #ffffff;
          border: 1px solid #e2e2e2;
          font-size: 14px;
          border-radius: 5px;
          color: #1b63d4;
          width: fit-content;
          cursor: pointer;
          margin-right: 4px;
        }
        .btn-advance:hover {
          background: #f8f8f8;
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
              text-transform: capitalize;
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
            .note-form {
              margin-top: 5px;
              font-family: 'Cabin';
              font-weight: 400;
              font-size: 11px;
              font-style: oblique;
              color: #9a9a9a;
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
