<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-aspect-ratio text-gray-400 mr-2"></i> Create New
          Widget
        </div>
      </div>
      <div class="body-card">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="data"
          label-width="200px"
          label-position="left"
          hide-required-asterisk
        >
          <el-form-item class="title-form" prop="type">
            <label slot="label" class="title-form">Type<Req /></label>
            <el-select
              v-model="data.type"
              placeholder="Select Widget Type"
              class="w-full"
              filterable
              clearable
            >
              <el-option label="Metric" value="metric" />
              <el-option label="Chart" value="chart" />
              <el-option label="Table" value="table" />
              <el-option label="Map" value="map" />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="queryId">
            <label slot="label" class="title-form">Query<Req /></label>
            <el-select
              v-model="data.queryId"
              placeholder="Select Query"
              filterable
              clearable
              class="w-full"
            >
              <el-option
                v-for="q in queries"
                :key="q.id"
                :label="q.name"
                :value="q.id"
              />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="title">
            <label slot="label" class="title-form">Title<Req /></label>
            <el-input v-model="data.title" placeholder="Widget title" />
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
export default {
  name: 'CreateWidgetPage',
  layout: 'default',
  head() {
    return {
      title: 'Create Widget - ' + this.$config.appName,
    }
  },
  data() {
    return {
      rules: {
        type: [
          {
            required: true,
            message: 'Widget type is required',
            trigger: 'change',
          },
        ],
        queryId: [
          {
            required: true,
            message: 'Query is required',
            trigger: 'change',
          },
        ],
        title: [
          {
            required: true,
            message: 'Widget title is required',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 50,
            message: 'Max 50 characters',
            trigger: 'blur',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        type: '', // metric / chart / table
        queryId: '', // linked query id
        title: '', // widget title
      },
      queries: [],
    }
  },
  methods: {
    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating widget...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('dashboard/addWidget', {
            uuid: this.$route.params.uuid,
            widget: {
              ...this.data,
              x: 0, // full width default
              y: 0,
              w: 4, // grid width full
              h: 1, // default height
            },
          })
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/' }) // dashboard

              this.$notifier.showMessage({
                content: 'Widget created.',
                type: 'success',
              })
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to create widget'

              this.$notifier.showMessage({
                content: 'Failed to create widget.',
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
    getQueries() {
      this.$store
        .dispatch('query/list', {
          page: 1,
          size: 1000,
          name: '',
          sort: 'createdAt_desc',
        })
        .then((res) => {
          this.queries = res?.data?.data?.rows || []
        })
    },
  },
  mounted() {
    this.getQueries()
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
