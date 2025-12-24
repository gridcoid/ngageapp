const initialState = () => ({
  dataPlacement: [],
  dataPlacement2: {
    name: '',
    isActive: '',
    startDate: '',
    endDate: '',
    status: '',
  },
  totalPlacement: 0,
  totalPages: 0,
  dataPriorities: {},
  dataDailyLimitTypes: {},
  dataInventories: {},
  dataStatus: {},
  dataInterest: {},
  totalInterest: 0,
  totalPagesInterest: 0,
  totalInventories: 0,
  totalPagesInventories: 0,
  dataScript: {},
  typeInventories: {},
  dataPerformance: {},
})

export const state = initialState

export const getters = {
  dataPlacement: (state) => state.dataPlacement,
  dataPlacement2: (state) => state.dataPlacement2,
  detailPlacement: (state) => state.detailPlacement,
  dataPriorities: (state) => state.dataPriorities,
  dataDailyLimitTypes: (state) => state.dataDailyLimitTypes,
  dataInventories: (state) => state.dataInventories,
  dataStatus: (state) => state.dataStatus,
  dataInterest: (state) => state.dataInterest,
  dataScript: (state) => state.dataScript,
  typeInventories: (state) => state.typeInventories,
  dataPerformance: (state) => state.dataPerformance,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_DATA_PLACEMENT(state, item) {
    if (item !== null) {
      state.dataPlacement = item.rows
      state.totalPlacement = item.totalRows
      state.totalPages = item.totalPages
    } else {
      state.dataPlacement = []
      state.totalPlacement = 0
      state.totalPages = 0
    }
  },
  SET_DATA_PRIORITIES(state, item) {
    if (item !== null) {
      state.dataPriorities = item
    } else {
      state.dataPriorities = []
    }
  },
  SET_DATA_SCRIPT(state, item) {
    if (item !== null) {
      state.dataScript = item
    } else {
      state.dataScript = []
    }
  },
  SET_DATA_DAILY(state, item) {
    if (item !== null) {
      state.dataDailyLimitTypes = item
    } else {
      state.dataDailyLimitTypes = []
    }
  },
  SET_DATA_INVENTORIES(state, item) {
    if (item !== null) {
      state.dataInventories = item.rows
      state.totalInventories = item.totalRows
      state.totalPagesInventories = item.totalPages
    } else {
      state.dataInventories = []
      state.totalInventories = 0
      state.totalPagesInventories = 0
    }
  },
  SET_DATA_DETAIL(state, item) {
    if (item !== null) {
      state.detailPlacement = item
      state.dataPlacement2.name = item.name
      state.dataPlacement2.isActive = item.isActive
      state.dataPlacement2.startDate = item.startDate
      state.dataPlacement2.endDate = item.endDate
      state.dataPlacement2.status = item.status
    } else {
      state.detailPlacement = []
      state.dataPlacement2.name = ''
      state.dataPlacement2.isActive = ''
      state.dataPlacement2.startDate = ''
      state.dataPlacement2.endDate = ''
      state.dataPlacement2.status = ''
    }
  },
  SET_DATA_STATUS(state, item) {
    if (item !== null) {
      state.dataStatus = item
    } else {
      state.dataStatus = []
    }
  },
  SET_DATA_INTEREST(state, item) {
    if (item !== null) {
      state.dataInterest = item.rows
      state.totalInterest = item.totalRows
      state.totalPagesInterest = item.totalPages
    } else {
      state.dataInterest = []
      state.totalInterest = 0
      state.totalPagesInterest = 0
    }
  },
  SET_DATA_TYPE(state, item) {
    if (item !== null) {
      state.typeInventories = item
    } else {
      state.typeInventories = []
    }
  },
  SET_DATA_PERFORMANCE(state, item) {
    if (item !== null) {
      state.dataPerformance = item
    } else {
      state.dataPerformance = []
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },
  async createPlacement({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.createPlacement(
        payload
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async updatePlacement({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.updatePlacement(
        payload
      )
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getList({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getList(payload)
      commit('SET_DATA_PLACEMENT', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PLACEMENT', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getListInterest({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getListInterest(
        payload
      )
      commit('SET_DATA_INTEREST', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_INTEREST', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getPriorities({ commit }) {
    try {
      const response = await this.$repositories.placement.getPriorities()
      commit('SET_DATA_PRIORITIES', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PRIORITIES', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getDailyLimitTypes({ commit }) {
    try {
      const response = await this.$repositories.placement.getDailyLimitTypes()
      commit('SET_DATA_DAILY', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DAILY', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getInventories({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getInventories(
        payload
      )
      commit('SET_DATA_INVENTORIES', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_INVENTORIES', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getInventoriesType({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getInventoriesType(
        payload
      )
      commit('SET_DATA_TYPE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_TYPE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getPerformance({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getPerformance(
        payload
      )
      commit('SET_DATA_PERFORMANCE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PERFORMANCE', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getDetail({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getDetail(payload)
      commit('SET_DATA_DETAIL', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async changeStatus({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.changeStatus(payload)
      commit('SET_DATA_STATUS', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_STATUS', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async duplicate({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.duplicate(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.delete(payload)
      return response
    } catch (e) {
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
  async getScript({ commit }, payload) {
    try {
      const response = await this.$repositories.placement.getScript(payload)
      commit('SET_DATA_SCRIPT', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_SCRIPT', null)
      this.$notifier.showMessage({
        content: 'Error status code: ' + e.response.status,
        type: 'failed',
      })
      return e.response
    }
  },
}
