<template>
  <div class="containers p-6 w-full">
    <div
      class="flex items-center header-content filter-content justify-between"
    >
      <div class="flex items-center header-content">
        <div class="title-header">Running Campaigns</div>
        <ButtonDefault
          icon="view"
          text="View All"
          class="ml-4"
          type="secondary"
          @click.native="toCampaign()"
        />
      </div>
      <div class="flex items-center">
        <div class="layout-filter flex items-center">
          <div class="flex name-filter">Layout:</div>
          <div
            class="flex btn-icon justify-center"
            :style="activeLayout === 'grid' ? 'border: 1px solid #1B63D4;' : ''"
            @click="statusLayout('grid')"
          >
            <img
              src="~/assets/images/campaign/icon_all.svg"
              style="height: 14px; width: 15px"
            />
          </div>
          <div
            class="flex btn-icon"
            :style="activeLayout === 'list' ? 'border: 1px solid #1B63D4;' : ''"
            @click="statusLayout('list')"
          >
            <img
              src="~/assets/images/campaign/icon_list.svg"
              style="height: 14px"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="totalCampaign > 0" class="body-content">
      <div v-if="activeLayout === 'grid'" class="grid grid-cols-4 gap-4">
        <CardCampaign
          v-for="(item, index) in dataCampaignComplete"
          :key="index"
          :status="item.status"
          @click.native="toDetail(item.id)"
        >
          <template v-slot:header>
            {{ item.name }}
          </template>
          <template v-slot:Goal>
            <LineChartGenerator
              :chart-options="chartOptions"
              :chart-data="item.chartData"
            />
          </template>
          <template v-slot:Summary>
            <div class="summary-card">
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">offers</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">bid%</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">won%</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">impr.</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">clicks</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
              <div class="flex justify-between items-center item-summary">
                <div class="title-1">ctr</div>
                <apexchart
                  type="area"
                  height="60"
                  :options="chartOptions2"
                  :series="series2"
                  style="width: 80px"
                />
                <div class="value-1">35.51 M</div>
              </div>
            </div>
          </template>
        </CardCampaign>
      </div>
      <div v-else>
        <el-table
          v-if="tableVisible"
          :loading="isLoading"
          element-loading-text="Loading..."
          element-loading-spinner="el-icon-loading"
          fit
          lazy
          stripe
          :data="dataCampaignComplete"
          class="w-full k-table"
        >
          <!-- padding -->
          <el-table-column label="" width="10" />

          <el-table-column label="Campaign Name" sortable width="400">
            <template slot-scope="scope">
              <div
                class="flex items-center cursor-pointer"
                @click="toDetail(scope.row.id)"
              >
                <div class="k-circle" />
                <div class="flex flex-col">
                  <div class="k-title">
                    {{ scope.row.name }}
                  </div>
                  <div class="k-subtitle">
                    Campaign period:
                    {{ $moment(scope.row.startDate).format('MMMM Do, YYYY') }}
                    to
                    {{ $moment(scope.row.endDate).format('MMMM Do, YYYY') }}
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Status" width="150">
            <template slot-scope="scope">
              <div
                class="status-card flex items-center justify-center no-select"
              >
                {{ scope.row.status }}
              </div>
              <!-- <div
                v-if="scope.row.status === 'delivering'"
                class="status-card flex items-center justify-center no-select"
              >
                Delivering
              </div>
              <div
                v-if="scope.row.status === 'inactive'"
                class="status-card flex items-center justify-center no-select"
                style="background: #fff3dd; color: #fbab18"
              >
                Inactive
              </div>
              <div
                v-if="scope.row.status === 'completed'"
                class="status-card flex items-center justify-center no-select"
              >
                Completed
              </div> -->
            </template>
          </el-table-column>

          <el-table-column label="CPM">
            <template slot-scope="scope">
              <div class="cpm-text">0 USD</div>
            </template>
          </el-table-column>

          <el-table-column label="Impression">
            <template slot-scope="scope">
              <div class="view-text">0 views</div>
              <div class="increase-text flex items-center">
                <IconPriceUp class="mr-2" />Increase 0%
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Creatives">
            <template slot-scope="scope">
              <div class="view-text">0 views</div>
              <div class="increase-text flex items-center">
                <IconPriceUp class="mr-2" />Increase 0%
              </div>
            </template>
          </el-table-column>

          <!-- <el-table-column label="Action">
            <template slot-scope="scope">
              <div class="flex">
                <div class="flex btn-icon justify-center" @click="showChart()">
                  <IconChart style="height: 14px; width: 15px" />
                </div>
                <div
                  class="flex btn-icon justify-center mr-0"
                  @click="toDetail(scope.row.id)"
                >
                  <IconEyes style="height: 14px; width: 15px" />
                </div>
              </div>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
      <div class="k-pagination flex justify-between items-center">
        <div
          v-if="currentPage > 1"
          class="flex items-center justify-center k-btn no-select"
          @click="getCampaign(currentPage--)"
        >
          <IconArrowLeft />
          <span class="name-btn">Previous Page</span>
        </div>
        <div v-else class="flex" />
        <el-pagination
          v-if="totalCampaign > 10"
          layout="pager"
          :total="totalCampaign"
          background
          :current-page.sync="currentPage"
          :page-size="per_page"
          @current-change="getCampaign(currentPage)"
        />
        <div
          v-if="totalCampaign > 10"
          class="flex items-center justify-center k-btn no-select"
          style="background: #1b63d4"
          @click="getCampaign(currentPage++)"
        >
          <span
            class="name-btn"
            style="color: white; padding-left: 0px; padding-right: 10px"
            >Next Page</span
          >
          <IconArrowRight bg-color="white" />
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-center mt-16 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1">No records found.</div>
      <div class="subtitle-1">
        Seems like you haven’t created any campaign yet. Create one now?
      </div>
      <button
        class="flex items-center justify-center save-btn no-select"
        @click="toCreate"
      >
        <IconSave bg-color="#1B63D4" />
        <div class="name-btn">Create New Creative</div>
      </button>
    </div>
    <transition name="slide">
      <Modal
        v-if="dialog"
        @close-modal="dialog = false"
        @save-filter="getCampaign()"
        @reset-filter="resetFilter()"
      >
        <template v-slot:filter>
          <Accordion title="Period" class="mb-4" show>
            <template v-slot:body>
              <el-date-picker
                v-model="createdAt"
                type="daterange"
                align="right"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                default-value="2010-10-01"
                style="width: 270px"
              />
            </template>
          </Accordion>
          <Accordion title="Advertiser" class="mb-4">
            <template v-slot:body>
              <el-select
                v-model="advertiserIds"
                placeholder="Select Advertiser"
                multiple
                style="width: 100%"
              >
                <el-option
                  v-for="item in dataAdvertiser"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </template>
          </Accordion>
          <Accordion title="Campaign Type" class="mb-4">
            <template v-slot:body>
              <el-select
                v-model="campaignTypeId"
                placeholder="Select Campaign"
                style="width: 100%"
              >
                <el-option
                  v-for="item in dataCampaignType"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </template>
          </Accordion>
        </template>
        <template v-slot:sort>
          <Accordion title="Sort by" class="mb-4" show>
            <template v-slot:body>
              <div class="flex flex-col">
                <el-radio
                  v-model="radio"
                  class="flex mb-4"
                  label="asc"
                  style="
                    font-family: 'Cabin';
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                  "
                >
                  Ascending
                </el-radio>
                <el-radio
                  v-model="radio"
                  class="flex"
                  label="desc"
                  style="
                    font-family: 'Cabin';
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                  "
                >
                  Descending
                </el-radio>
              </div>
            </template>
          </Accordion>
        </template>
      </Modal>
    </transition>
    <Popup v-if="popup" class="popup" @close-modal="showChart()">
      <template v-slot:icon>
        <IconLineChart />
      </template>
      <template v-slot:title> Chart Details </template>
      <template v-slot:body>
        <div class="status-filter flex items-center justify-around">
          <div
            class="flex items-center justify-center card-filter"
            :style="
              activeStatusPopup === 'goal'
                ? 'border-bottom: 2px solid #1B63D4;'
                : ''
            "
            @click="statusActivePopup('goal')"
          >
            <div class="name-status">Goal</div>
          </div>
          <div
            class="flex items-center justify-center card-filter"
            :style="
              activeStatusPopup === 'summary'
                ? 'border-bottom: 2px solid #1B63D4;'
                : ''
            "
            @click="statusActivePopup('summary')"
          >
            <div class="name-status">Summary</div>
          </div>
        </div>
        <div v-if="activeStatusPopup === 'summary'" class="summary-card">
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">offers</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">bid%</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">won%</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">impr.</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">clicks</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
          <div class="flex justify-between items-center item-summary">
            <div class="title-1">ctr</div>
            <apexchart
              type="area"
              height="60"
              :options="chartOptions2"
              :series="series2"
              style="width: 80px"
            />
            <div class="value-1">35.51 M</div>
          </div>
        </div>
        <div v-else>
          <apexchart
            type="line"
            height="200"
            :options="chartOptions3"
            :series="series3"
          />
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RunningCampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Running Campaigns - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      radio: 'asc',
      createdAt: '',
      createdAt2: [],
      advertiserIds: '',
      advertiserIds2: '',
      campaignTypeId: '',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      per_page: 10,
      isLoading: false,
      activeStatusPopup: 'goal',
      dataStatus: 'delivering',
      activeStatus: 'all',
      activeLayout: 'grid',
      selectedDate: null,
      dialog: false,
      dialogChart: false,
      data2: [
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'delivering',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'inactive',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'delivering',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'inactive',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'delivering',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'inactive',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'inactive',
        },
        {
          title: 'The Lokal Folk_Opening Campaign March_2022_CPM',
          status: 'inactive',
        },
      ],

      chartData: {
        labels: [
          'MAr/01',
          '03/01',
          '03/01',
          '03/01',
          '03/01',
          '03/01',
          '03/01',
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [0, 10, 5, 0, 10, 5, 5],
            lineTension: 0.5,
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [10, 4, 7, 10, 4, 7, 2],
            lineTension: 0.5,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      },
      status: 'delivering',
      series: [
        {
          name: 'Data on selected period',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: 'Data compared to previous period',
          data: [8, 41, 85, 70, 59, 62, 0, 91, 88],
        },
      ],
      series2: [
        {
          name: 'Data',
          data: [10, 41, 35],
        },
      ],
      chartOptions2: {
        chart: {
          height: '100%',
          type: 'area',
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        curve: 'smooth',
        dataLabels: {
          enabled: false,
        },
        colors: ['#1B63D4'],
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series3: [
        {
          name: 'Data on selected period',
          data: [10, 41],
        },
        {
          name: 'Data compared to previous period',
          data: [8, 41],
        },
      ],
      chartOptions3: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        curve: 'smooth',
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
          dashArray: [0, 10],
        },
        legend: {
          show: false,
        },
        colors: ['#1B63D4', '#FBAB18'],
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },

        xaxis: {
          categories: ['2022-03-31', '2022-04-12'],
        },
      },
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      popup: (state) => {
        return state.user.popup
      },
      dataCampaignComplete: (state) => {
        return state.campaign.dataCampaignComplete
      },
      totalCampaign: (state) => {
        return state.campaign.totalCampaignComplete
      },
      dataAdvertiser: (state) => {
        return state.campaign.dataAdvertiser
      },
      dataCampaignType: (state) => {
        return state.campaign.dataCampaignType
      },
      roleId: (state) => {
        return state.user.roleId
      },
    }),
  },
  mounted() {
    this.getAll()
    if (this.roleId === 4) {
      this.$router.push({ path: '/placement/creative/' })
      this.$store.commit('user/SET_ACTIVE', 'Creative')
    }
  },
  methods: {
    toCampaign() {
      this.$router.push({ path: 'campaign', query: { status: 'running' } })
      this.$store.commit('user/SET_ACTIVE', 'Campaign')
    },
    getAll() {
      this.getCampaign()
      this.getAdvertiser()
      this.getCampaignTypes()
    },
    getAdvertiser() {
      this.$store.dispatch('campaign/getAdvertiser')
    },
    getCampaignTypes() {
      this.$store.dispatch('campaign/getCampaignTypes')
    },
    getCampaign() {
      this.isLoading = true
      this.createdAt2 = []
      if (this.advertiserIds !== '') {
        this.advertiserIds2 = JSON.stringify(this.advertiserIds)
      } else {
        this.advertiserIds2 = this.advertiserIds
      }
      if (this.createdAt !== '' && this.createdAt !== null) {
        this.createdAt2.push(
          this.$moment(this.createdAt[0]).format('YYYY-MM-DD')
        )
        this.createdAt2.push(
          this.$moment(this.createdAt[1]).format('YYYY-MM-DD')
        )
        this.createdAt2 = JSON.stringify(this.createdAt2)
        const data = {
          page: this.currentPage,
          size: 12,
          status: 'running',
          name: this.dataSearch,
          campaignTypeId: this.campaignTypeId,
          advertiserIds: this.advertiserIds2,
          sort: this.radio,
          createdAt: this.createdAt2,
        }
        this.$store
          .dispatch('campaign/getCampaignComplete', data)
          .finally(() => (this.isLoading = false))
      } else {
        const data = {
          page: this.currentPage,
          size: 12,
          status: 'running',
          name: this.dataSearch,
          campaignTypeId: this.campaignTypeId,
          advertiserIds: this.advertiserIds2,
          sort: this.radio,
          createdAt: '',
        }
        this.$store
          .dispatch('campaign/getCampaignComplete', data)
          .then(() => {
            this.isLoading = false
          })
          .catch(() => {
            this.isLoading = false
          })
      }
    },
    filter() {},
    resetFilter() {
      this.createdAt = ''
      this.createdAt2 = []
      this.advertiserIds = ''
      this.advertiserIds2 = ''
      this.campaignTypeId = ''
      this.radio = ''

      this.getCampaign()
    },
    statusActive(x) {
      this.activeStatus = x
      this.currentPage = 1
      this.getCampaign()
    },
    searchCampaign() {
      this.currentPage = 1
      this.showSearch = false
      this.getCampaign()
    },
    statusActivePopup(x) {
      this.activeStatusPopup = x
    },
    statusLayout(x) {
      this.activeLayout = x
    },
    showDialog() {
      this.dialog = !this.dialog
    },
    showChart() {
      this.$store.commit('user/SET_POPUP')
    },
    toDetail(x) {
      this.$router.push({
        path: `/placement/campaign/detail/${x}`,
      })
      this.$store.commit('user/SET_ACTIVE', 'Campaign')
    },
    toCreate() {
      this.$router.push({ path: '/placement/campaign/create' })
      this.$store.commit('user/SET_ACTIVE', 'Campaign')
    },
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.k-table {
  border: 1px solid #c3ced9 !important;
  border-radius: 10px !important;
  .k-circle {
    width: 11px;
    height: 11px;
    border: 2px solid #7bbc49;
    border-radius: 50%;
    margin-right: 13px;
  }
  .k-title {
    font-family: 'Cabin';
    font-weight: 500;
    font-size: 16px;
    color: #454545;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
  }
  .k-title:hover {
    color: #1b63d4;
  }
  .k-subtitle {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 12px;
    color: #9a9a9a;
  }

  .status-card {
    font-family: 'Cabin';
    color: #7bbc49;
    font-weight: 400;
    font-size: 14px;
    background: #ecf5e5;
    border-radius: 5px;
    height: 25px;
    margin-top: 10px;
    width: 80px;
    margin-right: auto;
    margin-left: auto;
  }
  .cpm-text {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 14px;
    color: #454545;
  }
  .view-text {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 14px;
    color: #454545;
  }
  .increase-text {
    font-family: 'Cabin';
    font-size: 12px;
    font-weight: 400;
    color: #454545;
  }

  .btn-icon {
    height: 100%;
    padding: 10px;
    width: 40px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    // margin-left: 10px;
    cursor: pointer;
    margin-right: 10px;
  }
  .btn-icon:hover {
    background-color: rgb(243 244 246);
  }
  .no-data {
    .title-1 {
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 20px;
      color: #454545;
      line-height: 24px;
    }
    .subtitle-1 {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #757575;
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 24px;
    }
    .save-btn {
      width: 220px;
      background: #ffffff;
      border: 1px solid #1b63d4;
      color: #1b63d4;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      margin-bottom: 100px;
      line-height: normal !important;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .save-btn:hover {
      background-color: rgb(243 244 246);
    }
  }
}

.k-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
}
.el-table thead {
  color: #5c6b7a !important;
  font-family: 'Cabin' !important;
  font-weight: 600 !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.containers {
  .header-content {
    .title-header {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
    }
    .btn-create {
      font-family: 'Cabin';
      width: 94px;
      font-size: 12px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
  }
  .filter-content {
    .status-filter {
      width: 420px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      .card-filter {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        .name-status {
          font-family: 'Cabin';
          color: #454545;
          font-weight: 400;
          font-size: 16px;
          margin-left: 10px;
          line-height: 40px;
        }
      }
    }
    .date-filter {
      margin-left: 30px;
    }
    .layout-filter {
      //   margin-left: 20px;
      .name-filter {
        font-family: 'Cabin';
        color: #454545;
        font-weight: 400;
        font-size: 16px;
      }
      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 100%;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
      }
      .btn-icon:hover {
        background-color: rgb(243 244 246);
      }
    }
    .hr-vertical {
      border-left: 1px solid #e2e2e2;
      height: 24px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .k-btn {
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      height: 36px;
      width: 138px;
    }
    .k-btn:hover {
      background-color: rgb(243 244 246);
    }
    .search-card {
      .hide-search {
        width: 54px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
      }
      .show-search {
        width: 240px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        padding-left: 15px;
        padding-right: 15px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
        .title-1 {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 180px;
        }
        .title-1:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  .no-data {
    .title-1 {
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 20px;
      color: #454545;
      line-height: 24px;
    }
    .subtitle-1 {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #757575;
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 24px;
    }
    .save-btn {
      width: 220px;
      background: #ffffff;
      border: 1px solid #1b63d4;
      color: #1b63d4;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      margin-bottom: 100px;
      line-height: normal !important;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .save-btn:hover {
      background-color: rgb(243 244 246);
    }
  }
  .body-content {
    margin-top: 20px;
    .k-table {
      .k-circle {
        width: 11px;
        height: 11px;
        border: 2px solid #7bbc49;
        border-radius: 50%;
        margin-right: 13px;
      }
      .k-title {
        font-family: 'Cabin';
        font-weight: 500;
        font-size: 16px;
        color: #454545;
      }
      .k-subtitle {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
      }

      .status-card {
        font-family: 'Cabin';
        color: #7bbc49;
        font-weight: 400;
        font-size: 14px;
        background: #ecf5e5;
        border-radius: 5px;
        height: 25px;
        margin-top: 10px;
        width: 120px;
      }
      .cpm-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #454545;
      }
      .view-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #454545;
      }
      .increase-text {
        font-family: 'Cabin';
        font-size: 12px;
        font-weight: 400;
        color: #454545;
      }

      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        // margin-left: 10px;
        cursor: pointer;
        margin-right: 10px;
      }
      .btn-icon:hover {
        background-color: rgb(243 244 246);
      }
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .summary-card {
      padding: 10px 20px 0px 20px;
      height: 100%;
      .item-summary {
        height: 30px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 14px;
          color: #333333;
          width: 60px;
        }
        .value-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
  .dialog-filter {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 100%;
    background: #fafafa;
  }
  .popup {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    // height: 100%;
    .status-filter {
      width: 100%;
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      .card-filter {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        .name-status {
          font-family: 'Cabin';
          color: #454545;
          font-weight: 400;
          font-size: 16px;
          margin-left: 10px;
          line-height: 40px;
        }
      }
    }
    .summary-card {
      padding: 10px 20px 0px 20px;
      height: 100%;
      .item-summary {
        height: 30px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 14px;
          color: #333333;
          width: 60px;
        }
        .value-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
}
</style>
