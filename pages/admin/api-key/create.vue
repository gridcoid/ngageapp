<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to API Keys" @click.native="back()" />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Create New API Key</div>
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- Name -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name</label>
            <el-input v-model="data.name" />
          </el-form-item>

          <!-- Description -->
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="255"
            />
          </el-form-item>

          <!-- Expiration -->
          <el-form-item class="title-form" prop="expiresAt">
            <label slot="label" class="title-form">Expiration Date</label>
            <el-date-picker
              v-model="data.expiresAt"
              type="date"
              placeholder="Optional"
              style="width: 100%"
            />
          </el-form-item>

          <!-- Scopes -->
          <el-form-item class="title-form" prop="scopes">
            <label slot="label" class="title-form"
              >Scopes (comma-separated)</label
            >
            <el-input
              v-model="scopesText"
              placeholder="Example: read,write,admin (optional)"
            />
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-0" :text="messageError" />
        </Transition>
      </div>

      <div class="footer-card flex justify-end gap-3">
        <Button
          label="Discard"
          class="p-button-sm p-button-outlined p-button-primary w-36"
          @click="back()"
        />
        <Button
          label="Save"
          icon="pi pi-save"
          iconPos="left"
          class="p-button-sm p-button-primary w-36 ml-3"
          @click="save()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreateApiKeyPage',
  layout: 'default',

  head() {
    return {
      title: 'Create - API Key - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'API Key Name is required',
            trigger: 'blur',
          },
          {
            min: 0,
            max: 150,
            message: 'Max 150 characters',
            trigger: 'blur',
          },
        ],
        description: [{ required: false }],
        expiresAt: [{ required: false }],
        scopes: [{ required: false }],
      },

      isLoading: false,
      isLoadingToast: false,
      showMessage: false,
      messageError: '',

      scopesText: '', // UI only

      data: {
        name: '',
        description: '',
        expiresAt: null,
        scopes: [],
      },
    }
  },

  methods: {
    getSegments() {
      this.isLoading = true

      const data = {
        page: 1,
        size: 1000,
        name: '',
        sort: 'createdAt_desc',
      }

      this.$store
        .dispatch('segment/list', data)
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },

    back() {
      this.$router.push({ path: '/apikey' })
    },

    save() {
      // convert scopesText → array
      if (this.scopesText.trim() !== '') {
        this.data.scopes = this.scopesText
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
      }

      this.$notifier.showMessage({
        content: 'Creating API key...',
        type: 'loading',
      })

      this.isLoadingToast = true

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('apikey/create', this.data)
            .then((res) => {
              if (res.status === 201 || res.status === 200) {
                this.$router.push({ path: '/apikey' })

                this.$notifier.showMessage({
                  content: 'API Key created.',
                  type: 'success',
                })

                clearInterval(sto)
              } else {
                this.showMessage = true

                const keys = Object.keys(res.data.data.errors[0])
                const arr = []

                keys.forEach((key) => arr.push(res.data.data.errors[0][key]))

                this.messageError = arr.join(', ')

                this.$notifier.showMessage({
                  content: 'API Key creation failed. Please try again!',
                  type: 'failed',
                })

                clearInterval(sto)
              }
            })
            .catch(() => {
              this.isLoading = false
              clearInterval(sto)
            }),
        1000
      )
    },
  },

  computed: {
    ...mapState({
      dataSegments: (state) => {
        return state.segment.dataList
      },
    }),
  },

  watch: {
    dataSegments(val) {
      console.log(val)
    },
  },

  mounted() {
    this.getSegments()
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
  padding: 20px;
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
