<template>
  <div class="kg-containers p-6 w-full max-w-5xl">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-address-book text-gray-400 mr-2"></i>
        Contact Types
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        View the list of contact types available in the system. Data shared
        across all organizations.
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
        :data="dataContactTypes"
        class="w-full k-table"
      >
        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- id -->
        <el-table-column label="ID" width="80" sortable>
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-400 font-mono"
            >
              {{ scope.row.id }}
            </div>
          </template>
        </el-table-column>

        <!-- name -->
        <el-table-column label="Name" width="200" sortable>
          <template slot-scope="scope">
            <div class="font-cabin font-semibold text-sm text-gray-700">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>

        <!-- keyword -->
        <el-table-column label="Keyword">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-400 font-mono"
            >
              {{ scope.row.aliases }}
            </div>
          </template>
        </el-table-column>

        <!-- Num of audiences -->
        <el-table-column label="Audiences" width="100">
          <template slot-scope="scope">
            <div class="font-cabin text-xs text-gray-600 font-mono">
              <el-tag
                class="num"
                :type="scope.row.audiencesCount > 0 ? 'success' : 'danger'"
              >
                {{ scope.row.audiencesCount }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactTypePage',
  layout: 'default',
  head() {
    return {
      title: 'Contact Types - ' + this.$config.appName,
    }
  },
  data() {
    return {
      tableVisible: true,
      showSearch: false,
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.user.sidebar,
      dataContactTypes: (state) => state.contactType.dataList,
      totalList: (state) => state.contactType.totalList,
      totalPages: (state) => state.contactType.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      this.$store
        .dispatch('contactType/list')
        .finally(() => (this.isLoading = false))
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

<style lang="scss" scoped src="./shared.scss" />
