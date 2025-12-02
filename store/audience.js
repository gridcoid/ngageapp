const initialState = () => ({
  isLoading: false,
  isEdit: false,
  dataList: [],
  totalList: 0,
  totalPages: 0,
  dataCreate: {},
  dataDetail: {},
})

export const state = initialState

export const getters = {
  isLoading: (state) => state.isLoading,
  dataList: (state) => state.dataList,
  dataDetail: (state) => state.dataDetail,
  dataCreate: (state) => state.dataCreate,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_DATA_EDIT: (state, payload) => {
    state.isEdit = payload
  },
  SET_DATA_LIST(state, item) {
    if (item !== null) {
      state.dataList = item.data.rows
      state.totalList = item.data.totalRows
      state.totalPages = item.data.totalPages
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
  SET_DATA_DETAIL_AUDIENCE(state, item) {
    if (item !== null) {
      state.dataDetail = item
    } else {
      state.dataDetail = []
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // audience:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.create(payload)
      commit('SET_DATA_CREATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // audience:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.list(payload)
      commit('SET_DATA_LIST', response.data)
      return response
    } catch (e) {
      commit('SET_DATA_LIST', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // audience:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.detail(payload)
      commit('SET_DATA_DETAIL_AUDIENCE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL_AUDIENCE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // audience:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.update(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // audience:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
}
