const resource = 'audience'

export default ($axios) => ({
  // audience:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      ...payload,
      orgId,
    })
  },

  // audience:update
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.id}?orgId=${orgId}`, {
      ...payload,
      orgId,
    })
  },

  // audience:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // audience:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.audienceId}?orgId=${orgId}`)
  },

  // audience:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
