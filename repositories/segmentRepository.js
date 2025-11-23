const resource = 'segment'

export default ($axios) => ({
  // segment:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      name: payload.name,
      description: payload.description,
    })
  },

  // segment:update
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.id}?orgId=${orgId}`, {
      name: payload.name,
      description: payload.description,
    })
  },

  // segment:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // segment:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.segmentTypeId}?orgId=${orgId}`)
  },

  // segment:duplicate
  duplicate(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.id}?orgId=${orgId}`, {
      count: payload.count,
    })
  },

  // segment:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
