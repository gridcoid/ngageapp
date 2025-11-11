const resource = 'publisher'

export default $axios => ({
  getList (payload) {
    // const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}`
    )
  }
})
