<template>
  <div class="flex items-center">
    <div class="layout-filter flex items-center">
      <div class="flex name-filter">Layout:</div>
      <div
        class="flex btn-icon justify-center"
        :style="activeLayout === 'grid' ? 'border: 1px solid #1B63D4;' : ''"
        @click="statusLayout('grid')"
      >
        <img
          src="~/assets/images/campaign/icon_all.svg"
          style="height: 14px; width: 15px"
        />
      </div>
      <div
        class="flex btn-icon"
        :style="activeLayout === 'list' ? 'border: 1px solid #1B63D4;' : ''"
        @click="statusLayout('list')"
      >
        <img
          src="~/assets/images/campaign/icon_list.svg"
          style="height: 14px"
        />
      </div>
    </div>
    <!-- <div class="hr-vertical" /> -->
    <button
      type="button"
      class="k-btn inline-block py-1 pb-2 focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-100 ease-in-out flex align-center"
      @click="showDialog()"
    >
      <img src="~/assets/images/campaign/icon_filter.svg" class="mr-2" />
      Sort & Filter
    </button>
    <div class="hr-vertical" />
    <div class="search-card">
      <transition name="slide">
        <div
          v-if="!showSearch"
          class="hide-search flex items-center justify-center cursor-pointer"
          @mouseover="search = true"
          @click="showSearch = !showSearch"
        >
          <IconSearch />
        </div>
        <div
          v-else
          class="show-search flex items-center justify-between cursor-pointer"
        >
          <input
            v-model="dataSearch"
            type="text"
            class="title-1"
            placeholder="Find something.."
            @change="searchCampaign()"
          />
          <IconSearch @click.native="searchCampaign()" />
        </div>
      </transition>
    </div>
  </div>
</template>
