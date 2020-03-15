<template>
  <v-row wrap align="center" justify="center">
    <v-card class="pa-5">
      <v-card-text>
        <v-row>
          <v-col></v-col>
        </v-row>
        <hr>
        <v-row>
          <v-col><h1 class="title">Certificado de asistencia</h1></v-col>
          <v-col>
            <p>
              Este documento certifica que {{student.firstName}} {{student.lastName}}, con DNI {{student.dni}}, 
              ha completado con éxito {{course.hours}} horas del curso {{course.name}} en modalidad presencial.
            </p>
            <p>
              Este documento ha sido en las instalaciones de la Universidad Tecnológica Nacional - Facultad Regional Paraná.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col id="dean">
            <h2>{{dean.firstName}} {{dean.lastName}}</h2>
            <h5>Decano</h5>
          </v-col>
          <v-col id="secretary">
            <h2>{{secretary.firstName}} {{secretary.lastName}}</h2>
            <h5>Secretario de Extensión Universitaria y Cultura</h5>
          </v-col>
          <v-col id="teacher">
            <h2>{{teacher.firstName}} {{teacher.lastName}}</h2>
            <h5>Capacitador</h5>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/models/course.model';
import { User } from '@/models/user.model';
import store from '@/store';
import api from '@/api';
import { Diploma } from '../../models/diploma.model';
export default Vue.extend({
  data() {
    return {
      token: this.$route.params.token,
      course: Object as () => Course,
      dean: Object as () => User,
      secretary: Object as () => User,
      teacher: Object as () => User,
      student: Object as () => User,
    }
  },
  beforeMount() {
    store.dispatch('setLoadingState');
  },
  mounted() {
  },
  beforeDestroy() {
    store.dispatch('unsetLoadingState');
  },
})
</script>

