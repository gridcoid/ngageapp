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
  dataResult: (state) => state.dataResult,
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
  SET_DATA_RESULT(state, items) {
    if (!items) return

    // this does not work
    /*
    items.forEach((item) => {
    state.dataResult[item.uuid] = item
    })
    */

    const next = { ...state.dataResult }
    items.forEach((item) => {
      const { uuid, ...rest } = item
      next[uuid] = rest
    })
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
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
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
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
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
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
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
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
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
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // query:run
  async run({ commit }, payload) {
    try {
      // if dataResult contains payload.queryUuid, skip it
      if (payload.queryUuid in (this.state.dataResult || {}))
        return this.state.dataResult[payload.queryUuid]

      const response = await this.$repositories.query.run(payload)
      commit('SET_DATA_RESULT', response.data.data)
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
