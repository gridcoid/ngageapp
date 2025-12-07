const resource = 'village'

export default ($axios) => ({
  // village:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&districtCode=${payload.districtCode}`
    )
  },
})
