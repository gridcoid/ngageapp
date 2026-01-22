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
          <i class="ti ti-mail text-gray-500 mr-2" /> Email Campaign Details
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
        <!-- Main Info Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column -->
          <div class="space-y-8">
            <!-- Campaign Info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-flag mr-2 text-gray-500"></i>
                Campaign Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Title
                  </label>
                  <div class="text-gray-900 font-medium text-lg">
                    {{ data.title || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Subject
                  </label>
                  <div class="text-gray-900">
                    {{ data.subject || '-' }}
                  </div>
                </div>

                <div v-if="data.mailjetData">
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Mailjet Campaign ID
                  </label>
                  <div class="text-gray-900">
                    {{ data.mailjetData.ID || '-' }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Mailjet Stats (Optional) -->
            <div v-if="data.mailjetStat">
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-chart-bar mr-2 text-gray-500"></i>
                Statistics
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <!-- Sent -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Sent
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageSentCount || 0 }}
                    </div>
                  </div>

                  <!-- Opened -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Opened
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageOpenedCount || 0 }}
                    </div>
                  </div>

                  <!-- Clicked -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Clicked
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageClickedCount || 0 }}
                    </div>
                  </div>

                  <!-- Spam -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Spam
                    </div>
                    <div class="text-xl font-semibold text-red-600">
                      {{ data.mailjetStat.MessageSpamCount || 0 }}
                    </div>
                  </div>

                  <!-- Hard Bounce -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Hard Bounce
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageHardBouncedCount || 0 }}
                    </div>
                  </div>

                  <!-- Soft Bounce -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Soft Bounce
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageSoftBouncedCount || 0 }}
                    </div>
                  </div>

                  <!-- Unsubscribed -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Unsubscribed
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageUnsubscribedCount || 0 }}
                    </div>
                  </div>

                  <!-- Blocked -->
                  <div>
                    <div
                      class="text-xs font-semibold text-gray-500 uppercase mb-1"
                    >
                      Blocked
                    </div>
                    <div class="text-xl font-semibold text-gray-900">
                      {{ data.mailjetStat.MessageBlockedCount || 0 }}
                    </div>
                  </div>
                </div>

                <!-- Optional meta info -->
                <div
                  class="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-500"
                >
                  <div>Source ID: {{ data.mailjetStat.SourceID || '-' }}</div>
                  <div>API Key ID: {{ data.mailjetStat.APIKeyID || '-' }}</div>
                </div>
              </div>
            </div>

            <!-- Sender Info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-send mr-2 text-gray-500"></i>
                Sender Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Sender ID
                  </label>
                  <div class="text-gray-900">
                    {{ data.sender || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Sender Name
                  </label>
                  <div class="text-gray-900">
                    {{ data.senderName || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Sender Email
                  </label>
                  <div class="text-gray-900">
                    {{ data.senderEmail || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Reply To
                  </label>
                  <div class="text-gray-900">
                    {{ data.replyTo || '-' }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-8">
            <!-- Segments -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-folder mr-2 text-gray-500"></i> Segments
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div
                  class="flex items-start p-3 bg-white rounded border border-gray-100 shadow-sm"
                >
                  <div class="flex-shrink-0 mt-1">
                    <i class="ti ti-users text-gray-400"></i>
                  </div>

                  <div class="ml-3 w-full">
                    <!-- 👇 justify-between -->
                    <div class="flex items-center justify-between w-full">
                      <NuxtLink
                        :to="`/direct/segment/${data.segment?.uuid}/audience`"
                        class="text-blue-500 hover:text-blue-700 font-medium break-all block"
                      >
                        {{ data.segment?.name || '-' }}
                      </NuxtLink>

                      <span
                        class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border whitespace-nowrap"
                      >
                        {{ data.audienceCount }} audience{{
                          data.audienceCount === 1 ? '' : 's'
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Template -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-template mr-2 text-gray-500"></i> Template
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div
                  class="flex items-start p-3 bg-white rounded border border-gray-100 shadow-sm"
                >
                  <div class="flex-shrink-0 mt-1">
                    <i class="ti ti-code text-gray-400"></i>
                  </div>

                  <div class="ml-3 w-full">
                    <!-- 👇 justify-between -->
                    <div class="flex items-center justify-between w-full">
                      <NuxtLink
                        :to="`/direct/template/email/detail/${data.template?.uuid}`"
                        class="text-blue-500 hover:text-blue-700 font-medium break-all block"
                      >
                        {{ data.template?.name || '-' }}
                      </NuxtLink>
                    </div>
                  </div>
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
  name: 'EmailCampaignDetailPage',
  layout: 'default',

  head() {
    return {
      title: 'Email Campaign Detail - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,

      data: {
        id: null,
        uuid: '',
        title: '',
        segmentId: null,
        templateId: null,
        segment: null,
        template: null,
        subject: '',
        sender: null,
        senderName: '',
        senderEmail: '',
        replyTo: null,
        locale: 'en_US', // default
        mailjetData: null,
        mailjetStat: null,
        audienceCount: 0,
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.emailCampaign.dataDetail,
      dataSenders: (state) => state.mailjetSender.dataList,
    }),
  },

  async mounted() {
    await this.getSenders()
    this.getDetail()
  },

  methods: {
    getSenders() {
      this.isLoading = true

      this.$store
        .dispatch('mailjetSender/all')
        .finally(() => (this.isLoading = false))
    },

    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('emailCampaign/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString()
    },

    toEdit() {
      this.$router.push({
        path: '/direct/campaign/email/edit/' + this.$route.params.uuid,
      })
    },
  },

  watch: {
    // watch data.sender
    'data.sender': {
      handler(val) {
        const selectedSender = this.dataSenders.find(
          (sender) => sender.ID === val
        )

        if (selectedSender) {
          this.data.senderName = selectedSender.Name
          this.data.senderEmail = selectedSender.Email
        }
      },
    },
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid
        this.data.title = val.title
        this.data.segmentId = val.segmentId
        this.data.templateId = val.templateId
        this.data.segment = val.segment
        this.data.template = val.template
        this.data.subject = val.subject
        this.data.replyTo = val.replyTo
        this.data.sender = +val.sender
        this.data.senderName = this.dataSenders.find(
          (sender) => sender.ID === +val.sender
        )?.Name
        this.data.senderEmail = this.dataSenders.find(
          (sender) => sender.ID === +val.sender
        )?.Email
        this.data.mailjetData = val.mailjetData
        this.data.mailjetStat = val.mailjetStat
        this.data.audienceCount = val.audienceCount
      }
    },
  },
}
</script>
