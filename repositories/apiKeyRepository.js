const resource = 'api-key'

export default ($axios) => ({
  // apiKey:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // apiKey:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, { ...payload, orgId })
  },

  // apiKey:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // apiKey:update
  update(payload) {
    const { id, uuid, orgId, ...rest } = payload
    return $axios.patch(`${resource}/${uuid}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // apiKey:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },
})
