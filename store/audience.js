const initialState = () => ({
  dataAudience: [],
})

export const state = initialState

export const getters = {
  dataAudience: (state) => state.dataAudience,
}

export const mutations = {
  SET_DATA(state, item) {
    if (item !== null) {
      state.dataAudience = item
    } else {
      state.dataAudience = []
    }
  },
}

export const actions = {
  async getAudience({ commit }) {
    try {
      const response = await this.$repositories.audience.getList()
      commit('SET_DATA', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
}
