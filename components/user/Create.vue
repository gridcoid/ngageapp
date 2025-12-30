<template>
  <Popup2 class="kg-popup" width="400" @close-modal="closeDialog()">
    <template v-slot:body>
      <div class="body-popup">
        <div class="flex justify-between items-center">
          <div class="title-dialog">
            {{ isEdit ? 'Edit User' : 'Create New User' }}
          </div>
          <iconAddUser />
        </div>
        <div class="sub-dialog">
          Organization will separate user’s assets including Campaign,
          Placement, and Creative. Each organization can be under parent ones.
        </div>

        <div class="subtitle-2">Email</div>
        <div class="relative w-full">
          <div class="flex">
            <el-input
              v-model="email"
              type="email"
              style="width: 100%"
              class="mt-2"
              :disabled="isEdit"
            />
          </div>
          <div
            v-if="emailValidation !== ''"
            class="score"
            style="color: #ed543a; margin-top: 5px"
          >
            <span v-if="emailValidation">
              {{ emailValidation }}
            </span>
          </div>
        </div>

        <div class="subtitle-2">First Name</div>
        <div class="relative w-full">
          <div class="flex">
            <el-input v-model="first_name" style="width: 100%" class="mt-2" />
          </div>
          <div
            v-if="firstNameValidation !== ''"
            class="score"
            style="color: #ed543a; margin-top: 5px"
          >
            <span v-if="firstNameValidation">
              {{ firstNameValidation }}
            </span>
          </div>
        </div>

        <div class="subtitle-2">Last Name</div>
        <div class="relative w-full">
          <div class="flex">
            <el-input v-model="last_name" style="width: 100%" class="mt-2" />
          </div>
          <div
            v-if="lastNameValidation !== ''"
            class="score"
            style="color: #ed543a; margin-top: 5px"
          >
            <span v-if="lastNameValidation">
              {{ lastNameValidation }}
            </span>
          </div>
        </div>

        <div class="subtitle-2">Username</div>
        <div class="relative w-full">
          <div class="flex">
            <el-input v-model="username" style="width: 100%" class="mt-2" />
          </div>
          <div
            v-if="userNameValidation !== ''"
            class="score"
            style="color: #ed543a; margin-top: 5px"
          >
            <span v-if="userNameValidation">
              {{ userNameValidation }}
            </span>
          </div>
        </div>

        <!-- <div class="subtitle-2">
          Phone
        </div>
        <div class="relative w-full">
          <div class="flex ">
            <el-input v-model="phone" type="tel" @input="validatePhone" style="width: 100%" class="mt-2" />
          </div>
          <div v-if="phoneError !== ''" class="score" style="color: #ED543A;margin-top:5px;">
            <span v-if="phoneError">
              {{ phoneError }}
            </span>
          </div>
        </div> -->
        <div v-if="!isEdit">
          <div class="subtitle-2">Password</div>
          <div class="relative w-full">
            <div class="absolute inset-y-0 right-0 flex items-center px-2">
              <input
                id="toggle"
                class="hidden js-password-toggle"
                type="checkbox"
              />
              <IconHidePassword
                v-if="!passwordType2"
                class="no-select"
                style="margin-top: 10px; margin-right: 10px; cursor: pointer"
                :bg-color="validationPassword2 ? '#ED543A' : '#9A9A9A'"
                @click.native="passwordType2 = !passwordType2"
              />
              <IconShowPassword
                v-else
                class="no-select"
                style="margin-top: 12px; margin-right: 10px; cursor: pointer"
                :bg-color="validationPassword2 ? '#ED543A' : '#9A9A9A'"
                @click.native="passwordType2 = !passwordType2"
              />
            </div>
            <input
              id="password"
              v-model="password"
              class="mt-2 js-password appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              :class="validationPassword2 ? 'border-red-500' : ''"
              :type="passwordType2 ? 'password' : 'text'"
              autocomplete="off"
            />
          </div>
          <passwd
            :password="password"
            style="height: 4px; margin-top: 5px"
            @score="onScore"
          />
          <div v-if="password !== ''" class="score" style="margin-top: 5px">
            {{ score }}
          </div>

          <div class="subtitle-2">Confirm Password</div>
          <div class="relative w-full">
            <div class="absolute inset-y-0 right-0 flex items-center px-2">
              <input
                id="toggle"
                class="hidden js-password-toggle"
                type="checkbox"
              />
              <IconHidePassword
                v-if="!passwordType3"
                class="no-select"
                style="margin-top: 10px; margin-right: 10px; cursor: pointer"
                :bg-color="validationPassword3 ? '#ED543A' : '#9A9A9A'"
                @click.native="passwordType3 = !passwordType3"
              />
              <IconShowPassword
                v-else
                class="no-select"
                style="margin-top: 12px; margin-right: 10px; cursor: pointer"
                :bg-color="validationPassword3 ? '#ED543A' : '#9A9A9A'"
                @click.native="passwordType3 = !passwordType3"
              />
            </div>
            <input
              id="password"
              v-model="confirm_password"
              class="mt-2 js-password appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              :class="validationPassword3 ? 'border-red-validation' : ''"
              :type="passwordType3 ? 'password' : 'text'"
              autocomplete="off"
            />
          </div>
          <div
            v-if="confirm_password !== ''"
            class="score"
            style="color: #ed543a; margin-top: 5px"
          >
            <span v-if="validationPassword3"> Password doesn’t match </span>
          </div>
        </div>

        <div class="user-role-container">
          <div class="user-role-subtitle">USER ROLE</div>

          <div class="subtitle-2">Roles</div>
          <div class="relative w-full">
            <div class="flex">
              <el-select
                v-model="selectedRoles"
                placeholder="Select roles"
                style="width: 100%"
                class="mt-2"
              >
                <el-option
                  v-for="item in rolesDropdown"
                  :key="item.id"
                  :label="capitalizeAndReplace(item.name)"
                  :value="item.id"
                />
              </el-select>
            </div>
          </div>

          <div class="subtitle-2">Organization</div>
          <div class="relative w-full">
            <div class="flex">
              <el-select
                v-model="selectedOrg"
                placeholder="Select organization"
                style="width: 100%"
                class="mt-2"
              >
                <el-option
                  v-for="item in dropDownOrg"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>

              <ButtonDefault
                icon="plus"
                class="ml-5 mt-3"
                @click.native="toCreateOrg()"
              />
            </div>
          </div>
        </div>

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-0" :text="messageError" />
        </Transition>
        <div
          class="footer-card-password grid grid-cols-2 gap-4 place-content-stretch"
        >
          <button
            class="flex items-center justify-center cancel-btn no-select"
            @click="closeDialog()"
          >
            <span class="name-btn no-select" style="color: #1b63d4"
              >Cancel</span
            >
          </button>
          <button
            class="flex items-center justify-center no-select"
            :class="validationBtnSave ? 'save-btn' : 'disable-btn'"
            @click="isEdit ? saveUpdate() : save()"
          >
            <IconSave
              class="mr-2"
              :bg-color="validationBtnSave ? 'white' : '#A1ADB9'"
            />
            Save
          </button>
        </div>
      </div>
    </template>
  </Popup2>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    iduser: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      validationPassword: false,
      passwordType: true,
      first_name: '',
      last_name: '',
      email: '',
      // phone: '',
      username: '',
      password: '',
      validationPassword2: false,
      passwordType2: true,
      confirm_password: '',
      // validationPassword3: false,
      passwordType3: true,
      showMessage: false,
      messageError: '',
      score: '',
      org: '',
      roles: '',
      dataRoles: [],
      selectedOrg: [],
      selectedRoles: [],
      isEdit: false,
      selectedRolesId: '',
      firstNameValidation: '',
      lastNameValidation: '',
      userNameValidation: '',
      emailValidation: '',
      phoneError: '',
    }
  },

  computed: {
    ...mapState({
      dropDownOrg: (state) => {
        return state.user.dropDownOrg
      },
      rolesDropdown: (state) => {
        return state.user.rolesDropdown
      },
    }),
    validationBtnSave() {
      if (
        this.isEdit ||
        (!this.isEdit &&
          this.password.length >= 8 &&
          this.confirm_password.length >= 8 &&
          this.email !== '' &&
          this.first_name !== '' &&
          this.last_name !== '' &&
          this.username !== '' &&
          this.selectedRoles !== '' &&
          this.selectedOrg !== '')
      ) {
        return true
      } else {
        return false
      }
    },
    validationPassword3() {
      if (this.confirm_password.length > 0) {
        if (this.confirm_password !== this.password) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
  watch: {
    iduser: {
      handler(val) {
        if (val) {
          this.clearForm()
          this.isEdit = true
          this.getUser(val)
        }
      },
      immediate: true,
    },
  },

  mounted() {
    this.isEdit = false
    if (!this.isEdit) {
      this.clearForm()
      this.getOrg()
      this.getRoles()
    }
  },
  methods: {
    validatePhone() {
      if (!this.isEdit) {
        this.phone = this.phone.replace(/[^0-9]/g, '')
        this.phoneError = this.phone ? '' : 'Phone is required and number only'
      }
    },
    onScore({ score, strength }) {
      if (score === 0 || score === 1) {
        this.score = 'Weak'
      }
      if (score === 2 || score === 3) {
        this.score = 'Moderate'
      }
      if (score === 4) {
        this.score = 'Strong'
      }
    },
    closeDialog() {
      document.querySelector('body').style.overflow = ''
      this.clearForm()
      this.$store.commit('user/SET_USER_CHANGE_DIALOG', false)
      this.isEdit = false
    },
    getOrg() {
      this.$store
        .dispatch('user/getOrgUser', { all: true })
        .then((res) => {
          const data = res?.data.data
          if (this.isEdit) {
            this.selectedOrg = ''
            this.selectedOrg = data.find(
              (item) => item.id === parseInt(this.org)
            ).id
          }
          this.$store.commit('user/SET_DROPDOWN_ORG', data)
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN_ORG', [])
        })
    },
    getUser(payload) {
      const data = payload
      this.$store
        .dispatch('user/getDetail', data)
        .then((result) => {
          this.first_name = result.data.data.firstName
          this.last_name = result.data.data.lastName
          this.email = result.data.data.email
          this.username = result.data.data.username
          // this.phone = result.data.data.phone
          this.selectedRolesId = result.data.data.userRoles[0].role.id
          this.org = result.data.data.userRoles[0].orgId

          this.getRoles()
          this.getOrg()
        })
        .catch(() => {})
    },
    getRoles() {
      this.selectedRoles = ''
      this.$store
        .dispatch('user/getRoles')
        .then((res) => {
          const data = res
          if (this.isEdit) {
            this.selectedRoles = data.find(
              (item) => item.id === parseInt(this.selectedRolesId)
            ).id
          }

          this.$store.commit('user/SET_CHANGE_ROLES', data)
        })
        .catch(() => {
          this.dataRoles = []
        })
    },
    capitalizeAndReplace(item) {
      return item.charAt(0).toUpperCase() + item.slice(1).replace(/_/g, ' ')
    },
    toCreateOrg() {
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('user/SET_ORG_CHANGE_DIALOG', true)
    },
    clearForm() {
      this.first_name = ''
      this.last_name = ''
      this.username = ''
      this.email = ''
      // this.phone = ''
      this.password = ''
      this.confirm_password = ''
      this.selectedRolesId = ''
      // this.org = ''
    },
    save() {
      if (this.validationBtnSave) {
        this.$notifier.showMessage({
          content: 'Saving changes...',
          type: 'loading',
        })

        const data = {
          firstName: this.first_name,
          lastName: this.last_name,
          username: this.username,
          email: this.email,
          // phone: this.phone,
          password: this.password,
          confirmPassword: this.confirm_password,
        }

        const sto = setTimeout(
          () =>
            this.$store
              .dispatch('user/createUser', data)
              .then((res) => {
                if (res.status === 201 || res.status === 200) {
                  const dataOrg = {
                    orgId: this.selectedOrg,
                    userId: res?.data.data.id,
                    roleId: this.selectedRoles,
                  }
                  this.$store
                    .dispatch('user/assignOrg', dataOrg)
                    .then((res) => {
                      if (res.status === 201 || res.status === 200) {
                        this.$notifier.showMessage({
                          content: 'User Save!.',
                          type: 'success',
                        })

                        // Reset input values
                        this.clearForm()
                        this.isLoading = false

                        document.querySelector('body').style.overflow = ''
                        this.$store.commit('user/SET_USER_CHANGE_DIALOG', false)
                        this.$parent.getDataAll()
                        clearInterval(sto)
                      } else {
                        this.showMessage = true
                        this.messageError = res?.data.data.message
                        clearInterval(sto)
                      }
                    })
                } else {
                  this.showMessage = true
                  this.messageError = res?.data.data.message
                  clearInterval(sto)
                }
              })
              .catch(() => {
                clearInterval(sto)
              }),
          1000
        )
      } else {
        this.firstNameValidation = this.firstName
          ? ''
          : 'First name is required'
        this.lastNameValidation = this.lastName ? '' : 'Last name is required'
        this.userNameValidationError = this.userName
          ? ''
          : 'User name is required'
        this.emailValidation = this.email
          ? /\S+@\S+\.\S+/.test(this.email)
            ? ''
            : 'Email is invalid'
          : 'Email is required'

        this.showMessage = true
        this.messageError = 'Please fill all the fields'
      }
    },
    saveUpdate() {
      const data = {
        firstName: this.first_name,
        lastName: this.last_name,
        username: this.username,
        email: this.email,
        // phone: this.phone,
        id: this.iduser.id,
      }

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('user/updateUser', data)
            .then((res) => {
              if (res.status === 201 || res.status === 200) {
                const dataRoles = {
                  orgId: this.selectedOrg,
                  roleId: this.selectedRoles,
                  id: this.iduser.id,
                }
                this.$store
                  .dispatch('user/updateRoles', dataRoles)
                  .then((res) => {
                    if (res.status === 201 || res.status === 200) {
                      this.$notifier.showMessage({
                        content: 'User Update!.',
                        type: 'success',
                      })

                      // Reset input values
                      this.clearForm()
                      this.isLoading = false

                      this.closeDialog()
                      this.$parent.getDataAll()
                      clearInterval(sto)
                    } else {
                      this.showMessage = true
                      this.messageError = res?.data.data.message
                      clearInterval(sto)
                    }
                  })
              } else {
                this.showMessage = true
                this.messageError = res?.data.data.message
                clearInterval(sto)
              }
            })
            .catch(() => {
              clearInterval(sto)
            }),
        1000
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.border-red-validation {
  border: 1.3px solid #ed543a;
  box-shadow: 0px 2px 10px #fdcece;
}
.kg-popup {
  .body-popup {
    padding: 20px;
    overflow: auto;

    .title-dialog {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #5c6b7a;
    }
    .sub-dialog {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #7a8a99;
      margin-top: 5px;
      margin-bottom: 15px;
    }
    .score {
      font-family: 'Cabin';
      font-style: italic;
      font-weight: 400;
      font-size: 14px;
      color: #7bbc49;
    }
    .subtitle-2 {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #5c6b7a;
      margin-top: 20px;
    }
    .user-role-subtitle {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #5c6b7a;
    }
    .user-role-container {
      margin-top: 20px;
      padding: 15px;
      gap: 15px;
      border-radius: 5px;
      border: 1px solid #c3ced9;
      border-color: #c3ced9;
      background-color: #fafafa;
    }

    .footer-card-password {
      margin-top: 15px;
      .cancel-btn {
        border: 1px solid #1b63d4;
        color: #1b63d4;
        font-weight: 700;
        font-size: 14px;
        border-radius: 5px;
        height: 40px;
      }
      .cancel-btn:hover {
        background-color: rgb(243 244 246);
      }
      .save-btn {
        font-family: 'Cabin';
        font-size: 14px;
        color: #ffffff;
        background: #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 40px;
      }
      .save-btn:hover {
        opacity: 1.2;
      }
      .disable-btn {
        font-family: 'Cabin';
        font-size: 14px;
        background: #f1f1f1;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        color: #a1adb9;
        height: 40px;
      }
      .disable-btn:hover {
        opacity: 1.2;
      }
    }
  }
}
</style>
