const resource = 'province'

export default ($axios) => ({
  // province:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    )
  },

  // province:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/all?orgId=${orgId}`)
  },
})
