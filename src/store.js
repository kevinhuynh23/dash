import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    title: 'Metric',
    freq: ['Hour', 'Week', 'Month', 'Year'],
    sources: ['Google', 'Facebook', 'Bing'],
    dates: ['Jan', 'Feb', 'March', 'Apr', 'May']
  },
  mutations: { //always synchronous
    
  },
  actions: { // or asynchronous
    
  },
  getters: { // get all the same thing, all components can grab, less repetition
    
  }
})