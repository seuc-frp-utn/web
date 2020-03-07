<template>
  <v-list dense>
    <v-list-item><v-list-item-content class="primary--text"><h3>UTN Paraná</h3></v-list-item-content></v-list-item>
    <v-list-item :key="i" v-for="(link, i) in links" :to="link.path">
      <v-list-item-action>
        <v-icon>mdi-{{link.icon}}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        {{link.label}}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Sidebar',
  props: {
    links: Array,
  },
});
</script>