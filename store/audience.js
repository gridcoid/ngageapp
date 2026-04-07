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
      state.dataDetail = []
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // audience:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.list(payload)
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

  // audience:listInSegment
  async listInSegment({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.listInSegment(payload)
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

  // audience:listNotInSegment
  async listNotInSegment({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.listNotInSegment(
        payload
      )
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

  // audience:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.create(payload)
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

  // audience:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.detail(payload)
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

  // audience:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.update(payload)
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

  // audience:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.delete(payload)
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

  // audience:addToSegment
  async addToSegment({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.addToSegment(payload)
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

  // audience:addToSegmentBulk
  async addToSegmentBulk({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.addToSegmentBulk(
        payload
      )
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

  // audience:removeFromSegment
  async removeFromSegment({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.removeFromSegment(
        payload
      )
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

  // audience:removeFromSegmentBulk
  async removeFromSegmentBulk({ commit }, payload) {
    try {
      const response = await this.$repositories.audience.removeFromSegmentBulk(
        payload
      )
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
