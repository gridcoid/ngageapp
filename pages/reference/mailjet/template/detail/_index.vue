<template>
  <div class="p-6">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-mail text-gray-500 mr-2" /> Template Details
        </h1>
      </div>

      <div class="p-6">
        <!-- Headers Info -->
        <div>
          <h2
            class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
          >
            <i class="ti ti-mail mr-2 text-gray-500"></i> Headers
          </h2>
          <div class="bg-gray-50 rounded-lg p-5 space-y-4">
            <div>
              <label
                class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                >Subject</label
              >
              <div class="text-gray-900 font-medium">
                {{ data.headers?.Subject || '-' }}
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >Sender Name</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.SenderName || '-' }}
                </div>
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >Sender Email</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.SenderEmail || '-' }}
                </div>
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >From</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.From || '-' }}
                </div>
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >Reply Email</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.ReplyEmail || '-' }}
                </div>
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >Reply-To</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.['Reply-To'] || '-' }}
                </div>
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >Template Language</label
                >
                <div class="text-gray-900">
                  {{ data.headers?.['X-MJ-TemplateLanguage'] || '-' }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Full Width Sections -->
        <div class="mt-10 space-y-8">
          <!-- HTML Part -->
          <div>
            <h2
              class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
            >
              <i class="ti ti-file-code mr-2 text-gray-500"></i> HTML Part
            </h2>
            <div class="bg-gray-50 rounded-lg p-5">
              <div v-if="data['Html-part']" class="space-y-3">
                <div
                  class="p-3 bg-white rounded border border-gray-100 shadow-sm"
                >
                  <pre
                    class="text-xs text-gray-900 font-mono whitespace-pre-wrap break-words overflow-x-auto max-h-96 overflow-y-auto"
                    >{{ data['Html-part'] }}</pre
                  >
                </div>
              </div>
              <div v-else class="text-gray-400 italic text-sm">
                No HTML content available.
              </div>
            </div>
          </div>

          <!-- MJML Content -->
          <div>
            <h2
              class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
            >
              <i class="ti ti-code mr-2 text-gray-500"></i> MJML Content
            </h2>
            <div class="bg-gray-50 rounded-lg p-5">
              <div v-if="data.MJMLContent" class="space-y-3">
                <div
                  class="p-3 bg-white rounded border border-gray-100 shadow-sm"
                >
                  <pre
                    class="text-xs text-gray-900 font-mono whitespace-pre-wrap break-words overflow-x-auto max-h-96 overflow-y-auto"
                    >{{ data.MJMLContent }}</pre
                  >
                </div>
              </div>
              <div v-else class="text-gray-400 italic text-sm">
                No MJML content available.
              </div>
            </div>
          </div>

          <!-- Text Part -->
          <div>
            <h2
              class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
            >
              <i class="ti ti-file-text mr-2 text-gray-500"></i> Text Part
            </h2>
            <div class="bg-gray-50 rounded-lg p-5">
              <div v-if="data['Text-part']" class="space-y-3">
                <div
                  class="p-3 bg-white rounded border border-gray-100 shadow-sm"
                >
                  <pre
                    class="text-xs text-gray-900 font-mono whitespace-pre-wrap break-words overflow-x-auto max-h-96 overflow-y-auto"
                    >{{ data['Text-part'] }}</pre
                  >
                </div>
              </div>
              <div v-else class="text-gray-400 italic text-sm">
                No text content available.
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
  name: 'MailjetTemplateDetailPage',
  layout: 'default',
  head() {
    return {
      title: 'Detail - Mailjet Template - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,
      data: {
        headers: {},
        MJMLContent: null,
        'Html-part': null,
        'Text-part': null,
      },
    }
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.mailjetTemplate.dataDetail,
    }),
  },
  async mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('mailjetTemplate/detail', {
          templateId: this.$route.params.index,
        })
        .finally(() => (this.isLoading = false))
    },

    formatJson(jsonString) {
      try {
        const parsed = JSON.parse(jsonString)
        return JSON.stringify(parsed, null, 2)
      } catch (e) {
        return jsonString
      }
    },
  },
  watch: {
    async dataDetail(val) {
      if (val) {
        this.data.headers = val.Headers || {}
        this.data.MJMLContent = val.MJMLContent || null
        this.data['Html-part'] = val['Html-part'] || null
        this.data['Text-part'] = val['Text-part'] || null
      }
    },
  },
}
</script>
