const initialState = () => ({
  isLoading: false,
  dataList: [],
  totalList: 0,
  totalPages: 0,
})

export const state = initialState

export const getters = {
  isLoading: (state) => state.isLoading,
  dataList: (state) => state.dataList,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
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
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // gender:list
  async list({ commit }) {
    try {
      const response = await this.$repositories.gender.list()
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
}
