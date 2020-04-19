<template>
  <v-row wrap align="center" justify="center">
    <u-certificate-card :token="token" :student="student" :course="course" :dean="dean" :secretary="secretary" :teacher="teacher"></u-certificate-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/models/course.model';
import { User } from '@/models/user.model';
import store from '@/store';
import api from '@/api';
import { Diploma } from '../../models/diploma.model';
import CertificateCard from '@/components/certificates/CertificateCard.vue';

interface Data {
  token?: string;
  diploma?: Diploma;
  course?: Course;
  dean?: User;
  secretary?: User;
  teacher?: User;
  student?: User;
}

export default Vue.extend({
  components: {
    'u-certificate-card': CertificateCard,
  },
  data(): Data {
    return {
      token: this.$route.params.token,
      diploma: undefined,
      course: undefined,
      dean: undefined,
      secretary: undefined,
      teacher: undefined,
      student: undefined,
    };
  },
  created() {
    store.dispatch('setLoadingState');
    api.getInstance().get<Diploma>(`diplomas/${this.token}/token`)
    .then((response) => {
      this.diploma = response.data;
      try {
        this.loadData();
      } catch (reason) {
        store.dispatch('notify', {
          message: reason,
          color: 'error',
        });
        store.dispatch('unsetLoadingState');
        this.$router.back();
      }
    })
    .catch((reason: string) => {
      store.dispatch('notify', {
        message: reason,
        color: 'error',
      });
      store.dispatch('unsetLoadingState');
      this.$router.back();
    });
  },
  mounted() {
    store.dispatch('unsetLoadingState');
  },
  beforeDestroy() {
    store.dispatch('unsetLoadingState');
  },
  methods: {
    loadData() {
      api.getResource<Course>('courses', this.diploma!.course)
      .then((response) => {
        this.course = response;
      }).catch((err) => { throw new Error(err); });

      api.getResource<User>('users',  this.diploma!.dean)
      .then((response) => {
        this.dean = response;
      }).catch((err) => { throw new Error(err); });

      api.getResource<User>('users',  this.diploma!.secretary)
      .then((response) => {
        this.secretary = response;
      }).catch((err) => { throw new Error(err); });

      api.getResource<User>('users',  this.diploma!.teacher)
      .then((response) => {
        this.teacher = response;
      }).catch((err) => { throw new Error(err); });

      api.getResource<User>('users',  this.diploma!.student)
      .then((response) => {
        this.student = response;
      }).catch((err) => { throw new Error(err); });
    },
  },
});
</script>
