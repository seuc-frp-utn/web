<template>
  <v-sheet
    :color="color"
    height="100%"
    tile
  >
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <div class="display-3">Slide {{ index + 1 }}</div>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CarouselItem',
  props: {
    color: String,
    index: Number,
  },
});
</script>