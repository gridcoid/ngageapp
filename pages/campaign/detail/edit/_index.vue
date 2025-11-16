<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Campaign Details" @click.native="back()" />
    </div>
    <div class="card-content">
      <div class="header-card flex items-center" @click="back()">
        <div class="title">Campaign Details</div>
      </div>
      <div class="body-card">
        <!-- Campaign Name -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
              Campaign Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model="data.name"
              class="border-2 w-full rounded py-2 px-4 leading-tight title-form"
              type="text"
            />
          </div>
        </div>
        <!-- Description -->
        <div class="md:flex mb-6">
          <div class="md:w-1/3">
            <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
              Description
            </label>
          </div>
          <div class="md:w-2/3">
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="255"
              class="title-form"
            />
          </div>
        </div>
        <!-- Campaign Period -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
              Campaign Period
            </label>
          </div>
          <div class="md:w-2/3 flex items-center">
            <el-date-picker
              v-model="valueDate"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              align="right"
              style="width: 100%"
            />
          </div>
        </div>
        <!-- Advertiser -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
              Advertiser
            </label>
          </div>
          <div class="md:w-2/3">
            <el-select
              v-model="data.advertiserId"
              style="width: 100%"
              class="title-form"
            >
              <el-option
                v-for="item in dataAdvertiser"
                :key="item.id"
                :label="item.name"
                class="title-form"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
        <!-- Campaign Type -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
              Campaign Type
            </label>
          </div>
          <div class="md:w-2/3">
            <el-select
              v-model="data.typeId"
              style="width: 100%"
              class="title-form"
              placeholder="Choose Campaign Type"
            >
              <el-option
                v-for="item in dataCampaignType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
                class="title-form"
              />
            </el-select>
          </div>
        </div>
        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-6" :text="messageError" />
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
        <div
          class="flex items-center justify-center save-btn no-select"
          @click="save()"
        >
          <IconSave />
          <span class="name-btn">Save</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditCampaignPage',
  layout: 'default',
  data() {
    return {
      showMessage: false,
      messageError: '',
      isLoading: false,
      data: {
        id: '',
        name: '',
        description: '',
        selectDate: null,
        selectDate2: null,
        advertiser: '',
        typeId: '',
      },
      valueDate: [],

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
      detailCampaign: (state) => {
        return state.campaign.detailCampaign
      },
    }),
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.getAdvertiser()
      this.getCampaignTypes()
      this.getDetail()
    },
    getAdvertiser() {
      this.isLoading = true
      this.$store
        .dispatch('campaign/getAdvertiser')
        .then(() => {
          this.isLoading = false
          this.data.name = this.detailCampaign.name
          this.data.description = this.detailCampaign.description
          this.data.advertiserId = this.detailCampaign.advertiserId
          this.data.typeId = this.detailCampaign.typeId
          this.valueDate = []
          this.valueDate.push(this.detailCampaign.startDate)
          this.valueDate.push(this.detailCampaign.endDate)
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    getCampaignTypes() {
      this.isLoading = true
      this.$store
        .dispatch('campaign/getCampaignTypes')
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    getDetail() {
      const data = {
        campaignTypeId: this.$route.params.index,
      }
      this.$store
        .dispatch('campaign/getDetail', data)
        .then(() => {})
        .catch(() => {})
    },
    back() {
      this.$router.go(-1)
    },
    save() {
      this.$notifier.showMessage({
        content: 'Edit campaign...',
        type: 'loading',
      })
      this.isLoading = true
      this.data.id = this.$route.params.index

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
            .dispatch('campaign/update', this.data)
            .then((res) => {
              this.isLoading = false
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                this.$store.commit('campaign/SET_EDIT_CAMPAIGN', true)
                this.$notifier.showMessage({
                  content: 'Campaign edited.',
                  type: 'success',
                })
                this.$router.push({
                  path: `/campaign/detail/${this.$route.params.index}`,
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
                  content:
                    'Campaign edit failed. Please try again!, ' +
                    this.messageError,
                  type: 'failed',
                })
                clearInterval(x)
              }
            })
            .catch(() => {
              clearInterval(x)
              this.isLoading = false
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
    .btn-create {
      max-width: 240px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 34px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
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
