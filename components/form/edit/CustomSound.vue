<template>
  <div style="position: relative">
    <div v-if="audioUrl" class="option-card">
      <div
        class="upload-demo cursor-pointer no-select list-card flex items-center justify-between"
        drag
        action=""
        :on-change="handleChange"
        :auto-upload="false"
        :show-file-list="false"
      >
        <div class="flex items-center justify-start" style="width: 80%">
          <div class="flex items-center justify-center" @click="deleteAudio()">
            <IconClose class="flex items-center justify-center" />
          </div>
          <div class="mr-2 title-option">
            {{ audioTitle }}
          </div>
        </div>

        <audio id="yourAudio">
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
        <img
          id="audioControl"
          src="https://dev-space.unimind.id/icon/play_v1.png"
          style="height: 15px; margin-right: 5px"
          @click="togglePlay()"
        />
      </div>
    </div>
    <span v-if="!audioUrl">
      <el-upload
        class="upload-demo"
        drag
        action=""
        :on-change="handleChange"
        :auto-upload="false"
        :show-file-list="false"
        :before-upload="beforeAudioUpload"
      >
        <div class="flex flex-col upload-card pt-4 pb-4 pr-2">
          <div class="flex items-center">
            <div class="mr-2 icon-upload">
              <iconCustomSound />
            </div>

            <div class="flex flex-col">
              <div class="empty-space">Upload Sound Here</div>
              <div class="upload-name">Supported format:<br />.mp3, .wav</div>
            </div>
          </div>
          <button
            class="flex items-center justify-center btn-upload no-select"
            :disabled="audioLoaded"
          >
            <IconUpload />
            <span class="name-btn">{{
              audioLoaded ? 'Uploading...' : 'Upload File'
            }}</span>
          </button>
        </div>
      </el-upload>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FormEditCustomSound',
  props: {
    titleAudio: {
      default: '',
      type: String,
    },
    dataAudio: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      audioUrl: '',
      audioData: '',
      audioLoaded: false,
      audioTitle: '',
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.creative.dataForm
      },
    }),
  },
  mounted() {
    this.getData()
  },
  methods: {
    togglePlay(type = '') {
      const audio = document.getElementById('yourAudio')
      const audioControl = document.getElementById('audioControl')
      if (audio !== null) {
        if (audio.paused || type === 'play') {
          audio.currentTime = 0
          audio.play()
          audioControl.src = 'https://dev-space.unimind.id/icon/pause_v1.png'
        } else {
          audio.pause()
          audioControl.src = 'https://dev-space.unimind.id/icon/play_v1.png'
        }
      }
    },
    deleteAudio() {
      this.audioUrl = ''
      this.audioLoaded = false
      const data = {
        title: this.titleAudio,
        type: 'Custom_audio',
        src: null,
      }
      this.$emit('reloadback', data)
    },
    beforeAudioUpload(file) {
      const isAudio = file.type === 'audio/mpeg'
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isAudio) {
        this.$notifier.showMessage({
          content: 'Audio must be mp3 or wav format!',
          type: 'failed',
        })
      }
      if (!isLt10M) {
        this.$notifier.showMessage({
          content: 'Audio size can not exceed 10MB!',
          type: 'failed',
        })
      }
      return isAudio && isLt10M
    },
    handleChange(file) {
      const formatData = file.raw.type
      if (formatData === 'audio/mpeg') {
        if (file.size / 1024 / 1024 > 10) {
          this.$notifier.showMessage({
            content: 'File size cannot exceed 10MB!',
            type: 'failed',
          })
        } else {
          this.audioData = file
          this.audioLoaded = true
          this.uploadFile()
        }
      } else {
        this.$notifier.showMessage({
          content: 'Audio must be wav or mp3 format',
          type: 'failed',
        })
      }
    },
    async uploadFile() {
      const data = new FormData()
      data.append('file', this.audioData.raw)
      await this.$axios
        .post('audio/upload', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const fileKey = res?.data.data.fileKey
          this.audioUrl = fileKey
          this.audioTitle = res?.data.data.fileName
          const indexForm = this.dataForm.findIndex(
            (x) => x.title === this.titleAudio
          )
          const data = {
            title: this.titleAudio,
            type: 'Custom_audio',
            src: fileKey,
          }
          this.$store.commit('creative/SET_DATA_FORM', data)
          this.$emit('reloadback', data)
          this.audioLoaded = false
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: 'Upload failed. Please try again ! ' + error,
            type: 'failed',
          })
          this.audioUpload = false
        })
    },
    getData() {
      this.defaultCustomSound = this.dataForm.find(
        (item) => item.title === this.titleAudio
      )

      if (this.defaultCustomSound.default === null) {
        this.audioUrl = ''
        this.audioTitle = ''
      } else {
        this.audioUrl = this.defaultCustomSound.default
        this.audioTitle = this.audioUrl.substring(
          this.audioUrl.lastIndexOf('/') + 1
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-demo {
  width: 100%;
  .el-upload {
    width: 100%;
  }
}

.upload-card {
  height: 100%;
  border: 1px dashed #1b63d4;
  .icon-upload {
    height: 45.5px;
    padding-left: 15px;
    margin-right: 8px;
  }
  .empty-space {
    font-weight: 700;
    font-size: 14px;
    text-align: left;
    color: #333333;
  }
  .upload-name {
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    color: #757575;
  }

  .btn-upload {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: #ffffff;
    border: 1px solid #1b63d4;
    color: #1b63d4;
    border-radius: 5px;
    height: 34px;
    margin-top: 20px;
    cursor: pointer;
    .name-btn {
      font-weight: 700;
      font-size: 14px;
      color: #1b63d4;
      padding-left: 10px;
    }
  }
  .btn-upload:hover {
    background-color: rgb(243 244 246);
    border: 0px;
  }
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
    .title-option {
      font-family: 'Cabin';
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      color: #5c6b7a;
      margin-left: 12px;
      line-height: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

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
</style>
