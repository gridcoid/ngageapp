<template>
  <div v-if="!isLoading" class="option-card">
    <div
      v-for="(item, index) in dataAudio"
      :key="index"
      class="cursor-pointer no-select list-card flex items-center justify-between"
    >
      <div
        class="flex items-center justify-start"
        style="width: 80%"
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
          <div class="mood">
            {{ item.mood ? item.mood.join(', ') : '' }}
          </div>
        </div>
      </div>
      <audio :id="'yourAudio' + index">
        <source :src="item.fileUrl" type="audio/mpeg" />
      </audio>
      <div v-if="index !== 0">
        <img
          :id="'audioControl' + index"
          src="https://dev-space.unimind.id/icon/play_v1.png"
          style="height: 15px; margin-right: 5px"
          @click="togglePlay(index)"
        />
      </div>
      <div v-else>
        <img
          :id="'audioControl' + index"
          src=""
          style="height: 15px; margin-right: 5px"
          @click="togglePlay(index)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'FormAudio',
  props: {
    titleForm: {
      default: '',
      type: String,
    },
    mood: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      dataAudio: {},
      defaultData: {},
      selectedAudio: {},
      isLoading: false,
    }
  },
  computed: {
    ...mapState({
      // dataForm: (state) => {
      //   return state.template.dataForm
      // },
      // selectedResolution: (state) => {
      //   return state.template.selectedResolution
      // }
    }),

    // dataOption () {
    //   return this.dataForm.find(item => item.title === this.titleForm)
    //     .default
    // }
  },
  mounted() {
    // this.getTemplateDetail()
    this.getAudio()
  },
  methods: {
    async getAudio() {
      await this.$axios
        .get('audio?mood=' + this.mood)
        .then((res) => {
          this.dataAudio = res?.data.data
          this.dataAudio.forEach((item, index) => {
            if (index === 1) {
              this.$set(item, 'status', true)
            } else {
              this.$set(item, 'status', false)
            }
          })
          this.selectedAudio = {
            fileUrl: this.dataAudio[1].fileUrl,
            name: this.dataAudio[1].name,
          }
          this.$emit('changeAudio', this.selectedAudio)
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Get Audio failed. Please try again ! ' + error,
            type: 'failed',
          })
        })
    },
    togglePlay(index, type = '') {
      const yourAudio = document.getElementById('yourAudio' + index)
      const ctrl = document.getElementById('audioControl' + index)
      if (type === '' && index !== 0) {
        const pause =
          ctrl.src === 'https://dev-space.unimind.id/icon/pause_v1.png'
        ctrl.src = pause
          ? 'https://dev-space.unimind.id/icon/play_v1.png'
          : 'https://dev-space.unimind.id/icon/pause_v1.png'
        const method = pause ? 'pause' : 'play'
        yourAudio[method]()
      } else if (type === 'play') {
        ctrl.src = 'https://dev-space.unimind.id/icon/pause_v1.png'
        yourAudio.pause()

        setTimeout(() => {
          yourAudio.currentTime = 0
          yourAudio.play()
        }, 500)
      }

      this.dataAudio.forEach((item, indexData) => {
        if (indexData !== index) {
          this.$set(item, 'status', false)
          const yourAudio = document.getElementById('yourAudio' + indexData)
          const ctrl = document.getElementById('audioControl' + indexData)
          if (indexData === 0) {
            ctrl.src = ''
          } else {
            ctrl.src = 'https://dev-space.unimind.id/icon/play_v1.png'
          }
          const method = 'pause'
          yourAudio[method]()
        } else {
          this.$set(item, 'status', true)
          this.selectedAudio = {
            fileUrl: item.fileUrl,
            name: item.name,
          }
          this.$emit('changeAudio', this.selectedAudio)
        }
      })
    },
    changeStatus(data, indexData) {
      this.dataAudio.forEach((item, index) => {
        if (index === indexData) {
          this.$set(item, 'status', true)
          this.selectedAudio = {
            fileUrl: item.fileUrl,
            name: item.name,
          }
          this.$emit('changeAudio', this.selectedAudio)
          this.togglePlay(indexData)
        } else {
          this.$set(item, 'status', false)
          this.togglePlay(indexData)
        }
      })
    },
    callAudio() {
      const activeAudio = this.dataAudio.find((item) => item.status)
      const activeAudioIndex = this.dataAudio.indexOf(activeAudio)
      this.togglePlay(activeAudioIndex, 'play')
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

::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #e2e2e2;
  -webkit-border-radius: 7px;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
.option-card {
  height: 470px;
  overflow-y: scroll;
  overflow-x: hidden;
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
      font-weight: 550;
      font-size: 16px;
      color: #5c6b7a;
      margin-left: 12px;
      line-height: 18px;
    }
    .mood {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #5c6b7a;
    }
  }
}
</style>
