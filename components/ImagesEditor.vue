<template>
  <div class="container-dialog">
    <div class="modal-dialog">
      <div class="body-dialog flex flex-col items-center justify-center">
        <div class="crop-title">Crop Image</div>
        <IconClose
          class="icon-close no-select"
          bg-color="white"
          @click.native="close()"
        />
        <cropper
          ref="cropper"
          class="cropper"
          :src="imgSrc.img"
          :stencil-props="{
            handlers: {},
            movable: false,
            scalable: false,
          }"
          :stencil-size="{
            width: imgSrc.width,
            height: imgSrc.height,
          }"
          :resize-image="{
            adjustStencil: true,
          }"
          image-restriction="stencil"
          style="max-width: 80%; max-height: 60%"
        />
        <div class="flex items-center justify-center box-card">
          <div
            class="flex items-center justify-center btn-box mr-4 no-select"
            @click="onZoom('in')"
          >
            <IconPlus bg-color="white" />
          </div>
          <div
            class="flex items-center justify-center btn-box mr-4 no-select"
            @click="onZoom('out')"
          >
            <IconMinus bg-color="white" />
          </div>
          <div
            class="flex items-center justify-center btn-box mr-4 no-select"
            @click="move('up')"
          >
            <IconArrowUp bg-color="white" />
          </div>
          <div
            class="flex items-center justify-center btn-box mr-4 no-select"
            @click="move('down')"
          >
            <IconArrowDown bg-color="white" />
          </div>
          <div
            class="flex items-center justify-center btn-box mr-4 no-select"
            @click="move('right')"
          >
            <IconArrowRight bg-color="white" />
          </div>
          <div
            class="flex items-center justify-center btn-box no-select"
            @click="move('left')"
          >
            <IconArrowLeft bg-color="white" />
          </div>
        </div>
        <div class="flex items-center justify-between footer-btn">
          <div
            class="flex items-center justify-center btn-images no-select"
            @click="close()"
          >
            Close
          </div>
          <div class="flex items-center justify-center items-col">
            <div
              class="flex items-center justify-center btn-images upload no-select"
              @click="$refs.file.click()"
            >
              <label for="file-upload" class="custom-file-upload" />
              <input
                id="file-upload"
                ref="file"
                class="custom-file-upload"
                type="file"
                accept="image/*"
                @change="changeImage($event)"
              />
              Change Image
            </div>
            <div
              class="flex items-center justify-center btn-apply no-select"
              @click="applyChange()"
            >
              <img
                src="~/assets/images/icon_apply.svg"
                style="margin-right: 10px"
              />
              Apply Changes
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex items-center justify-center box-card">
        <div class="flex items-center justify-center btn-box mr-4 no-select" @click="onZoom('in')">
          <IconPlus bg-color="white" />
        </div>
        <div class="flex items-center justify-center btn-box mr-4 no-select" @click="onZoom('out')">
          <IconMinus bg-color="white" />
        </div>
        <div class="flex items-center justify-center btn-box mr-4 no-select" @click="move('up')">
          <IconArrowUp bg-color="white" />
        </div>
        <div class="flex items-center justify-center btn-box mr-4 no-select" @click="move('down')">
          <IconArrowDown bg-color="white" />
        </div>
        <div class="flex items-center justify-center btn-box mr-4 no-select" @click="move('right')">
          <IconArrowRight bg-color="white" />
        </div>
        <div class="flex items-center justify-center btn-box no-select" @click="move('left')">
          <IconArrowLeft bg-color="white" />
        </div>
      </div>
      <div class="flex items-center justify-between footer-btn">
        <div class="flex items-center justify-center btn-images no-select" @click="close()">
          Close
        </div>
        <div class="flex items-center justify-center items-col">
          <div class="flex items-center justify-center btn-images upload no-select" @click="$refs.file.click()">
            <label for="file-upload" class="custom-file-upload" />
            <input
              id="file-upload"
              ref="file"
              class="custom-file-upload"
              type="file"
              accept="image/*"
              @change="changeImage($event)"
            >
            Change Image
          </div>
          <div class="flex items-center justify-center btn-apply no-select" @click="applyChange()">
            <img src="~/assets/images/icon_apply.svg" style="margin-right:10px;">
            Apply Changes
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  props: {
    imgSrc: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      zoom: 1,
      resultImage: null,
      imageData: null,
      tempIndex: 1,
      imageUpload: false,
    }
  },
  destroyed() {
    if (this.imgSrc.img) {
      URL.revokeObjectURL(this.imgSrc.img)
    }
  },
  mounted() {
    this.$refs.cropper.refresh()
    this.imageData = null
  },
  methods: {
    percentsRestriction({
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      imageWidth,
      imageHeight,
    }) {
      return {
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
      }
    },
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    },
    async applyChange() {
      this.imageUpload = true
      const canvas = this.$refs.cropper.getResult()
      this.resultImage = canvas.canvas.toDataURL()
      const file = this.dataURLtoFile(
        this.resultImage,
        'result_crop_' + Date.now() + this.tempIndex++
      )
      const data = new FormData()
      data.append('files', file)
      await this.$axios
        .post('obs/array', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const fileKey =
            this.$config.baseURL + 'obs?fileKey=' + res.data.data.fileKeys[0]
          const dataFile = {
            status: 'ready',
            name: 'result_crop_' + Date.now() + this.tempIndex++,
            size: file.size,
            percentage: 0,
            uid: '-',
            raw: file,
          }
          const data = {
            indexRawImage: this.imgSrc.indexRawImage,
            indexForm: this.imgSrc.indexForm,
            title: this.imgSrc.title,
            type: this.imgSrc.type,
            src: fileKey,
            data: dataFile,
          }
          this.$emit('saveEditor', data)
          this.imageUpload = false
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Upload failed. Please try again ! ' + error,
            type: 'failed',
          })
          this.imageUpload = false
        })
    },
    onZoom(x) {
      if (x === 'in') {
        const zoom = 1
        this.zoom = zoom + 1
        this.$refs.cropper.zoom(this.zoom)
      } else {
        this.$refs.cropper.zoom(0.5)
      }
    },
    move(x) {
      if (x === 'up') {
        this.$refs.cropper.move(0, -100)
      }
      if (x === 'down') {
        this.$refs.cropper.move(0, 100)
      }
      if (x === 'left') {
        this.$refs.cropper.move(-100, 0)
      }
      if (x === 'right') {
        this.$refs.cropper.move(100, 0)
      }
    },
    close() {
      this.$emit('closeEditor', false)
      this.$store.commit('user/SET_DROPDOWN', null)
    },
    changeImage(file) {
      const { files } = event.target
      if (files && files[0]) {
        const formatData = files[0].type
        if (
          formatData === 'image/jpg' ||
          formatData === 'image/jpeg' ||
          formatData === 'image/png' ||
          formatData === 'image/gif' ||
          formatData === 'image/bmp'
        ) {
          if (files[0].size / 1023.4 > 500) {
            this.$message.error('Image size can not exceed 500KB!')
          } else {
            if (this.imgSrc.img) {
              URL.revokeObjectURL(this.imgSrc.img)
            }
            file.uid = Date.now() + this.tempIndex++
            const dataFile = {
              status: 'ready',
              name: files[0].name,
              size: files[0].size,
              percentage: 0,
              uid: file.uid,
              raw: files[0],
            }
            this.imageData = dataFile
            this.getBase64(files[0]).then((res) => {
              const params = res.split(',')
              if (params.length > 0) {
                this.imgBase64 = params[1]
                this.imgSrc.img = 'data:image/png;base64, ' + params[1]
              }
            })
          }
        } else {
          this.$message.error('Image must be JPG, JPEG, PNG, GIF & BMP format')
        }
      }
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
  },
}
</script>
<style lang="scss" scoped>
input[type='file'] {
  display: none;
}
.custom-file-upload {
  /* border: 1px solid #ccc; */
  display: inline-block;
  /* padding: 6px 12px; */
  cursor: pointer;
}

