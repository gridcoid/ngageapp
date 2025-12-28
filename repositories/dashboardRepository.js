const resource = 'dashboard'

export default ($axios) => ({
  // dashboard:list (and create if empty)
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },

  // dashboard:add (widget)
  addWidget(dashboardUuid, widget) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${dashboardUuid}/widget?orgId=${orgId}`, {
      widget,
    })
  },

  // dashboard:update (widgets)
  updateWidgets(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(
      `${resource}/${payload.dashboardUuid}/widgets?orgId=${orgId}`,
      {
        config: payload.config,
      }
    )
  },

  // dashboard:update (widget)
  updateWidget(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(
      `${resource}/${payload.dashboardUuid}/widget/${payload.widgetUuid}?orgId=${orgId}`,
      {
        widget: payload.widget,
      }
    )
  },
})
