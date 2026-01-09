const resource = 'mailjet-sender'

export default ($axios) => ({
  // mailjet-sender:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
