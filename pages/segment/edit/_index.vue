<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Audience Segments" @click.native="back()" />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Update Segment</div>
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
            <label slot="label" class="title-form">Name</label>
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
  name: 'UpdateSegmentPage',
  layout: 'default',
  head() {
    return {
      title: 'Update - Segment - ' + this.$config.appName,
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
        id: null,
        orgId: null,
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
      const data = {
        segmentUuid: this.$route.params.index,
      }
      this.$store
        .dispatch('segment/detail', data)
        .finally(() => (this.isLoading = false))
    },
    back() {
      this.$router.push({ path: '/segment' })
    },
    save() {
      this.$notifier.showMessage({
        content: 'Updating segment...',
        type: 'loading',
      })

      this.isLoadingToast = true

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('segment/update', this.data)
            .then((res) => {
              if (res.status === 202 || res.status === 200) {
                this.$router.push({ path: '/segment' })

                this.$notifier.showMessage({
                  content: 'Segment updated.',
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
  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid
        this.data.orgId = val.orgId
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
