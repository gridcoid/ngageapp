const resource = 'campaign'

export default ($axios) => ({
  createCampaign(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      typeId: payload.typeId,
      advertiserId: payload.advertiserId,
    })
  },
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.id}?orgId=${orgId}`, {
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      typeId: payload.typeId,
      advertiserId: payload.advertiserId,
    })
  },
  getList(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&status=${payload.status}&typeId=${payload.campaignTypeId}&advertiserIds=${payload.advertiserIds}&sort=${payload.sort}&createdAt=${payload.createdAt}`
    )
  },
  getListComplete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/complete?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&status=${payload.status}&typeId=${payload.campaignTypeId}&advertiserIds=${payload.advertiserIds}&sort=${payload.sort}&createdAt=${payload.createdAt}`
    )
  },
  getDetail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.campaignTypeId}?orgId=${orgId}`)
  },
  getPerformance(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/${payload.campaignTypeId}/performance?orgId=${orgId}&range=${payload.range}`
    )
  },
  getCampaignTypes() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/types?orgId=${orgId}`)
  },
  getAdvertiser() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/advertisers?orgId=${orgId}`)
  },
  getSummary(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/${payload.campaignTypeId}/summary?orgId=${orgId}&range=${payload.range}`
    )
  },
  changeStatus(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${payload.id}/is-active?orgId=${orgId}`, {
      isActive: payload.isActive,
    })
  },
  duplicate(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.id}?orgId=${orgId}`, {
      count: payload.count,
    })
  },
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
})
