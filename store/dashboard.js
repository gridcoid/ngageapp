const initialState = () => ({
  dataList: {}, // for now only single dashboard
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
  UPDATE_WIDGET(state, widget) {
    if (!state.dataList?.config) return
    state.dataList.config.widgets = state.dataList.config.widgets.map((w) => {
      if (w.i === widget.i) {
        // update only type, queryId, title
        return {
          ...w,
          type: widget.type,
          queryId: widget.queryId,
          title: widget.title,
        }
      }
      return w
    })
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
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:add (widget)
  async addWidget({ commit }, { uuid, widget }) {
    try {
      const response = await this.$repositories.dashboard.addWidget(
        uuid,
        widget
      )
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },

  // dashboard:update (widgets)
  async updateWidgets({ commit, state }, widgets) {
    commit('UPDATE_WIDGETS', widgets)

    try {
      const response = await this.$repositories.dashboard.updateWidgets({
        uuid: state.dataList.uuid,
        config: state.dataList.config,
      })
      return response
    } catch (e) {
      console.error(e)
    }
  },

  // dashboard:select (widget)
  select({ commit }, widget) {
    commit('SELECT_WIDGET', widget)
  },

  // dashboard:update (widget)
  async updateWidget({ commit, state }, payload) {
    commit('UPDATE_WIDGET', payload.widget)

    try {
      const response = await this.$repositories.dashboard.updateWidget({
        uuid: payload.uuid,
        widgetUuid: payload.widgetUuid,
        widget: payload.widget,
      })
      return response
    } catch (e) {
      console.error(e)
    }
  },
}
