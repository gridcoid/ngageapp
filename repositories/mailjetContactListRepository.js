const resource = 'mailjet-contact-list'

export default ($axios) => ({
  // mailjet-contact-list:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    let url = `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    if (payload.contactID) {
      url += `&contactID=${payload.contactID}`
    }
    return $axios.get(url)
  },

  // mailjet-contact-list:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.ID}?orgId=${orgId}`)
  },
})
