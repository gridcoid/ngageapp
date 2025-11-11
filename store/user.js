export const state = () => ({
  isLoading: false,
  sidebar: true,
  popup: false,
  activeItem: '',
  orgId: '',
  orgName: '',
  dataOrg: {},
  dataUser: {},
  activeDropdown: null,
  roleId: null,
  changePassword: false,
  detailUser: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orgId: '',
    orgName: '',
    rolesId: '',
    roles: '',
    username: ''
  },

  detailUserForm: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orgId: '',
    orgName: '',
    rolesId: '',
    roles: '',
    username: ''
  },

  userId: null,
  dataAllUser: {},
  totalAllUser: 0,
  totalPages: 0,
  createUser: false,
  createOrganization: false,
  dropDownOrg: {},
  rolesDropdown: {},
  userChangePassword: false
})

export const getters = {
  isLoading: state => state.isLoading,
  activeItem: state => state.activeItem,
  detailUser: state => state.detailUser,
  dataAllUser: state => state.dataAllUser,
  totalAllUser: state => state.totalAllUser,
  totalPages: state => state.totalPages,
  createUser: state => state.createUser,
  createOrganization: state => state.createOrganization
}

export const mutations = {
  SET_DATA_ALL (state, item) {
    if (item !== null) {
      item.rows.forEach((key, index) => {
        if (key.userRoles.length > 0) {
          key.userRoles = key.userRoles[0]
        } else {
          key.userRoles = {
            org: {
              name: '-'
            },
            role: {
              name: '-'
            }
          }
        }
      })
      state.dataAllUser = item.rows
      state.totalAllUser = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataAllUser = []
      state.totalAllUser = 0
      state.totalPages = 0
    }
  },
  SET_DATA_DETAIL (state, item) {
    if (item !== null) {
      state.detailUser.firstName = item.firstName
      state.detailUser.lastName = item.lastName
      state.detailUser.email = item.email
      state.detailUser.phone = item.phone
      state.detailUser.username = item.username
      if (item.userRoles.length > 0) {
        const org = item.userRoles[0].org
        state.detailUser.orgName = org.name
        state.detailUser.orgId = org.id
        const role = item.userRoles[0].role
        state.detailUser.roles = role.name
        state.detailUser.rolesId = role.id
      }
    } else {
      state.detailUser.firstName = '-'
      state.detailUser.lastName = '-'
      state.detailUser.email = '-'
      state.detailUser.phone = '-'
      state.detailUser.orgName = '-'
      state.detailUser.roles = '-'
    }
  },

  SET_DATA_DETAIL_POPUP (state, item) {
    if (item !== null) {
      state.detailUserForm.firstName = item.firstName
      state.detailUserForm.lastName = item.lastName
      state.detailUserForm.email = item.email
      state.detailUserForm.phone = item.phone
      state.detailUserForm.username = item.username
      if (item.userRoles.length > 0) {
        const org = item.userRoles[0].org
        state.detailUserForm.orgName = org.name
        state.detailUserForm.orgId = org.id
        const role = item.userRoles[0].role
        state.detailUserForm.roles = role.name
        state.detailUserForm.rolesId = role.id
      }
    } else {
      state.detailUserForm.firstName = '-'
      state.detailUserForm.lastName = '-'
      state.detailUserForm.email = '-'
      state.detailUserForm.phone = '-'
      state.detailUserForm.orgName = '-'
      state.detailUserForm.roles = '-'
    }
  },
  SET_CHANGE_DIALOG: (state, payload) => {
    state.changePassword = payload
  },
  SET_DROPDOWN: (state, payload) => {
    state.activeDropdown = payload
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_SIDEBAR (state) {
    state.sidebar = !state.sidebar
  },
  SET_POPUP (state) {
    state.popup = !state.popup
  },
  SET_ACTIVE (state, payload) {
    state.activeItem = payload
  },
  SET_ORG (state, payload) {
    state.orgId = payload
  },
  SET_ORG_NAME (state, payload) {
    state.orgName = payload
  },
  SET_DATA_ORG (state, item) {
    if (item !== null) {
      state.dataOrg = item
    } else {
      state.dataOrg = []
    }
  },

  SET_DROPDOWN_ORG (state, payload) {
    if (payload !== null) {
      state.dropDownOrg = payload
    } else {
      state.dropDownOrg = []
    }
  },
  SET_USER (state, payload) {
    if (payload !== null) {
      state.userId = payload.userId
      state.roleId = payload.roles[0].roleId
      state.dataUser = payload.firstName.charAt(0) + payload.lastName.charAt(0)
    } else {
      state.userId = null
      state.roleId = null
      state.dataUser = null
    }
  },
  SET_USER_CHANGE_DIALOG: (state, payload) => {
    state.createUser = payload
  },
  SET_ORG_CHANGE_DIALOG: (state, payload) => {
    state.createOrganization = payload
  },
  SET_CHANGE_ROLES: (state, item) => {
    state.rolesDropdown = item
  },
  SET_USER_PASSWORD_CHANGE_DIALOG: (state, payload) => {
    state.userChangePassword = payload
  }
}

export const actions = {
  setOrganization ({ commit }, payload) {
    commit('SET_ORG', payload.id)
    commit('SET_ORG_NAME', payload.name)
  },
  async login ({ commit }, payload) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      if (response.status === 200) {
        commit('SET_ORG', response.data.data.defaultOrgId)
        commit('SET_USER', response.data.data)
      } else {
        commit('SET_USER', null)
      }
      return response
    } catch (e) {
      return e.response
    }
  },
  async getOrganization ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.getOrg(payload)
      commit('SET_DATA_ORG', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_ORG', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed'
      })
      return e.response
    }
  },
  async getOrgUser ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.getOrg(payload)
      commit('SET_DROPDOWN_ORG', response.data.data)
      return response
    } catch (e) {
      commit('SET_DROPDOWN_ORG', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response,
        type: 'failed'
      })
      return e.response
    }
  },
  async changePassword ({ commit }, payload) {
    try {
      payload.userId = 0
      const response = await this.$repositories.user.changePassword(payload)
      commit('SET_DATA_CREATIVE', response.data.data)
      return response
    } catch (e) {
      // commit('SET_DATA_CREATIVE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async getDetail ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.getById(payload)
      if (payload.pageType) {
        commit('SET_DATA_DETAIL', response.data.data)
      } else {
        commit('SET_DATA_DETAIL_POPUP', response.data.data)
      }
      return response
    } catch (e) {
      if (payload.pageType) {
        commit('SET_DATA_DETAIL', null)
      } else {
        commit('SET_DATA_DETAIL_POPUP', null)
      }
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async getAll ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.getAll(payload)
      commit('SET_DATA_ALL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_ALL', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e,
        type: 'failed'
      })
      return e.response
    }
  },
  async getRoles ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.getRoles()
      return response.data.data
    } catch (e) {
      return e.response
    }
  },
  async updateVerification ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.updateVerification(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e,
        type: 'failed'
      })
      return e.response
    }
  },
  async deleteUser ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async createOrganization ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.createOrganization(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async createUser ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.createUsers(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async assignOrg ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.assignOrg(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async updateUser ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.update(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async updateRoles ({ commit }, payload) {
    try {
      const response = await this.$repositories.user.updateRoles(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  },
  async userChangePassword ({ commit }, payload) {
    console.log(payload)
    try {
      const response = await this.$repositories.user.changePassword(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed'
      })
      return e.response
    }
  }
}
