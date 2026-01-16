<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">All Campaigns</div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Create New"
          class="ml-4"
          @click.native="toCreate()"
        />
      </div>
    </div>

    <div class="desc-page">
      View and manage all your campaigns in one place.
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="status-filter flex items-center">
        <template v-for="(filter, i) in filters">
          <div
            class="flex items-center justify-center card-filter pl-2 pr-2"
            @click="statusActive(filter.value)"
          >
            <IconList
              v-if="i === 0"
              :bg-color="activeStatus === filter.value ? '#1B63D4' : '#454545'"
            />
            <div
              class="name-status"
              :style="
                activeStatus === filter.value
                  ? 'font-weight: 500;color: #0056DE;'
                  : ''
              "
            >
              {{ filter.name }}
            </div>
          </div>
          <div v-if="i === 0" class="hr-vertical" />
        </template>
      </div>
      <div class="flex items-center">
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
        :data="dataCampaigns"
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
              <div class="name-btn">Create New Campaign</div>
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
                  ? editCampaign(scope.row.id)
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EmailCampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Email Campaign - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      isLoading: false,
      currentPage: 1,
      dataSearch: '',
      showSearch: false,
      activeStatus: 'all',
      rowPage: 8,

      filters: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'Starred',
          value: 'starred',
        },
        {
          name: 'Draft',
          value: 'draft',
        },
        {
          name: 'Sent',
          value: 'sent',
        },
        {
          name: 'Scheduled',
          value: 'scheduled',
        },
        {
          name: 'Archived',
          value: 'archived',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      dataCampaigns: (state) => {
        return state.campaign.dataList
      },
      totalList: (state) => {
        return state.creative.totalList
      },
      totalPages: (state) => {
        return state.creative.totalPages
      },
    }),
  },
  mounted() {
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getData()
  },
  methods: {
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
    getData() {
      this.isLoading = true
      const data = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        format: this.activeStatus,
      }
      this.$store.dispatch('emailCampaign/list', data).finally(() => {
        this.isLoading = false
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
    editCampaign(x) {
      this.$router.push({
        path: `/direct/campaign/email/edit/${x}`,
      })
    },
    toCreate() {
      this.$router.push({ path: '/direct/campaign/email/create' })
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
.el-table thead {
  color: #5c6b7a !important;
  font-family: 'Cabin' !important;
  font-weight: 600 !important;
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
</style>
