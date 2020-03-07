<template>
  <v-carousel class="primary" cycle show-arrows-on-hover>
    <v-carousel-item
      v-for="(offer, i) in offers"
      :key="i"
    >
      <u-carousel-item color="primary" :index="i"></u-carousel-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue';
import CarouselItem from './CarouselItem.vue';
export default Vue.extend({
  name: 'Carousel',
  components: {
    'u-carousel-item': CarouselItem,
  },
  data: () => ({
    offers: [
      { name: 'Una' },
      { name: 'Dos' },
      { name: 'tres' },
      { name: 'Cuatro' },
      { name: 'Cinco' },
    ],
  }),
});
</script>