<template>
  <v-app
  style="background: gray;"
  >
      <!-- <Menu/> -->
      <MetricSidebar/>

    <v-toolbar app id="header">
      <v-toolbar-title class="headline center text-uppercase">
        <span id="t1">Square</span>
        <span id="t2" class="font-weight-light">DASHBOARD</span>
      </v-toolbar-title>
    </v-toolbar>

      <div>
        <CardGrid/>
      </div>

  </v-app>
</template>

<script>
import CardGrid from './components/CardGrid'
import Menu from './components/SideBar'
import MetricSidebar from './components/MetricSidebar'
import Vue from 'vue';
import Vuex from 'vuex';
import Card from './components/Card'
import SidebarMenu from './components/SidebarMenu'
import 'es6-promise/auto';
Vue.use(Vuex)
export default {
  name: 'App',
  components: {
    CardGrid,
    Menu,
    MetricSidebar,
    Card,
    SidebarMenu
  }
}
</script>

<style>
#t1 {
  color: rgb(90, 200, 250);
}
#sidebar {
  z-index: 1000;
}
v-app {
  background-color: lightgrey;
}
</style>
