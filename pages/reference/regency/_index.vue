<template>
  <div class="kg-containers p-6 w-full max-w-5xl">
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-building-skyscraper text-gray-400 mr-2"></i> Regencies
      </div>
    </div>

    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        View the list of regencies available in the system.
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
        :data="dataRegencies"
        class="w-full k-table"
      >
        <!-- padding -->
        <el-table-column label="" width="10" />

        <!-- ID -->
        <el-table-column label="ID" width="80">
          <template slot-scope="scope">
            <div
              class="font-cabin font-semibold text-sm text-gray-400 font-mono"
            >
              {{ scope.row.id }}
            </div>
          </template>
        </el-table-column>

        <!-- Code (clickable) -->
        <el-table-column label="Ref" width="130" sortable>
          <template slot-scope="scope">
            <NuxtLink
              :to="`/reference/district/${scope.row.code}`"
              class="text-purple-600 font-cabin font-mono font-semibold text-sm"
            >
              {{ scope.row.code }} <i class="ti ti-caret-right" />
            </NuxtLink>
          </template>
        </el-table-column>

        <!-- Name -->
        <el-table-column label="Name" sortable>
          <template slot-scope="scope">
            <div class="font-cabin font-semibold text-sm text-gray-700">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>

        <!-- Latitude -->
        <el-table-column label="Lat" width="170">
          <template slot-scope="scope">
            <div class="font-cabin text-xs text-gray-600 font-mono">
              {{ scope.row.lat }}
            </div>
          </template>
        </el-table-column>

        <!-- Longitude -->
        <el-table-column label="Lng" width="170">
          <template slot-scope="scope">
            <div class="font-cabin text-xs text-gray-600 font-mono">
              {{ scope.row.lng }}
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
  name: 'RegencyPage',
  layout: 'default',
  head() {
    return {
      title: 'Regencies - ' + this.$config.appName,
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
      dataRegencies: (state) => state.regency.dataList,
      totalList: (state) => state.regency.totalList,
      totalPages: (state) => state.regency.totalPages,
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true

      const data = {
        provinceCode: this.$route.params.index || '',
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.$store.dispatch('regency/list', data).finally(() => {
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
  },
}
</script>

<style lang="scss" scoped src="../shared.scss" />
