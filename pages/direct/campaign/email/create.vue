<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-mail text-gray-400 mr-2" /> Create New Campaign
        </div>
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="data"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- Title -->
          <el-form-item class="title-form" prop="title">
            <label slot="label" class="title-form">Title<Req /></label>
            <el-input v-model="data.title" />
          </el-form-item>

          <!-- Contacts List -->
          <el-form-item class="title-form" prop="segmentId">
            <label slot="label" class="title-form">Segment<Req /></label>
            <el-select
              v-model="data.segmentId"
              placeholder="Select segment"
              class="w-full"
              filterable
              clearable
            >
              <el-option
                v-for="list in dataSegments"
                :key="list.id"
                :label="list.name"
                :value="list.id"
              />
            </el-select>
          </el-form-item>

          <!-- Template -->
          <el-form-item class="title-form" prop="templateId">
            <label slot="label" class="title-form">Template<Req /></label>
            <el-select
              v-model="data.templateId"
              placeholder="Select template"
              class="w-full"
              filterable
              clearable
            >
              <el-option
                v-for="tpl in dataTemplates"
                :key="tpl.id"
                :label="tpl.name"
                :value="tpl.id"
              />
            </el-select>
          </el-form-item>

          <!-- Subject -->
          <el-form-item class="title-form" prop="subject">
            <label slot="label" class="title-form">Subject<Req /></label>
            <el-input v-model="data.subject" />
          </el-form-item>

          <!-- Sender -->
          <el-form-item class="title-form" prop="sender">
            <label slot="label" class="title-form">Sender<Req /></label>
            <el-select
              v-model="data.sender"
              placeholder="Select sender"
              class="w-full"
              filterable
              clearable
            >
              <el-option
                v-for="sender in dataSenders"
                :key="sender.ID"
                :label="`${sender.Name} <${sender.Email}>`"
                :value="sender.ID"
              />
            </el-select>
          </el-form-item>

          <!-- Sender Name -->
          <el-form-item class="title-form" prop="senderName">
            <label slot="label" class="title-form">Sender Name<Req /></label>
            <el-input v-model="data.senderName" />
          </el-form-item>

          <!-- Sender Email -->
          <el-form-item class="title-form" prop="senderEmail">
            <label slot="label" class="title-form">Sender Email<Req /></label>
            <el-input v-model="data.senderEmail" />
          </el-form-item>

          <!-- Reply To -->
          <el-form-item class="title-form" prop="replyTo">
            <label slot="label" class="title-form">Reply To</label>
            <el-input v-model="data.replyTo" />
          </el-form-item>

          <!-- Locale -->
          <el-form-item class="title-form" prop="locale">
            <label slot="label" class="title-form">Locale<Req /></label>
            <el-radio-group v-model="data.locale">
              <el-radio label="en_US">English (US)</el-radio>
              <el-radio label="id_ID">Bahasa Indonesia</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-6" :text="messageError" />
        </Transition>
      </div>

      <div class="footer-card flex justify-end gap-3">
        <el-button type="primary" @click="$router.back()" plain class="w-32">
          Discard
        </el-button>

        <el-button
          icon="el-icon-check"
          type="primary"
          @click="save"
          class="w-32"
          :loading="isLoading"
          :disabled="isLoading"
        >
          Save
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreateCampaignPage',
  layout: 'default',

  head() {
    return {
      title: 'Create Campaign - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        title: [
          {
            required: true,
            message: 'Title is required',
            trigger: 'blur',
          },
        ],

        segmentId: [
          {
            required: true,
            message: 'Segment is required',
            trigger: 'change',
          },
        ],

        templateId: [
          {
            required: true,
            message: 'Template is required',
            trigger: 'change',
          },
        ],

        subject: [
          {
            required: true,
            message: 'Subject is required',
            trigger: 'blur',
          },
        ],

        sender: [
          {
            required: true,
            message: 'Sender is required',
            trigger: 'change',
          },
        ],

        senderName: [
          {
            required: true,
            message: 'Sender name is required',
            trigger: 'blur',
          },
        ],

        senderEmail: [
          {
            required: true,
            message: 'Sender email is required',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Invalid email format',
            trigger: 'blur',
          },
        ],

        replyTo: [
          {
            type: 'email',
            message: 'Invalid email format',
            trigger: 'blur',
          },
        ],

        locale: [
          {
            required: true,
            message: 'Locale is required',
            trigger: 'change',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        title: '',
        segmentId: null,
        templateId: null,
        subject: '',
        sender: null,
        senderName: '',
        senderEmail: '',
        replyTo: null,
        locale: 'en_US', // default
      },
    }
  },

  computed: {
    ...mapState({
      dataSegments: (state) => state.segment.dataList,
      dataTemplates: (state) => state.emailTemplate.dataList,
      dataSenders: (state) => state.mailjetSender.dataList,
    }),
  },

  mounted() {
    this.getSenders()
    this.getSegments()
    this.getTemplates()
  },

  methods: {
    getSegments() {
      this.isLoading = true

      this.$store
        .dispatch('segment/all')
        .finally(() => (this.isLoading = false))
    },

    getTemplates() {
      this.isLoading = true

      this.$store
        .dispatch('emailTemplate/all')
        .finally(() => (this.isLoading = false))
    },

    getSenders() {
      this.isLoading = true

      this.$store
        .dispatch('mailjetSender/all')
        .finally(() => (this.isLoading = false))
    },

    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating campaign...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('emailCampaign/create', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/direct/campaign/email' })

              this.$notifier.showMessage({
                content: 'Campaign created.',
                type: 'success',
              })
            } else {
              this.showMessage = true
              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to create campaign'

              this.$notifier.showMessage({
                content: 'Campaign creation failed!',
                type: 'failed',
              })
            }
          })
          .catch((e) => {
            console.error(e)
            this.showMessage = true
            this.messageError = 'Error: ' + e.message
          })
          .finally(() => {
            this.isLoading = false
          })
      })
    },
  },

  watch: {
    // watch data.segmentId
    'data.segmentId': {
      handler(val) {
        const selectedSegment = this.dataSegments.find(
          (segment) => segment.id === val
        )
        // console.log(selectedSegment)
      },
    },

    // watch data.templateId
    'data.templateId': {
      handler(val) {
        const selectedTemplate = this.dataTemplates.find(
          (template) => template.id === val
        )
        this.data.subject = selectedTemplate.subject
        this.data.replyTo = selectedTemplate.replyTo
      },
    },
  },
}
</script>

<style lang="scss" scoped>
:root {
  --vs-line-height: 1.75;
}
:deep() {
  --vs-line-height: 1.75;
}
.container {
  .header-content {
    margin-bottom: 20px;
  }
  .card-content {
    width: 720px;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 15px 0px 0px 0px;
    .header-card {
      padding-left: 20px;
      padding-right: 20px;
      .title {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 20px;
        color: #333333;
        margin-right: 10px;
      }
    }
    .body-card {
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      .title-form {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .to-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .footer-card {
      border-top: 1px solid #e2e2e2;
      padding: 20px;
    }
  }
}
</style>
