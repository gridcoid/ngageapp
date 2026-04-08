<template>
  <div class="container p-6 w-full">
    <div class="header-content">
      <Back />
    </div>

    <div class="card-content">
      <!-- HEADER -->
      <div class="header-card flex items-center">
        <div class="title">
          <i class="ti ti-users text-gray-400 mr-2"></i>
          Create New User
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
          <!-- FIRST NAME -->
          <el-form-item class="title-form" prop="firstName">
            <label slot="label" class="title-form">First Name<Req /></label>
            <el-input
              v-model="data.firstName"
              @blur="data.firstName = data.firstName?.trim()"
            />
          </el-form-item>

          <!-- LAST NAME -->
          <el-form-item class="title-form" prop="lastName">
            <label slot="label" class="title-form">Last Name<Req /></label>
            <el-input
              v-model="data.lastName"
              @blur="data.lastName = data.lastName?.trim()"
            />
          </el-form-item>

          <!-- EMAIL -->
          <el-form-item class="title-form" prop="email">
            <label slot="label" class="title-form">Email<Req /></label>
            <el-input v-model="data.email" />
          </el-form-item>

          <!-- PHONE -->
          <el-form-item class="title-form" prop="phone">
            <label slot="label" class="title-form">Phone</label>
            <el-input v-model="data.phone" />
          </el-form-item>

          <!-- USERNAME -->
          <el-form-item class="title-form" prop="username">
            <label slot="label" class="title-form">Username<Req /></label>
            <el-input
              v-model="data.username"
              @blur="data.username = data.username?.trim()"
            />
          </el-form-item>

          <!-- PASSWORD -->
          <el-form-item class="title-form" prop="password">
            <label slot="label" class="title-form">Password<Req /></label>
            <el-input v-model="data.password" type="password" show-password />
          </el-form-item>

          <!-- IS ACTIVE -->
          <el-form-item class="title-form" prop="isActive">
            <label slot="label" class="title-form"> Active Status </label>
            <el-switch v-model="data.isActive" />
          </el-form-item>

          <!-- ROLE -->
          <el-form-item class="title-form" prop="roleId">
            <label slot="label" class="title-form"> Role<Req /> </label>

            <el-select
              v-model="data.roleId"
              placeholder="Select role"
              style="width: 100%"
            >
              <el-option label="Org Admin" :value="1" />
              <el-option label="Org Operator" :value="2" />
            </el-select>
          </el-form-item>
        </el-form>
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
  name: 'CreateUserPage',
  layout: 'default',

  head() {
    return {
      title: 'Create User - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,

      data: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        isVerified: true, // default
        isActive: true, // default
        roleId: 2, // default = org_ops
      },

      rules: {
        firstName: [
          {
            required: true,
            message: 'First name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
        ],
        lastName: [
          {
            required: true,
            message: 'Last name is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
        ],
        email: [
          { required: true, message: 'Email is required', trigger: 'blur' },
          { type: 'email', message: 'Invalid email format', trigger: 'blur' },
        ],
        username: [
          {
            required: true,
            message: 'Username is required',
            trigger: 'blur',
            transform: (v) => (v ? v.trim() : v),
          },
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'blur' },
          { min: 6, message: 'Minimum 6 characters', trigger: 'blur' },
        ],
        isVerified: [{ type: 'boolean', trigger: 'change' }],
        isActive: [{ type: 'boolean', trigger: 'change' }],
        roleId: [
          {
            required: true,
            message: 'Role is required',
            trigger: 'change',
          },
        ],
      },
    }
  },

  methods: {
    save() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return

        this.$notifier.showMessage({
          content: 'Creating user...',
          type: 'loading',
        })

        this.isLoading = true

        this.$store
          .dispatch('adminUser/adminCreate', this.data)
          .then((res) => {
            if (res.status === 201) {
              this.$notifier.showMessage({
                content: 'User created successfully.',
                type: 'success',
              })

              this.$router.push('/setting/admin/user')
            }
          })
          .finally(() => (this.isLoading = false))
      })
    },
  },
}
</script>

<style lang="scss" scoped>
:admin {
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
