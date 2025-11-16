<template>
  <div v-if="!isLoading" class="k-container">
    <!-- header -->
    <div class="header-content">
      <div class="flex items-center justify-between">
        <ButtonBackPage
          text="Back to Campaign Details"
          @click.native="back()"
        />
        <div
          class="flex items-center justify-between btn-edit no-select"
          @click="editPlacement()"
        >
          <IconEdit />
          <span class="name-btn">Edit Placement</span>
        </div>
      </div>
      <CardStatus :text="dataPlacement2.status" class="card-status-placement" />
      <div class="title-placement">
        {{ dataPlacement2.name }}
      </div>
    </div>

    <!-- Campaign Performance Pacing -->
    <div class="performance-card">
      <div class="header-card flex justify-between items-center">
        <div class="title-1">Placement Performance</div>
        <div class="flex items-center">
          <div class="label-date">Campaign Period</div>
          <el-select v-model="value" @change="getPerformance()">
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
    <!-- campaign details -->
    <div class="kg-card">
      <div class="header-card flex items-center">
        <div class="title-card">Basic Info</div>
      </div>
      <div class="body-card">
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1">Placement Name</div>
          <div class="flex-auto w-64 title-1">
            {{ dataPlacement2.name }}
          </div>
          <div class="flex-auto w-32 title-1" />
          <div class="flex-auto w-32 title-2" />
        </div>
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1">Daily Limit</div>
          <div class="flex-auto w-64 title-1">
            {{ Number(dailyValue).toLocaleString() }} <b>{{ dailyName }}</b>
          </div>
          <div class="flex-auto w-32 title-1" />
          <div class="flex-auto w-32 title-2" />
        </div>
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1">Book Impression</div>
          <div class="flex-auto w-64 title-1">
            {{ Number(bookImpression).toLocaleString() }}
          </div>
          <div class="flex-auto w-32 title-1" />
          <div class="flex-auto w-32 title-2" />
        </div>
        <div class="flex list-campaign">
          <div class="flex-auto w-32 title-1">Priority</div>
          <div class="flex-auto w-64 title-1">
            {{ dataPriority }}
          </div>
          <div class="flex-auto w-32 title-1" />
          <div class="flex-auto w-32 title-2" />
        </div>
        <div class="cpm-dimension">
          <div class="flex" style="margin-bottom: 15px">
            <div class="title-form flex-auto w-32">Dimension</div>
            <div class="flex-auto w-64">
              {{ data.resolusi }}
            </div>
            <div class="flex-auto w-32 title-1" />
            <div class="flex-auto w-32 title-2" />
          </div>
          <div class="flex">
            <div class="title-form flex-auto w-32">CPM</div>
            <div class="flex-auto w-64">
              {{ data.cpm }}
              <span v-if="data.isActive">with dynamic bidding</span
              ><span v-else>without dynamic bidding</span>
            </div>
            <div class="flex-auto w-32 title-1" />
            <div class="flex-auto w-32 title-2" />
          </div>
        </div>
      </div>
    </div>
    <!-- Inventory -->
    <div class="kg-card mt-6" style="padding-bottom: 0px">
      <div class="header-card pb-0 flex items-center justify-between">
        <div class="title-card" style="font-size: 20px; font-family: 'Cabin'">
          Inventory
        </div>
        <div class="flex items-center">
          <IconArrowDown
            v-if="!show_1"
            class="icon-arrow cursor-pointer no-select"
            @click.native="show_1 = !show_1"
          />
          <IconArrowUp
            v-else
            class="icon-arrow cursor-pointer no-select"
            @click.native="show_1 = !show_1"
          />
        </div>
      </div>
      <div v-if="show_1" class="body-card-2">
        <div
          v-if="dataInventory.length === 0"
          class="flex flex-col items-center justify-center h-full"
          style="padding-top: 20px; padding-bottom: 20px"
        >
          <div class="creative-1 mt-2">No Inventory Assigned</div>
          <div class="creative-2">
            Assign some inventory for creative to be shown.
          </div>
        </div>
        <div
          v-else
          class="flex flex-col h-full container-assigned"
          style="height: 100%"
        >
          <div
            v-for="(item, index) in dataInventory"
            :key="index"
            class="card-assigned flex items-center justify-between"
          >
            <div class="flex flex-col">
              <div class="title-creative">
                {{ item.name }}
              </div>
              <div class="size-creative flex items-center">
                <img class="mr-2" src="~/assets/images/globe.svg" />
                {{ item.publisher.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Assigned Creative -->
    <div class="kg-card mt-6" style="padding-bottom: 0px">
      <div class="header-card flex items-center justify-between">
        <div class="title-card" style="font-size: 20px; font-family: 'Cabin'">
          Assigned Creative
        </div>
        <div class="flex items-center">
          <IconArrowDown
            v-if="!show_2"
            class="icon-arrow cursor-pointer no-select"
            @click.native="show_2 = !show_2"
          />
          <IconArrowUp
            v-else
            class="icon-arrow cursor-pointer no-select"
            @click.native="show_2 = !show_2"
          />
        </div>
      </div>
      <div v-if="show_2" class="body-card-2">
        <div
          v-if="selected.length === 0"
          class="flex flex-col items-center justify-center h-full"
          style="padding-top: 20px; padding-bottom: 20px"
        >
          <div class="creative-1 mt-2">No Creative Assigned</div>
          <div class="creative-2">
            Assign some creatives you’ve made to this placement.
          </div>
        </div>
        <div
          v-else
          class="flex flex-col h-full container-assigned"
          style="height: 100%"
        >
          <div
            v-for="(item, index) in selectedData"
            :key="index"
            class="card-assigned flex items-center justify-between"
          >
            <div class="flex flex-col">
              <div class="title-creative">
                {{ item.name }}
              </div>
              <div class="size-creative flex items-center">
                <img class="mr-2" src="~/assets/images/Vector.svg" />
                {{ item.template.name }}
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="btn-delete flex items-center justify-center cursor-pointer"
                @click="detailCreative(item.id)"
              >
                <IconEyes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- audience -->
    <div class="kg-card mt-6" style="padding: 0px">
      <div
        class="header-card pb-0 flex items-center justify-between"
        style="padding-top: 15px; padding-bottom: 15px"
      >
        <div class="title-card" style="font-size: 20px; margin-bottom: 0px">
          Audience
        </div>
        <IconArrowDown
          v-if="!show4"
          class="icon-arrow cursor-pointer no-select"
          style="margin-top: 8px"
          @click.native="show4 = !show4"
        />
        <IconArrowUp
          v-else
          class="icon-arrow cursor-pointer no-select"
          style="margin-top: 8px"
          @click.native="show4 = !show4"
        />
      </div>
      <div
        v-if="show4"
        class="body-card"
        style="background: #fafafa; margin-top: 0px; padding: 20px"
      >
        <div
          v-if="selectedData2.length === 0"
          class="flex flex-col items-center justify-center h-full"
          style="padding-top: 20px; padding-bottom: 20px"
        >
          <div class="creative-1 mt-2">
            No Specific Target Audience Selected
          </div>
          <div class="creative-2">
            Your ads will be shown to all audience type
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <span v-for="(item, index) in selectedData2" :key="index">
            <div class="card-creative flex justify-strecth cursor-pointer">
              <img
                crossorigin="anonymous"
                :src="$config.baseURL + 'obs?fileKey=' + item.thumbnail"
                class="img-content"
              />
              <div class="flex flex-col justify-center data-content w-3/4">
                <div class="title-creative">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DetailCampaignPage',
  layout: 'default',
  data() {
    return {
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
      width: 0,
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
          value: 'all',
          label: 'All Time',
        },
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
      value: 'all',
      campaignId: '',
      placementId: '',
      show_1: true,
      show_2: true,
      show_3: true,
      show4: true,
      creative: {},
      bookImpression: null,
      selected: [],
      selectedData: [],
      dataInventory: {},
      dataPriority: {},
      dailyValue: {},
      dailyName: {},
      selected2: [],
      selectedData2: [],
      dataChart: 0,
      data: {
        cpm: 0,
        isActive: false,
        resolusi: '',
      },
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      detailCampaign: (state) => {
        return state.campaign.detailCampaign
      },
      dataPerformance: (state) => {
        return state.campaign.dataPerformance
      },
      dataPlacement: (state) => {
        return state.placement.dataPlacement
      },
      dataPlacement2: (state) => {
        return state.placement.dataPlacement2
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
      detailPlacement: (state) => {
        return state.placement.detailPlacement
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
    document.querySelector('body').style.overflow = 'auto'
    const str = this.$router.currentRoute.path
    const after_ = str.slice(
      str.indexOf('/detail/') + 1,
      str.lastIndexOf('/placement/')
    )
    const after2 = after_.substring(after_.indexOf('/') + 1)
    this.campaignId = after2
    this.placementId = this.$route.params.index
    this.getAll()
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
      this.isLoading = false
    },
    detailCreative(x) {
      const route = this.$router.resolve({ path: `/creative/detail/${x}` })
      window.open(route.href)
    },
    newPlacement() {
      this.$router.push({
        path: `/campaign/detail/${this.campaignId}/placement/create`,
      })
    },
    changeActive() {
      if (this.detailPlacement.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
      const data = {
        id: this.placementId,
        isActive: this.isActive,
      }

      this.$notifier.showMessage({
        content: 'Change status placement...',
        type: 'loading',
      })
      const x = setTimeout(
        () =>
          this.$store
            .dispatch('placement/changeStatus', data)
            .then((res) => {
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                if (!res.data.data.isActive) {
                  this.$notifier.showMessage({
                    content: 'Placement status Enabled.',
                    type: 'success',
                  })
                } else {
                  this.$notifier.showMessage({
                    content: 'Placement status Disable.',
                    type: 'success',
                  })
                }
                clearInterval(x)
              } else {
                this.$notifier.showMessage({
                  content:
                    'Change placement status failed. Error : ' +
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
    editPlacement() {
      const url =
        this.$router.currentRoute.path.slice(
          0,
          this.$router.currentRoute.path.indexOf('placement')
        ) +
        'placement/edit/' +
        this.placementId
      this.$router.push({
        path: url,
      })
    },
    getAll() {
      this.getDetail()
      this.getPerformance()
      this.getDetailPlacement()
    },
    getDetail() {
      const data = {
        campaignTypeId: this.campaignId,
      }
      this.$store
        .dispatch('campaign/getDetail', data)
        .then(() => {})
        .catch(() => {})
    },
    getPerformance() {
      const data = {
        id: this.$route.params.index,
        range: this.value,
      }
      this.$store
        .dispatch('placement/getPerformance', data)
        .then((res) => {
          this.data1 = []
          this.data2 = []
          this.data3 = []
          this.data4 = []
          const data = res.data.data
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
              color: '#775BE8',
              name: 'impression',
              type: 'column',
              data: [],
            },
            {
              color: '#1BD42D',
              name: 'book impression',
              type: 'column',
              data: [],
            },
            // {
            //   color: '#FBAB18',
            //   name: 'click',
            //   type: 'column',
            //   data: []
            // },
            // {
            //   color: '#B25BE8',
            //   name: 'complete',
            //   type: 'column',
            //   data: []
            // },
            {
              color: '#E23C82',
              name: 'ctr',
              type: 'line',
              data: [],
            },
          ]
          for (let i = 0; i < data.length; i++) {
            this.series[0].data.push(parseInt(data[i].impression).toFixed(2))
            this.series[1].data.push(parseInt(data[i].bookedImps).toFixed(2))
            // // // this.series[2].data.push(parseInt(data[i].complete).toFixed(2))
            // // // this.series[3].data.push(parseInt(data[i].click).toFixed(2))
            this.series[2].data.push(parseFloat(data[i].ctr).toFixed(2))
          }
        })
        .catch(() => {})
    },
    getDetailPlacement() {
      const data = {
        id: this.$route.params.index,
      }
      this.$store
        .dispatch('placement/getDetail', data)
        .then((res) => {
          const data = res.data.data
          this.data.cpm = data.delivery.cpm
          this.data.isActive = data.delivery.isDynamicBidding
          this.data.resolusi =
            data.delivery.resolution.width +
            'x' +
            data.delivery.resolution.height +
            ' - ' +
            ' ' +
            data.delivery.resolution.name
          this.selected = []
          this.selectedData = []
          if (
            data.placementCreatives.length > 0 ||
            data.placementCreatives !== null
          ) {
            for (let i = 0; i < data.placementCreatives.length; i++) {
              this.selected.push(data.placementCreatives[i].creative.id)
              this.selectedData.push(data.placementCreatives[i].creative)
            }
          }
          this.selected2 = []
          this.selectedData2 = []
          if (data.targeting !== null) {
            if (data.targeting.interests.length > 0) {
              for (let i = 0; i < data.targeting.interests.length; i++) {
                this.selected2.push(data.targeting.interests[i].id)
                this.selectedData2.push(data.targeting.interests[i])
              }
            }
            this.dataInventory = data.targeting.inventories
          }
          this.bookImpression = data.delivery.bookedImps
          this.dataPriority = data.delivery.priority.name
          this.dailyValue = data.delivery.deliveryDailyLimits.value
          this.dailyName = data.delivery.deliveryDailyLimits.type.name
        })
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
    back() {
      this.$router.push({ path: '/campaign/detail/' + this.campaignId })
    },
    changeStatus() {
      this.status = !this.status
    },
  },
}
</script>

<style lang="scss" scoped>
:root {
  --vs-line-height: 1.75;
}
:deep() {
  --vs-line-height: 1.75;
}
.k-container {
  font-family: 'Cabin';
  padding: 20px;
  .header-content {
    font-family: 'Cabin';
    margin-bottom: 20px;
    .card-status-placement {
      margin-top: 20px;
      margin-bottom: 14px;
    }
    .title-placement {
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 28px;
      color: #5c6b7a;
    }
    .btn-edit {
      font-family: 'Cabin';
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
  .performance-card {
    font-family: 'Cabin';
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
      font-family: 'Cabin';
      background-color: white;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      height: 100%;
      padding: 10px 10px 0px 10px;
      margin-bottom: 20px;
      position: relative;

      .no-data {
        font-family: 'Cabin';
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
          font-family: 'Cabin';
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
            font-family: 'Cabin';
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
            border: 0px;
          }
        }
      }
    }
  }
  .card-content {
    font-family: 'Cabin';
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 15px 0px 0px 0px;
    .header-card {
      font-family: 'Cabin';
      padding-left: 20px;
      padding-right: 20px;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 15px;

      .btn-edit {
        font-family: 'Cabin';
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
        border: 0px;
      }
      .title {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 24px;
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
        font-family: 'Cabin';
        width: 45px;
        height: 24px;
        padding-left: 1px;
        background-color: #8f919b;
      }
      .switch-btn {
        font-family: 'Cabin';
        width: 22px;
        height: 22px;
      }
      .color-default {
        background-color: #1b63d4;
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
      }
    }
  }
  .kg-card {
    padding: 10px 0px 10px 0px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    .header-card {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
      .title-card {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 20px;
        color: #2b3947;
        padding-left: 20px;
      }
      .title-action {
        font-family: 'Cabin';
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 14px;
        color: #454545;
        margin-left: 20px;
      }
      .icon-arrow {
        margin-right: 20px;
      }
    }
    .body-card {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
      .creative-1 {
        font-family: 'Cabin';
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
        color: #454545;
      }
      .creative-2 {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #757575;
        margin-bottom: 20px;
      }
      .list-campaign {
        margin-bottom: 15px;
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
      }
      .subtitle-card {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #5c6b7a;
        margin-bottom: 20px;
      }
      .cpm-dimension {
        width: 100%;
        height: 100%;
        background: #fafafa;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        margin-top: 20px;
        padding: 20px;
        .dynamic-bidding {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #5c6b7a;
        }
        .sub-input2 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #757575;
          margin-bottom: 15px;
        }
        .divider-vertical {
          width: 0px;
          height: 16px;
          border: 1px solid #c3ced9;
          margin-left: 8px;
        }
        .input-container {
          display: flex;
          width: 100%;
          margin-bottom: 5px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 5px;
        }

        .icon {
          // padding: 10px;
          background: transparent;
          min-width: 50px;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #5c6b7a;
          padding-left: 10px;
          margin-right: 10px;
        }
        .input-field {
          width: 100%;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #a1adb9;
          outline: none;
        }

        .input-field:focus {
          // border: 2px solid dodgerblue;
        }
      }
      .audience-title {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #757575;
      }

      .card-creative {
        width: 100%;
        min-height: 130px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 15px;
        .img-content {
          width: 100px;
          object-fit: cover;
          border-radius: 5px;
          max-height: 100px;
        }
        .data-content {
          padding-left: 20px;
          padding-right: 15px;
          .title-creative {
            font-family: 'Cabin';
            font-weight: 600;
            font-size: 18px;
            width: 100%;
            color: #454545;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size-creative {
            font-family: 'Cabin';
            font-weight: 400;
            font-size: 12px;
            color: #9a9a9a;
          }
        }
        .k-btn {
          width: 100%;
          height: 34px;
          background: #1b63d4;
          border: 1px solid #1b63d4;
          border-radius: 5px;
          margin-top: 10px;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
          }
        }
        .k-btn:hover {
          background-color: rgb(243 244 246);
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
      .show-search {
        margin-top: 20px;
        width: 100%;
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
        .title-search {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 100%;
        }
        .title-search:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .title-form {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .to-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 10px;
        margin-left: 10px;
      }
      .hr-vertical {
        border: 1px solid #e2e2e2;
        height: 45px;
        margin-right: 30px;
        margin-left: 30px;
      }
      .sub-input {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 12px;
        color: #757575;
      }
      .desc-inventory {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #757575;
        margin-bottom: 20px;
      }
      .fill-out {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        align-items: center;
        text-decoration-line: underline;
        color: #1b63d4;
        margin-bottom: 20px;
      }
      .select-title {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-bottom: 5px;
      }

      .save-btn {
        width: 100%;
        background: #1b63d4;
        border: 1px solid #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 34px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 10px;
        cursor: pointer;
        .name-btn {
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 1px;
          color: #ffffff;
          padding-left: 10px;
        }
      }
    }
    .body-card-2 {
      min-height: 100%;
      background: #fafafa;
      margin-top: 0px;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
      .creative-1 {
        font-family: 'Cabin';
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
        color: #454545;
      }
      .creative-2 {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #757575;
        margin-bottom: 20px;
      }
      .container-assigned {
        padding: 20px;
        .card-assigned {
          width: 100%;
          height: 66px;
          background: #ffffff;
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          margin-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
          .title-creative {
            font-family: 'Cabin';
            font-weight: 600;
            font-size: 18px;
            width: 100%;
            color: #454545;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size-creative {
            font-family: 'Cabin';
            font-weight: 400;
            font-size: 12px;
            color: #9a9a9a;
          }
          .btn-delete {
            width: 40px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
          }
          .btn-delete:hover {
            background-color: rgb(243 244 246);
          }
        }
      }
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
  }
  .title-3 {
    font-family: 'Cabin';
    font-weight: 600;
    font-size: 24px;
    color: #454545;
  }
  .hr-horizontal {
    font-family: 'Cabin';
    border: 1px solid #e2e2e2;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
