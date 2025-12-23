<template>
  <div class="containers" style="width: 100%">
    <div
      class="flex items-center header-content filter-content justify-between"
    >
      <div class="flex items-center header-content">
        <div class="title-header">Dashboard</div>
        <ButtonDefault
          icon="add"
          text="Add Widget"
          class="ml-4"
          type="secondary"
          @click.native="toAddWidget()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  head() {
    return {
      title: 'Dashboard - ' + this.$config.appName,
    }
  },
  data() {
    return {
      //
    }
  },
  methods: {
    toAddWidget() {
      this.$router.push('/widget/create')
    },
  },
}
</script>

<style lang="scss" scoped>
.containers {
  padding: 20px;
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
    .status-filter {
      width: 420px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
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
      font-family: 'Cabin';
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      color: #1b63d4;
      font-size: 14px;
      font-weight: 700;
      height: 36px;
      width: 138px;
      align-items: center;
      padding-top: 9px;
      padding-left: 14px;
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
  .body-content {
    margin-top: 20px;
    .k-table {
      .k-circle {
        width: 11px;
        height: 11px;
        border: 2px solid #7bbc49;
        border-radius: 50%;
        margin-right: 13px;
      }
      .k-title {
        font-family: 'Cabin';
        font-weight: 500;
        font-size: 16px;
        color: #454545;
      }
      .k-subtitle {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 12px;
        color: #9a9a9a;
      }

      .status-card {
        font-family: 'Cabin';
        color: #7bbc49;
        font-weight: 400;
        font-size: 14px;
        background: #ecf5e5;
        border-radius: 5px;
        height: 25px;
        margin-top: 10px;
        width: 120px;
      }
      .cpm-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #454545;
      }
      .view-text {
        font-family: 'Cabin';
        font-weight: 400;
        font-size: 14px;
        color: #454545;
      }
      .increase-text {
        font-family: 'Cabin';
        font-size: 12px;
        font-weight: 400;
        color: #454545;
      }

      .btn-icon {
        height: 100%;
        padding: 10px;
        width: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        // margin-left: 10px;
        cursor: pointer;
        margin-right: 10px;
      }
      .btn-icon:hover {
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
    .summary-card {
      padding: 10px 20px 0px 20px;
      height: 100%;
      .item-summary {
        height: 30px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 14px;
          color: #333333;
          width: 60px;
        }
        .value-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
  .dialog-filter {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 100%;
    background: #fafafa;
  }
  .popup {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    // height: 100%;
    .status-filter {
      width: 100%;
      height: 44px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
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
    }
    .summary-card {
      padding: 10px 20px 0px 20px;
      height: 100%;
      .item-summary {
        height: 30px;
        .title-1 {
          font-family: 'Cabin';
          font-weight: 600;
          font-size: 14px;
          color: #333333;
          width: 60px;
        }
        .value-1 {
          font-family: 'Cabin';
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
}
</style>
