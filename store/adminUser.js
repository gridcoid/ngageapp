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

  // user:adminList
  async adminList({ commit }, payload) {
    try {
      const response = await this.$repositories.user.adminList(payload)
      commit('SET_DATA_LIST', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_LIST', null)
      console.error(e)
      this.$notifier.showMessage({
        content:
          e.response?.data?.data?.message ||
          'Error: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // user:adminCreate
  async adminCreate({ commit }, payload) {
    try {
      const response = await this.$repositories.user.adminCreate(payload)
      commit('SET_DATA_CREATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE', null)
      console.error(e)
      this.$notifier.showMessage({
        content:
          e.response?.data?.data?.message ||
          'Error: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // user:adminDetail
  async adminDetail({ commit }, payload) {
    try {
      const response = await this.$repositories.user.adminDetail(payload)
      commit('SET_DATA_DETAIL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL', null)
      console.error(e)
      this.$notifier.showMessage({
        content:
          e.response?.data?.data?.message ||
          'Error: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // user:adminUpdate
  async adminUpdate({ commit }, payload) {
    try {
      const response = await this.$repositories.user.adminUpdate(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content:
          e.response?.data?.data?.message ||
          'Error: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // user:adminDelete
  async adminDelete({ commit }, payload) {
    try {
      const response = await this.$repositories.user.adminDelete(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content:
          e.response?.data?.data?.message ||
          'Error: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
}
