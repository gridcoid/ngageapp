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
      console.log(this.rows)
      return this.rows?.[0] ? Object.keys(this.rows[0]) : []
    },
  },
}
</script>
