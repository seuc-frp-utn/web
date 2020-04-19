<template>
  <u-page
    title="Contacto"
    description="La Secretaría de Extensión Universitaria y Cultura se encuentra abierta desde las 14 hs. a las 21 hs. (GMT-3). 
    Nos encontramos ubicados en Av. Almafuerte 1033, Paraná, Entre Ríos. 
    Puede comunicarse con nosotros a través de los números telefónicos y correos electrónicos dispuestos a continuación."
  >
    <v-row>
      <v-col>
        <u-map>
          <v-container>
            <v-row>
              <v-col sm="5" lg="4">
                <u-map-card></u-map-card>
              </v-col>
            </v-row>
          </v-container>
        </u-map>
      </v-col>
    </v-row>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
import MapC from '@/components/contact/map/Map.vue';
import MapCard from '@/components/contact/map-card/MapCard.vue';
export default Vue.extend({
  name: 'Contact',
  components: {
    'u-page': Page,
    'u-map': MapC,
    'u-map-card': MapCard,
  },
});
</script>