<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-mail text-gray-400 mr-2" />
          Create Email (Mailjet) Template
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
          <el-form-item prop="name">
            <label slot="label">Name<Req /></label>
            <el-input v-model="data.name" />
          </el-form-item>

          <!-- Description -->
          <el-form-item prop="description">
            <label slot="label">Description</label>
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="2"
              maxlength="200"
              spellcheck="false"
            />
          </el-form-item>

          <!-- Subject -->
          <el-form-item prop="subject">
            <label slot="label">Subject<Req /></label>
            <el-input
              v-model="data.subject"
              :placeholder="placeholders.subject"
            />
          </el-form-item>

          <!-- Content Type -->
          <el-form-item prop="contentType">
            <label slot="label">Content Type<Req /></label>
            <el-radio-group v-model="data.contentType">
              <el-radio label="html">HTML</el-radio>
              <el-radio label="mjml">MJML</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- HTML Content -->
          <el-form-item v-if="data.contentType === 'html'" prop="htmlContent">
            <label slot="label">HTML Content<Req /></label>
            <el-input
              v-model="data.htmlContent"
              type="textarea"
              :rows="10"
              :placeholder="placeholders.html"
              spellcheck="false"
            />
          </el-form-item>

          <!-- MJML Content -->
          <el-form-item v-if="data.contentType === 'mjml'" prop="mjmlContent">
            <label slot="label">MJML Content<Req /></label>
            <el-input
              v-model="data.mjmlContent"
              type="textarea"
              :rows="10"
              placeholder="<mjml>...</mjml>"
              spellcheck="false"
            />
          </el-form-item>

          <!-- Text fallback -->
          <el-form-item prop="textContent">
            <label slot="label">Text Content</label>
            <el-input
              v-model="data.textContent"
              type="textarea"
              :rows="2"
              placeholder="Plain text version of the email"
              spellcheck="false"
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
  name: 'CreateEmailTemplatePage',
  layout: 'default',

  head() {
    return {
      title: 'Create Email Template - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
          { max: 50, message: 'Max 50 characters', trigger: 'blur' },
        ],
        description: [
          { max: 200, message: 'Max 200 characters', trigger: 'blur' },
        ],
        subject: [
          { required: true, message: 'Subject is required', trigger: 'blur' },
        ],
        contentType: [{ required: true, message: 'Content type is required' }],
        htmlContent: [
          {
            required: true,
            message: 'HTML content is required',
            trigger: 'blur',
          },
        ],
        mjmlContent: [
          {
            required: true,
            message: 'MJML content is required',
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
        subject: '',
        contentType: 'html',
        htmlContent: '',
        mjmlContent: '',
        textContent: '',
      },

      placeholders: {
        subject: 'Email Subject',
        html: '<p>Hello {{var:Name}}</p>',
      },
    }
  },

  methods: {
    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        const payload = {
          ...this.data,
          // ensure only one content field is sent
          htmlContent:
            this.data.contentType === 'html' ? this.data.htmlContent : null,
          mjmlContent:
            this.data.contentType === 'mjml' ? this.data.mjmlContent : null,
        }

        this.$notifier.showMessage({
          content: 'Creating template...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('emailTemplate/create', payload)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/direct/template/email' })

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
