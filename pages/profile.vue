<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center justify-between header-content">
      <div class="title-header">My Profile</div>
    </div>
    <div class="body-content">
      <div class="header-card flex items-end justify-start">
        <div
          class="item-tab flex items-center justify-center"
          :class="activeItem === 1 ? 'item-active' : ''"
          @click="activeItem = 1"
        >
          Account Details
        </div>
        <div
          class="item-tab flex items-center justify-center"
          :class="activeItem === 2 ? 'item-active' : ''"
          @click="activeItem = 2"
        >
          Manage User
        </div>
        <!-- <div class="item-tab flex items-center justify-center" :class="activeItem === 3 ? 'item-active' : ''" @click="activeItem = 3">
          Subscription
        </div> -->
      </div>
      <div v-if="activeItem === 1" class="content-card">
        <div class="account-info flex flex-row">
          <div class="avatar-profile flex items-center justify-center">
            {{ dataUser }}
          </div>
          <div class="detail-profile">
            <div class="data-name">
              {{ detailUser.firstName }}
              {{ detailUser.lastName }}
            </div>
            <div class="flex items-center flex-row form-data">
              <div class="label-data">Email</div>
              <div class="value-data">
                {{ detailUser.email }}
              </div>
            </div>
            <div class="flex items-center flex-row form-data">
              <div class="label-data">First Name</div>
              <div class="value-data">
                {{ detailUser.firstName }}
              </div>
            </div>
            <div class="flex items-center flex-row form-data">
              <div class="label-data">Last Name</div>
              <div class="value-data">
                {{ detailUser.lastName }}
              </div>
            </div>
            <div class="flex items-center flex-row form-data">
              <div class="label-data">Role</div>
              <div class="value-data">
                {{ capitalize(detailUser.roles) }}
              </div>
            </div>
            <div class="flex items-center flex-row form-data">
              <div class="label-data">Organization</div>
              <div class="value-data">
                {{ detailUser.orgName }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeItem === 2" class="content-card">
        <div class="organization">
          <div class="title-org" style="margin-bottom: 0px">User List</div>
          <div class="desc-tab">
            You can create, edit, and manage all access account in n-gage
          </div>

          <div class="flex items-center filter-content justify-between">
            <div class="status-filter flex items-center">
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

              <div class="hr-vertical" />
              <ButtonDefault
                icon="plus"
                text="Create New"
                class="mr-3"
                @click.native="toCreate()"
              />
            </div>
          </div>

          <div class="table-content">
            <el-table
              v-loading="isLoading"
              element-loading-text="Loading..."
              element-loading-spinner="el-icon-loading"
              fit
              lazy
              :data="dataAllUser"
              stripe
              class="k-table"
              :style="
                sidebar ? 'width:calc(100% - 8px)' : 'width:calc(100% - 8px)'
              "
            >
              <el-table-column prop="name" sortable>
                <template slot="header"> Email </template>
                <template slot-scope="scope">
                  {{ scope.row.email }}
                </template>
              </el-table-column>
              <el-table-column prop="name" sortable>
                <template slot="header"> Name </template>
                <template slot-scope="scope">
                  {{ scope.row.firstName }} {{ scope.row.lastName }}
                </template>
              </el-table-column>
              <el-table-column prop="name" sortable>
                <template slot="header"> Organization </template>
                <template slot-scope="scope">
                  {{ scope.row.userRoles.org.name }}
                </template>
              </el-table-column>
              <el-table-column prop="name" sortable>
                <template slot="header"> Status </template>
                <template slot-scope="scope">
                  {{ scope.row.isVerified ? 'Active' : 'Inactive' }}
                </template>
              </el-table-column>
              <el-table-column prop="name" sortable>
                <template slot="header"> Created On </template>
                <template slot-scope="scope">
                  {{
                    $moment(scope.row.createdAt).format('MMM Do, YYYY hh:mm')
                  }}
                </template>
              </el-table-column>
              <el-table-column prop="name" width="200">
                <template slot-scope="scope">
                  <el-dropdown
                    trigger="click"
                    split-button
                    @click="toCreate(scope.row.id, scope.row.userRoles.org.id)"
                  >
                    <span class="flex title-dropdown">
                      <img
                        src="~/assets/images/icon/edit.svg"
                        width="27%"
                        class="mr-2"
                      />
                      Edit
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <div
                          class="dropdown-action flex items-center no-select"
                          @click="btnChangePassword(scope.row.id)"
                        >
                          <i class="ti ti-key text-green-500"></i>
                          <span class="ml-3">Change Password</span>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div
                          class="dropdown-action flex items-center no-select"
                          @click="
                            toVerification(scope.row.id, scope.row.isVerified)
                          "
                        >
                          <i class="ti ti-lock text-purple-500"></i>
                          <span class="ml-3">{{
                            scope.row.isVerified ? 'Disable' : 'Enable'
                          }}</span>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div
                          class="dropdown-action flex items-center no-select"
                          @click="deleteUser(scope.row)"
                        >
                          <i class="ti ti-trash text-red-500"></i>
                          <span class="ml-3">Delete</span>
                        </div>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
              <template slot="empty">
                <div class="flex flex-col items-center mt-6 no-data">
                  <img src="~/assets/images/empty_table.png" width="150" />
                  <div class="title-1">No records found.</div>
                </div>
              </template>
            </el-table>
            <Pagination
              class="k-pagination"
              :value="Number(currentPage)"
              :total-page="totalPages"
              :total="totaAllUser"
              @input="changePage($event)"
              @rowPage="changeRowPage($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <UserCreate v-show="createUser" :iduser="selectedUserId" />
    <UserCreateOrganization v-show="createOrganization" />
    <UserChangePassword v-show="userChangePassword" :userid="userIdPassword" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Profile - ' + this.$config.appName,
    }
  },
  data() {
    return {
      activeItem: 1,
      dataCampaign: [],
      isLoading: false,
      showSearch: false,
      currentPage: 1,
      per_page: 10,
      dataSearch: '',
      lastPage: false,
      rowPage: 10,
      dialog: false,
      Number: '',
      selectedUserId: null,
      userIdPassword: 0,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      dataUser: (state) => {
        return state.user.dataUser
      },
      detailUser: (state) => {
        return state.user.detailUser
      },
      userId: (state) => {
        return state.user.userId
      },
      dataAllUser: (state) => {
        return state.user.dataAllUser
      },
      totaAllUser: (state) => {
        return state.user.totalAllUser
      },
      totalPages: (state) => {
        return state.user.totalPages
      },
      createUser: (state) => {
        return state.user.createUser
      },
      createOrganization: (state) => {
        return state.user.createOrganization
      },
      roleId: (state) => {
        return state.user.roleId
      },
      userChangePassword: (state) => {
        return state.user.userChangePassword
      },
    }),
  },
  mounted() {
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getDataUser()
    this.getDataAll()
    this.$store.commit('user/SET_USER_CHANGE_DIALOG', false)
    this.$store.commit('user/SET_ORG_CHANGE_DIALOG', false)
    this.$store.commit('user/SET_USER_PASSWORD_CHANGE_DIALOG', false)
  },
  methods: {
    capitalize(str) {
      if (!str) {
        return ''
      }
      return str
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ')
    },
    searchData() {
      this.currentPage = 1
      this.showSearch = false
      this.getDataAll()
    },
    btnChangePassword(id) {
      this.userIdPassword = id
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('user/SET_USER_PASSWORD_CHANGE_DIALOG', true)
    },
    getDataUser() {
      const data = {
        id: this.userId,
        pageType: 'accoundDetail',
      }
      this.$store.dispatch('user/getDetail', data)
    },
    changeRowPage(ev) {
      this.rowPage = ev
      this.getDataAll()
    },
    changePage(ev) {
      if (ev > 0) {
        this.currentPage = ev
        this.getDataAll()
      }
    },
    getDataAll() {
      this.isLoading = true
      const data = {
        status: true,
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
      }
      this.$store.dispatch('user/getAll', data).finally(() => {
        this.isLoading = false
      })
    },
    // editUser () {
    //   alert('edit')
    // },
    toCreate(id = null, orgId = null) {
      if (id !== null) {
        this.selectedUserId = { id, orgId }
      }
      document.querySelector('body').style.overflow = 'hidden'
      this.$store.commit('user/SET_USER_CHANGE_DIALOG', true)
    },
    toVerification(id, status) {
      const isVerified = !status ? 1 : 0
      const data = {
        id,
        isVerified,
      }
      this.$notifier.showMessage({
        content: 'Update Status...',
        type: 'loading',
      })
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('user/updateVerification', data)
            .then((res) => {
              this.$notifier.showMessage({
                content: 'Update Status',
                type: 'success',
              })
              this.getDataAll()
              this.closeDropdown = false
              clearInterval(sto)
            })
            .catch((error) => {
              this.$notifier.showMessage({
                content: 'Update Status User failed! ' + error,
                type: 'failed',
              })
              this.closeDropdown = false
              clearInterval(sto)
            }),
        1000
      )
    },
    deleteUser(data) {
      this.$confirm(`Remove "${data.username}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Remove user...',
            type: 'loading',
          })

          this.$store
            .dispatch('user/deleteUser', {
              id: data.id,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getDataAll()

                this.$notifier.showMessage({
                  content: 'Remove user status success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Remove user status failed. Error : ' +
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
    onChangeDataOrg() {},
  },
}
</script>

<style lang="scss" scoped>
.el-table thead {
  color: #5c6b7a !important;
  font-family: 'Cabin' !important;
  font-weight: 600 !important;
}
.kg-containers {
  .header-content {
    margin-bottom: 25px;
    .title-header {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
    }
  }
  .body-content {
    border-radius: 10px;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    width: 100%;
    .header-card {
      height: 52px;
      width: 100%;
      border-bottom: 1px solid #e2e2e2;
      padding-left: 20px;
      .item-tab {
        height: 40px;
        font-family: 'Cabin';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin-right: 30px;
        color: #a1adb9;
        cursor: pointer;
        border-bottom: 2px solid transparent;
      }
      .item-active {
        border-bottom: 2px solid #1b63d4;
        color: #1b63d4;
      }
    }
    .content-card {
      .desc-tab {
        color: #7a8a99;
        font-family: 'Cabin';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin-top: 5px;
      }
      .current-sub {
        border-radius: 5px;
        border: 1px solid #c3ced9;
        background: #fafafa;
        padding: 15px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        .title-sub {
          color: #5c6b7a;
          font-family: 'Cabin';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .data-password {
          color: #5c6b7a;
          font-family: 'Cabin';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
        }
        .form-data {
          margin-bottom: 8px;
        }
        .label-data2 {
          color: #5c6b7a;
          font-family: 'Cabin';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          width: 120px;
          margin-right: 30px;
        }
        .value-data2 {
          color: #5c6b7a;
          font-family: 'Cabin';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
        }
      }
      .account-info {
        border-bottom: 2px solid #e2e2e2;
        padding: 20px 20px 0px 20px;
        .avatar-profile {
          width: 150px;
          height: 150px;
          background: #1b63d4;
          border-radius: 50%;
          font-family: 'Cabin';
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          color: white;
          margin-right: 30px;
        }
        .detail-profile {
          .data-name {
            color: #5c6b7a;
            font-family: 'Cabin';
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 15px;
          }
          .form-data {
            margin-bottom: 20px;
          }
          .label-data {
            color: #5c6b7a;
            font-family: 'Cabin';
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            width: 120px;
            margin-right: 30px;
          }
          .value-data {
            color: #5c6b7a;
            font-family: 'Cabin';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
        }
      }
      .organization {
        padding: 20px;
        .title-org {
          color: #5c6b7a;
          font-family: 'Cabin';
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .table-content {
          margin-right: 20px;
          .k-table {
            border: 1px solid #c3ced9 !important;
            border-radius: 10px !important;
          }
          .no-data {
            .title-1 {
              font-family: 'Cabin';
              font-weight: 600;
              font-size: 20px;
              color: #454545;
              margin-bottom: 20px;
            }
          }
          .k-pagination {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
      }
    }
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

.filter-content {
  padding-left: 10px;
  padding-right: 10px;
  float: right;
  .search-card {
    padding-bottom: 3px;
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

.title-dropdown {
  font-weight: 700;
  font-size: 14px;
  color: #1b63d4;
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
</style>
