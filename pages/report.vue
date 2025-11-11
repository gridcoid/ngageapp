<template>
  <div class="kg-container">
    <div class="card-report flex items-center justify-between">
      <div class="title-filter">
        Campaign Performance
      </div>
      <div class="flex items-center">
        <el-select
          v-model="selectedCampaign"
          style="width: 300px;margin-right:15px;"
          placeholder="Choose Campaign"
        >
          <el-option
            v-for="item in dataCampaign"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="filter()"
        >
          <IconFilter bg-color="white" />
          <span class="name-btn">Filter Data</span>
        </button>
      </div>
    </div>
    <div class="card-report">
      <div class="title-summary">
        Marlboro Summary campaign performance
      </div>
      <div class="flex justify-between">
        <div class="left-side flex flex-col">
          <div class="title-v2">
            {{ detail.name }}
          </div>
          <div class="desc-v2">
            {{ detail.date }}
          </div>
          <div class="title-v2">
            Interests targeting :
          </div>
          <div class="desc-v2">
            {{ detail.targeting }}
          </div>
          <div class="title-v2">
            Creative Size :
          </div>
          <div class="desc-v2">
            {{ detail.creative }}
          </div>
        </div>
        <div class="right-side flex items-center flex-col">
          <div class="card-statistic flex items-center justify-center flex-col">
            <div class="title-v3">
              Impressions
            </div>
            <div class="value-v3">
              {{ detail.imp }}
            </div>
          </div>
          <div class="card-statistic flex items-center justify-center flex-col">
            <div class="title-v3">
              Clicks
            </div>
            <div class="value-v3">
              {{ detail.click }}
            </div>
          </div>
          <div class="card-statistic flex items-center justify-center flex-col">
            <div class="title-v3">
              CTR
            </div>
            <div class="value-v3">
              {{ detail.ctr }}
            </div>
          </div>
        </div>
      </div>
      <div class="title-v2">
        Audience Segment
      </div>
      <div class="audience-segment flex items-center justify-stretch">
        <div class="chart-container flex flex-col items-center ">
          <div class="title-chart">
            Top 20 Interest
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataSegment" :key="index" class="flex justify-stretch items-center mb-3">
              <div class="label-chart flex justify-end items-center" style="min-width: 200px;">
                {{ item.interest }}
              </div>
              <div class="value-chart" style="height: 21px;width:calc(100% - 200px)">
                <el-tooltip class="item" effect="dark" :content="item.interest + ' : ' + item.relative_percentage" placement="top">
                  <div class="item-chart cursor-pointer" :style="'width:' + item.relative_percentage" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-container flex flex-col items-center">
          <div class="title-chart">
            Audience Category
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataSegment" :key="index" class="flex items-center mb-3">
              <!-- <div class="flex"> -->
              <el-tooltip placement="top-end">
                <div slot="content">
                  {{ item.audience }}
                </div>

                <div
                  class="label-chart"
                  style="
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 200px;
                    "
                >
                  {{ item.audience }}
                </div>
              </el-tooltip>
              <div class="value-chart" style="height: 21px;width:calc(100% - 200px)">
                <div class="flex flex-row h-full" :style="'height: 100%;width:100%'">
                  <el-tooltip
                    v-for="(item2, index2) in item.sub"
                    :key="index2"
                    class="item"
                    effect="dark"
                    :content="item2.audience_category + ' : ' + item2.relative_percentage__1 + ' %'"
                    placement="top"
                  >
                    <div class="item-chart cursor-pointer" :style="'width:' +((item2.relative_percentage__1/239.28) * 100)+ '%;height:100%;'" />
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="title-v2 mt-4">
        Performance By Creative Versions
      </div>
      <div
        style="
      border: 1px solid #E2E2E2;
      border-radius: 10px;
      margin-top:20px;
      "
      >
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
          :style="sidebar ? 'width:calc(' + width + 'px - 200px)' : 'width:calc(' + width + 'px - 340px)'"
        />
        <div
          v-if="dataCreative === 0"
          class="no-data flex items-center justify-center"
        >
          No Data
        </div>
      </div>
    </div>
    <div class="card-report">
      <div class="title-summary">
        Online to Offline Data Mapping
      </div>
      <div class="flex justify-between">
        <div class="left-side flex flex-col">
          <div class="title-v2">
            Interests targeting :
          </div>
          <div class="desc-v2">
            None
          </div>
        </div>
      </div>
      <div class="audience-segment flex justify-stretch">
        <div class="chart-container flex flex-col">
          <div class="title-chart">
            Cities
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataOval.city" :key="index" class="flex justify-stretch items-center mb-3">
              <div class="label-chart flex justify-end items-center">
                {{ item.name }}
              </div>
              <div class="value-chart">
                <el-tooltip class="item" effect="dark" :content="item.name + ' : ' + item.value" placement="top">
                  <div class="item-chart cursor-pointer" :style="'width:' + item.value" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-container flex flex-col">
          <div class="title-chart">
            Occupations
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataOccupation" :key="index" class="flex justify-stretch items-center mb-3">
              <div class="label-chart flex justify-end items-center" style="width:220px;">
                {{ item.name }}
              </div>
              <div class="value-chart">
                <el-tooltip class="item" effect="dark" :content="item.name + ' : ' + item.value" placement="top">
                  <div class="item-chart cursor-pointer" :style="'width:' + item.value" style="background:#FBAB18;" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="audience-segment flex justify-stretch">
        <div class="chart-container flex flex-col ">
          <div class="title-chart">
            Hotel Stars Rating
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataOval.hotelStar" :key="index" class="flex justify-stretch items-center mb-3">
              <div class="label-chart flex justify-end items-center">
                <div v-for="i in parseInt(item.name)" :key="i" class="flex flex-row gap-2" style="padding-right:4px;">
                  <img src="~/assets/images/star.svg">
                </div>
              </div>
              <div class="value-chart">
                <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                  <div class="item-chart cursor-pointer" :style="'width:' + item.value" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-container flex flex-col ">
          <div class="title-chart">
            Book Interest
          </div>
          <div class="mt-5 w-full">
            <div v-for="(item, index) in dataBook" :key="index" class="flex justify-stretch items-center mb-3">
              <div class="label-chart flex justify-end items-center" style="width:220px;text-align:right;">
                {{ item.name }}
              </div>
              <div class="value-chart">
                <el-tooltip class="item" effect="dark" :content="item.name + ' : ' + item.value" placement="top">
                  <div class="item-chart cursor-pointer" :style="'width:' + item.value" style="background:#FBAB18;" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReportPage',
  layout: 'default',
  data () {
    return {
      detail: {
        name: '',
        date: '',
        targeting: '',
        creative: '',
        imp: '',
        click: '',
        ctr: ''
      },
      selectedCampaign: null,
      dataCampaign: {},
      valueDate: [],
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: 'Last month',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: 'Last 3 months',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      width: 0,
      dataBook: {},
      dataCreative: {},
      dataSegment: {},
      dataOval: {},
      dataOccupation: {},
      totalSegement: 0,
      series: [],
      dataHotel: {},
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 1, 4]
        },
        xaxis: {
          tooltip: {
            enabled: false
          },
          categories: []
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#1B63D4'
            },
            labels: {
              style: {
                colors: '#1B63D4'
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: false
            }
          },
          {
            max: 10,
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#FBAB18'
            },
            labels: {
              style: {
                colors: '#FBAB18'
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: false
            }
          }
        ],
        tooltip: {
          custom ({ series, seriesIndex, dataPointIndex, w }) {
            const name = w.globals.initialSeries[0].data[dataPointIndex].x
            const data = w.globals.initialSeries[0].data[dataPointIndex].sub
            const data2 = '<div style="padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;background:#e2e2e2;"><div style="font-weight:bold;text-align:center;margin-bottom:10px;">' + name + '</div><li><div style="display:flex;align-items:center"><span style=" height: 15px;width: 15px;background-color: #1B63D4;border-radius: 50%;display: inline-block;"></span><div style="font-weight:bold;margin-left:5px;"> Impression : ' + series[0][dataPointIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</div></div></li><li><div style="display:flex;margin-top:4px;align-items:center"><span style=" height: 15px;width: 15px;background-color: #FBAB18;border-radius: 50%;display: inline-block;"></span><div style="font-weight:bold;margin-left:5px;"> CTR : ' + series[1][dataPointIndex] + '%' + '</div></div></li></div>'
            return '<ul style="padding:0px;"> ' + data2 + '<div style="padding:10px;">' + data + '</div>' + '</ul>'
          }
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      }
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      orgId: (state) => {
        return state.user.orgId
      }
    })
  },
  filters: {
    truncate (data, num) {
      const reqdString =
              data.split('').slice(0, num).join('')
      return reqdString + '..'
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
    this.getDataCampaignId()
  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    formatDate (date) {
      const d = new Date(date)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      const year = d.getFullYear()

      if (month.length < 2) { month = '0' + month }
      if (day.length < 2) { day = '0' + day }

      return [year, month, day].join('-')
    },
    filter () {
      this.filterOval()
      this.filterDetail()
      this.filterCreative()
      this.filterCampaign()
    },
    async filterDetail () {
      await this.$axios
        .get('json/campaigns/' + this.selectedCampaign + '/details')
        .then((res) => {
          const data = res.data.data
          if (data !== null) {
            this.detail.name = data.name
            this.detail.date = data.period
            this.detail.creative = data.creativeSize
            this.detail.targeting = data.interestTargeting
            if (data.impression > 0 || data.impression !== null) {
              this.detail.imp = this.numberWithCommas(data.impression)
            }
            if (data.click > 0 || data.click !== null) {
              this.detail.click = this.numberWithCommas(data.click)
            }
            this.detail.ctr = data.ctr + '%'
          }
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    async filterCreative () {
      await this.$axios
        .get('json/campaigns/' + this.selectedCampaign + '/creative_version_profile')
        .then((res) => {
          const data1 = []
          console.log('res : ', res)

          const data = res.data.data
          this.dataCreative = data.length
          for (let i = 0; i < data.length; i++) {
            data1.push(data[i].version)
          }
          this.chartOptions = {
            ...this.chartOptions,
            xaxis: {
              categories: data1
            }
          }
          this.series = [
            {
              color: '#1B63D4',
              name: 'impression',
              type: 'column',
              data: []
            },
            {
              color: '#FBAB18',
              name: 'ctr',
              type: 'column',
              data: []
            }
          ]
          data.forEach((item) => {
            let data = []
            data = []
            for (let i = 0; i < item.sub?.length; i++) {
              item.sub[i].relative_percentage = parseFloat(item.sub[i].relative_percentage.replace('%', ''))
              item.sub[i].relative_percentage = Math.round(item.sub[i].relative_percentage) + '%'
              data.push('<li>' + '<b>' + item.sub[i].audience_profile + '</b> : ' + item.sub[i].relative_percentage + '</li>')
              // this.$set(item, 'join', ().join(','))
            }
            this.$set(item, 'join', data.join(' '))
          })
          for (let i = 0; i < data.length; i++) {
            this.series[0].data.push({
              x: data[i].version,
              y: data[i].impression.toFixed(2),
              sub: data[i].join
            })
            this.series[1].data.push({
              x: data[i].version,
              y: parseFloat(data[i].ctr)
            })
          }
          // console.log('series : ', this.series[0])
          // this.series[0].data.sort((a, b) => b.y - a.y)
          // console.log(this.series)
          // for (let i = 0; i < this.series[0].length; i++) {
          //   // if (this.series[1][i].y)
          //   this.series[0].i
          // }
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    sortedArray () {
      return this.arrays.sort((a, b) => a.name - b.name)
    },
    async filterCampaign () {
      await this.$axios
        .get('json/campaigns/' + this.selectedCampaign + '/campaign_audience_category')
        .then((res) => {
          this.dataSegment = res.data.data.slice(0, 20)
          this.dataSegment.forEach((item, index) => {
            const data = []
            let total = ''
            // let totalPersen = 0
            item.relative_percentage = parseFloat(item.relative_percentage.replace('%', ''))
            item.relative_percentage = Math.round(item.relative_percentage) + '%'
            if (item.sub.length > 0) {
              for (let i = 0; i < item.sub.length; i++) {
                data.push(item.sub[i].audience_category)
                item.sub[i].relative_percentage__1 = item.sub[i].relative_percentage__1.replace('%', '')
                item.sub[i].relative_percentage__1 = Math.round(item.sub[i].relative_percentage__1)
                // item.sub[i].relative_percentage__1 = parseFloat(item.sub[i].relative_percentage__1)
                // totalPersen += item.sub[0].relative_percentage__1
              }
              total = data.join(', ')
              this.$set(item, 'audience', total)
              this.$set(item, 'totalPersen', parseFloat(item.relative_percentage.replace('%', '')))
              // for (let i = 0; i < item.sub.length; i++) {
              //   item.sub[i].relative_percentage__1 = ((item.sub[i].relative_percentage__1 / item.totalPersen) * 100).toFixed(2)
              // }
            } else {
              this.$set(item, 'audience', ' - ')
            }
          })

          this.totalSegement = res.data.data.length
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    async filterOval () {
      await this.$axios
        .get('campaign/oval/reports?campaignId=' + this.selectedCampaign)
        .then((res) => {
          console.log('res: ', res.data.data)
          this.dataOval = res.data.data
          this.dataOval.city = this.dataOval.city.slice(0, 5)
          this.dataOccupation = res.data.data.occupation.slice(0, 5)
          this.dataOval.hotelStar = res.data.data.hotelStar.slice(0, 5)
          this.dataBook = res.data.data.productDepartment.slice(0, 10)
          let total2 = 0
          let total3 = 0
          let total4 = 0
          let total5 = 0
          for (let i = 0; i < this.dataOval.city.length; i++) {
            total2 += this.dataOval.city[i].value
          }
          for (let i = 0; i < this.dataOval.city.length; i++) {
            this.dataOval.city[i].value = Math.round(((this.dataOval.city[i].value / total2) * 100).toFixed(2)) + '%'
          }
          for (let i = 0; i < this.dataOccupation.length; i++) {
            total3 += this.dataOccupation[i].value
          }
          for (let i = 0; i < this.dataOccupation.length; i++) {
            this.dataOccupation[i].value = Math.round(((this.dataOccupation[i].value / total3) * 100).toFixed(2)) + '%'
          }
          for (let i = 0; i < this.dataOval.hotelStar.length; i++) {
            total4 += this.dataOval.hotelStar[i].value
          }
          for (let i = 0; i < this.dataOval.hotelStar.length; i++) {
            this.dataOval.hotelStar[i].value = Math.round(((this.dataOval.hotelStar[i].value / total4) * 100).toFixed(2)) + '%'
          }
          for (let i = 0; i < this.dataBook.length; i++) {
            total5 += this.dataBook[i].value
          }
          for (let i = 0; i < this.dataBook.length; i++) {
            this.dataBook[i].value = Math.round(((this.dataBook[i].value / total5) * 100).toFixed(2)) + '%'
          }
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    async getDataCampaignId () {
      await this.$axios
        .get('campaign/campaigns?orgId=' + this.orgId)
        .then((res) => {
          this.dataCampaign = res.data.data
          if (this.dataCampaign.length > 0) {
            this.selectedCampaign = this.dataCampaign[0].id
          }
          const date = new Date()
          const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
          const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
          this.valueDate.push(firstDay)
          this.valueDate.push(lastDay)
          this.filter()
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    async getDataCreative () {
      await this.$axios
        .get('json/creative_version_profile')
        .then((res) => {
          const data1 = []

          const data = res.data.data
          this.dataCreative = data.length

          for (let i = 0; i < data.length; i++) {
            data1.push(data[i].version)
          }
          this.chartOptions = {
            ...this.chartOptions,
            xaxis: {
              categories: data1
            }
            // tooltip: {
            //   custom('data')
            // }
          }
          this.series = [
            {
              color: '#1B63D4',
              name: 'impression',
              type: 'column',
              data: []
            },
            {
              color: '#FBAB18',
              name: 'ctr',
              type: 'column',
              data: []
            }
          ]
          data.forEach((item) => {
            let data = []
            data = []
            for (let i = 0; i < item.sub.length; i++) {
              item.sub[i].relative_percentage = parseFloat(item.sub[i].relative_percentage.replace('%', ''))
              item.sub[i].relative_percentage = Math.round(item.sub[i].relative_percentage) + '%'
              data.push('<li>' + '<b>' + item.sub[i].audience_profile + '</b> : ' + item.sub[i].relative_percentage + '</li>')
              // this.$set(item, 'join', ().join(','))
            }
            this.$set(item, 'join', data.join(' '))
          })
          for (let i = 0; i < data.length; i++) {
            this.series[0].data.push({
              x: data[i].version,
              y: data[i].impression.toFixed(2),
              sub: data[i].join
            })
            this.series[1].data.push({
              x: data[i].version,
              y: parseFloat(data[i].ctr)
            })
          }
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    },
    handleResize () {
      this.width = window.innerWidth
    },
    async getDataSegment () {
      await this.$axios
        .get('json/campaign_audience_category')
        .then((res) => {
          console.log('getDataSegment : ', res)
        })
        .catch((e) => {
          console.log('error : ', e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.title-v2 {
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #5C6B7A;
}
.desc-v2 {
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #7A8A99;
  margin-bottom:20px;
}
.kg-container {
  padding: 20px;
  .card-report {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #C3CED9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;

    .save-btn {
      width: 140px;
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
    .save-btn:hover {
      background-color: #053f67;
      border: 0px;
    }
    .title-filter {
      font-family: 'Cabin';
      font-size: 28px;
      font-weight: 700;
    }
    .audience-segment {
      height: 100%;
      gap:20px;
      margin-top:15px;
      .chart-container {
        padding:20px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #C3CED9;
        border-radius: 10px;
        .label-chart {
          width:150px;
          height:20px;
          font-family: "Cabin";
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          margin-right:10px;
        }
        .value-chart {
          width: 100%;
          height: 21px;
          .item-chart {
            width: 80%;
            height: 100%;
          }
          .item-chart:nth-child(1n) {
            background: #775BE8;
          }
          .item-chart:nth-child(2n) {
            background: #1BD42D;
          }
          .item-chart:nth-child(3n) {
            background: #FBAB18;
          }
          .item-chart:nth-child(4n) {
            background: #B25BE8;
          }
          .item-chart:nth-child(5n) {
            background: #E23C82;
          }
        }
        .value2-chart {
          height: 21px;
          .item-chart {
            width: 100%;
            height: 100%;
            background: red;
          }
        }
        .title-chart {
          font-family: "Cabin";
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: center;
        }
      }
    }
    .card-notif {
      width: 100%;
      height: 100%;
      background: #FFF3DD;
      border: 1px solid #FBAB18;
      border-radius: 10px;
      padding: 12px 27px 12px 27px;
      .detail-notif {
        margin-left:24px;
        .title-recomendation {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #2B3947;
          margin-bottom:10px;
        }
        .desc-recommendation {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #5C6B7A;
        }
        .item-recommendation {
          margin-top:10px;
          cursor: pointer;
          width: 158px;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          height: 34px;
          color: #1B63D4;
          .hr-vertical {
            height: 20px;
            border: 1px solid #C3CED9;
            margin-left:13px;
          }
        }
        .item-recommendation:hover {
          text-transform: underline;
        }
      }
    }
    .title-summary {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      color: #5C6B7A;
      margin-bottom:20px;
    }
    .left-side {
      width:500px;
    }
    .right-side {
      width:331px;
      .card-statistic {
        width: 100%;
        height: 75px;
        background: #FFFFFF;
        border: 1px solid #C3CED9;
        border-radius: 10px;
        margin-bottom:15px;
        .title-v3 {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          text-align: center;
          color: #2B3947;
        }
        .value-v3 {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
          text-align: center;
          color: #5C6B7A;
        }
      }
    }
    .title-filter {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #2B3947;
    }
    .save-btn {
      width: 140px;
      background: #1b63d4;
      border: 1px solid #1b63d4;
      color: #ffffff;
      border-radius: 5px;
      height: 40px;
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
}
</style>
