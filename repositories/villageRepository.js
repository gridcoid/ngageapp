const resource = 'village'

export default ($axios) => ({
  // village:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&districtCode=${payload.districtCode}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    )
  },

  // village:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/all?orgId=${orgId}&districtCode=${payload.districtCode}`
    )
  },
})
