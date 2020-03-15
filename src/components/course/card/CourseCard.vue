<template>
  <v-card>
    <v-card-title>
      {{course.name}}
    </v-card-title>
    <v-card-text>
      <p>{{course.description}}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary" :href="course.link" target="_blank">Inscribirme</v-btn>
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