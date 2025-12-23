<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Dashboard" @click.native="back()" />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Create New Widget</div>
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
            <label slot="label" class="title-form">Widget Type</label>
            <el-select v-model="data.type" placeholder="Select Widget Type">
              <el-option label="Metric" value="metric" />
              <el-option label="Chart" value="chart" />
              <el-option label="Table" value="table" />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="queryId">
            <label slot="label" class="title-form">Query</label>
            <el-input v-model="data.queryId" placeholder="Enter query ID" />
          </el-form-item>

          <el-form-item class="title-form" prop="title">
            <label slot="label" class="title-form">Title</label>
            <el-input v-model="data.title" placeholder="Widget title" />
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
export default {
  name: 'CreateWidgetPage',
  layout: 'default',
  head() {
    return {
      title: 'Create - Widget - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,
      showMessage: false,
      messageError: '',
      data: {
        type: '', // metric / chart / table
        queryId: '', // linked query id
        title: '', // widget title
      },
    }
  },
  methods: {
    back() {
      this.$router.push({ path: '/' }) // redirect to dashboard
    },
    save() {
      this.$notifier.showMessage({
        content: 'Creating widget...',
        type: 'loading',
      })

      this.isLoading = true

      this.$store
        .dispatch('dashboard/addWidget', {
          dashboardId: this.$route.query.dashboardId, // pass dashboardId as query
          widget: {
            ...this.data,
            x: 0, // full width default
            y: 0,
            w: 12, // grid width full
            h: 1, // default height
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            this.$router.push({ path: '/' }) // dashboard
            this.$notifier.showMessage({
              content: 'Widget created.',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError =
              res.data?.data?.errors
                ?.map((e) => Object.values(e)[0])
                .join(', ') || 'Failed to create widget'
            this.$notifier.showMessage({
              content: 'Failed to create widget!',
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
