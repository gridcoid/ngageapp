<template>
  <div class="container-collapse">
    <div
      class="header-collapse flex items-center no-select"
      @click="open(indexList)"
    >
      <IconArrowUp v-if="activeItem[indexList]" class="icon-card" />
      <IconArrowDown v-else class="icon-card" />
      {{ name }}
    </div>
    <transition name="ease">
      <div v-if="activeItem[indexList]">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    indexList: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeItem: [],
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
    this.activeItem = Array.from({ length: this.total }, (_, i) => true)
    this.$store.commit('user/SET_DROPDOWN', null)
  },
  methods: {
    open(index) {
      this.$set(this.activeItem, index, !this.activeItem[index])
    },
  },
}
</script>

<style lang="scss" scoped>
.container-collapse {
  .header-collapse {
    margin-bottom: 10px;
    font-family: 'Cabin';
    font-weight: 500;
    font-size: 16px;
    color: #5c6b7a;
    cursor: pointer;
    .icon-card {
      margin-right: 12px;
    }
  }
}
.ease-enter-active,
.ease-leave-active {
  max-height: 0;
  transition: max-height 0.1s ease-out;
}
.ease-enter, .ease-leave-to /* .fade-leave-active below version 2.1.8 */ {
}
</style>
