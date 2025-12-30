<template>
  <div class="p-6">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-code text-gray-400 mr-2"></i> Query Details
        </h1>

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
                <i class="ti ti-database mr-2 text-blue-500"></i>
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
                <i class="ti ti-adjustments mr-2 text-green-500"></i>
                Metrics
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.metrics) }}
                </pre>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-filter mr-2 text-red-500"></i>
                Join
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.join) }}
                </pre>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-filter mr-2 text-red-500"></i>
                Filters
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.filters) }}
                </pre>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-border-all mr-2 text-purple-500"></i>
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
                <i class="ti ti-filter mr-2 text-red-500"></i>
                Sort
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <pre class="text-sm font-mono text-gray-800 whitespace-pre-wrap"
                  >{{ pretty(data.definition?.sort) }}
                </pre>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="space-y-0">
            <h2
              class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
            >
              <i class="ti ti-help mr-2 text-yellow-500"></i>
              Example
            </h2>
            <QueryExample />
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

    toEdit() {
      this.$router.push('/admin/query/edit/' + this.data.uuid)
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
      if (val) {
        this.data = {
          id: val.id,
          uuid: val.uuid,
          orgId: val.orgId,
          name: val.name,
          description: val.description,
          definition: { ...val.definition },
        }
      }
    },
  },
}
</script>
