const resource = 'audience'

export default $axios => ({
  getList () {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/segments?orgId=${orgId}`
    )
  }
})
