<template>
  <div class="containers p-6 w-full">
    <div class="mb-6">
      <Back />
    </div>

    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-users text-gray-500 mr-2" /> Audience list for
        {{ data?.name }}
      </div>
      <div class="flex" v-if="selectedAudiences.length === 0">
        <ButtonDefault
          icon="plus"
          text="Add Audience"
          class="ml-4"
          type="secondary"
          @click.native="toSelect()"
        />
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
      <div class="flex" v-else>
        <ButtonDefault
          icon="delete"
          text="Remove Selected"
          class="ml-4"
          type="secondary"
          @click.native="removeSelected()"
        />
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        <!-- {{ data?.description }} -->
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
        class="w-full k-table"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
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
                @click="toSelect()"
              >
                <IconPlus bg-color="#1B63D4" />
                <div class="name-btn">Add Audience</div>
              </button>
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

        <el-table-column type="selection" width="55" />

        <!-- NAME -->
        <el-table-column label="Name" prop="name" sortable>
          <template slot-scope="scope">
            <div
              class="flex items-center cursor-pointer"
              @click="viewDetail(scope.row)"
            >
              <div class="flex flex-col">
                <div
                  class="k-title whitespace-nowrap overflow-hidden overflow-ellipsis w-60 text-blue-500"
                >
                  {{ scope.row.name || '-' }}
                </div>
                <!-- drop info age, requested by endah -->
                <!-- <div class="k-subtitle">
                  {{
                    scope.row.yearOfBirth
                      ? 'Age: ' + calcAge(scope.row.yearOfBirth)
                      : '-'
                  }}
                </div> -->
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
                  <!-- {{ c.contactType.name }}: -->
                  {{ c.value }}
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
                  <i class="ti ti-eye mr-3 text-blue-500" />
                  <div class="title-dropdown text-blue-500">Detail</div>
                </div>

                <div class="btn-show flex items-center justify-center">
                  <img src="~/assets/images/icon/arrow_down.svg" />
                </div>
              </div>

              <!-- DROPDOWN MENU -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center"
                    :to="`/direct/audience/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500"></i>
                    <span class="ml-2">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <el-dropdown-item class="border-t border-gray-300">
                  <div
                    class="item-menu flex items-center"
                    @click="deleteAudience(scope.row)"
                  >
                    <i class="ti ti-trash text-red-500"></i>
                    <span class="ml-2">Remove</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SegmentAudiencePage',
  layout: 'default',
  head() {
    return {
      title: 'Segmented Audience - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      data: {},
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      rowPage: 9,
      dialog: false,

      selectedAudiences: [],
    }
  },
  computed: {
    ...mapState({
      dataDetail: (state) => state.segment.dataDetail,
      sidebar: (state) => state.user.sidebar,
      dataAudiences: (state) => state.audience.dataList,
      totalList: (state) => state.audience.totalList,
      totalPages: (state) => state.audience.totalPages,
    }),
  },
  mounted() {
    this.getDetail()
    this.getData()
    this.$root.$on(`flag-${this.$route.name}`, this.handleReload)
  },
  beforeDestroy() {
    this.$root.$off(`flag-${this.$route.name}`, this.handleReload)
  },
  methods: {
    handleReload() {
      this.currentPage = 1
      this.dataSearch = ''
      this.getData()
    },

    calcAge(year) {
      return new Date().getFullYear() - Number(year)
    },

    getDetail() {
      this.isLoading = true
      this.$store
        .dispatch('segment/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    getData() {
      this.isLoading = true

      const params = {
        uuid: this.$route.params.uuid,
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store
        .dispatch('audience/listInSegment', params)
        .finally(() => (this.isLoading = false))
    },

    toSelect() {
      this.$router.push({
        path: '/direct/segment/select/' + this.$route.params.uuid,
      })
    },

    toImport(type) {
      this.$router.push({
        path: '/direct/segment/import-' + type + '/' + this.$route.params.uuid,
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
      this.$confirm(
        `Remove "${
          row.name || row.contacts.find((item) => item.typeId === 1)?.value
        }" from "${this.data.name}"?`,
        'Confirmation',
        {
          confirmButtonText: 'Remove',
          type: 'warning',
        }
      )
        .then(() => {
          this.$notifier.showMessage({
            content: 'Removing audience...',
            type: 'loading',
          })

          this.$store
            .dispatch('audience/removeFromSegment', {
              audienceUuid: row.uuid,
              segmentUuid: this.$route.params.uuid,
            })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Audience removed successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Remove audience failed. Error : ' + res?.data.data.message,
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
      this.$router.push({
        path: '/direct/audience/detail/' + item.uuid,
      })
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

    handleSelectionChange(val) {
      this.selectedAudiences = val
    },

    removeSelected() {
      if (!this.selectedAudiences.length) return

      this.$confirm(
        `Remove ${this.selectedAudiences.length} audience from "${this.data.name}"?`,
        'Confirmation',
        {
          confirmButtonText: 'Remove',
          type: 'warning',
        }
      ).then(() => {
        this.$notifier.showMessage({
          content: 'Removing audiences...',
          type: 'loading',
        })

        const payload = {
          segmentUuid: this.$route.params.uuid,
          audienceUuids: this.selectedAudiences.map((a) => a.uuid),
        }

        this.$store
          .dispatch('audience/removeFromSegmentBulk', payload)
          .then((res) => {
            if (res.status === 204) {
              this.$notifier.showMessage({
                content: 'Audience removed successfully.',
                type: 'success',
              })

              this.selectedAudiences = []
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
