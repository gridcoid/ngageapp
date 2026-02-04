const resource = 'audience'

export default ($axios) => ({
  // audience:list
  list(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // audience:listBySegment
  listBySegment(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/list-by-segment?orgId=${orgId}&uuid=${payload.uuid}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // audience:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },

  // audience:detail
  detail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/${payload.uuid}?orgId=${orgId}&segmentUuid=${
        payload.segmentUuid || ''
      }`
    )
  },

  // audience:update
  update(payload) {
    const { contacts = [], ...rest } = payload
    const orgId = window.$nuxt.$store.state.user.orgId

    // clean contacts
    const cleanedContacts = contacts.map((c) => ({
      typeId: c.typeId,
      value: c.value,
      label: c.label ?? null,
    }))

    return $axios.patch(`${resource}/${payload.uuid}?orgId=${orgId}`, {
      ...rest,
      contacts: cleanedContacts,
    })
  },

  // audience:delete
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.uuid}?orgId=${orgId}`)
  },

  // audience:removeFromSegment
  removeFromSegment(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(
      `${resource}/remove/${payload.audienceUuid}/segment/${payload.segmentUuid}?orgId=${orgId}`
    )
  },
})
