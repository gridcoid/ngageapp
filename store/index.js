export const actions = {
  reset ({ commit }) {
    commit('campaign/RESET')
    commit('creative/RESET')
    commit('placement/RESET')
    commit('publisher/RESET')
    commit('template/RESET')
  }
}
