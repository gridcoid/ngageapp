<template>
  <div class="p-6">
    <div class="mb-6">
      <ButtonBackPage text="Back to API Keys" @click.native="back()" />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">API Key Details</h1>
        <ButtonDefault
          icon="edit"
          text="Edit"
          class="ml-4"
          type="secondary"
          @click.native="toEdit()"
        />
      </div>

      <div class="p-6">
        <!-- Main Info Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column: Personal & Location -->
          <div class="space-y-8">
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-key mr-2 text-blue-500"></i> API Key Information
              </h2>
              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Name</label
                  >
                  <div class="text-gray-900 font-medium text-lg">
                    {{ data.name }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >API Key</label
                  >
                  <div class="text-gray-900 font-medium text-xs">
                    <code class="bg-white">{{ data.apiKey }}</code>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Expires At</label
                  >
                  <div class="text-gray-900">
                    {{ data.expiresAt || 'Never' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Revoked</label
                  >
                  <div class="text-gray-900" v-if="data.revoked">Yes</div>
                  <div class="text-gray-900" v-else>No</div>
                </div>
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-building mr-2 text-green-500"></i> Scopes
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div v-if="data.scopes && data.scopes.length" class="space-y-3">
                  <div
                    v-for="(scope, idx) in data.scopes"
                    :key="idx"
                    class="flex items-start p-3 bg-white rounded border border-gray-100 shadow-sm"
                  >
                    <div class="flex-shrink-0 mt-1">
                      <i class="pi pi-users text-gray-400"></i>
                    </div>
                    <div class="ml-3">
                      <div class="text-xs font-semibold uppercase flex gap-2">
                        <span class="normal-case font-normal text-gray-500">
                          Read:
                          <span v-if="scope.read" class="text-green-500">
                            Yes
                          </span>
                          <span v-else class="text-red-500">No</span>
                        </span>
                        <span class="normal-case font-normal text-gray-500">
                          Write:
                          <span v-if="scope.write" class="text-green-500">
                            Yes
                          </span>
                          <span v-else class="text-red-500">No</span>
                        </span>
                      </div>
                      <div class="text-gray-900 font-medium break-all">
                        {{ scope.segmentName }}
                        <span class="text-xs text-gray-400"
                          >({{
                            Number(scope.audienceCount).toLocaleString()
                          }}
                          audiences)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-gray-400 italic text-sm">
                  No scopes available.
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="pi pi-building mr-2 text-green-500"></i> Scopes
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div class="space-y-3">
                  <!--  -->
                  <!--  -->
                  <!-- Example Usage -->
                  <div
                    class="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <h2 class="text-lg font-semibold text-gray-800 mb-3">
                      How to Use This API Key
                    </h2>

                    <p class="text-gray-600 mb-4">
                      Use this key to access allowed segments from your systems.
                      Add it to the
                      <code class="bg-gray-100 px-1 rounded"
                        >Authorization</code
                      >
                      header.
                    </p>

                    <div class="mb-4">
                      <h3 class="text-sm font-semibold text-gray-700 mb-1">
                        Endpoint
                      </h3>
                      <pre
                        class="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto"
                      >
GET /api/public/segment/:segmentUuid?page=1&amp;num=50
    </pre
                      >
                    </div>

                    <div>
                      <h3 class="text-sm font-semibold text-gray-700 mb-1">
                        Example (curl)
                      </h3>
                      <pre
                        class="bg-gray-900 text-green-100 p-3 rounded text-sm overflow-x-auto"
                      >
curl -X GET \
  "https://your-domain.com/api/public/segment/SEGMENT_UUID?page=1&amp;num=50" \
  -H "Authorization: ApiKey {{ data.apiKey }}" \
  -H "Accept: application/json"
    </pre
                      >
                    </div>

                    <p class="text-gray-500 text-sm mt-3">
                      Tip: You can also send the key as
                      <code class="bg-gray-100 px-1 rounded"
                        >Bearer {{ data.apiKey }}</code
                      >.
                    </p>
                  </div>

                  <!--  -->
                  <!--  -->
                </div>
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
  name: 'DetailApiKeyPage',
  layout: 'default',
  head() {
    return {
      title: 'Detail - API Key - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,

      // Form model sesuai tabel
      data: {
        id: null,
        orgId: null,
        name: '',
        expiresAt: null,
        scopes: [],
      },
    }
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.apiKey.dataDetail,
    }),
  },
  async mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      const data = {
        apiKeyId: this.$route.params.index,
      }

      this.isLoading = true

      this.$store
        .dispatch('apiKey/detail', data)
        .finally(() => (this.isLoading = false))
    },

    back() {
      this.$router.push({ path: '/admin/api-key' })
    },

    toEdit() {
      this.$router.push({ path: '/admin/api-key/edit/' + this.data.id })
    },
  },
  watch: {
    async dataDetail(val) {
      if (val) {
        this.data = {
          id: val.id,
          orgId: val.orgId,
          name: val.name,
          apiKey: val.hash,
          expiresAt: val.expiresAt,
          scopes: val.scopes,
          revoked: val.revoked,
        }
      }
    },
  },
}
</script>
