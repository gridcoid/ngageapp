const resource = 'dashboard'

export default ($axios) => ({
  // dashboard:list (and create if empty)
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },

  // dashboard:add (widget)
  add(dashboardUuid, widget) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${dashboardUuid}/widget?orgId=${orgId}`, {
      widget,
    })
  },

  // dashboard:update (widgets)
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.uuid}?orgId=${orgId}`, {
      config: payload.config,
    })
  },
})
