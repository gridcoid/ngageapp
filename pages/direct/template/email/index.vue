<template>
  <div class="kg-containers p-6 w-full">
    <!-- Header -->
    <div class="flex items-center header-content">
      <div class="title-header">
        <i class="ti ti-mail text-gray-400 mr-2" />
        Email Templates
      </div>
      <div class="flex">
        <ButtonDefault
          icon="plus"
          text="Create New"
          class="ml-4"
          type="secondary"
          @click.native="toCreate()"
        />
      </div>
    </div>

    <!-- Filter / Search -->
    <div class="flex items-center filter-content justify-between">
      <div class="desc-page">
        Manage reusable email templates for marketing, transactional, and
        automation campaigns.
      </div>

      <div class="flex items-center">
        <button
          type="button"
          class="k-btn focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center items-center justify-center"
          @click="showDialog()"
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
              @mouseover="showSearch = true"
              @click="showSearch = !showSearch"
            >
              <IconSearch />
            </div>
            <div v-else class="show-search flex items-center">
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchTemplate()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-1"
                  placeholder="Find template..."
                  @change="searchTemplate()"
                />
              </form>
              <IconSearch @click.native="searchTemplate()" />
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- List -->
    <div v-if="dataTemplates.length > 0" class="body-content flex flex-col">
      <div
        v-for="(item, index) in dataTemplates"
        :key="item.uuid"
        class="card-list flex items-center gap-4"
      >
        <div
          class="flex-1 flex items-center cursor-pointer"
          @click="viewDetail(item)"
        >
          <img
            src="~/assets/images/template.png"
            class="thumbnail opacity-90 hover:opacity-100"
          />
          <div class="name-data flex flex-col">
            <span>{{ item.name }}</span>
            <span v-if="!!item.description">{{ item.description }}</span>
          </div>
        </div>

        <div class="flex-1 name-data flex flex-col">
          <span>{{ item.subject }}</span>
          <span class="mb-1">{{ item.from }}</span>
          <span v-if="!!item.replyTo" class="text-sm text-gray-300"
            >Reply to: {{ item.replyTo }}</span
          >
        </div>

        <div class="w-[120px] flex items-center">
          <Dropdown
            :index-list="index"
            name-btn="Detail"
            icons="preview"
            color-text="#1B63D4"
            class="mr-6"
            @preview="viewDetail(item)"
          >
            <template slot="body">
              <div
                class="item-menu flex items-center text-gray-500 text-sm"
                @click="toDuplicate(item)"
              >
                <i class="ti ti-copy text-purple-500"></i>
                <span class="ml-3">Duplicate</span>
              </div>

              <NuxtLink
                class="item-menu flex items-center text-gray-500 text-sm"
                :to="`/direct/template/email/edit/${item.uuid}`"
              >
                <i class="ti ti-edit text-yellow-500"></i>
                <span class="ml-3">Edit</span>
              </NuxtLink>

              <div
                class="item-menu flex items-center text-gray-500 text-sm"
                style="
                  border-bottom: 1px solid #e2e2e2;
                  border-end-end-radius: 5px;
                  border-end-start-radius: 5px;
                "
                @click="deleteTemplate(item)"
              >
                <i class="ti ti-trash text-red-500"></i>
                <span class="ml-3">Delete</span>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>

      <!-- Pagination -->
      <Pagination
        class="k-pagination"
        :value="currentPage"
        :total-page="totalPages"
        :total="totalList"
        @input="changePage"
        @rowPage="changeRowPage"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="flex flex-col items-center mt-24 no-data">
      <img src="~/assets/images/empty_table.png" width="150" />
      <div class="title-1 mt-2">No templates found.</div>
      <div class="subtitle-1">
        Create your first email template to get started.
      </div>
      <div class="flex mt-4">
        <button
          class="flex items-center justify-center save-btn no-select"
          @click="toCreate()"
        >
          <IconPlus bg-color="#1B63D4" />
          <div class="name-btn">Create New Template</div>
        </button>
      </div>
    </div>

    <!-- Sort Modal -->
    <transition name="slide">
      <ModalSort
        v-if="dialog"
        @close-modal="dialog = false"
        @save-filter="getData()"
        @reset-filter="resetFilter()"
      >
        <template #sort>
          <Accordion title="Sort by" show>
            <template #body>
              <el-radio v-model="radio" label="createdAt_desc">
                Newest
              </el-radio>
              <el-radio v-model="radio" label="createdAt_asc">
                Oldest
              </el-radio>
            </template>
          </Accordion>
        </template>
      </ModalSort>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EmailTemplateListPage',
  layout: 'default',

  head() {
    return {
      title: 'Email Templates - ' + this.$config.appName,
    }
  },

  data() {
    return {
      radio: 'createdAt_desc',
      dataSearch: '',
      showSearch: false,
      currentPage: 1,
      rowPage: 5,
      dialog: false,
      isLoading: false,
    }
  },

  computed: {
    ...mapState({
      dataTemplates: (state) => state.emailTemplate.dataList,
      totalList: (state) => state.emailTemplate.totalList,
      totalPages: (state) => state.emailTemplate.totalPages,
    }),
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      const payload = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        sort: this.radio,
      }

      this.isLoading = true
      this.$store
        .dispatch('emailTemplate/list', payload)
        .finally(() => (this.isLoading = false))
    },

    toCreate() {
      this.$router.push({ path: '/direct/template/email/create' })
    },

    searchTemplate() {
      this.currentPage = 1
      this.showSearch = false
      this.getData()
    },

    showDialog() {
      this.dialog = !this.dialog
    },

    resetFilter() {
      this.radio = 'createdAt_desc'
      this.getData()
    },

    changePage(page) {
      if (page > 0) {
        this.currentPage = page
        this.getData()
      }
    },

    changeRowPage(size) {
      this.rowPage = size
      this.getData()
    },

    viewDetail(item) {
      this.$router.push(`/direct/template/email/detail/${item.uuid}`)
    },

    toDuplicate(item) {
      this.$router.push(`/direct/template/email/duplicate/${item.uuid}`)
    },

    deleteTemplate(item) {
      this.$confirm(`Delete template "${item.name}"?`, 'Confirmation', {
        type: 'warning',
      }).then(() => {
        this.$notifier.showMessage({
          content: 'Deleting template...',
          type: 'loading',
        })

        this.$store
          .dispatch('emailTemplate/delete', { uuid: item.uuid })
          .then(() => {
            this.getData()
            this.$notifier.showMessage({
              content: 'Template deleted.',
              type: 'success',
            })
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.kg-containers {
  .header-content {
    .title-header {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
    }
    .btn-create {
      font-family: 'Cabin';
      width: 94px;
      font-size: 12px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .btn-create:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
  }
  .filter-content {
    margin-top: 20px;
    .status-filter {
      height: 44px;
      background: #ffffff;
      border: 1px solid #c3ced9;
      border-radius: 5px;
      padding-right: 8px;
      .card-filter {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        .name-status {
          font-family: 'Cabin';
          color: #454545;
          font-weight: 400;
          font-size: 16px;
          margin-left: 10px;
          line-height: 40px;
        }
      }
      .hr-vertical {
        height: 24px;
        border-right: 0px solid #e2e2e2;
      }
    }
    .date-filter {
      margin-left: 30px;
    }
    .layout-filter {
      //   margin-left: 20px;
      .name-filter {
        font-family: 'Cabin';
        color: #454545;
        font-weight: 400;
        font-size: 16px;
      }
      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 100%;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
      }
      .btn-icon:hover {
        background-color: rgb(243 244 246);
      }
    }
    .hr-vertical {
      border-left: 1px solid #e2e2e2;
      height: 24px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .k-btn {
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      height: 36px;
      width: 138px;
    }
    .k-btn:hover {
      background-color: rgb(243 244 246);
    }
    .search-card {
      .hide-search {
        width: 54px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
      }
      .show-search {
        width: 240px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 100px;
        padding-left: 15px;
        padding-right: 15px;
        -webkit-transition: width 0.3s ease-out;
        -moz-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out;
        .title-1 {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 180px;
        }
        .title-1:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  .desc-page {
    font-family: 'Cabin';
    font-weight: 400;
    font-size: 16px;
    color: #757575;
  }
  .body-content {
    margin-top: 30px;
    gap: 15px;
    .card-list {
      border-radius: 5px;
      border: 1px solid #c3ced9;
      background: #fff;
      height: 100%;
      width: 100%;
      .thumbnail {
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-top-left-radius: 5px;
        border-end-start-radius: 5px;
        margin-right: 20px;
      }
      .name-data > span:nth-child(1) {
        color: #5c6b7a;
        font-family: 'Cabin';
        font-size: 16px;
      }
      .name-data > span:nth-child(2) {
        color: #999;
        font-size: 14px;
      }
      .user-data {
        color: #7a8a99;
        font-family: 'Cabin';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        width: 180px;
        text-align: left;
      }
      .k-btn {
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        color: #1b63d4;
        font-size: 14px;
        height: 36px;
        width: 138px;
      }
      .k-btn:hover {
        background-color: rgb(243 244 246);
      }
    }
    .k-pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .no-data {
    .title-1 {
      font-family: 'Cabin';
      font-weight: 600;
      font-size: 20px;
      color: #454545;
      line-height: 24px;
    }
    .subtitle-1 {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #757575;
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 24px;
    }
    .save-btn {
      width: 220px;
      background: #ffffff;
      border: 1px solid #1b63d4;
      color: #1b63d4;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      margin-bottom: 100px;
      line-height: normal !important;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 10px;
      }
    }
    .save-btn:hover {
      background-color: rgb(243 244 246);
    }
  }
}
</style>
