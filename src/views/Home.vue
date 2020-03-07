<template>
  <u-page>
    <u-carousel></u-carousel>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
import Carousel from '@/components/home/Carousel.vue';

export default Vue.extend({
  components: {
    'u-page': Page,
    'u-carousel': Carousel,
  },
});
</script>
