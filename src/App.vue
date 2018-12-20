<template>
  <v-app style="background: gray;">
    
    <!-- <Menu/> -->
    <metricsidebar/>

    <!-- Renders the page header. -->
    <v-toolbar app id="header">
      <v-toolbar-title class="headline center text-uppercase">
        <span id="t1">Square</span>
        <span id="t2" class="font-weight-light">DASHBOARD</span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- <v-jumbotron :gradient="gradient" height=50px color=black dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Square Dashboard</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron> -->

    <!-- Renders the card content. -->
    <div>
      <cards/>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/SideBar'
import metricsidebar from './components/MetricSidebar'
import Vue from 'vue';
import Vuex from 'vuex';
import cards from './components/Card'
import 'es6-promise/auto';
import navigation from './components/Navigation'

Vue.use(Vuex)

export default {
  name: 'App',
  data: () => ({
    gradient: 'to top, #7B1FA2, #E1BEE7'
  }),
  components: {
    Menu,
    metricsidebar,
    cards,
    navigation
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
.v-toolbar-title {
  z-index: 1000;
}
v-app {
  background-color: lightgrey;
}
</style>
