<template>
  <div class="containers w-full">
    <div
      class="flex items-center header-content filter-content justify-between"
    >
      <div class="flex items-center header-content p-6 pb-0">
        <div class="title-header">Dashboard</div>

        <ButtonDefault
          icon="plus"
          text="Add Widget"
          class="ml-4"
          type="secondary"
          @click.native="toAddWidget()"
        />
      </div>
    </div>

    <GridLayout
      v-if="layout.length"
      :layout="layout"
      :col-num="4"
      :row-height="135"
      :is-draggable="true"
      :is-resizable="true"
      :margin="[24, 24]"
      @layout-updated="onLayoutUpdated"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        v-bind="item"
        class="bg-white border p-6 border-gray-200"
      >
        <!-- item.i is uuid -->
        <template v-if="widgetByUuidFunc(item.i)">
          <div class="text-gray-500 mb-2">
            {{ widgetByUuidFunc(item.i).title }}
          </div>

          <MetricWidget
            v-if="widgetByUuidFunc(item.i).type === 'metric'"
            :data="dataResult[widgetByUuidFunc(item.i).queryId]"
            :metrics="
              dataQuery.find((q) => q.id === widgetByUuidFunc(item.i).queryId)
                ?.definition?.metrics
            "
          />

          <TableWidget
            v-else-if="widgetByUuidFunc(item.i).type === 'table'"
            :rows="dataResult[widgetByUuidFunc(item.i).queryId]"
            :metrics="
              dataQuery.find((q) => q.id === widgetByUuidFunc(item.i).queryId)
                ?.metrics
            "
          />

          <ChartWidget
            v-else-if="widgetByUuidFunc(item.i).type === 'chart'"
            :data="dataResult[widgetByUuidFunc(item.i).queryId]"
            :metrics="
              dataQuery.find((q) => q.id === widgetByUuidFunc(item.i).queryId)
                ?.metrics
            "
          />

          <div v-else class="text-gray-400">Unsupported widget</div>
        </template>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  layout: 'default',

  head() {
    return { title: 'Dashboard - ' + this.$config.appName }
  },

  data() {
    return {
      isLoading: false,
      widgets: [],
      layout: [],
    }
  },

  computed: {
    ...mapState({
      dataQuery: (state) => state.query.dataList,
      dataDashboard: (state) => state.dashboard.dataList,
      dataResult: (state) => state.query.dataResult,
      orgId: (state) => state.user.orgId,
      sidebar: (state) => state.user.sidebar,
      popup: (state) => state.user.popup,
    }),

    // fast lookup helper
    widgetByUuidFunc() {
      const map = {}
      this.widgets.forEach((w) => (map[String(w.uuid)] = w))
      const func = (id) => map[id]
      return func
    },
  },

  mounted() {
    this.getQuery()
    this.getData()
  },

  methods: {
    toAddWidget() {
      this.$router.push(`/dashboard/${this.dataDashboard.uuid}/widget/create`)
    },

    async loadWidgetData() {
      for (const w of this.widgets) {
        if (!w.queryId) continue

        const queryUuid = this.dataQuery.find((q) => q.id === w.queryId)?.uuid

        // Skip if null/undefined
        if (!queryUuid) continue

        const payload = {
          ...w,
          queryUuid,
        }

        this.isLoading = true
        this.$store
          .dispatch('query/run', payload)
          .then((res) => {
            this.$set(w, 'data', res.data.data)
          })
          .catch(() => {
            this.$set(w, 'data', { error: true })
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },

    getQuery() {
      this.isLoading = true
      this.$store
        .dispatch('query/list', {
          page: 1,
          size: 1000,
          name: '',
          sort: 'createdAt_desc',
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    getData() {
      this.isLoading = true
      this.$store.dispatch('dashboard/list').finally(() => {
        this.isLoading = false
      })
    },

    onLayoutUpdated(newLayout) {
      const updated = this.widgets.map((w) => {
        const pos = newLayout.find((l) => l.i === String(w.uuid))
        return { ...w, ...pos }
      })

      let updatedWithoutData = []

      updated.forEach((w) => {
        const { data, ...rest } = w
        updatedWithoutData.push({ ...rest })
      })

      // push to store safely
      this.$store.dispatch('dashboard/update', updatedWithoutData)

      // update local copy so UI reacts instantly
      this.widgets = updated
    },
  },

  watch: {
    dataDashboard: {
      handler(val) {
        if (!val?.config?.widgets) return

        this.widgets = JSON.parse(JSON.stringify(val.config.widgets))

        this.layout = this.widgets.map((w, idx) => ({
          x: w.x,
          y: w.y ?? idx,
          w: w.w,
          h: w.h,
          i: String(w.uuid),
        }))

        this.loadWidgetData()
      },
    },
  },
}
</script>

<style>
.vue-grid-item {
  touch-action: none;
}
</style>
