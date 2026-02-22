<template>
  <el-card
    shadow="never"
    class="bg-transparent"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
  >
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <!-- Table -->
        <el-table
          :data="data?.data || []"
          border
          style="width: 100%"
          empty-text="No data"
          :title="columnLabel || ''"
          stripe
        >
          <el-table-column prop="name" :label="columnLabel" min-width="120" />

          <el-table-column
            prop="count"
            label="Count"
            width="80"
            align="right"
          />
        </el-table>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'TableWidget',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    columnLabel() {
      const key = this.data?.key
      if (!key) return 'Name'

      // remove "Distribution" suffix
      const cleaned = key.replace(/Distribution$/, '')

      // convert camelCase → words
      const words = cleaned.replace(/([A-Z])/g, ' $1')

      // capitalize first letter
      return words.charAt(0).toUpperCase() + words.slice(1)
    },
  },
}
</script>

<style>
.el-card {
  border: 0 !important;
}
</style>