.container-dialog {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: rgba(10, 10, 10, 0.5);
  .modal-dialog {
    padding: 20px 40px 20px 40px;
    height: 100%;
    width: 100%;
    .body-dialog {
      height: 100%;
      width: 100%;
      background-color: black;
      .crop-title {
        position: absolute;
        top: 35px;
        left: 60px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
      }
      .icon-close {
        position: absolute;
        top: 35px;
        right: 60px;
        cursor: pointer;
      }
      .my-clipper {
        width: 100%;
        max-width: 700px;
      }
      .box-card {
        margin-top: 60px;
        .btn-box {
          cursor: pointer;
          width: 56px;
          height: 40px;
          border: 1px solid #ffffff;
          border-radius: 5px;
        }
        .btn-box:hover {
          opacity: 0.9;
        }
      }

      .footer-btn {
        position: absolute;
        // background-color:black;
        bottom: 40px;
        padding-left: 60px;
        padding-right: 60px;
        width: 100%;
        .btn-images {
          padding-right: 18px;
          padding-left: 18px;
          height: 40px;
          border: 1px solid #ffffff;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
        }
        .btn-images:hover {
          opacity: 0.9;
        }
        .btn-apply {
          background: #1b63d4;
          padding-right: 18px;
          padding-left: 18px;
          height: 40px;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          margin-left: 10px;
        }
        .btn-apply:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>
