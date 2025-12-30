<template>
  <div style="position: relative">
    <span v-if="imageUrl">
      <el-upload
        class="upload-demo"
        drag
        action=""
        :on-change="handleChange"
        :auto-upload="false"
        :show-file-list="false"
      >
        <div class="image-data">
          <div class="img-iklan" />
          <div class="flex footer-iklan">
            <button
              slot="trigger"
              class="flex flex-auto items-center justify-center btn-change no-select"
            >
              <IconRefresh />
              <span class="name-btn"> Change </span>
            </button>
          </div>
        </div>
      </el-upload>
      <div
        v-if="typeof dataImageRaw[indexImage].default === 'string'"
        class="image-data-2 gradient-pattern"
      >
        <img :src="dataImageRaw[indexImage].default" class="img-iklan" />
      </div>
      <div v-else class="image-data-2 gradient-pattern">
        <img :src="dataUrl" class="img-iklan" />
      </div>
      <div class="flex btn-crop justify-center" @click="cropImage()">
        <IconCrop style="height: 16px; width: 15px; margin-top: 1px" />
      </div>
      <div class="flex btn-icon justify-center" @click="deleteImage()">
        <IconDelete style="height: 16px; width: 15px; margin-top: 1px" />
      </div>
    </span>
    <span v-if="!imageUrl">
      <el-upload
        class="upload-demo"
        drag
        action=""
        :on-change="handleChange"
        :auto-upload="false"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
      >
        <div class="flex flex-col upload-card pt-4 pb-4 pr-2">
          <div class="flex items-center">
            <img
              src="~/assets/images/creative/upload.svg"
              class="mr-2 icon-upload"
            />
            <div class="flex flex-col">
              <div class="empty-space">Upload Image Here</div>
              <div class="upload-name">
                Supported format:<br />.jpg, .jpeg .png, .gif, .bmp
              </div>
            </div>
          </div>
          <button class="flex items-center justify-center btn-upload no-select">
            <IconUpload />
            <span class="name-btn">Upload File</span>
          </button>
        </div>
      </el-upload>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CreateCreativePage',
  layout: 'login',
  props: {
    titleImage: {
      default: '',
      type: String,
    },
    dataImage: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      indexImage: null,
      defaultImage: '',
      imageLoaded: false,
      isLoading: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 7,
      url: 'https://',
      imageData: '',
      imageUrl: '',
      imageName: '',
      imageFormat: '',
      imageSize: '',
      resolution: {
        width: '',
        height: '',
      },
      image: {
        width: 0,
        height: 0,
      },
      editor: null,
      value: '',
      imgBase64: '',
      itemFilter: ['All', 'Media', 'Text', 'Shape', 'URL', 'Button'],
      activeItem: 'All',
    }
  },
  computed: {
    ...mapState({
      dataResolution: (state) => {
        return state.creative.dataResolution
      },
      dataDetailTemplate: (state) => {
        return state.template.dataDetailTemplate
      },
      dataForm: (state) => {
        return state.template.dataForm
      },
      dataImageRaw: (state) => {
        return state.template.dataImageRaw
      },
      selectedResolution: (state) => {
        return state.template.selectedResolution
      },
    }),
    // currentImage () {
    //   return this.dataImageRaw[this.indexImage].default.raw
    // }
    // eslint-disable-next-line vue/return-in-computed-property
    dataUrl() {
      if (this.dataImageRaw[this.indexImage].default !== null) {
        return URL.createObjectURL(
          this.dataImageRaw[this.indexImage].default.raw
        )
      }
    },
  },
  mounted() {
    this.imageUrl = this.dataImage
    this.getAll()
  },
  methods: {
    cropImage() {
      let imageCrop = ''
      if (typeof this.dataImageRaw[this.indexImage].default === 'string') {
        if (
          this.dataImageRaw[this.indexImage].default?.includes(
            this.$config.baseURL
          )
        ) {
          imageCrop = this.imageUrl
        } else {
          imageCrop = this.imageUrl + '?v1=' + Date.now()
        }
      } else {
        imageCrop = URL.createObjectURL(
          this.dataImageRaw[this.indexImage].default.raw
        )
      }
      const indexForm = this.dataForm.findIndex(
        (x) => x.title === this.titleImage
      )
      const data = {
        indexRawImage: this.indexImage,
        indexForm,
        title: this.titleImage,
        type: 'Image',
        img: imageCrop,
        dialog: true,
        height: this.dataForm[indexForm].height,
        width: this.dataForm[indexForm].width,
      }
      //
      this.$emit('openEditor', data)
    },
    deleteImage() {
      // await this.$axios
      //   .get('template/' + this.$route.params.index)
      //   .then((response) => {
      //     const x = response.data.data.configSchema.properties
      //     const keys = Object.keys(x)
      //     const data = []

      //     keys.forEach((key, index) => {
      //       x[key].type = x[key].type.charAt(0).toUpperCase() + x[key].type.slice(1)
      //       data.push(x[key])
      //     })
      this.imageUrl = ''
      const dataJSON = {
        index: this.indexImage,
        default: 'blank.png',
      }
      const indexImage = this.dataForm.findIndex(
        (x) => x.title === this.titleImage
      )
      const data2 = {
        index: indexImage,
        title: this.titleImage,
        type: 'Image',
        src: 'https://unimind.kgnow.com/blank.png',
      }
      this.$emit('reloadback', data2)
      this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$notifier.showMessage({
          content: 'Avatar picture must be JPG format!',
          type: 'failed',
        })
      }
      if (!isLt2M) {
        this.$notifier.showMessage({
          content: 'Avatar picture size can not exceed 2MB!',
          type: 'failed',
        })
      }
      return isJPG && isLt2M
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    },
    handleChange(file) {
      const formatData = file.raw.type
      if (
        formatData === 'image/jpg' ||
        formatData === 'image/jpeg' ||
        formatData === 'image/png' ||
        formatData === 'image/gif' ||
        formatData === 'image/bmp'
      ) {
        if (file.size / 1023.4 > 500) {
          this.$notifier.showMessage({
            content: 'Image size can not exceed 500KB!',
            type: 'failed',
          })
        } else {
          this.imageData = file

          this.imageLoaded = false
          this.imageUrl = URL.createObjectURL(file.raw)
          this.uploadFile()
          // this.getBase64(file.raw).then((res) => {
          //   const params = res.split(',')
          //   if (params.length > 0) {
          //     this.imgBase64 = params[1]
          //     const indexImage = this.dataForm.findIndex(x => x.title === this.titleImage)
          //     const data = {
          //       index: indexImage,
          //       title: this.titleImage,
          //       type: 'Image',
          //       src: 'data:image/png;base64, ' + this.imgBase64
          //     }
          //     this.$emit('reloadback', data)

          //     // send image raw data fo dataimageraw variable
          //     const dataJSON = {
          //       index: this.indexImage,
          //       default: this.imageData
          //     }
          //     this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
          //   }
          // })
        }
      } else {
        this.$notifier.showMessage({
          content: 'Image must be JPG, JPEG, PNG, GIF & BMP format',
          type: 'failed',
        })
      }
    },
    async uploadFile() {
      const data = new FormData()
      data.append('files', this.imageData.raw)
      await this.$axios
        .post('obs/array', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const fileKey =
            this.$config.baseURL + 'obs?fileKey=' + res?.data.data.fileKeys[0]
          const indexForm = this.dataForm.findIndex(
            (x) => x.title === this.titleImage
          )

          const dataJSON = {
            index: this.indexImage,
            default: this.imageData,
          }
          this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
          const data = {
            index: indexForm,
            title: this.titleImage,
            type: 'Image',
            src: fileKey,
          }
          this.$store.commit('template/SET_DATA_FORM', data)
          this.$emit('reloadback', data)

          // const data = {
          //   indexRawImage: this.indexImage,
          //   indexForm,
          //   title: this.titleImage,
          //   type: 'Image',
          //   src: fileKey,
          //   data: this.imageData
          // }
          // this.$emit('saveEditor', data)
          // const data = {
          //   index: indexImage,
          //   title: this.titleImage,
          //   type: 'Image',
          //   src: fileKey
          // }

          // // send image raw data fo dataimageraw variable
          // const dataJSON = {
          //   index: this.indexImage,
          //   default: res?.data.data.fileKeys[0]
          // }
          // this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
          // const dataFile = {
          //   status: 'ready',
          //   name: 'result_crop_' + Date.now() + this.tempIndex++,
          //   size: this.imageData.size,
          //   percentage: 0,
          //   uid: '-',
          //   raw: this.imageData
          // }
          // const data = {
          //   indexRawImage: this.imgSrc.indexRawImage,
          //   indexForm: this.imgSrc.indexForm,
          //   title: this.imgSrc.title,
          //   type: this.imgSrc.type,
          //   src: fileKey,
          //   data: dataFile
          // }
          // this.$emit('saveEditor', data)
          // this.imageUpload = false
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Upload failed. Please try again ! ' + error,
            type: 'failed',
          })
          this.imageUpload = false
        })
    },
    getAll() {
      this.getTemplateDetail()
    },
    getTemplateDetail() {
      // this.isLoading = true
      // this.$store
      //   .dispatch('template/getDetail', {
      //     id: this.$route.params.index,
      //     resolution: this.selectedResolution
      //   })
      //   .then(() => {
      this.isLoading = false
      this.defaultImage = this.dataForm.find(
        (item) => item.title === this.titleImage
      )
      this.imageUrl = this.defaultImage.default
      this.$store.commit('template/SET_DATA_IMAGE', this.defaultImage)
      this.indexImage = this.dataImageRaw.findIndex(
        (x) => x.title === this.titleImage
      )
      // })
      // .catch(() => {
      //   this.isLoading = false
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
.gradient-pattern {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 320px;
  height: 135px;
  border: none;
  font: normal 100% / normal Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: -webkit-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, rgba(
            0,
            0,
            0,
            0
          )
          25%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(
            0,
            0,
            0,
            0.0980392
          )
          0),
    rgb(255, 255, 255);
  background: -moz-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, rgba(0, 0, 0, 0)
          25%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(
            0,
            0,
            0,
            0.0980392
          )
          0),
    rgb(255, 255, 255);
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    rgb(255, 255, 255);
  background-position: 0 0, 40px 40px;
  -webkit-background-origin: padding-box;
  background-origin: padding-box;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  -webkit-background-size: 80px 80px;
  background-size: 80px 80px;
}
.upload-demo {
  width: 100%;
  .el-upload {
    width: 100%;
  }
}

