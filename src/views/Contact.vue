<template>
  <u-page
    title="Contacto"
    description="La Secretaría de Extensión Universitaria y Cultura se encuentra abierta desde las 14 hs. a las 21 hs. (GMT-3). 
    Nos encontramos ubicados en Av. Almafuerte 1033, Paraná, Entre Ríos. 
    Puede comunicarse con nosotros a través de los números telefónicos y correos electrónicos dispuestos a continuación."
  >
    <v-row>
      <v-col xs="12" md="6">
        <router-view></router-view>
      </v-col>
    </v-row>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
export default Vue.extend({
  name: 'Contact',
  components: {
    'u-page': Page,
  },
});
</script>