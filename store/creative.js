const initialState = () => ({
  isLoading: true,
  totalPages: 0,
  totalCreative: 0,
  dataCreative: [],
  dataDetailCreative: {},
  dataResolution: {},
  dataForm: [],
  dataImageRaw: [],
  dataImageArrayRaw: [],
  dataImageArrayRaw2: [],
  keyName: [],
  keyFilter: [],
  selectedResolution: null,
  currentResolution: null,
  dataDuration: null,
  sendStudioHub: false
})

export const state = initialState()

export const getters = {
  isLoading: state => state.isLoading,
  totalPages: state => state.totalPages,
  totalCreative: state => state.totalCreative,
  dataCreative: state => state.dataCreative,
  dataDetailCreative: state => state.dataDetailCreative,
  dataResolution: state => state.dataResolution,
  dataImageArrayRaw2: state => state.dataImageArrayRaw2
}

export const mutations = {
  RESET (state) {
    const newState = initialState()
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key]
    })
  },
  SET_RESOLUTION_ID: (state, item) => {
    state.currentResolution = item
  },
  SET_CHANGE_RESOLUTION: (state, item) => {
    state.selectedResolution = item
  },
  SET_CHANGE_OPTION: (state, payload) => {
    const index = state.dataForm.findIndex(x => x.title === payload.titleForm)
    state.dataForm[index].default.forEach((key, index) => {
      key.status = false
    })
    state.dataForm[index].default[payload.index].status = true
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_DATA_CREATIVE (state, item) {
    if (item !== null) {
      state.dataCreative = item.rows
      state.totalCreative = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataCreative = []
      state.totalCreative = 0
      state.totalPages = 0
    }
  },
  SET_DATA_DURATION (state, item) {
    if (item !== null) {
      state.dataDuration = item.duration + ' seconds'
    } else {
      state.dataDuration = null
    }
  },
  SET_DATA_DETAIL_CREATIVE (state, item) {
    if (item !== null) {
      state.isLoading = true
      state.dataDetailCreative = item
      state.dataForm = []
      state.keyName = []
      state.keyFilter = []
      const format = item.template.format
      const dataForm = item.configSchema.properties
      const keys = Object.keys(dataForm)
      console.log('keys : ', keys)
      const sortedKeys = ['titleTxt', 'bodyTxt', 'timRedaksi', 'sound', 'customSound', 'logo', 'pics']
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
      console.log('keys sorted : ', keys)
      const data = []
      const keyName = []
      keys.forEach((key, index) => {
        dataForm[key].type =
          dataForm[key].type.charAt(0).toUpperCase() +
          dataForm[key].type.slice(1)
        dataForm[key].default = dataForm[key].currentValue
        data.push(dataForm[key])
        keyName.push({
          key,
          type: dataForm[key].type,
          title: dataForm[key].title
        })
      })
      if (format === 'rmb') {
        data.push({
          currentValue: item.configSchema.backupImg.currentValue,
          default: item.configSchema.backupImg.currentValue,
          description: item.configSchema.backupImg.description,
          height: item.configSchema.backupImg.height,
          title: item.configSchema.backupImg.title,
          type: 'Image',
          width: item.configSchema.backupImg.width
        })
        if (item.configSchema.youtubeId !== undefined) {
          data.push({
            default: item.configSchema.youtubeId.currentValue,
            description: item.configSchema.youtubeId.description,
            title: 'youtubeId'
          })
        }
        keyName.push({
          key: 'backupImg',
          type: 'Image',
          title: 'Backup Image'
        })
      }
      if (format !== 'video') {
        data.push(item.configSchema.clickUrl)
      }
      // if (format === 'video') {
      //   data.push(item.configSchema = false)
      // }
      state.dataForm = data
      state.keyName = keyName
      state.keyFilter = keyName.filter(
        (value, index, self) =>
          index === self.findIndex(t => t.type === value.type)
      )
      state.keyFilter.unshift({
        key: 'All',
        type: 'All',
        title: 'All'
      })
      state.isLoading = false
    } else {
      state.isLoading = true
      state.dataDetailCreative = []
      state.dataForm = ''
      state.isLoading = false
    }
  },
  SET_DATA_RESOLUTION (state, item) {
    if (item !== null) {
      state.dataResolution = item
    } else {
      state.dataResolution = []
    }
  },
  SET_DATA_FORM_DUMMY (state, payload) {
    state.dataForm = payload
  },
  SET_DATA_FORM (state, payload) {
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
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default =
        'background-color:' +
        payload.color +
        ';opacity:' +
        payload.opacity +
        '%;'
    }
    if (payload.type === 'Text') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.title === 'youtubeId') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Button') {
      const data = state.dataForm.find(item => item.title === payload.title)
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
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Audio') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.default
    }
    if (payload.type === 'Text_color') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default.color = payload.src.color
      data.default.text = payload.src.text
    }
    if (payload.type === 'Color_pallete') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.src
    }
    if (payload.type === 'Custom_audio') {
      const data = state.dataForm.find(item => item.title === payload.title)
      data.default = payload.src
    }
  },
  SET_DATA_IMAGE (state, payload) {
    const index = state.dataImageRaw.findIndex(x => x.title === payload.title)
    if (index === -1) {
      state.dataImageRaw.push(payload)
    } else {
      state.dataImageRaw[index].default = payload.default
    }
  },
  SET_CHANGE_IMAGE (state, payload) {
    const finalData = []
    state.dataImageRaw.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageRaw))
    finalData[payload.index].default = payload.default
    state.dataImageRaw = finalData
  },
  SET_DATA_IMAGEARRAY (state, payload) {
    state.dataImageArrayRaw = []
    const imageData = payload.default.split(',')
    for (let i = 0; i < imageData.length; i++) {
      state.dataImageArrayRaw.push({
        file: null,
        img: imageData[i]
      })
    }
  },
  SET_DATA_IMAGEARRAY2 (state, payload) {
    state.dataImageArrayRaw2 = []
    const imageData = payload.default.split(',')
    state.dataImageArrayRaw2 = imageData
  },
  SET_CHANGE_IMAGEARRAY (state, payload) {
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
  SET_CHANGE_IMAGEARRAY2 (state, payload) {
    const finalData = []
    state.dataImageArrayRaw2.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw2))
    finalData[payload.indexImage] = payload.default
    state.dataImageArrayRaw2 = finalData
    // state.dataImageArrayRaw2[payload.indexImage] = payload.default
  },
  SET_REMOVE_IMAGEARRAY (state, payload) {
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
  SET_REMOVE_IMAGEARRAY2 (state, payload) {
    const finalData = []
    state.dataImageArrayRaw2.forEach((item, index) => {
      finalData.push(item)
    })
    // const finalData = JSON.parse(JSON.stringify(state.dataImageArrayRaw2))
    finalData[payload.index] = payload.src
    state.dataImageArrayRaw2 = finalData
    // state.dataImageArrayRaw2[payload.index] = payload.src
  },
  SET_DRAG_IMAGEARRAY (state, payload) {
    state.dataImageArrayRaw = payload
  },
  SET_DRAG_IMAGEARRAY2 (state, payload) {
    state.dataImageArrayRaw2 = payload
  },
  SET_CLEAR_IMAGE (state) {
    state.dataImageArrayRaw = []
  },
  SET_CLEAR (state) {
    // state.dataForm = []
    state.dataImageRaw = []
    state.dataDetailCreative = []
    state.dataResolution = []
    state.keyName = []
  },
  SET_SEND_SH_CHANGE_DIALOG (state, payload) {
    state.sendStudioHub = payload
  }
}

