<template>
  <v-hover>
    <v-card color="primary" dark align="center" justify="center">
      <v-card-text>
        <v-row>
          <v-col>
            <v-icon x-large>mdi-{{icon}}</v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2>{{title}}</h2>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text :to="path">{{label}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeCard',
  props: {
    icon: String,
    title: String,
    path: String,
    label: String,
  },
});
</script>