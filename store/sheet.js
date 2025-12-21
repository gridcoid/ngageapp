const initialState = () => ({
  isLoading: false,
})

export const state = initialState

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },
  async import({ commit }, payload) {
    try {
      const response = await this.$repositories.sheet.import(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content:
          'Error status code: ' +
          e.response.status +
          ' ! ' +
          e.response.data.data.message,
        type: 'failed',
      })
      return e.response
    }
  },
}
