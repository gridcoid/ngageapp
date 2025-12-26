const initialState = () => ({
  dataList: [],
})

export const state = initialState

export const getters = {
  dataList: (state) => state.dataList,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_LIST(state, item) {
    if (item !== null) {
      state.dataList = item.data
    } else {
      state.dataList = []
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // dashboard:list
  async list({ commit }) {
    try {
      const response = await this.$repositories.dashboard.list()
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

  // dashboard:addWidget
  async addWidget({ commit }, { dashboardUuid, widget }) {
    try {
      const response = await this.$repositories.dashboard.addWidget(
        dashboardUuid,
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
