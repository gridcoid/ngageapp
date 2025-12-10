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

              <div class="ml-4"></div>

              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger p-button-text"
                @click="removeScopeRow(index)"
              />
            </div>

            <Button
              label="Add Scope"
              icon="pi pi-plus"
              iconPos="left"
              class="p-button-sm p-button-success w-36 h-9"
              @click="addScopeRow"
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

      scopeRows: [
        {
          segmentId: null,
          read: false,
          write: false,
        },
      ],

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

      this.$store
        .dispatch('segment/all')
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
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
      this.$router.push({ path: '/apikey' })
    },

    save() {
      // Process scopeRows into data.scopes
      const scopes = []
      this.scopeRows.forEach((row) => {
        if (row.segmentId) {
          const segment = this.dataSegments.find((s) => s.id === row.segmentId)
          if (segment) {
            // Use segment name or uuid? Using name as it's more readable,
            // but might need to be careful with spaces.
            // Assuming format "Segment Name:read"
            if (row.read) scopes.push(`${segment.name}:read`)
            if (row.write) scopes.push(`${segment.name}:write`)
          }
        }
      })
      this.data.scopes = scopes

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
      // console.log(val)
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
