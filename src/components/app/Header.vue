<template>
  <header>
    <v-app-bar class="secondary">
      <v-app-bar-nav-icon class="hidden-md-and-up primary--text" @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
      <a @click="goHome()"><v-img :src="logo" alt="Logo UTN Paraná" contain max-height="60px" max-width="181px"></v-img></a>
      <v-toolbar-title class="mx-3 primary--text" text-truncate>{{secretaryName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items :key="i" v-for="(link, i) in links">
        <v-btn :to='link.path' class="hidden-sm-and-down primary--text" text>{{link.label}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" absolute temporary>
      <u-sidebar :links="links"></u-sidebar>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import Sidebar from '@/components/app/header/Sidebar.vue';
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  components: {
    'u-sidebar': Sidebar,
  },
  data() {
    return {
      logo: require('@/assets/logo.png'),
      secretaryName: process.env.VUE_APP_SECRETARY_NAME,
      sidebar: false,
      links: [
        { path: '/', label: 'Inicio', icon: 'home' },
        { path: '/formacion', label: 'Formación', icon: 'animation' },
        { path: '/certificados', label: 'Certificados', icon: 'file-document-box' },
        // { path: '/pagos', label: 'Pagos', icon: 'account-box-multiple' },
        // { path: '/contacto', label: 'Contacto', icon: 'phone' },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
});
</script>
