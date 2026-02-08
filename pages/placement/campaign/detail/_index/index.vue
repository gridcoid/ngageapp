<template>
  <div v-if="!isLoading" class="k-container">
    <!-- header -->
    <div class="header-content">
      <div
        class="flex items-center justify-between"
        style="margin-bottom: 20px"
      >
        <Back />

        <div class="flex set-campaign items-center">
          <div class="label-date">Set Campaign</div>
          <div
            v-if="detailCampaign.isActive"
            class="flex items-center justify-center btn-status-campaign"
            @click="changeActive()"
          >
            <IconPauseV2 bg-color="#FFFFFF" style="margin-right: 11px" />
            Pause
          </div>
          <div
            v-else
            class="flex items-center justify-center btn-status-campaign"
            @click="changeActive()"
          >
            <IconPlayV2 bg-color="#FFFFFF" style="margin-right: 11px" />
            Start
          </div>
          <div class="hr-vertical" />
          <div
            class="flex items-center justify-between btn-edit no-select"
            @click="toEdit()"
          >
            <IconEdit />
            <span class="name-btn">Edit Campaign</span>
          </div>
        </div>
      </div>
      <CardStatus :text="detailCampaign.status" />
      <div class="title-campaign">
        {{ detailCampaign.name }}
      </div>
    </div>
    <!-- Campaign Performance Pacing -->
    <div class="performance-card">
      <div class="header-card flex justify-between items-center">
        <div class="title-1">Campaign Performance Pacing</div>
        <div class="flex items-center">
          <div class="label-date">Campaign Period</div>
          <el-select v-model="value" @change="filterSelect()">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="chart-card">
        <apexchart
          type="line"
          height="350"
          :options="chartOptions2"
          :series="series"
          :style="
            sidebar
              ? 'width:calc(' + width + 'px - 150px)'
              : 'width:calc(' + width + 'px - 340px)'
          "
        />
        <div
          v-if="dataChart === 0"
          class="no-data flex items-center justify-center"
        >
          No Data
        </div>
      </div>
    </div>
    <!-- sumary placement -->
    <div class="grid grid-cols-3 gap-4 mt-6 mb-6">
      <div class="summary-card flex justify-between">
        <div class="flex flex-col justify-between">
          <div class="title-summary">Impression</div>
          <div class="value-summary">
            {{ Number(dataSummary.impression).toLocaleString() }}
          </div>
        </div>
        <div class="flex items-center">
          <img src="~/assets/images/campaign/ph_eye.svg" class="" />
        </div>
      </div>
      <div class="summary-card flex justify-between">
        <div class="flex flex-col justify-between">
          <div class="title-summary">Click</div>
          <div class="value-summary">
            {{ Number(dataSummary.click).toLocaleString() }}
          </div>
        </div>
        <div class="flex items-center">
          <img src="~/assets/images/campaign/ph_hand-pointing.svg" class="" />
        </div>
      </div>
      <div class="summary-card flex justify-between">
        <div class="flex flex-col justify-between">
          <div class="title-summary">CTR</div>
          <div class="value-summary">
            {{ dataSummary.ctr }}
          </div>
        </div>
        <div class="flex items-center">
          <img src="~/assets/images/campaign/ph_target.svg" class="" />
        </div>
      </div>
    </div>
    <!-- campaign details -->
    <div ref="quest" class="card-content">
      <div class="header-card flex items-center justify-between">
        <div class="flex items-center">
          <div class="title">Campaign Details</div>
        </div>
        <!-- <div class="flex items-center">
          <div
            class="flex items-center justify-between btn-edit no-select"
            @click="toEdit()"
          >
            <IconEdit />
            <span class="name-btn">Edit Campaign</span>
          </div>
        </div> -->
      </div>
      <div class="body-card">
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1 pr-2">Campaign Name</div>
          <div class="flex-auto w-64 title-1 pr-2">
            {{ detailCampaign.name }}
          </div>
          <div class="flex-auto w-32 title-1 pl-4">Advertiser</div>
          <div class="flex-auto w-32 title-2 pl-4">
            {{ detailCampaign_ads_name }}
          </div>
        </div>
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1 pr-2">Description</div>
          <div class="flex-auto w-64 title-1 desc pr-2">
            {{ detailCampaign.description }}
          </div>
          <div class="flex-auto w-32 title-1 pl-4">Campaign Type</div>
          <div class="flex-auto w-32 title-2 pl-4">
            {{ detailCampaign_type_name }}
          </div>
        </div>
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1 pr-2">Campaign Period</div>
          <div class="flex-auto w-64 title-2 pr-2">
            {{ $moment(detailCampaign.startDate).format('DD/MM/YYYY') }} to
            {{ $moment(detailCampaign.endDate).format('DD/MM/YYYY') }}
          </div>
          <div class="flex-auto w-32 title-1 pl-4" />
          <div class="flex-auto w-32 title-2 pl-4" />
        </div>
      </div>
    </div>
    <!-- placement list  -->
    <div class="placement-card">
      <div class="header-card flex justify-between items-center">
        <div class="flex items-center justify-center">
          <div class="title-1">Placement</div>
          <div class="status-filter flex items-center">
            <div
              class="flex items-center justify-center card-filter"
              @click="statusActive('all')"
            >
              <div
                class="name-status"
                :style="
                  activeStatus === 'all'
                    ? 'font-weight:500;color: #0056DE;'
                    : ''
                "
              >
                All
              </div>
            </div>
            <div class="hr-vertical2" />
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
          </div>
        </div>

        <div class="flex items-center">
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
                  @submit.prevent="searchPlacement()"
                >
                  <input
                    v-model="dataSearch"
                    type="text"
                    class="title-1"
                    placeholder="Find something.."
                    @change="searchPlacement()"
                  />
                </form>
                <IconSearch @click.native="searchPlacement()" />
              </div>
            </transition>
          </div>
          <div class="hr-vertical" />
          <div
            class="flex items-center justify-between btn-edit no-select"
            @click="newPlacement()"
          >
            <IconPlus class="icon-btn" bg-color="#1B63D4" />
            <span class="name-btn">Create Placement</span>
          </div>
        </div>
      </div>
      <el-table
        v-loading="isLoading2"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        lazy
        stripe
        :data="dataPlacement"
        class="k-table"
        :style="
          sidebar
            ? 'width:calc(' + width + 'px - 128px)'
            : 'width:calc(' + width + 'px - 310px)'
        "
      >
        <template slot="empty">
          <div class="flex flex-col items-center mt-6 no-data">
            <img src="~/assets/images/empty_table.png" width="150" />
            <div class="title-1">No records found.</div>
            <div class="subtitle-1">
              Seems like you haven’t created any placement list yet. Create one
              now?
            </div>
          </div>
        </template>
        <el-table-column
          label="Placement Name"
          prop="name"
          sortable
          width="300"
        >
          <template slot-scope="scope">
            <el-tooltip :open-delay="1000" placement="top-end">
              <div slot="content" class="title-1">
                {{ scope.row.name }}
              </div>

              <div
                class="title-1 cursor-pointer ellipsis-2line"
                @click="toDetail(scope.row.id)"
              >
                {{ scope.row.name }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="Status"
          prop="status"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <div
              v-if="scope.row.status === 'running'"
              class="status-card flex items-center justify-center no-select"
            >
              Running
            </div>
            <div
              v-if="scope.row.status === 'inactive'"
              class="status-card flex items-center justify-center no-select"
              style="background: #fff3dd; color: #fbab18"
            >
              Inactive
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Placement Period" prop="startDate" width="200">
          <template slot-scope="scope">
            <div class="title-2">
              <span style="font-weight: 400; font-size: 14px; color: #454545">
                Start
              </span>
              :
              {{ $moment(scope.row.startDate).format('DD / MM / YYYY HH:mm') }}
            </div>
            <div class="title-2">
              <span style="font-weight: 400; font-size: 14px; color: #454545">
                End
              </span>
              :
              {{ $moment(scope.row.endDate).format('DD / MM / YYYY HH:mm') }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Updated On" prop="updatedAt">
          <template slot-scope="scope">
            <div class="title-1">
              {{ $moment(scope.row.updatedAt).format('DD/MM/YYYY') }}
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
            </div>
            <div v-else class="view-text">0</div>
          </template>
        </el-table-column>
        <el-table-column label="Click" header-align="center" align="center">
          <template slot-scope="scope">
            <div
              v-if="Object.keys(scope.row.analytics).length !== 0"
              class="view-text"
            >
              {{ Number(scope.row.analytics.click).toLocaleString() }}
            </div>
            <div v-else class="view-text">0</div>
          </template>
        </el-table-column>
        <el-table-column label="CTR">
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
        <el-table-column label="Progress">
          <template slot-scope="scope">
            <ProgressBar :value="scope.row.progress" />
          </template>
        </el-table-column>
        <el-table-column
          label=""
          header-align="center"
          align="center"
          width="100"
        >
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <div class="flex items-center justify-center btn-action">
                  <img src="~/assets/images/campaign/icon_action.svg" />
                </div>
              </span>
              <el-dropdown-menu slot="dropdown" width="200">
                <el-dropdown-item>
                  <div
                    class="dropdown-action flex items-center no-select"
                    @click="toEdit2(scope.row.id)"
                  >
                    <img
                      src="~/assets/images/icon/edit.svg"
                      class="icon-item"
                    />
                    Edit
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div
                    class="dropdown-action flex items-center no-select"
                    @click="openDuplicateDialog(scope.row)"
                  >
                    <img
                      src="~/assets/images/icon/duplicate.svg"
                      class="icon-item"
                    />
                    Duplicate
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div
                    class="dropdown-action flex items-center no-select"
                    @click="openScriptDialog(scope.row)"
                  >
                    <img
                      src="~/assets/images/icon/script.svg"
                      class="icon-item"
                    />
                    Get Script
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div
                    class="dropdown-action flex items-center no-select"
                    @click="openDeletePlacement(scope.row)"
                  >
                    <img
                      src="~/assets/images/icon/delete.svg"
                      class="icon-item"
                    />
                    Delete
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalPlacement"
        @input="
          (page) => {
            $store.commit('user/SET_DROPDOWN', null)
            changePage(page)
          }
        "
        @rowPage="
          (size) => {
            $store.commit('user/SET_DROPDOWN', null)
            changeRowPage(size)
          }
        "
      />
    </div>

    <el-dialog :visible.sync="dialogDelete" width="600px" :show-close="false">
      <div class="card-dialog">
        <div class="content-popup flex flex-col">
          <div
            class="flex items-center justify-between"
            style="margin-bottom: 14px"
          >
            <div class="title-popup2">Disable Placement?</div>
            <img
              src="~/assets/images/icon/delete_color.svg"
              class="icon-item"
            />
          </div>
          <div class="title-popup">
            Are you sure want to disable
            <b>{{ dataCampaign.name }}</b> campaign?
          </div>
          <div class="footer-card grid grid-cols-2 gap-4 place-content-stretch">
            <button
              class="flex items-center justify-center cancel-btn2 no-select"
              @click="closeDialog()"
            >
              <span class="name-btn no-select">Cancel</span>
            </button>
            <button
              class="flex items-center justify-center save-btn2 no-select"
              @click="deletePlacement(dataCampaign.id)"
            >
              <IconCompleted bg-color="white" class="mr-2 pl-1" />
              <span class="name-btn no-select">Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogScript" width="600px" :show-close="false">
      <div class="card-dialog">
        <div
          class="content-popup flex flex-col"
          style="padding-left: 0px; padding-right: 0px"
        >
          <div
            class="flex items-center justify-between"
            style="margin-bottom: 14px"
          >
            <div class="title-popup2">Generated Script</div>
            <img src="~/assets/images/icon/script_big.svg" class="icon-item" />
          </div>
          <div class="title-popup">
            Use this auto generated script below to be used in external services
            like Google Ad Manager
          </div>
          <div class="script-body">
            <div class="script-main">
              <span>{{ dataScript }}</span>
            </div>
          </div>
          <div class="footer-card grid grid-cols-2 gap-4 place-content-stretch">
            <button
              class="flex items-center justify-center cancel-btn no-select"
              @click="closeDialog()"
            >
              <span class="name-btn no-select">Cancel</span>
            </button>
            <button
              class="flex items-center justify-center save-btn no-select"
              @click="copyScript()"
            >
              <img
                src="~/assets/images/icon/duplicate_white.svg"
                class="mr-2 pl-1"
              />
              <span class="name-btn no-select">Copy to clipboard</span>
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="editCampaign" width="700px" :show-close="false">
      <div class="card-dialog">
        <div class="title-dialog">Your campaign has been edited.</div>
        <div class="data-dialog">
          We pause the campaign while you edit it. To start again, click “Start”
          button.
        </div>
        <div
          class="check-btn flex items-center justify-center"
          @click="closeCampaign()"
        >
          <IconCheck style="margin-right: 10px" />Confirm
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogDuplicate"
      width="600px"
      :show-close="false"
    >
      <div class="card-dialog">
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
            How many duplicate of <b>{{ dataCampaign.name }}</b> campaign do you
            want?
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
          <div class="footer-card grid grid-cols-2 gap-4 place-content-stretch">
            <button
              class="flex items-center justify-center cancel-btn no-select"
              @click="closeDialog()"
            >
              <span class="name-btn no-select">Cancel</span>
            </button>
            <button
              class="flex items-center justify-center save-btn no-select"
              @click="duplicatePlacement(dataCampaign.id)"
            >
              <IconCompleted bg-color="white" class="mr-2 pl-1" />
              <span class="name-btn no-select">Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DetailCampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Detail - Campaign - ' + this.$config.appName,
    }
  },
  data() {
    return {
      dialogVisible: true,
      dataCampaign: {
        name: '',
        id: '',
      },
      dataScript: '',
      countDuplicate: 1,
      dialogDuplicate: false,
      dialogScript: false,
      dialogDelete: false,
      showDialog: null,
      showSearch: false,
      dataSearch: '',
      isActive: true,
      activeStatus: 'all',
      currentPage: 1,
      per_page: 10,
      status: true,
      selectDate: '04-July-2022',
      series: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      chartOptions2: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 1, 4],
        },
        xaxis: {
          categories: [],
        },
        yaxis: [
          {
            showAlways: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB',
            },
            labels: {
              style: {
                colors: '#008FFB',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            show: false,
          },
          {
            show: false,
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB',
            },
            labels: {
              style: {
                colors: '#008FFB',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40,
        },
      },
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        curve: 'smooth',
        dataLabels: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
        stroke: {
          width: [1, 1, 1, 4],
        },
        colors: ['#1B63D4', '#FBAB18', '#84AD64', '#372B2B'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
        },
      },
      status2: 'delivering',
      tableData: [
        {
          date: '2016-05-03',
        },
        {
          date: '2016-05-03',
        },
        {
          date: '2016-05-03',
        },
        {
          date: '2016-05-03',
        },
        {
          date: '2016-05-03',
        },
        {
          date: '2016-05-03',
        },
      ],
      id: 0,
      options: [
        {
          value: 'last12h',
          label: 'Last 12 Hour',
        },
        {
          value: 'last24h',
          label: 'Last 24 Hour',
        },
        {
          value: 'last48h',
          label: 'Last 48 Hour',
        },
        {
          value: 'last7d',
          label: 'Last 7 Day',
        },
        {
          value: 'last30d',
          label: 'Last 30 Day',
        },
      ],
      value: 'last12h',
      dataChart: 0,
      rowPage: 10,
      width: 0,
      isLoading: false,
      isLoadingPlacement: false,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      editCampaign: (state) => {
        return state.campaign.editCampaign
      },
      detailCampaign: (state) => {
        return state.campaign.detailCampaign
      },
      dataPerformance: (state) => {
        return state.campaign.dataPerformance
      },
      isLoading2: (state) => {
        return state.placement.isLoading
      },
      dataPlacement: (state) => {
        return state.placement.dataPlacement
      },
      totalPlacement: (state) => {
        return state.placement.totalPlacement
      },
      totalPages: (state) => {
        return state.placement.totalPages
      },
      detailCampaign_ads_name: (state) => {
        return state.campaign.detailCampaign_ads_name
      },
      detailCampaign_type_name: (state) => {
        return state.campaign.detailCampaign_type_name
      },
      dataSummary: (state) => {
        return state.campaign.dataSummary
      },
    }),
  },
  created() {
    this.isLoading = true
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    this.getAll()
  },
  methods: {
    closeCampaign() {
      this.$store.commit('campaign/SET_EDIT_CAMPAIGN', false)
    },
    async copyScript() {
      try {
        await navigator.clipboard.writeText(this.dataScript)
        this.$notifier.showMessage({
          content: 'Script has been copied to your clipboard',
          type: 'success',
        })
      } catch ($e) {
        this.$notifier.showMessage({
          content: 'Cannot copy',
          type: 'failed',
        })
      }
    },
    handleResize() {
      this.width = window.innerWidth - 100
      this.isLoading = false
    },
    changePage(s) {
      if (s > 0) {
        this.currentPage = s
        this.getPlacement()
      }
    },
    changeRowPage(p) {
      this.rowPage = p
      this.currentPage = 1
      this.getData()
    },
    openDeletePlacement(data) {
      this.dataCampaign = data
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
    closeDialog() {
      this.dataCampaign = {
        name: null,
        id: null,
      }
      this.dialogDuplicate = false
      this.dialogDelete = false
      this.dialogScript = false
    },
    openDuplicateDialog(data) {
      this.dataCampaign = data
      this.dialogDuplicate = true
    },
    openScriptDialog(data) {
      this.getScript(data.id)
    },
    getScript(id) {
      this.isLoadingPlacement = true
      this.$store
        .dispatch('placement/getScript', {
          id,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res?.data.data.length === 0) {
              this.dataScript = ''
              this.dialogScript = true
            } else {
              this.dataScript = res?.data.data[0].script
              this.dialogScript = true
            }
          } else {
            this.$notifier.showMessage({
              content: res?.data.data.message,
              type: 'failed',
            })
          }
        })
        .catch(() => {
          this.dialogScript = false
        })
    },
    duplicatePlacement(id) {
      const data = {
        id,
        count: this.countDuplicate,
      }
      this.$notifier.showMessage({
        content: 'Duplicating placement...',
        type: 'loading',
      })
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('placement/duplicate', data)
            .then((res) => {
              if (res.status === 200) {
                this.getAll()
                this.$store.commit('campaign/SET_EDIT_CAMPAIGN', true)
                this.$notifier.showMessage({
                  content: 'Placement duplicated successfully.',
                  type: 'success',
                })
                this.dataCampaign = {
                  name: null,
                  id: null,
                }
                this.dialogDuplicate = false
                this.countDuplicate = 1
                clearInterval(sto)
              } else {
                this.dataCampaign = {
                  name: null,
                  id: null,
                }
                this.dialogDuplicate = false
                this.countDuplicate = 1
                this.$notifier.showMessage({
                  content:
                    'Duplicate placement failed. Error : ' +
                    res?.data.data.message,
                  type: 'failed',
                })
                this.showMessage = true
                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                clearInterval(sto)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
      document.querySelector('body').style.overflow = ''
    },
    deletePlacement(id) {
      const data = {
        id,
      }
      this.$notifier.showMessage({
        content: 'Deleting placement...',
        type: 'loading',
      })
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('placement/delete', data)
            .then((res) => {
              if (res.status === 204) {
                this.dialogDelete = false
                this.getAll()
                this.$store.commit('campaign/SET_EDIT_CAMPAIGN', true)
                this.$notifier.showMessage({
                  content: 'Placement deleted successfully.',
                  type: 'success',
                })
                clearInterval(sto)
              } else {
                this.dialogDelete = false
                this.showMessage = true
                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content:
                    'Failed to delete campaign. Error: ' +
                    res?.data.data.message,
                  type: 'failed',
                })
                clearInterval(sto)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
      document.querySelector('body').style.overflow = ''
    },
    dialogAction(id) {
      if (this.showDialog !== id) {
        this.showDialog = id
      } else {
        this.showDialog = null
      }
    },
    searchPlacement() {
      this.currentPage = 1
      this.showSearch = false
      this.getPlacement()
    },
    changeActive() {
      if (this.detailCampaign.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
      const data = {
        id: this.$route.params.index,
        isActive: this.isActive,
      }

      this.$notifier.showMessage({
        content: 'Changing status campaign...',
        type: 'loading',
      })
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('campaign/changeStatus', data)
            .then((res) => {
              if (res.status === 200) {
                if (!res?.data.data.isActive) {
                  this.$notifier.showMessage({
                    content: 'Campaign status enabled.',
                    type: 'success',
                  })
                } else {
                  this.$notifier.showMessage({
                    content: 'Campaign status Disable.',
                    type: 'success',
                  })
                }
                clearInterval(sto)
              } else {
                this.$notifier.showMessage({
                  content:
                    'Change campaign failed. Error : ' + res?.data.data.message,
                  type: 'failed',
                })
                this.showMessage = true
                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                clearInterval(sto)
              }
              this.getAll()
            })
            .catch(() => {}),
        1000
      )
    },
    getAll() {
      this.getDetail()
      this.getPerformance()
      this.getPlacement()
      this.getSummary()
    },
    filterSelect() {
      this.getSummary()
      this.getPerformance()
    },
    getDetail() {
      this.$store
        .dispatch('campaign/getDetail', {
          campaignTypeId: this.$route.params.index,
        })
        .then(() => {})
        .catch(() => {})
    },
    getPerformance() {
      const data = {
        campaignTypeId: this.$route.params.index,
        range: this.value,
      }
      this.$store
        .dispatch('campaign/getPerformance', data)
        .then((res) => {
          this.data1 = []
          this.data2 = []
          this.data3 = []
          this.data4 = []
          const data = res?.data.data
          this.dataChart = data.length

          if (this.value === 'last12h') {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(this.$moment(data[i].ts).format('DD MMM - hh:mm'))
            }
            this.chartOptions2 = {
              ...this.chartOptions2,
              xaxis: {
                categories: this.data1,
              },
            }
          }
          if (this.value === 'last24h') {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(this.$moment(data[i].ts).format('DD MMM - hh:mm'))
            }
            this.chartOptions2 = {
              ...this.chartOptions2,
              xaxis: {
                categories: this.data1,
              },
            }
          }
          if (this.value !== 'last12h' && this.value !== 'last24h') {
            for (let i = 0; i < data.length; i++) {
              this.data1.push(this.$moment(data[i].ts).format('DD MMM'))
            }
            this.chartOptions2 = {
              ...this.chartOptions2,
              xaxis: {
                categories: this.data1,
              },
            }
          }

          this.series = [
            {
              name: 'impression',
              type: 'column',
              data: [],
            },
            {
              name: 'click',
              type: 'column',
              data: [],
            },
            // {
            //   name: 'complete',
            //   type: 'column',
            //   data: []
            // },
            {
              name: 'ctr',
              type: 'line',
              data: [],
            },
          ]
          for (let i = 0; i < data.length; i++) {
            this.series[0].data.push(parseInt(data[i].impression).toFixed(2))
            this.series[1].data.push(parseInt(data[i].click).toFixed(2))
            // this.series[2].data.push(parseInt(data[i].complete).toFixed(2))
            this.series[2].data.push(parseInt(data[i].ctr).toFixed(2))
          }
        })
        .catch(() => {})
    },
    getPlacement() {
      this.isLoadingPlacement = true
      const data = {
        status: this.activeStatus,
        page: this.currentPage,
        size: this.rowPage,
        id: this.$route.params.index,
        name: this.dataSearch,
      }
      this.$store
        .dispatch('placement/getList', data)
        .then(() => {
          this.isLoadingPlacement = false
        })
        .catch(() => {
          this.isLoadingPlacement = false
        })
    },
    getSummary() {
      const data = {
        campaignTypeId: this.$route.params.index,
        range: this.value,
      }
      this.$store
        .dispatch('campaign/getSummary', data)
        .then(() => {})
        .catch(() => {})
    },

    statusActive(x) {
      this.activeStatus = x
      this.currentPage = 1
      this.getPlacement()
    },
    updateAxis(data) {
      this.chartOptions2 = {
        ...this.chartOptions2,
        xaxis: {
          categories: data,
        },
      }
    },
    newPlacement() {
      this.$router.push({
        path: `/placement/campaign/detail/${this.$route.params.index}/placement/create`,
      })
    },
    toEdit() {
      const route = this.$router.resolve({
        path: `/placement/campaign/detail/edit/${this.$route.params.index}`,
      })
      window.open(route.href)
    },
    changeStatus() {
      this.status = !this.status
    },
    toDetail(x) {
      const route = this.$router.resolve({
        path: `/placement/campaign/detail/${this.$route.params.index}/placement/${x}`,
      })
      window.open(route.href)
    },
    toEdit2(x) {
      const route = this.$router.resolve({
        path: `/placement/campaign/detail/${this.$route.params.index}/placement/edit/${x}`,
      })
      window.open(route.href)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-dialog {
  .content-popup {
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
    .script-body {
      margin-top: 20px;
      border-top: 1px solid #c3ced9;
      border-bottom: 1px solid #c3ced9;
      padding: 20px 0px 20px 0px;
      .script-main {
        overflow-wrap: break-word;
        height: 150px;
        overflow-y: scroll;
        background: #2b3947;
        border: 1px solid #2b3947;
        border-radius: 5px;
        padding: 10px;
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
      }
      .script-main::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
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
  .title-dialog {
    color: #5c6b7a;
    font-family: 'Cabin';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 35px;
  }
  .data-dialog {
    color: #5c6b7a;
    font-family: 'Cabin';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
  }
  .check-btn {
    width: 100%;
    background: #1b63d4;
    border: 1px solid #1b63d4;
    color: #ffffff;
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    font-family: 'Cabin';
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
  .check-btn:hover {
    background-color: #053f67;
    border: 0px;
  }
}
::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #e2e2e2;
  -webkit-border-radius: 7px;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
:root {
  --vs-line-height: 1.75;
}
:deep() {
  --vs-line-height: 1.75;
}

.btn-action {
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c3ced9;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
.dropdown-action {
  width: 180px;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #1b63d4;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  .icon-item {
    margin-right: 13px;
  }
}
.k-container {
  padding: 20px;
  .header-content {
    margin-bottom: 20px;
    .btn-create {
      max-width: 190px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 34px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 12px;
      }
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 1px solid rgb(243 244 246);
    }
    .set-campaign {
      .hr-vertical {
        height: 24px;
        border-right: 1px solid #c3ced9;
        margin-left: 10px;
        margin-right: 10px;
      }

      .btn-edit {
        max-width: 190px;
        background: #ffffff;
        border: 1px solid #1b63d4;
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
          color: #1b63d4;
          padding-left: 15px;
        }
      }
      .btn-edit:hover {
        background-color: rgb(243 244 246);
        border: 1px solid rgb(243 244 246);
      }
      .label-date {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #5c6b7a;
        margin-right: 20px;
      }
      .btn-status-campaign {
        width: 110px;
        height: 40px;
        background: #1b63d4;
        border: 1px solid #0056de;
        border-radius: 5px;
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .title-campaign {
      margin-top: 5px;
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 28px;
      color: #5c6b7a;
    }
  }
  .performance-card {
    .header-card {
      margin-bottom: 20px;
      .title-1 {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 18px;
        color: #454545;
      }
      .label-date {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 15px;
      }
    }
    .chart-card {
      background-color: white;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      height: 100%;
      padding: 10px 10px 0px 10px;
      margin-bottom: 20px;
      position: relative;
      .no-data {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 0px;
        background: transparent;
        border-radius: 10px;
        height: 375px;
        width: 100%;
        .img-empty {
          margin-left: auto;
          margin-right: auto;
        }
        .chart-empty {
          min-width: 55%;
          .title-empty {
            font-family: 'Cabin';
            font-weight: 600;
            font-size: 16px;
            color: #454545;
            margin-bottom: 5px;
          }
          .subtitle-empty {
            font-family: 'Cabin';
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 20px;
            color: #757575;
          }

          .btn-edit {
            max-width: 190px;
            background: #ffffff;
            border: 1px solid #e2e2e2;
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
              color: #1b63d4;
              padding-left: 15px;
            }
          }
          .btn-edit:hover {
            background-color: rgb(243 244 246);
            border: 1px solid rgb(243 244 246);
          }
        }
      }
    }
  }
  .card-content {
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 15px 0px 0px 0px;
    .header-card {
      padding-left: 20px;
      padding-right: 20px;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 15px;
      .title {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 20px;
        color: #333333;
        margin-right: 10px;
      }
      .label-date {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 15px;
      }

      .switch-bg {
        width: 45px;
        height: 24px;
        padding-left: 1px;
        background-color: #8f919b;
      }
      .switch-btn {
        width: 22px;
        height: 22px;
      }
      .color-default {
        background-color: #1b63d4;
      }
      .btn-edit {
        max-width: 190px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
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
          color: #1b63d4;
          padding-left: 15px;
        }
      }
      .btn-edit:hover {
        background-color: rgb(243 244 246);
        border: 1px solid rgb(243 244 246);
      }
    }
    .body-card {
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      .list-campaign {
        margin-bottom: 20px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 16px;
          color: #454545;
        }
        .title-2 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 16px;
          color: #9a9a9a;
        }
        .desc {
          word-break: break-all;
          max-height: 90px;
          overflow-x: hidden;
          overflow-y: scroll;
        }
      }
    }
  }
  .summary-card {
    width: 100%;
    height: 135px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 20px;
    .title-summary {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #757575;
    }
    .subtitle-summary {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 12px;
      color: #757575;
    }
    .value-summary {
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 32px;
      color: #454545;
    }
    .video-ads {
      position: absolute;
    }
  }
  .placement-card {
    margin-top: 20px;
    .header-card {
      margin-bottom: 20px;
      .title-1 {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 18px;
        color: #454545;
      }
      .label-date {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 15px;
      }
      .btn-edit {
        max-width: 190px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
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
          color: #1b63d4;
          padding-left: 15px;
        }
      }
      .btn-edit:hover {
        background-color: rgb(243 244 246);
        border: 1px solid rgb(243 244 246);
      }

      .status-filter {
        height: 44px;
        background: #ffffff;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        margin-left: 15px;
        padding-left: 8px;
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
            // margin-left: 10px;
            line-height: 40px;
          }
        }
        .hr-vertical2 {
          height: 24px;
          border-right: 1px solid #e2e2e2;
          margin-left: 10px;
          margin-right: 5px;
        }
      }
      .search-card {
        margin-right: 15px;
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
      .hr-vertical {
        height: 24px;
        border-right: 1px solid #e2e2e2;
        margin-right: 15px;
      }
    }
    .k-table {
      border: 1px solid #c3ced9 !important;
      border-radius: 10px !important;
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
      .title-1 {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #5c6b7a;
      }
      .ellipsis-2line {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .ellipsis-2line:hover {
        color: #1b63d4;
      }
      .title-2 {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
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
        // width: 120px;
      }
      .btn-icon {
        font-family: 'Cabin';
        height: 40px;
        width: 100px;
        background: #ffffff;
        border: 1px solid #1b63d4;
        border-radius: 5px;
        color: #1b63d4;
        font-weight: 700;
        font-size: 14px;
      }
      .progress-card {
        width: 70px;
        height: 32px;
        position: relative;
        .bg-progress {
          position: absolute;
          top: 4px;
          background: #7bbc49;
          border: 1px solid #00786a;
          border-radius: 2px;
          width: 71px;
          height: 24px;
        }
        .item-progress {
          width: 2px;
          height: 32px;
          background: #454545;
          position: absolute;
          top: 0px;
          left: 100%;
        }
      }
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
