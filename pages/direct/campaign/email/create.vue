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

          <!-- Subject -->
          <el-form-item class="title-form" prop="subject">
            <label slot="label" class="title-form">Subject<Req /></label>
            <el-input v-model="data.subject" />
          </el-form-item>

          <!-- Sender -->
          <el-form-item class="title-form" prop="senderId">
            <label slot="label" class="title-form">Sender<Req /></label>
            <el-select
              v-model="data.senderId"
              placeholder="Select sender"
              filterable
              class="w-full"
            >
              <el-option
                v-for="sender in dataSenders"
                :key="sender.ID"
                :label="`${sender.Name} <${sender.Email}>`"
                :value="sender.ID"
              />
            </el-select>
          </el-form-item>

          <!-- Segment -->
          <el-form-item class="title-form" prop="segmentId">
            <label slot="label" class="title-form">Segment<Req /></label>
            <el-select
              v-model="data.segmentId"
              placeholder="Select segment"
              filterable
              class="w-full"
            >
              <el-option
                v-for="segment in dataSegments"
                :key="segment.id"
                :label="segment.name"
                :value="segment.id"
              />
            </el-select>
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
            transform: (v) => (v ? v.trim() : v),
          },
          {
            max: 100,
            message: 'Max 100 character',
            trigger: 'blur',
          },
        ],
        subject: [
          {
            required: true,
            message: 'Subject is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            max: 150,
            message: 'Max 150 character',
            trigger: 'blur',
          },
        ],
        senderId: [
          {
            required: true,
            message: 'Sender is required',
            trigger: 'change',
          },
        ],
        segmentId: [
          {
            required: true,
            message: 'Segment is required',
            trigger: 'change',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        title: '',
        subject: '',
        senderId: null,
        segmentId: null,
      },
    }
  },

  computed: {
    ...mapState({
      dataSegments: (state) => state.segment.dataList,
      dataSenders: (state) => state.mailjetSender.dataList,
    }),
  },

  mounted() {
    this.getSenders()
    this.getSegments()
  },

  methods: {
    getSegments() {
      this.isLoading = true

      this.$store
        .dispatch('segment/all')
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
