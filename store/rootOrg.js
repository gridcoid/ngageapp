const initialState = () => ({
  dataList: [],
  totalList: 0,
  totalPages: 0,

  dataCreate: {},
  dataDetail: {},
})

export const state = initialState

export const getters = {
  dataList: (state) => state.dataList,
  dataCreate: (state) => state.dataCreate,
  dataDetail: (state) => state.dataDetail,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_LIST(state, item) {
    if (item !== null) {
      state.dataList = item.rows
      state.totalList = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataList = []
      state.totalList = 0
      state.totalPages = 0
    }
  },
  SET_DATA_CREATE(state, item) {
    if (item !== null) {
      state.dataCreate = item
    } else {
      state.dataCreate = []
    }
  },
  SET_DATA_DETAIL(state, item) {
    if (item !== null) {
      state.dataDetail = item
    } else {
      state.dataDetail = {}
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // org:rootList
  async rootList({ commit }, payload) {
    try {
      const response = await this.$repositories.org.rootList(payload)
      commit('SET_DATA_LIST', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_LIST', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // org:rootCreate
  async rootCreate({ commit }, payload) {
    try {
      const response = await this.$repositories.org.rootCreate(payload)
      commit('SET_DATA_CREATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // org:rootDetail
  async rootDetail({ commit }, payload) {
    try {
      const response = await this.$repositories.org.rootDetail(payload)
      commit('SET_DATA_DETAIL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // org:rootUpdate
  async rootUpdate({ commit }, payload) {
    try {
      const response = await this.$repositories.org.rootUpdate(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // org:rootDelete
  async rootDelete({ commit }, payload) {
    try {
      const response = await this.$repositories.org.rootDelete(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
}
