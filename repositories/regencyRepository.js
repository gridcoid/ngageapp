const resource = 'regency'

export default ($axios) => ({
  // regency:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&provinceCode=${payload.provinceCode}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // regency:all
  all(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/all?orgId=${orgId}&provinceCode=${payload.provinceCode}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },
})
