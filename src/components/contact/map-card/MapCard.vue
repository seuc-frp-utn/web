<template>
  <v-hover>
    <v-card
      height="625"
      slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
    >
      <v-img
        :src="image"
        :lazy-src="thumbnail"
        height="250"
      ></v-img>
      <v-card-text>
        <h1 class="primary--text title">UTN - Facultad Regional Paraná</h1>
        <div class="subtitle-1">
          Universidad pública
        </div>
      </v-card-text>
      <v-list two-line>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="primary">mdi-map-marker</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dirección</v-list-item-title>
            <v-list-item-subtitle>Av. Almafuerte 1033, Paraná, Entre Ríos</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="primary">mdi-earth</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sitio web</v-list-item-title>
            <v-list-item-subtitle>http://www.frp.utn.edu.ar</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="primary">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Correo electrónico</v-list-item-title>
            <v-list-item-subtitle>extension@frp.utn.edu.ar</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="primary">mdi-phone</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Teléfono</v-list-item-title>
            <v-list-item-subtitle>+54 (343) 4243054 (int. 108)</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MapCard',
  data() {
    return {
      image: require('@/assets/frente.jpg'),
      thumbnail: require('@/assets/map_thumbnail.jpg'),
    };
  },
});
</script>