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

    colors() {
      const palette = [
        '#1B63D4', // Blue (Ngage primary color)
        '#20E69B', // Mint green
        '#FEB019', // Orange
        '#FD5C70', // Red/Pink
        '#8D60E3', // Purple
        '#6C7A89', // Slate Grey
        '#4DB6AC', // Teal
        '#E040FB', // Magenta
        '#00C853', // Green
        '#FFD600', // Yellow
        '#FF6D00', // Deep Orange
        '#00B0FF', // Sky Blue
        '#D500F9', // Neon Purple
        '#00E5FF', // Cyan
        '#FF1744', // Neon Red
      ]
      const result = []
      const len = this.labels?.length || 0
      for (let i = 0; i < len; i++) {
        result.push(palette[i % palette.length])
      }
      return result
    },

    circularOptions() {
      return {
        labels: this.labels,
        legend: {
          position: 'right',
          formatter: (seriesName, opts) => {
            const val = opts.w.globals.series[opts.seriesIndex]
            return `${seriesName} - ${val}`
          },
        },
        chart: {
          background: 'transparent',
          animations: { enabled: true }, // optional, avoids jump
          toolbar: { show: false },
          redrawOnParentResize: true,
          redrawOnWindowResize: true,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
            },
            startAngle: -90,
            endAngle: 270,
          },
        },
        fill: {
          type: 'gradient',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          colors: ['#ffffff'],
          width: 2,
        },
      }
    },

    cartesianOptions() {
      const isBar = this.resolvedType === 'bar'
      return {
        chart: {
          toolbar: { show: false },
          background: 'transparent',
        },
        colors: isBar ? this.colors : undefined,
        xaxis: {
          categories: this.labels,
          labels: {
            style: {
              colors: isBar ? this.colors : undefined,
            },
          },
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
            distributed: isBar,
            borderRadius: 0,
            horizontal: false,
            columnWidth: '40%',
          },
        },
        legend: {
          show: false,
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
      const type = allowed.includes(this.chartType) ? this.chartType : 'bar'
      return ['pie', 'doughnut'].includes(type) ? 'donut' : type
    },

    chartCategory() {
      return ['pie', 'doughnut', 'donut'].includes(this.resolvedType)
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
