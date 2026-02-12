<template>
  <div class="upload-container p-6 w-full">
    <div class="header-content mb-6">
      <Back />
    </div>

    <!-- ================= STEP 1 : CONFIG ================= -->
    <div v-if="step1" class="body-upload card-content">
      <div class="header-card flex items-center justify-between">
        <div class="title">
          <i class="ti ti-brackets-contain text-gray-400 mr-2" />
          Create JSON Import Source
        </div>
        <i class="ti ti-trash text-red-500 cursor-pointer" @click="clear()" />
      </div>

      <div class="body-card">
        <el-form
          ref="ruleForm"
          :model="data"
          :rules="rules"
          label-width="226px"
          label-position="left"
          hide-required-asterisk
        >
          <!-- API URL -->
          <el-form-item prop="url">
            <label slot="label">API URL</label>
            <el-input
              v-model="data.url"
              placeholder="https://api.example.com/users"
            />
          </el-form-item>

          <!-- Auth -->
          <el-form-item prop="authType">
            <label slot="label">Authorization</label>
            <el-select v-model="data.authType" class="w-full" clearable>
              <el-option label="None" value="none" />
              <el-option label="Bearer Token" value="bearer" />
              <el-option label="Query Param" value="query" />
            </el-select>
          </el-form-item>

          <el-form-item v-if="data.authType !== 'none'">
            <label slot="label">
              Token
              {{ data.authType === 'bearer' ? 'Header' : 'Param' }}
            </label>
            <el-input v-model="data.tokenHeader" />
          </el-form-item>

          <el-form-item v-if="data.authType !== 'none'">
            <label slot="label">Token Value</label>
            <el-input v-model="data.tokenValue" />
          </el-form-item>

          <!-- Pagination -->
          <el-form-item>
            <label slot="label">Pagination</label>
            <el-select v-model="data.paginationType" class="w-full">
              <el-option label="None" value="none" />
              <el-option label="Query Param" value="query" />
              <el-option label="Next Page Field" value="nextPage" />
            </el-select>
          </el-form-item>

          <template v-if="data.paginationType === 'query'">
            <el-form-item>
              <label slot="label">Page Param</label>
              <el-input v-model="data.pageParam" />
            </el-form-item>

            <el-form-item>
              <label slot="label">Page Size Param</label>
              <el-input v-model="data.pageSizeParam" />
            </el-form-item>

            <el-form-item>
              <label slot="label">Page Size</label>
              <el-input-number v-model="data.pageSize" :min="1" :max="500" />
            </el-form-item>
          </template>

          <el-form-item v-if="data.paginationType === 'nextPage'">
            <label slot="label">Next Page Field</label>
            <el-input v-model="data.nextPageField" />
          </el-form-item>

          <!-- Root -->
          <el-form-item>
            <label slot="label">Root Array Path</label>
            <el-input
              v-model="data.rootField"
              placeholder="data.items (optional)"
            />
          </el-form-item>
        </el-form>

        <Alert v-if="showMessage" class="mt-4" :text="messageError" />
      </div>

      <div class="footer-card flex justify-end gap-3">
        <el-button plain @click="$router.back()">Discard</el-button>
        <el-button type="primary" @click="submitConfig"> Continue </el-button>
      </div>
    </div>

    <!-- ================= STEP 2 : MAPPING ================= -->
    <div v-if="step2">
      <div class="uploaded-creative">
        <div class="grid grid-cols-2 card-uploads">
          <!-- LEFT -->
          <div class="left-side">
            <div class="header-uploads flex items-center justify-between">
              <div class="title-uploads">JSON Summary</div>
            </div>

            <div class="body-uploads">
              <div class="list-card">
                <div class="card-list2 space-y-2 py-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Source URL</span>
                    <span class="truncate max-w-[240px] text-gray-700">
                      {{ data.url }}
                    </span>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Authorization</span>
                    <span class="text-gray-700">
                      {{
                        data.authType === 'none'
                          ? 'None'
                          : data.authType === 'bearer'
                          ? 'Bearer Token'
                          : 'Query Param'
                      }}
                    </span>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Pagination</span>
                    <span class="text-gray-700">
                      {{
                        data.paginationType === 'none'
                          ? 'None'
                          : data.paginationType === 'query'
                          ? `Query (${data.pageParam} / ${data.pageSizeParam})`
                          : `Next Page (${data.nextPageField})`
                      }}
                    </span>
                  </div>

                  <div
                    v-if="data.rootField"
                    class="flex justify-between items-center"
                  >
                    <span class="text-gray-500">Root Path</span>
                    <span class="text-gray-700">
                      {{ data.rootField }}
                    </span>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Rows Fetched (First Page)</span>
                    <span class="text-gray-700">
                      {{ jsonPreview?.rowNum }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="right-side">
            <div class="header-uploads flex items-center justify-between">
              <div class="title-uploads">Column Mapping</div>
            </div>

            <div class="body-uploads">
              <div class="list-card">
                <div
                  v-for="(key, i) in jsonPreview?.keys"
                  :key="i"
                  class="card-list flex items-center justify-between"
                >
                  <div class="flex items-center left-card">
                    <div class="name-list">
                      <span
                        :class="{
                          'text-gray-400 line-through italic':
                            value[key].deleted,
                        }"
                      >
                        {{ key }}
                      </span>
                    </div>
                  </div>

                  <div class="flex items-center justify-center cursor-pointer">
                    <el-select
                      v-model="value[key].target"
                      placeholder="Select"
                      :disabled="value[key].deleted"
                      filterable
                      clearable
                    >
                      <el-option
                        v-for="opt in selector"
                        :key="opt.value"
                        :label="opt.label"
                        :value="opt.value"
                      />
                    </el-select>

                    <el-checkbox v-model="value[key].deleted" class="ml-3">
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
  name: 'JsonImporter',
  layout: 'default',

  data() {
    return {
      step1: true,
      step2: false,

      showMessage: false,
      messageError: '',

      jsonPreview: null,
      selector: [],
      value: {},

      rules: {
        url: [{ required: true, message: 'API URL required' }],
      },

      data: {
        url: '',
        authType: 'none',
        tokenHeader: 'Authorization',
        tokenValue: '',
        paginationType: 'none',
        pageParam: 'page',
        pageSizeParam: 'perPage',
        pageSize: 50,
        nextPageField: 'nextPage',
        rootField: '',
      },
    }
  },

  methods: {
    async submitConfig() {
      try {
        const res = await this.$store.dispatch('json/preview', {
          ...this.data,
          uuid: this.$route.params.uuid,
        })

        this.jsonPreview = res.data.data.data

        if (!this.jsonPreview) {
          this.showMessage = true
          this.messageError = 'Failed to fetch JSON preview'
          return
        }

        this.selector = this.jsonPreview.selector.map((s) => ({
          label: s,
          value: s,
        }))

        this.value = {}

        // init defaults
        this.jsonPreview.keys.forEach((k) => {
          this.$set(this.value, k, {
            target: '',
            deleted: false,
          })
        })

        // apply auto mapping (IMPORTANT PART)
        Object.keys(this.jsonPreview.mapping || {}).forEach((key) => {
          const m = this.jsonPreview.mapping[key]

          if (m.confidence === 'auto' && m.target && m.field) {
            this.$set(this.value, key, {
              target: `${m.target}.${m.field}`,
              deleted: false,
            })
          } else {
            this.$set(this.value, key, {
              target: 'Audience.additionalInfo',
              deleted: false,
            })
          }
        })

        this.step1 = false
        this.step2 = true
      } catch (e) {
        this.showMessage = true
        this.messageError = e.message
      }
    },

    async save() {
      let nameIsExist = false
      let emailIsExist = false

      Object.keys(this.value).forEach((key) => {
        if (this.value[key].target === 'AudienceContact.name')
          nameIsExist = true

        if (this.value[key].target === 'AudienceContact.email')
          emailIsExist = true
      })

      if (!nameIsExist || !emailIsExist) {
        this.$notifier.showMessage({
          content: 'Name and Email columns are required',
          type: 'failed',
        })

        return
      }

      await this.$store.dispatch('json/import', {
        uuid: this.$route.params.uuid,
        config: this.data,
        mapping: this.value,
      })

      this.$notifier.showMessage({
        content: 'JSON imported successfully',
        type: 'success',
      })

      this.$router.push(`/direct/segment/${this.$route.params.uuid}/audience`)
    },

    backStep1() {
      this.step1 = true
      this.step2 = false
    },

    clear() {
      localStorage.removeItem('jsonImportConfig')
    },
  },

  watch: {
    'data.authType': {
      handler(val) {
        if (val === 'bearer') {
          if (this.data.tokenValue === '') {
            this.data.tokenHeader = 'Authorization'
            this.data.tokenValue = 'Bearer '
          }
        } else {
          this.data.tokenHeader = ''
          this.data.tokenValue = ''
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-container {
  .header-content {
    margin-bottom: 20px;
  }
  .card-content {
    width: 720px;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 15px 0px 0px 0px;
    .header-card {
      padding-left: 20px;
      padding-right: 20px;
      .title {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 20px;
        color: #333333;
        margin-right: 10px;
      }
    }
    .body-card {
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      .title-form {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .to-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .footer-card {
      border-top: 1px solid #e2e2e2;
      padding: 20px;
    }
  }
}

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
            .card-list,
            .card-list2 {
              width: 100%;
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
            .card-list {
              height: 60px;
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
