<template>
<!-- This renders the metric icons on the sidebar. -->
  <div id="wrapper">
    <v-btn @click="changeTitle('Page Views')" fab dark color="rgb(90, 200, 250)">
        <v-icon>far fa-eye</v-icon>
    </v-btn>
    
    <v-btn @click="changeTitle('Sign Ups')" fab dark color="rgb(90, 200, 250)">
      <v-icon>fas fa-user-plus</v-icon>
    </v-btn>

    <v-btn @click="changeTitle('Ad-Block')" fab dark color="rgb(90, 200, 250)">
      <v-icon>fas fa-shield-alt</v-icon>
    </v-btn>

    <v-btn @click="changeTitle('Revenue')" fab dark color="rgb(90, 200, 250)">
      <v-icon>fas fa-dollar-sign</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'metricsidebar',
  data() {
    return {
      //
    }
  },
  methods: {
    changeTitle(title) {
      this.$store.state.title = title;
    }
  }
}
</script>

<style>
#wrapper {
  z-index: 1000;
  position: fixed;
  padding-left: 0px;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
v-btn {
  margin-bottom: 20px;
}
</style>