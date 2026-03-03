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
    </div>
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
    }),
  },
  mounted() {
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getDataUser()
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
    getDataUser() {
      const data = {
        id: this.userId,
        pageType: 'accoundDetail',
      }
      this.$store.dispatch('user/getDetail', data)
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
