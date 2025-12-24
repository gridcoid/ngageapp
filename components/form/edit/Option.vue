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
        return state.creative.dataForm
      },
    }),

    dataOption() {
      const data = this.dataForm.find(
        (item) => item.title === this.titleForm
      ).default
      data.forEach((item, index) => {
        item.url = 'https://unimind.kgnow.com/' + item.url
      })
      return data
    },
  },
  mounted() {
    this.getDetail()
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
      this.$store.commit('creative/SET_CHANGE_OPTION', payload)
      // const myAudio = new Audio('https://unimind.kgnow.com/' + data.url)
      // const myAudio = new Audio()
      // myAudio.load()
      // myAudio.play()
      this.changeData()
    },
    getDetail() {
      const data = {
        id: this.$route.params.edit,
      }
      this.isLoading = true
      this.$store
        .dispatch('creative/getDetail', data)
        .then((res) => {
          this.changeData()
        })
        .finally(() => {
          this.isLoading = false
        })
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
