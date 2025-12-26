const resource = 'dashboard'

export default ($axios) => ({
  // dashboard:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },

  // dashboard:update
  update(payload) {
    const { id, ...rest } = payload
    return $axios.patch(`${resource}/${id}`, { ...rest })
  },

  // dashboard:addWidget
  addWidget(dashboardUuid, widget) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${dashboardUuid}/widget?orgId=${orgId}`, {
      widget,
    })
  },

  // dashboard:updateWidget
  updateWidget(dashboardUuid, widgetId, widget) {
    return $axios.patch(`${resource}/${dashboardUuid}/widgets/${widgetId}`, {
      widget,
    })
  },

  // dashboard:deleteWidget
  deleteWidget(dashboardUuid, widgetId) {
    return $axios.delete(`${resource}/${dashboardUuid}/widgets/${widgetId}`)
  },
})
