<template>
  <div class="p-6">
    <div class="mb-6">
      <Back />
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-gray-200 bg-gray-50 flex">
        <h1 class="text-xl font-bold text-gray-800">
          <i class="ti ti-user text-gray-500 mr-2" /> Audience Details
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
        <!-- Main Info Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column: Personal & Location -->
          <div class="space-y-8">
            <!-- Personal Info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-user mr-2 text-gray-500"></i> Personal
                Information
              </h2>
              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Name</label
                  >
                  <div class="text-gray-900 font-medium text-lg">
                    {{ data.name || '-' }}
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Date of Birth</label
                    >
                    <div class="text-gray-900">
                      {{ data.dateOfBirth || '-' }}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Year of Birth</label
                    >
                    <div class="text-gray-900">
                      {{ data.yearOfBirth || '-' }}
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Gender</label
                    >
                    <div class="text-gray-900">
                      {{ getGenderName(data.genderId) }}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Religion</label
                    >
                    <div class="text-gray-900">
                      {{ getReligionName(data.religionId) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-map mr-2 text-gray-500"></i> Location
              </h2>
              <div class="bg-gray-50 rounded-lg p-5 space-y-4">
                <div>
                  <label
                    class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                    >Address</label
                  >
                  <div class="text-gray-900">
                    {{ data.address || '-' }}
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Province</label
                    >
                    <div class="text-gray-900">
                      {{ getProvinceName(data.provinceCode) }}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Regency</label
                    >
                    <div class="text-gray-900">
                      {{ getRegencyName(data.regencyCode) }}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >District</label
                    >
                    <div class="text-gray-900">
                      {{ getDistrictName(data.districtCode) }}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                      >Village</label
                    >
                    <div class="text-gray-900">
                      {{ getVillageName(data.villageCode) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contacts & Additional -->
          <div class="space-y-8">
            <!-- Contacts -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-address-book mr-2 text-gray-500"></i> Contact
                Information
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div
                  v-if="data.contacts && data.contacts.length"
                  class="space-y-3"
                >
                  <div
                    v-for="(contact, idx) in data.contacts"
                    :key="idx"
                    class="flex items-start p-3 bg-white rounded border border-gray-100 shadow-sm"
                  >
                    <div class="flex-shrink-0 mt-1">
                      <i
                        class="ti ti-mail text-gray-400"
                        v-if="contact.typeId === 1"
                      ></i>
                      <i
                        class="ti ti-phone text-gray-400"
                        v-else-if="contact.typeId === 2"
                      ></i>
                      <i class="ti ti-comment text-gray-400" v-else></i>
                    </div>
                    <div class="ml-3">
                      <div
                        class="text-xs text-gray-500 font-semibold uppercase"
                      >
                        {{ getContactTypeName(contact.typeId) }}
                        <span
                          v-if="contact.label"
                          class="normal-case font-normal text-gray-400"
                        >
                          — {{ contact.label }}</span
                        >
                      </div>
                      <div class="text-gray-900 font-medium break-all">
                        {{ contact.value }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-gray-400 italic text-sm">
                  No contact information available.
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-mist mr-2 text-gray-500"></i> Additional
                Information
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div
                  v-if="additionalInfoList && additionalInfoList.length"
                  class="space-y-2"
                >
                  <div
                    v-for="(info, idx) in additionalInfoList"
                    :key="idx"
                    class="flex justify-between items-center p-3 bg-white rounded border border-gray-100 shadow-sm"
                  >
                    <!-- LEFT: key + icon -->
                    <div
                      class="flex items-center gap-2 text-gray-600 font-medium text-sm"
                    >
                      <i class="ti ti-info-circle text-gray-400"></i>
                      <span class="font-semibold">{{ info.key }}</span>
                    </div>

                    <!-- RIGHT: value badge -->
                    <span
                      class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border whitespace-nowrap"
                    >
                      {{ info.value }}
                    </span>
                  </div>
                </div>

                <div v-else class="text-gray-400 italic text-sm">
                  No additional information available.
                </div>
              </div>
            </div>

            <!-- Segments -->
            <div>
              <h2
                class="text-lg font-semibold text-gray-800 mb-4 flex items-center"
              >
                <i class="ti ti-folder mr-2 text-gray-500"></i> Segments
              </h2>
              <div class="bg-gray-50 rounded-lg p-5">
                <div
                  v-if="data.segments && data.segments.length"
                  class="space-y-3"
                >
                  <div
                    v-for="(segment, idx) in data.segments"
                    :key="idx"
                    class="flex items-start p-3 bg-white rounded border border-gray-100 shadow-sm"
                  >
                    <div class="flex-shrink-0 mt-1">
                      <i class="ti ti-users text-gray-400"></i>
                    </div>

                    <div class="ml-3 w-full">
                      <!-- 👇 justify-between -->
                      <div class="flex items-center justify-between w-full">
                        <NuxtLink
                          :to="`/direct/segment/${segment.uuid}/audience`"
                          class="text-blue-500 hover:text-blue-700 font-medium break-all block"
                        >
                          {{ segment.name }}
                        </NuxtLink>

                        <span
                          class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border whitespace-nowrap"
                        >
                          {{ segment.audienceCount }} audience{{
                            segment.audienceCount === 1 ? '' : 's'
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else class="text-gray-400 italic text-sm">
                  No segments information available.
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
  name: 'AudienceDetailPage',
  layout: 'default',
  head() {
    return {
      title: 'Detail - Audience - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,

      // Form model sesuai tabel
      data: {
        id: null,
        uuid: null,
        orgId: null,
        name: '',
        dateOfBirth: null,
        yearOfBirth: null,
        genderId: null,
        religionId: null,
        provinceCode: null,
        regencyCode: null,
        districtCode: null,
        villageCode: null,
        address: '',
        contacts: [],
        additionalInfo: null,
      },
      additionalInfoList: [],
    }
  },
  computed: {
    ...mapState({
      dataSegment: (state) => state.segment.dataDetail,

      dataDetail: (state) => state.audience.dataDetail,

      dataProvinces: (state) => state.province.dataList,
      dataRegencies: (state) => state.regency.dataList,
      dataDistricts: (state) => state.district.dataList,
      dataVillages: (state) => state.village.dataList,

      dataGenders: (state) => state.gender.dataList,
      dataReligions: (state) => state.religion.dataList,

      dataContactTypes: (state) => state.contactType.dataList,
    }),
  },
  async mounted() {
    this.getSegment()
    await this.getProvince()
    this.getGender()
    this.getReligion()
    this.getContactType()
    this.getDetail()
  },
  methods: {
    getSegment() {
      this.isLoading = true

      this.$store
        .dispatch('segment/detail', {
          uuid: this.$route.params.uuid,
        })
        .finally(() => (this.isLoading = false))
    },

    getDetail() {
      this.isLoading = true

      this.$store
        .dispatch('audience/detail', {
          segmentUuid: this.$route.params.uuid,
          uuid: this.$route.params.uuid2,
        })
        .finally(() => (this.isLoading = false))
    },

    getGender() {
      this.isLoading = true

      this.$store
        .dispatch('gender/list')
        .finally(() => (this.isLoading = false))
    },

    getReligion() {
      this.isLoading = true

      this.$store
        .dispatch('religion/list')
        .finally(() => (this.isLoading = false))
    },

    getContactType() {
      this.isLoading = true

      this.$store
        .dispatch('contactType/list')
        .finally(() => (this.isLoading = false))
    },

    getProvince() {
      this.isLoading = true

      this.$store
        .dispatch('province/all')
        .finally(() => (this.isLoading = false))
    },

    getRegency(provinceCode) {
      this.isLoading = true

      this.$store.dispatch('regency/all', { provinceCode }).finally(() => {
        this.isLoading = false
      })
    },

    getDistrict(regencyCode) {
      this.isLoading = true

      this.$store.dispatch('district/all', { regencyCode }).finally(() => {
        this.isLoading = false
      })
    },

    getVillage(districtCode) {
      this.isLoading = true

      this.$store.dispatch('village/all', { districtCode }).finally(() => {
        this.isLoading = false
      })
    },

    getGenderName(id) {
      if (!id) return '-'
      const item = this.dataGenders.find((x) => x.id === id)
      return item ? item.name : '-'
    },

    getReligionName(id) {
      if (!id) return '-'
      const item = this.dataReligions.find((x) => x.id === id)
      return item ? item.name : '-'
    },

    getProvinceName(code) {
      if (!code) return '-'
      const item = this.dataProvinces.find((x) => x.code === code)
      return item ? item.name : '-'
    },

    getRegencyName(code) {
      if (!code) return '-'
      const item = this.dataRegencies.find((x) => x.code === code)
      return item ? item.name : '-'
    },

    getDistrictName(code) {
      if (!code) return '-'
      const item = this.dataDistricts.find((x) => x.code === code)
      return item ? item.name : '-'
    },

    getVillageName(code) {
      if (!code) return '-'
      const item = this.dataVillages.find((x) => x.code === code)
      return item ? item.name : '-'
    },

    getContactTypeName(id) {
      if (!id) return '-'
      const item = this.dataContactTypes.find((x) => x.id === id)
      return item ? item.name : 'Unknown'
    },

    toEdit() {
      this.$router.push({
        path:
          '/direct/segment/' +
          this.$route.params.uuid +
          '/audience/edit/' +
          this.data.uuid,
      })
    },
  },
  watch: {
    async dataDetail(val) {
      if (val) {
        this.data.id = val.id
        this.data.uuid = val.uuid
        this.data.orgId = val.orgId
        this.data.name = val.name
        this.data.dateOfBirth = val.dateOfBirth
        this.data.yearOfBirth = val.yearOfBirth

        this.data.genderId = val.genderId
        this.data.religionId = val.religionId

        this.data.provinceCode = val.provinceCode
        if (val.provinceCode) {
          await this.getRegency(val.provinceCode)
          this.data.regencyCode = val.regencyCode

          if (val.regencyCode) {
            await this.getDistrict(val.regencyCode)
            this.data.districtCode = val.districtCode

            if (val.districtCode) {
              await this.getVillage(val.districtCode)
              this.data.villageCode = val.villageCode
            }
          }
        }

        this.data.address = val.address
        this.data.contacts = val.contacts
        this.data.additionalInfo = val.additionalInfo
        this.additionalInfoList = Object.entries(val.additionalInfo || {}).map(
          ([key, value]) => ({ key, value })
        )

        this.data.segments = val.segments
      }
    },
  },
}
</script>
