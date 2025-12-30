const initialState = () => ({
  dataTemplate: {},
  totalTemplate: 0,
  totalPages: 0,
  dataDetailTemplate: {},
  dataCurrentResolution: {},
  dataResolution: {},
  dataForm: [],
  dataImageRaw: [],
  dataImageArrayRaw: [],
  dataImageArrayRaw2: [],
  keyName: [],
  keyFilter: [],
  dataResolutionTemplate: [],
  selectedResolution: null,
  dataPreviewWebsites: null,
  dataPreviewDevices: null,
  dataScrapeText: null,
  dataScrapeImage: null,
  dataScraping: [],
})

export const state = initialState

export const getters = {
  dataTemplate: (state) => state.dataTemplate,
  dataDetailTemplate: (state) => state.dataDetailTemplate,
  dataImageArrayRaw2: (state) => state.dataImageArrayRaw2,
  dataPreviewWebsites: (state) => state.dataPreviewWebsites,
  dataPreviewDevices: (state) => state.dataPreviewDevices,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_CHANGE_RESOLUTION: (state, item) => {
    state.selectedResolution = item
  },
  SET_CHANGE_OPTION: (state, payload) => {
    const index = state.dataForm.findIndex((x) => x.title === payload.titleForm)
    state.dataForm[index].default.forEach((key, index) => {
      key.status = false
    })
    state.dataForm[index].default[payload.index].status = true
  },
  SET_DATA_TEMPLATE(state, item) {
    if (item !== null) {
      state.dataTemplate = item
    } else {
      state.dataTemplate = []
      state.totalTemplate = 0
      state.totalPages = 0
    }
  },
  SET_DATA_RESOLUTION_TEMPLATE(state, item) {
    if (item !== null) {
      state.dataResolutionTemplate = item
    } else {
      state.dataResolutionTemplate = []
    }
  },
  SET_DATA_DETAIL_TEMPLATE(state, item) {
    if (item !== null) {
      state.dataForm = []
      state.keyName = []
      state.keyFilter = []
      state.dataDetailTemplate = item
      if (item.configSchema !== null) {
        state.dataCurrentResolution = item.configSchema.resolutions[0]
        state.dataResolution = item.configSchema.resolutions
        state.dataScraping = item.configSchema.scraping
        const format = item.format
        const dataForm = item.configSchema.properties
        const keys = Object.keys(dataForm)

        const sortedKeys = [
          'titleTxt',
          'bodyTxt',
          'timRedaksi',
          'sound',
          'customSound',
          'logo',
          'pics',
        ]
        if (keys.includes('sound')) {
          keys.sort((a, b) => {
            const indexA = sortedKeys.indexOf(a)
            const indexB = sortedKeys.indexOf(b)
            if (indexA === -1 && indexB === -1) {
              return 0
            }
            if (indexA === -1) {
              return 1
            }
            if (indexB === -1) {
              return -1
            }
            return indexA - indexB
          })
        }

        const data = []
        const keyName = []
        keys.forEach((key, index) => {
          dataForm[key].type =
            dataForm[key].type.charAt(0).toUpperCase() +
            dataForm[key].type.slice(1)
          data.push(dataForm[key])
          keyName.push({
            key,
            type: dataForm[key].type,
            title: dataForm[key].title,
          })
        })
        if (format === 'rmb') {
          data.push({
            currentValue: item.configSchema.backupImg.currentValue,
            default: item.configSchema.backupImg.default,
            description: item.configSchema.backupImg.description,
            height: item.configSchema.backupImg.height,
            title: item.configSchema.backupImg.title,
            type: 'Image',
            width: item.configSchema.backupImg.width,
          })
          if (item.configSchema.youtubeId !== undefined) {
            data.push({
              default: item.configSchema.youtubeId.default,
              description: item.configSchema.youtubeId.description,
              title: 'youtubeId',
            })
          }
          keyName.push({
            key: 'backupImg',
            type: 'Image',
            title: 'Backup Image',
          })
        }
        if (format !== 'video') {
          data.push(item.configSchema.clickUrl)
        }
        // if (format === 'video') {
        //   data.push(false)
        // }
        //
        // const image = keyName.filter(item => item.type === 'Image' || item.type === 'Image_array')
        // const text = keyName.filter(item => item.type === 'Text' || item.type === 'Text_only')
        //
        //
        state.keyName = keyName
        state.keyFilter = keyName.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.type === value.type)
        )
        state.keyFilter.unshift({
          key: 'All',
          type: 'All',
          title: 'All',
        })
        state.dataForm = data
      }
    } else {
      state.dataDetailTemplate = []
      state.dataCurrentResolution = ''
      state.dataResolution = ''
      state.dataForm = ''
    }
  },
  SET_DATA_FORM_DUMMY(state, payload) {
    state.dataForm = payload
  },
  SET_DATA_FORM(state, payload) {
    if (payload.type === 'Image') {
      if (typeof payload.index !== 'undefined') {
        state.dataForm[payload.index].default = payload.src
      }
    }
    if (payload.type === 'ImageArray') {
      if (typeof payload.index !== 'undefined') {
        state.dataForm[payload.index].default = payload.src
      }
    }
    if (payload.type === 'Color') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default =
        'background-color:' +
        payload.color +
        ';opacity:' +
        payload.opacity +
        '%;'
    }
    if (payload.type === 'Text') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.title === 'youtubeId') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Button') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default.bg_color =
        'background-color:' +
        payload.color2 +
        ';opacity:' +
        payload.opacity2 +
        '%;'
      data.default.text = payload.src
      data.default.link = payload.link
    }
    if (payload.type === 'TextOnly') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Audio') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.default
    }
    if (payload.type === 'Custom_audio') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Text_color') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default.color = payload.src.color
      data.default.text = payload.src.text
    }
    if (payload.type === 'Color_pallete') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Json') {
      const data = state.dataForm.find((item) => item.title === payload.title)
      data.default = payload.src
    }
  },
  SET_DATA_IMAGE(state, payload) {
    const index = state.dataImageRaw.findIndex((x) => x.title === payload.title)
    if (index === -1) {
      state.dataImageRaw.push(payload)
    } else {
      state.dataImageRaw[index].default = payload.default
    }
  },
  SET_CHANGE_IMAGE(state, payload) {
    const finalData = []
    state.dataImageRaw.forEach((item, index) => {
      finalData.push(item)
    })

    finalData[payload.index].default = payload.default

    state.dataImageRaw = finalData
  },
  SET_DATA_IMAGEARRAY(state, payload) {
    state.dataImageArrayRaw = []

    if (typeof payload.default === 'object') {
      payload.default = Object.values(payload.default).join(',')
    }

    const imageData = payload.default.split(',')
    for (let i = 0; i < imageData.length; i++) {
      state.dataImageArrayRaw.push({
        file: null,
        img: imageData[i],
      })
    }
  },
  SET_DATA_IMAGEARRAY2(state, payload) {
    state.dataImageArrayRaw2 = []

    if (typeof payload.default === 'object') {
      payload.default = Object.values(payload.default).join(',')
    }
    const imageData = payload.default.split(',')
    state.dataImageArrayRaw2 = imageData
  },
  SET_CHANGE_IMAGEARRAY(state, payload) {
    const finalData = []
    state.dataImageArrayRaw.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw))
    finalData[payload.indexImage].file = payload.default
    finalData[payload.indexImage].img = URL.createObjectURL(payload.default.raw)
    state.dataImageArrayRaw = finalData
    // state.dataImageArrayRaw[payload.indexImage].file = payload.default
    // state.dataImageArrayRaw[payload.indexImage].img = URL.createObjectURL(payload.default.raw)
  },

  SET_CHANGE_IMAGEARRAY_BULK(state, payload) {
    const finalData = []
    state.dataImageArrayRaw.forEach((item, index) => {
      finalData.push(item)
    })
    payload.forEach((item, index) => {
      const finalDataItem = { ...finalData[index] }
      finalDataItem.file = item.default
      finalDataItem.img = URL.createObjectURL(item.default.raw)
      finalData[index] = finalDataItem
    })

    state.dataImageArrayRaw = finalData
  },

  SET_CHANGE_IMAGEARRAY2(state, payload) {
    const finalData = []
    state.dataImageArrayRaw2.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw2))
    finalData[payload.indexImage] = payload.default
    state.dataImageArrayRaw2 = finalData
    // state.dataImageArrayRaw2[payload.indexImage] = payload.default
  },

  SET_CHANGE_IMAGEARRAY2_BULK(state, payload) {
    const finalData = []
    state.dataImageArrayRaw2.forEach((item, index) => {
      finalData.push(item)
    })
    payload.forEach((item, index) => {
      finalData[index] = item.default
    })

    state.dataImageArrayRaw2 = finalData
  },

  SET_REMOVE_IMAGEARRAY(state, payload) {
    const finalData = []
    state.dataImageArrayRaw.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw))
    finalData[payload.index].file = null
    finalData[payload.index].img = payload.src
    state.dataImageArrayRaw = finalData
    // state.dataImageArrayRaw[payload.index].file = null
    // state.dataImageArrayRaw[payload.index].img = payload.src
  },
  SET_REMOVE_IMAGEARRAY2(state, payload) {
    const finalData = []
    state.dataImageArrayRaw2.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw2))
    finalData[payload.index] = payload.src
    state.dataImageArrayRaw2 = finalData
    // state.dataImageArrayRaw2[payload.index] = payload.src
  },
  SET_DRAG_IMAGEARRAY(state, payload) {
    state.dataImageArrayRaw = payload
  },
  SET_DRAG_IMAGEARRAY2(state, payload) {
    state.dataImageArrayRaw2 = payload
  },
  SET_CLEAR_IMAGE(state) {
    state.dataImageArrayRaw = []
  },
  SET_CLEAR(state) {
    // state.dataForm = []
    state.dataImageRaw = []
    state.dataImageArrayRaw = []
    state.dataDetailTemplate = []
    state.dataResolution = []
    state.dataCurrentResolution = []
    state.keyName = []
  },
  SET_DATA_PREVIEW_WEBSITE(state, item) {
    if (item !== null) {
      state.dataPreviewWebsites = item
    } else {
      state.dataPreviewWebsites = null
    }
  },
  SET_DATA_PREVIEW_DEVICE(state, item) {
    if (item !== null) {
      state.dataPreviewDevices = item
    } else {
      state.dataPreviewDevices = null
    }
  },
  SET_DATA_SCRAPE_TEXT(state, item) {
    if (item !== null) {
      // const keys = Object.keys(item)
      // keys.forEach((key, index) => {
      //   item[key] = item[key].join('')
      // })

      state.dataScrapeText = item
    } else {
      state.dataScrapeText = null
    }
  },
  SET_DATA_SCRAPE_IMAGE(state, item) {
    if (item !== null) {
      // const keys = Object.keys(item)
      // keys.forEach((key, index) => {
      //   item[key] = item[key].join('')
      // })
      state.dataScrapeImage = item
    } else {
      state.dataScrapeImage = null
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },
  async getList({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getList(payload)
      commit('SET_DATA_TEMPLATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_TEMPLATE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getDetail({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getDetail(payload)
      commit('SET_DATA_DETAIL_TEMPLATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL_TEMPLATE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async getResolutionByTemplate({ commit }, payload) {
    try {
      const response =
        await this.$repositories.template.getResolutionByTemplate(payload)
      commit('SET_DATA_RESOLUTION_TEMPLATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_RESOLUTION_TEMPLATE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async getPreviewWebsites({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getPreviewWebsites(
        payload
      )
      commit('SET_DATA_PREVIEW_WEBSITE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PREVIEW_WEBSITE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async getPreviewDevices({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getPreviewDevices(
        payload
      )
      commit('SET_DATA_PREVIEW_DEVICE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PREVIEW_DEVICE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async getScrapeText({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getScrapeText(payload)
      commit('SET_DATA_SCRAPE_TEXT', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_SCRAPE_TEXT', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async getScrapeImage({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getScrapeImage(payload)
      commit('SET_DATA_SCRAPE_IMAGE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_SCRAPE_IMAGE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
  async createTemplateCustom({ commit }, payload) {
    try {
      const response = await this.$repositories.template.createCustomUpload(
        payload
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content:
          'Error status code: ' +
          e.response?.status +
          ' ! ' +
          e.response.data.data.message,
        type: 'failed',
      })
      return e.response
    }
  },
  async getScrapeWeather({ commit }, payload) {
    try {
      const response = await this.$repositories.template.getScrapeWeather(
        payload
      )
      commit('SET_DATA_SCRAPE_TEXT', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_SCRAPE_TEXT', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed',
      })
      return e.response
    }
  },
}
