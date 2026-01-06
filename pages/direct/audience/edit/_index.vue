<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-user text-gray-400 mr-2" /> Update Audience
        </div>
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
            <label slot="label" class="title-form">Name<Req /></label>
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
              :value-on-clear="null"
              @change="(v) => (data.yearOfBirth = v == '' ? null : v)"
            />
          </el-form-item>

          <!-- Education -->
          <el-form-item class="title-form" prop="educationId">
            <label slot="label" class="title-form">Education</label>
            <el-select
              v-model="data.educationId"
              placeholder="Select education"
              class="w-full"
              filterable
              clearable
            >
              <el-option
                v-for="item in dataEducations"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>

          <!-- Gender -->
          <el-form-item class="title-form" prop="genderId">
            <label slot="label" class="title-form">Gender</label>
            <el-select
              v-model="data.genderId"
              placeholder="Select gender"
              class="w-full"
              filterable
              clearable
            >
              <el-option
                v-for="item in dataGenders"
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
              filterable
              clearable
            >
              <el-option
                v-for="item in dataReligions"
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
            <el-input
              v-model="data.address"
              type="textarea"
              autosize
              spellcheck="false"
            />
          </el-form-item>

          <!-- Location Fields -->
          <el-form-item class="title-form" prop="provinceCode">
            <label slot="label" class="title-form">Province</label>
            <el-select
              v-model="data.provinceCode"
              placeholder="Select province"
              class="w-full"
              filterable
              clearable
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
              filterable
              clearable
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
              filterable
              clearable
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
              filterable
              clearable
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

          <!-- Contact Info -->
          <div class="mb-4">
            <label class="title-form block mb-2">Contact Info<Req /></label>
            <div
              v-for="(contact, index) in contactsList"
              :key="'contact-' + index"
              class="flex items-start mb-2"
              style="gap: 10px"
            >
              <el-select
                v-model="contact.typeId"
                placeholder="Contact type"
                style="width: 150px"
              >
                <el-option
                  v-for="item in dataContactTypes"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
              <el-input
                v-model="contact.value"
                :placeholder="
                  contact.typeId === 1
                    ? 'Email address'
                    : contact.typeId === 2
                    ? 'Phone number'
                    : 'Value'
                "
                style="flex: 1"
              />
              <el-input
                v-model="contact.label"
                placeholder="Label info (optional)"
                style="flex: 1"
              />
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="small"
                @click="removeContact(index)"
              />
            </div>
            <el-button
              type="success"
              icon="el-icon-plus"
              @click="addContact"
              size="small"
              circle
            />
          </div>

          <hr class="mb-4" />

          <!-- Additional Info -->
          <div class="mb-4">
            <label class="title-form block mb-2">Additional Info</label>
            <div
              v-for="(info, index) in additionalInfoList"
              :key="'info-' + index"
              class="flex items-start mb-2"
              style="gap: 10px"
            >
              <el-input v-model="info.key" placeholder="Key" style="flex: 1" />
              <el-input
                v-model="info.value"
                placeholder="Value"
                style="flex: 1"
              />
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="small"
                @click="removeAdditionalInfo(index)"
              />
            </div>
            <el-button
              type="success"
              icon="el-icon-plus"
              @click="addAdditionalInfo"
              size="small"
              circle
            />
          </div>

          <hr class="mb-4" />

          <!-- Segment Info -->
          <div class="mb-4">
            <label class="title-form block mb-2">Segments</label>

            <div
              v-for="(segment, index) in segmentsList"
              :key="'segment-' + index"
              class="flex items-start mb-2"
              style="gap: 10px"
            >
              <!-- Select segment from available list -->
              <el-select
                v-model="segmentsList[index]"
                placeholder="Select segment"
                style="flex: 1"
              >
                <el-option
                  v-for="item in dataSegments"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>

              <!-- Optional: show segment description or audience count -->
              <div class="text-gray-400 text-sm italic flex-1 pt-3 ml-5">
                <span v-if="segmentsList[index]">
                  {{ getSegmentDescription(segmentsList[index]) }}
                </span>
              </div>

              <!-- Remove button -->
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="small"
                @click="removeSegment(index)"
              />
            </div>

            <!-- Add new segment -->
            <el-button
              type="success"
              icon="el-icon-plus"
              @click="addSegment"
              size="small"
              circle
            />
          </div>
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
  name: 'UpdateAudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Update Audience - ' + this.$config.appName,
    }
  },
  data() {
    const currentYear = new Date().getFullYear()

    const positiveIntegerValidator = (rule, value, callback) => {
      if (value == null || value === '') return callback() // optional
      if (!Number.isInteger(value) || value <= 0) {
        return callback(new Error('Must be a positive number'))
      }
      callback()
    }

    const yearValidator = (rule, value, callback) => {
      if (value == null || value === '') return callback() // optional
      if (!Number.isInteger(value) || value < 1900 || value > currentYear) {
        return callback(
          new Error(`Year must be between 1900 and ${currentYear}`)
        )
      }
      callback()
    }

    const dateValidator = (rule, value, callback) => {
      if (!value) return callback() // optional
      // value is "yyyy-MM-dd" (string), so try parse
      const d = new Date(value)
      if (isNaN(d.getTime())) return callback(new Error('Invalid date'))
      callback()
    }

    const maxStringValidator = (max) => (rule, value, callback) => {
      if (!value) return callback()
      if (String(value).length > max) {
        return callback(new Error(`Max ${max} characters`))
      }
      callback()
    }

    const contactsValidator = (rule, value, callback) => {
      if (!value || value.length === 0) return callback() // optional

      if (!Array.isArray(value)) {
        return callback(new Error('Contacts must be a list'))
      }

      for (let i = 0; i < value.length; i++) {
        const c = value[i]

        if (typeof c?.typeId !== 'number' || c.typeId <= 0) {
          return callback(new Error(`Contact #${i + 1}: type is required`))
        }

        if (!c.value || c.value.trim().length === 0) {
          return callback(new Error(`Contact #${i + 1}: value is required`))
        }

        if (c.value.length > 50) {
          return callback(
            new Error(`Contact #${i + 1}: value max 50 characters`)
          )
        }

        if (c.label && c.label.length > 50) {
          return callback(
            new Error(`Contact #${i + 1}: label max 50 characters`)
          )
        }
      }

      callback()
    }

    const segmentsValidator = (rule, value, callback) => {
      if (!value || value.length === 0) return callback() // optional

      if (!Array.isArray(value)) {
        return callback(new Error('Segments must be a list'))
      }

      for (let i = 0; i < value.length; i++) {
        const s = value[i]
        if (!Number.isInteger(s) || s <= 0) {
          return callback(
            new Error(`Segment #${i + 1} must be a positive number`)
          )
        }
      }

      callback()
    }

    const additionalInfoValidator = (rule, value, callback) => {
      if (value == null) return callback() // optional

      if (typeof value !== 'object' || Array.isArray(value)) {
        return callback(new Error('Additional Info must be an object'))
      }

      // validate each key/value
      for (const [k, v] of Object.entries(value)) {
        if (typeof v !== 'string') {
          return callback(new Error(`Value of "${k}" must be a string`))
        }
        if (v.length > 200) {
          return callback(
            new Error(`Value of "${k}" may not exceed 200 characters`)
          )
        }
      }

      callback()
    }

    return {
      rules: {
        // NAME — required
        name: [
          {
            required: true,
            message: 'Audience Name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 50,
            message: 'Max 50 characters',
            trigger: 'blur',
          },
        ],

        // DATE OF BIRTH — date (optional)
        dateOfBirth: [
          {
            validator: dateValidator,
            trigger: 'change',
          },
        ],

        // YEAR OF BIRTH — 1900..now (optional)
        yearOfBirth: [
          {
            validator: yearValidator,
            trigger: 'change',
          },
        ],

        // EDUCATION — positive integer (optional)
        educationId: [
          {
            validator: positiveIntegerValidator,
            trigger: 'change',
          },
        ],

        // GENDER — positive integer (optional)
        genderId: [
          {
            validator: positiveIntegerValidator,
            trigger: 'change',
          },
        ],

        // RELIGION — positive integer (optional)
        religionId: [
          {
            validator: positiveIntegerValidator,
            trigger: 'change',
          },
        ],

        // ADDRESS — max 200
        address: [
          {
            validator: maxStringValidator(200),
            trigger: 'blur',
          },
        ],

        // LOCATION CODES — max 13
        provinceCode: [
          { validator: maxStringValidator(13), trigger: 'change' },
        ],
        regencyCode: [{ validator: maxStringValidator(13), trigger: 'change' }],
        districtCode: [
          { validator: maxStringValidator(13), trigger: 'change' },
        ],
        villageCode: [{ validator: maxStringValidator(13), trigger: 'change' }],

        // ARRAYS
        contactsList: [
          {
            validator: contactsValidator,
            trigger: 'change',
          },
        ],

        additionalInfoList: [
          {
            validator: additionalInfoValidator,
            trigger: 'change',
          },
        ],

        segmentsList: [
          {
            validator: segmentsValidator,
            trigger: 'change',
          },
        ],
      },

      isLoading: false,
      showMessage: false,
      messageError: '',

      // Form model sesuai tabel
      data: {
        id: null,
        uuid: null,

        name: '',
        dateOfBirth: null,
        yearOfBirth: null,
        educationId: null,
        genderId: null,
        religionId: null,
        provinceCode: null,
        regencyCode: null,
        districtCode: null,
        villageCode: null,
        address: '',
        contacts: [],
        additionalInfo: null,
        segmentIds: [],
      },

      contactsList: [],
      additionalInfoList: [],
      segmentsList: [],
    }
  },
  computed: {
    ...mapState({
      dataSegments: (state) => state.segment.dataList,

      dataDetail: (state) => state.audience.dataDetail,

      dataProvinces: (state) => state.province.dataList,
      dataRegencies: (state) => state.regency.dataList,
      dataDistricts: (state) => state.district.dataList,
      dataVillages: (state) => state.village.dataList,

      dataEducations: (state) => state.education.dataList,
      dataGenders: (state) => state.gender.dataList,
      dataReligions: (state) => state.religion.dataList,

      dataContactTypes: (state) => state.contactType.dataList,
    }),
  },
  async mounted() {
    this.getSegments()
    await this.getProvince()
    this.getEducation()
    this.getGender()
    this.getReligion()
    this.getContactType()
    this.getDetail()
  },
  methods: {
    getSegments() {
      this.isLoading = true

      this.$store
        .dispatch('segment/all')
        .finally(() => (this.isLoading = false))
    },

    addSegment() {
      this.segmentsList.push(null)
    },

    removeSegment(index) {
      this.segmentsList.splice(index, 1)
    },

    getSegmentDescription(segmentId) {
      const seg = this.dataSegments.find((s) => s.id === segmentId)
      if (seg) return `${seg.audienceCount} audiences`
      return ''
    },

    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('audience/detail', {
          uuid: this.$route.params.index,
        })
        .finally(() => (this.isLoading = false))
    },

    addContact() {
      const has1 = this.contactsList.some((c) => c.typeId === 1)
      const has2 = this.contactsList.some((c) => c.typeId === 2)

      let nextTypeId

      if (this.contactsList.length === 0) {
        nextTypeId = 1
      } else if (has1 && !has2) {
        nextTypeId = 2
      } else if (!has1 && has2) {
        nextTypeId = 1
      } else {
        // both 1 and 2 already exist — fallback (keeps form usable)
        nextTypeId = 1
      }

      this.contactsList.push({
        typeId: nextTypeId,
        value: '',
        label: '',
      })
    },
    removeContact(index) {
      this.contactsList.splice(index, 1)
    },
    addAdditionalInfo() {
      this.additionalInfoList.push({ key: '', value: '' })
    },
    removeAdditionalInfo(index) {
      this.additionalInfoList.splice(index, 1)
    },

    save() {
      this.showMessage = false
      this.messageError = ''

      const info = {}

      this.additionalInfoList.forEach((item) => {
        if (item.key && item.key.trim() !== '') {
          info[item.key.trim()] = item.value
        }
      })

      // ---- ensure unique segmentIds ----
      const filteredSegments = this.segmentsList.filter((s) => s !== null)
      const uniqueSegments = [...new Set(filteredSegments)]

      if (filteredSegments.length !== uniqueSegments.length) {
        this.showMessage = true
        this.messageError = 'Segment must be unique'
        return
      }

      this.data.segmentIds = uniqueSegments

      // ---- ensure additionalInfo keys are unique ----
      const keys = this.additionalInfoList
        .filter((item) => item.key && item.key.trim() !== '')
        .map((item) => item.key.trim().toLowerCase())

      if (new Set(keys).size !== keys.length) {
        this.showMessage = true
        this.messageError = 'Additional info key must be unique'
        return
      }

      this.data.additionalInfo = Object.keys(info).length > 0 ? info : null

      // ---- ensure unique contact typeId ----
      const contacts = this.contactsList.filter(
        (c) => c.typeId !== null && c.value !== ''
      )

      const typeIds = contacts.map((c) => c.typeId)
      if (new Set(typeIds).size !== typeIds.length) {
        this.showMessage = true
        this.messageError = 'Contact type must be unique'
        return
      }

      // ---- ensure email (typeId = 1) exists and is valid ----
      const emailContact = contacts.find((c) => c.typeId === 1)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailContact || !emailRegex.test(emailContact.value.trim())) {
        this.showMessage = true
        this.messageError = 'A valid email is required'
        return
      }

      this.data.contacts = contacts

      // ---- continue as usual ----
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Updating audience...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('audience/update', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ path: '/direct/audience' })

              this.$notifier.showMessage({
                content: 'Audience updated.',
                type: 'success',
              })
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to update audience'

              this.$notifier.showMessage({
                content: 'Audience update failed!',
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

    getEducation() {
      this.isLoading = true

      this.$store
        .dispatch('education/list')
        .finally(() => (this.isLoading = false))
    },

    getGender() {
      this.isLoading = true

      this.$store
        .dispatch('gender/list')
        .finally(() => (this.isLoading = false))
    },

    getReligion() {
      this.isLoading = true

      this.$store
        .dispatch('religion/list')
        .finally(() => (this.isLoading = false))
    },

    getContactType() {
      this.isLoading = true

      this.$store
        .dispatch('contactType/list')
        .finally(() => (this.isLoading = false))
    },

    getProvince() {
      this.isLoading = true

      this.$store
        .dispatch('province/all')
        .finally(() => (this.isLoading = false))
    },

    getRegency(provinceCode) {
      this.isLoading = true

      this.$store.dispatch('regency/all', { provinceCode }).finally(() => {
        this.isLoading = false
      })
    },

    getDistrict(regencyCode) {
      this.isLoading = true

      this.$store.dispatch('district/all', { regencyCode }).finally(() => {
        this.isLoading = false
      })
    },

    getVillage(districtCode) {
      this.isLoading = true

      this.$store.dispatch('village/all', { districtCode }).finally(() => {
        this.isLoading = false
      })
    },
  },
  watch: {
    async dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid

        this.data.name = val.name
        this.data.dateOfBirth = val.dateOfBirth
        this.data.yearOfBirth = val.yearOfBirth

        this.data.educationId = val.educationId
        this.data.genderId = val.genderId
        this.data.religionId = val.religionId

        this.data.provinceCode = val.provinceCode
        if (val.provinceCode) {
          await this.getRegency(val.provinceCode)
          this.data.regencyCode = val.regencyCode

          if (val.regencyCode) {
            await this.getDistrict(val.regencyCode)
            this.data.districtCode = val.districtCode

            if (val.districtCode) {
              await this.getVillage(val.districtCode)
              this.data.villageCode = val.villageCode
            }
          }
        }

        this.data.address = val.address

        if (val.additionalInfo) {
          this.additionalInfoList = Object.entries(val.additionalInfo).map(
            ([key, value]) => ({ key, value })
          )
        }

        if (val.contacts) {
          this.contactsList = val.contacts.map((c) => ({
            typeId: c.typeId,
            value: c.value,
            label: c.label,
          }))
        }

        if (val.segments) {
          this.segmentsList = val.segments.map((s) => s.id)
        }
      }
    },
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
    'data.dateOfBirth'(val) {
      if (val) {
        const year = parseInt(val.split('-')[0])
        if (this.data.yearOfBirth !== year) {
          this.data.yearOfBirth = year
        }
      }
    },
    'data.yearOfBirth'(val) {
      if (val && this.data.dateOfBirth) {
        const parts = this.data.dateOfBirth.split('-')
        const year = parseInt(parts[0])
        if (year !== val) {
          this.data.dateOfBirth = `${val}-${parts[1]}-${parts[2]}`
        }
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
