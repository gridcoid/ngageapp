<template>
  <div class="min-h-screen bg-gray-50 py-10 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-semibold text-gray-800">My Profile</h1>
        <p class="text-gray-500 mt-1">Personal account information.</p>
      </div>

      <!-- Profile Card -->
      <div class="bg-white shadow-lg rounded-2xl overflow-hidden">
        <!-- Header Section -->
        <div
          class="bg-gradient-to-r from-indigo-500 to-blue-500 h-32 relative"
        ></div>

        <!-- Profile Content -->
        <div class="px-8 pb-8 relative">
          <!-- Avatar -->
          <div class="absolute -top-12 left-8">
            <div
              class="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white"
            >
              {{ userInitial }}
            </div>
          </div>

          <!-- Name -->
          <div class="pt-16">
            <h2 class="text-2xl font-semibold text-gray-800">
              {{ detailUser.firstName }} {{ detailUser.lastName }}
            </h2>
            <p class="text-gray-500">
              {{ detailUser.email }}
            </p>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-200 my-6"></div>

          <!-- Information Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="profile-item">
              <div class="label">First Name</div>
              <div class="value">{{ detailUser.firstName }}</div>
            </div>

            <div class="profile-item">
              <div class="label">Last Name</div>
              <div class="value">{{ detailUser.lastName }}</div>
            </div>

            <div class="profile-item">
              <div class="label">Role</div>
              <div class="value">
                <el-tag type="primary" size="medium">
                  {{ capitalize(detailUser.roles) }}
                </el-tag>
              </div>
            </div>

            <div class="profile-item">
              <div class="label">Organization</div>
              <div class="value">
                {{ detailUser.orgName || '-' }}
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
  head() {
    return {
      title: 'Profile - ' + this.$config.appName,
    }
  },
  computed: {
    ...mapState({
      detailUser: (state) => state.user.detailUser,
      userId: (state) => state.user.userId,
    }),
    userInitial() {
      if (!this.detailUser?.firstName) return '?'
      const first = this.detailUser.firstName.charAt(0)
      const last = this.detailUser.lastName
        ? this.detailUser.lastName.charAt(0)
        : ''
      return (first + last).toUpperCase()
    },
  },
  mounted() {
    document.querySelector('body').style.overflow = 'auto'
    this.$store.commit('user/SET_DROPDOWN', null)
    this.getDataUser()
  },
  methods: {
    capitalize(str) {
      if (!str) return ''
      return str
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ')
    },
    getDataUser() {
      const data = {
        id: this.userId,
        pageType: 'accoundDetail',
      }
      this.$store.dispatch('user/getDetail', data)
    },
  },
}
</script>

<style scoped>
.profile-item .label {
  @apply text-sm text-gray-500 mb-1;
}
.profile-item .value {
  @apply text-base font-medium text-gray-800;
}
</style>
