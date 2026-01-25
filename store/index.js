export const actions = {
  reset({ commit }) {
    commit('campaign/RESET')
    commit('creative/RESET')
    commit('placement/RESET')
    commit('publisher/RESET')
    commit('template/RESET')

    commit('apiKey/RESET')
    commit('audience/RESET')
    commit('contactType/RESET')
    commit('dashboard/RESET')
    commit('district/RESET')
    commit('gender/RESET')
    commit('province/RESET')
    commit('query/RESET')
    commit('definition/RESET')
    commit('regency/RESET')
    commit('religion/RESET')
    commit('segment/RESET')
    commit('sheet/RESET')
    commit('village/RESET')
  },
}
