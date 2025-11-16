<template>
  <div class="modal-dialog">
    <div class="overlay-bg" @click="$emit('close-modal')" />
    <div class="card-popup" :style="'width: ' + width + '%;'">
      <!-- <div class="flex items-center justify-between k-header">
        <div class="flex items-center">
          <div v-if="icon" class="icon-header">
            <slot name="icon" />
          </div>
          <div class="title-header">
            <slot name="title" />
          </div>
        </div>
        <img
          src="~/assets/images/campaign/icon_close.svg"
          class="icon-close"
          @click="$emit('close-modal')"
        >
      </div> -->
      <div
        class="k-body"
        :style="
          borderHeader ? 'border-top: 1px solid #e2e2e2;' : 'border-top: 0px;'
        "
      >
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '30',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    heightBody: {
      type: String,
      default: '300',
    },
    borderHeader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-dialog {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  .overlay-bg {
    height: 100%;
    width: 100%;
    background: rgba(10, 10, 10, 0.5);
    cursor: pointer;
  }
  .card-popup {
    height: fit-content;
    width: 400px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.05);
    border-radius: 5px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .k-header {
      .icon-header {
        margin-left: 20px;
      }
      .title-header {
        font-weight: 600;
        font-size: 18px;
        color: #333333;
        margin-left: 10px;
        padding: 20px 0px 20px 10px;
      }
      .icon-close {
        cursor: pointer;
        margin-right: 20px;
      }
    }
    .k-body {
      border-top: 1px solid #e2e2e2;
    }
  }
}
</style>
