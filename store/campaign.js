const initialState = () => ({
  editCampaign: false,
  dataCampaign: [],
  totalCampaign: 0,
  totalPages: 0,
  dataCampaignComplete: [],
  totalCampaignComplete: 0,
  totalPagesComplete: 0,
  dataAdvertiser: {},
  dataCampaignType: {},
  dataCreateCampaign: {},
  filter: {
    advertiserIds: '',
    campaignTypeId: '',
    createdAt: null,
    radio: '',
  },
  detailCampaign: {},
  detailCampaign_ads_name: '',
  detailCampaign_type_name: '',
  dataPerformance: {},
  dataSummary: {
    impression: 'n/a',
    click: 'n/a',
    ctr: 0,
  },
})

export const state = initialState

export const getters = {
  dataCampaign: (state) => state.dataCampaign,
  dataAdvertiser: (state) => state.dataAdvertiser,
  detailCampaign: (state) => state.detailCampaign,
  dataPerformance: (state) => state.dataPerformance,
  dataCampaignType: (state) => state.dataCampaignType,
  dataCreateCampaign: (state) => state.dataCreateCampaign,
  dataCampaignComplete: (state) => state.dataCampaignComplete,
}

export const mutations = {
  RESET(state) {
    Object.assign(state, initialState())
  },
  SET_EDIT_CAMPAIGN: (state, payload) => {
    state.editCampaign = payload
  },
  SET_DATA_CAMPAIGN(state, item) {
    if (item !== null) {
      state.dataCampaign = item.data.rows
      state.totalCampaign = item.data.totalRows
      state.totalPages = item.data.totalPages
    } else {
      state.dataCampaign = []
      state.totalCampaign = 0
      state.totalPages = 0
    }
  },
  SET_DATA_ADVERTISER(state, item) {
    if (item !== null) {
      state.dataAdvertiser = item
    } else {
      state.dataAdvertiser = []
    }
  },
  SET_DATA_CAMPAIGN_TYPE(state, item) {
    if (item !== null) {
      state.dataCampaignType = item
    } else {
      state.dataCampaignType = []
    }
  },
  SET_DATA_CREATE_CAMPAIGN(state, item) {
    if (item !== null) {
      state.dataCreateCampaign = item
    } else {
      state.dataCreateCampaign = []
    }
  },
  SET_DATA_DETAIL_CAMPAIGN(state, item) {
    if (item !== null) {
      state.detailCampaign = item
      state.detailCampaign_ads_name = item.advertiser.name
      state.detailCampaign_type_name = item.type.name
    } else {
      state.detailCampaign = []
      state.detailCampaign_ads_name = ''
      state.detailCampaign_type_name = ''
    }
  },
  SET_DATA_PERFORMANCE(state, item) {
    if (item !== null) {
      state.dataPerformance = item
    } else {
      state.dataPerformance = []
    }
  },
  SET_DATA_SUMMARY(state, item) {
    if (item !== null) {
      if (item.impression !== 0) {
        state.dataSummary.impression = item.impression
      } else {
        state.dataSummary.impression = 'n/a'
      }
      if (item.click !== 0) {
        state.dataSummary.click = item.click
      } else {
        state.dataSummary.click = 'n/a'
      }
      if (item.ctr !== null) {
        if (item.ctr.toString().includes('.')) {
          item.ctr = item.ctr.toFixed(2)
          state.dataSummary.ctr = item.ctr + '%'
        } else {
          state.dataSummary.ctr = item.ctr + '%'
        }
      } else {
        state.dataSummary.ctr = 'n/a'
      }
    } else {
      state.dataSummary.impression = 0
      state.dataSummary.click = 0
      state.dataSummary.ctr = 0
    }
  },
  SET_DATA_CAMPAIGN_COMPLETE(state, item) {
    function formatDate(date) {
      const d = new Date(date)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      const year = d.getFullYear()

      if (month.length < 2) {
        month = '0' + month
      }
      if (day.length < 2) {
        day = '0' + day
      }

      return [year, month, day].join('-')
    }
    if (item !== null) {
      const chartData = {
        labels: [],
        datasets: [
          {
            label: 'Impression',
            backgroundColor: '#f87979',
            data: [],
            lineTension: 0.5,
          },
          //  {
          //   label: 'Click',
          //   backgroundColor: 'green',
          //   data: [],
          //   lineTension: 0.5
          // }, {
          //   label: 'Complete',
          //   backgroundColor: 'blue',
          //   data: [],
          //   lineTension: 0.5
          // }
        ],
      }
      const data = item.data.rows

      const newArray = []
      const impression = []
      // const click = []
      // const complete = []
      data.forEach((element, index) => {
        element.chartData = chartData
        newArray.push(
          element.deliveries.map((res) => formatDate(res.createdAt))
        )
        impression.push(
          element.deliveries.map((res) => res?.data[0].impression)
        )
        // click.push(element.deliveries.map(res => res?.data[0].click))
        // complete.push(element.deliveries.map(res => res?.data[0].complete))
      })
      for (let i = 0; i < data.length; i++) {
        data[i].chartData.labels = newArray[i]
        data[i].chartData.datasets[0].data = impression[i]
        // data[i].chartData.datasets[1].data = click[i]
        // data[i].chartData.datasets[2].data = complete[i]
      }
      state.dataCampaignComplete = data
      state.totalCampaignComplete = item.data.totalRows
      state.totalPagesComplete = item.data.totalPages
    } else {
      state.dataCampaignComplete = []
      state.totalCampaignComplete = 0
      state.totalPagesComplete = 0
    }
  },
}

export const actions = {
  reset({ commit }) {
    commit('RESET')
  },
  async getAdvertiser({ commit }) {
    try {
      const response = await this.$repositories.campaign.getAdvertiser()
      commit('SET_DATA_ADVERTISER', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_ADVERTISER', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async getCampaignTypes({ commit }) {
    try {
      const response = await this.$repositories.campaign.getCampaignTypes()
      commit('SET_DATA_CAMPAIGN_TYPE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CAMPAIGN_TYPE', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async createCampaign({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.createCampaign(payload)
      commit('SET_DATA_CREATE_CAMPAIGN', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_CREATE_CAMPAIGN', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async getList({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.getList(payload)
      commit('SET_DATA_CAMPAIGN', response.data)
      return response
    } catch (e) {
      commit('SET_DATA_CAMPAIGN', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async getCampaignComplete({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.getListComplete(
        payload
      )
      commit('SET_DATA_CAMPAIGN_COMPLETE', response.data)
      return response
    } catch (e) {
      commit('SET_DATA_CAMPAIGN_COMPLETE', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async getDetail({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.getDetail(payload)
      commit('SET_DATA_DETAIL_CAMPAIGN', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_DETAIL_CAMPAIGN', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async getPerformance({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.getPerformance(payload)
      commit('SET_DATA_PERFORMANCE', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_PERFORMANCE', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async update({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.update(payload)
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
  async getSummary({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.getSummary(payload)
      commit('SET_DATA_SUMMARY', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_SUMMARY', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async changeStatus({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.changeStatus(payload)
      commit('SET_DATA_STATUS', response.data.data)
      return response
    } catch (e) {
      commit('SET_DATA_STATUS', null)
      console.error(e)
      this.$notifier.showMessage({
        content: 'Error status code: ' + (e.response?.status || 'Unknown'),
        type: 'failed',
      })
      return e.response
    }
  },
  async duplicate({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.duplicate(payload)
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
  async delete({ commit }, payload) {
    try {
      const response = await this.$repositories.campaign.delete(payload)
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
