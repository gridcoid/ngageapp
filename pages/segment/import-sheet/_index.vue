<template>
  <div class="upload-container p-6 w-full">
    <div class="header-content mb-6">
      <Back />
    </div>
    <div v-if="step1" class="body-upload">
      <div class="card-upload">
        <div class="card-header">
          <i class="ti ti-table text-gray-400 mr-2" /> Spreadsheet Importer
        </div>
        <div class="card-body">
          <el-upload
            class="upload-demo"
            drag
            action=""
            accept=".xls,.xlsx"
            :on-change="handleChange"
            :auto-upload="false"
            :show-file-list="false"
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
                  <div class="upload-name">Supported format: .xls, .xlsx</div>
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
            v-if="sheetData"
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
                  {{ sheetData.name }}
                </div>
              </div>
              <div
                class="delete-btn flex items-center justify-center cursor-pointer"
                @click="sheetData = ''"
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
            @click.native="back()"
          />
          <k-button
            text="Continue"
            class="grow"
            style="width: 130px"
            :type="sheetData ? 'primary' : 'disabled'"
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
              <div class="title-uploads">Uploaded Spreadsheet</div>
            </div>
            <div class="body-uploads">
              <div class="list-card">
                <div class="card-list flex items-center justify-between">
                  <div class="flex items-center left-card">
                    <div class="name-list">
                      {{ sheetUploaded?.file?.originalname }}
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-center text-gray-400 italic text-sm"
                  >
                    {{ sheetUploaded?.rowNum - 1 }} rows
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-side">
            <div class="header-uploads flex items-center justify-between">
              <div class="title-uploads">Column Mapping</div>
            </div>
            <div class="body-uploads">
              <div class="list-card">
                <div
                  v-for="(item, i) in sheetUploaded?.columns"
                  :key="i"
                  class="card-list flex items-center justify-between"
                >
                  <div class="flex items-center left-card">
                    <div class="name-list">
                      <span
                        :class="{
                          'text-gray-400 line-through italic':
                            value[item].deleted,
                        }"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center cursor-pointer">
                    <el-select
                      v-model="value[item].target"
                      placeholder="Select"
                      :disabled="value[item].deleted"
                    >
                      <el-option
                        v-for="opt in selector"
                        :key="opt.value"
                        :label="opt.label"
                        :value="opt.value"
                      >
                      </el-option>
                    </el-select>

                    <el-checkbox v-model="value[item].deleted" class="ml-3">
                      Ignore
                    </el-checkbox>
                  </div>
                </div>
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
          class="flex items-center justify-center no-select save-btn"
          @click="save()"
        >
          <IconSave bg-color="#fff" />
          <span class="name-btn">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportSheetPage',
  layout: 'default',
  head() {
    return {
      title: 'Import Spreadsheet - Segment - ' + this.$config.appName,
    }
  },
  data() {
    return {
      step1: true,
      step2: false,
      uploadIndicator: false,
      sheetData: null,
      dataGroup: [],
      uploadPercentage: 0,
      isLoading: false,
      messageError: '',
      showMessage: false,
      sheetUploaded: {},

      selector: [],
      value: {},
    }
  },
  methods: {
    save() {
      this.$notifier.showMessage({
        content: 'Importing spreadsheet...',
        type: 'loading',
      })

      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('sheet/import', {
              segmentUuid: this.$route.params.index,
              file: this.sheetUploaded.file,
              mapping: this.value,
            })
            .then((res) => {
              if (res.status === 200) {
                this.step1 = true
                this.step2 = false

                this.$notifier.showMessage({
                  content: 'Spreadsheet imported.',
                  type: 'success',
                })

                clearInterval(sto)

                this.$router.push(
                  `/segment/${this.$route.params.index}/audience`
                )
              } else {
                this.showMessage = true

                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []

                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })

                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content:
                    'Spreadsheet import failed. Please try again! ' +
                    this.messageError,
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
    removeExtension(filename) {
      return filename.substring(0, filename.lastIndexOf('.')) || filename
    },
    continueTab() {
      this.step1 = false
      this.step2 = true
    },
    async uploadSheet() {
      this.uploadIndicator = true

      const data = new FormData()
      data.append('file', this.sheetData.raw)

      await this.$axios
        .post('sheet/upload', data, {
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
          this.sheetUploaded = res?.data.data

          this.selector = []
          this.selector = this.sheetUploaded.selector.map((s) => {
            return {
              value: s,
              label: s,
            }
          })

          res?.data.data.columns.forEach((c) => {
            this.$set(this.value, c, {
              target: '',
              deleted: false,
            })
          })

          Object.keys(res?.data.data.mapping).forEach((key) => {
            if (res?.data.data.mapping[key].confidence === 'auto') {
              this.$set(this.value, key, {
                target:
                  res?.data.data.mapping[key].target +
                  '.' +
                  res?.data.data.mapping[key].field,
                deleted: false,
              })
            } else {
              this.$set(this.value, key, {
                target: 'Audience.additionalInfo',
                deleted: false,
              })
            }
          })
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Upload failed. Please try again. ' + error,
            type: 'failed',
          })

          this.uploadIndicator = false
        })
    },
    back() {
      this.$router.push({
        path: '/segment',
      })
    },
    backStep1() {
      this.sheetData = null
      this.step1 = true
      this.step2 = false
    },
    handleChange(file) {
      const mime = file.raw.type
      const name = file.name.toLowerCase()

      const allowedMimes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ]

      const isExcel = allowedMimes.includes(mime) || /\.(xls|xlsx)$/i.test(name)

      if (!isExcel) {
        this.$notifier.showMessage({
          content: 'Spreadsheet file only (.xls, .xlsx)',
          type: 'failed',
        })
        return
      } else if (file.size / 1000 > 10000) {
        this.$notifier.showMessage({
          content: 'File size can not exceed 10Mb',
          type: 'failed',
        })
      } else {
        this.sheetData = file
        this.uploadIndicator = false
        this.uploadSheet()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-container {
  min-height: calc(100vh - 60px);
  .body-upload {
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
      min-height: 550px;
      .left-side,
      .right-side {
        position: relative;
        height: 100%;

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
      .left-side {
        border-right: 1px solid #c3ced9;
        border-radius: 10px 0px 0px 10px;
        background: #fafafa;
      }
      .right-side {
        border-radius: 0px 10px 10px 0px;
        background: #fff;
        .body-uploads {
          .list-card {
            .card-list {
              background-color: #fafafa;
            }
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
