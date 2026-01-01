const initialState = () => ({
  dataPublisher: {},
})

export const state = initialState

export const getters = {
  dataPublisher: (state) => state.dataPublisher,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_PUBLISHER(state, item) {
    if (item !== null) {
      state.dataPublisher = item
    } else {
      state.dataPublisher = []
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },
  async getList({ commit }, payload) {
    try {
      const response = await this.$repositories.publisher.getList(payload)
      commit('SET_DATA_PUBLISHER', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PUBLISHER', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response?.status,
        type: 'failed',
      })
      return e.response
    }
  },
}
