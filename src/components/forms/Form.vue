<template>
  <v-row align="center" justify="center">
    <v-col xs="12" sm="6" md="4">
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
          <v-app-bar v-if="title" :color="color ? color : 'primary'" dark>
            <v-toolbar-title>
              {{title}}
            </v-toolbar-title>
          </v-app-bar>
          <v-card-text>
            <v-form @submit.prevent="$emit('submit')">
              <slot name="fields"></slot>       
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <slot name="actions">
              <v-btn text @click="$emit('reset')">{{cancel || 'Reset'}}</v-btn>
              <v-btn text @click="$emit('submit')" :class="color ? color + '--text' : 'primary--text'">{{ok || 'Submit'}}</v-btn>
            </slot>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>   
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Form',
  props: {
    title: String,
    color: String,
    ok: String,
    cancel: String,
  },
});
</script>