const resource = 'org'

export default ($axios) => ({
  // org:list
  list(payload) {
    return $axios.get(
      `${resource}/list?page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // org:create
  create(payload) {
    return $axios.post(`${resource}/create`, payload)
  },

  // org:detail
  detail(payload) {
    return $axios.get(`${resource}/${payload.uuid}`)
  },

  // org:update
  update(payload) {
    return $axios.patch(`${resource}/${payload.uuid}`, payload)
  },

  // org:delete
  delete(payload) {
    return $axios.delete(`${resource}/${payload.uuid}`)
  },
})
