const resource = 'setting'

export default ($axios) => ({
  // setting:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&key=${payload.key}&sort=${payload.sort}`
    )
  },

  // setting:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },

  // setting:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // setting:update
  update(payload) {
    const { id, uuid, ...rest } = payload
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${uuid}?orgId=${orgId}`, {
      ...rest,
    })
  },

  // setting:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },
})
