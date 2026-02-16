<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <!-- HEADER -->
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-layout-dashboard text-gray-500 mr-2" />
          Edit Widget Setting
        </div>
      </div>

      <!-- BODY -->
      <div class="body-card">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="form"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- NAME -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name<Req /></label>
            <el-input
              v-model="form.name"
              @blur="form.name = form.name?.trim()"
            />
          </el-form-item>

          <!-- DESCRIPTION -->
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="form.description"
              type="textarea"
              :rows="2"
              maxlength="200"
              spellcheck="false"
            />
          </el-form-item>

          <!-- ================= SCOPE ================= -->
          <el-divider>Audience Scope</el-divider>

          <el-form-item class="title-form">
            <label slot="label" class="title-form">Scope</label>
            <el-radio-group v-model="form.scope.type">
              <el-radio label="all">All Audience</el-radio>
              <el-radio label="segment">Specific Segment</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item v-if="form.scope.type === 'segment'" class="title-form">
            <label slot="label" class="title-form">Segment</label>
            <el-select
              v-model="form.scope.segmentId"
              filterable
              class="title-form"
            >
              <el-option
                v-for="s in dataSegments"
                :key="s.id"
                :label="s.name"
                :value="s.id"
              />
            </el-select>
          </el-form-item>

          <!-- ================= METRIC ================= -->
          <el-divider>Metric</el-divider>

          <!-- Metric type -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Metric</label>
            <el-select v-model="metric.type" class="w-full">
              <el-option label="Total" value="total" />
              <el-option label="Specific Field" value="field" />
              <el-option label="Additional Field" value="custom" />
            </el-select>
          </el-form-item>

          <!-- Grouped -->
          <el-form-item v-if="metric.type !== 'total'" class="title-form">
            <label slot="label" class="title-form">Grouped</label>
            <el-switch v-model="metric.grouped" />
            <span v-if="!metric.grouped" class="text-gray-400 italic ml-2">
              show number only
            </span>
            <span v-else class="text-gray-400 italic ml-2">
              show table or chart
            </span>
          </el-form-item>

          <!-- Display -->
          <!--el-form-item
            v-if="metric.grouped && metric.type !== 'total'"
            class="title-form"
          >
            <label slot="label" class="title-form">Display As</label>
            <el-radio-group v-model="metric.display">
              <el-radio label="table">Table</el-radio>
              <el-radio label="chart">Chart</el-radio>
            </el-radio-group>
          </el-form-item-->

          <!-- ================= SPECIFIC FIELD ================= -->
          <el-form-item v-if="metric.type === 'field'" class="title-form">
            <label slot="label" class="title-form">Field</label>
            <el-select v-model="metric.field" class="w-full">
              <el-option label="Province" value="province" />
              <el-option label="Regency" value="regency" />
              <el-option label="District" value="district" />
              <el-option label="Village" value="village" />
              <el-option label="Gender" value="gender" />
              <el-option label="Education" value="education" />
              <el-option label="Religion" value="religion" />
            </el-select>
          </el-form-item>

          <!-- Province -->
          <el-form-item
            v-if="metric.field === 'province' && !metric.grouped"
            class="title-form"
          >
            <label slot="label" class="title-form">Province</label>
            <el-select v-model="metric.value" filterable class="w-full">
              <el-option
                v-for="o in dataProvinces"
                :key="o.code"
                :label="o.name"
                :value="o.code"
              />
            </el-select>
          </el-form-item>

          <!-- Regency -->
          <template v-if="metric.field === 'regency' && !metric.grouped">
            <el-form-item class="title-form">
              <label slot="label" class="title-form">Province</label>
              <el-select
                v-model="metric.provinceCode"
                filterable
                class="w-full"
              >
                <el-option
                  v-for="o in dataProvinces"
                  :key="o.code"
                  :label="o.name"
                  :value="o.code"
                />
              </el-select>
            </el-form-item>

            <el-form-item class="title-form">
              <label slot="label" class="title-form">Regency</label>
              <el-select v-model="metric.value" filterable class="w-full">
                <el-option
                  v-for="o in dataRegencies"
                  :key="o.code"
                  :label="o.name"
                  :value="o.code"
                />
              </el-select>
            </el-form-item>
          </template>

          <!-- Gender / Education / Religion -->
          <el-form-item
            v-if="
              ['gender', 'education', 'religion'].includes(metric.field) &&
              !metric.grouped
            "
            class="title-form"
          >
            <label slot="label" class="title-form">Value</label>
            <el-select v-model="metric.value" filterable class="w-full">
              <el-option
                v-for="o in fieldOptions"
                :key="o.id"
                :label="o.name"
                :value="o.id"
              />
            </el-select>
          </el-form-item>

          <!-- ================= CUSTOM ================= -->
          <el-form-item v-if="metric.type === 'custom'" class="title-form">
            <label slot="label" class="title-form">Input Key</label>
            <el-input v-model="metric.inputKey" placeholder="e.g. motorcycle" />
          </el-form-item>

          <el-form-item
            v-if="metric.type === 'custom' && !metric.grouped"
            class="title-form"
          >
            <label slot="label" class="title-form">Input Value</label>
            <el-input v-model="metric.inputValue" placeholder="e.g. yamaha" />
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6" :text="messageError" />
        </Transition>
      </div>

      <!-- FOOTER -->
      <div class="footer-card flex justify-end gap-3">
        <el-button plain class="w-32" @click="$router.back()"
          >Discard</el-button
        >
        <el-button
          type="primary"
          class="w-32"
          :loading="isLoading"
          @click="save"
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
  name: 'EditDefinitionPage',
  layout: 'default',

  data() {
    return {
      isLoading: false,
      showMessage: false,
      messageError: '',

      form: {
        id: null,
        uuid: null,
        name: '',
        description: '',
        scope: {
          type: 'all',
          segmentId: null,
        },
      },

      metric: {
        type: 'total',
        grouped: false,
        display: 'table',
        field: null,
        value: null,
        provinceCode: null,
        inputKey: '',
        inputValue: '',
      },

      rules: {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
          { max: 50, message: 'Max 50 character', trigger: 'blur' },
        ],
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (s) => s.definition.dataDetail,

      dataSegments: (s) => s.segment.dataList,
      dataProvinces: (s) => s.province.dataList,
      dataRegencies: (s) => s.regency.dataList,
      dataEducations: (s) => s.education.dataList,
      dataGenders: (s) => s.gender.dataList,
      dataReligions: (s) => s.religion.dataList,
    }),

    fieldOptions() {
      if (this.metric.field === 'gender') return this.dataGenders
      if (this.metric.field === 'education') return this.dataEducations
      if (this.metric.field === 'religion') return this.dataReligions
      return []
    },
  },

  mounted() {
    this.getSegments()
    this.getProvince()
    this.getDetail()
  },

  watch: {
    /* ===== REHYDRATE FROM SERVER ===== */
    dataDetail(val) {
      if (!val) return

      // BASIC
      this.form.id = val.id
      this.form.uuid = val.uuid
      this.form.name = val.name
      this.form.description = val.description

      // SCOPE
      this.form.scope.type = val.definition?.scope?.type || 'all'
      this.form.scope.segmentId = val.definition?.scope?.segmentId || null

      // METRIC (only first metric, by design)
      const m = val.definition?.metrics?.[0]
      if (!m) return

      // RESET FIRST
      Object.assign(this.metric, {
        type: 'total',
        grouped: false,
        display: 'table',
        field: null,
        value: null,
        provinceCode: null,
        inputKey: '',
        inputValue: '',
      })

      // COUNT
      if (m.type === 'count') {
        if (!m.filter) {
          this.metric.type = 'total'
          return
        }

        const filterKey = Object.keys(m.filter)[0]

        // ADDITIONAL FIELD
        if (filterKey.startsWith('userInput.')) {
          this.metric.type = 'custom'
          this.metric.grouped = false
          this.metric.inputKey = filterKey.replace('userInput.', '')
          this.metric.inputValue = m.filter[filterKey]
          return
        }

        // SPECIFIC FIELD
        this.metric.type = 'field'
        this.metric.grouped = false
        this.metric.field = filterKey.replace(/(Id|Code)$/, '')
        this.metric.value = m.filter[filterKey]
        return
      }

      // GROUPED
      if (m.type === 'group') {
        this.metric.grouped = true
        this.metric.display = m.display || 'table'

        if (m.groupBy.startsWith('userInput.')) {
          this.metric.type = 'custom'
          this.metric.inputKey = m.groupBy.replace('userInput.', '')
          return
        }

        this.metric.type = 'field'
        this.metric.field = m.groupBy
      }
    },
  },

  methods: {
    /* ===== LOAD DETAIL ===== */
    getDetail() {
      this.isLoading = true
      this.$store
        .dispatch('definition/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    /* ===== SUPPORT DATA ===== */
    getSegments() {
      this.$store.dispatch('segment/all')
    },
    getProvince() {
      this.$store.dispatch('province/all')
    },
    getRegency(provinceCode) {
      this.$store.dispatch('regency/all', { provinceCode })
    },
    getEducation() {
      this.$store.dispatch('education/list')
    },
    getGender() {
      this.$store.dispatch('gender/list')
    },
    getReligion() {
      this.$store.dispatch('religion/list')
    },

    /* ===== SAVE ===== */
    save() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        const payload = {
          uuid: this.form.uuid,
          name: this.form.name,
          description: this.form.description,
          definition: {
            scope: this.form.scope,
            metrics: [this.buildMetric()],
          },
        }

        this.isLoading = true

        this.$store
          .dispatch('definition/update', payload)
          .then((res) => {
            if (res.status === 204) {
              this.$notifier.showMessage({
                content: 'Query updated successfully.',
                type: 'success',
              })

              this.$router.push('/admin/definition')
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to update query'

              this.$notifier.showMessage({
                content: 'Failed to update query.',
                type: 'failed',
              })
            }
          })
          .finally(() => (this.isLoading = false))
      })
    },

    /* ===== SAME buildMetric() AS CREATE ===== */
    buildMetric() {
      if (this.metric.type === 'total') {
        return { key: 'totalAudience', type: 'count' }
      }

      if (this.metric.type === 'field') {
        if (this.metric.grouped) {
          return {
            key: `${this.metric.field}Distribution`,
            type: 'group',
            groupBy: this.metric.field,
            display: this.metric.display || 'table',
          }
        }

        let theId = 'Id'
        if (
          this.metric.field === 'province' ||
          this.metric.field === 'regency' ||
          this.metric.field === 'district' ||
          this.metric.field === 'village'
        )
          theId = 'Code'

        return {
          key: `${this.metric.field}_${this.metric.value}`,
          type: 'count',
          filter: {
            [`${this.metric.field}${theId}`]: this.metric.value,
          },
        }
      }

      if (this.metric.type === 'custom') {
        if (this.metric.grouped) {
          return {
            key: `${this.metric.inputKey}Distribution`,
            type: 'group',
            groupBy: `userInput.${this.metric.inputKey}`,
            display: this.metric.display || 'table',
          }
        }

        return {
          key: `${this.metric.inputKey}_${this.metric.inputValue}`,
          type: 'count',
          filter: {
            [`userInput.${this.metric.inputKey}`]: this.metric.inputValue,
          },
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
