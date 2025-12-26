<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to API Keys" @click.native="back()" />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Update API Key</div>
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
            <label slot="label" class="title-form">Scopes</label>

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

          <!-- Revoked -->
          <el-form-item class="title-form" prop="revoked">
            <label slot="label" class="title-form">Revoked</label>
            <el-switch v-model="data.revoked" />
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-0" :text="messageError" />
        </Transition>
      </div>

      <div class="footer-card flex justify-end gap-3">
        <el-button type="primary" @click="back()" plain class="w-32">
          Discard
        </el-button>
        <el-button
          icon="el-icon-check"
          type="primary"
          @click="save()"
          class="w-32"
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
  name: 'UpdateApiKeyPage',
  layout: 'default',

  head() {
    return {
      title: 'Update - API Key - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'API key name is required',
            trigger: 'blur',
          },
          {
            min: 0,
            max: 150,
            message: 'Max 150 characters',
            trigger: 'blur',
          },
        ],
        expiresAt: [{ required: false }],
        scopes: [{ required: false }],
      },

      isLoading: false,
      isLoadingToast: false,
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
    getDetail() {
      const data = {
        apiKeyUuid: this.$route.params.index,
      }

      this.isLoading = true

      this.$store
        .dispatch('apiKey/detail', data)
        .finally(() => (this.isLoading = false))
    },

    back() {
      this.$router.push({ path: '/admin/api-key' })
    },

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

    back() {
      this.$router.push({ path: '/admin/api-key' })
    },

    save() {
      // Process scopeRows into data.scopes
      this.data.scopes = this.scopeRows
        .filter((row) => row.segmentId)
        .map((row) => ({
          segmentId: row.segmentId,
          read: row.read,
          write: row.write,
        }))

      this.$notifier.showMessage({
        content: 'Updating API key...',
        type: 'loading',
      })

      this.isLoadingToast = true

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('apiKey/update', this.data)
            .then((res) => {
              if (res.status === 202 || res.status === 200) {
                this.$router.push({ path: '/admin/api-key' })

                this.$notifier.showMessage({
                  content: 'API Key updated.',
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
                  content: 'API Key update failed. Please try again!',
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
          orgId: val.orgId,
          name: val.name,
          expiresAt: val.expiresAt,
          scopes: val.scopes,
          revoked: val.revoked,
        }

        this.scopeRows = val.scopes.map((scope) => ({
          segmentId: scope.segmentId,
          read: scope.read,
          write: scope.write,
        }))
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
