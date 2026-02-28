<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <!-- HEADER -->
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-building text-gray-400 mr-2"></i>
          Update Organization
        </div>
      </div>

      <!-- BODY -->
      <div class="body-card">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="data"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- NAME -->
          <el-form-item class="title-form" prop="name">
            <label slot="label" class="title-form"> Name<Req /> </label>

            <el-input
              v-model="data.name"
              placeholder="Organization name"
              @blur="data.name = data.name?.trim()"
            />
          </el-form-item>

          <!-- TYPE -->
          <el-form-item class="title-form" prop="typeId">
            <label slot="label" class="title-form"> Type<Req /> </label>

            <el-select
              v-model="data.typeId"
              placeholder="Select organization type"
              filterable
              clearable
              style="width: 100%"
            >
              <el-option
                v-for="item in dataOrgTypes"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-6" :text="messageError" />
        </Transition>
      </div>

      <!-- FOOTER -->
      <div class="footer-card flex justify-end gap-3">
        <el-button type="primary" plain class="w-32" @click="$router.back()">
          Discard
        </el-button>

        <el-button
          icon="el-icon-check"
          type="primary"
          class="w-32"
          :loading="isLoading"
          :disabled="isLoading"
          @click="save()"
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
  name: 'UpdateOrgPage',
  layout: 'default',

  head() {
    return {
      title: 'Update Organization - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        id: null,
        uuid: null,
        name: '',
        typeId: null,
      },

      rules: {
        name: [
          {
            required: true,
            message: 'Name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
          {
            min: 1,
            max: 100,
            message: 'Max 100 characters',
            trigger: 'blur',
          },
        ],
        typeId: [
          {
            required: true,
            message: 'Organization type is required',
            trigger: 'change',
          },
        ],
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.org.dataDetail,
      dataOrgTypes: (state) => state.orgType.dataList,
    }),
  },

  mounted() {
    this.getOrgTypes()
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('rootOrg/rootDetail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    getOrgTypes() {
      this.$store.dispatch('orgType/list')
    },

    save() {
      this.showMessage = false
      this.messageError = ''

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.isLoading = true

        this.$store
          .dispatch('rootOrg/rootUpdate', this.data)
          .then((res) => {
            if (res.status === 200) {
              this.$notifier.showMessage({
                content: 'Organization updated successfully.',
                type: 'success',
              })

              this.$router.push('/setting/root/org')
            } else {
              this.showMessage = true

              this.messageError =
                res?.data?.data?.errors
                  ?.map((e) => Object.values(e)[0])
                  .join(', ') || 'Failed to update organization'

              this.$notifier.showMessage({
                content: 'Failed to update organization.',
                type: 'failed',
              })
            }
          })
          .catch((e) => {
            this.showMessage = true
            this.messageError = e.message
          })
          .finally(() => {
            this.isLoading = false
          })
      })
    },
  },

  watch: {
    dataDetail(val) {
      if (val) {
        this.data = {
          id: val.id,
          uuid: val.uuid,
          name: val.name,
          typeId: val.typeId,
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
