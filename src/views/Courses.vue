<template>
  <u-page
    title="Formación"
  >
    <v-row>
      <v-col xs="12" sm="6" md="4" lg="3" v-for="course in courses" :key="course.id">
        <u-course-card :course="course"></u-course-card>
      </v-col>
    </v-row>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
import api from '../api';
import { Course } from '../models/course.model';
import store from '../store';
import CourseCard from '@/components/course/card/CourseCard.vue';

interface Data {
  courses: Course[];
}

export default Vue.extend({
  name: 'Education',
  components: {
    'u-page': Page,
    'u-course-card': CourseCard,
  },
  data: (): Data => {
    return {
      courses: [],
    };
  },
  created() {
    store.dispatch('setLoadingState');
    api.getAllResources<Course>('courses')
    .then((result) => {
      this.courses = result as Course[];
      store.dispatch('unsetLoadingState');
    })
    .catch((reason) => {
      store.dispatch('notify', {
        message: reason,
        color: 'error',
      });
      store.dispatch('unsetLoadingState');
    });
  },
  beforeDestroy() {
    store.dispatch('unsetLoadingState');
  },
});
</script>