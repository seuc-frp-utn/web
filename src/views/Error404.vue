<template>
  <u-error
    :code="404"
    reason="El recurso al que intentabas acceder no se ha encontrado"
  ></u-error>
</template>

<script lang="ts">
import Vue from 'vue';
import ErrorPage from '@/templates/Error.vue';
export default Vue.extend({
  name: 'Error404',
  components: {
    'u-error': ErrorPage,
  },
});
</script>