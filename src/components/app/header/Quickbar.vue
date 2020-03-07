<template>
  <v-toolbar dense color="primary flex" class="d-none d-lg-flex" dark>
    <v-toolbar-title small>
      {{switchDays(today.getDay())}}, {{switchMonths(today.getMonth())}} {{today.getDate()}}, {{today.getFullYear()}}
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn text v-for="(link, i) in links" :key="i" :href="link.url" small>{{link.name}}</v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';

interface Days {
  [day: number]: string;
}

interface Months {
  [month: number]: string;
}

export default Vue.extend({
  name: 'Quickbar',
  data: () => ({
    links: [
      { name: 'Webmail', url: 'https://outlook.office.com/owa/?realm=frp.utn.edu.ar' },
      { name: 'Biblioteca', url: 'http://www.frp.utn.edu.ar/info2/?page_id=6168' },
      { name: 'Jardín Materno-Infantil', url: 'http://www.frp.utn.edu.ar/info2/?page_id=6208' },
      { name: 'Consultorio médico', url: 'http://www.frp.utn.edu.ar/info2/?page_id=6152' },
      { name: 'FM Universidad', url: 'http://fmuniversidad.com' },
    ],
    today: new Date(),
  }),
  methods: {
    switchDays: (day: number): string => {
      const days: Days = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado',
      };
      return days[day];
    },
    switchMonths: (month: number): string => {
      const months: Months = {
        0: 'enero',
        1: 'febrero',
        2: 'marzo',
        3: 'abril',
        4: 'mayo',
        5: 'junio',
        6: 'julio',
        7: 'agosto',
        8: 'septiembre',
        9: 'octubre',
        10: 'noviembre',
        11: 'diciembre',
      };
      return months[month];
    },
  },
});
</script>

<style scoped>
.quickbar-text {
  font-size: 14px !important;
}
</style>