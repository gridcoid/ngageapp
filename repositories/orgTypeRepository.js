const resource = 'org-type'

export default ($axios) => ({
  // orgType:list
  list() {
    return $axios.get(`${resource}`)
  },
})
