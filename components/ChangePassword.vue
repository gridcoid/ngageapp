<template>
  <Popup2 class="kg-popup" width="400" @close-modal="closeDialog()">
    <template v-slot:body>
      <div class="body-popup">
        <div class="flex justify-between items-center">
          <div class="title-dialog">Change Password</div>
          <IconPassword bg-color="#1B63D4" />
        </div>
        <div class="sub-dialog">
          Update your password regularly—or whenever you feel no longer safe to
          keep current password.
        </div>
        <div class="subtitle-2">Current Password</div>
        <div class="relative w-full">
          <div class="absolute inset-y-0 right-0 flex items-center px-2">
            <input
              id="toggle"
              class="hidden js-password-toggle"
              type="checkbox"
            />
            <IconHidePassword
              v-if="!passwordType"
              class="no-select"
              style="margin-top: 10px; margin-right: 10px; cursor: pointer"
              :bg-color="validationPassword ? '#ED543A' : '#9A9A9A'"
              @click.native="passwordType = !passwordType"
            />
            <IconShowPassword
              v-else
              class="no-select"
              style="margin-top: 12px; margin-right: 10px; cursor: pointer"
              :bg-color="validationPassword ? '#ED543A' : '#9A9A9A'"
              @click.native="passwordType = !passwordType"
            />
          </div>
          <input
            id="password"
            v-model="current_password"
            class="mt-2 js-password appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            :class="validationPassword ? 'border-red-validation' : ''"
            :type="passwordType ? 'password' : 'text'"
            autocomplete="off"
          />
        </div>
        <div
          v-if="validationPassword"
          class="score"
          style="color: #ed543a; margin-top: 5px"
        >
          {{ messageError }}
        </div>

        <div class="subtitle-2" style="margin-top: 20px">New Password</div>
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
            v-model="new_password"
            class="mt-2 js-password appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            :class="validationPassword2 ? 'border-red-500' : ''"
            :type="passwordType2 ? 'password' : 'text'"
            autocomplete="off"
          />
        </div>
        <passwd
          :password="new_password"
          style="height: 4px; margin-top: 5px"
          @score="onScore"
        />
        <div v-if="new_password !== ''" class="score" style="margin-top: 5px">
          {{ score }}
        </div>

        <div class="subtitle-2" style="margin-top: 20px">Confirm Password</div>
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

        <Transition>
          <Alert v-show="showMessage" class="mt-6 mb-6" :text="messageError" />
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
            @click="save()"
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
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      current_password: '',
      validationPassword: false,
      passwordType: true,
      new_password: '',
      validationPassword2: false,
      passwordType2: true,
      confirm_password: '',
      // validationPassword3: false,
      passwordType3: true,
      showMessage: false,
      messageError: '',
      score: '',
    }
  },
  computed: {
    validationBtnSave() {
      if (
        this.current_password.length >= 8 &&
        this.new_password.length >= 8 &&
        this.confirm_password.length >= 8 &&
        !this.validationPassword3
      ) {
        return true
      } else {
        return false
      }
    },
    validationPassword3() {
      if (this.confirm_password.length > 0) {
        if (this.confirm_password !== this.new_password) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
  methods: {
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
      this.$store.commit('user/SET_CHANGE_DIALOG', false)
    },
    save() {
      this.$notifier.showMessage({
        content: 'Saving changes...',
        type: 'loading',
      })
      const data = {
        oldPassword: this.current_password,
        newPassword: this.new_password,
        confirmNewPassword: this.confirm_password,
      }
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('user/changePassword', data)
            .then((res) => {
              if (res.status === 200) {
                this.$notifier.showMessage({
                  content: 'Password updated successfully.',
                  type: 'success',
                })
                document.querySelector('body').style.overflow = ''
                this.$store.commit('user/SET_CHANGE_DIALOG', false)
                clearInterval(sto)
              } else {
                if (res?.data.data.message === 'Incorrect Password') {
                  this.validationPassword = true
                  this.messageError = 'Incorrect Password'
                } else {
                  this.showMessage = true
                  this.messageError = res?.data.data.message
                }
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
