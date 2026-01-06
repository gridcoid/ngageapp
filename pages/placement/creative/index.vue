<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">All Creations</div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Create New"
          class="ml-4"
          @click.native="toCreate()"
        />
        <ButtonDefault
          v-show="handleRole"
          icon="upload"
          text="Upload"
          class="ml-4"
          @click.native="toUpload()"
        />
      </div>
    </div>

    <div class="desc-page">
      All creative you’ve created and uploaded has been stored here.
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="status-filter flex items-center">
        <div
          class="flex items-center justify-center card-filter pl-2 pr-2"
          @click="statusActive('all')"
        >
          <IconList
            :bg-color="activeStatus === 'all' ? '#1B63D4' : '#454545'"
          />
          <div
            class="name-status"
            :style="
              activeStatus === 'all' ? 'font-weight: 500;color: #0056DE;' : ''
            "
          >
            All
          </div>
        </div>
        <div class="hr-vertical" />
        <div
          class="flex items-center justify-center card-filter pl-2 pr-2"
          @click="statusActive('display')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'display'
                ? 'font-weight: 500;color: #0056DE;'
                : ''
            "
          >
            Display
          </div>
        </div>
        <div
          class="flex items-center justify-center card-filter pl-2 pr-2"
          @click="statusActive('video')"
        >
          <div
            class="name-status"
            :style="
              activeStatus === 'video' ? 'font-weight: 500;color: #0056DE;' : ''
            "
          >
            Video
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="search-card">
          <transition name="slide">
            <div
              v-if="!showSearch"
              class="hide-search flex items-center justify-center cursor-pointer"
              @mouseover="search = true"
              @click="showSearch = !showSearch"
            >
              <IconSearch />
            </div>
            <div
              v-else
              class="show-search flex items-center justify-between cursor-pointer"
            >
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchData()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find something.."
                  @change="searchData()"
                />
              </form>
              <IconSearch @click.native="searchData()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="body-content">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataCreative"
        class="k-table"
      >
        <template slot="empty">
          <div class="flex flex-col items-center mt-6 no-data">
            <img src="~/assets/images/empty_table.png" width="150" />
            <div class="title-1">No records found.</div>
            <div class="subtitle-1">
              Seems like you haven’t created any campaign yet. Create one now?
            </div>
            <button
              class="flex items-center justify-center save-btn no-select"
              @click="toCreate()"
            >
              <IconSave bg-color="#1B63D4" />
              <div class="name-btn">Create New Creative</div>
            </button>
          </div>
        </template>

        <!-- padding -->
        <el-table-column label="" width="10" />

        <el-table-column label="Name" prop="name" sortable>
          <template slot-scope="scope">
            <div
              class="flex items-center cursor-pointer"
              :style="
                scope.row.template.format === 'custom_upload'
                  ? 'cursor: auto;'
                  : ''
              "
              @click="
                scope.row.template.format !== 'custom_upload'
                  ? editCreative(scope.row.id)
                  : ''
              "
            >
              <div class="flex flex-col">
                <el-tooltip :open-delay="1000" placement="top-end">
                  <div slot="content">
                    {{ scope.row.name }}
                  </div>

                  <div
                    class="k-title"
                    style="
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 240px;
                    "
                  >
                    {{ scope.row.name }}
                  </div>
                </el-tooltip>
                <div class="k-subtitle">
                  {{ scope.row.template.name }}
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="Size"
          align="center"
          prop="width"
          sortable
          width="180"
        >
          <template slot-scope="scope">
            <div class="title-tabel">
              {{ scope.row.resolution.width }} x
              {{ scope.row.resolution.height }} px
            </div>
          </template>
        </el-table-column>

        <!-- <el-table-column label="Campaign Name" align="center">
          <template slot-scope="scope">
            <div class="title-tabel">
              {{ scope.row.campaigns.name }}
            </div>
          </template>
        </el-table-column> -->

        <el-table-column
          label="Modified"
          align="center"
          prop="updatedAt"
          sortable
          width="180"
        >
          <template slot-scope="scope">
            <div class="title-tabel">
              {{ $moment(scope.row.updatedAt).format('MMM Do, YYYY hh:mm') }}
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="Status"
          align="center"
          prop="status"
          sortable
          width="140"
        >
          <template slot-scope="scope">
            <!-- S: Draft -->
            <div
              v-if="
                scope.row.status === 'draft' &&
                (scope.row.template.format === 'rmb' ||
                  scope.row.template.format === 'custom_upload') &&
                scope.row.staticZipUrl === null
              "
              class="status-card flex items-center justify-center no-select"
              style="background-color: #fff3dd; color: #fbab18"
            >
              Draft
            </div>

            <div
              v-if="
                scope.row.status === 'draft' &&
                scope.row.template.format === 'video' &&
                scope.row.videoId === null &&
                scope.row.videoUrl === null
              "
              class="status-card flex items-center justify-center no-select"
              style="background-color: #fff3dd; color: #fbab18"
            >
              Draft
            </div>
            <!-- E: Draft -->

            <!-- S: Inprogress -->

            <div
              v-if="
                scope.row.status === 'draft' &&
                scope.row.template.format === 'video' &&
                scope.row.videoId !== null &&
                scope.row.videoUrl === null
              "
              class="status-card flex items-center justify-center no-select"
              style="background-color: #ebf6fe; color: #0f79c6"
            >
              Converting
            </div>
            <!-- E: Inprogress -->

            <!-- S: Converted -->
            <div
              v-if="
                scope.row.status === 'draft' &&
                (scope.row.template.format === 'rmb' ||
                  scope.row.template.format === 'custom_upload') &&
                scope.row.staticZipUrl !== null
              "
              class="status-card flex items-center justify-center no-select"
              style="background-color: #f4fefa; color: #12b76a"
            >
              Converted
            </div>

            <div
              v-if="
                scope.row.status === 'draft' &&
                scope.row.template.format === 'video' &&
                scope.row.videoId !== null &&
                scope.row.videoUrl !== null
              "
              class="status-card flex items-center justify-center no-select cursor-pointer"
              style="background-color: #f4fefa; color: #12b76a"
              @click="downloadCreative(scope.row.id, scope.row.name, scope.row)"
            >
              Converted
            </div>

            <!-- E: Converted -->

            <div
              v-if="scope.row.status === 'assigned'"
              class="status-card flex items-center justify-center no-select"
              style="background-color: #ecf5e5; color: #7bbc49"
            >
              Assigned
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="StudioHub"
          align="center"
          prop="studioHub"
          sortable
          width="140"
        >
          <template slot-scope="scope">
            <div
              v-if="
                scope.row.status === 'draft' &&
                scope.row.template.format === 'video' &&
                scope.row.videoId !== null &&
                scope.row.videoUrl !== null &&
                scope.row.studioHub !== null
              "
              class="status-card flex items-center justify-center no-select cursor-pointer"
              style="background-color: #f4fefa; color: #12b76a"
            >
              Available
            </div>
            <div
              v-if="
                scope.row.status === 'draft' && scope.row.studioHub === null
              "
              class="status-card flex items-center justify-center no-select cursor-pointer"
              style="background-color: #ffe6e6; color: #ff5c5c"
            >
              Unavailable
            </div>
          </template>
        </el-table-column>

        <el-table-column label="" width="200">
          <template slot-scope="scope">
            <Dropdown
              :index-list="scope.$index"
              name-btn="View"
              icons="preview"
              color-text="#1B63D4"
              class="mr-6"
              @preview="detailCreative(scope.row.id)"
            >
              <template slot="body">
                <!-- Edit -->
                <div
                  v-if="scope.row.template.format === 'custom_upload'"
                  class="item-menu flex items-center no-select"
                >
                  <i class="ti ti-edit" />
                  <span class="ml-3">Edit</span>
                </div>
                <div
                  v-else
                  class="item-menu flex items-center no-select"
                  @click="editCreative(scope.row.id)"
                >
                  <i class="ti ti-edit" />
                  <span class="ml-3">Edit</span>
                </div>

                <!-- Duplicate -->
                <div
                  class="item-menu flex items-center no-select"
                  @click="duplicateCreative(scope.row.id)"
                >
                  <i class="ti ti-copy" />
                  <span class="ml-3">Duplicate</span>
                </div>

                <!-- Generate -->
                <div
                  v-if="
                    (scope.row.template.format === 'video' &&
                      scope.row.videoId === null &&
                      scope.row.videoUrl === null) ||
                    ((scope.row.template.format === 'rmb' ||
                      scope.row.template.format === 'custom_upload') &&
                      scope.row.staticZipUrl === null)
                  "
                  class="item-menu flex items-center no-select"
                  @click="generateCreative(scope.row)"
                >
                  <i class="ti ti-download" />
                  <span class="ml-3">Generate</span>
                </div>

                <!-- In Progress -->
                <div
                  v-if="
                    scope.row.template.format === 'video' &&
                    scope.row.videoId !== null &&
                    scope.row.videoUrl === null
                  "
                  class="item-menu flex items-center no-select"
                >
                  <i class="ti ti-loader text-base animate-spin" />
                  <span class="ml-3">In Progress</span>
                </div>

                <!-- Download -->
                <div
                  v-if="
                    (scope.row.template.format === 'video' &&
                      scope.row.videoId !== null &&
                      scope.row.videoUrl !== null) ||
                    ((scope.row.template.format === 'rmb' ||
                      scope.row.template.format === 'custom_upload') &&
                      scope.row.staticZipUrl !== null)
                  "
                  class="item-menu flex items-center no-select"
                  @click="
                    downloadCreative(scope.row.id, scope.row.name, scope.row)
                  "
                >
                  <i class="ti ti-download" />
                  <span class="ml-3">Download</span>
                </div>

                <!-- Send to Studio Hub -->
                <div
                  v-if="
                    scope.row.template.format === 'video' &&
                    scope.row.videoId !== null &&
                    scope.row.videoUrl !== null &&
                    scope.row.studioHub === null
                  "
                  class="item-menu flex items-center no-select"
                  @click="sendToStudioHub(scope.row.id, scope.row.name)"
                >
                  <i class="ti ti-send" />
                  <span class="ml-3">Send to SH</span>
                </div>

                <!-- Delete -->
                <div
                  class="item-menu flex items-center no-select text-red-500 border-t border-gray-300 rounded-b-md"
                  @click="deleteCreative(scope.row)"
                >
                  <i class="ti ti-trash" />
                  <span class="ml-3">Delete</span>
                </div>
              </template>
            </Dropdown>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalCreative"
        @input="
          (page) => {
            $store.commit('user/SET_DROPDOWN', null)
            changePage(page)
          }
        "
        @rowPage="
          (size) => {
            $store.commit('user/SET_DROPDOWN', null)
            changeRowPage(size)
          }
        "
      />
    </div>

    <CreativeSendSh v-show="sendStudioHub" :datash="dataSH" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Creative - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      url: '',
      isLoading: false,
      currentPage: 1,
      per_page: 10,
      dataSearch: '',
      showSearch: false,
      activeStatus: 'all',
      lastPage: false,
      showBtn: true,
      closeDropdown: false,
      defaultForm: [
        {
          type: 'Button',
          title: 'CTA',
          default: {
            text: '<p style="text-align: center"><strong><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; opacity: 100%;color:#ffffff">BOOK NOW</span></strong></p>',
            bg_color: 'background-color: #e68e00; opacity:100%',
          },
          description: 'Enter your CTA here',
        },
        {
          type: 'Image',
          title: 'Logo',
          default:
            this.$config.baseURL +
            'obs?fileKey=defaults/creative_templates/single2col/logo.png',
          description: 'Upload your logo here',
        },
        {
          type: 'Text',
          title: 'Subline',
          default:
            '<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 10px;opacity: 100%;color: #FFFFFF;">Start from</span></p><p><strong><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;opacity: 100%;color: #FFFFFF;">IDR 350.000 nett/night</span></strong></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 10px;opacity: 100%;color: #FFFFFF;">Free Breakfast<br>Free WiFi</span></p>',
          description: 'Enter your subline here',
        },
        {
          type: 'Color',
          title: 'Background Color',
          default: 'background-color: #2e2821; opacity:100%',
          description: 'Your background color',
        },
        {
          type: 'Image',
          title: 'Background Image',
          default: null,
          description: 'Your background image',
        },
        {
          type: 'Text',
          title: 'Headline',
          default:
            '<p><strong><span style="font-family: Arial, Helvetica, sans-serif; font-size: 21px; color: #FFFFFF; opacity: 100%">Staycation at Banten</span></strong></p>',
          description: 'Enter your headline here',
        },
        {
          type: 'Image',
          title: 'Right Image',
          default:
            this.$config.baseURL +
            'obs?fileKey=defaults/creative_templates/single2col/rightimg.jpg',
          description: 'Upload your right image here',
        },
      ],
      rowPage: 10,
      handleRole: true,
      loadGenerate: false,
      dataSH: null,
    }
  },
  head() {
    return {
      title: 'n-gage - Creative',
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      dataCreative: (state) => {
        return state.creative.dataCreative
      },
      totalCreative: (state) => {
        return state.creative.totalCreative
      },
      totalPages: (state) => {
        return state.creative.totalPages
      },
      roleId: (state) => {
        return state.user.roleId
      },
      sendStudioHub: (state) => {
        return state.creative.sendStudioHub
      },
    }),
  },
  mounted() {
    this.$store.dispatch('reset')
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getAll()
    this.checkRole()
  },
  methods: {
    generateCreative(data) {
      this.$notifier.showMessage({
        content: 'Generate creative...',
        type: 'loading',
      })
      const format = data.template.format
      const data2 = {
        id: data.id,
      }
      if (format === 'video') {
        const sto = setTimeout(
          () =>
            this.$store
              .dispatch('creative/generateCreativeVideo', data2)
              .then((res) => {
                if (res.status === 200) {
                  this.getAll()
                  this.$notifier.showMessage({
                    content:
                      'Generate creative success, please wait until finish.',
                    type: 'success',
                  })
                  this.triggerCreative(data.id)
                  clearInterval(sto)
                } else {
                  this.showMessage = true
                  const keys = Object.keys(res?.data.data.errors[0])
                  const arr = []
                  keys.forEach((key, index) => {
                    arr.push(res?.data.data.errors[0][key])
                  })
                  this.$notifier.showMessage({
                    content: 'Generate creative failed ! ' + arr.join(', '),
                    type: 'failed',
                  })
                  clearInterval(sto)
                }
              })
              .catch(() => {
                clearInterval(sto)
              }),
          1000
        )
      } else {
        const sto = setTimeout(
          () =>
            this.$store
              .dispatch('creative/generateCreativeVideoStatic', data2)
              .then((res) => {
                if (res.status === 200) {
                  this.getAll()
                  this.$notifier.showMessage({
                    content: 'Generate creative in progress',
                    type: 'success',
                  })
                  clearInterval(sto)
                } else {
                  const keys = Object.keys(res?.data.data.errors[0])
                  const arr = []
                  keys.forEach((key, index) => {
                    arr.push(res?.data.data.errors[0][key])
                  })
                  this.$notifier.showMessage({
                    content: 'Generate creative failed ! ' + arr.join(', '),
                    type: 'failed',
                  })
                  clearInterval(sto)
                }
              })
              .catch(() => {
                clearInterval(sto)
              }),
          1000
        )
      }
    },
    checkRole() {
      if (this.roleId === 4) {
        this.handleRole = false
      } else {
        this.handleRole = true
      }
    },
    changePage(ev) {
      if (ev > 0) {
        this.currentPage = ev
        this.getData()
      }
    },
    changeRowPage(ev) {
      this.rowPage = ev
      this.getData()
    },
    getAll() {
      this.getData()
    },
    getData() {
      this.isLoading = true
      const data = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        format: this.activeStatus,
        resolutionId: '',
      }
      this.$store.dispatch('creative/getCreative', data).finally(() => {
        this.isLoading = false
      })
    },

    forceFileDownload(response, title) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      this.$store.commit('user/SET_DROPDOWN', null)
      link.click()
    },

    downloadCreative(idCreative, name, row) {
      this.closeDropdown = false
      const format = row.template.format
      if (format !== 'video') {
        window.open(row.staticZipUrl, '_blank')
        // const data = {
        //   id: idCreative
        // }
        // this.$store
        //   .dispatch('creative/downloadCreative', data)
        //   .then((res) => {
        //     if (res.status === 200) {
        //       const url = window.URL.createObjectURL(new Blob([res?.data]))
        //       const link = document.createElement('a')
        //       link.href = url
        //       link.setAttribute('download', name + '.html')
        //       document.body.appendChild(link)
        //       link.click()
        //       this.$store.commit('user/SET_DROPDOWN', null)
        //     }
        //   })
        //   .catch(() => {})
      } else {
        // window.open(row.videoUrl, '_blank')
        this.$axios
          .get(row.rawVideoUrl, {
            responseType: 'blob',
          })
          .then((res) => {
            if (res.status === 200) {
              this.forceFileDownload(res, name.replace(/ /g, '_') + '.mp4')
            }
          })
          .catch(() => {})
      }
    },

    duplicateCreative(idCreative) {
      this.$store
        .dispatch('creative/duplicateCreative', {
          id: idCreative,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$store.commit('user/SET_DROPDOWN', null)
            this.getAll()
          }
        })
        .catch(() => {})
    },
    deleteCreative(data) {
      this.$confirm(`Delete "${data.name}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Delete creative...',
            type: 'loading',
          })

          this.$store
            .dispatch('creative/deleteCreative', {
              id: data.id,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getAll()

                this.$notifier.showMessage({
                  content: 'Delete creative status success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Delete creative status failed. Error : ' +
                    res?.data.data.message,
                  type: 'failed',
                })
              }

              this.$store.commit('user/SET_DROPDOWN', null)
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
    },
    statusActive(x) {
      this.activeStatus = x
      this.currentPage = 1
      this.getData()
    },
    searchData() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },
    detailCreative(x) {
      // this.$router.push({
      //   path: `/placement/creative/detail/${x}`
      // })
      const route = this.$router.resolve({
        path: `/placement/creative/detail/${x}?preview`,
      })
      window.open(route.href)
    },
    editCreative(x) {
      this.$router.push({
        path: `/placement/creative/edit/${x}`,
      })
    },
    toCreate() {
      this.$router.push({ path: '/placement/creative/templates' })
    },
    toUpload() {
      this.$router.push({ path: '/placement/creative/upload' })
    },
    getCreativeById(data) {
      this.$store
        .dispatch('creative/getCreativeById', { creativeId: data })
        .then((res) => {
          if (res.status === 200) {
            if (res?.data.data.videoUrl !== null) {
              this.getData()
              if (this.intervalId) {
                clearInterval(this.intervalId)
                this.intervalId = null
              }
              this.loadGenerate = true
            }
          }
        })
        .catch(() => {})
    },
    triggerCreative(id) {
      if (this.loadGenerate === true) {
        clearInterval(this.intervalId)
        this.intervalId = null
      } else {
        this.intervalId = setInterval(() => {
          this.getCreativeById(id)
        }, 60000)
      }
    },
    sendToStudioHub(idCreative, name) {
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('creative/SET_SEND_SH_CHANGE_DIALOG', true)
      this.dataSH = { id: idCreative, title: name }
    },
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button-group > .el-button:last-child {
  bottom: 2px !important;
}
.el-table thead {
  color: #5c6b7a !important;
  font-family: 'Cabin' !important;
  font-weight: 600 !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
.kg-containers {
  .header-content {
    .title-header {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
    }
    .btn-create {
      font-family: 'Cabin';
      width: 94px;
      font-size: 12px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
  }
  .desc-page {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 16px;
    color: #757575;
    margin-top: 20px;
  }
  .filter-content {
    margin-top: 20px;
    .status-filter {
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      padding-left: 10px;
      padding-right: 10px;
      .card-filter {
        width: 100%;
        // margin-right: 10px;
        // margin-left: 10px;
        cursor: pointer;
        .name-status {
          font-family: 'Cabin';
          color: #454545;
          font-weight: 400;
          font-size: 16px;
          margin-left: 10px;
          line-height: 40px;
        }
      }
      .hr-vertical {
        height: 24px;
        border-right: 0px solid #e2e2e2;
      }
    }
    .date-filter {
      margin-left: 30px;
    }
    .layout-filter {
      //   margin-left: 20px;
      .name-filter {
        font-family: 'Cabin';
        color: #454545;
        font-weight: 400;
        font-size: 16px;
      }
      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 100%;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
      }
      .btn-icon:hover {
        background-color: rgb(243 244 246);
      }
    }
    .hr-vertical {
      border-left: 1px solid #e2e2e2;
      height: 24px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-left: 10px;
    }
    .k-btn {
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      height: 36px;
      width: 138px;
    }
    .k-btn:hover {
      background-color: rgb(243 244 246);
    }
    .search-card {
      .hide-search {
        width: 54px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
      }
      .show-search {
        width: 240px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        padding-left: 15px;
        padding-right: 15px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
        .title-1 {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 180px;
        }
        .title-1:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  .body-content {
    margin-top: 20px;
    .k-table {
      border: 1px solid #c3ced9 !important;
      border-radius: 10px !important;
      .k-circle {
        width: 11px;
        height: 11px;
        border: 2px solid #7bbc49;
        border-radius: 50%;
        margin-right: 13px;
      }
      .k-title {
        font-family: 'Cabin';
        font-weight: 500;
        font-size: 16px;
        color: #454545;
      }
      .k-subtitle {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #757575;
      }
      .title-tabel {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }

      .status-card {
        font-family: 'Cabin';
        color: #7bbc49;
        font-weight: 400;
        font-size: 14px;
        background: #ecf5e5;
        border-radius: 5px;
        height: 34px;
        margin-top: 10px;
        width: 80px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100px;
      }

      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        // margin-left: 10px;
        cursor: pointer;
        margin-right: 10px;
      }
      .btn-icon:hover {
        background-color: rgb(243 244 246);
      }
      .no-data {
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 20px;
          color: #454545;
          line-height: 24px;
        }
        .subtitle-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 16px;
          color: #757575;
          margin-top: 20px;
          margin-bottom: 20px;
          line-height: 24px;
        }
        .save-btn {
          width: 220px;
          background: #ffffff;
          border: 1px solid #1b63d4;
          color: #1b63d4;
          border-radius: 5px;
          height: 40px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: 10px;
          margin-bottom: 100px;
          line-height: normal !important;
          cursor: pointer;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
            padding-bottom: 1px;
            color: #1b63d4;
            padding-left: 10px;
          }
        }
        .save-btn:hover {
          background-color: rgb(243 244 246);
        }
      }
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .summary-card {
      padding: 10px 20px 0px 20px;
      height: 100%;
      .item-summary {
        height: 30px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 14px;
          color: #333333;
          width: 60px;
        }
        .value-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
}
.dropdown-action {
  width: 180px;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #1b63d4;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  .icon-item {
    margin-right: 13px;
  }
}
.title-dropdown {
  font-weight: 700;
  font-size: 14px;
  color: #1b63d4;
}
</style>
