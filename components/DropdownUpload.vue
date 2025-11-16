<template>
  <div class="dropdown-container">
    <div
      class="dropdown-btn noselect flex items-center justify-between cursor-pointer"
      :style="
        indexList == activeDropdown
          ? 'border-end-end-radius:0px;border-end-start-radius:0px'
          : ''
      "
    >
      <label for="file-upload" class="custom-file-upload" />
      <input
        id="file-upload"
        ref="file"
        class="custom-file-upload"
        type="file"
        accept="image/*"
        @change="changeImage($event)"
      />
      <div
        class="flex card-dropdown items-center justify-center"
        @click="uploadImage()"
      >
        <img
          v-if="icons === 'preview'"
          src="~/assets/images/icon/preview.svg"
          class="icon-prev"
        />
        <img
          v-if="icons === 'refresh'"
          src="~/assets/images/icon/refresh.svg"
          class="icon-prev"
        />

        <div class="title-dropdown">
          {{ nameBtn }}
        </div>
      </div>
      <div class="btn-show flex items-center justify-center" @click="open()">
        <img
          v-if="indexList == activeDropdown"
          src="~/assets/images/icon/arrow_up.svg"
        />
        <img v-else src="~/assets/images/icon/arrow_down.svg" />
      </div>
    </div>
    <div v-if="indexList == activeDropdown" class="dropdown-list">
      <slot name="body" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    showBtn: {
      type: Boolean,
      default: false,
    },
    indexList: {
      type: Number,
      default: 0,
    },
    nameBtn: {
      type: String,
      default: '',
    },
    icons: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeItem: null,
    }
  },
  computed: {
    ...mapState({
      activeDropdown: (state) => {
        return state.user.activeDropdown
      },
    }),
  },
  mounted() {
    this.$store.commit('user/SET_DROPDOWN', null)
  },
  methods: {
    changeImage(file) {
      const { files } = event.target
      if (files && files[0]) {
        file.uid = Date.now()
        const dataFile = {
          status: 'ready',
          name: files[0].name,
          size: files[0].size,
          percentage: 0,
          uid: file.uid,
          raw: files[0],
        }
        this.$emit('preview', dataFile)
      }
    },
    uploadImage() {
      // this.$refs.file.click()
    },
    open() {
      if (this.activeDropdown !== null) {
        this.$store.commit(
          'user/SET_DROPDOWN',
          this.activeDropdown === this.indexList ? null : this.indexList
        )
      } else {
        this.$store.commit('user/SET_DROPDOWN', this.indexList)
      }
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='file'] {
  display: none;
}
.custom-file-upload {
  display: none;
  cursor: pointer;
}

.dropdown-container {
  // position: relative;
  .dropdown-btn {
    width: 161px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    // padding-left:18px;
    .card-dropdown {
      width: 120px;
      height: 100%;
      .icon-prev {
        margin-right: 10px;
      }
      .title-dropdown {
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #1b63d4;
      }
    }
    .btn-show {
      width: 40px;
      height: 100%;
      border-left: 1px solid #e2e2e2;
    }
  }
  .dropdown-btn:hover {
    background-color: rgb(243 244 246);
  }
  .dropdown-list {
    position: absolute;
    // top:55px;
    z-index: 3;
    width: 161px;
    .item-menu {
      cursor: pointer;
      height: 40px;
      padding-left: 20px;
      border-left: 1px solid #e2e2e2;
      border-right: 1px solid #e2e2e2;
      width: 161px;
      height: 40px;
      background: #ffffff;
      .icon-item {
        margin-right: 12px;
      }
    }
    .item-menu:hover {
      background-color: rgb(243 244 246);
    }
  }
}
</style>
