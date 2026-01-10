<template>
  <div class="kg-containers p-6 w-full">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-mail text-gray-400 mr-2"></i> Email Template
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        View the list of email templates available in the system.
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
        :data="dataEmailTemplates"
        class="w-full k-table"
      >
        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- id -->
        <el-table-column label="ID" width="100" sortable>
          <template slot-scope="scope">
            <div class="font-cabin font-base text-sm text-gray-400 font-mono">
              {{ scope.row.ID }}
            </div>
          </template>
        </el-table-column>

        <!-- name -->
        <el-table-column label="Name" width="300" sortable>
          <template slot-scope="scope">
            <div class="font-cabin font-base text-sm text-gray-700">
              {{ scope.row.Name }}
            </div>
          </template>
        </el-table-column>

        <!-- author -->
        <el-table-column label="Author" width="120" sortable>
          <template slot-scope="scope">
            <div class="font-cabin font-base text-sm text-gray-700">
              {{ scope.row.Author }}
            </div>
          </template>
        </el-table-column>

        <!-- description -->
        <el-table-column label="Description">
          <template slot-scope="scope">
            <div class="font-cabin font-base text-sm text-gray-700">
              {{ scope.row.Description }}
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
  name: 'EmailTemplatePage',
  layout: 'default',
  head() {
    return {
      title: 'Email Template - ' + this.$config.appName,
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
      dataEmailTemplates: (state) => state.emailTemplate.dataList,
      totalList: (state) => state.emailTemplate.totalList,
      totalPages: (state) => state.emailTemplate.totalPages,
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

      this.$store.dispatch('emailTemplate/mailjetList', data).finally(() => {
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
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
    dataEmailTemplates(val) {
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

<style lang="scss" scoped src="../../../reference/shared.scss" />
