const resource = 'regency'

export default ($axios) => ({
  // regency:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&provinceCode=${payload.provinceCode}`
    )
  },
})
