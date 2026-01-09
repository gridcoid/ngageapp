<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-template text-gray-400 mr-2" />
          Create Mailjet Template
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
          <!-- Name -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name<Req /></label>
            <el-input v-model="data.name" />
          </el-form-item>

          <!-- Description -->
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="200"
            />
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
export default {
  name: 'CreateMailjetTemplatePage',
  layout: 'default',

  head() {
    return {
      title: 'Create Mailjet Template - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'Name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 50,
            message: 'Max 50 character',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: false,
          },
          {
            max: 200,
            message: 'Max 200 character',
            trigger: 'blur',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        name: '',
        description: '',
      },
    }
  },

  methods: {
    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating template...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('mailjetTemplate/create', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/direct/mailjet-template' })

              this.$notifier.showMessage({
                content: 'Template created.',
                type: 'success',
              })
            } else {
              this.showMessage = true
              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to create template'

              this.$notifier.showMessage({
                content: 'Template creation failed!',
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
