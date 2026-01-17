const resource = 'mailjet-campaign-draft'

export default ($axios) => ({
  // mailjet-campaign-draft:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
