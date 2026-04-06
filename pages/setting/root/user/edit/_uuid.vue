<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-users text-gray-400 mr-2"></i>
          Update User
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
          <!-- First Name -->
          <el-form-item class="title-form" prop="firstName">
            <label slot="label" class="title-form">First Name<Req /></label>
            <el-input v-model="data.firstName" />
          </el-form-item>

          <!-- Last Name -->
          <el-form-item class="title-form" prop="lastName">
            <label slot="label" class="title-form">Last Name<Req /></label>
            <el-input v-model="data.lastName" />
          </el-form-item>

          <!-- Email -->
          <el-form-item class="title-form" prop="email">
            <label slot="label" class="title-form">Email<Req /></label>
            <el-input v-model="data.email" />
          </el-form-item>

          <!-- Phone -->
          <el-form-item class="title-form" prop="phone">
            <label slot="label" class="title-form">Phone</label>
            <el-input v-model="data.phone" />
          </el-form-item>

          <!-- Username -->
          <el-form-item class="title-form" prop="username">
            <label slot="label" class="title-form">Username<Req /></label>
            <el-input v-model="data.username" />
          </el-form-item>

          <!-- Password (Optional) -->
          <el-form-item class="title-form" prop="password">
            <label slot="label" class="title-form"> New Password </label>
            <el-input
              v-model="data.password"
              type="password"
              show-password
              placeholder="Leave blank if no change"
              @input="$refs.ruleForm.validateField('confirmPassword')"
            />
          </el-form-item>

          <!-- Confirm Password (Optional) -->
          <el-form-item class="title-form" prop="confirmPassword">
            <label slot="label" class="title-form"> Confirm Password </label>
            <el-input
              v-model="data.confirmPassword"
              type="password"
              show-password
              placeholder="Leave blank if no change"
            />
          </el-form-item>

          <!-- isActive -->
          <el-form-item class="title-form">
            <label slot="label" class="title-form"> Active </label>
            <el-switch v-model="data.isActive" />
          </el-form-item>

          <!-- Organizations + Roles -->
          <div class="mb-4">
            <label class="title-form block mb-3"> Organizations </label>

            <div
              v-for="(row, index) in orgRoles"
              :key="'org-' + index"
              class="flex items-center mb-3"
              style="gap: 12px"
            >
              <!-- Org -->
              <div style="flex: 2">
                <el-select
                  v-model="row.orgId"
                  placeholder="Select organization"
                  filterable
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in dataOrgs"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    :disabled="selectedOrgIds.includes(item.id)"
                  />
                </el-select>
              </div>

              <!-- Role -->
              <div style="flex: 1">
                <el-select
                  v-model="row.role"
                  placeholder="Role"
                  style="width: 100%"
                >
                  <el-option label="Org Admin" value="org_adm" />
                  <el-option label="Org Operator" value="org_ops" />
                </el-select>
              </div>

              <!-- Remove -->
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="small"
                @click="removeOrg(index)"
              />
            </div>

            <el-button
              type="success"
              icon="el-icon-plus"
              @click="addOrg"
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
        <el-button type="primary" plain class="w-32" @click="$router.back()">
          Discard
        </el-button>

        <el-button
          icon="el-icon-check"
          type="primary"
          class="w-32"
          :loading="isLoading"
          :disabled="isLoading"
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
  name: 'UpdateUserPage',
  layout: 'default',

  data() {
    return {
      isLoading: false,
      showMessage: false,
      messageError: '',

      data: {
        uuid: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        isVerified: true,
        isActive: true,
      },

      orgRoles: [{ orgId: null, role: 'org_ops' }],

      rules: {
        firstName: [{ required: true, message: 'Required', trigger: 'blur' }],
        lastName: [{ required: true, message: 'Required', trigger: 'blur' }],
        email: [{ required: true, message: 'Required', trigger: 'blur' }],
        username: [{ required: true, message: 'Required', trigger: 'blur' }],

        password: [
          {
            validator: (rule, value, callback) => {
              if (value && !this.data.confirmPassword) {
                callback(new Error('Please confirm password'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          },
        ],

        confirmPassword: [
          {
            validator: (rule, value, callback) => {
              if (this.data.password) {
                if (!value) {
                  callback(new Error('Confirm password is required'))
                } else if (value !== this.data.password) {
                  callback(new Error('Password does not match'))
                } else {
                  callback()
                }
              } else {
                // password kosong → confirm juga boleh kosong
                callback()
              }
            },
            trigger: 'blur',
          },
        ],
      },
    }
  },

  computed: {
    ...mapState({
      dataOrgs: (state) => state.rootOrg.dataList,
      dataDetail: (state) => state.rootUser.dataDetail,
    }),

    selectedOrgIds() {
      return this.orgRoles.map((r) => r.orgId).filter(Boolean)
    },
  },

  mounted() {
    this.getOrgs()
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.$store.dispatch('rootUser/rootDetail', {
        uuid: this.$route.params.uuid,
      })
    },

    getOrgs() {
      this.$store.dispatch('rootOrg/rootAll')
    },

    addOrg() {
      this.orgRoles.push({ orgId: null, role: 'org_ops' })
    },

    removeOrg(index) {
      this.orgRoles.splice(index, 1)
      if (this.orgRoles.length === 0) this.addOrg()
    },

    save() {
      this.showMessage = false

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.isLoading = true

        const payload = {
          ...this.data,
          orgRoles: this.orgRoles.filter((r) => r.orgId),
        }

        if (!payload.password) {
          delete payload.password
        }

        this.$store
          .dispatch('rootUser/rootUpdate', payload)
          .then(() => {
            this.$notifier.showMessage({
              content: 'User updated successfully.',
              type: 'success',
            })
            this.$router.push('/setting/root/user')
          })
          .catch((e) => {
            this.showMessage = true
            this.messageError = e.message
          })
          .finally(() => (this.isLoading = false))
      })
    },
  },

  watch: {
    dataDetail(val) {
      if (!val) return

      this.data = {
        uuid: val.uuid,
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        phone: val.phone,
        username: val.username,
        password: '',
        confirmPassword: '',
        isVerified: val.isVerified,
        isActive: val.isActive,
      }

      this.orgRoles =
        val.orgs?.map((o) => ({
          orgId: o.orgId,
          role: o.role,
        })) || []
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
