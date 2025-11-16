<template>
  <div>
    <Container
      :get-ghost-parent="getGhostParent"
      drag-handle-selector=".column-drag-handle"
      class="mt-1"
      @drop="onDrop"
    >
      <Draggable v-for="(item, index) in dataImageArrayRaw" :key="index">
        <div class="selected-image flex items-center no-select">
          <div
            class="flex items-center justify-center no-select btn-drag column-drag-handle"
          >
            <IconDrag class="icon-drag" />
          </div>
          <img class="image-drag" :src="item.img" />
          <button
            class="flex items-center justify-center btn-change no-select"
            @click="cropImage(index)"
          >
            <IconCrop class="icon-item" />
            <span class="name-btn">Edit</span>
          </button>
          <button
            class="flex btn-icon2 items-center justify-center no-select"
            @click="removeList(index)"
          >
            <IconDelete style="height: 16px; width: 15px; margin-top: 1px" />
          </button>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Container, Draggable } from 'vue-smooth-dnd'
const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) {
    return arr
  }

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

export default {
  name: 'CreateCreativePage',
  layout: 'login',
  components: { Container, Draggable },
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
      defaultImage2: '',
      imageLoaded: false,
      isLoading: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 7,
      url: 'https://',
      imageData: [],
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
      indexList: 0,
      totalImage: 0,
      indexForm: 0,
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.creative.dataForm
      },
      dataImageArrayRaw: (state) => {
        return state.creative.dataImageArrayRaw
      },
      dataImageArrayRaw2: (state) => {
        return state.creative.dataImageArrayRaw2
      },
    }),
  },
  mounted() {
    this.imageUrl = this.dataImage
    this.getTemplateDetail()
  },
  methods: {
    getTemplateDetail() {
      this.isLoading = true
      // this.$store
      //   .dispatch('creative/getDetail', {
      //     id: this.$route.params.edit
      //   })
      //   .then(() => {
      this.indexForm = this.dataForm.findIndex(
        (x) => x.title === this.titleImage
      )
      this.defaultImage = this.dataForm.find(
        (item) => item.title === this.titleImage
      )
      this.defaultImage2 = this.defaultImage.default.split(',')
      this.totalImage = this.defaultImage.maxCount
      this.$store.commit('creative/SET_DATA_IMAGEARRAY', this.defaultImage)
      this.$store.commit('creative/SET_DATA_IMAGEARRAY2', this.defaultImage)
      const data = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: this.dataImageArrayRaw2,
      }
      this.$emit('reloadback', data)
      this.isLoading = false
      // })
      // .catch(() => {
      //   this.isLoading = false
      // })
    },
    onDrop(dropResult) {
      this.defaultImage2 = applyDrag(this.defaultImage2, dropResult)
      const data = applyDrag(this.dataImageArrayRaw, dropResult)
      this.$store.commit('creative/SET_DRAG_IMAGEARRAY', data)
      const data2 = applyDrag(this.dataImageArrayRaw2, dropResult)
      this.$store.commit('creative/SET_DRAG_IMAGEARRAY2', data2)
      const dataIframe = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: data2,
      }
      this.$emit('reloadback', dataIframe)
    },
    removeList(index) {
      // if (this.dataImageArrayRaw[index].file !== null) {
      const data = {
        index,
        src: 'blank.png',
      }
      const dataarray2 = {
        index,
        src: 'https://unimind.kgnow.com/blank.png',
      }
      this.$store.commit('creative/SET_REMOVE_IMAGEARRAY', data)
      this.$store.commit('creative/SET_REMOVE_IMAGEARRAY2', dataarray2)
      // const sendData = []
      // for (let i = 0; i < this.dataImageArrayRaw.length; i++) {
      //   sendData.push(this.dataImageArrayRaw[i].img)
      // }
      const data2 = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: this.dataImageArrayRaw2,
      }
      this.$emit('reloadback', data2)
      // }
      // this.$store.commit('user/SET_DROPDOWN', null)
    },
    cropImage(index) {
      const indexForm = this.dataForm.findIndex(
        (x) => x.title === this.titleImage
      )
      let imageCrop = ''
      if (this.dataImageArrayRaw2[index].includes('fileKey')) {
        imageCrop = this.dataImageArrayRaw2[index]
      } else {
        imageCrop = this.dataImageArrayRaw2[index] + '?v1=' + Date.now()
      }
      const data = {
        indexRawImage: index,
        indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        img: imageCrop,
        dialog: true,
        height: this.dataForm[indexForm].height,
        width: this.dataForm[indexForm].width,
      }
      this.$emit('openEditor', data)
    },
    getGhostParent() {
      return document.body
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='file'] {
  display: none;
}
.custom-file-upload {
  display: none;
  cursor: pointer;
}

.selected-image {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 8px;
  .btn-drag {
    cursor: pointer;
    width: 20px;
    height: 40px;
    margin-right: 10px;
  }
  .image-drag {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    margin-right: 10px;
  }
  .item-menu {
    font-size: 14px;
    border-bottom: 1px solid #e2e2e2;
  }

  .btn-change {
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    height: 40px;
    width: 120px;
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
  }

  .btn-icon2 {
    height: 40px;
    padding: 10px;
    width: 40px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
  .btn-icon2:hover {
    background-color: rgb(243 244 246);
  }
}

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
