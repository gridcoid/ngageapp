<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="flex justify-between header-modal">
        <div class="flex items-center">
          <i class="ti ti-filter text-2xl mr-2 text-gray-400" />
          <div class="name-header">Filter & Sort Data</div>
        </div>
        <img
          src="~/assets/images/campaign/icon_close.svg"
          class="icon-close"
          @click="$emit('close-modal')"
        />
      </div>
      <div class="status-filter flex items-center justify-around">
        <div
          class="flex items-center justify-center card-filter"
          :style="
            activeStatus === 'Filter' ? 'border-bottom: 2px solid #1B63D4;' : ''
          "
          @click="statusActive('Filter')"
        >
          <div class="name-status">Filter Data</div>
        </div>
        <div
          class="flex items-center justify-center card-filter"
          :style="
            activeStatus === 'Sort' ? 'border-bottom: 2px solid #1B63D4;' : ''
          "
          @click="statusActive('Sort')"
        >
          <div class="name-status">Sort Data</div>
        </div>
      </div>
      <div class="content-modal">
        <div v-if="activeStatus === 'Filter'">
          <slot name="filter" />
        </div>
        <div v-if="activeStatus === 'Sort'">
          <slot name="sort" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-1 footer-card">
        <el-button
          icon="el-icon-check"
          type="primary"
          @click="$emit('save-filter')"
        >
          Apply
        </el-button>
        <el-button type="primary" @click="$emit('reset-filter')" plain>
          Reset All
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      radio: 'asc',
      activeStatus: 'Filter',
      createdAt: null,
      advertiserIds: '',
      campaignTypeId: '',
    }
  },
  computed: {
    ...mapState({}),
  },
  mounted() {
    this.getAll()
  },
  methods: {
    statusActive(x) {
      this.activeStatus = x
    },
    getAll() {
      this.getAdvertiser()
      this.getCampaignTypes()
    },
    getAdvertiser() {
      this.$store
        .dispatch('campaign/getAdvertiser')
        .then(() => {})
        .catch(() => {})
    },
    getCampaignTypes() {
      this.$store
        .dispatch('campaign/getCampaignTypes')
        .then(() => {})
        .catch(() => {})
    },
    reset() {
      this.createdAt = null
      this.advertiserIds = ''
      this.campaignTypeId = ''
      this.radio = ''
    },
    save() {
      const data = {
        advertiserIds: this.advertiserIds,
        campaignTypeId: this.campaignTypeId,
        createdAt: this.createdAt,
        radio: this.radio,
      }
      // this.$store.commit('campaign/SET_DATA_FILTER', data)
    },
  },
}
</script>
<style lang="scss" scoped>
.el-radio__input.is-checked + .el-radio__label {
  color: #000000 !important;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: 'Cabin';
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.modal-overlay {
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  border: 1px solid #e2e2e2;
  .modal {
    background-color: white;
    height: 100vh;
    width: 300px;
    .header-modal {
      padding: 15px 20px 15px 20px;
      border-bottom: 1px solid #e2e2e2;
      .name-header {
        font-family: 'Cabin';
        font-size: 16px;
        line-height: 140%;
        color: #454545;
      }
      .icon-header {
        margin-right: 10px;
      }
      .icon-close {
        cursor: pointer;
      }
    }
    .status-filter {
      width: 100%;
      height: 44px;
      background: #ffffff;
      border-bottom: 1px solid #e2e2e2;
      border-radius: 5px;
      .card-filter {
        width: 100%;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        .name-status {
          color: #454545;
          font-weight: 400;
          font-family: 'Cabin';
          font-size: 14px;
          margin-left: 10px;
          line-height: 40px;
        }
      }
    }
    .content-modal {
      padding: 16px 15px 16px 15px;
      .date-filter {
        width: 100%;
        .select-filter {
          width: 120px;
          height: 34px;
          background: #1b63d4;
          border: 1px solid #1b63d4;
          border-radius: 5px;
        }
      }
    }

    .footer-card {
      border-top: 1px solid #e2e2e2;
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 12px;
      .btn-discard {
        color: #1b63d4;
        width: 100%;
      }
      .btn-discard:hover {
        background-color: rgb(243 244 246);
        border: 0px;
      }
      .save-btn {
        width: 100%;
        background: #1b63d4;
        border: 1px solid #1b63d4;
        color: #ffffff;
        border-radius: 5px;
        height: 36px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 10px;
        cursor: pointer;
        .name-btn {
          font-weight: 700;
          font-family: 'Cabin';
          font-size: 14px;
          padding-bottom: 1px;
          color: #ffffff;
          padding-left: 10px;
        }
      }
      .save-btn:hover {
        background-color: #053f67;
        border: 0px;
      }
    }
  }
}
</style>
