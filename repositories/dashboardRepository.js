const resource = 'dashboard'

export default ($axios) => ({
  // dashboard:list (and create if empty)
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },

  // dashboard:add (widget)
  addWidget(uuid, widget) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${uuid}/widget?orgId=${orgId}`, {
      widget,
    })
  },

  // dashboard:update (widgets)
  updateWidgets(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(
      `${resource}/${payload.uuid}/widgets?orgId=${orgId}`,
      payload
    )
  },

  // dashboard:update (widget)
  updateWidget(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(
      `${resource}/${payload.uuid}/widget/${payload.widgetUuid}?orgId=${orgId}`,
      {
        widget: payload.widget,
      }
    )
  },
})
