<template>
  <div class="kg-containers p-6 w-full">
    <!-- header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-code text-gray-400 mr-2"></i> Query Management
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
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>

        <!-- source -->
        <el-table-column label="Source" width="200">
          <template slot-scope="scope">
            <div
              class="font-cabin font-mono text-sm text-gray-700 cursor-pointer"
            >
              {{ scope.row.definition?.source }}
            </div>
          </template>
        </el-table-column>

        <!-- metrics -->
        <el-table-column label="Metrics" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
            >
              <i
                class="ti ti-check text-blue-500"
                v-if="scope.row.definition?.metrics?.length > 0"
              />
              <i class="ti ti-line-dashed text-red-500" v-else />
            </div>
          </template>
        </el-table-column>

        <!-- join -->
        <el-table-column label="Joins" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
            >
              <i
                class="ti ti-check text-blue-500"
                v-if="scope.row.definition?.joins?.length > 0"
              />
              <i class="ti ti-line-dashed text-red-500" v-else />
            </div>
          </template>
        </el-table-column>

        <!-- filters -->
        <el-table-column label="Filters" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
            >
              <i
                class="ti ti-check text-blue-500"
                v-if="
                  scope.row.definition?.filters?.length > 0 ||
                  'and' in scope.row.definition?.filters
                "
              />
              <i class="ti ti-line-dashed text-red-500" v-else />
            </div>
          </template>
        </el-table-column>

        <!-- groupBy -->
        <el-table-column label="Group By" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
            >
              <i
                class="ti ti-check text-blue-500"
                v-if="scope.row.definition?.groupBy?.length > 0"
              />
              <i class="ti ti-line-dashed text-red-500" v-else />
            </div>
          </template>
        </el-table-column>

        <!-- sort -->
        <el-table-column label="Sort" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-700 cursor-pointer"
            >
              <i
                class="ti ti-check text-blue-500"
                v-if="scope.row.definition?.sort?.length > 0"
              />
              <i class="ti ti-line-dashed text-red-500" v-else />
            </div>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column width="190">
          <template slot-scope="scope">
            <el-dropdown
              trigger="click"
              placement="bottom-start"
              :append-to-body="true"
            >
              <!-- BUTTON -->
              <div
                class="dropdown-btn noselect flex items-center justify-between cursor-pointer mr-6"
              >
                <div
                  class="flex card-dropdown items-center"
                  @click.stop="viewDetail(scope.row)"
                >
                  <i class="ti ti-eye mr-3" style="color: #1b63d4" />
                  <div class="title-dropdown" style="color: #1b63d4">
                    Detail
                  </div>
                </div>

                <div class="btn-show flex items-center justify-center">
                  <img src="~/assets/images/icon/arrow_down.svg" />
                </div>
              </div>

              <!-- DROPDOWN -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center no-select"
                    :to="`/setting/query/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500"></i>
                    <span class="ml-2">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <el-dropdown-item class="border-t border-gray-300">
                  <div
                    class="item-menu flex items-center"
                    @click="deleteQuery(scope.row)"
                  >
                    <i class="ti ti-trash text-red-500"></i>
                    <span class="ml-2">Delete</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

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
          @click="toCreate"
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
      title: 'Widget Settings - ' + this.$config.appName,
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

      this.$store
        .dispatch('query/list', payload)
        .finally(() => (this.isLoading = false))
    },
    toCreate() {
      this.$router.push({ path: '/setting/query/create' })
    },
    searchQuery() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },
    showDialog() {
      this.dialog = !this.dialog
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
    viewDetail(data) {
      this.$router.push({ path: `/setting/query/detail/${data.uuid}` })
    },
    deleteQuery(data) {
      this.$confirm(`Delete query "${data.name}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Deleting query...',
            type: 'loading',
          })

          this.$store
            .dispatch('query/delete', { uuid: data.uuid })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Query deleted successfully.',
                  type: 'success',
                })
              }

              this.$store.commit('user/SET_DROPDOWN', null)
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
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
