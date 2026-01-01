<template>
  <el-card
    shadow="never"
    class="bg-transparent"
    :body-style="{ padding: '0', border: '0' }"
  >
    <div class="grid grid-cols-1 gap-2">
      <div
        v-for="(metric, idx) in computedMetrics"
        :key="idx"
        class="flex items-center justify-between"
      >
        <div>
          <p class="text-4xl font-semibold text-blue-700">
            {{ metric.value }}
          </p>
        </div>

        <!-- Generic Tabler icon -->
        <i class="ti ti-chart-bar text-2xl text-purple-300"></i>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'MetricWidget',

  props: {
    // API response
    data: {
      type: Array,
      default: () => [],
    },

    // User-configured metrics
    metrics: {
      type: Array,
      default: () => [],
      /*
        Example metric item:
        {
          as: 'total_contacts',   // key in result object
          op: 'count',            // operation
          field: '*',             // field (if needed)
          label: 'Total Contacts',
          icon: 'ti-users'        // tabler icon class (without leading `ti`)
        }
      */
    },
  },

  computed: {
    computedMetrics() {
      const row = this.data?.[0] || {}

      return this.metrics.map((m) => {
        let value = null

        // basic operations — extend as needed
        switch (m.op) {
          case 'count':
            value = row[m.as] ?? 0
            break
          case 'sum':
            value = Number(row[m.as] || 0)
            break
          default:
            value = row[m.as] ?? '-'
        }

        return {
          label: m.label || m.as,
          icon: m.icon || 'ti-bar-chart',
          value,
        }
      })
    },
  },
}
</script>

<style>
.el-card {
  border: 0 !important;
}
</style>
