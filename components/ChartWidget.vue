<template>
  <el-card
    shadow="never"
    class="bg-transparent h-full"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
  >
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <!-- Pie (only 2 items) -->
        <apexchart
          v-if="isPie"
          type="pie"
          :options="pieOptions"
          :series="series"
          width="100%"
          height="100%"
        />

        <!-- Bar (anything else) -->
        <apexchart
          v-else
          type="bar"
          :options="barOptions"
          :series="barSeries"
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
      // expected:
      // {
      //   key: 'Audience Bikes',
      //   data: [{ name: 'honda', count: 2 }]
      // }
    },
  },

  computed: {
    items() {
      return this.data?.data || []
    },

    isPie() {
      return this.items.length === 2
    },

    labels() {
      return this.items.map((i) => i.name)
    },

    series() {
      return this.items.map((i) => i.count)
    },

    barSeries() {
      return [
        {
          name: 'Count',
          data: this.series,
        },
      ]
    },

    pieOptions() {
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

    barOptions() {
      return {
        chart: {
          toolbar: { show: false },
        },
        xaxis: {
          categories: this.labels,
        },
        yaxis: {
          labels: {
            formatter: (val) => Math.round(val),
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
          formatter: (val) => Math.round(val),
        },
        tooltip: {
          y: {
            formatter: (val) => Math.round(val),
          },
        },
      }
    },
  },
}
</script>

<style>
.el-card {
  border: 0 !important;
}
</style>
