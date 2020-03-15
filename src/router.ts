import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Courses from './views/Courses.vue';
import Certificate from './views/Certificate.vue';
import Error404 from './views/Error404.vue';
import CertificateForm from './components/certificates/CertificateForm.vue';
import CertificateResult from './components/certificates/CertificateResult.vue';
import Payments from './views/Payments.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/formacion',
      name: 'courses',
      component: Courses,
    },
    {
      path: '/certificados',
      component: Certificate,
      children: [
        {
          path: ':token',
          component: CertificateResult,
        },
        {
          path: '',
          component: CertificateForm,
        },
      ],
    },
    {
      path: '/pagos',
      component: Payments,
      children: [],
    },
    {
      path: '/contacto',
      name: 'contact',
      component: Contact,
    },
    {
      path: '*',
      name: 'error404',
      component: Error404,
    },
  ],
});
