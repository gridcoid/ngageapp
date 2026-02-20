<template>
  <el-card
    shadow="never"
    class="bg-transparent h-full"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
  >
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <apexchart
          v-if="chartCategory === 'circular'"
          :type="resolvedType"
          :options="circularOptions"
          :series="series"
          width="100%"
          height="100%"
        />

        <apexchart
          v-else
          :type="resolvedType"
          :options="cartesianOptions"
          :series="cartesianSeries"
          width="100%"
          height="94%"
        />
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ChartWidget',

  props: {
    data: {
      type: Object,
      required: true,
    },
    chartType: {
      type: String,
      default: 'bar', // fallback safety
    },
  },

  computed: {
    items() {
      return this.data?.data || []
    },

    labels() {
      return this.items?.map((i) => i.name)
    },

    series() {
      return this.items?.map((i) => i.count)
    },

    barSeries() {
      return [
        {
          name: 'Count',
          data: this.series,
        },
      ]
    },

    circularOptions() {
      return {
        labels: this.labels,
        legend: {
          position: 'bottom',
        },
        chart: {
          background: 'transparent',
          animations: { enabled: false }, // optional, avoids jump
          toolbar: { show: false },
          redrawOnParentResize: true,
          redrawOnWindowResize: true,
        },
        dataLabels: {
          enabled: true,
        },
      }
    },

    cartesianOptions() {
      return {
        chart: {
          toolbar: { show: false },
          background: 'transparent',
        },
        xaxis: {
          categories: this.labels,
        },
        yaxis: {
          labels: {
            formatter: (val) => Math.round(val),
          },
        },
        stroke: {
          curve: this.resolvedType === 'line' ? 'smooth' : 'straight',
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          y: {
            formatter: (val) => Math.round(val),
          },
        },
      }
    },

    resolvedType() {
      const allowed = ['bar', 'line', 'pie', 'doughnut']
      return allowed.includes(this.chartType) ? this.chartType : 'bar'
    },

    chartCategory() {
      return ['pie', 'doughnut'].includes(this.resolvedType)
        ? 'circular'
        : 'cartesian'
    },

    cartesianSeries() {
      return [
        {
          name: 'Count',
          data: this.series,
        },
      ]
    },
  },
}
</script>

<style>
.el-card {
  border: 0 !important;
}
</style>
