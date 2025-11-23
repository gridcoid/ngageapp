<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Audience Segments" @click.native="back()" />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Audience Segment Details</div>
      </div>
      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Segment Name</label>
            <el-input v-model="data.name" />
          </el-form-item>
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>

            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="255"
            />
          </el-form-item>
        </el-form>
        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-0" :text="messageError" />
        </Transition>
      </div>
      <div class="footer-card flex justify-end">
        <k-button
          text="Discard"
          class="ml-4"
          style="width: 165px"
          type="secondary"
          @click.native="back()"
        />
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="save()"
        >
          <IconSave />
          <span class="name-btn">Save</span>
        </button>
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
          },
          {
            min: 0,
            max: 150,
            message: 'Max 150 character',
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
    back() {
      this.$router.push({ path: '/audience' })
    },
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
              if (res.status === 201 || res.status === 200) {
                this.$router.push({ path: '/segment' })

                this.$notifier.showMessage({
                  content: 'Segment created.',
                  type: 'success',
                })

                clearInterval(sto)
              } else {
                this.showMessage = true

                const keys = Object.keys(res.data.data.errors[0])
                const arr = []

                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
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
      .btn-discard {
        width: 165px;
      }
      .btn-discard:hover {
        background-color: rgb(243 244 246);
        border: 0px;
      }
      .save-btn {
        width: 165px;
        background: #1b63d4;
        border: 1px solid #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 34px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 10px;
        cursor: pointer;
        .name-btn {
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 1px;
          color: #ffffff;
          padding-left: 10px;
        }
      }
      .save-btn:hover {
        background-color: #053f67;
        border: 0px;
      }
    }
  }
}
</style>
