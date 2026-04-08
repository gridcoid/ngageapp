<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-text text-gray-400 mr-2"></i> Mailjet Campaign Drafts
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Data shared across all organizations.
        <i class="ti ti-alert-triangle text-gray-500"></i>
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
        :data="dataMailjetCampaigns"
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

        <!-- title -->
        <el-table-column label="Title" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Title }}
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
              @click="deleteCampaign(scope.row)"
            >
              <!-- icon trash -->
              <i class="ti ti-alert-triangle"></i>
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>

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
  name: 'MailjetCampaignPage',
  layout: 'default',
  head() {
    return {
      title: 'Mailjet Campaign - ' + this.$config.appName,
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
      dataMailjetCampaigns: (state) => state.mailjetCampaignDraft.dataList,
      totalList: (state) => state.mailjetCampaignDraft.totalList,
      totalPages: (state) => state.mailjetCampaignDraft.totalPages,
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

      this.$store
        .dispatch('mailjetCampaignDraft/list', data)
        .finally(() => (this.isLoading = false))
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

    deleteCampaign(data) {
      this.$confirm(`Delete campaign "${data.Title}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Deleting campaign...',
            type: 'loading',
          })

          this.$store
            .dispatch('mailjetCampaignDraft/delete', { ID: data.ID })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Campaign deleted successfully.',
                  type: 'success',
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
    dataMailjetCampaigns(val) {
      // console.log(val)
      // sample data:
      /*
      [
        {
          "ID": 2031946,
          "OwnerId": 1459354,
          "EditMode": 1,
          "Name": "Rakun",
          "Locale": "en_US",
          "Author": "Grid Story",
          "Presets": "",
          "Previews": [
            170581038
          ],
          "OwnerType": "user",
          "Copyright": "Mailjet",
          "Description": "",
          "Purposes": [
            "marketing"
          ],
          "Categories": [
            "e-commerce"
          ],
          "IsStarred": false,
          "IsTextPartGenerationEnabled": true,
          "CreatedAt": "2020-12-03T05:21:11Z",
          "LastUpdatedAt": "2020-12-15T15:12:02Z",
          "LocaleList": [
            "en_US"
          ]
        }
      ]
      */
    },
  },
}
</script>

<style lang="scss" scoped src="../../reference/shared.scss" />
