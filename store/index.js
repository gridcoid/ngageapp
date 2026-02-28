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
    commit('definition/RESET')
    commit('district/RESET')
    commit('education/RESET')
    commit('emailCampaign/RESET')
    commit('emailTemplate/RESET')
    commit('gender/RESET')

    commit('mailjetCampaign/RESET')
    commit('mailjetCampaignDraft/RESET')
    commit('mailjetContact/RESET')
    commit('mailjetContactList/RESET')
    commit('mailjetSender/RESET')
    commit('mailjetTemplate/RESET')

    commit('province/RESET')
    commit('query/RESET')
    commit('regency/RESET')
    commit('religion/RESET')
    commit('segment/RESET')
    commit('setting/RESET')
    commit('sheet/RESET')
    commit('village/RESET')

    commit('org/RESET')
    commit('orgType/RESET')
  },
}
