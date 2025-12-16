<template>
  <div class="containers" style="width: 100%">
    <div class="flex items-center header-content">
      <div class="title-header">Campaigns</div>
      <ButtonDefault
        icon="plus"
        text="Create New"
        class="ml-4"
        type="secondary"
        @click.native="toCreate()"
      />
    </div>
    <div class="flex items-center filter-content justify-between">
      <div
        class="status-filter flex items-center"
        style="padding-left: 10px; padding-right: 10px"
      >
        <div
          class="flex items-center justify-center card-filter"
          @click="statusActive('all')"
        >
          <IconList
            :bg-color="activeStatus === 'all' ? '#1B63D4' : '#454545'"
          />
          <div
            class="name-status"
            :style="
              activeStatus === 'all' ? 'font-weight:500;color: #0056DE;' : ''
            "
          >
            All
          </div>
        </div>
        <div class="hr-vertical" style="margin-right: 0px" />
        <div
          class="flex items-center justify-center card-filter"
          @click="statusActive('running')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'running'
                ? 'font-weight:500;color: #0056DE;'
                : ''
            "
          >
            Running
          </div>
        </div>
        <div
          class="flex items-center justify-center card-filter"
          @click="statusActive('inactive')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'inactive'
                ? 'font-weight:500;color: #0056DE;'
                : ''
            "
          >
            Inactive
          </div>
        </div>
        <div
          class="flex items-center justify-center card-filter"
          @click="statusActive('paused')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'paused' ? 'font-weight:500;color: #0056DE;' : ''
            "
          >
            Pause
          </div>
        </div>
        <div
          class="flex items-center justify-center card-filter"
          @click="statusActive('completed')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'completed'
                ? 'font-weight:500;color: #0056DE;'
                : ''
            "
          >
            Completed
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="k-btn focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center items-center justify-center"
          @click="showDialog()"
        >
          <img src="~/assets/images/campaign/icon_filter.svg" class="mr-2" />
          Sort & Filter
        </button>
        <div class="hr-vertical" />
        <div class="search-card">
          <transition name="slide">
            <div
              v-if="!showSearch"
              class="hide-search flex items-center justify-center cursor-pointer"
              @mouseover="showSearch = true"
              @click="showSearch = !showSearch"
            >
              <IconSearch />
            </div>
            <div
              v-else
              class="show-search flex items-center justify-between cursor-pointer"
            >
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchCampaign()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find something.."
                  @change="searchCampaign()"
                />
              </form>
              <IconSearch @click.native="searchCampaign()" />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="body-content">
      <div v-if="activeLayout === 'grid'" class="grid grid-cols-4 gap-4">
        <CardCampaign
          v-for="(item, index) in data2"
          :key="index"
          :status="item.status"
          @detail="toDetail()"
        >
          <template v-slot:header>
            {{ item.title }}
          </template>
          <template v-slot:Goal>
            <LineChartGenerator
              :chart-options="chartOptions"
              :chart-data="chartData"
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
          v-loading="isLoading"
          element-loading-text="Loading..."
          element-loading-spinner="el-icon-loading"
          fit
          lazy
          :data="dataCampaign"
          stripe
          class="k-table"
          :style="sidebar ? 'width:calc(100% - 8px)' : 'width:calc(100% - 8px)'"
        >
          <template slot="empty">
            <div class="flex flex-col items-center mt-6 no-data">
              <img src="~/assets/images/empty_table.png" width="150" />
              <div class="title-1">No records found.</div>
              <div class="subtitle-1">
                Seems like you haven’t created any campaign yet. Create one now?
              </div>
              <button
                class="flex items-center justify-center save-btn no-select"
                @click="toCreate()"
              >
                <IconSave bg-color="#1B63D4" />
                <div class="name-btn">Create New Campaign</div>
              </button>
            </div>
          </template>
          <el-table-column label="" prop="name" sortable width="300">
            <template slot="header"> Campaign Name </template>
            <template slot-scope="scope">
              <div
                class="flex items-center cursor-pointer"
                style="margin-left: 5px"
                @click="toDetail(scope.row.id)"
              >
                <div class="flex flex-col">
                  <el-tooltip :open-delay="1000" placement="top-end">
                    <div slot="content">
                      {{ scope.row.name }}
                    </div>

                    <div class="k-title">
                      {{ scope.row.name }}
                    </div>
                  </el-tooltip>
                  <div class="k-subtitle">
                    Campaign period:
                    {{ $moment(scope.row.startDate).format('MMM Do, YYYY') }}
                    to
                    {{ $moment(scope.row.endDate).format('MMM Do, YYYY') }}
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Status" header-align="center" align="center">
            <template slot-scope="scope">
              <div
                v-if="scope.row.status === 'running'"
                class="status-card flex items-center justify-center no-select"
                style="background-color: #ecf5e5; color: #7bbc49"
              >
                Running
              </div>
              <div
                v-if="scope.row.status === 'completed'"
                class="status-card flex items-center justify-center no-select"
                style="background-color: #e1edff; color: #1b63d4"
              >
                Completed
              </div>
              <div
                v-if="scope.row.status === 'inactive'"
                class="status-card flex items-center justify-center no-select"
                style="background-color: #fff3dd; color: #fbab18"
              >
                Inactive
              </div>
              <div
                v-if="scope.row.status === 'paused'"
                class="status-card flex items-center justify-center no-select"
                style="background-color: #e2e2e2; color: #454545"
              >
                Paused
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Impression"
            header-align="center"
            align="center"
          >
            <template slot-scope="scope">
              <div
                v-if="Object.keys(scope.row.analytics).length !== 0"
                class="view-text"
              >
                {{ Number(scope.row.analytics.impression).toLocaleString() }}
                impression
              </div>
              <div v-else class="view-text">0 impression</div>
            </template>
          </el-table-column>
          <el-table-column label="Click" header-align="center" align="center">
            <template slot-scope="scope">
              <div
                v-if="Object.keys(scope.row.analytics).length !== 0"
                class="view-text"
              >
                {{ Number(scope.row.analytics.click).toLocaleString() }} click
              </div>
              <div v-else class="view-text">0 click</div>
            </template>
          </el-table-column>
          <el-table-column label="CTR" header-align="center" align="center">
            <template slot-scope="scope">
              <div
                v-if="Object.keys(scope.row.analytics).length !== 0"
                class="view-text"
              >
                {{ scope.row.analytics.ctr }} %
              </div>
              <div v-else class="view-text">0 %</div>
            </template>
          </el-table-column>
          <el-table-column
            label="Last Modified"
            header-align="center"
            align="center"
          >
            <template slot-scope="scope">
              <div class="view-text">
                {{ $moment(scope.row.updatedAt).format('DD/MM/YYYY') }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Action"
            header-align="center"
            align="center"
            width="190"
          >
            <template slot-scope="scope">
              <Dropdown
                :index-list="scope.$index"
                :name-btn="scope.row.isActive ? 'Pause' : 'Start'"
                :icons="scope.row.isActive ? 'pause' : 'play'"
                :color-text="scope.row.isActive ? '#1B63D4' : '#1B63D4'"
                @preview="changeActive(scope.row.id, scope.row.isActive)"
              >
                <template slot="body">
                  <div
                    class="item-menu flex items-center no-select"
                    @click="openDuplicateDialog(scope.row)"
                  >
                    <img
                      src="~/assets/images/icon/duplicate.svg"
                      class="icon-item"
                    />
                    Duplicate
                  </div>
                  <div
                    class="item-menu flex items-center no-select"
                    style="
                      border-bottom: 1px solid #e2e2e2;
                      border-top: 1px solid #e2e2e2;
                      border-end-end-radius: 5px;
                      border-end-start-radius: 5px;
                    "
                    @click="deleteCampaign(scope.row)"
                  >
                    <img
                      src="~/assets/images/icon/delete.svg"
                      class="icon-item"
                    />
                    Delete
                  </div>
                </template>
              </Dropdown>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalCampaign"
        @input="changePage($event)"
        @rowPage="changeRowPage($event)"
      />
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
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="-"
                start-placeholder="Start date"
                end-placeholder="End date"
                align="right"
                format="yyyy-MM-dd"
                style="width: 100%"
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
                  label="createdAt_asc"
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
                  label="createdAt_desc"
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

    <transition name="fade">
      <Popup
        v-if="dialogDuplicate"
        class="kg-popup"
        width="30"
        :border-header="false"
        @close-modal="closeDialog()"
      >
        <template v-slot:body>
          <div class="content-popup flex flex-col">
            <div
              class="flex items-center justify-between"
              style="margin-bottom: 14px"
            >
              <div class="title-popup2">Duplicate Campaign?</div>
              <img
                src="~/assets/images/icon/duplicate_big.svg"
                class="icon-item"
              />
            </div>
            <div class="title-popup">
              How many duplicate of <b>{{ detailCampaign.name }}</b> campaign do
              you want?
            </div>
            <div class="input-number flex items-center justify-between">
              <div
                style="width: 18px; height: 18px"
                class="flex items-center cursor-pointer justify-center no-select"
                @click="btnMinus()"
              >
                <IconMinus bg-color="#1B63D4" />
              </div>
              <input
                v-model="countDuplicate"
                class="input-text"
                type="number"
                min="1"
                max="10"
              />
              <div
                style="width: 18px; height: 18px"
                class="flex items-center cursor-pointer justify-center no-select"
                @click="btnPlus()"
              >
                <IconPlus bg-color="#1B63D4" />
              </div>
            </div>
            <div
              class="footer-card grid grid-cols-2 gap-4 place-content-stretch"
            >
              <button
                class="flex items-center justify-center cancel-btn no-select"
                @click="closeDialog()"
              >
                <span class="name-btn no-select">Cancel</span>
              </button>
              <button
                class="flex items-center justify-center save-btn no-select"
                @click="duplicateCreative(detailCampaign.id)"
              >
                <IconCompleted bg-color="white" class="mr-2 pl-1" />
                <span class="name-btn no-select">Confirm</span>
              </button>
            </div>
          </div>
        </template>
      </Popup>
    </transition>
    <transition name="fade">
      <Popup
        v-if="dialogDelete"
        class="kg-popup"
        width="30"
        :border-header="false"
        @close-modal="closeDialog()"
      >
        <template v-slot:body>
          <div class="content-popup flex flex-col">
            <div
              class="flex items-center justify-between"
              style="margin-bottom: 14px"
            >
              <div class="title-popup2">Disable Campaign?</div>
              <img
                src="~/assets/images/icon/delete_color.svg"
                class="icon-item"
              />
            </div>
            <div class="title-popup">
              Are you sure want to disable
              <b>{{ detailCampaign.name }}</b> campaign?
            </div>
            <div
              class="footer-card grid grid-cols-2 gap-4 place-content-stretch"
            >
              <button
                class="flex items-center justify-center cancel-btn2 no-select"
                @click="closeDialog()"
              >
                <span class="name-btn no-select">Cancel</span>
              </button>
              <button
                class="flex items-center justify-center save-btn2 no-select"
                @click="deleteCreative(detailCampaign.id)"
              >
                <IconCompleted bg-color="white" class="mr-2 pl-1" />
                <span class="name-btn no-select">Confirm</span>
              </button>
            </div>
          </div>
        </template>
      </Popup>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Campaigns - ' + this.$config.appName,
    }
  },
  data() {
    return {
      detailCampaign: {
        name: '',
        id: '',
      },
      countDuplicate: 1,
      radio: 'createdAt_desc',
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
      activeLayout: 'list',
      selectedDate: null,
      dialog: false,
      dialogDuplicate: false,
      dialogDelete: false,
      dialogChart: false,
      data2: [],
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      chartData: {
        labels: ['2022-03-01', '2022-03-02', '2022-03-03'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [0, 10, 5],
            lineTension: 0.5,
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [10, 4, 7],
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
      percentage: 0,
      rowPage: 10,
    }
  },
  watch: {
    $route(to, from) {
      // this.$store.state.formRecord.field1 = ''
    },
  },
  filters: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  computed: {
    ...mapState({
      orgId: (state) => {
        return state.user.orgId
      },
      sidebar: (state) => {
        return state.user.sidebar
      },
      popup: (state) => {
        return state.user.popup
      },
      dataCampaign: (state) => {
        return state.campaign.dataCampaign
      },
      totalCampaign: (state) => {
        return state.campaign.totalCampaign
      },
      totalPages: (state) => {
        return state.campaign.totalPages
      },
      dataAdvertiser: (state) => {
        return state.campaign.dataAdvertiser
      },
      dataCampaignType: (state) => {
        return state.campaign.dataCampaignType
      },
    }),
  },
  mounted() {
    const keys = Object.keys(this.$route.query)
    if (keys.length > 0) {
      this.activeStatus = this.$route.query.status
      this.getAll()
    }
    this.$store.dispatch('reset')
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getAll()
  },
  methods: {
    closeDeleteDialog() {
      this.detailCampaign = null
      this.dialogDelete = false
    },
    deleteCampaign(data) {
      document.querySelector('body').style.overflow = 'hidden'
      this.detailCampaign = data
      this.dialogDelete = true
    },
    btnPlus() {
      if (this.countDuplicate < 10) {
        this.countDuplicate++
      }
    },
    btnMinus() {
      if (this.countDuplicate > 1) {
        this.countDuplicate--
      }
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
    changePage(ev) {
      if (ev > 0) {
        this.currentPage = ev
        this.getCampaign()
      }
    },
    changeRowPage(ev) {
      this.rowPage = ev
      this.getCampaign()
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
        this.createdAt2.push(this.createdAt[0])
        this.createdAt2.push(this.createdAt[1])
        this.createdAt2 = JSON.stringify(this.createdAt2)
        const data = {
          page: this.currentPage,
          size: this.rowPage,
          status: this.activeStatus,
          name: this.dataSearch,
          campaignTypeId: this.campaignTypeId,
          advertiserIds: this.advertiserIds2,
          sort: this.radio,
          createdAt: this.createdAt2,
        }
        this.$store
          .dispatch('campaign/getList', data)
          .then(() => {
            this.isLoading = false
          })
          .catch(() => {
            this.isLoading = false
          })
      } else {
        const data = {
          page: this.currentPage,
          size: this.rowPage,
          status: this.activeStatus,
          name: this.dataSearch,
          campaignTypeId: this.campaignTypeId,
          advertiserIds: this.advertiserIds2,
          sort: this.radio,
          createdAt: '',
        }
        this.$store
          .dispatch('campaign/getList', data)
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
      this.radio = 'createdAt_desc'

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
      const route = this.$router.resolve({ path: `/campaign/detail/${x}` })
      window.open(route.href)
    },
    toCreate() {
      this.$router.push({ path: '/campaign/create' })
    },
    changeActive(id, active) {
      const data = {
        id,
        isActive: !active,
      }

      this.$notifier.showMessage({
        content: 'Change status campaign...',
        type: 'loading',
      })
      const x = setTimeout(
        () =>
          this.$store
            .dispatch('campaign/changeStatus', data)
            .then((res) => {
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                this.getAll()
                this.$notifier.showMessage({
                  content: 'Change campaign status success.',
                  type: 'success',
                })
                clearInterval(x)
              } else {
                this.$notifier.showMessage({
                  content:
                    'Change campaign status failed. Error : ' +
                    res.data.data.message,
                  type: 'failed',
                })
                this.showMessage = true
                const keys = Object.keys(res.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                clearInterval(x)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
    },
    closeDialog() {
      document.querySelector('body').style.overflow = ''
      this.detailCampaign = null
      this.dialogDuplicate = false
      this.dialogDelete = false
      this.$store.commit('user/SET_DROPDOWN', null)
    },
    openDuplicateDialog(data) {
      document.querySelector('body').style.overflow = 'hidden'
      this.detailCampaign = data
      this.dialogDuplicate = true
    },
    duplicateCreative(id) {
      const data = {
        id,
        count: this.countDuplicate,
      }
      this.$notifier.showMessage({
        content: 'Duplicate campaign...',
        type: 'loading',
      })
      const x = setTimeout(
        () =>
          this.$store
            .dispatch('campaign/duplicate', data)
            .then((res) => {
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                this.getAll()
                this.$notifier.showMessage({
                  content: 'Duplicate campaign status success.',
                  type: 'success',
                })
                this.detailCampaign = null
                this.dialogDuplicate = false
                this.$store.commit('user/SET_DROPDOWN', null)
                this.countDuplicate = 1
                clearInterval(x)
              } else {
                this.detailCampaign = null
                this.dialogDuplicate = false
                this.countDuplicate = 1
                this.$notifier.showMessage({
                  content:
                    'Duplicate campaign status failed. Error : ' +
                    res.data.data.message,
                  type: 'failed',
                })
                this.showMessage = true
                const keys = Object.keys(res.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                this.$store.commit('user/SET_DROPDOWN', null)
                clearInterval(x)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
      document.querySelector('body').style.overflow = ''
    },
    deleteCreative(id) {
      const data = {
        id,
      }
      this.$notifier.showMessage({
        content: 'Delete campaign...',
        type: 'loading',
      })
      const x = setTimeout(
        () =>
          this.$store
            .dispatch('campaign/delete', data)
            .then((res) => {
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                this.dialogDelete = false
                this.getAll()
                this.$store.commit('user/SET_DROPDOWN', null)
                this.$notifier.showMessage({
                  content: 'Delete campaign status success.',
                  type: 'success',
                })
                clearInterval(x)
              } else {
                this.dialogDelete = false
                // this.detailCampaign = null
                this.showMessage = true
                const keys = Object.keys(res.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
                })
                this.$store.commit('user/SET_DROPDOWN', null)
                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content:
                    'Delete campaign status failed. Error : ' +
                    res.data.data.message,
                  type: 'failed',
                })
                clearInterval(x)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
      document.querySelector('body').style.overflow = ''
    },
  },
}
</script>

<style lang="scss" scoped>
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
  padding: 20px;
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
    margin-top: 20px;
    .status-filter {
      height: 44px;
      background: #ffffff;
      border: 1px solid #c3ced9;
      border-radius: 5px;
      padding-right: 8px;
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
      .hr-vertical {
        height: 24px;
        border-right: 0px solid #e2e2e2;
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
      font-family: 'Cabin';
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      font-weight: 700;
      height: 36px;
      width: 138px;
      align-items: center;
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
  .body-content {
    margin-top: 20px;
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
      .k-btn {
        width: 165px;
        background: #f1f1f1;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        cursor: pointer;
        .name-btn {
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 1px;
          color: #9a9a9a;
          padding-left: 10px;
        }
      }
      .k-btn:hover {
        background-color: rgb(243 244 246);
        border: 0px;
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

  .kg-popup {
    .content-popup {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      padding-top: 20px;
      width: 100%;
      height: 100%;
      .title-popup2 {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #5c6b7a;
      }
      .title-popup {
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .input-number {
        width: 100%;
        height: 40px;
        background: #ffffff;
        border: 1.5px solid #1b63d4;
        box-shadow: 0px 2px 10px rgba(187, 209, 243, 0.5);
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 15px;
        padding-left: 13px;
        padding-right: 13px;
        .input-text {
          width: 70%;
          text-align: center;
          height: 37px;
        }
        .input-text:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .box-popup {
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 11px 10px 11px 10px;
        margin-top: 10px;
        .name-popup {
          font-weight: 500;
          font-size: 16px;
          color: #454545;
        }
        .desc-popup {
          font-weight: 400;
          font-size: 14px;
          color: #757575;
        }
        .date-popup {
          font-weight: 400;
          font-size: 14px;
          text-align: right;
          color: #757575;
        }
      }
      .footer-card {
        margin-top: 15px;
        .cancel-btn {
          border: 1px solid #1b63d4;
          color: #1b63d4;
          font-weight: 700;
          font-size: 14px;
          border-radius: 5px;
          height: 40px;
        }
        .cancel-btn:hover {
          background-color: rgb(243 244 246);
        }
        .save-btn {
          background: #1b63d4;
          color: #ffffff;
          border-radius: 5px;
          height: 40px;
        }
        .save-btn:hover {
          opacity: 1.2;
        }
        .cancel-btn2 {
          border: 1px solid #ed543a;
          color: #ed543a;
          font-weight: 700;
          font-size: 14px;
          border-radius: 5px;
          height: 40px;
        }
        .cancel-btn2:hover {
          background-color: rgb(243 244 246);
        }
        .save-btn2 {
          background: #ed543a;
          border: 1px solid #ed543a;
          border-radius: 5px;
          height: 40px;
          color: white;
        }
        .save-btn2:hover {
          opacity: 1.2;
        }
      }
    }
  }
}
</style>
