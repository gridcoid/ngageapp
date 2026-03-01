const resource = 'user'

export default ($axios) => ({
  getById(payload) {
    let orgId = ''
    if (payload.orgId) {
      orgId = payload.orgId
    } else {
      orgId = window.$nuxt.$store.state.user.orgId
    }
    return $axios.get(`${resource}/${payload.id}?orgId=${orgId}`)
  },

  getAll(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(
      `${resource}?orgId=${orgId}&page=${payload.page}&size=${payload.size}&name=${payload.name}&all=${payload.status}`
    )
  },

  getOrg(payload) {
    return $axios.get(`org?all=${payload.all}`)
  },

  changePassword(payload) {
    return $axios.post(`${resource}/change-password`, {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
      confirmNewPassword: payload.confirmNewPassword,
      userId: payload.userId,
    })
  },

  getRoles() {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.get(`${resource}/roles?orgId=${orgId}`)
  },

  updateVerification(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/verified/${payload.id}?orgId=${orgId}`, {
      isVerified: Boolean(payload.isVerified),
    })
  },

  delete(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.delete(`${resource}/${payload.id}?orgId=${orgId}`)
  },

  update(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/${payload.id}?orgId=${orgId}`, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.username,
      email: payload.email,
      phone: payload.phone,
    })
  },

  createOrganization(payload) {
    return $axios.post('org', {
      name: payload.name,
      typeId: 1,
    })
  },

  createUsers(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}?orgId=${orgId}`, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      username: payload.username,
      password: payload.password,
      confirmPassword: payload.confirmPassword,
    })
  },

  assignOrg(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.post(`${resource}/org?orgId=${orgId}`, payload)
  },

  updateRoles(payload) {
    const orgId = window.$nuxt.$store.state.user.orgId
    return $axios.patch(`${resource}/org/${payload.id}?orgId=${orgId}`, {
      roleId: payload.roleId,
      orgId: payload.orgId,
    })
  },

  // user:rootList
  rootList(payload) {
    return $axios.get(
      `${resource}/root?page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // user:rootListInOrg
  rootListInOrg(payload) {
    return $axios.get(
      `${resource}/root/in-org?uuid=${payload.uuid}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // user:rootListNotInOrg
  rootListNotInOrg(payload) {
    return $axios.get(
      `${resource}/root/not-in-org?uuid=${payload.uuid}&page=${payload.page}&size=${payload.size}&name=${payload.name}&sort=${payload.sort}`
    )
  },

  // user:rootCreate
  rootCreate(payload) {
    return $axios.post(`${resource}/root`, payload)
  },

  // user:rootDetail
  rootDetail(payload) {
    return $axios.get(`${resource}/root/${payload.uuid}`)
  },

  // user:rootUpdate
  rootUpdate(payload) {
    return $axios.patch(`${resource}/root/${payload.uuid}`, payload)
  },

  // user:rootDelete
  rootDelete(payload) {
    return $axios.delete(`${resource}/root/${payload.uuid}`)
  },
})
