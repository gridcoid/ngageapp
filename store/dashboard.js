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
  UPDATE_WIDGETS(state, widgets) {
    if (!state.dataList?.config) return
    state.dataList.config.widgets = JSON.parse(JSON.stringify(widgets))
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

  // dashboard:update (widgets)
  async update({ commit, state }, widgets) {
    commit('UPDATE_WIDGETS', widgets)

    try {
      await this.$repositories.dashboard.updateWidgets({
        uuid: state.dataList.uuid,
        config: state.dataList.config,
      })
    } catch (e) {
      console.error(e)
    }
  },
}
