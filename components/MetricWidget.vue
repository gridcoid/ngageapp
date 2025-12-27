<template>
  <div class="text-3xl font-bold">
    {{ number }}
  </div>
</template>

<script>
export default {
  props: { data: Object },
  computed: {
    number() {
      if (!this.data || !this.data.rows || !this.data.rows.length) return '-'
      return this.data.rows[0][0]
    },
  },
}
</script>
