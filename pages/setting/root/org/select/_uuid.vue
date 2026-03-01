<template>
  <div class="containers p-6 w-full">
    <div class="mb-6">
      <Back />
    </div>

    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-users text-gray-500 mr-2" />
        Select User for {{ data?.name }} Organization
      </div>

      <div class="flex" v-if="selectedUsers.length > 0">
        <ButtonDefault
          icon="plus"
          text="Add Selected User"
          class="ml-4"
          type="secondary"
          @click.native="addSelected"
        />
      </div>
      <div v-else>&nbsp;</div>
    </div>

    <!-- Filters -->
    <div class="flex items-center filter-content justify-between">
      <div />
      <div class="flex items-center">
        <button
          type="button"
          class="k-btn flex items-center"
          @click="showDialog"
        >
          <img src="~/assets/images/campaign/icon_filter.svg" class="mr-2" />
          Sort
        </button>

        <div class="hr-vertical" />

        <div class="search-card">
          <transition name="slide">
            <div
              v-if="!showSearch"
              class="hide-search flex items-center justify-center cursor-pointer"
              @click="showSearch = true"
            >
              <IconSearch />
            </div>
            <div v-else class="show-search flex items-center">
              <form @submit.prevent="searchUser" style="width: 100%">
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find user..."
                  @change="searchUser"
                />
              </form>
              <IconSearch @click.native="searchUser" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- TABLE -->
    <el-table
      v-if="tableVisible"
      v-loading="isLoading"
      :data="dataUsers"
      stripe
      class="w-full k-table"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
      <el-table-column label="" width="10" />
      <el-table-column type="selection" width="55" />

      <el-table-column label="Name" sortable>
        <template slot-scope="scope">
          <div class="k-title text-blue-500">
            {{ scope.row.firstName }} {{ scope.row.lastName }}
          </div>
          <div class="k-subtitle">
            {{ scope.row.email }}
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Username" prop="username" width="160" />

      <el-table-column label="Status" width="140">
        <template slot-scope="scope">
          <span :class="scope.row.isActive ? 'text-blue-500' : 'text-red-500'">
            {{ scope.row.isActive ? 'Active' : 'Inactive' }}
          </span>
        </template>
      </el-table-column>
    </el-table>

    <div class="flex items-center justify-center mt-4">
      <el-pagination
        background
        :current-page.sync="currentPage"
        :page-size="rowPage"
        :total="totalList"
        layout="total, sizes, prev, pager, next"
        @size-change="changeRowPage"
        @current-change="changePage"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OrgSelectUserPage',
  layout: 'default',

  data() {
    return {
      tableVisible: true,
      data: {},
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      rowPage: 10,
      isLoading: false,
      selectedUsers: [],
    }
  },

  computed: {
    ...mapState({
      dataUsers: (s) => s.rootUser.dataList,
      totalList: (s) => s.rootUser.totalList,
      dataDetail: (s) => s.rootOrg.dataDetail,
    }),
  },

  mounted() {
    this.getDetail()
    this.getData()
  },

  methods: {
    getDetail() {
      this.$store.dispatch('rootOrg/rootDetail', {
        uuid: this.$route.params.uuid,
      })
    },

    getData() {
      this.isLoading = true

      this.$store
        .dispatch('rootUser/rootListNotInOrg', {
          uuid: this.$route.params.uuid,
          page: this.currentPage,
          size: this.rowPage,
          name: this.dataSearch,
          sort: this.radio,
        })
        .finally(() => (this.isLoading = false))
    },

    searchUser() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    showDialog() {
      this.dialog = !this.dialog
    },

    handleSelectionChange(val) {
      this.selectedUsers = val
    },

    addSelected() {
      const payload = {
        orgUuid: this.$route.params.uuid,
        userUuids: this.selectedUsers.map((u) => u.uuid),
      }

      this.$store.dispatch('rootUser/addUsersToOrgBulk', payload).then(() => {
        this.selectedUsers = []
        this.$refs.multipleTable.clearSelection()
        this.getData()
      })
    },

    changePage(p) {
      this.currentPage = p
      this.getData()
    },

    changeRowPage(p) {
      this.rowPage = p
      this.currentPage = 1
      this.getData()
    },
  },
}
</script>
