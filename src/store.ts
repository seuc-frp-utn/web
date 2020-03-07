import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {
      message: '',
      color: 'info',
      show: false,
      timeout: 3000,
    },
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    getNotification(state) {
      return state.notification;
    },
  },
  mutations: {
    setLoading(state, payload: boolean) {
      state.loading = payload;
    },
    showNotification(state, {message, color, timeout}) {
      state.notification.message = message;
      state.notification.color = color;
      state.notification.timeout = timeout || 3000;
      state.notification.show = true;
    },
    hideNotification(state) {
      state.notification.show = false;
    },
  },
  actions: {
    setLoadingState(store) {
      store.commit('setLoading', true);
    },
    unsetLoadingState(store) {
      store.commit('setLoading', false);
    },
    notify({commit}, {message, color, timeout}) {
      commit('showNotification', {message, color, timeout});
      setTimeout(
        () => {
          commit('hideNotification');
        },
        timeout || 3000,
      );
    },
  },
});
