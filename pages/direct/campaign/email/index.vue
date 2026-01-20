<template>
  <div class="containers p-6 w-full">
    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-mail text-gray-500 mr-2" /> All Email Campaigns
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

    <!-- Filters -->
    <div class="flex items-center filter-content justify-between">
      <div class="status-filter flex items-center">
        <div
          class="flex items-center justify-center card-filter"
          @click="setActiveStatus(tab.value)"
          v-for="(tab, i) in tabs"
          :key="i"
        >
          <i v-if="i === 0" class="ti ti-menu-2 text-base"></i>
          <div
            class="name-status"
            :class="activeStatus === tab.value ? 'text-blue-500 font-bold' : ''"
          >
            {{ tab.name }}
          </div>
        </div>
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
                @submit.prevent="searchCampaign()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find something.."
                  @change="searchCampaign()"
                />
              </form>
              <IconSearch @click.native="searchCampaign()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="body-content flex flex-col">
      <!-- Table -->
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataCampaigns"
        class="k-table w-full"
      >
        <!-- Empty State -->
        <template slot="empty">
          <div class="flex flex-col items-center mt-6 no-data">
            <img src="~/assets/images/empty_table.png" width="150" />
            <div class="title-1">No records found.</div>
            <div class="subtitle-1">
              Seems like you haven’t created any email campaign yet. Create one
              now?
            </div>

            <button
              class="flex items-center justify-center save-btn no-select"
              @click="toCreate"
            >
              <IconPlus bg-color="#1B63D4" />
              <div class="name-btn">Create New Campaign</div>
            </button>
          </div>
        </template>

        <!-- PADDING -->
        <el-table-column label="" width="10" />

        <!-- TITLE -->
        <el-table-column label="Title" prop="title" sortable>
          <template slot-scope="scope">
            <div class="cursor-pointer k-title" @click="viewDetail(scope.row)">
              {{ scope.row.title }}
            </div>
          </template>
        </el-table-column>

        <!-- SENDER -->
        <el-table-column label="Sender" sortable>
          <template slot-scope="scope">
            {{ scope.row.senderEmail }}
          </template>
        </el-table-column>

        <!-- SEGMENT -->
        <el-table-column label="Segment" sortable>
          <template slot-scope="scope">
            {{ scope.row.segment?.name || '-' }}
          </template>
        </el-table-column>

        <!-- TEMPLATE -->
        <el-table-column label="Template" sortable>
          <template slot-scope="scope">
            {{ scope.row.template?.name || '-' }}
          </template>
        </el-table-column>

        <!-- CREATED/SCHEDULED -->
        <el-table-column :label="dateColumnLabel()" sortable>
          <template slot-scope="scope">
            <span v-if="checkStatus(scope.row) === 'draft'">
              {{ formatDate(scope.row.createdAt) }}
            </span>
            <span v-else-if="checkStatus(scope.row) === 'scheduled'">
              {{ formatDate(scope.row.scheduledAt) }}
            </span>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column width="200">
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
                <el-dropdown-item v-if="activeStatus === 'draft'">
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="testCampaign(scope.row)"
                  >
                    <i class="ti ti-test-pipe text-green-500"></i>
                    <span class="ml-3">Test</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item v-if="activeStatus === 'draft'">
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="scheduleCampaign(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-purple-500"></i>
                    <span class="ml-3">Schedule</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item v-if="activeStatus === 'draft'">
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="sendCampaign(scope.row)"
                  >
                    <i class="ti ti-send text-blue-500"></i>
                    <span class="ml-3">Send Now</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item v-if="activeStatus === 'scheduled'">
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="rescheduleCampaign(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-purple-500"></i>
                    <span class="ml-3">Reschedule</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item v-if="activeStatus === 'scheduled'">
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="cancelSchedule(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-red-500"></i>
                    <span class="ml-3">Cancel</span>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center no-select"
                    :to="`/direct/campaign/email/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500"></i>
                    <span class="ml-3">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <el-dropdown-item class="border-t border-gray-300">
                  <div
                    class="item-menu flex items-center"
                    @click="deleteCampaign(scope.row)"
                  >
                    <i class="ti ti-trash text-red-500"></i>
                    <span class="ml-3">Delete</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

      <!-- Pagination -->
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total="totalList"
        :total-page="totalPages"
        @input="changePage"
        @rowPage="changeRowPage"
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

    <el-dialog
      title="Test Campaign"
      :visible.sync="testDialogVisible"
      width="260px"
    >
      <el-form
        ref="testForm"
        :model="testForm"
        :rules="testRules"
        label-position="top"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="testForm.name" placeholder="Enter name" />
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="testForm.email" placeholder="Enter email" />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer flex justify-end gap-2">
        <el-button @click="testDialogVisible = false" :disabled="isLoading">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="submitTestCampaign"
          :loading="isLoading"
          :disabled="isLoading"
        >
          Send Test
        </el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="Schedule Campaign"
      :visible.sync="scheduleDialogVisible"
      custom-class="tw-schedule-dialog"
      width="260px"
    >
      <el-form
        ref="scheduleForm"
        :model="scheduleForm"
        :rules="scheduleRules"
        label-position="top"
      >
        <el-form-item label="Schedule At" prop="scheduledAt">
          <el-date-picker
            v-model="scheduleForm.scheduledAt"
            type="datetime"
            placeholder="Select date & time"
            format="yyyy-MM-dd HH:mm"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="w-full"
            placement="bottom-start"
            :picker-options="schedulePickerOptions"
          />
        </el-form-item>
      </el-form>

      <span slot="footer" class="flex justify-end gap-2">
        <el-button @click="scheduleDialogVisible = false"> Cancel </el-button>
        <el-button type="primary" @click="submitSchedule"> Schedule </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EmailCampaignListPage',
  layout: 'default',

  head() {
    return {
      title: 'Email Campaigns - ' + this.$config.appName,
    }
  },

  data() {
    return {
      tableVisible: true,
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      rowPage: 7,
      dialog: false,

      activeStatus: 'draft',
      tabs: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'Draft',
          value: 'draft',
        },
        {
          name: 'Scheduled',
          value: 'scheduled',
        },
        {
          name: 'Sending',
          value: 'sending',
        },
        {
          name: 'Sent',
          value: 'sent',
        },
        {
          name: 'Archived',
          value: 'archived',
        },
      ],

      testDialogVisible: false,
      testForm: {
        uuid: '',
        name: '',
        email: '',
      },
      testRules: {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Email is required', trigger: 'blur' },
          {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email format',
            trigger: 'blur',
          },
        ],
      },

      scheduleDialogVisible: false,
      scheduleForm: {
        uuid: '',
        scheduledAt: '',
        isReschedule: false,
      },
      scheduleRules: {
        scheduledAt: [
          {
            required: true,
            message: 'Schedule time is required',
            trigger: 'change',
          },
        ],
      },
      schedulePickerOptions: {
        disabledDate(time) {
          // disable dates before today
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
        },

        disabledTime(date) {
          if (!date) return {}

          const now = new Date()
          const isToday =
            date.getFullYear() === now.getFullYear() &&
            date.getMonth() === now.getMonth() &&
            date.getDate() === now.getDate()

          if (!isToday) return {}

          const currentHour = now.getHours()
          const currentMinute = now.getMinutes()
          const currentSecond = now.getSeconds()

          return {
            disabledHours() {
              return Array.from({ length: currentHour }, (_, i) => i)
            },
            disabledMinutes(hour) {
              if (hour !== currentHour) return []
              return Array.from({ length: currentMinute }, (_, i) => i)
            },
            disabledSeconds(hour, minute) {
              if (hour !== currentHour || minute !== currentMinute) return []
              return Array.from({ length: currentSecond }, (_, i) => i)
            },
          }
        },
      },
    }
  },

  computed: {
    ...mapState({
      sidebar: (state) => state.user.sidebar,
      dataCampaigns: (state) => state.emailCampaign.dataList,
      totalList: (state) => state.emailCampaign.totalList,
      totalPages: (state) => state.emailCampaign.totalPages,
    }),
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      this.isLoading = true

      const params = {
        status: this.activeStatus,
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('emailCampaign/list', params).finally(() => {
        this.isLoading = false
      })
    },

    toCreate() {
      this.$router.push('/direct/campaign/email/create')
    },

    searchCampaign() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    showDialog() {
      this.dialog = !this.dialog
    },

    deleteCampaign(data) {
      this.$confirm(`Delete campaign "${data.title}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Delete campaign...',
            type: 'loading',
          })

          this.$store
            .dispatch('emailCampaign/delete', {
              uuid: data.uuid,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Delete campaign success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Delete campaign failed. Error : ' + res?.data.data.message,
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

    testCampaign(item) {
      const { name, email } = this.$store.getters['emailCampaign/userTest']

      this.testForm.uuid = item.uuid
      this.testForm.name = name
      this.testForm.email = email

      this.testDialogVisible = true
    },

    submitTestCampaign() {
      this.$refs.testForm.validate((valid) => {
        if (!valid) return

        this.$store.dispatch('emailCampaign/saveUserTest', {
          uuid: this.testForm.uuid,
          name: this.testForm.name,
          email: this.testForm.email,
        })

        this.isLoading = true
        this.$store
          .dispatch('emailCampaign/test', this.testForm)
          .then((res) => {
            if (res.status === 200) {
              this.$notifier.showMessage({
                content: 'Send test email success.',
                type: 'success',
              })
            } else {
              this.$notifier.showMessage({
                content: 'Send test email failed!',
                type: 'failed',
              })
            }
          })
          .catch((e) => {
            console.error(e)
          })
          .finally(() => {
            this.isLoading = false
            this.testDialogVisible = false
          })
      })
    },

    scheduleCampaign(item) {
      this.scheduleForm.scheduledAt = ''

      this.$nextTick(() => {
        this.$refs.scheduleForm?.clearValidate()
      })

      this.scheduleDialogVisible = true
      this.scheduleForm.uuid = item.uuid
    },

    rescheduleCampaign(item) {
      this.scheduleForm.scheduledAt = this.fromUtcISOStringToPicker(
        item.scheduledAt
      )

      this.$nextTick(() => {
        this.$refs.scheduleForm?.clearValidate()
      })

      this.scheduleDialogVisible = true
      this.scheduleForm.uuid = item.uuid
      this.scheduleForm.isReschedule = true
    },

    sendCampaign(item) {
      this.showMessage = false
      this.messageError = ''

      this.$notifier.showMessage({
        content: 'Sending campaign...',
        type: 'loading',
      })

      this.isLoading = true

      this.$store
        .dispatch('emailCampaign/send', {
          uuid: item.uuid,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ path: '/direct/campaign/email' })

            this.$notifier.showMessage({
              content: 'Campaign sent successfully.',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError =
              res?.data?.data?.errors
                ?.map((e) => Object.values(e)[0])
                .join(', ') || 'Failed to send campaign'

            this.$notifier.showMessage({
              content: 'Campaign send failed!',
              type: 'failed',
            })
          }
        })
        .catch((e) => {
          console.error(e)
          this.showMessage = true
          this.messageError = 'Error: ' + e.message
        })
        .finally(() => {
          this.isLoading = false
          this.activeStatus = 'sending'
          this.getData()
        })
    },

    cancelSchedule(item) {
      this.showMessage = false
      this.messageError = ''

      this.$notifier.showMessage({
        content: 'Canceling schedule campaign...',
        type: 'loading',
      })

      this.isLoading = true

      this.$store
        .dispatch('emailCampaign/cancelSchedule', {
          uuid: item.uuid,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ path: '/direct/campaign/email' })

            this.$notifier.showMessage({
              content: 'Campaign schedule canceled.',
              type: 'success',
            })
          } else {
            this.showMessage = true
            this.messageError =
              res?.data?.data?.errors
                ?.map((e) => Object.values(e)[0])
                .join(', ') || 'Failed to cancel schedule campaign'

            this.$notifier.showMessage({
              content: 'Campaign schedule cancel failed!',
              type: 'failed',
            })
          }
        })
        .catch((e) => {
          console.error(e)
          this.showMessage = true
          this.messageError = 'Error: ' + e.message
        })
        .finally(() => {
          this.isLoading = false
          this.activeStatus = 'draft'
          this.getData()
        })
    },

    toUtcISOStringFromPicker(value) {
      // value: "yyyy-MM-dd HH:mm:ss" (local time)
      const [date, time] = value.split(' ')
      const [y, m, d] = date.split('-').map(Number)
      const [hh, mm, ss] = time.split(':').map(Number)

      // JS Date assumes LOCAL timezone here
      const localDate = new Date(y, m - 1, d, hh, mm, ss)

      // Convert to UTC ISO
      return localDate.toISOString()
    },

    fromUtcISOStringToPicker(value) {
      // value: "2026-01-30T17:00:00.000Z" (UTC)
      const date = new Date(value) // parsed as UTC, displayed as LOCAL

      const pad = (n) => String(n).padStart(2, '0')

      const y = date.getFullYear()
      const m = pad(date.getMonth() + 1)
      const d = pad(date.getDate())
      const hh = pad(date.getHours())
      const mm = pad(date.getMinutes())
      const ss = pad(date.getSeconds())

      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    },

    submitSchedule() {
      this.$refs.scheduleForm.validate((valid) => {
        if (!valid) return

        const payload = {
          ...this.scheduleForm,
          scheduledAt: this.toUtcISOStringFromPicker(
            this.scheduleForm.scheduledAt
          ),
        }

        this.isLoading = true
        this.$store
          .dispatch('emailCampaign/schedule', payload)
          .then((res) => {
            if (res.status === 200) {
              this.$notifier.showMessage({
                content: 'Schedule campaign success.',
                type: 'success',
              })
            } else {
              this.$notifier.showMessage({
                content: 'Schedule campaign failed!',
                type: 'failed',
              })
            }
          })
          .catch((e) => {
            console.error(e)
          })
          .finally(() => {
            this.isLoading = false
            this.scheduleDialogVisible = false
            this.activeStatus = 'scheduled'
            this.getData()
          })
      })
    },

    viewDetail(item) {
      this.$router.push({ path: '/direct/campaign/email/detail/' + item.uuid })
    },

    resetFilter() {
      this.radio = 'createdAt_desc'
      this.getData()
    },

    setActiveStatus(value) {
      this.activeStatus = value
      this.getData()
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString()
    },

    checkStatus(item) {
      const status = item.status
      const scheduledAt = item.scheduledAt

      if (status == 0 && scheduledAt == null) {
        return 'draft'
      } else if (status == 0 && scheduledAt != null) {
        return 'scheduled'
      } else if (status == 3) {
        return 'sending'
      } else if (status == 1) {
        return 'sent'
      } else if (status == -1) {
        return 'archived'
      }
    },

    dateColumnLabel() {
      // example: global filter / current view
      if (this.activeStatus === 'draft') return 'Created'
      if (this.activeStatus === 'scheduled') return 'Scheduled'
      return 'Date'
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
        border-left: 1px solid #eee;
        padding-left: 10px;
        cursor: pointer;
        &:first-child {
          border-left: none;
          padding-left: 0px;
        }
        .name-status {
          font-family: 'Cabin';
          font-size: 16px;
          margin-left: 10px;
          line-height: 40px;
        }
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
        color: #454545;
      }
      .k-subtitle {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 13px;
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
