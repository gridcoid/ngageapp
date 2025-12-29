<template>
  <Popup2 class="kg-popup" width="400" @close-modal="closeDialog()">
    <template v-slot:body>
      <div class="body-popup">
        <div class="flex justify-between items-center">
          <div class="title-dialog">Create New Organization</div>
        </div>
        <div class="sub-dialog">Input New Organization name.</div>

        <div class="relative w-full">
          <div class="flex">
            <el-input
              v-model="name"
              placeholder="New Organization"
              style="width: 100%"
              class="mt-2"
            />
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
      name: '',
      showMessage: false,
      messageError: '',
    }
  },

  computed: {
    validationBtnSave() {
      return this.name !== ''
    },
  },
  mounted() {},
  methods: {
    closeDialog() {
      document.querySelector('body').style.overflow = ''
      this.$store.commit('user/SET_ORG_CHANGE_DIALOG', false)
    },
    save() {
      if (this.validationBtnSave) {
        this.$notifier.showMessage({
          content: 'Saving changes...',
          type: 'loading',
        })

        const sto = setTimeout(
          () =>
            this.$store
              .dispatch('user/createOrganization', {
                name: this.name,
              })
              .then((res) => {
                if (res.status === 201 || res.status === 200) {
                  this.$notifier.showMessage({
                    content: 'Organization Save!.',
                    type: 'success',
                  })
                  this.name = ''
                  document.querySelector('body').style.overflow = ''
                  this.$store.commit('user/SET_ORG_CHANGE_DIALOG', false)
                  this.$store.dispatch('user/getOrgUser', { all: true })
                  clearInterval(sto)
                } else {
                  this.showMessage = true
                  this.messageError = res.data.data.message
                  clearInterval(sto)
                }
              })
              .catch(() => {
                clearInterval(sto)
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
