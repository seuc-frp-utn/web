<template>
  <u-form
    title="Consultar certificado digital"
    color="primary"
    ok="Consultar"
    cancel="Reestablecer"
    @submit="search()"
    @reset="clear()"
  >
    <template slot="fields">
      <v-text-field
        v-model="slug"
        :counter="10"
        label="Token del certificado"
        required
      ></v-text-field>
    </template>
  </u-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Form from '@/components/forms/Form.vue';
export default Vue.extend({
  name: 'CertificateForm',
  components: {
    'u-form': Form,
  },
  data: () => ({
    slug: '',
  }),
  methods: {
    clear() {
      this.slug = '';
    },
    search() {
      this.$router.push('/certificados/' + this.slug);
    },
  },
});
</script>