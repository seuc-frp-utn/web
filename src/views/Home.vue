<template>
  <u-page>
    <v-col>
      <v-row>
        <u-carousel></u-carousel>
      </v-row>
      <v-row>
        <v-col
          v-for="(link, i) in quickLinks"
          :key="i"
          cols="12"
          xl="2"
          lg="3"
          md="6"
        >
          <u-card
            :icon="link.icon"
            :title="link.title"
            :label="link.label || 'Acceder'"
            :path="link.path"
          >
          </u-card>
        </v-col>
      </v-row>
    </v-col>
  </u-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/templates/Page.vue';
import Carousel from '@/components/home/Carousel.vue';
import Card from '@/components/home/card/Card.vue';

export default Vue.extend({
  components: {
    'u-page': Page,
    'u-carousel': Carousel,
    'u-card': Card,
  },
  data() {
    return {
      quickLinks: [
        { title: 'Formación', icon: 'book', path: '/formacion' },
        { title: 'Certificados', icon: 'certificate', path: '/certificados' },
        { title: 'Pagos', icon: 'currency-usd', path: '/pagos' },
        { title: 'Administración', icon: 'account', path: '/admin' },
      ],
    };
  },
});
</script>
