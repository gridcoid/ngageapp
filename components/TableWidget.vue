<template>
  <el-table :data="rows">
    <el-table-column
      v-for="(col, idx) in columns"
      :key="idx"
      :prop="idx"
      :label="col"
    />
  </el-table>
</template>

<script>
export default {
  props: { rows: Array },
  computed: {
    columns() {
      return rows?.[0] ? Object.keys(rows[0]) : []
    },
  },
}
</script>
