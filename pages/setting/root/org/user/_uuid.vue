<template>
  <div class="containers p-6 w-full">
    <div class="mb-6">
      <Back />
    </div>

    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-users text-gray-500 mr-2" />
        Users in {{ data?.name }} Organization
      </div>

      <div class="flex" v-if="selectedUsers.length === 0">
        <ButtonDefault
          icon="plus"
          text="Select Users"
          class="ml-4"
          type="secondary"
          @click.native="toSelect"
        />
      </div>

      <div class="flex" v-else>
        <ButtonDefault
          icon="delete"
          text="Remove Selected"
          class="ml-4"
          type="secondary"
          @click.native="removeSelected"
        />
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Manage users in {{ data?.name }} Organization.
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

        <!-- Search -->
        <div class="search-card">
          <transition name="slide">
            <div
              v-if="!showSearch"
              class="hide-search flex items-center justify-center cursor-pointer"
              @click="showSearch = true"
            >
              <IconSearch />
            </div>

            <div v-else class="show-search flex items-center">
              <form @submit.prevent="searchUser" style="width: 100%">
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find user..."
                  @change="searchUser"
                />
              </form>
              <IconSearch @click.native="searchUser" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- TABLE -->
    <div class="body-content">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        stripe
        fit
        lazy
        :data="dataUsers"
        class="w-full k-table"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <!-- Empty State -->
        <template slot="empty">
          <div class="flex flex-col items-center mt-6 no-data">
            <img src="~/assets/images/empty_table.png" width="150" />
            <div class="title-1">No users found.</div>
            <div class="subtitle-1">This organization has no users yet.</div>

            <button
              class="flex items-center justify-center save-btn no-select mt-4"
              @click="toSelect"
            >
              <IconPlus bg-color="#1B63D4" />
              <div class="name-btn">Select Users</div>
            </button>
          </div>
        </template>

        <el-table-column label="" width="10" />
        <el-table-column type="selection" width="55" />

        <!-- Name -->
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div
              class="flex flex-col cursor-pointer"
              @click="viewDetail(scope.row)"
            >
              <div
                class="k-title text-blue-500 whitespace-nowrap overflow-hidden overflow-ellipsis w-60"
              >
                {{ scope.row.firstName }} {{ scope.row.lastName }}
              </div>
              <div class="k-subtitle">
                {{ scope.row.email || '-' }}
              </div>
            </div>
          </template>
        </el-table-column>

        <!-- Username -->
        <el-table-column label="Username" prop="username" width="160" />

        <!-- Roles -->
        <el-table-column label="Role" width="160">
          <template slot-scope="scope">
            <span
              v-if="scope.row.roles && scope.row.roles.length"
              class="text-xs bg-gray-100 px-2 py-0.5 rounded-full border"
            >
              {{ formatRole(scope.row.roles[0]) }}
            </span>
            <span v-else>-</span>
          </template>
        </el-table-column>

        <!-- Status -->
        <el-table-column label="Status" width="140">
          <template slot-scope="scope">
            <span
              :class="scope.row.isActive ? 'text-blue-500' : 'text-red-500'"
            >
              {{ scope.row.isActive ? 'Active' : 'Inactive' }}
            </span>
          </template>
        </el-table-column>

        <!-- Actions -->
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
                  <i class="ti ti-eye mr-3 text-blue-500" />
                  <div class="title-dropdown text-blue-500">Detail</div>
                </div>

                <div class="btn-show flex items-center justify-center">
                  <img src="~/assets/images/icon/arrow_down.svg" />
                </div>
              </div>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center"
                    :to="`/setting/root/user/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500" />
                    <span class="ml-2">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <el-dropdown-item class="border-t border-gray-300">
                  <div
                    class="item-menu flex items-center"
                    @click="removeUser(scope.row)"
                  >
                    <i class="ti ti-trash text-red-500" />
                    <span class="ml-2">Remove</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

      <!-- Pagination -->
      <div class="flex items-center justify-center mt-4">
        <el-pagination
          background
          :current-page.sync="currentPage"
          :page-size="rowPage"
          :page-sizes="[10, 25, 50, 100]"
          :total="totalList"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="changeRowPage"
          @current-change="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OrgUserPage',
  layout: 'default',

  data() {
    return {
      tableVisible: true,
      data: {},
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      rowPage: 10,
      isLoading: false,
      dialog: false,
      selectedUsers: [],
    }
  },

  computed: {
    ...mapState({
      dataUsers: (state) => state.rootUser.dataList,
      totalList: (state) => state.rootUser.totalList,
      dataDetail: (state) => state.rootOrg.dataDetail,
      sidebar: (state) => state.user.sidebar,
    }),
  },

  mounted() {
    this.getDetail()
    this.getData()
  },

  methods: {
    getDetail() {
      this.$store.dispatch('rootOrg/rootDetail', {
        uuid: this.$route.params.uuid,
      })
    },

    getData() {
      this.isLoading = true

      this.$store
        .dispatch('rootUser/rootListInOrg', {
          uuid: this.$route.params.uuid,
          page: this.currentPage,
          size: this.rowPage,
          name: this.dataSearch,
          sort: this.radio,
        })
        .finally(() => (this.isLoading = false))
    },

    searchUser() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    showDialog() {
      this.dialog = !this.dialog
    },

    handleSelectionChange(val) {
      this.selectedUsers = val
    },

    removeUser(row) {
      this.$confirm(
        `Remove "${row.firstName} ${row.lastName}" from "${this.data.name}" organization?`,
        'Confirmation',
        {
          confirmButtonText: 'Remove',
          type: 'warning',
        }
      )
        .then(() => {
          this.$notifier.showMessage({
            content: 'Removing user...',
            type: 'loading',
          })

          this.$store
            .dispatch('rootUser/rootRemoveFromOrg', {
              userUuid: row.uuid,
              orgUuid: this.$route.params.uuid,
            })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'User removed successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Remove user failed. Error : ' + res?.data.data.message,
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

    removeSelected() {
      if (!this.selectedUsers.length) return

      this.$confirm(
        `Remove ${this.selectedUsers.length} users from "${this.data.name}"?`,
        'Confirmation',
        {
          confirmButtonText: 'Remove',
          type: 'warning',
        }
      ).then(() => {
        this.$notifier.showMessage({
          content: 'Removing users...',
          type: 'loading',
        })

        const payload = {
          orgUuid: this.$route.params.uuid,
          userUuids: this.selectedUsers.map((u) => u.uuid),
        }

        this.$store
          .dispatch('rootUser/rootRemoveFromOrgBulk', payload)
          .then((res) => {
            if (res.status === 204) {
              this.$notifier.showMessage({
                content: 'User removed successfully.',
                type: 'success',
              })

              this.selectedUsers = []
              this.$refs.multipleTable.clearSelection()
              this.getData()
            } else {
              this.$notifier.showMessage({
                content: 'Remove failed.',
                type: 'failed',
              })
            }
          })
      })
    },

    changePage(p) {
      this.currentPage = p
      this.getData()
    },

    changeRowPage(p) {
      this.rowPage = p
      this.currentPage = 1
      this.getData()
    },

    toSelect() {
      this.$router.push('/setting/root/org/select/' + this.$route.params.uuid)
    },

    viewDetail(row) {
      this.$router.push('/setting/root/user/detail/' + row.uuid)
    },

    formatRole(role) {
      if (role === 'org_adm') return 'Org Admin'
      if (role === 'org_ops') return 'Org Operator'
      return role
    },
  },

  watch: {
    dataDetail(val) {
      if (val) {
        this.data = val
      }
    },
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

.containers {
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
  .dialog-filter {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 100%;
    background: #fafafa;
  }
  .popup {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    // height: 100%;
    .status-filter {
      width: 100%;
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
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
</style>
