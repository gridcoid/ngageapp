<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-folder text-gray-400 mr-2" /> Create New Segment
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
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name<Req /></label>
            <el-input v-model="data.name" />
          </el-form-item>
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="200"
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
  name: 'CreateSegmentPage',
  layout: 'default',
  head() {
    return {
      title: 'Create - Segment - ' + this.$config.appName,
    }
  },
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'Segment Name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 50,
            message: 'Max 50 character',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: false,
          },
        ],
      },
      isLoading: false,
      isLoadingToast: false,
      showMessage: false,
      messageError: '',
      data: {
        name: '',
        description: '',
      },
    }
  },
  methods: {
    save() {
      this.$notifier.showMessage({
        content: 'Creating segment...',
        type: 'loading',
      })

      this.isLoadingToast = true

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('segment/create', this.data)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push({ path: '/segment' })

                this.$notifier.showMessage({
                  content: 'Segment created.',
                  type: 'success',
                })

                clearInterval(sto)
              } else {
                this.showMessage = true

                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []

                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })

                this.messageError = arr.join(', ')

                this.$notifier.showMessage({
                  content: 'Segment failed. Please try again!',
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
