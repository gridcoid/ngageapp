const resource = 'email-campaign'

export default ($axios) => ({
  // email-campaign:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}&status=${payload.status}`
    )
  },

  // email-campaign:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },

  // email-campaign:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:update
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.uuid}?orgId=${orgId}`, payload)
  },

  // email-campaign:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:duplicate
  duplicate(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:test
  test(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/test/${payload.uuid}?orgId=${orgId}`,
      payload
    )
  },

  // email-campaign:schedule
  schedule(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/schedule/${payload.uuid}?orgId=${orgId}`,
      payload
    )
  },

  // email-campaign:cancelSchedule
  cancelSchedule(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/schedule/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:send
  send(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/send/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:archive
  archive(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/archive/${payload.uuid}?orgId=${orgId}`)
  },

  // email-campaign:restore
  restore(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/restore/${payload.uuid}?orgId=${orgId}`)
  },
})
