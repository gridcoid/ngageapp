const resource = 'dashboards'

export default ($axios) => ({
  // dashboard:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    const userId = window.$nuxt.$store.state.user.id
    return $axios.post(`${resource}?orgId=${orgId}`, {
      ...payload,
      orgId,
      userId,
    })
  },

  // dashboard:update
  update(payload) {
    const { id, ...rest } = payload
    return $axios.patch(`${resource}/${id}`, { ...rest })
  },

  // dashboard:list
  list(payload = {}) {
    const orgId = window.$nuxt.$store.state.user.orgId
    const userId = window.$nuxt.$store.state.user.id
    const page = payload.page || 1
    const size = payload.size || 10
    const sort = payload.sort || 'id,asc'
    return $axios.get(
      `${resource}?orgId=${orgId}&userId=${userId}&page=${page}&size=${size}&sort=${sort}`
    )
  },

  // dashboard:detail
  detail(payload) {
    const { dashboardId } = payload
    return $axios.get(`${resource}/${dashboardId}`)
  },

  // dashboard:delete
  delete(payload) {
    const { id } = payload
    return $axios.delete(`${resource}/${id}`)
  },

  // dashboard:addWidget
  addWidget(dashboardId, widget) {
    return $axios.post(`${resource}/${dashboardId}/widgets`, { widget })
  },

  // dashboard:updateWidget
  updateWidget(dashboardId, widgetId, widget) {
    return $axios.patch(`${resource}/${dashboardId}/widgets/${widgetId}`, {
      widget,
    })
  },

  // dashboard:deleteWidget
  deleteWidget(dashboardId, widgetId) {
    return $axios.delete(`${resource}/${dashboardId}/widgets/${widgetId}`)
  },
})
