<template>
  <div class="kg-containers p-6 w-full max-w-4xl">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti ti-building-mosque text-gray-400 mr-2"></i> Religions
        Management
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        View the list of religions available in the system.
      </div>
    </div>

    <div v-if="dataReligions.length > 0" class="body-content flex flex-col">
      <el-table
        v-if="tableVisible"
        v-loading="isLoading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        fit
        lazy
        stripe
        :data="dataReligions"
        class="w-full k-table"
      >
        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- id -->
        <el-table-column label="ID" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-400 font-mono"
            >
              {{ scope.row.id }}
            </div>
          </template>
        </el-table-column>

        <!-- name -->
        <el-table-column label="Name" width="200">
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
      </el-table>
    </div>

    <div v-else class="flex flex-col items-center mt-24 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1 mt-2">No records found.</div>
      <div class="subtitle-1">
        Seems like you haven’t added any religion yet.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReligionPage',
  layout: 'default',
  head() {
    return {
      title: 'Religions - ' + this.$config.appName,
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
      dataReligions: (state) => state.religion.dataList,
      totalList: (state) => state.religion.totalList,
      totalPages: (state) => state.religion.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      this.$store.dispatch('religion/list').finally(() => {
        this.isLoading = false
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
  },
}
</script>

<style lang="scss" scoped src="./shared.scss" />
