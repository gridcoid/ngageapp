<template>
  <div class="p-6">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div
        class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex items-center"
      >
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-mail text-gray-400 mr-2" /> Email Template Details
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
          <!-- Left column -->
          <div class="space-y-8">
            <!-- Basic info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-info-circle mr-2 text-blue-500"></i>
                Basic Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label class="detail-label">Name</label>
                  <div class="detail-value">
                    {{ data.name || '-' }}
                  </div>
                </div>

                <div>
                  <label class="detail-label">Description</label>
                  <div class="detail-value">
                    {{ data.description || '-' }}
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="detail-label">Locale</label>
                    <div class="detail-value">
                      {{ data.locale || '-' }}
                    </div>
                  </div>

                  <div>
                    <label class="detail-label">Purpose</label>
                    <div class="detail-value capitalize">
                      {{ data.purpose || '-' }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Provider info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-cloud mr-2 text-yellow-500"></i>
                Provider Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label class="detail-label">Mailjet Template ID</label>
                  <div class="detail-value">
                    {{ data.mailjetData?.ID || '-' }}
                  </div>
                </div>

                <div>
                  <label class="detail-label">Created At</label>
                  <div class="detail-value">
                    {{ formatDate(data.createdAt) }}
                  </div>
                </div>

                <div>
                  <label class="detail-label">Updated At</label>
                  <div class="detail-value">
                    {{ formatDate(data.updatedAt) }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right column -->
          <div class="space-y-8">
            <!-- Content -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-file-type-html mr-2 text-purple-500"></i>
                HTML Content
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <iframe
                  :srcdoc="htmlPreviewDoc"
                  class="w-full border border-gray-200 rounded bg-white"
                  style="min-height: 200px"
                  sandbox=""
                />
              </div>
            </div>

            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-text-size mr-2 text-green-500"></i>
                Text Content
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-6">
                <pre
                  class="bg-white border border-gray-200 rounded p-3 text-sm max-h-64 overflow-y-auto break-words font-sans"
                  style="white-space: pre-wrap"
                  >{{ data.textContent || '-' }}</pre
                >
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
  name: 'EmailTemplateDetailPage',
  layout: 'default',

  head() {
    return {
      title: 'Email Template Detail - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,
      data: {
        uuid: null,
        name: '',
        description: '',
        locale: '',
        purpose: '',
        htmlContent: '',
        textContent: '',
        mailjetData: null,
        createdAt: null,
        updatedAt: null,
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.emailTemplate.dataDetail,
    }),

    htmlPreviewDoc() {
      const presetCss = `
      body {
        margin: 0;
        padding: 16px;
        background: #ffffff;
      }
      a {
        font-family: Arial, Helvetica, sans-serif;
        color: #1b63d4;
        font-size: 14px;
        text-decoration: underline;
      }
      h1 {
        font-family: Arial, Helvetica, sans-serif;
        color: #55575d;
        font-size: 20px;
        font-weight: bold;
      }
      h2 {
        font-family: Arial, Helvetica, sans-serif;
        color: #55575d;
        font-size: 18px;
        font-weight: bold;
      }
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        color: #55575d;
        font-size: 16px;
        font-weight: bold;
      }
      p {
        font-family: Arial, Helvetica, sans-serif;
        color: #55575d;
        font-size: 14px;
      }
    `

      return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>${presetCss}</style>
        </head>
        <body>
          ${this.data.htmlContent || ''}
        </body>
      </html>
    `
    },
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('emailTemplate/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    toEdit() {
      this.$router.push(
        `/direct/template/email/edit/${this.$route.params.uuid}`
      )
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleString()
    },
  },

  watch: {
    dataDetail(val) {
      if (!val) return

      this.data = {
        uuid: val.uuid,
        name: val.name,
        description: val.description,
        locale: val.locale,
        purpose: val.purpose,
        htmlContent: val.htmlContent,
        textContent: val.textContent,
        mailjetData: val.mailjetData,
        createdAt: val.createdAt,
        updatedAt: val.updatedAt,
      }
    },
  },
}
</script>
