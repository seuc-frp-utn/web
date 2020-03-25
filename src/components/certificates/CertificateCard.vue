<template>
  <v-card class="pa-5">
    <v-card-text>
      <v-row>
        <v-col>
          <v-img :src="logo" contain width="200"></v-img>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col>
          <h1 class="title">Certificado de asistencia</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            Este documento certifica que {{student.firstName}} {{student.lastName}}, con DNI {{student.dni}}, 
            ha completado con éxito {{course.hours}} horas del curso {{course.name}} en modalidad presencial.
          </p>
          <p>
            Este documento ha sido expedido en las instalaciones de la Universidad Tecnológica Nacional - Facultad Regional Paraná.
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
</template>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/models/course.model';
import { User } from '@/models/user.model';
export default Vue.extend({
  name: 'CertificateCard',
  props: {
    student: Object as () => User,
    course: Object as () => Course,
    dean: Object as () => User,
    secretary: Object as () => User,
    teacher: Object as () => User,
  },
  data: () => {
    return {
      logo: require('@/assets/logo.png'),
    };
  }
});
</script>