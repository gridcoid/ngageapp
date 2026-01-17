<template>
  <div class="kg-containers p-6 w-full">
    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-folder text-gray-500 mr-2" /> Audience Segments (Contact
        Lists)
      </div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Create New"
          class="ml-4"
          type="secondary"
          @click.native="toCreate()"
        />
      </div>
    </div>

    <!-- Filter -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Discover and manage different audience groups or contact lists to tailor
        your campaigns effectively.
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="k-btn focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center items-center justify-center"
          @click="showDialog()"
        >
          <img src="~/assets/images/campaign/icon_filter.svg" class="mr-2" />
          Sort
        </button>
        <div class="hr-vertical" />
        <div class="search-card">
          <transition name="slide">
            <div
              v-if="!showSearch"
              class="hide-search flex items-center justify-center cursor-pointer"
              @mouseover="showSearch = true"
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
                @submit.prevent="searchSegment()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find something.."
                  @change="searchSegment()"
                />
              </form>
              <IconSearch @click.native="searchSegment()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div v-if="dataSegments.length > 0" class="body-content flex flex-col">
      <div
        v-for="(item, index) in dataSegments"
        :key="index"
        class="card-list flex flex-row items-center justify-between"
      >
        <div
          class="flex items-center justify-start flex-row cursor-pointer"
          @click="viewDetail(item)"
        >
          <img
            src="~/assets/images/target.png"
            class="thumbnail opacity-90 hover:opacity-100"
          />
          <div class="name-data flex flex-col">
            <span>{{ item.name }}</span>
            <span>{{ item.description }}</span>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="flex user-data items-center justify-start">
            <IconUser class="mr-1" bg-color="#7A8A99" style="height: 14px" />
            {{ Number(item.audienceCount).toLocaleString() }} audiences
          </div>
          <Dropdown
            :index-list="index"
            name-btn="Detail"
            icons="preview"
            color-text="#1B63D4"
            class="mr-6"
            @preview="viewDetail(item)"
          >
            <template slot="body">
              <div
                class="item-menu flex items-center no-select text-gray-500 text-sm"
                @click="duplicateSegment(item)"
              >
                <i class="ti ti-copy text-gray-500"></i>
                <span class="ml-3">Duplicate</span>
              </div>
              <NuxtLink
                class="item-menu flex items-center no-select text-gray-500 text-sm"
                :to="`/direct/segment/import-sheet/${item.uuid}`"
              >
                <i class="ti ti-table text-gray-500"></i>
                <span class="ml-3">Import XLS</span>
              </NuxtLink>
              <NuxtLink
                class="item-menu flex items-center no-select text-gray-500 text-sm"
                :to="`/direct/segment/import-json/${item.uuid}`"
              >
                <i class="ti ti-brackets-contain text-gray-500"></i>
                <span class="ml-3">Import JSON</span>
              </NuxtLink>
              <NuxtLink
                class="item-menu flex items-center no-select text-gray-500 text-sm"
                :to="`/direct/segment/edit/${item.uuid}`"
              >
                <i class="ti ti-edit text-gray-500"></i>
                <span class="ml-3">Edit</span>
              </NuxtLink>
              <div
                class="item-menu flex items-center no-select text-gray-500 text-sm"
                style="
                  border-bottom: 1px solid #e2e2e2;
                  border-end-end-radius: 5px;
                  border-end-start-radius: 5px;
                "
                @click="deleteSegment(item)"
              >
                <i class="ti ti-trash text-gray-500"></i>
                <span class="ml-3">Delete</span>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>

      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalList"
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

    <!-- No Data -->
    <div v-else class="flex flex-col items-center mt-24 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1 mt-2">No records found.</div>
      <div class="subtitle-1">
        Seems like you haven’t created any segment yet. Create one now?
      </div>
      <div class="flex items-center justify-center mt-4">
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="toCreate"
        >
          <IconPlus bg-color="#1B63D4" />
          <div class="name-btn">Create New Segment</div>
        </button>
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="$router.go(0)"
        >
          <IconRefresh bg-color="#1B63D4" />
          <div class="name-btn">Reload This Page</div>
        </button>
      </div>
    </div>

    <transition name="slide">
      <ModalSort
        v-if="dialog"
        @close-modal="dialog = false"
        @save-filter="getData()"
        @reset-filter="resetFilter()"
      >
        <template v-slot:sort>
          <Accordion title="Sort by" class="mb-4" show>
            <template v-slot:body>
              <div class="flex flex-col">
                <el-radio
                  v-model="radio"
                  class="flex mb-4"
                  label="createdAt_asc"
                  style="
                    font-family: 'Cabin';
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                  "
                >
                  Ascending
                </el-radio>
                <el-radio
                  v-model="radio"
                  class="flex"
                  label="createdAt_desc"
                  style="
                    font-family: 'Cabin';
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                  "
                >
                  Descending
                </el-radio>
              </div>
            </template>
          </Accordion>
        </template>
      </ModalSort>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SegmentPage',
  layout: 'default',
  head() {
    return {
      title: 'Audience Segments - ' + this.$config.appName,
    }
  },
  data() {
    return {
      radio: 'createdAt_desc',
      createdAt: '',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      activeStatus: 'all',
      rowPage: 5,
      dialog: false,
      resetFilter() {
        this.radio = 'createdAt_desc'
        this.getData()
      },
    }
  },
  computed: {
    ...mapState({
      orgId: (state) => {
        return state.user.orgId
      },
      sidebar: (state) => {
        return state.user.sidebar
      },
      popup: (state) => {
        return state.user.popup
      },
      dataSegments: (state) => {
        return state.segment.dataList
      },
      totalList: (state) => {
        return state.segment.totalList
      },
      totalPages: (state) => {
        return state.segment.totalPages
      },
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const data = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('segment/list', data).finally(() => {
        this.isLoading = false
      })
    },
    toCreate() {
      this.$router.push({ path: '/direct/segment/create' })
    },
    searchSegment() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },
    showDialog() {
      this.dialog = !this.dialog
    },
    duplicateSegment(data) {
      this.$confirm(`Duplicate segment "${data.name}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Duplicate segment...',
            type: 'loading',
          })

          this.$store
            .dispatch('segment/duplicate', {
              uuid: data.uuid,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Duplicate segment success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Duplicate segment failed. Error : ' +
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
    deleteSegment(data) {
      this.$confirm(`Delete segment "${data.name}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Delete segment...',
            type: 'loading',
          })

          this.$store
            .dispatch('segment/delete', {
              uuid: data.uuid,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Delete segment success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Delete segment failed. Error : ' + res?.data.data.message,
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
    changePage(s) {
      if (s > 0) {
        this.currentPage = s
        this.getData()
      }
    },
    changeRowPage(p) {
      this.rowPage = p
      this.currentPage = 1
      this.getData()
    },
    viewDetail(item) {
      this.$router.push({ path: '/direct/segment/' + item.uuid + '/audience' })
    },
  },
}
</script>

<style lang="scss" scoped>
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
  .filter-content {
    margin-top: 20px;
    .status-filter {
      height: 44px;
      background: #ffffff;
      border: 1px solid #c3ced9;
      border-radius: 5px;
      padding-right: 8px;
      .card-filter {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
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
      margin-right: 10px;
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
  .desc-page {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 16px;
    color: #757575;
  }
  .body-content {
    margin-top: 30px;
    gap: 15px;
    .card-list {
      border-radius: 5px;
      border: 1px solid #c3ced9;
      background: #fff;
      height: 100%;
      width: 100%;
      .thumbnail {
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-top-left-radius: 5px;
        border-end-start-radius: 5px;
        margin-right: 20px;
      }
      .name-data > span:nth-child(1) {
        color: #5c6b7a;
        font-family: 'Cabin';
        font-size: 16px;
      }
      .name-data > span:nth-child(2) {
        color: #999;
        font-size: 14px;
      }
      .user-data {
        color: #7a8a99;
        font-family: 'Cabin';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        width: 180px;
        text-align: left;
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
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
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
</style>
