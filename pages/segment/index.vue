<template>
  <div class="kg-containers" style="width: 100%">
    <div class="flex items-center header-content">
      <div class="title-header">Audience Segments</div>
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
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Discover and manage different audience groups to tailor your campaigns
        effectively.
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="k-btn focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center items-center justify-center"
          @click="showDialog()"
        >
          <img src="~/assets/images/campaign/icon_filter.svg" class="mr-2" />
          Sort & Filter
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
    <div v-if="dataSegments.length > 0" class="body-content flex flex-col">
      <div
        v-for="(item, index) in dataSegments"
        :key="index"
        class="card-list flex flex-row items-center justify-between"
      >
        <div class="flex items-center justify-start flex-row">
          <img src="~/assets/images/thumb_audience.png" class="thumbnail" />
          <div class="name-data flex flex-col">
            <span>
              {{ item.name }}
            </span>
            <span>
              {{ item.description }}
            </span>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="flex user-data items-center justify-start">
            <IconUser class="mr-1" bg-color="#7A8A99" style="height: 14px" />
            {{ Number(0).toLocaleString() }} users
          </div>
          <Dropdown
            :index-list="index"
            name-btn="Detail"
            icons="preview"
            color-text="#1B63D4"
            class="mr-6"
          >
            <template slot="body">
              <div
                class="item-menu flex items-center no-select"
                @click="openDuplicateDialog(item)"
              >
                <img
                  src="~/assets/images/icon/duplicate.svg"
                  class="icon-item"
                />
                Duplicate
              </div>
              <div
                class="item-menu flex items-center no-select"
                style="
                  border-bottom: 1px solid #e2e2e2;
                  border-top: 1px solid #e2e2e2;
                  border-end-end-radius: 5px;
                  border-end-start-radius: 5px;
                "
                @click="deleteSegment(item)"
              >
                <img src="~/assets/images/icon/delete.svg" class="icon-item" />
                Delete
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
        @input="changePage($event)"
        @rowPage="changeRowPage($event)"
      />
    </div>
    <div v-else class="flex flex-col items-center mt-6 no-data">
      <img src="~/assets/images/campaign/empty_table.svg" />
      <div class="title-1">It’s Very Clean Here</div>
      <div class="subtitle-1">
        Seems like you haven’t created any segment yet. Create one now?
      </div>
      <button
        class="flex items-center justify-center save-btn no-select"
        @click="toCreate()"
      >
        <IconSave bg-color="#1B63D4" />
        <div class="name-btn">Create New Audience Segment</div>
      </button>
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

    <transition name="fade">
      <Popup
        v-if="dialogDelete"
        class="kg-popup"
        width="30"
        :border-header="false"
        @close-modal="closeDialog()"
      >
        <template v-slot:body>
          <div class="content-popup flex flex-col">
            <div
              class="flex items-center justify-between"
              style="margin-bottom: 14px"
            >
              <div class="title-popup2">Delete Segment?</div>
              <img
                src="~/assets/images/icon/delete_color.svg"
                class="icon-item"
              />
            </div>
            <div class="title-popup">
              Are you sure want to delete
              <b>{{ detailSegment.name }}</b> segment?
            </div>
            <div
              class="footer-card grid grid-cols-2 gap-4 place-content-stretch"
            >
              <button
                class="flex items-center justify-center cancel-btn2 no-select"
                @click="closeDialog()"
              >
                <span class="name-btn no-select">Cancel</span>
              </button>
              <button
                class="flex items-center justify-center save-btn2 no-select"
                @click="doDeleteSegment(detailSegment.id)"
              >
                <IconCompleted bg-color="white" class="mr-2 pl-1" />
                <span class="name-btn no-select">Confirm</span>
              </button>
            </div>
          </div>
        </template>
      </Popup>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Audience Segments - ' + this.$config.appName,
    }
  },
  data() {
    return {
      detailSegment: {
        name: '',
        id: '',
      },
      radio: 'createdAt_desc',
      createdAt: '',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      activeStatus: 'all',
      rowPage: 6,
      dialog: false,
      dialogDelete: false,
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

      this.$store
        .dispatch('segment/list', data)
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    toCreate() {
      this.$router.push({ path: '/segment/create' })
    },
    searchSegment() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },
    showDialog() {
      this.dialog = !this.dialog
    },
    deleteSegment(data) {
      document.querySelector('body').style.overflow = 'hidden'
      this.detailSegment = data
      this.dialogDelete = true
    },
    doDeleteSegment(id) {
      const data = {
        id,
      }
      this.$notifier.showMessage({
        content: 'Delete segment...',
        type: 'loading',
      })
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('segment/delete', data)
            .then((res) => {
              if (
                res.data.status.code === 200 ||
                res.data.status.code === 201 ||
                res.data.status.code === 202
              ) {
                this.dialogDelete = false
                this.$store.commit('user/SET_DROPDOWN', null)

                this.getData()

                this.$notifier.showMessage({
                  content: 'Delete segment status success.',
                  type: 'success',
                })

                clearInterval(sto)
              } else {
                this.dialogDelete = false
                this.showMessage = true
                this.$store.commit('user/SET_DROPDOWN', null)

                const keys = Object.keys(res.data.data.errors[0])
                const arr = []

                keys.forEach((key, index) => {
                  arr.push(res.data.data.errors[0][key])
                })

                this.messageError = arr.join(', ')

                this.$notifier.showMessage({
                  content:
                    'Delete segment status failed. Error : ' +
                    res.data.data.message,
                  type: 'failed',
                })

                clearInterval(sto)
              }

              this.getData()
            })
            .catch(() => {}),
        1000
      )
      document.querySelector('body').style.overflow = ''
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
  },
}
</script>

