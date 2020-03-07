<template>
  <u-page
    title="Certificados"
  >
    <router-view></router-view>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
import Form from '@/components/forms/Form.vue';
export default Vue.extend({
  name: 'Education',
  components: {
    'u-page': Page,
    'u-form': Form,
  },
});
</script>