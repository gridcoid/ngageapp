<template>
  <div class="option-card">
    <div
      v-for="(item, index) in dataOption"
      v-if="!isLoading"
      :key="index"
      class="cursor-pointer no-select list-card flex items-center justify-between"
    >
      <div
        class="flex items-center justify-start"
        style="width: 70%"
        @click="changeStatus(item, index)"
      >
        <div
          class="circle flex items-center justify-center"
          :style="item.status ? 'border: 1px solid #1B63D4;' : ''"
        >
          <div v-if="item.status" class="circle-active" />
        </div>
        <div class="title-option">
          {{ item.name }}
        </div>
      </div>
      <audio :id="'yourAudio' + index">
        <source :src="item.url" type="audio/mpeg" />
      </audio>
      <img
        :id="'audioControl' + index"
        src="https://dev-space.unimind.id/icon/play_v1.png"
        style="height: 15px; margin-right: 5px"
        @click="togglePlay(index)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    titleForm: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      defaultData: {},
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.template.dataForm
      },
      selectedResolution: (state) => {
        return state.template.selectedResolution
      },
    }),

    dataOption() {
      return this.dataForm.find((item) => item.title === this.titleForm).default
    },
  },
  mounted() {
    this.getTemplateDetail()
  },
  methods: {
    togglePlay(index) {
      const yourAudio = document.getElementById('yourAudio' + index)
      const ctrl = document.getElementById('audioControl' + index)
      const pause =
        ctrl.src === 'https://dev-space.unimind.id/icon/pause_v1.png'
      ctrl.src = pause
        ? 'https://dev-space.unimind.id/icon/play_v1.png'
        : 'https://dev-space.unimind.id/icon/pause_v1.png'
      const method = pause ? 'pause' : 'play'
      yourAudio[method]()
      return false
    },
    changeStatus(data, index) {
      const payload = {
        index,
        data,
        titleForm: this.titleForm,
      }
      this.$store.commit('template/SET_CHANGE_OPTION', payload)
      this.changeData()
    },
    getTemplateDetail() {
      this.changeData()
    },
    changeData() {
      const data = {
        title: this.titleForm,
        default: this.dataOption,
        type: 'Option',
      }
      this.$emit('changeOption', data)
    },
  },
}
</script>

<style lang="scss" scoped>
#player-container #play-pause {
  cursor: pointer;
  text-indent: -999999px;
  height: 40px;
  width: 40px;
  padding: 12px 18px;
  z-index: 2;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAyNHYtMjRsMjAgMTItMjAgMTJ6Ii8+PC9zdmc+);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  background-color: gainsboro;
}
.play {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAyNHYtMjRsMjAgMTItMjAgMTJ6Ii8+PC9zdmc+);
}
.pause {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMjRoLTZ2LTI0aDZ2MjR6bTEwLTI0aC02djI0aDZ2LTI0eiIvPjwvc3ZnPg==) !important;
}
.option-card {
  .list-card {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border: 1px solid #c3ced9;
    border-radius: 5px;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 8px;
    .circle {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 1px solid #7a8a99;
      cursor: pointer;
    }
    .circle-active {
      height: 10px;
      width: 10px;
      background: #1b63d4;
      border-radius: 50%;
    }
    .title-option {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #5c6b7a;
      margin-left: 12px;
    }
  }
}
</style>
