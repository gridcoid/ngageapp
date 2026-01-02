<template>
  <div class="p-6 max-w-5xl">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-settings text-gray-400 mr-2"></i> Setting Details
        </h1>

        <ButtonDefault
          icon="edit"
          text="Edit"
          class="ml-4"
          type="secondary"
          @click.native="toEdit()"
        />
      </div>

      <div class="p-6">
        <div class="grid grid-cols-1">
          <div class="space-y-8">
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-info-circle mr-2 text-blue-500"></i>
                Setting Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Key
                  </label>
                  <div
                    class="text-gray-900 break-all font-mono text-sm bg-white p-2 rounded"
                  >
                    {{ data.key }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Value
                  </label>
                  <div
                    class="text-gray-900 break-all font-mono text-sm bg-white p-2 rounded"
                  >
                    {{ data.value }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Description
                  </label>
                  <div class="text-gray-900">
                    {{ data.description || '-' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DetailSettingPage',
  layout: 'default',

  head() {
    return {
      title: 'Detail - Setting - ' + this.$config.appName,
    }
  },

  data() {
    return {
      isLoading: false,

      data: {
        id: null,
        uuid: null,
        key: '',
        value: '',
        description: '',
        createdAt: null,
      },
    }
  },

  computed: {
    ...mapState({
      dataDetail: (state) => state.setting.dataDetail,
    }),
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('setting/detail', {
          uuid: this.$route.params.index,
        })
        .finally(() => (this.isLoading = false))
    },

    toEdit() {
      this.$router.push({ path: '/admin/setting/edit/' + this.data.uuid })
    },
  },

  watch: {
    dataDetail(val) {
      if (val) {
        this.data = {
          id: val.id,
          uuid: val.uuid,
          key: val.key,
          value: val.value,
          description: val.description,
          createdAt: val.createdAt,
        }
      }
    },
  },
}
</script>
