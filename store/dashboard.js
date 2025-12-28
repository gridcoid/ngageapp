const initialState = () => ({
  dataList: [],
  widget: null,
})

export const state = initialState

export const getters = {
  dataList: (state) => state.dataList,
  widget: (state) => state.widget,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_LIST(state, item) {
    if (item !== null) {
      state.dataList = item
    } else {
      state.dataList = []
    }
  },
  UPDATE_WIDGETS(state, widgets) {
    if (!state.dataList?.config) return
    state.dataList.config.widgets = JSON.parse(JSON.stringify(widgets))
  },
  SELECT_WIDGET(state, widget) {
    state.widget = widget
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

  // dashboard:add (widget)
  async add({ commit }, { dashboardUuid, widget }) {
    try {
      const response = await this.$repositories.dashboard.add(
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

  // dashboard:update (widgets)
  async update({ commit, state }, widgets) {
    commit('UPDATE_WIDGETS', widgets)

    try {
      await this.$repositories.dashboard.update({
        uuid: state.dataList.uuid,
        config: state.dataList.config,
      })
    } catch (e) {
      console.error(e)
    }
  },

  // dashboard:select (widget)
  select({ commit }, widget) {
    commit('SELECT_WIDGET', widget)
  },
}
