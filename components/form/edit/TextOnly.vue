<template>
  <div class="form-input">
    <div class="style-box">
      <div class="grid grid-cols-1 gap-2">
        <div class="flex flex-col color-container">
          <div class="color-card flex items-center justify-between" :style="'height:' + lineHeight2 + 'px'">
            <div
              v-if="titleForm == 'Body Text' "
              class="textarea-with-counter"
            >
              <textarea
                v-model="data"
                :rows="lineHeight"
                class="text-color"
                :maxlength="maxLength"
                @input="changeData()"
              />
              <div class="char-counter">
                {{ charCount }}/{{ maxLength }}
              </div>
            </div>
            <div v-else>
              <textarea v-model="data" :rows="lineHeight" class="text-color" @input="changeData()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      data: '',
      defaultData: {},
      lineHeight: 3,
      lineHeight2: '100',
      charCount: 0,
      maxLength: 2000

    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.creative.dataForm
      }
    })
  },
  mounted () {
    console.log('ini', this.titleForm)
    this.getDetail()
  },
  methods: {
    changeData () {
      if (this.titleForm === 'Body Text') {
        this.charCount = this.data.length
      }
      const data = {
        title: this.titleForm,
        src: this.data,
        type: 'TextOnly'
      }
      this.$emit('changeText', data)
    },
    getDetail () {
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then((res) => {
      this.defaultData = this.dataForm.find(
        item => item.title === this.titleForm
      )
      if (this.defaultData.lineHeight !== undefined) {
        this.lineHeight = Math.ceil(parseFloat(this.defaultData.lineHeight) / 24)
        this.lineHeight2 = this.defaultData.lineHeight + 40
      }
      this.data = this.defaultData.default
      this.changeData()
    //     })
    //     .catch(() => {
    //     })
    }
    // getTemplateDetail () {
    //   this.$store
    //     .dispatch('template/getDetail', {
    //       id: this.$route.params.index,
    //       resolution: this.selectedResolution
    //     })
    //     .then((res) => {
    //       this.defaultData = this.dataForm.find(
    //         item => item.title === this.titleForm
    //       )
    //       this.data = this.defaultData.default
    //       this.changeData()
    //     })
    //     .catch(() => {
    //     })
    // }
  }
}
</script>

  <style lang="scss" scoped>
  textarea {
    resize: none;
  }

  .textarea-with-counter {
    position: relative;
    width: 100%;
    .char-counter {
      bottom: -10px;
      color: #999;
      font-size: 12px;
      padding-top: 15px;
      position: absolute;
      right: 0px;
    }
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 18px;
}

::-webkit-scrollbar-thumb {
    height: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
    background-color: #E2E2E2;
    -webkit-border-radius: 7px;
}

::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}
  .form-input {
    .input-box {
      height: 157px;
      width: 100%;
      resize: none;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      padding: 10px;
    }
    .input-box:focus {
      outline: none !important;
      background: #ffffff;
      border: 1.3px solid #1b63d4;
      box-shadow: 0px 2px 10px #bbd1f3;
      border-radius: 5px;
    }
    .style-box {
      .title-box {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #454545;
        margin-bottom: 8px;
      }
      .card-font {
        margin-bottom: 8px;
        .font-family-card {
          width: 66%;
        }
        .font-size-card {
          width: 30%;
          margin-left: 10px;
        }
      }
      .btn-card {
        height: 34px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        cursor: pointer;
      }
      .btn-card-active {
        background: #1b63d4;
      }
      .color-container {
        .title-color {
          font-weight: 400;
          font-size: 16px;
          color: #454545;
        }
        .color-card {
          height: 100px;
          background: #ffffff;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          padding-left: 10px;
          padding-right: 10px;
          .text-color {
            font-weight: 400;
            font-size: 16px;
            color: #454545;
            margin-left: 5px;
            width: 100%;
          }
          .text-color:focus {
            outline: none;
          }
          .percent-color {
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            .hr-vertical {
              border: 1px solid #e2e2e2;
              height: 15px;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  </style>
