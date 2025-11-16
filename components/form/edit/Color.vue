<template>
  <div class="form-input">
    <div class="style-box">
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col color-container">
          <div class="title-color">Color</div>
          <div class="color-card flex items-center">
            <el-color-picker
              v-model="color"
              :predefine="predefineColors"
              size="mini"
              @change="changeData()"
            />
            <input v-model="color" class="text-color" @change="changeData()" />
          </div>
        </div>
        <div class="flex flex-col color-container">
          <div class="title-color">Opacity</div>
          <div class="color-card flex items-center justify-between">
            <input
              v-model="opacity"
              class="text-color"
              @change="changeData()"
            />
            <div class="flex items-center justify-center percent-color">
              <div class="hr-vertical" />
              %
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
      type: String,
    },
  },
  data() {
    return {
      color: '#000000',
      opacity: 100,
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ],
      defaultData: {},
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.creative.dataForm
      },
    }),
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    rgb2hex(rgb) {
      rgb = rgb.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
      )
      return rgb && rgb.length === 4
        ? '#' +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : ''
    },
    changeData() {
      const data = {
        title: this.titleForm,
        color: this.color,
        opacity: this.opacity,
        type: 'Color',
      }
      this.$emit('changeColor', data)
    },
    getDetail() {
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then((res) => {
      this.defaultData = this.dataForm.find(
        (item) => item.title === this.titleForm
      )

      this.color = this.defaultData.default.split(/[;]/)[0]
      this.color = this.color.substring(this.color.indexOf(':') + 1)

      if (!this.color.includes('#')) {
        this.color = this.rgb2hex(this.color)
      }
      this.opacity = this.defaultData.default.split(/[;]/)[1]
      this.opacity = this.opacity.substring(this.opacity.indexOf(':') + 1)
      this.opacity = this.opacity.replace('%', '')
      this.changeData()
      // })
      // .catch(() => {
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
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
        height: 40px;
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
          width: 80px;
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
