<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="flex gap-6">
      <div class="card-content bg-white">
        <div class="header-card flex items-center">
          <div class="title">
            <i class="ti ti-code text-gray-400 mr-2"></i> Update Query
          </div>
        </div>

        <div class="body-card">
          <el-form
            ref="ruleForm"
            :model="data"
            :rules="rules"
            label-width="226px"
            label-position="left"
            hide-required-asterisk
          >
            <!-- Name -->
            <el-form-item prop="name">
              <label slot="label" class="title-form">Name</label>
              <el-input v-model="data.name" />
            </el-form-item>

            <!-- Description -->
            <el-form-item prop="description">
              <label slot="label" class="title-form">Description</label>
              <el-input
                v-model="data.description"
                type="textarea"
                :rows="3"
                maxlength="200"
              />
            </el-form-item>

            <!-- Source -->
            <el-form-item prop="source">
              <label slot="label" class="title-form">Source</label>

              <el-select
                v-model="data.source"
                placeholder="Select source"
                class="w-full"
                filterable
                allow-create
                default-first-option
              >
                <el-option label="Audiences" value="Audiences" />
                <el-option label="AudienceContacts" value="AudienceContacts" />
                <el-option label="AudienceSegments" value="AudienceSegments" />
                <el-option label="Segments" value="Segments" />
              </el-select>
            </el-form-item>

            <!-- Metrics -->
            <el-form-item prop="metricsJson">
              <label slot="label" class="title-form">Metrics</label>
              <el-input
                v-model="data.metricsJson"
                type="textarea"
                :rows="10"
                class="font-mono"
              />
            </el-form-item>

            <!-- Joins -->
            <el-form-item prop="joinsJson">
              <label slot="label" class="title-form">Joins</label>
              <el-input
                v-model="data.joinsJson"
                type="textarea"
                :rows="10"
                class="font-mono"
              />
            </el-form-item>

            <!-- Filters -->
            <el-form-item prop="filtersJson">
              <label slot="label" class="title-form">Filters</label>
              <el-input
                v-model="data.filtersJson"
                type="textarea"
                :rows="10"
                class="font-mono"
              />
            </el-form-item>

            <!-- Group By -->
            <el-form-item prop="groupByJson">
              <label slot="label" class="title-form">Group By</label>
              <el-input
                v-model="data.groupByJson"
                type="textarea"
                :rows="10"
                class="font-mono"
              />
            </el-form-item>

            <!-- Sort -->
            <el-form-item prop="sortJson">
              <label slot="label" class="title-form">Sort</label>
              <el-input
                v-model="data.sortJson"
                type="textarea"
                :rows="10"
                class="font-mono"
              />
            </el-form-item>

            <!-- Limit -->
            <el-form-item prop="limit">
              <label slot="label" class="title-form">Limit</label>
              <el-input-number v-model="data.limit" :min="1" :max="5000" />
            </el-form-item>
          </el-form>

          <Transition>
            <Alert
              v-show="showMessage"
              class="mt-6 mb-0"
              :text="messageError"
            />
          </Transition>
        </div>

        <div class="footer-card flex justify-end gap-3">
          <el-button type="primary" plain class="w-32" @click="$router.back()">
            Discard
          </el-button>

          <el-button
            icon="el-icon-check"
            type="primary"
            class="w-32"
            @click="save()"
          >
            Save
          </el-button>
        </div>
      </div>

      <div class="card-content bg-gray-50">
        <div class="header-card flex items-center">
          <div class="title">
            <i class="ti ti-help text-gray-400 mr-2"></i> Query Example
          </div>
        </div>
        <div class="body-card">
          <QueryExample />
        </div>
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
      title: 'Update Query - ' + this.$config.appName,
    }
  },

  data() {
    return {
      showMessage: false,
      messageError: '',

      rules: {
        name: [
          {
            required: true,
            message: 'Query name is required',
            trigger: 'blur',
          },
          {
            max: 150,
            message: 'Max 150 characters',
            trigger: 'blur',
          },
        ],
        source: [
          {
            required: true,
            message: 'Source is required',
            trigger: 'change',
          },
        ],
      },

      data: {
        id: null,
        uuid: null,
        name: '',
        description: '',
        source: '',
        limit: 100,

        metricsJson: '[]',
        joinsJson: '[]',
        filtersJson: '{}',
        groupByJson: '[]',
        sortJson: '[]',
      },
    }
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('query/detail', {
          uuid: this.$route.params.index,
        })
        .finally(() => (this.isLoading = false))
    },
    save() {
      let definition
      try {
        definition = {
          source: this.data.source,
          metrics: JSON.parse(this.data.metricsJson || '[]'),
          groupBy: JSON.parse(this.data.groupByJson || '[]'),
          filters: JSON.parse(this.data.filtersJson || '{}'),
          joins: JSON.parse(this.data.joinsJson || '[]'),
          sort: JSON.parse(this.data.sortJson || '[]'),
          limit: this.data.limit,
        }
      } catch (e) {
        this.showMessage = true
        this.messageError = 'Invalid JSON format in query definition'
        return
      }

      this.$notifier.showMessage({
        content: 'Updating query...',
        type: 'loading',
      })

      this.$store
        .dispatch('query/update', {
          uuid: this.data.uuid,
          name: this.data.name,
          description: this.data.description,
          definition,
        })
        .then((res) => {
          if (res.status === 200 || res.status === 202) {
            this.$router.push({ path: '/admin/query' })
            this.$notifier.showMessage({
              content: 'Query updated',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError = 'Failed to update query'
          }
        })
    },
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.query.dataDetail,
    }),
  },
  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid
        this.data.name = val.name
        this.data.description = val.description
        this.data.source = val.definition?.source || ''
        this.data.limit = val.definition?.limit || 100

        // Fill editor JSON fields
        this.data.metricsJson = JSON.stringify(
          val.definition?.metrics || [],
          null,
          2
        )
        this.data.groupByJson = JSON.stringify(
          val.definition?.groupBy || [],
          null,
          2
        )
        this.data.filtersJson = JSON.stringify(
          val.definition?.filters || {},
          null,
          2
        )
        this.data.joinsJson = JSON.stringify(
          val.definition?.joins || [],
          null,
          2
        )
        this.data.sortJson = JSON.stringify(val.definition?.sort || [], null, 2)
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
