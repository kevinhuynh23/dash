import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Metric',
    freq: ['Hour', 'Week', 'Month', 'Year'],
    data: null,
<<<<<<< HEAD
    path: 'Testing'
  },
  mutations: { // always synchronous
  },
  actions: { // or asynchronous
  },
  getters: { // get all the same thing, all components can grab, less repetition
=======
    apiObject: {},
    startTime: 0,
    endTime: 1545184480293,
    path: '',
    dataType: ''
>>>>>>> 6434d1d19f30603d0a3caea447b62bb4f117231c
  }
});