.btn-icon {
  height: 40px;
  padding: 10px;
  width: 40px;
  position: absolute;
  bottom: 18px;
  right: 11px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-left: 18px;
  cursor: pointer;
}
.btn-icon:hover {
  background-color: rgb(243 244 246);
}
.btn-crop {
  height: 40px;
  padding: 10px;
  width: 40px;
  position: absolute;
  bottom: 18px;
  right: 60px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-left: 18px;
  cursor: pointer;
}
.btn-crop:hover {
  background-color: rgb(243 244 246);
}

.image-data-2 {
  // position: absolute;
  // top: 0px;
  // width: 100%;
  // left: 0px;

  position: absolute;
  top: 2px;
  width: 267px;
  left: 2px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  .img-iklan {
    height: 135px;
    border-radius: 5px 5px 0px 0px;
    object-fit: cover;
    width: 100%;
  }
}
.kg-container {
  .preview {
    background: #fafbfc;
    .box-container {
      width: 300px;
      height: 600px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      // padding: 20px;
      margin-bottom: 20px;
      .img-empty {
        // max-width: 200px;
        // padding-top: 10px;
        // margin-top: 13px;
        opacity: 0.5;
        // padding-top: 20px;
      }
      .img-data {
        width: 100%;
        height: 100%;
        object-fit: none;
        object-position: left top;
      }
      .title-1 {
        font-weight: 600;
        font-size: 20px;
        color: #454545;
        margin-top: 18px;
        margin-bottom: 5px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
      }
      .subtitle-1 {
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }
    }
    .btn-save {
      max-width: 125px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      height: 36px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      .name-btn {
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .btn-save:hover {
      background-color: rgb(243 244 246);
      border: 1px solid transparent;
    }
  }
  .panel-customize {
    width: 360px;
    height: 100vh;
    background: #f8f8f8;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
    transform: translateX(0%);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    .back-btn {
      width: 100%;
      height: 40px;
      background: #ffffff;
      padding-left: 20px;
      font-weight: 700;
      font-size: 14px;
      color: #1b63d4;
      cursor: pointer;
    }
    .back-btn:hover {
      background: #f8f8f8;
    }
    .header-panel {
      margin-bottom: 10px;
      padding: 15px;
      border-top: 1px solid #e2e2e2;
      background: #ffffff;
      border-bottom: 1px solid #e2e2e2;
      .back-button {
        width: 40px;
        margin-right: 10px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        cursor: pointer;
      }
      .back-button:hover {
        background-color: rgb(243, 244, 246);
      }
      .title-header {
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
      }
      .sub-header {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
      }
    }
    .body-panel {
      overflow-y: scroll;
      .card-box {
        width: 100%;
        padding: 15px;
        background: #ffffff;
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        border-left: 2px solid transparent;
        margin-bottom: 10px;
        .header-card {
          margin-bottom: 22px;
          font-weight: 500;
          font-size: 16px;
          color: #454545;
        }
        .form-panel {
          padding: 0px;
          background: #ffffff;
          position: relative;
          .card-assets {
            margin-bottom: 10px;
            overflow-x: scroll;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            .item-assets {
              padding: 2px 12px 2px 12px;
              background: #ffffff;
              border: 1px solid #e2e2e2;
              font-size: 14px;
              border-radius: 500px;
              color: #1b63d4;

              cursor: pointer;
              margin-right: 4px;
            }
            .item-active {
              background: #1b63d4;
              border: 1px solid #1b63d4;
              color: #ffffff;
            }
          }
          .card-assets::-webkit-scrollbar {
            /* WebKit */
            width: 0;
            height: 0;
          }

          .image-data {
            background: #ffffff;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            padding-bottom: 10px;
            .img-iklan {
              height: 135px;
              border-radius: 5px 5px 0px 0px;
              object-fit: cover;
              width: 100%;
            }
            .footer-iklan {
              padding-left: 11px;
              width: 157px;
              margin-top: 10px;
              .btn-change {
                background: #ffffff;
                border: 1px solid #e2e2e2;
                border-radius: 5px;
                height: 40px;
                padding-left: 15px;
                padding-right: 15px;
                cursor: pointer;
                .name-btn {
                  font-weight: 700;
                  font-size: 14px;
                  padding-bottom: 1px;
                  color: #1b63d4;
                  padding-left: 10px;
                }
              }
              .btn-change:hover {
                background-color: rgb(243 244 246);
                // border: 1px solid transparent;
              }
            }
          }
          .box-form {
            margin-bottom: 10px;
            .title-form {
              font-weight: 400;
              font-size: 16px;
              color: #454545;
              margin-bottom: 3px;
            }
          }
          .upload-card {
            height: 100%;
            border: 1px dashed #1b63d4;
            .icon-upload {
              height: 45.5px;
              padding-left: 15px;
              margin-right: 8px;
            }
            .empty-space {
              font-weight: 700;
              font-size: 14px;
              text-align: left;
              color: #333333;
            }
            .upload-name {
              font-weight: 400;
              font-size: 12px;
              text-align: left;
              color: #757575;
            }

            .btn-upload {
              width: 90%;
              margin-left: auto;
              margin-right: auto;
              background: #ffffff;
              border: 1px solid #1b63d4;
              color: #1b63d4;
              border-radius: 5px;
              height: 34px;
              margin-top: 20px;
              cursor: pointer;
              .name-btn {
                font-weight: 700;
                font-size: 14px;
                color: #1b63d4;
                padding-left: 10px;
              }
            }
            .btn-upload:hover {
              background-color: rgb(243 244 246);
              border: 0px;
            }
          }
        }
        .component-card {
          background: #ffffff;
          border: 1px solid #e2e2e2;
          margin-bottom: 10px;
          .header-component {
            border-bottom: 1px solid #e2e2e2;
            height: 48px;
            padding-left: 15px;
            padding-right: 15px;
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            .icon-header {
              margin-right: 10px;
            }
            .btn-preview {
              cursor: pointer;
            }
          }
          .body-component {
            padding: 10px 15px 10px 15px;
          }
        }
      }
    }
    .footer-panel {
      bottom: 0px;
      position: fixed;
      width: 100%;
      .hide-panel {
        height: 40px;
        background: #ffffff;
        width: inherit;
        cursor: pointer;
        padding-right: 15px;
        padding-left: 15px;
        .hide-text {
          font-weight: 700;
          font-size: 14px;
          color: #1b63d4;
        }
      }
      .hide-panel:hover {
        background: #f8f8f8;
      }
      .box-action {
        height: 70px;
        background: #ffffff;
        width: inherit;
        border-top: 1px solid #e2e2e2;
      }
    }
  }
  .panel-hide {
    width: 50px;
    height: 100vh;
    background: #f8f8f8;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.1);
    transform: translateX(0%);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    .btn-show {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-bottom: 1px solid #e2e2e2;
      cursor: pointer;
    }
    .btn-show:hover {
      background: #f8f8f8;
    }
    .name-panel {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #757575;
      width: 107px;
      transform: rotate(-90deg);
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
