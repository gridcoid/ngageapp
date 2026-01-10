const resource = 'mailjet-sender'

export default ($axios) => ({
  // mailjet-sender:all
  all() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/all?orgId=${orgId}`)
  },

  // mailjet-sender:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
    )
  },
})
