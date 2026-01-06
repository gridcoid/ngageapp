<template>
  <div class="upload-container p-6 w-full">
    <div class="header-upload">
      <Back />
    </div>

    <div v-if="step1" class="body-upload">
      <div class="card-upload">
        <div class="card-header">Bulk Upload Creatives</div>
        <div class="card-body">
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
              <div class="flex items-center justify-center">
                <img
                  src="~/assets/images/creative/upload.svg"
                  class="mr-2 icon-upload"
                />
                <div class="flex flex-col">
                  <div class="empty-space">
                    Drop File Here or use button below
                  </div>
                  <div class="upload-name">
                    Supported format: .gif, .jpg/.jpeg, .png, .js, <br />
                    .txt, .html, .html, .zip. Maximum of 50 files
                  </div>
                </div>
              </div>
              <button
                class="flex items-center justify-center btn-upload no-select"
              >
                <IconUpload />
                <span class="name-btn">Choose File</span>
              </button>
            </div>
          </el-upload>
          <div
            v-if="imageData"
            class="grid grid-cols-2 gap-4"
            style="margin-top: 10px"
          >
            <div class="card-file-upload flex items-center justify-between">
              <div class="checklist-icon flex">
                <img
                  v-if="uploadPercentage == 100"
                  src="~/assets/images/checklist.svg"
                  style="margin-right: 13px"
                />
                <div class="name-list">
                  {{ imageData.name }}
                </div>
              </div>
              <div
                class="delete-btn flex items-center justify-center cursor-pointer"
                @click="imageData = ''"
              >
                <IconDelete />
              </div>
              <el-progress
                v-if="uploadPercentage < 100"
                :percentage="uploadPercentage"
                :stroke-width="4"
                :show-text="false"
                style="position: absolute; bottom: 0px; width: 100%; left: 0px"
              />
            </div>
          </div>
        </div>
        <div class="footer-body flex justify-end">
          <k-button
            text="Discard"
            class="grow"
            type="secondary"
            style="width: 130px; margin-right: 10px"
            @click.native="$router.back()"
          />
          <k-button
            text="Continue"
            class="grow"
            style="width: 130px"
            :type="imageData ? 'primary' : 'disabled'"
            @click.native="continueTab()"
          />
        </div>
      </div>
    </div>
    <div v-if="step2">
      <div class="uploaded-creative">
        <div class="grid grid-cols-2 card-uploads">
          <div class="left-side">
            <div class="header-uploads flex items-center justify-between">
              <div class="title-uploads">Uploaded Creatives</div>
            </div>
            <div class="body-uploads">
              <div class="flex items-center justify-between">
                <div class="tick-title">
                  Tick a creative to edit it’s properties
                </div>
              </div>
              <div class="list-card">
                <div class="card-list flex items-center justify-between">
                  <div class="flex items-center left-card">
                    <div class="name-list">
                      {{ imageData.name }}
                    </div>
                  </div>
                  <div
                    class="delete-btn flex items-center justify-center cursor-pointer"
                    @click="backStep1()"
                  >
                    <IconDelete />
                  </div>
                </div>
              </div>
            </div>
            <div class="circle-next flex no-select items-center justify-center">
              <IconArrowRight />
            </div>
          </div>
          <div class="right-side">
            <div class="header-uploads flex items-center justify-between">
              <div class="title-uploads">Creatives Properties</div>
            </div>
            <div class="form-panel flex flex-col justify-center">
              <div class="flex flex-col box-form">
                <div class="title-form">Creative Name</div>
                <el-input v-model="data.name" style="width: 100%" />
              </div>
              <div class="flex flex-col box-form mt-4">
                <div class="title-form">
                  Creative Dimension<span style="color: red">*</span>
                </div>
                <el-select v-model="data.dimension" style="width: 100%">
                  <el-option
                    v-for="item in dataResolution"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div class="flex flex-col box-form mt-4">
                <div class="title-form">URL</div>
                <el-input v-model="data.url" style="width: 100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="action-btn flex items-center justify-end">
        <k-button
          text="Discard"
          class="ml-4"
          style="width: 165px"
          type="secondary"
          @click.native="backStep1()"
        />
        <button
          style="margin-right: 20px"
          class="flex items-center justify-center no-select"
          :class="disabledSave ? 'save-btn' : 'disabled-btn'"
          @click="save()"
        >
          <IconSave :bg-color="disabledSave ? 'white' : '#9a9a9a'" />
          <span class="name-btn">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UploadCreative',
  layout: 'default',
  head() {
    return {
      title: 'Upload - Creative - ' + this.$config.appName,
    }
  },
  data() {
    return {
      imageLoaded: false,
      imageData: '',
      imageUrl: '',
      step1: true,
      step2: false,
      checkAll: false,
      data: {
        name: '',
        dimension: '',
        url: 'https://',
        previewUrl: '',
        backupImg: '',
      },
      uploadPercentage: 0,
      isLoading: false,
      messageError: '',
      showMessage: false,
    }
  },
  computed: {
    ...mapState({
      orgId: (state) => {
        return state.user.orgId
      },
      // dataResolution: (state) => {
      //   return state.creative.dataResolution
      // }
    }),
    disabledSave() {
      if (
        this.data.name === '' ||
        this.data.dimension === '' ||
        this.data.url === ''
      ) {
        return false
      } else {
        return true
      }
    },
  },
  mounted() {
    this.getResolution()
  },
  methods: {
    save() {
      this.$notifier.showMessage({
        content: 'Creating creative...',
        type: 'loading',
      })
      const data = {
        name: this.data.name,
        resolutionId: this.data.dimension,
        clickUrl: this.data.url,
        previewUrl: this.data.previewUrl,
        backupImg: this.data.backupImg,
      }
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('creative/createCreativeCustom', data)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push({ path: '/placement/creative' })
                this.$notifier.showMessage({
                  content: 'Creative created.',
                  type: 'success',
                })
                clearInterval(sto)
              } else {
                this.showMessage = true
                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content: 'Creative failed! ' + this.messageError,
                  type: 'failed',
                })
                clearInterval(sto)
              }
            })
            .catch(() => {
              this.isLoading = false
              clearInterval(sto)
            }),
        1000
      )
    },
    async getResolution() {
      this.isLoading = true
      await this.$axios
        .get('creative/resolutions?orgId=' + this.orgId + '&all=true')
        .then((res) => {
          this.dataResolution = res?.data.data
        })
        .finally(() => {
          this.isLoading = false
        })

      // this.$store
      //   .dispatch('creative/getResolution')
      // .finally(() => {
      //   this.isLoading = false
      // })
    },
    removeExtension(filename) {
      return filename.substring(0, filename.lastIndexOf('.')) || filename
    },
    continueTab() {
      this.step1 = false
      this.step2 = true
    },
    async uploadZIP() {
      this.imageLoaded = true
      const data = new FormData()
      data.append('file', this.imageData.raw)
      await this.$axios
        .post('zip', data, {
          headers: {
            'Content-Type': 'application/json',
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            )
          }.bind(this),
        })
        .then((res) => {
          this.data.previewUrl = res?.data.previewUrl
          this.data.backupImg = res?.data.backupImg
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Upload failed. Please try again ! ' + error,
            type: 'failed',
          })
          this.imageLoaded = false
        })
    },
    backStep1() {
      this.imageData = ''
      this.step1 = true
      this.step2 = false
    },
    beforeAvatarUpload(file) {},
    handleChange(file) {
      const formatData = file.raw.type
      const origins = [
        'image/gif',
        'image/jpg',
        'image/jpeg',
        'image/png',
        'application/x-zip',
        'application/x-zip-compressed',
        'application/zip',
        'application/zip-compressed',
        'application/octet-stream',
        'multipart/x-zip',
      ]
      if (!origins.includes(formatData)) {
        this.$notifier.showMessage({
          content:
            '.gif, .jpg/.jpeg, .png, .js, .txt, .html, .html, .zip. Maximum of 50 files',
          type: 'failed',
        })
      } else if (file.size / 1000 > 1000) {
        this.$notifier.showMessage({
          content: 'File size can not exceed 1000 KB!',
          type: 'failed',
        })
      } else {
        this.imageData = file
        this.imageLoaded = false
        this.imageUrl = URL.createObjectURL(file.raw)
        this.data.name = this.removeExtension(this.imageData.name)
        this.uploadZIP()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.upload-container {
  min-height: 100vh;
  .body-upload {
    margin-top: 20px;
    .card-upload {
      height: 100%;
      background: #ffffff;
      border: 1px solid #c3ced9;
      border-radius: 10px;
      .card-header {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #2b3947;
        padding: 10px 20px 10px 20px;
        border-bottom: 1px solid #c3ced9;
      }
      .card-body {
        background: #fafafa;
        border-bottom: 1px solid #c3ced9;
        padding: 20px;
        .card-file-upload {
          height: 60px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 8px;
          width: 100%;
          padding-left: 12px;
          padding-right: 12px;
          position: relative;
          .checklist-icon {
            .name-list {
              font-family: 'Cabin';
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              color: #5c6b7a;
            }
          }
          .delete-btn {
            width: 40px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #c3ced9;
            border-radius: 5px;
          }
          .delete-btn:hover {
            background-color: rgb(243 244 246);
          }
        }
        .upload-demo {
          width: 100%;
          .el-upload {
            width: 100%;
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
      }
      .footer-body {
        padding: 15px 20px 15px 20px;
      }
    }
  }
  .uploaded-creative {
    margin-top: 20px;
    background: #ffffff;
    border: 1px solid #c3ced9;
    border-radius: 10px;
    .card-uploads {
      height: 400px;
      .left-side {
        position: relative;
        height: 100%;
        background: #fafafa;
        border-radius: 10px 0px 0px 10px;
        border-right: 1px solid #c3ced9;
        .circle-next {
          cursor: pointer;
          position: absolute;
          top: 200px;
          right: -18px;
          width: 36px;
          height: 36px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 1000px;
        }
        .header-uploads {
          height: 54px;
          border-bottom: 1px solid #c3ced9;
          .title-uploads {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: #2b3947;
            padding-left: 20px;
          }
        }
        .body-uploads {
          padding: 20px;
          .tick-title {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #5c6b7a;
          }
          .select-tick {
            .select-all {
              margin-left: 13px;
              font-family: 'Cabin';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              color: #5c6b7a;
            }
          }
          .list-card {
            margin-top: 10px;
            .card-list {
              width: 100%;
              height: 60px;
              background: #ffffff;
              border: 1px solid #c3ced9;
              border-radius: 8px;
              margin-bottom: 10px;
              padding-left: 12px;
              padding-right: 12px;
              .left-card {
                .name-list {
                  font-family: 'Cabin';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  color: #5c6b7a;
                }
              }
              .delete-btn {
                width: 40px;
                height: 40px;
                background: #ffffff;
                border: 1px solid #c3ced9;
                border-radius: 5px;
              }
              .delete-btn:hover {
                background-color: rgb(243 244 246);
              }
            }
          }
        }
      }
      .right-side {
        border-radius: 0px 10px 10px 0px;
        background: white;

        .header-uploads {
          height: 54px;
          border-bottom: 1px solid #c3ced9;
          background: white;
          .title-uploads {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: #2b3947;
            padding-left: 20px;
          }
        }
        .form-panel {
          height: 346px;
          padding-left: 40px;
          padding-right: 40px;
          .title-form {
            margin-bottom: 5px;
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #5c6b7a;
          }
        }
      }
    }
  }
  .action-btn {
    margin-top: 20px;
    width: 100%;
    height: 70px;

    /* Latar/#FFFFFF */

    background: #ffffff;
    /* Teks/#C3CED9 */

    border: 1px solid #c3ced9;
    border-radius: 10px;
    .save-btn {
      width: 165px;
      background: #1b63d4;
      border: 1px solid #1b63d4;
      color: #ffffff;
      border-radius: 5px;
      height: 34px;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-top: 1.4px;
        color: #ffffff;
        padding-left: 10px;
      }
    }
    .save-btn:hover {
      background-color: #053f67;
      border: 0px;
    }
    .disabled-btn {
      background: #f1f1f1;
      cursor: not-allowed;
      width: 165px;
      color: #ffffff;
      border-radius: 5px;
      height: 34px;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        color: #9a9a9a;
        padding-left: 10px;
        padding-top: 1.4px;
      }
    }
  }
}

/* The container */
.checkbox-kg {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-kg input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-kg:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox-kg input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-kg input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-kg .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
