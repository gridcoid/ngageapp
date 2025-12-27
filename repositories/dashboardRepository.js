const resource = 'dashboard'

export default ($axios) => ({
  // dashboard:list
  list() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}?orgId=${orgId}`)
  },

  // dashboard:update (widgets)
  update(dashboardUuid, widgets) {
    return $axios.patch(`${resource}/${dashboardUuid}/widgets`, {
      widgets,
    })
  },
})
