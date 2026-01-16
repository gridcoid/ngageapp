<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-key text-gray-400 mr-2"></i> Create New API Key
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

          <!-- Expiration -->
          <el-form-item
            class="title-form"
            prop="expiresAt"
            label="Expiration Date"
          >
            <el-date-picker
              v-model="data.expiresAt"
              type="date"
              placeholder="Select date (optional)"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              placement="bottom-start"
              style="width: 100%"
            />
          </el-form-item>

          <!-- Scopes -->
          <el-form-item class="title-form" prop="scopes">
            <label slot="label" class="title-form">Scopes<Req /></label>

            <div
              v-for="(row, index) in scopeRows"
              :key="index"
              class="flex items-center mb-3"
            >
              <el-select
                v-model="row.segmentId"
                placeholder="Select Segment"
                class="mr-3"
                style="width: 250px"
                filterable
                clearable
              >
                <el-option
                  v-for="item in dataSegments"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>

              <div class="ml-4"></div>

              <el-checkbox v-model="row.read" class="mr-3">Read</el-checkbox>
              <el-checkbox v-model="row.write" class="mr-3">Write</el-checkbox>

              <div class="ml-6"></div>

              <el-button
                type="danger"
                icon="el-icon-delete"
                @click="removeScopeRow(index)"
                size="small"
                circle
              />
            </div>

            <el-button
              type="success"
              icon="el-icon-plus"
              @click="addScopeRow"
              size="small"
              circle
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
          @click="save()"
          class="w-32"
          :loading="isLoading"
          :disable="isLoading"
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
  name: 'CreateApiKeyPage',
  layout: 'default',
  head() {
    return {
      title: 'Create API Key - ' + this.$config.appName,
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
        expiresAt: [
          {
            required: false,
          },
        ],
        scopes: [
          {
            required: true,
            message: 'Scopes is required',
            trigger: 'change',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      scopeRows: [
        {
          segmentId: null,
          read: false,
          write: false,
        },
      ],

      data: {
        name: '',
        expiresAt: null,
        scopes: [],
      },
    }
  },
  methods: {
    getSegments() {
      this.isLoading = true

      this.$store.dispatch('segment/all').finally(() => {
        this.isLoading = false
      })
    },

    addScopeRow() {
      this.scopeRows.push({
        segmentId: null,
        read: false,
        write: false,
      })
    },

    removeScopeRow(index) {
      this.scopeRows.splice(index, 1)
    },

    save() {
      this.showMessage = false
      this.messageError = ''

      // Process scopeRows into data.scopes
      this.data.scopes = this.scopeRows
        .filter((row) => row.segmentId)
        .map((row) => ({
          segmentId: row.segmentId,
          read: row.read,
          write: row.write,
        }))

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating API key...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('apiKey/create', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/admin/api-key' })

              this.$notifier.showMessage({
                content: 'API Key created.',
                type: 'success',
              })
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to create API key'

              this.$notifier.showMessage({
                content: 'API Key creation failed!',
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
  computed: {
    ...mapState({
      dataSegments: (state) => {
        return state.segment.dataList
      },
    }),
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
