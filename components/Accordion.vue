<template>
  <div class="accordion-card">
    <div
      class="header-accordion flex justify-between cursor-pointer items-center no-select"
      @click="show = !show"
    >
      <div class="text-header">
        {{ title }}
      </div>
      <IconArrowDown v-if="!show" class="mr-1 cursor-pointer no-select" />
      <IconArrowUp v-else class="mr-1 cursor-pointer no-select" />
    </div>
    <transition name="slide">
      <div v-if="show" class="body-accordion">
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-20%);
  transition: all 150ms ease-in 0s;
}
.accordion-card {
  .header-accordion {
    .text-header {
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #454545;
    }
  }
  .body-accordion {
    margin-top: 10px;
  }
}
</style>
