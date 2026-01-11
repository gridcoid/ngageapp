<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-template text-gray-400 mr-2"></i> Mailjet Email
        Templates
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
        :data="dataMailjetTemplates"
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
        <el-table-column label="Name" width="300" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Name }}
            </div>
          </template>
        </el-table-column>

        <!-- author -->
        <el-table-column label="Author" width="200" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Author }}
            </div>
          </template>
        </el-table-column>

        <!-- description -->
        <el-table-column label="Description">
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ scope.row.Description }}
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
              @click="deleteTemplate(scope.row)"
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
  name: 'MailjetTemplatePage',
  layout: 'default',
  head() {
    return {
      title: 'Mailjet Template - ' + this.$config.appName,
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
      dataMailjetTemplates: (state) => state.mailjetTemplate.dataList,
      totalList: (state) => state.mailjetTemplate.totalList,
      totalPages: (state) => state.mailjetTemplate.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const data = {
        districtCode: this.$route.params.index || '',
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('mailjetTemplate/list', data).finally(() => {
        this.isLoading = false
      })
    },

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

    deleteTemplate(data) {
      this.$confirm(`Delete template "${data.Name}"?`, 'Confirmation', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Delete template...',
            type: 'loading',
          })

          this.$store
            .dispatch('mailjetTemplate/delete', {
              ID: data.ID,
            })
            .then((res) => {
              if (res?.data.status.code === 200) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Delete template success.',
                  type: 'success',
                })
              } else {
                this.$notifier.showMessage({
                  content:
                    'Delete template failed. Error : ' + res?.data.data.message,
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
    dataMailjetTemplates(val) {
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
          "Presets": "{\"h1\":{\"fontFamily\":\"Arial\"},\"h2\":{\"fontFamily\":\"Arial\"},\"h3\":{\"fontFamily\":\"Arial\"},\"p\":{\"fontFamily\":\"Arial\"},\"a\":{\"fontFamily\":\"Arial\"}}",
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
