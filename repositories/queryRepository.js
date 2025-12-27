const resource = 'query'

export default ($axios) => ({
  // query:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId

    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${
        payload.size
      }&name=${payload.name || ''}&sort=${payload.sort || ''}`
    )
  },

  // query:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      ...payload,
      orgId,
    })
  },

  // query:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.queryUuid}?orgId=${orgId}`)
  },

  // query:update
  update(payload) {
    const { id, uuid, orgId, ...rest } = payload
    return $axios.patch(`${resource}/${uuid}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // query:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },

  // query:run
  run(id) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`query/${id}/run?orgId=${orgId}`)
  },
})
