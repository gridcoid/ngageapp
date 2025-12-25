const resource = 'audience-by-segment'

export default ($axios) => ({
  // audience:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&segmentUuid=${payload.segmentUuid}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },
})
