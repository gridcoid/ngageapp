const resource = 'template'

export default $axios => ({
  getList (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&name=${payload.name}&resolutionIds=${payload.resolutionIds}`
    )
  },
  getDetail (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}?orgId=${orgId}&resolutionId=${payload.resolution}`)
  },
  getResolutionByTemplate (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}/resolution?orgId=${orgId}`)
  },
  getPreviewWebsites (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/preview-website/${payload.id}?orgId=${orgId}`)
  },
  getPreviewDevices (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}/preview-device?orgId=${orgId}`)
  },
  getScrapeText (payload) {
    return $axios.get(`scrape/kg-rhythm/text?url=${payload.url}`)
  },
  getScrapeImage (payload) {
    return $axios.get(`scrape/kg-rhythm/image?url=${payload.url}&multiple=${payload.multiple}`)
  },
  createCustomUpload (payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/custom-upload?orgId=${orgId}`, payload)
  },
  getScrapeWeather (payload) {
    return $axios.get(`scrape/weather?date=${payload.date}&island=${payload.island}`)
  }
})
