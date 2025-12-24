<template>
  <Popup2 class="kg-popup" width="400" @close-modal="closeDialog()">
    <template v-slot:body>
      <div class="body-popup">
        <div class="flex justify-between items-center">
          <div class="title-dialog">Send To Studio Hub</div>
        </div>
        <div class="sub-dialog">Send Video To Studio Hub</div>

        <div class="relative w-full">
          <div class="flex flex-col box-form">
            <div class="title-form">
              Video Title<span style="color: rgba(237, 84, 58, 1)">*</span>
            </div>
            <el-input
              v-model="data.title"
              disabled
              placeholder="Title"
              style="width: 100%"
              class="mt-2"
            />
          </div>

          <div class="flex flex-col box-form mt-4">
            <div class="title-form">
              Video Category<span style="color: red">*</span>
            </div>
            <el-select
              v-model="data.category"
              filterable
              style="width: 100%"
              placeholder="Choose Category"
            >
              <el-option
                v-for="item in dataCategory"
                :key="item.refId"
                :label="item.name"
                :value="item.refId"
              />
            </el-select>
          </div>

          <div class="flex flex-col box-form mt-4">
            <div class="title-form">
              StudioHub Profile<span style="color: rgba(237, 84, 58, 1)"
                >*</span
              >
            </div>
            <!-- <el-input v-model="data.profile" disabled placeholder="Profile" style="width: 100%" class="mt-2" /> -->
            <el-select
              v-model="data.profileId"
              filterable
              style="width: 100%"
              placeholder="Choose Profile Id"
            >
              <el-option
                v-for="item in dataProfileList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>

          <div class="flex flex-col box-form mt-4">
            <div class="title-form">
              Transfer to<span style="color: red">*</span>
            </div>
            <el-select
              v-model="data.transferTo"
              filterable
              style="width: 100%"
              placeholder="Choose Transfer To"
            >
              <el-option
                v-for="item in dataTransfer"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
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
            @click="send()"
          >
            <IconSave
              class="mr-2"
              :bg-color="validationBtnSave ? 'white' : '#A1ADB9'"
            />
            Transfer to
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
    datash: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: {
        category: '',
        title: '',
        profile: '',
        transferTo: '',
        profileId: '',
      },
      dataTransfer: [
        { id: 'video_basket', name: 'Basket Ready' },
        { id: 'video_livestream', name: 'On Air Media Live' },
      ],
      showMessage: false,
      messageError: '',
      dataCategory: [],
      isLoading: false,
      dataProfileList: [],
    }
  },

  computed: {
    ...mapState({
      dataSHDialog: (state) => {
        return state.creative.dataSHDialog
      },
      dataOrg: (state) => {
        return state.user.dataOrg
      },
    }),
    validationBtnSave() {
      return this.data.category !== '' && this.data.transferTo !== ''
    },
  },
  watch: {
    datash: {
      handler(val) {
        if (val) {
          this.dataDialog(val)
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.dataDialog()
    this.getCategory()
  },
  methods: {
    closeDialog() {
      document.querySelector('body').style.overflow = ''
      this.$store.commit('creative/SET_SEND_SH_CHANGE_DIALOG', false)
      this.clearForm()
    },
    dataDialog(val) {
      const dataForm = val
      this.data.title = dataForm?.title
      const orgId = window.$nuxt.$store.state.user.orgId
      const dataProfile = this.dataOrg.find((item) => {
        return item.id === orgId
      })

      // const profileId = dataProfile.name ? dataProfile.name : ''
      // this.data.profile = profileId
      // this.data.profileId = dataProfile.profileId ? dataProfile.profileId : ''
      if (orgId === 17) {
        this.dataProfileList = [
          { id: dataProfile.profileId, name: dataProfile.name },
          { id: '44f9151124985936c71172', name: 'DA Kompascom' },
        ]
      } else if (orgId === 19) {
        this.dataProfileList = [{ id: '773083c85e52', name: 'Gridoto' }]
      } else if (orgId === 20) {
        this.dataProfileList = [{ id: '0876de1bdcfa', name: 'GRID ID' }]
      } else if (orgId === 23) {
        this.dataProfileList = [{ id: 'fbd04419cbd4', name: 'Bolasport' }]
      } else {
        this.dataProfileList = [
          { id: dataProfile.profileId, name: dataProfile.name },
        ]
      }
    },
    clearForm() {
      this.data.category = ''
      this.data.title = ''
      this.data.profile = ''
      this.data.transferTo = ''
      this.data.profileId = ''
    },
    async getCategory() {
      this.isLoading = true
      await this.$axios
        .get('category')
        .then((res) => {
          this.dataCategory = res.data.data
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    send() {
      if (this.validationBtnSave) {
        this.$notifier.showMessage({
          content: 'Saving changes...',
          type: 'loading',
        })

        const data = {
          type: this.data.transferTo,
          profileId: this.data.profileId,
          categoryId: this.data.category,
          id: this.datash.id,
        }

        const x = setTimeout(
          () =>
            this.$store
              .dispatch('creative/sendToStudioHub', data)
              .then((res) => {
                if (res.status === 201 || res.status === 200) {
                  this.$notifier.showMessage({
                    content: 'Video Send!',
                    type: 'success',
                  })
                  this.$parent.getData()
                  this.name = ''
                  document.querySelector('body').style.overflow = ''
                  this.$store.commit(
                    'creative/SET_SEND_SH_CHANGE_DIALOG',
                    false
                  )
                  this.clearForm()
                  clearInterval(x)
                } else {
                  this.showMessage = true
                  this.messageError = res.data.data.message
                  clearInterval(x)
                }
              })
              .catch(() => {
                clearInterval(x)
              }),
          1000
        )
      } else {
        this.showMessage = true
        this.messageError = 'Please fill in the required fields'
      }
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
    overflow-y: auto;
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
