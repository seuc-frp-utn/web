<template>
  <v-footer dark>
    <v-container grid-list-xl>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" align="center">
          <a href="http://www.frp.utn.edu.ar"><v-img contain width="200" :src="logo"></v-img></a>
        </v-col>
        <v-col cols="12" align="center">
          <p>{{universityName}} - {{facultyName}} &copy; {{ actualYear }} - Todos los derechos reservados.</p>
        </v-col>
        <v-col cols="12" align="center">
          <p>Aplicación web diseñada por <a :href="authorLink" target="_blank">{{authorName}}</a></p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      universityName: process.env.VUE_APP_UNIVERSITY_NAME,
      facultyName: process.env.VUE_APP_FACULTY_NAME,
      authorName: process.env.VUE_APP_AUTHOR,
      authorLink: process.env.VUE_APP_AUTHOR_LINK,
      logo: require('@/assets/logo.png'),
      actualYear: new Date().getFullYear(),
    };
  },
});
</script>