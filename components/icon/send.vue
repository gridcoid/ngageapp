<template>
  <svg
    :fill="bgColor"
    width="18"
    height="18"
    viewBox="0 0 28 28"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 16l12 4 4 12 16-32zM14.016 18.016l12-12-10.016 17.984z" />
  </svg>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4',
    },
  },
}
</script>
