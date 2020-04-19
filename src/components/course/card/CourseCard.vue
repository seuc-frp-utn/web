<template>
  <v-lazy>
    <v-card class="primary" dark height="100%">
      <v-img :src="course.image" :height="250"></v-img>
      <v-card-title height="100%">
        {{course.name}}
      </v-card-title>
      <v-card-text height="100%">
        <p>{{course.description}}</p>
      </v-card-text>
      <v-card-actions height="100%">
        <v-chip color="green" v-if="course.started && !course.finished">Iniciado</v-chip>
        <v-chip color="red" v-if="course.finished">Finalizado</v-chip>
        <v-spacer></v-spacer>
        <v-btn :disabled="course.started" class="primary" :href="course.link" target="_blank" text>Inscribirme</v-btn>
      </v-card-actions>
    </v-card>
  </v-lazy>
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