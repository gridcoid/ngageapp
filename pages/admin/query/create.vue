<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">Create Query</div>
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
              maxlength="255"
            />
          </el-form-item>

          <!-- Source -->
          <el-form-item prop="source">
            <label slot="label" class="title-form">Source</label>
            <el-select
              v-model="data.source"
              placeholder="Select source"
              class="w-full"
            >
              <el-option label="Audiences" value="Audiences" />
              <el-option label="AudienceContacts" value="AudienceContacts" />
              <el-option label="Segments" value="Segments" />
              <el-option label="AudienceSegments" value="AudienceSegments" />
              <el-option label="Locations" value="Locations" />
              <el-option label="Demographics" value="Demographics" />
            </el-select>
          </el-form-item>

          <!-- Metrics -->
          <el-form-item prop="metrics">
            <label slot="label" class="title-form">Metrics</label>
            <el-input
              v-model="metricsJson"
              type="textarea"
              :rows="6"
              placeholder='[{"field":"id","op":"count","as":"total"}]'
            />
          </el-form-item>

          <!-- Group By -->
          <el-form-item>
            <label slot="label" class="title-form">Group By</label>
            <el-input v-model="groupByJson" placeholder='["province"]' />
          </el-form-item>

          <!-- Filters -->
          <el-form-item>
            <label slot="label" class="title-form">Filters</label>
            <el-input
              v-model="filtersJson"
              type="textarea"
              :rows="5"
              placeholder='[{"field":"isActive","op":"eq","value":true}]'
            />
          </el-form-item>

          <!-- Joins -->
          <el-form-item>
            <label slot="label" class="title-form">Joins</label>
            <el-input
              v-model="joinsJson"
              type="textarea"
              :rows="5"
              placeholder='[{"table":"Segments","type":"left","localField":"segmentId","foreignField":"id"}]'
            />
          </el-form-item>

          <!-- Sort -->
          <el-form-item>
            <label slot="label" class="title-form">Sort</label>
            <el-input
              v-model="sortJson"
              type="textarea"
              :rows="4"
              placeholder='[{"field":"createdAt","dir":"desc"}]'
            />
          </el-form-item>

          <!-- Limit -->
          <el-form-item>
            <label slot="label" class="title-form">Limit</label>
            <el-input-number v-model="data.limit" :min="1" :max="5000" />
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-0" :text="messageError" />
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
  </div>
</template>

<script>
export default {
  name: 'CreateQueryPage',
  layout: 'default',

  head() {
    return {
      title: 'Create Query - ' + this.$config.appName,
    }
  },

  data() {
    return {
      showMessage: false,
      messageError: '',

      metricsJson: '[]',
      groupByJson: '[]',
      filtersJson: '[]',
      joinsJson: '[]',
      sortJson: '[]',

      rules: {
        name: [
          {
            required: true,
            message: 'Query name is required',
            trigger: 'blur',
          },
          { max: 150, message: 'Max 150 characters', trigger: 'blur' },
        ],
        source: [
          { required: true, message: 'Source is required', trigger: 'change' },
        ],
        metricsJson: [{ required: true }],
      },

      data: {
        name: '',
        description: '',
        source: '',
        limit: 100,
      },
    }
  },

  methods: {
    save() {
      let definition

      try {
        definition = {
          source: data.source,
          metrics: JSON.parse(metricsJson),
          groupBy: this.groupByJson ? JSON.parse(this.groupByJson) : [],
          filters: this.filtersJson ? JSON.parse(this.filtersJson) : [],
          joins: this.joinsJson ? JSON.parse(this.joinsJson) : [],
          sort: this.sortJson ? JSON.parse(this.sortJson) : [],
          limit: data.limit,
        }
      } catch (e) {
        this.showMessage = true
        this.messageError = 'Invalid JSON format in query definition'
        return
      }

      this.$notifier.showMessage({
        content: 'Creating query...',
        type: 'loading',
      })

      this.$store
        .dispatch('query/create', {
          name: this.data.name,
          description: this.data.description,
          definition,
        })
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            this.$router.push({ path: '/admin/query' })
            this.$notifier.showMessage({
              content: 'Query created',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError = 'Failed to create query'
          }
        })
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
