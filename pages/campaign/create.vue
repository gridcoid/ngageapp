<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Campaign" @click.native="back()" />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Campaign Details</div>
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
            <label slot="label" class="title-form">Campaign Name</label>
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
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Campaign Period</label>
            <div class="flex items-center">
              <el-date-picker
                v-model="valueDate"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                placement="bottom-start"
                style="width: 100%"
              />
            </div>
          </el-form-item>
          <el-form-item class="title-form" prop="advertiser">
            <label slot="label" class="title-form">Advertiser</label>
            <el-select
              v-model="data.advertiserId"
              style="width: 100%"
              placeholder="Choose Advertiser"
            >
              <el-option
                v-for="item in dataAdvertiser"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="title-form" prop="campaignType">
            <label slot="label" class="title-form">Campaign Type</label>
            <el-select
              v-model="data.typeId"
              placeholder="Choose Campaign Type"
              style="width: 100%"
            >
              <el-option
                v-for="item in dataCampaignType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
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
    <!-- <transition name="slide">
      <Toast
        v-if="isLoadingToast"
        style="position: fixed; bottom: 20%; left: 4%"
      />
    </transition> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CreateCampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Create - Campaign - ' + this.$config.appName,
    }
  },
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'Campaign Name is required',
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
        date1: [
          {
            required: true,
            message: 'Please pick a start date',
            trigger: 'blur',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a end date',
            trigger: 'blur',
          },
        ],
        advertiser: [
          {
            required: true,
            message: 'Advertiser is required',
            trigger: 'blur',
          },
        ],
        campaignType: [
          {
            required: true,
            message: 'Campaign Type is required',
            trigger: 'blur',
          },
        ],
      },
      isLoading: false,
      isLoadingToast: false,
      showMessage: false,
      toastMessage: false,
      messageError: '',
      data: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        advertiserId: '',
        typeId: '',
      },
      valueDate: null,
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
    }
  },
  computed: {
    ...mapState({
      dataAdvertiser: (state) => {
        return state.campaign.dataAdvertiser
      },
      dataCampaignType: (state) => {
        return state.campaign.dataCampaignType
      },
    }),
    btnCreate() {
      if (
        this.data.name === '' ||
        this.data.description === '' ||
        this.data.startDate === null ||
        this.data.endDate === null ||
        this.data.advertiserId === '' ||
        this.data.typeId === ''
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.getAdvertiser()
      this.getCampaignTypes()
    },
    getAdvertiser() {
      this.isLoading = true
      this.$store.dispatch('campaign/getAdvertiser').finally(() => {
        this.isLoading = false
      })
    },
    getCampaignTypes() {
      this.isLoading = true
      this.$store.dispatch('campaign/getCampaignTypes').finally(() => {
        this.isLoading = false
      })
    },
    back() {
      this.$router.push({ path: '/campaign' })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    save() {
      this.$notifier.showMessage({
        content: 'Creating campaign...',
        type: 'loading',
      })
      this.isLoadingToast = true
      if (this.valueDate !== null) {
        this.data.startDate = this.valueDate[0]
        this.data.endDate = this.valueDate[1]
      } else {
        this.data.startDate = ''
        this.data.endDate = ''
      }
      const x = setTimeout(
        () =>
          this.$store
            .dispatch('campaign/createCampaign', this.data)
            .then((res) => {
              if (res.status === 201 || res.status === 200) {
                this.$router.push({ path: '/campaign' })
                this.$notifier.showMessage({
                  content: 'Campaign created.',
                  type: 'success',
                })
                clearInterval(x)
              } else {
                this.showMessage = true
                const keys = Object.keys(res.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content: 'Campaign failed. Please try again!',
                  type: 'failed',
                })
                clearInterval(x)
              }
            })
            .catch(() => {
              this.isLoading = false
              clearInterval(x)
            }),
        1000
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

:root {
  --vs-line-height: 1.75;
}
:deep() {
  --vs-line-height: 1.75;
}
.btn-disabled {
  background: #f1f1f1;
  border: 1px solid #f1f1f1;
  color: #9a9a9a;
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
