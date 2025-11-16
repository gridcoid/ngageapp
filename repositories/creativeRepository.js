const resource = 'creative'

export default ($axios) => ({
  getList(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&format=${payload.format}&resolutionId=${payload.resolutionId}&status=all`
    )
  },
  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },
  getDetail(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}?orgId=${orgId}`)
  },
  getResolution(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}/resolutions?orgId=${orgId}&all=${payload.all}`
    )
  },
  getDuration(payload) {
    // const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duration`, {
      orgId: window.$nuxt.$store.state.user.orgId,
      type: payload.type,
      resolutionId: payload.resolutionId,
      bodyTxt: payload.bodyTxt,
      templateId: payload.templateId,
    })
  },
  uploadImage(payload) {
    return $axios.post('obs', {
      file: payload.file,
    })
  },
  uploadZIP(payload) {
    return $axios.post('zip', {
      file: payload.file,
    })
  },
  uploadTemplate(payload) {
    return $axios.post('zip/template', {
      file: payload.file,
    })
  },
  create(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, payload)
  },
  createCustomUpload(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/custom-upload?orgId=${orgId}`, payload)
  },
  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(
      `${resource}/${payload.id}?orgId=${orgId}`,
      payload.payload
    )
  },
  download(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}/html?orgId=${orgId}`)
  },
  downloadVideo(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.id}/video?orgId=${orgId}`)
  },
  generateVideo(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/${payload.id}/generate-video?orgId=${orgId}`
    )
  },
  generateVideoStatic(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/${payload.id}/generate-static-zip?orgId=${orgId}`
    )
  },
  duplicate(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/duplicate/${payload.id}?orgId=${orgId}`)
  },
  getByCreativeId(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/${payload.creativeId}/data?orgId=${orgId}`)
  },
  sendToStudioHub(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(
      `${resource}/${payload.id}/send-video-sh?orgId=${orgId}`,
      {
        type: payload.type,
        profileId: payload.profileId,
        categoryId: payload.categoryId,
      }
    )
  },
})
