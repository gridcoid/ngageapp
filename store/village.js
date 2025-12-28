const initialState = () => ({
  dataList: [],
  totalList: 0,
  totalPages: 0,
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
      state.dataList = item.rows
      state.totalList = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataList = []
      state.totalList = 0
      state.totalPages = 0
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // village:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.village.list(payload)
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
}
