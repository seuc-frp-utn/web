<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          {{course.name}}
        </v-card-title>
        <v-card-text>
          <p>{{course.description}}</p>
          <p>
            <ul>
              <li>Duración total: {{course.hours}} {{hoursLabel}}</li>
              <li>Precio total: ${{course.totalPrice}}</li>
              <li>Cuotas de: ${{course.monthlyPrice}} ({{course.numberPayments}} {{numberPaymentsLabel}})</li>
            </ul>
          </p>
          <p>Cursado dictado por: Nombre Apellido</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary" :href="course.signUpLink" target="_blank">Inscribirme</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/models/course.model';
export default Vue.extend({
  name: 'EducationCard',
  props: {
    course: Object as () => Course,
  },
  computed: {
    hoursLabel(): string {
      return this.course.hours > 1 ? 'horas' : 'hora';
    },
    numberPaymentsLabel(): string {
      return this.course.numberPayments > 1 ? 'cuotas' : 'cuota';
    },
  },
});
</script>