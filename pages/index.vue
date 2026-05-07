<template>
  <div class="containers w-full bg-gradient">
    <div class="flex items-end justify-between w-full">
      <div class="flex items-center header-content p-6 pb-0 space-x-4">
        <div class="title-header">
          <i class="ti ti-dashboard text-gray-500 mr-2" /> DASHBOARD
        </div>

        <ButtonDefault
          v-show="isEditLayout"
          icon="plus"
          text="Add Widget"
          class="ml-4"
          type="secondary"
          @click.native="toAddWidget()"
        />
      </div>

      <div class="mr-6 mb-2">
        <!-- Layout edit switch -->
        <el-switch v-model="isEditLayout" active-text="Edit Layout" />
      </div>
    </div>

    <GridLayout
      v-if="layout.length"
      :layout="layout"
      :col-num="4"
      :row-height="135"
      :is-draggable="isEditLayout"
      :is-resizable="isEditLayout"
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
          <!-- HEADER (title + icons) -->
          <div class="group flex justify-between items-center mb-4">
            <!-- Title -->
            <div class="text-gray-500">
              {{ widgetByUuidFunc(item.i).title }}
            </div>

            <!-- Icons (hidden until hover on the title area) -->
            <div
              v-if="isEditLayout"
              class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition"
            >
              <button
                class="text-yellow-300 hover:text-yellow-600"
                @click.stop="editWidget(item)"
                title="Edit"
              >
                <i class="ti ti-edit"></i>
              </button>

              <button
                class="text-red-300 hover:text-red-600"
                @click.stop="
                  deleteWidget(item.i, widgetByUuidFunc(item.i).title)
                "
                title="Delete"
              >
                <i class="ti ti-trash"></i>
              </button>
            </div>
          </div>

          <div class="flex flex-col" style="height: calc(100% - 16px)">
            <div class="flex-1 overflow-y-auto">
              <NumberWidget
                v-if="widgetByUuidFunc(item.i).type === 'number'"
                :data="
                  dataResult[widgetByUuidFunc(item.i).definitionId]?.data || {}
                "
              />

              <TableWidget
                v-else-if="widgetByUuidFunc(item.i).type === 'table'"
                :data="
                  dataResult[widgetByUuidFunc(item.i).definitionId]?.data || {}
                "
              />

              <ChartWidget
                v-else-if="widgetByUuidFunc(item.i).type === 'chart'"
                :data="
                  dataResult[widgetByUuidFunc(item.i).definitionId]?.data || {}
                "
                :chart-type="widgetByUuidFunc(item.i).chartType"
              />

              <MapWidget
                v-else-if="widgetByUuidFunc(item.i).type === 'map'"
                :data="
                  dataResult[widgetByUuidFunc(item.i).definitionId]?.data || {}
                "
              />

              <div v-else class="text-gray-400">Unsupported widget</div>
            </div>
          </div>
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
      isEditLayout: false, // default off (locked)
    }
  },

  computed: {
    ...mapState({
      dataDashboard: (state) => state.dashboard.dataList,
      dataDefinition: (state) => state.definition.dataList,
      dataResult: (state) => state.definition.dataResult,
      orgId: (state) => state.user.orgId,
      sidebar: (state) => state.user.sidebar,
      popup: (state) => state.user.popup,
    }),

    // fast lookup helper
    widgetByUuidFunc() {
      const map = {}
      this.widgets.forEach((w) => (map[String(w.i)] = w))
      const func = (id) => map[id]
      return func
    },
  },

  mounted() {
    this.getDefinition()
    this.getData()
  },

  methods: {
    toAddWidget() {
      this.$router.push(`/dashboard/${this.dataDashboard.uuid}/widget/create`)
    },

    async loadWidgetData() {
      for (const w of this.widgets) {
        if (!w.definitionId) continue

        const uuid = this.dataDefinition.find(
          (q) => q.id === w.definitionId
        )?.uuid

        // Skip if null/undefined
        if (!uuid) continue

        const payload = {
          ...w,
          uuid,
        }

        this.isLoading = true
        this.$store
          .dispatch('definition/run', payload)
          .then((res) => {
            this.$set(w, 'data', res?.data.data)
          })
          .catch(() => {
            this.$set(w, 'data', { error: true })
          })
          .finally(() => (this.isLoading = false))
      }
    },

    getDefinition() {
      this.isLoading = true
      this.$store
        .dispatch('definition/list', {
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
      this.$store
        .dispatch('dashboard/list')
        .finally(() => (this.isLoading = false))
    },

    onLayoutUpdated(newLayout) {
      const updated = this.widgets.map((w) => {
        const pos = newLayout.find((l) => l.i === String(w.i))
        return { ...w, ...pos }
      })

      let updatedWithoutData = []

      updated.forEach((w) => {
        const { data, ...rest } = w
        updatedWithoutData.push({ ...rest })
      })

      // push to store safely
      this.$store.dispatch('dashboard/updateWidgets', updatedWithoutData)

      // update local copy so UI reacts instantly
      this.widgets = updated
    },

    editWidget(item) {
      this.$store.dispatch('dashboard/select', item)
      this.$router.push(
        `/dashboard/${this.dataDashboard.uuid}/widget/edit/${item.i}`
      )
    },

    deleteWidget(uuid, name) {
      this.$confirm(`Delete widget "${name}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(async () => {
          this.$notifier.showMessage({
            content: 'Deleting widget...',
            type: 'loading',
          })

          try {
            // remove from local widgets
            this.widgets = this.widgets.filter((w) => w.i !== uuid)

            // also update layout so grid refreshes
            this.layout = this.layout.filter((l) => l.i !== String(uuid))

            // prepare payload (no data field)
            const updatedWithoutData = this.widgets.map(
              ({ data, ...rest }) => ({
                ...rest,
              })
            )

            // push to store
            await this.$store.dispatch(
              'dashboard/updateWidgets',
              updatedWithoutData
            )

            this.$notifier.showMessage({
              content: `Widget "${name}" deleted`,
              type: 'success',
            })
          } catch (err) {
            this.$notifier.showMessage({
              content: 'Failed to delete widget',
              type: 'error',
            })
            console.error(err)
          }
        })
        .catch(() => {
          // user canceled — do nothing
        })
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
          i: w.i,
          type: w.type,
          chartType: w.chartType,
          definitionId: w.definitionId,
          title: w.title,
        }))

        this.loadWidgetData()
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.title-header {
  font-weight: 600;
  font-size: 18px;
  color: #333333;
}
.header-content {
  height: 58px;
}
.vue-grid-item {
  touch-action: none;
}
</style>
