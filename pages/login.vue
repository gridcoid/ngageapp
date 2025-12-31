<template>
  <div class="flex flex-nowrap login-page">
    <div class="flex h-screen left-side items-center justify-center">
      <div class="flex flex-col">
        <img src="~/assets/images/logo_baru.svg" class="logo-img" />
        <img src="~/assets/images/logo_baru.svg" class="logo-img-small" />
        <div class="card-login">
          <span v-if="!isLoading">
            <div class="header-4">Getting Started</div>
            <div class="subtitle-1">Login with your credentials</div>
            <div class="mt-10">
              <div class="subtitle-2">Your Email</div>
              <input
                id="email"
                v-model="email"
                class="mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                :class="validationEmail ? 'border-red-500' : ''"
                type="email"
                name="email"
                placeholder="Email"
                @keyup.enter="login"
              />
            </div>
            <div class="mt-4">
              <div class="subtitle-2">Password</div>
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
                    style="
                      margin-top: 10px;
                      margin-right: 10px;
                      cursor: pointer;
                    "
                    :bg-color="validationPassword ? '#ED543A' : '#9A9A9A'"
                    @click.native="passwordToggle()"
                  />
                  <IconShowPassword
                    class="no-select"
                    v-else
                    style="
                      margin-top: 12px;
                      margin-right: 10px;
                      cursor: pointer;
                    "
                    :bg-color="validationPassword ? '#ED543A' : '#9A9A9A'"
                    @click.native="passwordToggle()"
                  />
                </div>
                <input
                  id="password"
                  v-model="password"
                  class="mt-2 js-password appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  :class="validationPassword ? 'border-red-500' : ''"
                  :type="passwordType ? 'password' : 'text'"
                  autocomplete="off"
                  placeholder="Password"
                  @keyup.enter="login"
                />
              </div>
            </div>
            <Transition>
              <Alert
                v-show="showMessage"
                class="mt-6 mb-0"
                :text="messageError"
              />
            </Transition>
            <button
              class="bg-red-500 hover:bg-red-700 text-white py-2 mt-6 rounded w-full"
              @click="login()"
            >
              Login
            </button>
          </span>
          <div
            v-else
            class="flex flex-col items-center justify-center loading-card"
          >
            <div class="loading-title">Logging you in...</div>
            <div class="loading-subtitle">Setting up pages</div>
            <div class="card">
              <div class="percent">
                <svg>
                  <circle cx="20" cy="20" r="15" />
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    :style="{ '--percent': percentage }"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-card">
          Copyright &copy; 2023-{{ new Date().getFullYear() }} Kompas Gramedia
          <br />
          All rights reserved.
        </div>
        <div class="footer-card-small">
          Copyright Ⓒ 2022 Kompas Gramedia <br />
          All rights reserved.
        </div>
      </div>
    </div>
    <div class="flex-auto hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
      <img src="~/assets/images/login/bg_login.jpg" class="right-side" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'login',
  head() {
    return {
      title: 'Login - ' + this.$config.appName,
    }
  },
  data() {
    return {
      email: '',
      password: '',
      width: 0,
      statusCode: 200,
      messageError: '',
      showMessage: false,
      isLoading: false,
      percentage: 0,
      validationEmail: false,
      validationPassword: false,
      passwordType: true,
    }
  },
  mounted() {
    this.width = window.innerHeight
  },
  methods: {
    countDownTimer() {
      if (this.percentage < 15) {
        setTimeout(() => {
          this.percentage += 1
          this.countDownTimer()
        }, 50)
      } else {
        this.$router.push({ path: '/' })
      }
    },
    passwordToggle() {
      if (this.passwordType) {
        this.passwordType = false
      } else {
        this.passwordType = true
      }
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    login() {
      if (this.email === '' || this.password === '') {
        if (this.email === '') {
          this.showMessage = true
          this.validationEmail = true
          this.validationPassword = false
          this.messageError = 'Email can not be empty'
        }
        if (this.password === '') {
          this.showMessage = true
          this.validationEmail = false
          this.validationPassword = true
          this.messageError = 'Password can not be empty'
        }
        if (this.email === '' && this.password === '') {
          this.showMessage = true
          this.validationEmail = true
          this.validationPassword = true
          this.messageError = 'Email & Password can not be empty'
        }
      } else if (!this.validateEmail(this.email)) {
        this.showMessage = true
        this.validationEmail = true
        this.validationPassword = false
        this.messageError = 'Email must be valid'
      } else {
        this.validationEmail = false
        this.validationPassword = false
        this.showMessage = false
        this.loading = true
        this.$store
          .dispatch('user/login', {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const data = response.status
            this.statusCode = parseInt(data)
            if (this.statusCode !== 200) {
              this.showMessage = true
              this.messageError = response.data.data.message
              this.isLoading = false
            } else {
              this.showMessage = false
              this.isLoading = true
              this.countDownTimer()
            }
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  .left-side {
    width: 410px !important;
    height: 100%;
    background: $colorGrey;
    .logo-img {
      width: 221.67px;
      object-fit: contain;
      position: absolute;
      top: 5vh;
      left: 60.17px;
    }
    .logo-img-small {
      width: 221.67px;
      object-fit: contain;
      margin-left: 60px;
      margin-bottom: 40px;
      margin-top: 40px;
    }
    .card-login {
      width: 380px;
      height: 100%;
      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.05);
      border-radius: 10px;
      left: 60px;
      position: relative;
      padding: 30px;
      .loading-card {
        height: 417px;
        .loading-title {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 20px;
          color: #454545;
        }
        .loading-subtitle {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 16px;
          color: #757575;
          padding-right: 3px;
        }

        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;
          // width: 280px;
          // height: 350px;
        }

        .card .percent {
          position: relative;
        }

        .card svg {
          position: relative;
          width: 55px;
          height: 50px;
          // padding-left: 20px;
          transform: rotate(-90deg);
        }

        .card svg circle {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: #f0f0f0;
          stroke-width: 5;
          stroke-linecap: round;
        }

        .card svg circle:last-of-type {
          stroke-dasharray: 625px;
          stroke-dashoffset: calc(625px - (625px * var(--percent)) / 100);
          stroke: #3498db;
        }

        .card:nth-child(1) svg circle:last-of-type {
          stroke: #f39c12;
        }

        .card:nth-child(2) svg circle:last-of-type {
          stroke: #2ecc71;
        }
      }
    }
    .footer-card {
      font-family: 'Cabin';
      left: 60.17px;
      position: absolute;
      bottom: 5vh;
      font-weight: 400;
      font-size: 12px;
      color: #8f8f8f;
      margin-right: 20px;
      width: 337px;
      .footer-img {
        width: 120.29px;
        object-fit: contain;
      }
    }
    .footer-card-small {
      font-family: 'Cabin';
      margin-left: 60px;
      margin-top: 40px;
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 12px;
      color: #8f8f8f;
      width: 337px;
      .footer-img {
        width: 120.29px;
        object-fit: contain;
      }
    }
  }
  .right-side {
    object-fit: cover;
    width: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .left-side {
    width: 100%;
  }
}
// @media only screen and (max-width: 1280px) {
//   .right-side {
//     // height: 100%;
//   }
// }
//small dekstop screen
@media only screen and (max-height: 709px) {
  .login-page {
    height: 100%;
  }
  .logo-img {
    visibility: hidden;
  }
  .footer-card {
    visibility: hidden;
  }
}
//large dekstop screen
@media only screen and (min-height: 710px) {
  .logo-img-small {
    visibility: hidden;
    margin-bottom: 0px !important;
  }
  .footer-card-small {
    visibility: hidden;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
