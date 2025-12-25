<template>
  <div class="p-6">
    <div class="mb-6">
      <ButtonBackPage text="Back to Queries" @click.native="back()" />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">Query Details</h1>

        <ButtonDefault
          icon="edit"
          text="Edit"
          class="ml-4"
          type="secondary"
          @click.native="toEdit()"
        />
      </div>

      <div class="p-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- LEFT COLUMN -->
          <div class="space-y-8">
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-database mr-2 text-blue-500"></i>
                Query Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase mb-1"
                  >
                    Name
                  </label>
                  <div class="text-gray-900 font-medium text-lg">
                    {{ data.name }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase mb-1"
                  >
                    Description
                  </label>
                  <div class="text-gray-700">
                    {{ data.description || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase mb-1"
                  >
                    Source
                  </label>
                  <div class="text-gray-900 font-medium">
                    {{ data.definition?.source || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase mb-1"
                  >
                    Limit
                  </label>
                  <div class="text-gray-900">
                    {{ data.definition?.limit }}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-sliders-h mr-2 text-green-500"></i>
                Metrics
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.metrics) }}
                </pre>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="space-y-8">
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-objects-column mr-2 text-purple-500"></i>
                Group By
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.groupBy) }}
                </pre>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-filter mr-2 text-red-500"></i>
                Filters
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.filters) }}
                </pre>
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
  name: 'DetailQueryPage',
  layout: 'default',

  head() {
    return {
      title: 'Detail - Query - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,
      data: {
        id: null,
        orgId: null,
        name: '',
        description: '',
        definition: {
          source: '',
          metrics: [],
          groupBy: [],
          filters: [],
          sort: [],
          limit: 10,
        },
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.query.dataDetail,
    }),
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('query/detail', {
          queryUuid: this.$route.params.index,
        })
        .finally(() => (this.isLoading = false))
    },

    back() {
      this.$router.push({ path: '/admin/query' })
    },

    toEdit() {
      this.$router.push('/admin/query/edit/' + this.data.id)
    },

    pretty(obj) {
      try {
        return JSON.stringify(obj || [], null, 2)
      } catch {
        return '-'
      }
    },
  },

  watch: {
    dataDetail(val) {
      if (!val) return

      this.data = {
        id: val.data.id,
        orgId: val.data.orgId,
        name: val.data.name,
        description: val.data.description,
        definition: { ...val.data.definition },
      }
    },
  },
}
</script>
