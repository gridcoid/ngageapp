<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-aspect-ratio text-gray-400 mr-2"></i> Add New Widget
          to Dashboard
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
          <el-form-item class="title-form" prop="definitionId">
            <label slot="label" class="title-form"
              >Setting (Data Source)<Req
            /></label>
            <el-select
              v-model="data.definitionId"
              placeholder="Select Setting (Data Source)"
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

          <!-- Display As (only for grouped definition) -->
          <el-form-item
            v-if="isGroupedDefinition"
            class="title-form"
            prop="type"
          >
            <label slot="label" class="title-form">Display As</label>
            <el-radio-group v-model="data.type">
              <el-radio label="table">Table</el-radio>
              <el-radio label="chart">Chart</el-radio>
              <el-radio label="map">Map</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- Chart Type (only if chart selected) -->
          <el-form-item
            v-if="data.type === 'chart'"
            class="title-form"
            prop="chartType"
          >
            <label slot="label" class="title-form">Chart Type</label>
            <el-radio-group v-model="data.chartType">
              <el-radio label="bar">Bar</el-radio>
              <el-radio label="line">Line</el-radio>
              <el-radio label="pie">Pie</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item class="title-form" prop="title">
            <label slot="label" class="title-form">Title<Req /></label>
            <el-input
              v-model="data.title"
              @blur="data.title = data.title?.trim()"
              placeholder="Widget title"
            />
          </el-form-item>
        </el-form>
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
        title: [
          {
            required: true,
            message: 'Widget title is required',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 100,
            message: 'Max 100 characters',
            trigger: 'blur',
          },
        ],
        definitionId: [
          {
            required: true,
            message: 'Query is required',
            trigger: 'change',
          },
        ],
      },

      isLoading: false,

      data: {
        title: '', // widget title
        definitionId: '', // linked query id
        type: 'number', // number | table | chart | map
        chartType: 'bar', // bar | line | pie | doughnut
      },

      definitionDetail: null,
      queries: [],
    }
  },
  methods: {
    save() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating widget...',
          type: 'loading',
        })

        this.isLoading = true

        if (!this.isGroupedDefinition) this.data.type = 'number'

        this.$store
          .dispatch('dashboard/addWidget', {
            uuid: this.$route.params.uuid,
            widget: {
              ...this.data,
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$router.push({ path: '/' }) // dashboard

              this.$notifier.showMessage({
                content: 'Widget created successfully.',
                type: 'success',
              })
            }
          })
          .finally(() => (this.isLoading = false))
      })
    },
    getQueries() {
      this.$store
        .dispatch('definition/list', {
          page: 1,
          size: 1000,
          name: '',
          sort: 'createdAt_desc',
        })
        .then((res) => {
          this.queries = res?.data?.data?.rows || []
        })
    },
    getDefinitionDetail(id) {
      this.$store.dispatch('definition/detailById', { id }).then((res) => {
        const def = res?.data?.data

        this.definitionDetail = def

        const metric = def?.definition?.metrics?.[0]

        // default widget type
        /*
        if (metric?.type === 'group') {
          this.data.type = metric.display === 'chart' ? 'chart' : 'table'
        } else {
          this.data.type = 'number'
        }
        */
      })
    },
  },
  mounted() {
    this.getQueries()
  },
  computed: {
    isGroupedDefinition() {
      const metric = this.definitionDetail?.definition?.metrics?.[0]
      return metric?.type === 'group'
    },
  },
  watch: {
    'data.definitionId'(val) {
      if (!val) {
        this.definitionDetail = null
        this.data.type = 'number'
        return
      }

      this.getDefinitionDetail(val)

      const selected = this.queries.find((q) => q.id === val)

      if (selected) this.data.title = selected.name
    },
    'data.type'(val) {
      if (val === 'chart') {
        this.data.chartType = 'bar'
      } else {
        this.data.chartType = null
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
