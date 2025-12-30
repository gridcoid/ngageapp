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

  // apiKey:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.apiKey.list(payload)
      commit('SET_DATA_LIST', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_LIST', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // apiKey:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.apiKey.create(payload)
      commit('SET_DATA_CREATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // apiKey:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.apiKey.detail(payload)
      commit('SET_DATA_DETAIL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // apiKey:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.apiKey.update(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // apiKey:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.apiKey.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },
}