<style lang="scss" scoped>
.kg-containers {
  padding: 20px;
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
      font-family: 'Cabin';
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      font-weight: 700;
      height: 36px;
      width: 138px;
      align-items: center;
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
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
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
        font-family: 'Cabin';
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        color: #1b63d4;
        font-size: 14px;
        font-weight: 700;
        height: 36px;
        width: 138px;
        align-items: center;
        margin-right: 20px;
      }
      .k-btn:hover {
        background-color: rgb(243 244 246);
      }
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
      .k-btn {
        width: 165px;
        background: #f1f1f1;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        cursor: pointer;
        .name-btn {
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 1px;
          color: #9a9a9a;
          padding-left: 10px;
        }
      }
      .k-btn:hover {
        background-color: rgb(243 244 246);
        border: 0px;
      }
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

.kg-popup {
  .content-popup {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 100%;
    height: 100%;
    .title-popup2 {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #5c6b7a;
    }
    .title-popup {
      font-weight: 400;
      font-size: 16px;
      color: #454545;
    }
    .input-number {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border: 1.5px solid #1b63d4;
      box-shadow: 0px 2px 10px rgba(187, 209, 243, 0.5);
      border-radius: 5px;
      margin-top: 10px;
      margin-bottom: 15px;
      padding-left: 13px;
      padding-right: 13px;
      .input-text {
        width: 70%;
        text-align: center;
        height: 37px;
      }
      .input-text:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
      }
    }
    .box-popup {
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      padding: 11px 10px 11px 10px;
      margin-top: 10px;
      .name-popup {
        font-weight: 500;
        font-size: 16px;
        color: #454545;
      }
      .desc-popup {
        font-weight: 400;
        font-size: 14px;
        color: #757575;
      }
      .date-popup {
        font-weight: 400;
        font-size: 14px;
        text-align: right;
        color: #757575;
      }
    }
    .footer-card {
      margin-top: 15px;
      .cancel-btn {
        border: 1px solid #1b63d4;
        color: #1b63d4;
        font-weight: 700;
        font-size: 14px;
        border-radius: 5px;
        height: 40px;
      }
      .cancel-btn:hover {
        background-color: rgb(243 244 246);
      }
      .save-btn {
        background: #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 40px;
      }
      .save-btn:hover {
        opacity: 1.2;
      }
      .cancel-btn2 {
        border: 1px solid #ed543a;
        color: #ed543a;
        font-weight: 700;
        font-size: 14px;
        border-radius: 5px;
        height: 40px;
      }
      .cancel-btn2:hover {
        background-color: rgb(243 244 246);
      }
      .save-btn2 {
        background: #ed543a;
        border: 1px solid #ed543a;
        border-radius: 5px;
        height: 40px;
        color: white;
      }
      .save-btn2:hover {
        opacity: 1.2;
      }
    }
  }
}
</style>
