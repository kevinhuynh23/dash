/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: 'Metric',
    freq: ['Hour', 'Week', 'Month', 'Year'],
    data: null,
    apiObject: [],
    startTime: 0,
    endTime: 1545184480293,
    path: '',
    dataType: '',
    datasets: [],
  },
  mutations: {
    updateChart(state, data) {
      state.datasets = data;
    },
    addApi(state, api) {
      state.apiObject.push(api);
    },
  },
});

export default store;
