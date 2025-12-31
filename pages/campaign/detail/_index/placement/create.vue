<template>
  <div class="kg-container flex">
    <div class="w-full" style="padding-right: 20px">
      <Back />

      <div class="title-1">Campaign</div>
      <div class="title-2">
        {{ detailCampaign.name }}
      </div>
      <div class="kg-card">
        <div class="header-card flex items-center">
          <div class="title-card">Basic Info</div>
        </div>
        <div class="body-card">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                Placement Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                v-model="data.placementName"
                class="border-2 w-full rounded py-2 px-4 leading-tight title-form"
                type="text"
              />
            </div>
          </div>
          <div class="hr-horizontal" />
          <div class="subtitle-card">Delivery</div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                Daily Limit
              </label>
            </div>
            <div class="md:w-2/3 md:flex justify-items-stretch">
              <div class="flex flex-col" style="width: 100%">
                <el-select v-model="data.dailyLimit1" style="width: 100%">
                  <el-option
                    v-for="item in dataDailyLimitTypes"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
                <div class="sub-input">
                  Setting that will be limited traffic in 1 day
                </div>
              </div>
              <div class="hr-vertical" />
              <div class="flex flex-col" style="width: 100%">
                <input
                  v-model="data.dailyLimit2"
                  style="width: 100%"
                  class="border-2 w-full rounded py-2 px-4 leading-tight title-form"
                  type="number"
                />
                <div class="sub-input">
                  Enter value of daily
                  <span style="font-weight: bold">max impression</span>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                Book Impression
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                v-model="data.bookedImps"
                class="border-2 w-full rounded py-2 px-4 leading-tight title-form"
                type="number"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-2">
            <div class="md:w-1/3">
              <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                Priority
              </label>
            </div>
            <div class="md:w-2/3">
              <el-select
                v-model="data.priority"
                placeholder="Choose Priority"
                style="width: 100%"
              >
                <el-option
                  v-for="item in dataPriorities"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
          </div>
          <div class="cpm-dimension">
            <div class="md:flex md:items-center" style="margin-bottom: 20px">
              <div class="md:w-1/3">
                <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                  Dimension
                </label>
              </div>
              <div class="md:w-2/3">
                <el-select
                  v-model="data.resolusi"
                  placeholder="Choose Dimension"
                  style="width: 100%"
                  @change="changeResolution()"
                >
                  <el-option
                    v-for="item in dataResolution"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="title-form block md:text-left mb-1 md:mb-0 pr-4">
                  CPM
                </label>
              </div>
              <div class="md:w-2/3">
                <div class="input-container flex items-center justify-center">
                  <div class="icon flex items-center justify-center">
                    USD
                    <div class="divider-vertical" />
                  </div>
                  <input
                    v-model="data.cpm"
                    class="input-field"
                    placeholder="Input value"
                  />
                </div>
                <div class="sub-input2">CPM on this dimension : USD 0,003</div>
                <el-checkbox v-model="data.isActive" class="dynamic-bidding">
                  Dynamic bidding (based on the calculated performance)
                </el-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Inventory -->
      <div class="kg-card mt-6" style="padding-bottom: 0px">
        <div class="header-card pb-0 flex items-center justify-between">
          <div class="title-card" style="font-size: 20px; font-family: 'Cabin'">
            Inventory
          </div>
          <div class="flex items-center">
            <div
              style="height: 40px; margin-right: 30px"
              class="mr-2 flex items-center justify-between btn-create no-select"
              @click="openDialog('inventory')"
            >
              <IconPlus />
              <span class="name-btn">Assign Inventory</span>
            </div>

            <IconArrowDown
              v-if="!show"
              class="icon-arrow cursor-pointer no-select"
              @click.native="show = !show"
            />
            <IconArrowUp
              v-else
              class="icon-arrow cursor-pointer no-select"
              @click.native="show = !show"
            />
          </div>
        </div>
        <div v-if="show" class="body-card-2">
          <div
            v-if="selectedData2.length === 0"
            class="flex flex-col items-center justify-center h-full"
            style="padding-top: 20px; padding-bottom: 20px"
          >
            <div class="creative-1 mt-2">No Inventory Assigned</div>
            <div class="creative-2">
              Assign some inventory for creative to be shown.
            </div>
          </div>
          <div
            v-else
            class="flex flex-col h-full container-assigned"
            style="height: 100%"
          >
            <div
              v-for="(item, index) in selectedData2"
              :key="index"
              class="card-assigned flex items-center justify-between"
            >
              <div class="flex flex-col">
                <div class="title-creative">
                  {{ item.name }}
                </div>
                <div class="size-creative flex items-center">
                  <img class="mr-2" src="~/assets/images/globe.svg" />
                  {{ item.publisher.name }}
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="btn-delete flex items-center justify-center cursor-pointer"
                  @click="deleteInventory(item)"
                >
                  <IconDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Assigned Creative -->
      <div class="kg-card mt-6" style="padding-bottom: 0px">
        <div class="header-card flex items-center justify-between">
          <div class="title-card" style="font-size: 20px; font-family: 'Cabin'">
            Assigned Creative
          </div>
          <div class="flex items-center">
            <div
              style="height: 40px; margin-right: 30px"
              class="mr-2 flex items-center justify-between btn-create no-select"
              @click="openDialog('creative')"
            >
              <IconPlus />
              <span class="name-btn">Assign Creative</span>
            </div>

            <IconArrowDown
              v-if="!show2"
              class="icon-arrow cursor-pointer no-select"
              @click.native="show2 = !show2"
            />
            <IconArrowUp
              v-else
              class="icon-arrow cursor-pointer no-select"
              @click.native="show2 = !show2"
            />
          </div>
        </div>
        <div v-if="show2" class="body-card-2">
          <div
            v-if="selected.length === 0"
            class="flex flex-col items-center justify-center h-full"
            style="padding-top: 20px; padding-bottom: 20px"
          >
            <div class="creative-1 mt-2">No Creative Assigned</div>
            <div class="creative-2">
              Assign some creatives you’ve made to this placement.
            </div>
          </div>
          <div
            v-else
            class="flex flex-col h-full container-assigned"
            style="height: 100%"
          >
            <div
              v-for="(item, index) in selectedData"
              :key="index"
              class="card-assigned flex items-center justify-between"
            >
              <div class="flex flex-col">
                <div class="title-creative">
                  {{ item.name }}
                </div>
                <div class="size-creative flex items-center">
                  <img class="mr-2" src="~/assets/images/Vector.svg" />
                  {{ item.template.name }}
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="btn-delete flex items-center justify-center cursor-pointer"
                  style="margin-right: 10px"
                  @click="deleteCreative(item)"
                >
                  <IconDelete />
                </div>
                <div
                  class="btn-delete flex items-center justify-center cursor-pointer"
                  @click="detailCreative(item.id)"
                >
                  <IconEyes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Audience -->
      <div class="kg-card mt-6" style="padding-bottom: 0px">
        <div class="header-card flex items-center justify-between">
          <div class="title-card" style="font-size: 20px; font-family: 'Cabin'">
            Audience
          </div>
          <div class="flex items-center">
            <div
              style="height: 40px; margin-right: 30px"
              class="mr-2 flex items-center justify-between btn-create no-select"
              @click="openDialog('audience')"
            >
              <IconPlus />
              <span class="name-btn">Assign Audience</span>
            </div>

            <IconArrowDown
              v-if="!show3"
              class="icon-arrow cursor-pointer no-select"
              @click.native="show3 = !show3"
            />
            <IconArrowUp
              v-else
              class="icon-arrow cursor-pointer no-select"
              @click.native="show3 = !show3"
            />
          </div>
        </div>
        <div v-if="show3" class="body-card-2">
          <div
            v-if="selectedData3.length === 0"
            class="flex flex-col items-center justify-center h-full"
            style="padding-top: 20px; padding-bottom: 20px"
          >
            <div class="creative-1 mt-2">
              No Specific Target Audience Selected
            </div>
            <div class="creative-2">
              Your ads will be shown to all audience type
            </div>
          </div>

          <div
            v-else
            class="flex flex-col h-full container-assigned"
            style="height: 100%"
          >
            <div
              v-for="(item, index) in selectedData3"
              :key="index"
              class="card-assigned flex items-center justify-between"
            >
              <div class="flex flex-col">
                <div class="title-creative">
                  {{ item.name }}
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="btn-delete flex items-center justify-center cursor-pointer"
                  @click="deleteAudience(item)"
                >
                  <IconDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 330px">
      <div
        class="kg-card"
        style="position: sticky; top: 80px; z-index: 3; padding-top: 10px"
      >
        <div
          style="padding-bottom: 10px"
          class="header-card flex items-center justify-between"
        >
          <div class="title-action">ACTIONS</div>
        </div>
        <div class="body-card flex justify-items-stretch">
          <k-button
            text="Discard"
            type="secondary"
            style="width: 100%"
            @click.native="$router.back()"
          />
          <button
            class="flex items-center justify-center save-btn no-select"
            @click="createPlacement()"
          >
            <IconSave />
            <span class="name-btn">Save</span>
          </button>
        </div>
      </div>
    </div>
    <Popup2
      v-if="popup"
      class="popup"
      width="1090"
      @close-modal="closeDialog()"
    >
      <template v-slot:title>
        <div class="flex items-center justify-between k-header">
          <div class="title-assign">Assign Inventory</div>
          <div class="flex items-center justify-center">
            <div class="dimension flex items-center justify-center">
              Chosen Dimension:
              <div class="border-circle flex items-center justify-center">
                {{ selectedDataResolution }}
              </div>
            </div>
            <div
              class="btn-close-creative flex items-center justify-center cursor-pointer"
              @click="closeDialog()"
            >
              <img src="~/assets/images/campaign/icon_close.svg" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="content-popup">
          <div class="flex items-center justify-between">
            <div
              style="width: 300px"
              class="show-searchbar flex items-center justify-between cursor-pointer"
            >
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchInventory()"
              >
                <input
                  v-model="dataSearchInventory"
                  type="text"
                  class="title-search"
                  placeholder="Find something.."
                  @change="searchInventory()"
                />
              </form>
              <IconSearch />
            </div>
            <div class="flex items-center justify-center">
              <div
                class="filter-bar flex items-center justify-center"
                style="margin-right: 20px"
              >
                Filter by Publisher:
                <el-select
                  v-model="selectPublisher"
                  multiple
                  placeholder="Please select publisher"
                  collapse-tags
                  style="margin-left: 15px; width: 280px"
                  @change="filterPublisher()"
                >
                  <el-option
                    v-for="item in dataPublisher"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <div class="filter-bar flex items-center justify-center">
                Filter Format:
                <el-select
                  v-model="selectInventory"
                  multiple
                  placeholder="Choose Format"
                  collapse-tags
                  style="margin-left: 15px; width: 180px"
                  @change="filterPublisher()"
                >
                  <el-option
                    v-for="item in typeInventories"
                    :key="item.type"
                    :label="item.label"
                    :value="item.type"
                  />
                </el-select>
              </div>
            </div>
          </div>
          <div
            style="
              overflow-y: scroll;
              overflow-x: hidden;
              height: 400px;
              width: 100%;
              margin-top: 15px;
            "
          >
            <div
              v-if="dataInventories.length === 0"
              class="flex flex-col items-center justify-center h-full"
              style="padding-top: 20px; padding-bottom: 20px"
            >
              <div class="creative-1 mt-2">No Inventory</div>
            </div>
            <span
              v-for="(item, index) in dataInventories"
              :key="index"
              class="flex flex-col"
            >
              <div
                :style="$options.filters.filterData(item.id, selected2)"
                class="card-inventory flex items-center justify-between"
              >
                <div class="left-inventory flex flex-col">
                  <div class="title-inv">
                    {{ item.name }}
                  </div>
                  <div class="flex items-center subtitle-inv">
                    <img
                      src="~/assets/images/globe.svg"
                      style="margin-right: 4px"
                    />
                    {{ item.publisher.name }}
                  </div>
                </div>

                <div
                  class="flex items-center justify-center k-btn2 no-select"
                  style="background: #1b63d4"
                  :style="
                    $options.filters.filterData(item.id, selected2)
                      ? 'background: #1b63d4;'
                      : 'background: white;'
                  "
                  @click="selectItem2(item)"
                >
                  <img
                    v-if="$options.filters.filterData(item.id, selected2)"
                    class="mr-2"
                    src="~/assets/images/campaign/check_true.svg"
                  />
                  <img
                    v-else
                    class="mr-2"
                    src="~/assets/images/campaign/check_false.svg"
                  />
                  <span
                    class="name-btn"
                    :style="
                      $options.filters.filterData(item.id, selected2)
                        ? 'color:white;'
                        : 'color: #1B63D4;'
                    "
                    style="padding-left: 0px; padding-right: 10px"
                    >Assign Inventory</span
                  >
                </div>
              </div>
            </span>
          </div>
          <Pagination
            class="k-pagination"
            :value="currentPageInventory"
            :total-page="totalPagesInventories"
            :total="totalInventories"
            @input="changePageInventory($event)"
            @rowPage="changeRowPageInventory($event)"
          />
        </div>
        <div class="flex justify-between items-center">
          <div
            class="flex items-center justify-center k-btn-2 no-select"
            @click="closeDialog()"
          >
            <span class="name-btn">Cancel</span>
          </div>

          <div
            class="flex items-center justify-center k-btn no-select"
            @click="closeDialog()"
          >
            <IconCompleted bg-color="white" />
            <span class="name-btn">Confirm</span>
          </div>
        </div>
      </template>
    </Popup2>
    <Popup2
      v-if="popup2"
      class="popup"
      width="1094"
      @close-modal="closeDialog()"
    >
      <template v-slot:title>
        <div class="flex items-center justify-between k-header">
          <div class="title-assign">Assign Creative</div>
          <div class="flex items-center justify-center">
            <div
              class="show-searchbar flex items-center justify-between cursor-pointer"
            >
              <form
                autocomplete="off"
                style="width: 100%"
                @submit.prevent="searchCreative()"
              >
                <input
                  v-model="dataSearch"
                  type="text"
                  class="title-search"
                  placeholder="Find something.."
                  @change="searchCreative()"
                />
              </form>
              <IconSearch />
            </div>
            <div class="dimension flex items-center justify-center">
              Chosen Dimension:
              <div class="border-circle flex items-center justify-center">
                {{ selectedDataResolution }}
              </div>
            </div>
            <div
              class="btn-close-creative flex items-center justify-center cursor-pointer"
              @click="closeDialog()"
            >
              <img src="~/assets/images/campaign/icon_close.svg" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="content-popup">
          <div
            class="scroll-content"
            style="
              overflow-y: scroll;
              overflow-x: hidden;
              height: 400px;
              width: 100%;
            "
          >
            <div
              v-if="dataCreative.length === 0"
              class="flex flex-col items-center justify-center h-full"
              style="padding-top: 20px; padding-bottom: 20px"
            >
              <div class="creative-1 mt-2">No Creative</div>
            </div>
            <div v-else class="flex flex-wrap gap-2">
              <span v-for="(item, index) in dataCreative" :key="index">
                <div
                  :style="$options.filters.filterData(item.id, selected)"
                  class="card-creative flex flex-col justify-strecth"
                >
                  <img
                    crossorigin="anonymous"
                    :src="
                      item.config.backupImg !== undefined
                        ? $config.baseURL +
                          'obs?fileKey=' +
                          item.config.backupImg
                        : $config.baseURL +
                          'obs?fileKey=' +
                          item.template.thumbnail
                    "
                    class="img-content"
                  />
                  <!-- previewUrl -->
                  <div class="flex flex-col justify-between creative-desc">
                    <div>
                      <el-tooltip :open-delay="1000" placement="top-end">
                        <div slot="content" class="title-creative">
                          {{ item.name }}
                        </div>

                        <div class="title-creative ellipsis-2line">
                          {{ item.name }}
                        </div>
                      </el-tooltip>
                      <div class="flex items-center template-creative">
                        <img
                          src="~/assets/images/Vector.svg"
                          style="margin-right: 4px"
                        />
                        {{ item.template.name }}
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-center k-btn2 no-select"
                      style="background: #1b63d4"
                      :style="
                        $options.filters.filterData(item.id, selected)
                          ? 'background: #1b63d4;'
                          : 'background: white;'
                      "
                      @click="selectItem(item)"
                    >
                      <img
                        v-if="$options.filters.filterData(item.id, selected)"
                        class="mr-2"
                        src="~/assets/images/campaign/check_true.svg"
                      />
                      <img
                        v-else
                        class="mr-2"
                        src="~/assets/images/campaign/check_false.svg"
                      />
                      <span
                        class="name-btn"
                        :style="
                          $options.filters.filterData(item.id, selected)
                            ? 'color:white;'
                            : 'color: #1B63D4;'
                        "
                        style="padding-left: 0px; padding-right: 10px"
                        >Assign Creative</span
                      >
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <Pagination
            class="k-pagination"
            :value="currentPage"
            :total-page="totalPages"
            :total="totalCreative"
            @input="changePage($event)"
            @rowPage="changeRowPage($event)"
          />
        </div>
        <div class="flex justify-between items-center">
          <div
            class="flex items-center justify-center k-btn-2 no-select"
            @click="closeDialog()"
          >
            <span class="name-btn">Cancel</span>
          </div>

          <div
            class="flex items-center justify-center k-btn no-select"
            @click="closeDialog()"
          >
            <IconCompleted bg-color="white" />
            <span class="name-btn">Assign Creative</span>
          </div>
        </div>
      </template>
    </Popup2>
    <Popup2
      v-if="popup3"
      class="popup"
      width="1090"
      @close-modal="closeDialog()"
    >
      <template v-slot:title>
        <div class="flex items-center justify-between k-header">
          <div class="title-assign">Assign Audience</div>
        </div>
      </template>
      <template v-slot:body>
        <div class="content-popup">
          <div
            class="show-searchbar flex items-center justify-between cursor-pointer"
            style="width: 100%"
          >
            <form
              autocomplete="off"
              style="width: 100%"
              @submit.prevent="searchAudience()"
            >
              <input
                v-model="dataSearchAudience"
                type="text"
                class="title-search"
                placeholder="Find something.."
                @change="searchAudience()"
              />
            </form>
            <IconSearch />
          </div>

          <div
            v-if="dataAudience.length === 0"
            class="flex flex-col items-center justify-center h-full"
            style="padding-top: 20px; padding-bottom: 20px"
          >
            <div class="creative-1 mt-2">No Audience</div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <span v-for="(item, index) in dataAudience" :key="index">
              <div
                :style="$options.filters.filterData(item.id, selected3)"
                class="card-audience flex justify-strecth cursor-pointer"
              >
                <img
                  crossorigin="anonymous"
                  :src="$config.baseURL + 'obs?fileKey=' + item.thumbnail"
                  class="img-content"
                />
                <div class="flex flex-col data-content w-3/4">
                  <div class="title-creative">
                    {{ item.name }}
                  </div>
                  <div
                    class="flex items-center justify-center k-btn no-select"
                    style="
                      background: #1b63d4;
                      margin-left: 0px;
                      margin-right: 0px;
                    "
                    :style="
                      $options.filters.filterData(item.id, selected3)
                        ? 'background: #1b63d4;'
                        : 'background: white;'
                    "
                    @click="selectItem3(item)"
                  >
                    <img
                      v-if="$options.filters.filterData(item.id, selected3)"
                      class="mr-2"
                      src="~/assets/images/campaign/check_true.svg"
                    />
                    <img
                      v-else
                      class="mr-2"
                      src="~/assets/images/campaign/check_false.svg"
                    />
                    <span
                      class="name-btn"
                      :style="
                        $options.filters.filterData(item.id, selected3)
                          ? 'color:white;'
                          : 'color: #1B63D4;'
                      "
                      style="padding-left: 0px; padding-right: 10px"
                      >Choose Preset</span
                    >
                  </div>
                </div>
              </div>
            </span>
          </div>
          <Pagination
            class="k-pagination"
            :value="currentPageAudience"
            :total-page="totalPagesAudience"
            :total="totalAudience"
            :data-item="rowPageAudience"
            @input="changePageAudience($event)"
            @rowPage="changeRowPageAudience($event)"
          />
        </div>
        <div class="flex justify-between items-center">
          <div
            class="flex items-center justify-center k-btn-2 no-select"
            @click="closeDialog()"
          >
            <span class="name-btn">Cancel</span>
          </div>

          <div
            class="flex items-center justify-center k-btn no-select"
            @click="closeDialog()"
          >
            <IconCompleted bg-color="white" />
            <span class="name-btn">Confirm</span>
          </div>
        </div>
      </template>
    </Popup2>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CreatePlacementPage',
  layout: 'default',
  head() {
    return {
      title: 'Create - Placement - Campaign - ' + this.$config.appName,
    }
  },
  data() {
    return {
      isLoading: false,
      popup: false,
      popup2: false,
      popup3: false,
      isActive: false,
      show: true,
      show2: true,
      show3: true,
      show4: true,
      data: {
        placementName: '',
        placementPeriod: null,
        dailyLimit1: '',
        dailyLimit2: '',
        priority: 1,
        inventory: [],
        resolusi: '',
        cpm: 0,
        isActive: false,
        bookedImps: 0,
      },
      selectedDataResolution: '',
      selectPublisher: [],
      selectInventory: [],
      startDate: '',
      endDate: '',
      value: '',
      value2: '',
      value3: [],
      showMessage: false,
      messageError: '',
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      currentPage: 1,
      dataSearch: '',
      selected: [],
      selectedData: [],
      dataSearchAudience: '',
      currentPageAudience: 1,
      rowPageAudience: 6,
      selected2: [],
      selectedData2: [],
      selected3: [],
      selectedData3: [],
      rowPage: 10,
      dataSearchInventory: '',
      currentPageInventory: 1,
      rowPageInventory: 10,
    }
  },
  computed: {
    ...mapState({
      dataPriorities: (state) => {
        return state.placement.dataPriorities
      },
      dataDailyLimitTypes: (state) => {
        return state.placement.dataDailyLimitTypes
      },
      dataInventories: (state) => {
        return state.placement.dataInventories
      },
      totalPagesInventories: (state) => {
        return state.placement.totalPagesInventories
      },
      totalInventories: (state) => {
        return state.placement.totalInventories
      },
      totalPages: (state) => {
        return state.creative.totalPages
      },
      totalCreative: (state) => {
        return state.creative.totalCreative
      },
      dataCreative: (state) => {
        return state.creative.dataCreative
      },
      detailCampaign: (state) => {
        return state.campaign.detailCampaign
      },
      dataAudience: (state) => {
        return state.placement.dataInterest
      },
      totalPagesAudience: (state) => {
        return state.placement.totalPagesInterest
      },
      totalAudience: (state) => {
        return state.placement.totalInterest
      },
      dataResolution: (state) => {
        return state.creative.dataResolution
      },
      dataPublisher: (state) => {
        return state.publisher.dataPublisher
      },
      typeInventories: (state) => {
        return state.placement.typeInventories
      },
    }),
  },
  mounted() {
    this.getAll()
    document.querySelector('body').style.overflow = 'auto'
  },
  methods: {
    detailCreative(x) {
      const route = this.$router.resolve({ path: `/creative/detail/${x}` })
      window.open(route.href)
    },
    openDialog(x) {
      document.querySelector('body').style.overflow = 'hidden'
      if (x === 'inventory') {
        this.popup = true
      }
      if (x === 'creative') {
        this.popup2 = true
      }
      if (x === 'audience') {
        this.popup3 = true
      }
    },
    closeDialog() {
      document.querySelector('body').style.overflow = ''
      this.popup = false
      this.popup2 = false
      this.popup3 = false
    },
    searchAudience() {
      this.currentPageAudience = 1
      this.getDataAudience()
    },
    searchCreative() {
      this.currentPage = 1
      this.getDataCreative()
    },
    searchInventory() {
      this.currentPageInventory = 1
      this.getInventories()
    },
    filterPublisher() {
      this.currentPageInventory = 1
      this.getInventories()
    },
    getAll() {
      this.getPriorities()
      this.getDailyLimitTypes()
      this.getDetail()
      this.getDataAudience()
      this.getDataResolusi()
      this.getDataPublisher()
      this.getDataTypeInventory()
    },
    getDataTypeInventory() {
      this.isLoading = true
      this.$store.dispatch('placement/getInventoriesType').finally(() => {
        this.isLoading = false
      })
    },
    getDataPublisher() {
      this.isLoading = true
      this.$store.dispatch('publisher/getList').finally(() => {
        this.isLoading = false
      })
    },
    getDataResolusi() {
      this.isLoading = true
      this.$store
        .dispatch('creative/getResolution', {
          all: true,
        })
        .then((res) => {
          this.isLoading = false
          // this.data.resolusi = res?.data.data[0].id
          const data = res?.data.data.find(
            (item) => item.id === this.data.resolusi
          )
          this.selectedDataResolution = data.width + 'x' + data.height
          this.getInventories()
          this.getDataCreative()
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    changePageAudience(ev) {
      if (ev > 0) {
        this.currentPageAudience = ev
        this.getDataAudience()
      }
    },
    changeRowPageAudience(ev) {
      this.rowPageAudience = ev
      this.getDataAudience()
    },
    getDataAudience() {
      this.isLoading = true
      const data = {
        page: this.currentPageAudience,
        size: this.rowPageAudience,
        name: this.dataSearchAudience,
      }
      this.$store.dispatch('placement/getListInterest', data).finally(() => {
        this.isLoading = false
      })
    },
    getDetail() {
      this.$store
        .dispatch('campaign/getDetail', {
          campaignTypeId: this.$route.params.index,
        })
        .then(() => {})
        .catch(() => {})
    },
    getPriorities() {
      this.isLoading = true
      this.$store.dispatch('placement/getPriorities').finally(() => {
        this.isLoading = false
      })
    },
    getDailyLimitTypes() {
      this.isLoading = true
      this.$store.dispatch('placement/getDailyLimitTypes').finally(() => {
        this.isLoading = false
      })
    },
    changePageInventory(ev) {
      if (ev > 0) {
        this.currentPageInventory = ev
        this.getInventories()
      }
    },
    changeRowPageInventory(ev) {
      this.rowPageInventory = ev
      this.getInventories()
    },
    getInventories() {
      this.isLoading = true
      let publisher = JSON.stringify(this.selectPublisher)
      const typeInventory = JSON.stringify(this.selectInventory)
      if (publisher === '[]') {
        publisher = ''
      }
      const data = {
        page: this.currentPageInventory,
        size: this.rowPageInventory,
        name: this.dataSearchInventory,
        publisherIds: publisher,
        resolutionId: this.data.resolusi,
        type: typeInventory,
      }
      this.$store.dispatch('placement/getInventories', data).finally(() => {
        this.isLoading = false
      })
    },
    changePage(ev) {
      if (ev > 0) {
        this.currentPage = ev
        this.getDataCreative()
      }
    },
    changeRowPage(ev) {
      this.rowPage = ev
      this.getDataCreative()
    },
    changeResolution() {
      const data = this.dataResolution.find(
        (item) => item.id === this.data.resolusi
      )
      this.selectedDataResolution = data.width + 'x' + data.height
      this.getDataCreative()
      this.getInventories()
      this.selected = []
      this.selected2 = []
      this.selectedData = []
      this.selectedData2 = []
    },
    getDataCreative() {
      this.isLoading = true
      const data = {
        page: this.currentPage,
        size: this.rowPage,
        name: this.dataSearch,
        format: 'all',
        resolutionId: this.data.resolusi,
      }
      this.$store.dispatch('creative/getCreative', data).finally(() => {
        this.isLoading = false
      })
    },
    close() {
      this.popup = false
    },
    selectItem(x) {
      if (this.selected.length === 0) {
        this.selected.push(x.id)
        this.selectedData.push(x)
      } else if (this.selected.find((item) => item === x.id) !== x.id) {
        this.selected.push(x.id)
        this.selectedData.push(x)
      } else {
        this.selected.splice(this.selected.indexOf(x.id), 1)
        this.selectedData.splice(this.selectedData.indexOf(x), 1)
      }
    },
    selectItem2(x) {
      if (this.selected2.length === 0) {
        this.selected2.push(x.id)
        this.selectedData2.push(x)
      } else if (this.selected2.find((item) => item === x.id) !== x.id) {
        this.selected2.push(x.id)
        this.selectedData2.push(x)
      } else {
        this.selected2.splice(this.selected2.indexOf(x.id), 1)
        this.selectedData2.splice(this.selectedData2.indexOf(x), 1)
      }
    },
    selectItem3(x) {
      if (this.selected3.length === 0) {
        this.selected3.push(x.id)
        this.selectedData3.push(x)
      } else if (this.selected3.find((item) => item === x.id) !== x.id) {
        this.selected3.push(x.id)
        this.selectedData3.push(x)
      } else {
        this.selected3.splice(this.selected3.indexOf(x.id), 1)
        this.selectedData3.splice(this.selectedData3.indexOf(x), 1)
      }
    },

    assignBtn() {
      this.popup = false
    },
    deleteCreative(x) {
      this.selected.splice(this.selected.indexOf(x.id), 1)
      this.selectedData.splice(this.selectedData.indexOf(x), 1)
    },
    deleteInventory(x) {
      this.selected2.splice(this.selected2.indexOf(x.id), 1)
      this.selectedData2.splice(this.selectedData2.indexOf(x), 1)
    },
    deleteAudience(x) {
      this.selected3.splice(this.selected3.indexOf(x.id), 1)
      this.selectedData3.splice(this.selectedData3.indexOf(x), 1)
    },
    createPlacement() {
      this.$notifier.showMessage({
        content: 'Create placement...',
        type: 'loading',
      })
      // if (this.data.placementPeriod !== null) {
      //   this.startDate = this.data.placementPeriod[0]
      //   this.endDate = this.data.placementPeriod[1]
      // } else {
      //   this.startDate = ''
      //   this.endDate = ''
      // }

      this.isLoading = true
      const sto = setTimeout(
        () =>
          this.$store
            .dispatch('placement/createPlacement', {
              campaignId: this.detailCampaign.id,
              name: this.data.placementName,
              delivery: {
                dailyLimits: [
                  {
                    typeId: parseInt(this.data.dailyLimit1),
                    value: parseInt(this.data.dailyLimit2),
                  },
                ],
                priorityId: this.data.priority,
                resolutionId: this.data.resolusi,
                cpm: this.data.cpm,
                isDynamicBidding: this.data.isActive,
                bookedImps: parseInt(this.data.bookedImps),
              },
              targeting: {
                inventoryIds: this.selected2,
                interestIds: this.selected3,
              },
              creativeIds: this.selected,
            })
            .then((res) => {
              this.isLoading = false
              if (res.status === 200) {
                this.$store.commit('campaign/SET_EDIT_CAMPAIGN', true)
                this.$notifier.showMessage({
                  content: 'Placement created.',
                  type: 'success',
                })
                this.$router.go(-1)
                clearInterval(sto)
              } else {
                this.showMessage = true
                const keys = Object.keys(res?.data.data.errors[0])
                const arr = []
                keys.forEach((key, index) => {
                  arr.push(res?.data.data.errors[0][key])
                })
                this.messageError = arr.join(', ')
                this.$notifier.showMessage({
                  content:
                    'Create placement failed. Please try again! ' +
                    this.messageError,
                  type: 'failed',
                })
                clearInterval(sto)
              }
            })
            .catch(() => {
              clearInterval(sto)
              this.isLoading = false
            }),
        1000
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.kg-container {
  padding: 20px;
  width: 100%;
  .btn-create {
    max-width: 240px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    height: 34px;
    padding-left: 15px;
    padding-right: 15px;
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
  .btn-create:hover {
    background-color: rgb(243 244 246);
    border: 1px solid rgb(243 244 246);
  }
  .title-1 {
    margin-bottom: 5px;
    margin-top: 20px;
    font-family: 'Cabin';
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #7a8a99;
  }
  .title-2 {
    font-family: 'Cabin';
    font-weight: 600;
    font-size: 28px;
    color: #2b3947;
    margin-bottom: 20px;
  }
  .kg-card {
    padding: 10px 0px 10px 0px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    .header-card {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
      .title-card {
        font-family: 'Cabin';
        font-weight: 600;
        font-size: 20px;
        color: #2b3947;
        padding-left: 20px;
      }
      .title-action {
        font-family: 'Cabin';
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 14px;
        color: #454545;
        margin-left: 20px;
      }
      .icon-arrow {
        margin-right: 20px;
      }
    }
    .body-card {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
      .subtitle-card {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #5c6b7a;
        margin-bottom: 20px;
      }
      .cpm-dimension {
        width: 100%;
        height: 198px;
        background: #fafafa;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        margin-top: 20px;
        padding: 20px;
        .dynamic-bidding {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #5c6b7a;
        }
        .sub-input2 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #757575;
          margin-bottom: 15px;
        }
        .divider-vertical {
          width: 0px;
          height: 16px;
          border: 1px solid #c3ced9;
          margin-left: 8px;
        }
        .input-container {
          display: flex;
          width: 100%;
          margin-bottom: 5px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 5px;
        }

        .icon {
          // padding: 10px;
          background: transparent;
          min-width: 50px;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #5c6b7a;
          padding-left: 10px;
          margin-right: 10px;
        }
        .input-field {
          width: 100%;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #a1adb9;
          outline: none;
        }
      }
      .audience-title {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #757575;
      }

      .card-creative {
        width: 100%;
        min-height: 130px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 15px;
        .img-content {
          width: 100px;
          object-fit: cover;
          border-radius: 5px;
          max-height: 100px;
        }
        .data-content {
          padding-left: 20px;
          padding-right: 15px;
          .title-creative {
            font-family: 'Cabin';
            font-weight: 600;
            font-size: 18px;
            width: 100%;
            color: #454545;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size-creative {
            font-family: 'Cabin';
            font-weight: 400;
            font-size: 12px;
            color: #9a9a9a;
          }
        }
        .k-btn {
          width: 100%;
          height: 34px;
          background: #1b63d4;
          border: 1px solid #1b63d4;
          border-radius: 5px;
          margin-top: 10px;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
          }
        }
        .k-btn:hover {
          background-color: rgb(243 244 246);
        }
      }

      .k-pagination {
        margin-top: 20px;
        margin-bottom: 20px;
        .k-btn {
          width: 165px;
          background: #f1f1f1;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          height: 40px;
          padding-left: 15px;
          padding-right: 15px;
          cursor: pointer;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
            padding-bottom: 1px;
            color: #9a9a9a;
            padding-left: 10px;
          }
        }
        .k-btn:hover {
          background-color: rgb(243 244 246);
          border: 0px;
        }
      }
      .show-search {
        margin-top: 20px;
        width: 100%;
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
        .title-search {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 100%;
        }
        .title-search:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .title-form {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .to-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-right: 10px;
        margin-left: 10px;
      }
      .hr-vertical {
        border: 1px solid #e2e2e2;
        height: 45px;
        margin-right: 30px;
        margin-left: 30px;
      }
      .sub-input {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 12px;
        color: #757575;
      }
      .desc-inventory {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #757575;
        margin-bottom: 20px;
      }
      .fill-out {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        align-items: center;
        text-decoration-line: underline;
        color: #1b63d4;
        margin-bottom: 20px;
      }
      .select-title {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #454545;
        margin-bottom: 5px;
      }

      .save-btn {
        width: 100%;
        background: #1b63d4;
        border: 1px solid #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 34px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 10px;
        cursor: pointer;
        .name-btn {
          font-family: 'Cabin';
          font-weight: 700;
          font-size: 14px;
          padding-bottom: 1px;
          color: #ffffff;
          padding-left: 10px;
        }
      }
    }
    .body-card-2 {
      min-height: 100%;
      background: #fafafa;
      margin-top: 0px;
      border-end-end-radius: 10px;
      border-end-start-radius: 10px;
      .creative-1 {
        font-family: 'Cabin';
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
        color: #454545;
      }
      .creative-2 {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 16px;
        color: #757575;
        margin-bottom: 20px;
      }
      .container-assigned {
        padding: 20px;
        .card-assigned {
          width: 100%;
          height: 66px;
          background: #ffffff;
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          margin-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
          .title-creative {
            font-family: 'Cabin';
            font-weight: 600;
            font-size: 18px;
            width: 100%;
            color: #454545;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size-creative {
            font-family: 'Cabin';
            font-weight: 400;
            font-size: 12px;
            color: #9a9a9a;
          }
          .btn-delete {
            width: 40px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
          }
          .btn-delete:hover {
            background-color: rgb(243 244 246);
          }
        }
      }
    }

    .switch-bg {
      width: 45px;
      height: 24px;
      padding-left: 1px;
      background-color: #8f919b;
    }
    .switch-btn {
      width: 22px;
      height: 22px;
    }
    .color-default {
      background-color: #1b63d4;
    }
  }
  .hr-horizontal {
    border: 1px solid #e2e2e2;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title-2 {
    font-family: 'Cabin';
    font-weight: 600;
    font-size: 24px;
    color: #454545;
    margin-bottom: 20px;
  }

  .popup {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    .k-header {
      height: 60px;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      .title-assign {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #333333;
      }
      .dimension {
        margin-left: 15px;
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #5c6b7a;
        margin-right: 15px;
        .border-circle {
          width: 88px;
          height: 30px;
          background: #ffffff;
          border: 1px solid #c3ced9;
          border-radius: 500px;
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #5c6b7a;
          margin-left: 10px;
        }
      }
      .show-searchbar {
        width: 451px;
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
        .title-search {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 100%;
        }
        .title-search:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .btn-close-creative {
        width: 40px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #c3ced9;
        border-radius: 5px;
      }
      .btn-close-creative:hover {
        background-color: rgb(243 244 246);
      }
    }
    .content-popup {
      width: 100%;
      height: 100%;
      padding: 15px;
      background: #fafafa;
      border: 1px solid #e2e2e2;

      .show-searchbar {
        width: 451px;
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
        .title-search {
          font-family: 'Cabin';
          color: #9a9a9a;
          font-size: 14px;
          width: 100%;
        }
        .title-search:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: none;
        }
      }
      .filter-bar {
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #5c6b7a;
      }
      .card-inventory {
        width: 100%;
        margin-bottom: 15px;
        height: 72px;
        background: #ffffff;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        padding-left: 15px;
        padding-right: 15px;
        .left-inventory {
          .title-inv {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
          }
          .subtitle-inv {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #a1adb9;
          }
        }
        .k-pagination {
          margin-top: 20px;
          margin-bottom: 20px;
          .k-btn {
            width: 165px;
            background: #f1f1f1;
            border: 1px solid #f1f1f1;
            border-radius: 5px;
            height: 40px;
            padding-left: 15px;
            padding-right: 15px;
            cursor: pointer;
            .name-btn {
              font-family: 'Cabin';
              font-weight: 700;
              font-size: 14px;
              padding-bottom: 1px;
              color: #9a9a9a;
              padding-left: 10px;
            }
          }
          .k-btn:hover {
            background-color: rgb(243 244 246);
            border: 0px;
          }
        }
        .k-btn2 {
          width: 154px;
          height: 34px;
          background: #1b63d4;
          border: 1px solid #1b63d4;
          border-radius: 5px;
          margin: 10px 0px 0px 0px;
          cursor: pointer;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
          }
        }
        .k-btn2:hover {
          background-color: rgb(243 244 246);
        }
      }
      .card-creative {
        width: 200px;
        height: 100%;
        max-height: 334px;
        min-height: 130px;
        background: #ffffff;
        border: 1px solid #c3ced9;
        border-radius: 5px;
        .img-content {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
          border-end-end-radius: 0px;
          border-end-start-radius: 0px;
        }
        .creative-desc {
          padding: 10px 15px 10px 15px;
          height: 100%;
          .title-creative {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #5c6b7a;
            margin-bottom: 2px;
          }

          .ellipsis-2line {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .template-creative {
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
          }
          .k-btn2 {
            width: 100%;
            height: 34px;
            background: #1b63d4;
            border: 1px solid #1b63d4;
            border-radius: 5px;
            margin: 10px 0px 0px 0px;
            cursor: pointer;
            .name-btn {
              font-family: 'Cabin';
              font-weight: 700;
              font-size: 14px;
            }
          }
          .k-btn2:hover {
            background-color: rgb(243 244 246);
          }
        }
      }
      .card-audience {
        width: 100%;
        min-height: 130px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 15px;
        .img-content {
          width: 100px;
          object-fit: cover;
          border-radius: 5px;
          max-height: 100px;
        }
        .data-content {
          padding-left: 20px;
          padding-right: 15px;
          .title-creative {
            font-weight: 600;
            font-size: 18px;
            width: 100%;
            color: #454545;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size-creative {
            font-weight: 400;
            font-size: 12px;
            color: #9a9a9a;
          }
          .k-btn {
            width: 100%;
            height: 34px;
            background: #1b63d4;
            border: 1px solid #1b63d4;
            border-radius: 5px;
            margin-top: 10px;
            .name-btn {
              font-weight: 700;
              font-size: 14px;
            }
          }
          .k-btn:hover {
            background-color: rgb(243 244 246);
          }
        }
      }

      .k-pagination {
        margin-top: 20px;
        margin-bottom: 20px;
        .k-btn {
          width: 165px;
          background: #f1f1f1;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          height: 40px;
          padding-left: 15px;
          padding-right: 15px;
          cursor: pointer;
          .name-btn {
            font-family: 'Cabin';
            font-weight: 700;
            font-size: 14px;
            padding-bottom: 1px;
            color: #9a9a9a;
            padding-left: 10px;
          }
        }
        .k-btn:hover {
          background-color: rgb(243 244 246);
          border: 0px;
        }
      }
    }
    .scroll-content {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
    }
    .scroll-content::-webkit-scrollbar {
      display: none;
    }

    .k-btn {
      width: 195px;
      background: #1b63d4;
      border: 1px solid #1b63d4;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      margin: 15px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: white;
        padding-left: 10px;
      }
    }
    .k-btn:hover {
      background-color: #053f67;
      border: 0px;
    }
    .k-btn-2 {
      width: 195px;
      background: #ffffff;
      border: 1px solid #1b63d4;
      border-radius: 5px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      margin: 15px;
      cursor: pointer;
      .name-btn {
        font-family: 'Cabin';
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 1px;
        color: #1b63d4;
        padding-left: 0px;
      }
    }
    .k-btn-2:hover {
      background-color: rgb(243 244 246);
      border: 0px;
    }
  }
}
</style>
