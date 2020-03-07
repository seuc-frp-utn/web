<template>
  <v-snackbar
    v-model="getNotification.show"
    :color="getNotification.color || 'info'"
  >
    {{ getNotification.message }}
    <v-btn
      text
      @click="hideNotification"
    >
      Cerrar
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'Notification',
  computed: {
    ...mapGetters(['getNotification']),
  },
  methods: {
    ...mapMutations(['hideNotification']),
  },
});
</script>

<style scoped>

</style>