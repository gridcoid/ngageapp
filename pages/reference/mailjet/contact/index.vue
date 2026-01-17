<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-id-badge-2 text-gray-400 mr-2"></i> Mailjet Contacts
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Data shared across all organizations.
        <i class="ti ti-alert-triangle text-red-500"></i>
        <span class="text-red-500">Do not delete</span> unless you know what
        you’re doing.
      </div>
    </div>

    <div class="body-content flex flex-col">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataContacts"
        class="w-full k-table"
      >
        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- id -->
        <el-table-column label="ID" width="150" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-400 font-mono">
              {{ scope.row.ID }}
            </div>
          </template>
        </el-table-column>

        <!-- name -->
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              <NuxtLink
                :to="`/reference/mailjet/contact/detail/${scope.row.ID}`"
                class="text-blue-500 hover:text-blue-600"
              >
                {{ scope.row.Name }}
              </NuxtLink>
            </div>
          </template>
        </el-table-column>

        <!-- email -->
        <el-table-column label="Email" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Email }}
            </div>
          </template>
        </el-table-column>

        <!-- DeliveredCount -->
        <el-table-column label="Delivered" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.DeliveredCount }}
            </div>
          </template>
        </el-table-column>

        <!-- IsExcludedFromCampaigns -->
        <el-table-column label="Excluded" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.IsExcludedFromCampaigns }}
            </div>
          </template>
        </el-table-column>

        <!-- IsSpamComplaining -->
        <el-table-column label="Spam Complain" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.IsSpamComplaining }}
            </div>
          </template>
        </el-table-column>

        <!-- created at -->
        <el-table-column label="Created" width="150" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.CreatedAt?.split('T')[0] }}
            </div>
          </template>
        </el-table-column>

        <!-- ACTIONS -->
        <el-table-column width="120">
          <template slot-scope="scope">
            <!-- delete button -->
            <el-button
              type="danger"
              size="small"
              @click="deleteContact(scope.row)"
            >
              <!-- icon trash -->
              <i class="ti ti-alert-triangle"></i>
              Delete
            </el-button>
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
  name: 'MailjetContactPage',
  layout: 'default',
  head() {
    return {
      title: 'Mailjet Contact - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      radio: 'name_asc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      isLoading: false,
      rowPage: 10,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.user.sidebar,
      dataContacts: (state) => state.mailjetContact.dataList,
      totalList: (state) => state.mailjetContact.totalList,
      totalPages: (state) => state.mailjetContact.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const data = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('mailjetContact/list', data).finally(() => {
        this.isLoading = false
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

    deleteContact(data) {
      this.$confirm(`Delete email "${data.Email}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Delete email...',
            type: 'loading',
          })

          this.$store
            .dispatch('mailjetContact/delete', {
              ID: data.ID,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Delete email success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Delete email failed. Error : ' + res?.data.data.message,
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
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
    dataContacts(val) {
      // console.log(val)
      // sample data:
      /*
      [
        {
          "CreatedAt": "2026-01-07T09:32:32Z",
          "DeliveredCount": 0,
          "Email": "febe@example.com",
          "ExclusionFromCampaignsUpdatedAt": "",
          "ID": 12338756133,
          "IsExcludedFromCampaigns": false,
          "IsOptInPending": false,
          "IsSpamComplaining": false,
          "LastActivityAt": "",
          "LastUpdateAt": "",
          "Name": "Geraldin Febe",
          "UnsubscribedAt": "",
          "UnsubscribedBy": ""
        }
      ]
      */
    },
  },
}
</script>

<style lang="scss" scoped src="../../../reference/shared.scss" />
