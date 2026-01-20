const initialState = () => ({
  dataList: [],
  totalList: 0,
  totalPages: 0,

  dataCreate: {},
  dataDetail: {},

  userTest: {
    name: '',
    email: '',
  },
})

export const state = initialState

export const getters = {
  dataList: (state) => state.dataList,
  dataCreate: (state) => state.dataCreate,
  dataDetail: (state) => state.dataDetail,

  userTest: (state) => state.userTest,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_LIST(state, item) {
    if (item !== null) {
      state.dataList = item.rows
      state.totalList = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataList = []
      state.totalList = 0
      state.totalPages = 0
    }
  },
  SET_DATA_CREATE(state, item) {
    if (item !== null) {
      state.dataCreate = item
    } else {
      state.dataCreate = []
    }
  },
  SET_DATA_DETAIL(state, item) {
    if (item !== null) {
      state.dataDetail = item
    } else {
      state.dataDetail = {}
    }
  },
  SET_USER_TEST(state, payload) {
    state.userTest = payload
      ? {
          name: payload.name,
          email: payload.email,
        }
      : {
          name: '',
          email: '',
        }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },

  // emailCampaign:list
  async list({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.list(payload)
      commit('SET_DATA_LIST', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_LIST', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:create
  async create({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.create(payload)
      commit('SET_DATA_CREATE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:detail
  async detail({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.detail(payload)
      commit('SET_DATA_DETAIL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:update
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.update(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:delete
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.delete(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:saveUserTest
  saveUserTest({ commit }, payload) {
    commit('SET_USER_TEST', payload)
  },

  // emailCampaign:clearUserTest
  clearUserTest({ commit }) {
    commit('SET_USER_TEST', null)
  },

  // emailCampaign:test
  async test({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.test(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:schedule
  async schedule({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.schedule(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:cancelSchedule
  async cancelSchedule({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.cancelSchedule(
        payload
      )
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:send
  async send({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.send(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:archive
  async archive({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.archive(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },

  // emailCampaign:restore
  async restore({ commit }, payload) {
    try {
      const response = await this.$repositories.emailCampaign.restore(payload)
      return response
    } catch (e) {
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
}
