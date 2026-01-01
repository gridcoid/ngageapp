<template>
  <el-table :data="rows">
    <el-table-column
      v-for="(col, idx) in columns"
      :key="idx"
      :prop="col"
      :label="col"
    />
  </el-table>
</template>

<script>
export default {
  props: { rows: Array },
  computed: {
    columns() {
      return this.rows?.[0] ? Object.keys(this.rows[0]) : []
    },
  },
}
</script>
