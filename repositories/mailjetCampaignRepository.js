const resource = 'mailjet-campaign'

export default ($axios) => ({
  // mailjet-campaign:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
