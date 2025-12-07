const resource = 'contact-type'

export default ($axios) => ({
  // contactType:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
