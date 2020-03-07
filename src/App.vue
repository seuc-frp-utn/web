<template>
  <v-app>
    <u-header></u-header>
    <v-content>
      <router-view />
    </v-content>
    <u-footer></u-footer>
  </v-app>
</template>

<script>
import Footer from '@/components/app/Footer.vue';
import Header from '@/components/app/Header.vue';
export default {
  name: 'App',
  components: {
    'u-header': Header,
    'u-footer': Footer,
  },
};
</script>