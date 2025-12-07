const resource = 'province'

export default ($axios) => ({
  // province:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
