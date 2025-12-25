<template>
  <div class="container">
    <div class="header-content">
      <ButtonBackPage text="Back to Queries" @click.native="back()" />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Update Query</div>
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- Name -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form">Name</label>
            <el-input v-model="data.name" />
          </el-form-item>

          <!-- Description -->
          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="data.description"
              type="textarea"
              :rows="3"
              maxlength="255"
            />
          </el-form-item>

          <!-- Source -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Source</label>
            <el-select v-model="data.definition.source" class="w-full" disabled>
              <el-option label="Audiences" value="audiences" />
              <el-option label="Audience Contacts" value="audience_contacts" />
              <el-option label="Audience Segments" value="audience_segments" />
            </el-select>
          </el-form-item>

          <!-- Metrics -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Metrics</label>
            <el-input
              v-model="metricsPreview"
              type="textarea"
              :rows="4"
              readonly
            />
          </el-form-item>

          <!-- Group By -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Group By</label>
            <el-select
              v-model="data.definition.groupBy"
              multiple
              placeholder="Select group fields"
            >
              <el-option label="Gender" value="gender" />
              <el-option label="Religion" value="religion" />
              <el-option label="Province" value="province" />
              <el-option label="Regency" value="regency" />
              <el-option label="Created At (Month)" value="createdAt_month" />
            </el-select>
          </el-form-item>

          <!-- Filters -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Filters</label>
            <el-input
              v-model="filtersPreview"
              type="textarea"
              :rows="4"
              readonly
            />
          </el-form-item>

          <!-- Limit -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form">Limit</label>
            <el-input-number
              v-model="data.definition.limit"
              :min="1"
              :max="1000"
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
  name: 'UpdateQueryPage',
  layout: 'default',

  head() {
    return {
      title: 'Update - Query - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,
      isLoadingToast: false,
      showMessage: false,
      messageError: '',

      data: {
        id: null,
        orgId: null,
        name: '',
        description: '',
        definition: {
          source: '',
          metrics: [],
          groupBy: [],
          filters: [],
          sort: [],
          limit: 10,
        },
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.query.dataDetail,
    }),

    metricsPreview() {
      return JSON.stringify(this.data.definition.metrics, null, 2)
    },

    filtersPreview() {
      return JSON.stringify(this.data.definition.filters, null, 2)
    },
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true
      const payload = {
        queryUuid: this.$route.params.index,
      }

      this.$store.dispatch('query/detail', payload).finally(() => {
        this.isLoading = false
      })
    },

    back() {
      this.$router.push({ path: '/admin/query' })
    },

    save() {
      this.$notifier.showMessage({
        content: 'Updating query...',
        type: 'loading',
      })

      const sto = setTimeout(() => {
        this.$store
          .dispatch('query/update', this.data)
          .then((res) => {
            if (res.status === 200 || res.status === 202) {
              this.$router.push({ path: '/admin/query' })

              this.$notifier.showMessage({
                content: 'Query updated.',
                type: 'success',
              })
            } else {
              this.showMessage = true
              this.messageError = 'Failed to update query.'

              this.$notifier.showMessage({
                content: 'Query update failed.',
                type: 'failed',
              })
            }
          })
          .catch(() => {
            this.showMessage = true
            this.messageError = 'Unexpected error occurred.'
          })
          .finally(() => {
            clearInterval(sto)
          })
      }, 800)
    },
  },

  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.data.id
        this.data.orgId = val.data.orgId
        this.data.name = val.data.name
        this.data.description = val.data.description
        try {
          this.data.definition = JSON.parse(JSON.stringify(val.data.definition))
        } catch (error) {
          console.log(error)
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
