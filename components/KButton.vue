<template>
  <div v-if="!icon">
    <button
      v-if="type === 'primary'"
      class="k-btn inline-block w-full"
      :style="buttonSize"
    >
      {{ text }}
    </button>
    <button
      v-if="type === 'secondary'"
      class="k-btn type-secondary inline-block w-full"
      :style="buttonSize"
    >
      {{ text }}
    </button>
    <button
      v-if="type === 'thirtiary'"
      class="k-btn inline-block w-full"
      :style="buttonSize"
    >
      {{ text }}
    </button>
    <button
      v-if="type === 'text'"
      class="k-btn type-text inline-block w-full"
      :style="buttonSize"
    >
      {{ text }}
    </button>
    <button
      v-if="type === 'disabled'"
      class="k-btn type-disabled inline-block w-full"
      :style="buttonSize"
    >
      {{ text }}
    </button>
  </div>
  <div v-else>
    asd
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data () {
    return {}
  },
  computed: {
    buttonSize () {
      if (this.size === 'large') {
        return 'height:40px'
      } else if (this.size === 'medium') {
        return 'height:36px'
      } else {
        return 'height:34px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.k-btn {
  font-family: 'Cabin';
  width: 100%;
  // height: 40px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  color: $colorWhite;
  background: $colorBlue;
}
.k-btn:focus {
  outline:0px !important;
}
.k-btn:active {
  outline:0px !important;
}
.type-secondary {
  background: $colorWhite;
  border: 1px solid $colorBlue;
  color: $colorBlue;
  height: 36px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid $teks-fortiary;
}
.type-disabled {
  font-family: 'Cabin';
  background: #f1f1f1;
  cursor: not-allowed;
  color: #9a9a9a;
  font-weight: 700;
  font-size: 14px;
}
.type-disabled:focus {
  outline: 0px auto -webkit-focus-ring-color;
}
.type-secondary:hover {
  background-color: rgb(243 244 246);
}
.type-text {
  background: $colorWhite;
  border: 1px solid $colorWhite;
  color: $colorBlue;
}
.type-text:hover {
  background-color: rgb(243 244 246);
}
</style>
