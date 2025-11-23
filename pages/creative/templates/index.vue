<template>
  <div class="kg-container">
    <div class="header-content">
      <ButtonBackPage text="Back to Creatives" @click.native="back()" />
      <div class="title-creative">Creative Templates</div>
      <div class="subtitle-creative">
        Browse the right template for your creative assets.
      </div>
      <div class="filter-content">
        <div class="flex items-center justify-between">
          <div
            class="show-search flex items-center justify-between cursor-pointer"
          >
            <input
              v-model="dataSearch"
              type="text"
              autocomplete="one-time-code"
              name="search"
              class="title-1"
              placeholder="Quick find..."
              @input="getData()"
            />
            <IconSearch @click.native="getData()" />
          </div>
        </div>
        <div
          v-if="!isLoading2"
          class="resolution-filter flex flex-row flex-wrap"
        >
          <div
            v-for="(item, index) in dataResolution"
            :key="index"
            :class="{ 'item-active': item.id === currentResolution }"
            class="card-res flex items-center justify-center no-select cursor-pointer"
            @click="clickActiveItem(item.id)"
          >
            {{ item.width }}x{{ item.height }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="body-content flex flex-col flex-wrap gap-4">
      <ExpandTemplate
        v-for="(item, index) in dataTemplate"
        :key="index"
        :total="dataTemplate.length"
        :index-list="index"
        :name="item.name"
        :style="item.templates.length > 0 ? '' : 'display:none;'"
      >
        <template slot="body">
          <div
            class="flex flex-row flex-wrap"
            style="column-gap: 20px; row-gap: 10px"
          >
            <div
              v-for="(item2, index2) in item.templates"
              :key="index2"
              class="card-template flex flex-col"
            >
              <div class="template-thumbnail flex items-center justify-center">
                <div
                  class="circle-btn flex items-center justify-center"
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                  @click="preview(item2.id, item2.resolutionId)"
                >
                  <IconView :bg-color="hover ? 'white' : '#0056DE'" />
                </div>
                <img
                  :src="$config.baseURL + 'obs?fileKey=' + item2.thumbnail"
                  class="img-thumbnail"
                />
              </div>
              <div class="template-body">
                <div class="flex items-center justify-items-stretch">
                  <k-button
                    v-if="!item2.isActive"
                    text="Use Template"
                    type="disabled"
                    class="w-full pl-1"
                  />
                  <k-button
                    v-else
                    text="Use Template"
                    type="secondary"
                    class="w-full pl-1"
                    @click.native="create(item2.id, item2.resolutionId)"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </ExpandTemplate>
    </div>
    <div v-else class="flex flex-row flex-wrap gap-4">
      <div v-for="n in 8" :key="n">
        <el-skeleton style="width: 240px">
          <template slot="template">
            <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px"
            />
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 50%" />
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CreateTemplateCreativePage',
  layout: 'default',
  head() {
    return {
      title: 'Templates - Creative - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      currentPage: 1,
      hover: false,
      dataSearch: '',
      activeItem: 11,
      show: false,
      dataTemplates: {},
      resolutionId: '',
    }
  },

  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      dataTemplate: (state) => {
        return state.template.dataTemplate
      },
      dataResolution: (state) => {
        return state.creative.dataResolution
      },
      currentResolution: (state) => {
        return state.creative.currentResolution
      },
    }),
  },
  mounted() {
    this.$store.dispatch('reset')
    this.getAll()
  },
  methods: {
    clickActiveItem(x) {
      this.$store.commit('creative/SET_RESOLUTION_ID', x)
      const data = []
      data.push(x)
      this.resolutionId = JSON.stringify(data)
      this.getData()
    },
    searchTemplate() {},
    back() {
      this.$router.push({
        path: '/creative',
      })
    },
    create(id, resId) {
      this.$router.push({
        path: `/creative/create/${id}?resolution=${resId}`,
      })
    },
    preview(id, resId) {
      this.$router.push({
        path: `/creative/templates/preview/${id}?resolution=${resId}`,
      })
    },
    getAll() {
      // const data = []
      // data.push(this.currentResolution)
      // this.resolutionId = JSON.stringify(data)
      // console.log('currentResolution: ', this.currentResolution)
      // this.getData()
      this.getResolution()
    },
    getResolution() {
      this.isLoading2 = true
      const data = {
        all: false,
      }
      this.$store
        .dispatch('creative/getResolution', data)
        .then(() => {
          if (
            this.dataResolution.find(
              (item) => item.id === this.currentResolution
            ) === undefined
          ) {
            this.$store.commit(
              'creative/SET_RESOLUTION_ID',
              this.dataResolution[0].id
            )
            const data = []
            data.push(this.currentResolution)
            this.resolutionId = JSON.stringify(data)
            this.getData()
          }
          this.isLoading2 = false
        })
        .catch(() => {
          this.isLoading2 = false
        })
    },
    getData() {
      this.isLoading = true
      const data = {
        // page: this.currentPage,
        resolutionIds: this.resolutionId,
        name: this.dataSearch,
      }
      this.$store
        .dispatch('template/getList', data)
        .then((res) => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.kg-container {
  padding: 20px;
  .header-content {
    margin-bottom: 20px;
    .title-creative {
      font-family: 'Cabin';
      margin-top: 20px;
      font-weight: 600;
      font-size: 20px;
      color: #333333;
    }
    .subtitle-creative {
      font-family: 'Cabin';
      margin-top: 5px;
      font-weight: 400;
      font-size: 16px;
      color: #757575;
    }
    .filter-content {
      margin-top: 20px;
      .show-search {
        width: 300px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #c3ced9;
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
          width: 230px;
        }
        .title-1:focus {
          font-family: 'Cabin';
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .resolution-filter {
        margin-top: 20px;
        column-gap: 4px;
        row-gap: 10px;
        .card-res {
          padding-left: 12px;
          padding-right: 12px;
          width: fit-content;
          height: 24px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 500px;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #2b3947;
        }
        .item-active {
          border: 1px solid #1b63d4;
          color: #1b63d4;
          font-weight: 700;
        }
      }
    }
  }
  .body-content {
    margin-top: 20px;
    max-width: 860px;
    .card-collapse {
      font-family: 'Cabin';
      font-weight: 500;
      font-size: 16px;
      color: #5c6b7a;
      cursor: pointer;
      .icon-card {
        margin-right: 12px;
      }
    }
    .card-template {
      cursor: pointer;
      width: 200px;
      height: 100%;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 0px 0px 10px 10px;
      .template-thumbnail {
        height: 300px;
        .img-thumbnail {
          height: 300px;
          object-fit: contain;
        }
        .circle-btn {
          visibility: hidden;
          position: absolute;
          width: 52px;
          height: 52px;
          background: white;
          border-radius: 100px;
        }
      }
      .template-thumbnail:hover {
        opacity: 0.8;
        .circle-btn {
          visibility: visible;
        }
        .circle-btn:hover {
          background: #0056de;
        }
      }
      .template-body {
        padding: 15px;
      }
    }
  }
}
</style>
