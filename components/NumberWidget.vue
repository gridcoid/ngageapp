<template>
  <el-card
    shadow="never"
    class="bg-transparent"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
  >
    <div class="flex flex-col h-full">
      <div class="flex items-center justify-between">
        <div
          class="text-4xl font-semibold text-blue-700 cursor-default"
          :title="data?.key || '-'"
        >
          {{ data?.count || '-' }}
        </div>
        <!-- Generic Tabler icon -->
        <i class="ti ti-chart-bar text-2xl text-blue-300"></i>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'NumberWidget',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
.el-card {
  border: 0 !important;
}
</style>