export const actions = {
  reset ({ commit }) {
    commit('RESET')
  },
  async getCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.getList(payload)
      commit('SET_DATA_CREATIVE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATIVE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async getDuration ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.getDuration(payload)
      commit('SET_DATA_DURATION', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DURATION', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async deleteCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async getDetail ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.getDetail(payload)
      commit('SET_DATA_DETAIL_CREATIVE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL_CREATIVE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async getResolution ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.getResolution(payload)
      commit('SET_DATA_RESOLUTION', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_RESOLUTION', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async createCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.create(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async createCreativeCustom ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.createCustomUpload(
        payload
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content:
          'Error status code: ' +
          e.response.status +
          ' ! ' +
          e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async updateCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.update(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async uploadCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.uploadImage(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async uploadZIP ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.uploadZIP(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async uploadTemplate ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.uploadTemplate(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async downloadCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.download(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async downloadCreativeVideo ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.downloadVideo(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async generateCreativeVideo ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.generateVideo(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async generateCreativeVideoStatic ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.generateVideoStatic(
        payload
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async duplicateCreative ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.duplicate(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: e.response.data.data.message,
        type: 'failed'
      })
      return e.response
    }
  },
  async getCreativeById ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.getByCreativeId(payload)
      return response
    } catch (e) {
      return e.response
    }
  },
  async sendToStudioHub ({ commit }, payload) {
    try {
      const response = await this.$repositories.creative.sendToStudioHub(payload)
      return response
    } catch (e) {
      return e.response
    }
  }
}
