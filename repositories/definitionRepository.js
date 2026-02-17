const resource = 'definition'

export default ($axios) => ({
  // definition:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // definition:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },

  // definition:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // definition:detailById
  detailById(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/id/${payload.id}?orgId=${orgId}`)
  },

  // definition:update
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.uuid}?orgId=${orgId}`, payload)
  },

  // definition:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // definition:deleteBulk
  deleteBulk(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}?orgId=${orgId}`, { data: payload })
  },

  // definition:run
  run(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/run/${payload.uuid}?orgId=${orgId}`)
  },

  // definition:duplicate
  duplicate(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.uuid}?orgId=${orgId}`)
  },
})
