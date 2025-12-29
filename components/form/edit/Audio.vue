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
            {{ item.mood.join(', ') }}
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
  name: 'FormEditAudio',
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
      dataForm: (state) => {
        return state.creative.dataForm
      },
    }),

    currentValue() {
      const data = this.dataForm.find(
        (item) => item.title === this.titleForm
      ).default
      // data.forEach((item, index) => {
      //   item.url = 'https://unimind.kgnow.com/' + item.url
      // })
      return data
    },
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    async getAudio() {
      await this.$axios
        .get('audio?mood=' + this.mood)
        .then((res) => {
          this.dataAudio = res.data.data
          this.dataAudio.forEach((item, index) => {
            this.$set(item, 'status', false)
          })
          const index = this.dataAudio.findIndex(
            (x) => x.name === this.currentValue.name
          )
          this.dataAudio[index].status = true
          this.selectedAudio = {
            fileUrl: this.dataAudio[index].fileUrl,
            name: this.dataAudio[index].name,
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
    getDetail() {
      this.isLoading = true
      this.$store
        .dispatch('creative/getDetail', {
          id: this.$route.params.edit,
        })
        .then((res) => {
          this.getAudio()
        })
        .finally(() => {
          this.isLoading = false
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
      font-weight: 400;
      font-size: 16px;
      color: #5c6b7a;
      margin-left: 12px;
    }
  }
}
</style>
