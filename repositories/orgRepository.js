const resource = 'org'

export default ($axios) => ({
  // org:rootList
  rootList(payload) {
    return $axios.get(
      `${resource}/root?page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // org:rootAll
  rootAll() {
    return $axios.get(`${resource}/root/all`)
  },

  // org:rootCreate
  rootCreate(payload) {
    return $axios.post(`${resource}/root`, payload)
  },

  // org:rootDetail
  rootDetail(payload) {
    return $axios.get(`${resource}/root/${payload.uuid}`)
  },

  // org:rootUpdate
  rootUpdate(payload) {
    return $axios.patch(`${resource}/root/${payload.uuid}`, payload)
  },

  // org:rootDelete
  rootDelete(payload) {
    return $axios.delete(`${resource}/root/${payload.uuid}`)
  },
})
