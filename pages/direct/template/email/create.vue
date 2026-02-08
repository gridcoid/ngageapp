<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-mail text-gray-500 mr-2" />
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
          <el-form-item prop="name" class="lg:w-1/2">
            <label slot="label">Name<Req /></label>
            <el-input
              v-model="data.name"
              @blur="data.name = data.name?.trim()"
            />
          </el-form-item>

          <!-- Description -->
          <el-form-item prop="description" class="lg:w-1/2">
            <label slot="label">Description</label>
            <el-input
              v-model="data.description"
              @blur="data.description = data.description?.trim()"
              type="textarea"
              :rows="2"
              maxlength="200"
              spellcheck="false"
            />
          </el-form-item>

          <!-- Purpose -->
          <el-form-item prop="purpose" class="lg:w-1/2">
            <label slot="label">Purpose<Req /></label>
            <el-select
              v-model="data.purpose"
              class="w-full"
              filterable
              clearable
            >
              <el-option label="Marketing" value="marketing" />
            </el-select>
          </el-form-item>

          <!-- Copyright -->
          <!-- <el-form-item prop="copyright" class="lg:w-1/2">
            <label slot="label">Copyright</label>
            <el-input v-model="data.copyright" @blur="data.copyright = data.copyright?.trim()" />
          </el-form-item> -->

          <!-- HTML Content -->
          <el-form-item prop="htmlContent">
            <label slot="label">HTML Content<Req /></label>
            <el-input
              v-model="data.htmlContent"
              @blur="data.htmlContent = data.htmlContent?.trim()"
              type="textarea"
              :rows="10"
              spellcheck="false"
              class="font-mono font-xs"
            />
          </el-form-item>

          <!-- Text Content -->
          <el-form-item prop="textContent">
            <label slot="label">Text Content<Req /></label>
            <el-input
              v-model="data.textContent"
              @blur="data.textContent = data.textContent?.trim()"
              type="textarea"
              :rows="5"
              spellcheck="false"
              class="font-sans font-xs"
            />
          </el-form-item>

          <!-- Locale -->
          <el-form-item prop="locale" class="lg:w-1/2">
            <label slot="label">Locale<Req /></label>
            <el-radio-group v-model="data.locale">
              <el-radio label="en_US">English (US)</el-radio>
              <el-radio label="id_ID">Bahasa Indonesia</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- Predefined Tags -->
          <el-form-item prop="predefinedTags">
            <label slot="label">Predefined Tags</label>
            <el-tag
              v-for="tag in predefinedTags"
              :key="tag"
              size="mini"
              type="info"
              class="font-mono mr-2"
              >{{ tag }}</el-tag
            >
            <br />
            <span class="text-red-300">
              The
              <span class="text-red-700 font-mono text-xs">
                [[UNSUB_LINK_EN]]
              </span>
              tag is mandatory in the email content
            </span>
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
        locale: [{ required: true, message: 'Locale is required' }],
        purpose: [{ required: true, message: 'Purpose is required' }],
        htmlContent: [
          {
            required: true,
            message: 'HTML content is required',
            trigger: 'blur',
          },
        ],
        textContent: [
          {
            required: true,
            message: 'Text content is required',
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
        locale: 'en_US',
        purpose: 'marketing',
        copyright: '',
        htmlContent: `<html>
  <body>
    <p>
      Hello world!
    </p>
    <p>
      This e-mail has been sent to [[EMAIL_TO]], <a href="[[UNSUB_LINK_EN]]" target="_blank">click here to unsubscribe</a>.
    </p>
  </body>
</html>`,
        textContent: `Hello world!

This e-mail has been sent to [[EMAIL_TO]], click here to unsubscribe [[UNSUB_LINK_EN]].`,
      },

      predefinedTags: [
        '[[UNSUB_LINK_EN]]',
        '[[EMAIL_TO]]',
        '[[PERMALINK]]',
        '[[SHARE_FACEBOOK]]',
        '[[SHARE_TWITTER]]',
        '[[SHARE_GOOGLE]]',
        '[[SHARE_LINKEDIN]]',
      ],
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
          .dispatch('emailTemplate/create', { ...this.data })
          .then((res) => {
            if (res.status === 201) {
              this.$router.push({ path: '/direct/template/email' })

              this.$notifier.showMessage({
                content: 'Template created successfully.',
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
          .finally(() => (this.isLoading = false))
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
