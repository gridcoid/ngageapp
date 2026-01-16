const resource = 'email-template'

export default ($axios) => ({
  // email-template:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    )
  },

  // email-template:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/all?orgId=${orgId}`)
  },

  // email-template:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },

  // email-template:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // email-template:update
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.uuid}?orgId=${orgId}`, payload)
  },

  // email-template:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },
})
