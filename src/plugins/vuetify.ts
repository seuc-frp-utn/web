import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/src/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#4F60AF',
        secondary: '#53CED6',
        accent: '#B8CA68',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'mdi',
  },
});
