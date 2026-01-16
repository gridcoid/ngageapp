const resource = 'email-campaign'

export default ($axios) => ({
  // email-campaign:list
  list(params = {}) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(resource, {
      params: {
        orgId,
        ...params,
      },
    })
  },

  // email-campaign:create
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(resource, payload, {
      params: { orgId },
    })
  },

  // email-campaign:detail
  detail(uuid) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${uuid}`, {
      params: { orgId },
    })
  },

  // email-campaign:update
  update(uuid, payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.put(`${resource}/${uuid}`, payload, {
      params: { orgId },
    })
  },

  // email-campaign:delete
  delete(uuid) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${uuid}`, {
      params: { orgId },
    })
  },
})
