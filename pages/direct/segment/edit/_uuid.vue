<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-folder text-gray-500 mr-2" /> Update Segment
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
  name: 'UpdateSegmentPage',
  layout: 'default',
  head() {
    return {
      title: 'Update Segment - ' + this.$config.appName,
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
            min: 0,
            max: 50,
            message: 'Max 50 character',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: false,
          },
          {
            max: 200,
            message: 'Max 200 character',
            trigger: 'blur',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        id: null,
        uuid: null,

        name: '',
        description: '',
      },
    }
  },
  mounted() {
    this.getDetail()
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.segment.dataDetail,
    }),
  },
  methods: {
    getDetail() {
      this.isLoading = true
      this.$store
        .dispatch('segment/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },
    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Updating segment...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('segment/update', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/direct/segment' })

              this.$notifier.showMessage({
                content: 'Segment updated.',
                type: 'success',
              })
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to update segment'

              this.$notifier.showMessage({
                content: 'Segment update failed!',
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
  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid

        this.data.name = val.name
        this.data.description = val.description
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
