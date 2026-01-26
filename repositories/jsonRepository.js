const resource = 'json'

export default ($axios) => ({
  preview(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/segment/${payload.uuid}?orgId=${orgId}`,
      payload
    )
  },
  import(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/import?orgId=${orgId}`, payload, {
      timeout: 0, // ♾ no timeout
    })
  },
})
