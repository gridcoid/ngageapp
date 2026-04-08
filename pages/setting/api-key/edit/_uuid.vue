<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-key text-gray-400 mr-2"></i> Update API Key
        </div>
      </div>

      <Transition>
        <div
          v-if="showApiKey"
          class="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4"
        >
          <div class="font-semibold text-yellow-800 mb-2">
            🔐 New API Key (shown only once)
          </div>

          <p class="text-sm text-yellow-700 mb-3">
            Please copy and store this API key securely. You won’t be able to
            see it again.
          </p>

          <div class="flex items-center gap-3">
            <el-input :value="createdApiKey" readonly class="flex-1" />

            <el-button type="primary" @click="copyApiKey"> Copy </el-button>
          </div>
        </div>
      </Transition>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="data"
          :disabled="showApiKey"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- Name -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name<Req /></label>
            <el-input
              v-model="data.name"
              @blur="data.name = data.name?.trim()"
            />
          </el-form-item>

          <!-- Revoked -->
          <el-form-item class="title-form" prop="revoked">
            <label slot="label" class="title-form">Revoked</label>
            <el-switch v-model="data.revoked" />
          </el-form-item>

          <!-- Reset API Key -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form text-red-600">
              Reset API Key
            </label>

            <el-switch v-model="resetKey" :disabled="showApiKey" />

            <p v-if="resetKey" class="text-xs text-red-500 mt-1">
              ⚠️ Resetting will invalidate the old API key immediately.
            </p>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="!showApiKey" class="footer-card flex justify-end gap-3">
        <el-button type="primary" @click="$router.back()" plain class="w-32">
          Discard
        </el-button>
        <el-button
          icon="el-icon-check"
          type="primary"
          @click="save()"
          class="w-32"
          :loading="isLoading"
          :disabled="isLoading"
        >
          Save
        </el-button>
      </div>
      <div v-if="showApiKey" class="footer-card flex justify-end">
        <el-button type="primary" @click="$router.push('/setting/api-key')">
          Done
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UpdateApiKeyPage',
  layout: 'default',

  head() {
    return {
      title: 'Update API Key - ' + this.$config.appName,
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
            message: 'Max 50 characters',
            trigger: 'blur',
          },
        ],
        revoked: [
          {
            type: 'boolean',
            trigger: 'change',
          },
        ],
      },

      isLoading: false,

      data: {
        id: null,
        uuid: null,

        name: '',
        expiresAt: null,
        scopes: [],
        revoked: false,
      },

      resetKey: false,

      createdApiKey: null,
      showApiKey: false,
    }
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('apiKey/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    getSegments() {
      this.isLoading = true

      this.$store
        .dispatch('segment/all')
        .finally(() => (this.isLoading = false))
    },

    save() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.isLoading = true

        const payload = {
          ...this.data,
          resetKey: this.resetKey,
        }

        this.$store
          .dispatch('apiKey/update', payload)
          .then((res) => {
            if (res.status === 200) {
              if (res.data.data.apiKey) {
                this.createdApiKey = res.data.data.apiKey
                this.showApiKey = true
              } else {
                this.$router.push({ path: '/setting/api-key' })
              }

              this.$notifier.showMessage({
                content: 'API Key updated successfully.',
                type: 'success',
              })
            }
          })
          .finally(() => (this.isLoading = false))
      })
    },

    copyApiKey() {
      navigator.clipboard.writeText(this.createdApiKey).then(() => {
        this.$notifier.showMessage({
          content: 'API key copied to clipboard',
          type: 'success',
        })
      })
    },
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.apiKey.dataDetail,

      dataSegments: (state) => {
        return state.segment.dataList
      },
    }),
  },

  mounted() {
    this.getSegments()
    this.getDetail()
  },

  watch: {
    async dataDetail(val) {
      if (val) {
        this.data = {
          id: val.id,
          uuid: val.uuid,

          name: val.name,
          expiresAt: val.expiresAt,
          scopes: val.scopes,
          revoked: val.revoked,
        }
      }
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
