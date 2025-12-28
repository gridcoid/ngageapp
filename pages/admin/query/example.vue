<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <QueryExample />
  </div>
</template>

<script>
export default {
  name: 'QueryGuidePage',
  layout: 'default',

  head() {
    return {
      title: 'Query Example - ' + this.$config.appName,
    }
  },
}
</script>
