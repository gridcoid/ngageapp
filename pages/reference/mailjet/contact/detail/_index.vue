<template>
  <div class="kg-containers p-6 w-full">
    <div class="mb-6">
      <Back />
    </div>

    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-folder text-gray-400 mr-2"></i> Mailjet Contact Lists -
        Contact ID
        {{ $route.params.index }}
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
        :data="dataContactLists"
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
                :to="`/reference/mailjet/contact-list/detail/${scope.row.ID}`"
                class="text-blue-500 hover:text-blue-500"
              >
                {{ getListName(scope.row.Name) }}
              </NuxtLink>
            </div>
          </template>
        </el-table-column>

        <!-- Author -->
        <el-table-column label="Author">
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              {{ getListAuthor(scope.row.Name) }}
            </div>
          </template>
        </el-table-column>

        <!-- address -->
        <el-table-column label="Address" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700">
              <span class="font-mono">{{ scope.row.Address }}</span>
              <span class="text-gray-400">@lists.mailjet.com</span>
            </div>
          </template>
        </el-table-column>

        <!-- subscriber count -->
        <el-table-column label="Subscriber Count" sortable>
          <template slot-scope="scope">
            <div class="font-cabin text-sm text-gray-700 text-sm">
              {{ scope.row.SubscriberCount }}
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
              @click="deleteContactList(scope.row)"
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
  name: 'MailjetContactListPage',
  layout: 'default',
  head() {
    return {
      title: 'Mailjet Contact List - ' + this.$config.appName,
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
      dataContactLists: (state) => state.mailjetContactList.dataList,
      totalList: (state) => state.mailjetContactList.totalList,
      totalPages: (state) => state.mailjetContactList.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const data = {
        contactID: this.$route.params.id,
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store
        .dispatch('mailjetContactList/list', data)
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

    deleteContactList(data) {
      this.$confirm(`Delete contact list "${data.Name}"?`, 'Confirmation', {
        confirmButtonText: 'Delete',
        type: 'warning',
      })
        .then(() => {
          this.$notifier.showMessage({
            content: 'Deleting contact list...',
            type: 'loading',
          })

          this.$store
            .dispatch('mailjetContactList/delete', { ID: data.ID })
            .then((res) => {
              if (res.status === 204) {
                this.getData()

                this.$notifier.showMessage({
                  content: 'Contact list deleted successfully.',
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

    getListName(text) {
      const match = text.match(
        /^(.+?)\s+(\{[a-z]+\.[a-z]+\.org\.[1-9][0-9]*\})$/
      )
      return match && match[1] ? match[1] : text
    },

    getListAuthor(text) {
      const match = text.match(
        /^(.+?)\s+(\{[a-z]+\.[a-z]+\.org\.[1-9][0-9]*\})$/
      )
      return match && match[2] ? match[2].replace(/[{}]/g, '') : ''
    },
  },
  watch: {
    sidebar() {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
    },
    dataContactLists(val) {
      // console.log(val)
      // sample data:
      /*
      [
        {
          "Address": "lgbnd47y6",
          "CreatedAt": "2026-01-07T08:33:26Z",
          "ID": 10566000,
          "IsDeleted": false,
          "Name": "Media Entertainment (Local)",
          "SubscriberCount": 1
        }
      ]
      */
    },
  },
}
</script>

<style lang="scss" scoped src="../../../../reference/shared.scss" />
