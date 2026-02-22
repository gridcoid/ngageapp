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
          <i
            v-if="i === 0"
            class="ti ti-menu-2 text-base"
            :class="activeStatus === 'all' ? 'text-purple-500' : ''"
          ></i>
          <div
            class="name-status"
            :class="{
              'text-purple-500': activeStatus === tab.value,
              'text-gray-500': activeStatus !== tab.value,
              'cursor-default': activeStatus === tab.value,
            }"
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
        v-show="activeStatus !== 'sent'"
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
            <div class="mb-8">
              No records found in {{ activeStatus }} group.
            </div>
          </div>
        </template>

        <!-- PADDING -->
        <el-table-column label="" width="10" />

        <!-- TITLE -->
        <el-table-column label="Title" prop="title" sortable>
          <template slot-scope="scope">
            <div
              class="cursor-pointer k-title text-blue-500 text-base"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.title }}
            </div>
            <div
              class="cursor-pointer k-subtitle"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.subject }}
            </div>
          </template>
        </el-table-column>

        <!-- STATUS -->
        <el-table-column label="Status" v-if="activeStatus === 'all'" sortable>
          <template slot-scope="scope">
            <el-tag :type="tagColor(scope.row)">
              {{ checkStatus(scope.row) }}
            </el-tag>
          </template>
        </el-table-column>

        <!-- SEGMENT -->
        <el-table-column label="Segment" sortable>
          <template slot-scope="scope">
            <NuxtLink
              :to="`/direct/segment/${scope.row.segment?.uuid}/audience`"
              class="k-title text-blue-500"
            >
              {{ scope.row.segment?.name || '-' }}
            </NuxtLink>
            <div class="k-subtitle">
              {{ scope.row.segment?.audienceCount || '0' }} audience{{
                scope.row.segment?.audienceCount === 1 ? '' : 's'
              }}
            </div>
          </template>
        </el-table-column>

        <!-- TEMPLATE -->
        <el-table-column label="Template" sortable>
          <template slot-scope="scope">
            <NuxtLink
              :to="`/direct/template/email/detail/${scope.row.template?.uuid}`"
              class="text-blue-500"
            >
              {{ scope.row.template?.name || '-' }}
            </NuxtLink>
            <div class="k-subtitle">
              {{ scope.row.template?.purpose || '' }}
            </div>
          </template>
        </el-table-column>

        <!-- CREATED/SCHEDULED -->
        <el-table-column :label="dateColumnLabel()" width="150" sortable>
          <template slot-scope="scope">
            <div v-if="checkStatus(scope.row) === 'scheduled'" class="k-title">
              {{ formatDate(scope.row.scheduledAt) }}
            </div>
            <div v-else class="k-title">
              {{ formatDate(scope.row.createdAt) }}
            </div>
            <div
              v-if="checkStatus(scope.row) === 'scheduled'"
              class="k-subtitle"
            >
              {{ formatTime(scope.row.scheduledAt) }}
            </div>
            <div v-else class="k-subtitle">
              {{ formatTime(scope.row.createdAt) }}
            </div>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column label="Actions" width="190">
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
                <!-- STATISTICS: sent -->
                <el-dropdown-item
                  v-if="iam.statistic.includes(checkStatus(scope.row))"
                >
                  <NuxtLink
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    :to="`/direct/campaign/email/detail/${scope.row.uuid}`"
                  >
                    <i class="ti ti-chart-bar text-green-500"></i>
                    <span class="ml-2">Statistics</span>
                  </NuxtLink>
                </el-dropdown-item>

                <!-- DUPLICATE: draft, scheduled, sent, archived -->
                <el-dropdown-item
                  v-if="iam.duplicate.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="duplicateCampaign(scope.row)"
                  >
                    <i class="ti ti-copy text-purple-500"></i>
                    <span class="ml-2">Duplicate</span>
                  </div>
                </el-dropdown-item>

                <!-- TEST: draft, scheduled -->
                <el-dropdown-item
                  v-if="iam.test.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="testCampaign(scope.row)"
                  >
                    <i class="ti ti-test-pipe text-green-500"></i>
                    <span class="ml-2">Test</span>
                  </div>
                </el-dropdown-item>

                <!-- SCHEDULE: draft -->
                <el-dropdown-item
                  v-if="iam.schedule.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="scheduleCampaign(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-purple-500"></i>
                    <span class="ml-2">Schedule</span>
                  </div>
                </el-dropdown-item>

                <!-- RESCHEDULE: scheduled -->
                <el-dropdown-item
                  v-if="iam.reschedule.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="rescheduleCampaign(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-purple-500"></i>
                    <span class="ml-2">Reschedule</span>
                  </div>
                </el-dropdown-item>

                <!-- CANCEL SCHEDULE: scheduled -->
                <el-dropdown-item
                  v-if="iam.cancel.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="cancelSchedule(scope.row)"
                  >
                    <i class="ti ti-clock-2 text-red-500"></i>
                    <span class="ml-2">Cancel</span>
                  </div>
                </el-dropdown-item>

                <!-- SEND NOW: draft -->
                <el-dropdown-item
                  v-if="iam.send.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="sendCampaign(scope.row)"
                  >
                    <i class="ti ti-send text-green-500"></i>
                    <span class="ml-2">Send Now</span>
                  </div>
                </el-dropdown-item>

                <!-- EDIT: draft, scheduled -->
                <el-dropdown-item
                  v-if="iam.edit.includes(checkStatus(scope.row))"
                >
                  <NuxtLink
                    class="item-menu flex items-center no-select"
                    :to="`/direct/campaign/email/edit/${scope.row.uuid}`"
                  >
                    <i class="ti ti-edit text-yellow-500"></i>
                    <span class="ml-2">Edit</span>
                  </NuxtLink>
                </el-dropdown-item>

                <!-- ARCHIVE: draft, sent -->
                <el-dropdown-item
                  v-if="iam.archive.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select"
                    @click="archiveCampaign(scope.row)"
                  >
                    <i class="ti ti-archive text-blue-500"></i>
                    <span class="ml-2">Archive</span>
                  </div>
                </el-dropdown-item>

                <!-- RESTORE: archived -->
                <el-dropdown-item
                  v-if="iam.restore.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center no-select"
                    @click="restoreCampaign(scope.row)"
                  >
                    <i class="ti ti-rotate-2 text-green-400"></i>
                    <span class="ml-2">Restore</span>
                  </div>
                </el-dropdown-item>

                <!-- DELETE: draft, archived -->
                <el-dropdown-item
                  class="border-t border-gray-300"
                  v-if="iam.delete.includes(checkStatus(scope.row))"
                >
                  <div
                    class="item-menu flex items-center"
                    @click="deleteCampaign(scope.row)"
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

      <!-- Sent Table -->
      <el-table
        v-if="tableVisible"
        v-show="activeStatus === 'sent'"
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
            <div class="mb-8">
              No records found in {{ activeStatus }} group.
            </div>
          </div>
        </template>

        <!-- PADDING -->
        <el-table-column label="" width="10" />

        <!-- TITLE -->
        <el-table-column label="Title" prop="title" sortable>
          <template slot-scope="scope">
            <div
              class="cursor-pointer k-title text-blue-500 text-base"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.title }}
            </div>
            <div
              class="cursor-pointer k-subtitle"
              @click="viewDetail(scope.row)"
            >
              {{ scope.row.subject }}
            </div>
          </template>
        </el-table-column>

        <!-- CLICKED -->
        <el-table-column width="120" label="Click" sortable>
          <template slot-scope="scope">
            <span>
              {{ scope.row.overview?.ClickedCount }}
            </span>
          </template>
        </el-table-column>

        <!-- DELIVERED -->
        <el-table-column width="120" label="Delivered" sortable>
          <template slot-scope="scope">
            <span>
              {{ scope.row.overview?.DeliveredCount }}
            </span>
          </template>
        </el-table-column>

        <!-- OPENED -->
        <el-table-column width="120" label="Opened" sortable>
          <template slot-scope="scope">
            <span>
              {{ scope.row.overview?.OpenedCount }}
            </span>
          </template>
        </el-table-column>

        <!-- PROCESSED -->
        <el-table-column width="120" label="Processed" sortable>
          <template slot-scope="scope">
            <span>
              {{ scope.row.overview?.ProcessedCount }}
            </span>
          </template>
        </el-table-column>

        <!-- SENDTIMESTART -->
        <el-table-column width="150" label="Send Time" sortable>
          <template slot-scope="scope">
            <div class="k-title">
              {{ formatEpochToDate(scope.row.overview?.SendTimeStart) }}
            </div>
            <div class="k-subtitle">
              {{ formatEpochToTime(scope.row.overview?.SendTimeStart) }}
            </div>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column
          label="Actions"
          width="190"
          v-if="activeStatus !== 'all'"
        >
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
                <!-- STATISTICS: sent -->
                <el-dropdown-item>
                  <NuxtLink
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    :to="`/direct/campaign/email/detail/${scope.row.uuid}`"
                  >
                    <i class="ti ti-chart-bar text-green-500"></i>
                    <span class="ml-2">Statistics</span>
                  </NuxtLink>
                </el-dropdown-item>

                <!-- DUPLICATE: draft, scheduled, sent, archived -->
                <el-dropdown-item>
                  <div
                    class="item-menu flex items-center no-select text-gray-500 text-sm"
                    @click="duplicateCampaign(scope.row)"
                  >
                    <i class="ti ti-copy text-purple-500"></i>
                    <span class="ml-2">Duplicate</span>
                  </div>
                </el-dropdown-item>

                <!-- ARCHIVE: draft, sent -->
                <el-dropdown-item>
                  <div
                    class="item-menu flex items-center no-select"
                    @click="archiveCampaign(scope.row)"
                  >
                    <i class="ti ti-archive text-blue-500"></i>
                    <span class="ml-2">Archive</span>
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
          :page-sizes="[8, 10, 25, 50, 100]"
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
        <el-button type="primary" @click="submitSchedule">
          {{ scheduleForm.isReschedule ? 'Reschedule' : 'Schedule' }}
        </el-button>
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
      rowPage: 8,
      dialog: false,

      activeStatus: 'all',
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

      iam: {
        statistic: ['sent'],
        duplicate: ['draft', 'scheduled', 'sending', 'sent', 'archived'],
        test: ['draft', 'scheduled'],
        schedule: ['draft'],
        reschedule: ['scheduled'],
        cancel: ['scheduled'],
        send: ['draft'],
        edit: ['draft', 'scheduled'],
        archive: ['draft', 'sent'],
        restore: ['archived'],
        delete: ['draft', 'archived'], // note: only previously-draft-archived can be deleted
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
    this.$root.$on(`flag-${this.$route.name}`, this.handleReload)
  },

  beforeDestroy() {
    this.$root.$off(`flag-${this.$route.name}`, this.handleReload)
  },

  methods: {
    handleReload() {
      this.currentPage = 1
      this.dataSearch = ''
      this.rowPage = 9
      this.getData()
    },

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

    duplicateCampaign(item) {
      this.$confirm(`Duplicate campaign "${item.title}"?`, 'Confirmation', {
        confirmButtonText: 'Duplicate',
        type: 'info',
      })
        .then(() => {
          this.showMessage = false
          this.messageError = ''

          this.$notifier.showMessage({
            content: 'Duplicating campaign...',
            type: 'loading',
          })

          this.isLoading = true

          this.$store
            .dispatch('emailCampaign/duplicate', {
              uuid: item.uuid,
            })
            .then((res) => {
              if (res.status === 200) {
                this.activeStatus = 'draft'
                this.getData()

                this.$notifier.showMessage({
                  content: 'Campaign duplicated successfully.',
                  type: 'success',
                })
              } else {
                this.showMessage = true
                this.messageError =
                  res?.data?.data?.errors
                    ?.map((e) => Object.values(e)[0])
                    .join(', ') || 'Failed to duplicate campaign'

                this.$notifier.showMessage({
                  content: 'Failed to duplicate campaign.',
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
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
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

        this.showMessage = false
        this.messageError = ''

        this.$store.dispatch('emailCampaign/saveUserTest', {
          uuid: this.testForm.uuid,
          name: this.testForm.name,
          email: this.testForm.email,
        })

        this.isLoading = true

        this.$store
          .dispatch('emailCampaign/test', this.testForm)
          .then((res) => {
            if (res.status === 202) {
              this.$notifier.showMessage({
                content: 'Test email sent successfully.',
                type: 'success',
              })
            } else {
              this.$notifier.showMessage({
                content: 'Failed to send test email.',
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

    // submit schedule or reschedule
    submitSchedule() {
      this.$refs.scheduleForm.validate((valid) => {
        if (!valid) return

        this.showMessage = false
        this.messageError = ''

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
            if (res.status === 202) {
              this.activeStatus = 'scheduled'
              this.getData()

              this.$notifier.showMessage({
                content: 'Campaign scheduled successfully.',
                type: 'success',
              })
            } else {
              this.$notifier.showMessage({
                content: 'Failed to schedule campaign.',
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
            this.scheduleDialogVisible = false
          })
      })
    },

    cancelSchedule(item) {
      this.$confirm(
        `Cancel scheduled campaign "${item.title}"?`,
        'Confirmation',
        {
          confirmButtonText: 'OK',
          type: 'warning',
        }
      )
        .then(() => {
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
              if (res.status === 204) {
                this.activeStatus = 'draft'
                this.getData()

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
                  content: 'Failed to cancel schedule campaign.',
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
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
    },

    sendCampaign(item) {
      this.$confirm(`Send campaign "${item.title}"?`, 'Confirmation', {
        confirmButtonText: 'Send',
        type: 'info',
      })
        .then(() => {
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
                this.activeStatus = 'sending'
                this.getData()

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
                  content: 'Failed to send campaign.',
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
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
    },

    archiveCampaign(item) {
      this.$confirm(`Archive campaign "${item.title}"?`, 'Confirmation', {
        confirmButtonText: 'Archive',
        type: 'warning',
      })
        .then(() => {
          this.showMessage = false
          this.messageError = ''

          this.$notifier.showMessage({
            content: 'Archiving campaign...',
            type: 'loading',
          })

          this.isLoading = true

          this.$store
            .dispatch('emailCampaign/archive', {
              uuid: item.uuid,
            })
            .then((res) => {
              if (res.status === 204) {
                this.activeStatus = 'archived'
                this.getData()

                this.$notifier.showMessage({
                  content: 'Campaign archived successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Archiving campaign failed. Error : ' +
                    res?.data.data.message,
                  type: 'failed',
                })
              }

              this.$store.commit('user/SET_DROPDOWN', null)
            })
            .catch((e) => {
              console.error(e)
              this.showMessage = true
              this.messageError = 'Error: ' + e.message
            })
            .finally(() => {
              this.isLoading = false
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
    },

    restoreCampaign(item) {
      this.$confirm(`Restore campaign "${item.title}"?`, 'Confirmation', {
        confirmButtonText: 'Restore',
        type: 'info',
      })
        .then(() => {
          this.showMessage = false
          this.messageError = ''

          this.$notifier.showMessage({
            content: 'Restoring campaign...',
            type: 'loading',
          })

          this.isLoading = true

          this.$store
            .dispatch('emailCampaign/restore', {
              uuid: item.uuid,
            })
            .then((res) => {
              if (res.status === 200) {
                const prevStatus = res?.data?.data?.prevStatus

                if (prevStatus == 2) {
                  this.activeStatus = 'sent'
                } else {
                  this.activeStatus = 'draft'
                }

                this.getData()

                this.$notifier.showMessage({
                  content: 'Campaign restored successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Restoring campaign failed. Error : ' +
                    res?.data.data.message,
                  type: 'failed',
                })
              }

              this.$store.commit('user/SET_DROPDOWN', null)
            })
            .catch((e) => {
              console.error(e)
              this.showMessage = true
              this.messageError = 'Error: ' + e.message
            })
            .finally(() => {
              this.isLoading = false
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
        })
    },

    deleteCampaign(item) {
      this.$confirm(`Delete campaign "${item.title}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(() => {
          this.showMessage = false
          this.messageError = ''

          this.$notifier.showMessage({
            content: 'Deleting campaign...',
            type: 'loading',
          })

          this.isLoading = true

          this.$store
            .dispatch('emailCampaign/delete', {
              uuid: item.uuid,
            })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Campaign deleted successfully.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Deleting campaign failed. Error : ' +
                    res?.data.data.message,
                  type: 'failed',
                })
              }

              this.$store.commit('user/SET_DROPDOWN', null)
            })
            .catch((e) => {
              console.error(e)
              this.showMessage = true
              this.messageError = 'Error: ' + e.message
            })
            .finally(() => {
              this.isLoading = false
            })
        })
        .catch(() => {
          this.$store.commit('user/SET_DROPDOWN', null)
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

    formatTime(date) {
      if (!date) return '-'
      return new Date(date).toLocaleTimeString()
    },

    formatEpochToDate(s) {
      if (!s || isNaN(s)) return '-'
      const d = new Date(s * 1000)

      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0') // 0-based
      const year = d.getFullYear()

      return `${day}/${month}/${year}`
    },

    formatEpochToTime(s) {
      if (!s || isNaN(s)) return '-'
      const d = new Date(s * 1000)

      const hours = String(d.getHours()).padStart(2, '0')
      const minutes = String(d.getMinutes()).padStart(2, '0')
      const seconds = String(d.getSeconds()).padStart(2, '0')

      return `${hours}:${minutes}:${seconds}`
    },

    checkStatus(item) {
      const status = item.status

      if (status == 0) {
        return 'draft'
      } else if (status == 1) {
        return 'scheduled'
      } else if (status == 6) {
        return 'sending'
      } else if (status == 2) {
        return 'sent'
      } else if (status == -1) {
        return 'archived'
      }
    },

    tagColor(item) {
      const status = item.status

      if (status == 0) {
        return 'info'
      } else if (status == 1) {
        return ''
      } else if (status == 6) {
        return 'warning'
      } else if (status == 2) {
        return 'success'
      } else if (status == -1) {
        return 'danger'
      }
    },

    dateColumnLabel() {
      // example: global filter / current view
      if (this.activeStatus === 'scheduled') return 'Scheduled'
      return 'Created'
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
      }
      .k-subtitle {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 13px;
        color: #999;
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
