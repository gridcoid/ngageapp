<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Audiences" @click.native="back()" />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Create New Audience</div>
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          label-width="226px"
          label-position="left"
          :rules="rules"
          hide-required-asterisk
        >
          <!-- Name -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name</label>
            <el-input v-model="data.name" />
          </el-form-item>

          <!-- Date of Birth -->
          <el-form-item
            class="title-form"
            prop="dateOfBirth"
            label="Date of Birth"
          >
            <el-date-picker
              v-model="data.dateOfBirth"
              type="date"
              placeholder="Select date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              placement="bottom-start"
              style="width: 100%"
            />
          </el-form-item>

          <!-- Year of Birth -->
          <el-form-item class="title-form" prop="yearOfBirth">
            <label slot="label" class="title-form">Year of Birth</label>
            <el-input-number
              v-model="data.yearOfBirth"
              :min="1900"
              :max="2100"
            />
          </el-form-item>

          <!-- Gender -->
          <el-form-item class="title-form" prop="genderId">
            <label slot="label" class="title-form">Gender</label>
            <el-select
              v-model="data.genderId"
              placeholder="Select gender"
              class="w-full"
            >
              <el-option
                v-for="item in genderOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>

          <!-- Religion -->
          <el-form-item class="title-form" prop="religionId">
            <label slot="label" class="title-form">Religion</label>
            <el-select
              v-model="data.religionId"
              placeholder="Select religion"
              class="w-full"
            >
              <el-option
                v-for="item in religionOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>

          <hr class="mb-4" />

          <!-- Address -->
          <el-form-item class="title-form" prop="address">
            <label slot="label" class="title-form">Address</label>
            <el-input v-model="data.address" type="textarea" autosize />
          </el-form-item>

          <!-- Location Fields -->
          <el-form-item class="title-form" prop="provinceCode">
            <label slot="label" class="title-form">Province</label>
            <el-select
              v-model="data.provinceCode"
              placeholder="Select province"
              class="w-full"
            >
              <el-option
                v-for="p in dataProvinces"
                :key="p.code"
                :label="p.name"
                :value="p.code"
              />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="regencyCode">
            <label slot="label" class="title-form">Regency</label>
            <el-select
              v-model="data.regencyCode"
              placeholder="Select regency"
              class="w-full"
              :disabled="!data.provinceCode"
            >
              <el-option
                v-for="r in dataRegencies"
                :key="r.code"
                :label="r.name"
                :value="r.code"
              />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="districtCode">
            <label slot="label" class="title-form">District</label>
            <el-select
              v-model="data.districtCode"
              placeholder="Select district"
              class="w-full"
              :disabled="!data.regencyCode"
            >
              <el-option
                v-for="d in dataDistricts"
                :key="d.code"
                :label="d.name"
                :value="d.code"
              />
            </el-select>
          </el-form-item>

          <el-form-item class="title-form" prop="villageCode">
            <label slot="label" class="title-form">Village</label>
            <el-select
              v-model="data.villageCode"
              placeholder="Select village"
              class="w-full"
              :disabled="!data.districtCode"
            >
              <el-option
                v-for="v in dataVillages"
                :key="v.code"
                :label="v.name"
                :value="v.code"
              />
            </el-select>
          </el-form-item>

          <hr class="mb-4" />

          <!-- Additional Info -->
          <el-form-item class="title-form" prop="additionalInfo">
            <label slot="label" class="title-form">Additional Info</label>
            <el-input
              v-model="data.additionalInfoRaw"
              type="textarea"
              autosize
              placeholder='{"key": "value"}'
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
import { mapState } from 'vuex'

export default {
  name: 'CreateAudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Create - Audience - ' + this.$config.appName,
    }
  },
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: 'Audience Name is required',
            trigger: 'blur',
          },
          { min: 0, max: 150, message: 'Max 150 characters', trigger: 'blur' },
        ],
      },

      isLoading: false,
      isLoadingToast: false,
      showMessage: false,
      messageError: '',

      // Form model sesuai tabel
      data: {
        name: '',
        dateOfBirth: null,
        yearOfBirth: null,
        genderId: null,
        religionId: null,
        orgId: null,
        provinceCode: null,
        regencyCode: null,
        districtCode: null,
        villageCode: null,
        address: '',
        additionalInfo: null,
        additionalInfoRaw: '',
      },

      // Dropdown dummy (ganti dari API Anda)
      genderOptions: [],
      religionOptions: [],
      orgOptions: [],
      provinceOptions: [],
      regencyOptions: [],
      districtOptions: [],
      villageOptions: [],
    }
  },
  computed: {
    ...mapState({
      dataProvinces: (state) => state.province.dataList,
      dataRegencies: (state) => state.regency.dataList,
      dataDistricts: (state) => state.district.dataList,
      dataVillages: (state) => state.village.dataList,
    }),
  },
  mounted() {
    this.getProvince()
  },
  methods: {
    back() {
      this.$router.push({ path: '/audience' })
    },

    save() {
      // Convert JSON input
      try {
        this.data.additionalInfo = this.data.additionalInfoRaw
          ? JSON.parse(this.data.additionalInfoRaw)
          : null
      } catch (e) {
        this.messageError = 'Invalid JSON in Additional Info'
        this.showMessage = true
        return
      }

      this.$notifier.showMessage({
        content: 'Creating audience...',
        type: 'loading',
      })

      this.isLoadingToast = true

      const sto = setTimeout(() => {
        this.$store
          .dispatch('audience/create', this.data)
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              this.$router.push({ path: '/audience' })

              this.$notifier.showMessage({
                content: 'Audience created.',
                type: 'success',
              })
              clearInterval(sto)
            } else {
              this.showMessage = true
              const keys = Object.keys(res.data.data.errors[0])
              const arr = []
              keys.forEach((key) => arr.push(res.data.data.errors[0][key]))
              this.messageError = arr.join(', ')

              this.$notifier.showMessage({
                content: 'Audience failed. Please try again!',
                type: 'failed',
              })
              clearInterval(sto)
            }
          })
          .catch(() => {
            this.isLoading = false
            clearInterval(sto)
          })
      }, 1000)
    },

    getProvince() {
      this.isLoading = true

      this.$store
        .dispatch('province/list')
        .finally(() => (this.isLoading = false))
    },

    getRegency(provinceCode) {
      this.isLoading = true

      this.$store.dispatch('regency/list', { provinceCode }).finally(() => {
        this.isLoading = false
      })
    },

    getDistrict(regencyCode) {
      this.isLoading = true

      this.$store.dispatch('district/list', { regencyCode }).finally(() => {
        this.isLoading = false
      })
    },

    getVillage(districtCode) {
      this.isLoading = true

      this.$store.dispatch('village/list', { districtCode }).finally(() => {
        this.isLoading = false
      })
    },
  },
  watch: {
    'data.provinceCode'(val) {
      this.data.regencyCode = null // reset regency when province changes
      if (val) {
        this.getRegency(val)
      }
    },
    'data.regencyCode'(val) {
      this.data.districtCode = null // reset district when regency changes
      if (val) {
        this.getDistrict(val)
      }
    },
    'data.districtCode'(val) {
      this.data.villageCode = null // reset village when district changes
      if (val) {
        this.getVillage(val)
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
