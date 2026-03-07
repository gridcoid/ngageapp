<template>
  <div class="p-6">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-user text-gray-500 mr-2" /> User Details
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- LEFT COLUMN -->
          <div class="space-y-8">
            <!-- Basic Info -->
            <div>
              <h2 class="text-lg font-semibold mb-4 flex items-center">
                <i class="ti ti-id mr-2 text-gray-500"></i> Basic Information
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Full Name</label
                  >
                  <div class="value">
                    {{ data.firstName }} {{ data.lastName }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Username</label
                  >
                  <div class="value">
                    {{ data.username }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Email</label
                  >
                  <div class="value">
                    {{ data.email || '-' }}
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Phone</label
                  >
                  <div class="value">
                    {{ data.phone || '-' }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="space-y-8">
            <!-- Status -->
            <div>
              <h2 class="text-lg font-semibold mb-4 flex items-center">
                <i class="ti ti-settings mr-2 text-gray-500"></i> Status
              </h2>

              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div class="flex justify-between">
                  <span>Active</span>
                  <span
                    :class="data.isActive ? 'text-blue-600' : 'text-red-500'"
                  >
                    {{ data.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Organizations -->
            <div>
              <h2 class="text-lg font-semibold mb-4 flex items-center">
                <i class="ti ti-building mr-2 text-gray-500"></i> Organizations
              </h2>

              <div class="bg-gray-50 rounded-lg p-5">
                <div v-if="data.orgs && data.orgs.length" class="space-y-3">
                  <div
                    v-for="(org, idx) in data.orgs"
                    :key="idx"
                    class="flex justify-between items-center p-3 bg-white rounded border"
                  >
                    <div>
                      <div class="font-medium text-gray-800">
                        {{ org.orgName }}
                      </div>
                      <div class="text-xs text-gray-400">
                        {{ formatRole(org.orgTypeName) }}
                      </div>
                    </div>

                    <span
                      class="text-xs bg-gray-100 px-2 py-0.5 rounded-full border"
                    >
                      {{ formatRole(org.role) }}
                    </span>
                  </div>
                </div>

                <div v-else class="text-gray-400 italic text-sm">
                  No organization assigned.
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
export default {
  name: 'UserDetailPage',
  layout: 'default',

  data() {
    return {
      data: {},
    }
  },

  mounted() {
    this.getDetail()
  },

  methods: {
    async getDetail() {
      const res = await this.$store.dispatch('adminUser/adminDetail', {
        uuid: this.$route.params.uuid,
      })

      if (res.status === 200) {
        this.data = res.data.data
      }
    },

    toEdit() {
      this.$router.push('/setting/admin/user/edit/' + this.$route.params.uuid)
    },

    formatRole(role) {
      if (role === 'org_adm') return 'Org Admin'
      if (role === 'org_ops') return 'Org Operator'
      return role
    },
  },
}
</script>
