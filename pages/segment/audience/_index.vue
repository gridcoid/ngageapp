<template>
  <div class="containers" style="width: 100%">
    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">Audiences for {{ data?.name }}</div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Import XLS"
          class="ml-4"
          type="secondary"
          @click.native="toImport('sheet')"
        />
        <ButtonDefault
          icon="plus"
          text="Import JSON"
          class="ml-4"
          type="secondary"
          @click.native="toImport('json')"
        />
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        {{ data?.description }}
      </div>

      <div class="flex items-center">
        <!-- Sort button -->
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
                @submit.prevent="searchAudience()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find something.."
                  @change="searchAudience()"
                />
              </form>
              <IconSearch @click.native="searchAudience()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="body-content">
      <!-- TABLE -->
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataAudiences"
        class="k-table"
      >
        <!-- EMPTY STATE -->
        <template slot="empty">
          <div class="flex flex-col items-center mt-6 no-data">
            <img src="~/assets/images/empty_table.png" width="150" />
            <div class="title-1">No records found.</div>
            <div class="subtitle-1">
              Seems like you haven’t created any audience yet. Create one now?
            </div>

            <div class="flex items-center">
              <button
                class="flex items-center justify-center save-btn no-select"
                @click="toImport('sheet')"
              >
                <IconPlus bg-color="#1B63D4" />
                <div class="name-btn">Import XLS</div>
              </button>
              <button
                class="flex items-center justify-center save-btn no-select"
                @click="toImport('json')"
              >
                <IconPlus bg-color="#1B63D4" />
                <div class="name-btn">Import JSON</div>
              </button>
            </div>
          </div>
        </template>

        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- NAME -->
        <el-table-column label="Name" prop="name" sortable>
          <template slot-scope="scope">
            <div
              class="flex items-center cursor-pointer"
              @click="viewDetail(scope.row)"
            >
              <div class="flex flex-col">
                <el-tooltip :open-delay="1000" placement="top-end">
                  <div slot="content">{{ scope.row.name }}</div>

                  <!-- replaced ellipsis inline css with tailwind -->
                  <div
                    class="k-title whitespace-nowrap overflow-hidden overflow-ellipsis w-60"
                  >
                    {{ scope.row.name }}
                  </div>
                </el-tooltip>

                <div class="k-subtitle">
                  {{
                    scope.row.yearOfBirth
                      ? 'Age: ' + calcAge(scope.row.yearOfBirth)
                      : '-'
                  }}
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <!-- CONTACT -->
        <el-table-column label="Contact">
          <template slot-scope="scope">
            <div v-if="scope.row.contacts && scope.row.contacts.length > 0">
              <div v-for="(c, i) in scope.row.contacts.slice(0, 2)" :key="i">
                <span class="k-subtitle">
                  {{ c.contactType.name }}: {{ c.value }}
                </span>
              </div>
            </div>
            <div v-else>-</div>
          </template>
        </el-table-column>

        <!-- ADDRESS -->
        <el-table-column label="Location">
          <template slot-scope="scope">
            <div class="k-subtitle leading-5">
              <template v-if="formatLocation(scope.row)">
                <span v-html="formatLocation(scope.row)" />
              </template>
              <template v-else> - </template>
            </div>
          </template>
        </el-table-column>

        <!-- GENDER -->
        <el-table-column label="Gender" prop="gender.name" width="140">
          <template slot-scope="scope">
            {{ scope.row.gender?.name || '-' }}
          </template>
        </el-table-column>

        <!-- RELIGION -->
        <el-table-column label="Religion" prop="religion.name" width="140">
          <template slot-scope="scope">
            {{ scope.row.religion?.name || '-' }}
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column width="200">
          <template slot-scope="scope">
            <Dropdown
              :index-list="scope.$index"
              name-btn="Detail"
              icons="preview"
              color-text="#1B63D4"
              class="mr-6"
              @preview="viewDetail(scope.row)"
            >
              <template slot="body">
                <NuxtLink
                  class="item-menu flex items-center no-select"
                  :to="`/audience/edit/${scope.row.id}`"
                >
                  <i class="pi pi-pencil text-yellow-500"></i>
                  <span class="ml-3">Edit</span>
                </NuxtLink>

                <!-- replaced border inline css with tailwind -->
                <div
                  class="item-menu flex items-center no-select border-b border-gray-300 rounded-b-md"
                  @click="deleteAudience(scope.row)"
                >
                  <i class="pi pi-trash text-red-500"></i>
                  <span class="ml-3">Delete</span>
                </div>
              </template>
            </Dropdown>
          </template>
        </el-table-column>
      </el-table>

      <!-- Pagination -->
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalList"
        @input="changePage($event)"
        @rowPage="changeRowPage($event)"
      />
    </div>

    <!-- Sort Modal -->
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
                <el-radio v-model="radio" class="mb-4" label="createdAt_asc">
                  Ascending
                </el-radio>
                <el-radio v-model="radio" label="createdAt_desc">
                  Descending
                </el-radio>
              </div>
            </template>
          </Accordion>
        </template>
      </ModalSort>
    </transition>

    <!-- Delete Popup -->
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
            <div class="flex items-center justify-between mb-4">
              <div class="title-popup2">Delete Audience?</div>
              <img
                src="~/assets/images/icon/delete_color.svg"
                class="icon-item"
              />
            </div>

            <div class="title-popup">
              Are you sure want to delete
              <b>{{ detailAudience.name }}</b
              >?
            </div>

            <div
              class="footer-card grid grid-cols-2 gap-4 place-content-stretch"
            >
              <button class="cancel-btn2 no-select" @click="closeDialog()">
                Cancel
              </button>
              <button
                class="save-btn2 no-select"
                @click="doDeleteAudience(detailAudience.id)"
              >
                Confirm
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
  name: 'SegmentAudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Segmented Audiences - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      data: {},
      detailAudience: { name: '', id: '' },
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      rowPage: 7,
      dialog: false,
      dialogDelete: false,
    }
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.segment.dataDetail,
      sidebar: (state) => state.user.sidebar,
      dataAudiences: (state) => state.audienceBySegment.dataList,
      totalList: (state) => state.audienceBySegment.totalList,
      totalPages: (state) => state.audienceBySegment.totalPages,
    }),
  },
  mounted() {
    this.getDetail()
    this.getData()
  },
  methods: {
    calcAge(year) {
      return new Date().getFullYear() - Number(year)
    },

    getDetail() {
      this.isLoading = true
      const data = {
        segmentUuid: this.$route.params.index,
      }
      this.$store
        .dispatch('segment/detail', data)
        .finally(() => (this.isLoading = false))
    },

    getData() {
      this.isLoading = true

      const params = {
        segmentUuid: this.$route.params.index,
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store
        .dispatch('audienceBySegment/list', params)
        .finally(() => (this.isLoading = false))
    },

    toImport(type) {
      this.$router.push({
        path: '/segment/import-' + type + '/' + this.$route.params.index,
      })
    },

    searchAudience() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    showDialog() {
      this.dialog = !this.dialog
    },

    deleteAudience(row) {
      document.querySelector('body').style.overflow = 'hidden'
      this.detailAudience = row
      this.dialogDelete = true
    },

    doDeleteAudience(id) {
      this.$store.dispatch('audience/delete', { id }).then(() => {
        this.dialogDelete = false
        this.getData()
        this.$notifier.showMessage({
          content: 'Delete audience success.',
          type: 'success',
        })
      })
    },

    closeDialog() {
      this.dialogDelete = false
      document.querySelector('body').style.overflow = ''
    },

    changePage(e) {
      if (e > 0) {
        this.currentPage = e
        this.getData()
      }
    },

    changeRowPage(e) {
      this.rowPage = e
      this.getData()
    },

    viewDetail(item) {
      this.$router.push({ path: '/segment/audience/detail/' + item.id })
    },

    resetFilter() {
      this.radio = 'createdAt_desc'
      this.getData()
    },

    formatLocation(row) {
      const line1 = [row.village?.name, row.district?.name]
        .filter(Boolean)
        .join(', ')

      const line2 = [row.regency?.name, row.province?.name]
        .filter(Boolean)
        .join(', ')

      const lines = [line1, line2].filter(Boolean)

      return lines.length ? lines.join('<br />') : ''
    },
  },
  watch: {
    dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.orgId = val.orgId
        this.data.name = val.name
        this.data.description = val.description
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
}
</style>
