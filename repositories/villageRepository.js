const resource = 'village'

export default ($axios) => ({
  // village:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&districtCode=${payload.districtCode}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // village:all
  all(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/all?orgId=${orgId}&districtCode=${payload.districtCode}`
    )
  },
})
