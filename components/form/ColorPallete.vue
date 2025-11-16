<template>
  <div v-if="!isLoading" class="form-input">
    <div class="style-box">
      <div class="flex flex-col color-container">
        <div class="title-color">Color :</div>
        <div class="color-card flex items-center">
          <v-swatches
            v-model="color"
            :swatches="swatches"
            row-length="5"
            shapes="squares"
            swatch-size="30"
            show-border
            popover-x="right"
            @input="changeData()"
          />
          <input v-model="color" disabled class="text-color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'

export default {
  components: {
    VSwatches,
  },

  props: {
    titleForm: {
      default: '',
      type: String,
    },
  },

  data() {
    return {
      isLoading: true,
      swatches: ['#359EA6', '#473885', '#FABE19', '#F3631B', '#8C2466'],
      color: '#359EA6',
      defaultData: {},
      text: '',
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.template.dataForm
      },
    }),
  },

  mounted() {
    this.getTemplateDetail()
  },
  methods: {
    getTemplateDetail() {
      this.isLoading = true
      this.defaultData = this.dataForm.find(
        (item) => item.title === this.titleForm
      )
      this.color = this.defaultData.default
      this.changeData()
      this.isLoading = false
    },
    changeData() {
      const data = {
        title: this.titleForm,
        src: this.color,
        type: 'Color_pallete',
      }
      this.$emit('changeColorOnly', data)
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}

::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #e2e2e2;
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
  .title-btn {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 3px;
    color: #454545;
  }
  .input-box {
    height: 40px;
    width: 100%;
    resize: none;
    background: #9a9a9a;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    padding: 6px 10px 4px 10px;
    margin-bottom: 10px;
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
      .text-color {
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-left: 5px;
        width: 80px;
      }
      .text-color:focus {
        outline: none;
      }
      .title-color {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 3px;
        color: #454545;
      }
      .text-area-custom {
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
      .color-card {
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
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
