const resource = 'placement'

export default $axios => ({
  getPerformance (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/${payload.id}/performance?orgId=${orgId}&range=${payload.range}`
    )
  },
  getList (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&campaignId=${payload.id}&name=${payload.name}&status=${payload.status}&page=${payload.page}&size=${payload.size}`
    )
  },
  getListInterest (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/interests?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}`
    )
  },
  getPriorities () {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/priorities?orgId=${orgId}`)
  },
  getDailyLimitTypes () {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/daily-limit-types?orgId=${orgId}`)
  },
  getInventories (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`inventory?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&publisherIds=${payload.publisherIds}&resolutionId=${payload.resolutionId}&typeIds=${payload.type}`)
  },
  getInventoriesType (payload) {
    return $axios.get('inventory/types')
  },
  createPlacement (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      campaignId: payload.campaignId,
      name: payload.name,
      delivery: {
        dailyLimits: [
          {
            typeId: payload.delivery.dailyLimits[0].typeId,
            value: payload.delivery.dailyLimits[0].value
          }
        ],
        priorityId: payload.delivery.priorityId,
        resolutionId: payload.delivery.resolutionId,
        cpm: payload.delivery.cpm,
        isDynamicBidding: payload.delivery.isDynamicBidding,
        bookedImps: payload.delivery.bookedImps
      },
      targeting: {
        inventoryIds: payload.targeting.inventoryIds,
        interestIds: payload.targeting.interestIds
      },
      creativeIds: payload.creativeIds,
      isActive: false
    })
  },
  updatePlacement (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.placementId}?orgId=${orgId}`, {
      name: payload.name,
      delivery: {
        dailyLimits: [
          {
            typeId: payload.delivery.dailyLimits[0].typeId,
            value: payload.delivery.dailyLimits[0].value
          }
        ],
        priorityId: payload.delivery.priorityId,
        resolutionId: payload.delivery.resolutionId,
        cpm: payload.delivery.cpm,
        isDynamicBidding: payload.delivery.isDynamicBidding,
        bookedImps: payload.delivery.bookedImps
      },
      targeting: {
        inventoryIds: payload.targeting.inventoryIds,
        interestIds: payload.targeting.interestIds
      },
      creativeIds: payload.creativeIds,
      isActive: false
    })
  },
  getDetail (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}?orgId=${orgId}`)
  },
  changeStatus (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/${payload.id}/is-active?orgId=${orgId}`, {
      isActive: payload.isActive
    })
  },
  duplicate (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.id}?orgId=${orgId}`, {
      count: payload.count
    })
  },
  delete (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
  getScript (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}/script?orgId=${orgId}`)
  }
})
