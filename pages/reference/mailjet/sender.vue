<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-mailbox text-gray-400 mr-2"></i> Mailjet Email Senders
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Data shared across all organizations. Please login Mailjet for more
        details.
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
        :data="dataEmailSenders"
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

        <!-- email -->
        <el-table-column label="Email" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Email }}
            </div>
          </template>
        </el-table-column>

        <!-- IsDefaultSender -->
        <el-table-column label="Default Sender" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.IsDefaultSender }}
            </div>
          </template>
        </el-table-column>

        <!-- name -->
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Name }}
            </div>
          </template>
        </el-table-column>

        <!-- status -->
        <el-table-column label="Status" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Status }}
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

        <!--  -->
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
  name: 'MailjetSenderPage',
  layout: 'default',
  head() {
    return {
      title: 'Mailjet Sender - ' + this.$config.appName,
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
      dataEmailSenders: (state) => state.mailjetSender.dataList,
      totalList: (state) => state.mailjetSender.totalList,
      totalPages: (state) => state.mailjetSender.totalPages,
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

      this.$store.dispatch('mailjetSender/list', data).finally(() => {
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
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
    dataEmailSenders(val) {
      // console.log(val)
      // sample data:
      /*
      [
        {
          "CreatedAt": "2025-09-20T05:24:48Z",
          "DNSID": -1,
          "Email": "noreply@rockaroma.id",
          "EmailType": "unknown",
          "Filename": "",
          "ID": 6453945156,
          "IsDefaultSender": false,
          "Name": "",
          "Status": "Inactive"
        }
      ]
      */
    },
  },
}
</script>

<style lang="scss" scoped src="../../reference/shared.scss" />
