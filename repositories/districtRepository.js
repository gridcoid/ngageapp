const resource = 'district'

export default ($axios) => ({
  // district:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&regencyCode=${payload.regencyCode}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // district:all
  all(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/all?orgId=${orgId}&regencyCode=${payload.regencyCode}`
    )
  },
})
