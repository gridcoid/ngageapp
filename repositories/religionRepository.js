const resource = 'religion'

export default ($axios) => ({
  // relgion:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },
})
