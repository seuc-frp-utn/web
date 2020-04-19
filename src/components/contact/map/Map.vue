<template>
  <v-card>
    <v-img :src="map" :lazy-src="thumbnail">
      <slot></slot>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      map: require('@/assets/map.png'),
      thumbnail: require('@/assets/map_thumbnail.jpg'),
    };
  },
});
</script>