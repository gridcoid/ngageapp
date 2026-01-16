<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center justify-between">
        <div class="title">
          <i class="ti ti-brackets-contain text-gray-400 mr-2"></i> Create JSON
          Import Source
        </div>
        <i @click="clear()" class="ti ti-trash text-red-500 cursor-pointer" />
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          :rules="rules"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- URL -->
          <el-form-item class="title-form" prop="url">
            <label slot="label" class="title-form">API URL</label>
            <el-input
              v-model="data.url"
              placeholder="https://api.example.com/users"
            />
          </el-form-item>

          <!-- Auth Type -->
          <el-form-item class="title-form" prop="authType">
            <label slot="label" class="title-form">Authorization</label>

            <el-select
              v-model="data.authType"
              placeholder="Select auth type"
              class="w-full"
              filterable
              clearable
            >
              <el-option label="None" value="none" />
              <el-option label="Bearer Token" value="bearer" />
              <el-option label="API Key" value="apiKey" />
            </el-select>
          </el-form-item>

          <!-- Token Header Name -->
          <el-form-item
            v-if="data.authType !== 'none'"
            class="title-form"
            prop="tokenHeader"
          >
            <label slot="label" class="title-form">Token Header</label>

            <el-input
              v-model="data.tokenHeader"
              placeholder="Authorization or x-api-key"
            />
          </el-form-item>

          <!-- Token Value -->
          <el-form-item
            v-if="data.authType !== 'none'"
            class="title-form"
            prop="tokenValue"
          >
            <label slot="label" class="title-form">Token Value</label>

            <el-input
              v-model="data.tokenValue"
              placeholder="Paste your token value"
            />
          </el-form-item>

          <!-- Pagination Type -->
          <el-form-item class="title-form" prop="paginationType">
            <label slot="label" class="title-form">Pagination</label>

            <el-select
              v-model="data.paginationType"
              placeholder="Select pagination"
              class="w-full"
              filterable
              clearable
            >
              <el-option label="None" value="none" />
              <el-option label="Query Parameter (page=1)" value="query" />
              <el-option label="Next Page Field in Response" value="nextPage" />
            </el-select>
          </el-form-item>

          <!-- Query Pagination Fields -->
          <template v-if="data.paginationType === 'query'">
            <el-form-item class="title-form">
              <label slot="label" class="title-form">Page Param Name</label>
              <el-input
                v-model="data.pageParam"
                placeholder="page"
                style="width: 250px"
              />
            </el-form-item>

            <el-form-item class="title-form">
              <label slot="label" class="title-form">Page Size Param</label>
              <el-input
                v-model="data.pageSizeParam"
                placeholder="perPage"
                style="width: 250px"
              />
            </el-form-item>

            <el-form-item class="title-form">
              <label slot="label" class="title-form">Page Size</label>
              <el-input-number v-model="data.pageSize" :min="1" :max="500" />
            </el-form-item>
          </template>

          <!-- Next Page Field -->
          <el-form-item
            v-if="data.paginationType === 'nextPage'"
            class="title-form"
          >
            <label slot="label" class="title-form">Next Page Field</label>
            <el-input v-model="data.nextPageField" placeholder="nextPage" />
          </el-form-item>

          <!-- Root JSON path -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Root Array Path</label>

            <el-input
              v-model="data.rootField"
              placeholder="e.g. data.items (leave empty if root is array)"
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
        >
          Save
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateJsonImportPage',
  layout: 'default',

  head() {
    return {
      title: 'Create JSON Import - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        url: [
          { required: true, message: 'API URL is required', trigger: 'blur' },
        ],
        authType: [{ required: true }],
      },

      showMessage: false,
      messageError: '',

      data: {
        url: '',
        authType: 'none',

        tokenHeader: 'Authorization',
        tokenValue: '',

        paginationType: 'none',

        pageParam: 'page',
        pageSizeParam: 'perPage',
        pageSize: 50,

        nextPageField: 'nextPage',

        rootField: '',
      },
    }
  },

  methods: {
    save() {
      try {
        localStorage.setItem('jsonImportConfig', JSON.stringify(this.data))

        this.$notifier.showMessage({
          content: 'Config saved locally.',
          type: 'success',
        })
      } catch (e) {
        this.$notifier.showMessage({
          content: 'Failed to save config.',
          type: 'failed',
        })
      }
    },
    clear() {
      localStorage.removeItem('jsonImportConfig')
      this.$notifier.showMessage({
        content: 'Config cleared.',
        type: 'success',
      })
    },
  },

  mounted() {
    try {
      const saved = localStorage.getItem('jsonImportConfig')

      if (saved) {
        const parsed = JSON.parse(saved)

        // merge into data (keeps defaults for missing fields)
        this.data = {
          ...this.data,
          ...parsed,
        }
      }
    } catch (e) {
      // ignore corrupt JSON silently
    }
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
