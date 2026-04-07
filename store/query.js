const initialState = () => ({
  dataList: [],
  totalList: 0,
  totalPages: 0,

  dataCreate: {},
  dataDetail: {},

  dataResult: {},
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
      state.dataCreate = {}
    }
  },
  SET_DATA_DETAIL(state, item) {
    if (item !== null) {
      state.dataDetail = item
    } else {
      state.dataDetail = {}
    }
  },
  SET_DATA_RESULT(state, data) {
    if (!data.id || !data.items) return

    const next = { ...state.dataResult }
    next[data.id] = data.items
    state.dataResult = next
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // query:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.query.list(payload)
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

  // query:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.query.create(payload)
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

  // query:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.query.detail(payload)
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

  // query:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.query.update(payload)
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

  // query:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.query.delete(payload)
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

  // query:run
  async run({ commit }, payload) {
    try {
      // if dataResult contains payload.queryId, skip
      if (payload.queryId in (this.state.dataResult || {}))
        return this.state.dataResult[payload.queryId]

      const response = await this.$repositories.query.run(payload)
      commit('SET_DATA_RESULT', {
        id: payload.queryId,
        items: response.data.data,
      })
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
