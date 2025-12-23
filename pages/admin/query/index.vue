<template>
  <div class="kg-containers" style="width: 100%">
    <!-- header -->
    <div class="flex items-center header-content">
      <div class="title-header">Query Management</div>
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

    <!-- filter -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Manage saved SQL queries that can be reused by widgets and dashboards.
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
                @submit.prevent="searchQuery()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find query..."
                  @change="searchQuery()"
                />
              </form>
              <IconSearch @click.native="searchQuery()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- table -->
    <div v-if="dataQueries.length > 0" class="body-content flex flex-col">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        stripe
        :data="dataQueries"
        class="w-full k-table"
      >
        <el-table-column label="" width="10" />

        <!-- name -->
        <el-table-column label="Name">
          <template slot-scope="scope">
            <div class="font-cabin font-semibold text-sm text-gray-700">
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>

        <!-- type -->
        <el-table-column label="Type" width="140">
          <template slot-scope="scope">
            <span class="badge-secondary">
              {{ scope.row.type || 'SQL' }}
            </span>
          </template>
        </el-table-column>

        <!-- created -->
        <el-table-column label="Created At" width="180">
          <template slot-scope="scope">
            <div class="text-sm text-gray-500">
              {{ $moment(scope.row.createdAt).format('DD MMM YYYY') }}
            </div>
          </template>
        </el-table-column>
      </el-table>

      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalList"
        @input="changePage($event)"
        @rowPage="changeRowPage($event)"
      />
    </div>

    <!-- empty -->
    <div v-else class="flex flex-col items-center mt-24 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1 mt-2">No records found.</div>
      <div class="subtitle-1">
        You haven’t created any query yet. Create one now?
      </div>
      <div class="flex items-center justify-center mt-4">
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="toCreate()"
        >
          <IconPlus bg-color="#1B63D4" />
          <div class="name-btn">Create New Query</div>
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

    <!-- sort modal -->
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
                >
                  Ascending
                </el-radio>
                <el-radio v-model="radio" class="flex" label="createdAt_desc">
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
  name: 'QueryPage',
  layout: 'default',
  head() {
    return {
      title: 'Query Management - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      rowPage: 5,
      isLoading: false,
      dialog: false,
      resetFilter() {
        this.radio = 'createdAt_desc'
        this.getData()
      },
    }
  },
  computed: {
    ...mapState({
      dataQueries: (state) => state.query.dataList,
      totalList: (state) => state.query.totalList,
      totalPages: (state) => state.query.totalPages,
      sidebar: (state) => state.user.sidebar,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const payload = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('query/list', payload).finally(() => {
        this.isLoading = false
      })
    },
    toCreate() {
      this.$router.push({ path: '/admin/query/create' })
    },
    searchQuery() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },
    showDialog() {
      this.dialog = !this.dialog
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
      width: 100px;
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
