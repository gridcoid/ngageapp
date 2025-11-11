<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue'
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage () {
      if (this.error.statusCode === 500) {
        //     return error404
        //   }
        //   // catch everything else
        return error404
      }
    }
  }
}
</script>
