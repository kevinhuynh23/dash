import Vue from 'vue';
import './plugins/vuetify';
import Vuex from 'vuex';
import 'es6-promise/auto';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

console.log(process.env.VUE_APP_API);
