const resource = 'mailjet-contact'

export default ($axios) => ({
  // mailjet-contact:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    let url = `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    if (payload.listID) {
      url += `&listID=${payload.listID}`
    }
    return $axios.get(url)
  },

  // email-contact:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.ID}?orgId=${orgId}`)
  },
})
