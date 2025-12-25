const resource = 'segment'

export default ($axios) => ({
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

  // segment:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, { ...payload, orgId })
  },

  // segment:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.segmentUuid}?orgId=${orgId}`)
  },

  // segment:update
  update(payload) {
    const { id, uuid, orgId, ...rest } = payload
    return $axios.patch(`${resource}/${uuid}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // segment:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
