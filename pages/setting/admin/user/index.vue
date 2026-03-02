<template>
  <div class="kg-containers p-6 w-full">
    <!-- HEADER -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-users text-gray-400 mr-2"></i>
        User Management
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

    <!-- FILTER -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Manage system users, control activation, and assign organization.
      </div>

      <div class="flex items-center">
        <button
          type="button"
          class="k-btn flex items-center justify-center"
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
              @click="showSearch = true"
            >
              <IconSearch />
            </div>

            <div v-else class="show-search flex items-center justify-between">
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchUser()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Search user..."
                  @change="searchUser()"
                />
              </form>

              <IconSearch @click.native="searchUser()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- TABLE -->
    <div v-if="dataUsers.length > 0" class="body-content flex flex-col">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataUsers"
        class="w-full k-table"
      >
        <el-table-column label="" width="10" />

        <!-- NAME -->
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div
              class="font-semibold text-sm text-gray-700 cursor-pointer"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.firstName }} {{ scope.row.lastName }}
            </div>
            <div class="text-xs text-gray-400">
              {{ scope.row.username }}
            </div>
          </template>
        </el-table-column>

        <!-- EMAIL -->
        <el-table-column label="Email" width="270">
          <template slot-scope="scope">
            <div class="text-sm text-gray-500">
              {{ scope.row.email || '-' }}
            </div>
          </template>
        </el-table-column>

        <!-- STATUS -->
        <el-table-column label="Status" width="140">
          <template slot-scope="scope">
            <div
              class="text-sm font-medium"
              :class="scope.row.isActive ? 'text-blue-500' : 'text-red-500'"
            >
              {{ scope.row.isActive ? 'Active' : 'Inactive' }}
            </div>
          </template>
        </el-table-column>

        <!-- VERIFIED -->
        <el-table-column label="Verified" width="140">
          <template slot-scope="scope">
            <div
              class="text-sm font-medium"
              :class="scope.row.isVerified ? 'text-green-500' : 'text-gray-400'"
            >
              {{ scope.row.isVerified ? 'Yes' : 'No' }}
            </div>
          </template>
        </el-table-column>

        <!-- CREATED -->
        <el-table-column label="Created" width="140" sortable>
          <template slot-scope="scope">
            <div class="text-sm text-gray-500">
              {{
                scope.row.createdAt
                  ? new Date(scope.row.createdAt).toLocaleDateString()
                  : '-'
              }}
            </div>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column width="190">
          <template slot-scope="scope">
            <el-dropdown trigger="click" placement="bottom-start">
              <div
                class="dropdown-btn noselect flex items-center justify-between cursor-pointer mr-6"
              >
                <div
                  class="flex card-dropdown items-center"
                  @click.stop="viewDetail(scope.row)"
                >
                  <i class="ti ti-eye mr-3" style="color: #1b63d4" />
                  <div style="color: #1b63d4">Detail</div>
                </div>

                <div class="btn-show flex items-center justify-center">
                  <img src="~/assets/images/icon/arrow_down.svg" />
                </div>
              </div>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center no-select"
                    :to="`/setting/admin/user/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500"></i>
                    <span class="ml-2">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <el-dropdown-item class="border-t border-gray-300">
                  <div
                    class="item-menu flex items-center"
                    @click="deleteUser(scope.row)"
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

      <!-- PAGINATION -->
      <div class="flex items-center justify-center mt-4">
        <el-pagination
          background
          :current-page.sync="currentPage"
          :page-size="rowPage"
          :page-sizes="[9, 10, 25, 50, 100]"
          :total="totalList"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="changeRowPage"
          @current-change="changePage"
        />
      </div>
    </div>

    <!-- EMPTY -->
    <div v-else class="flex flex-col items-center mt-24 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1 mt-2">No users found.</div>
      <div class="subtitle-1">Seems like there are no users yet.</div>
      <div class="flex items-center justify-center mt-4">
        <button
          class="flex items-center justify-center save-btn"
          @click="toCreate"
        >
          <IconPlus bg-color="#1B63D4" />
          <div class="name-btn">Create User</div>
        </button>
      </div>
    </div>

    <!-- SORT MODAL -->
    <transition name="slide">
      <ModalSort
        v-if="dialog"
        @close-modal="dialog = false"
        @save-filter="getData()"
      >
        <template v-slot:sort>
          <Accordion title="Sort by" show>
            <template v-slot:body>
              <el-radio v-model="radio" label="createdAt_asc">
                Ascending
              </el-radio>
              <el-radio v-model="radio" label="createdAt_desc">
                Descending
              </el-radio>
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
  name: 'UserPage',
  layout: 'default',

  data() {
    return {
      tableVisible: true,
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      rowPage: 9,
      isLoading: false,
      dialog: false,
    }
  },

  computed: {
    ...mapState({
      sidebar: (state) => state.user.sidebar,
      dataUsers: (state) => state.adminUser.dataList,
      totalList: (state) => state.adminUser.totalList,
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
        .dispatch('adminUser/adminList', payload)
        .finally(() => (this.isLoading = false))
    },

    toCreate() {
      this.$router.push('/setting/admin/user/create')
    },

    searchUser() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    deleteUser(data) {
      this.$confirm(`Delete user "${data.username}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Deleting user...',
            type: 'loading',
          })

          this.$store
            .dispatch('adminUser/adminDelete', { uuid: data.uuid })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'User deleted successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Failed to delete user. Error: ' + res?.data.data.message,
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

    changePage(p) {
      this.currentPage = p
      this.getData()
    },

    changeRowPage(size) {
      this.rowPage = size
      this.currentPage = 1
      this.getData()
    },

    viewDetail(item) {
      this.$router.push('/setting/admin/user/detail/' + item.uuid)
    },

    showDialog() {
      this.dialog = !this.dialog
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
