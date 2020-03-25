<template>
  <v-card class="primary" dark height="100%">
    <v-img :src="course.image" :height="250"></v-img>
    <v-card-title height="100%">
      {{course.name}}
    </v-card-title>
    <v-card-text height="100%">
      <p>{{course.description}}</p>
    </v-card-text>
    <v-card-actions height="100%">
      <v-spacer></v-spacer>
      <v-btn class="primary" :href="course.link" target="_blank" text>Inscribirme</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>

</style>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/models/course.model';
export default Vue.extend({
  name: 'CourseCard',
  props: {
    course: Object as () => Course,
  },
});
</script>