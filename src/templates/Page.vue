<template>
  <v-container grid-list-xl>
    <v-row v-show="!loading">
      <v-col cols="12" v-if="title">
        <h1 class="primary--text display-1">{{title}}</h1>
        <p v-if="description">{{description}}</p>
      </v-col>
      <v-col cols="12">
        <slot></slot>
      </v-col>
    </v-row>
    <v-row
      class="loader"
      no-gutters
      v-show="loading"
      align="center"
      justify="center"
    >
      <v-col cols="12" align="center" justify="center">
        <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <u-notification></u-notification>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';
import Notification from '@/components/app/notification/Notification.vue';

export default Vue.extend({
  name: 'Page',
  components: {
    'u-notification': Notification,
  },
  props: {
    title: String,
    description: String,
  },
  computed: {
    loading() {
      return store.getters.isLoading;
    },
  },
});
</script>

<style scoped>
  .loader {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
</style>