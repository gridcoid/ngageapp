const resource = 'api-key'

export default ($axios) => ({
  // apiKey:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, { ...payload, orgId })
  },

  // apiKey:update
  update(payload) {
    const { id, orgId, ...rest } = payload
    return $axios.patch(`${resource}/${id}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // apiKey:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // apiKey:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.apiKeyId}?orgId=${orgId}`)
  },

  // apiKey:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
