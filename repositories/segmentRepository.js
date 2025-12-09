const resource = 'segment'

export default ($axios) => ({
  // segment:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, { ...payload, orgId })
  },

  // segment:update
  update(payload) {
    const { id, orgId, ...rest } = payload
    return $axios.patch(`${resource}/${id}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // segment:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // segment:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/all?orgId=${orgId}`)
  },

  // segment:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.segmentId}?orgId=${orgId}`)
  },

  // segment:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
