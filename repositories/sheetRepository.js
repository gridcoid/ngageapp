const resource = 'sheet'

export default ($axios) => ({
  import(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/import?orgId=${orgId}`, payload)
  },
})
