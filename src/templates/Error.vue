<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="primary--text display-4 text-center my-2">¡Error {{code}}!</h1>
        <p class="text-center">
          {{reason}}, puedes <a @click="goBack()">volver atrás</a> o <a @click="goHome()">volver al inicio</a>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Error',
  props: {
    code: Number,
    reason: String,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push('/');
    },
  },
});
</script>