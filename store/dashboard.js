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
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // dashboard:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.dashboard.create(payload)
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

  // dashboard:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.dashboard.list(payload)
      commit('SET_DATA_LIST', response.data)
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

  // dashboard:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.dashboard.detail(payload)
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

  // dashboard:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.dashboard.update(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.dashboard.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:addWidget
  async addWidget({ commit }, { dashboardId, widget }) {
    try {
      const response = await this.$repositories.dashboard.addWidget(
        dashboardId,
        widget
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:updateWidget
  async updateWidget({ commit }, { dashboardId, widgetId, widget }) {
    try {
      const response = await this.$repositories.dashboard.updateWidget(
        dashboardId,
        widgetId,
        widget
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:deleteWidget
  async deleteWidget({ commit }, { dashboardId, widgetId }) {
    try {
      const response = await this.$repositories.dashboard.deleteWidget(
        dashboardId,
        widgetId
      )
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
