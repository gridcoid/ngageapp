<template>
  <div>
    <client-only>
      <Nuxt />
      <Snackbar style="position: fixed; bottom: 30px; left: 40px" />
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
