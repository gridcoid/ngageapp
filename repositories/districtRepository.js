const resource = 'district'

export default ($axios) => ({
  // district:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&regencyCode=${payload.regencyCode}`
    )
  },
})
