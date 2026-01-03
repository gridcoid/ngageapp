<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-aspect-ratio text-gray-400 mr-2"></i> Update Widget
        </div>
      </div>

      <div class="body-card">
        <el-form
          ref="widgetForm"
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
        >
          Save
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateWidgetPage',
  layout: 'default',
  head() {
    return {
      title: 'Update Widget - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,
      showMessage: false,
      messageError: '',
      data: {
        type: '',
        queryId: '',
        title: '',
        // grid metadata — preserved when updating
        i: '',
        x: 0,
        y: 0,
        w: 4,
        h: 1,
      },
      queries: [],
    }
  },

  mounted() {
    this.getQueries()
    this.getDetail()
  },

  methods: {
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

    getDetail() {
      this.isLoading = true
      if (this.$store.state.dashboard.widget) {
        this.data = { ...this.$store.state.dashboard.widget }
      } else {
        this.showMessage = true
        this.messageError = 'Widget not found'
        this.$router.back()
      }
    },

    save() {
      this.$notifier.showMessage({
        content: 'Updating widget...',
        type: 'loading',
      })

      this.isLoading = true

      this.$store
        .dispatch('dashboard/updateWidget', {
          uuid: this.$route.params.index,
          widgetUuid: this.data.i,
          widget: {
            type: this.data.type,
            queryId: this.data.queryId,
            title: this.data.title,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ path: '/' }) // dashboard

            this.$notifier.showMessage({
              content: 'Widget updated.',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError =
              res?.data?.data?.errors
                ?.map((e) => Object.values(e)[0])
                .join(', ') || 'Failed to update widget'

            this.$notifier.showMessage({
              content: 'Failed to update widget!',
              type: 'failed',
            })
          }
        })
        .catch((e) => {
          this.showMessage = true
          this.messageError = 'Error: ' + e.message
        })
        .finally(() => {
          this.isLoading = false
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
