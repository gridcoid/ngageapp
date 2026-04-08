<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-folder text-gray-500 mr-2" /> Update Setting
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
          <el-form-item class="title-form" prop="key">
            <label slot="label" class="title-form">Key</label>
            <el-input
              v-model="data.key"
              @blur="data.key = data.key?.trim()"
              disabled
            />
          </el-form-item>

          <el-form-item class="title-form" prop="value">
            <label slot="label" class="title-form">Value<Req /></label>

            <!-- Boolean → switch -->
            <el-switch v-if="isBoolean" v-model="valueBoolean" />

            <!-- Otherwise → textarea -->
            <el-input
              v-else
              v-model="data.value"
              @blur="data.value = data.value?.trim()"
              type="textarea"
              :rows="2"
              maxlength="200"
              spellcheck="false"
            />
          </el-form-item>

          <el-form-item class="title-form" prop="description">
            <label slot="label" class="title-form">Description</label>
            <el-input
              v-model="data.description"
              @blur="data.description = data.description?.trim()"
              type="textarea"
              :rows="2"
              maxlength="200"
              spellcheck="false"
            />
          </el-form-item>
        </el-form>
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
  name: 'UpdateSettingPage',
  layout: 'default',

  head() {
    return {
      title: 'Update Setting - ' + this.$config.appName,
    }
  },

  data() {
    return {
      rules: {
        key: [
          {
            required: true,
            message: 'Key is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 50,
            message: 'Max 50 character',
            trigger: 'blur',
          },
        ],
        value: [
          {
            required: true,
            message: 'Value is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 200,
            message: 'Max 200 character',
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
      valueBoolean: false,

      data: {
        id: null,
        uuid: null,

        key: '',
        value: '',
        description: '',
      },
    }
  },

  mounted() {
    this.getDetail()
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.setting.dataDetail,
    }),
    // decide when to show switch
    isBoolean() {
      return (
        this.data.value === true ||
        this.data.value === false ||
        this.data.value === 'true' ||
        this.data.value === 'false'
      )
    },
  },

  methods: {
    getDetail() {
      this.isLoading = true
      this.$store
        .dispatch('setting/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    save() {
      // if boolean UI is active, sync to string value first
      if (this.isBoolean) {
        this.data.value = this.valueBoolean ? 'true' : 'false'
      }

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Updating setting...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('setting/update', this.data)
          .then((res) => {
            if (res.status === 204) {
              this.$notifier.showMessage({
                content: 'Setting updated successfully.',
                type: 'success',
              })

              this.$router.push({ path: '/setting/general' })
            }
          })
          .finally(() => (this.isLoading = false))
      })
    },
  },

  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid

        this.data.key = val.key
        this.data.value = val.value
        this.data.description = val.description
      }
    },
    // when editing existing data, sync into valueBoolean
    'data.value': {
      immediate: true,
      handler(v) {
        if (v === true || v === 'true') this.valueBoolean = true
        if (v === false || v === 'false') this.valueBoolean = false
      },
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
