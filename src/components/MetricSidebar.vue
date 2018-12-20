<template>
<!-- This renders the metric icons on the sidebar. -->
  <div id="wrapper">
    <v-tooltip right>
      <v-btn slot="activator" @click="changeTitle('Page Views')" fab dark color="rgb(90, 200, 250)">
          <v-icon>far fa-eye</v-icon>
      </v-btn>
      <span>Page Views</span>
    </v-tooltip>
    
    <v-tooltip right>
      <v-btn slot="activator" @click="changeTitle('Sign Ups')" fab dark color="rgb(90, 200, 250)">
        <v-icon>fas fa-user-plus</v-icon>
      </v-btn>
      <span>Sign Ups</span>
    </v-tooltip>

    <v-tooltip right>
      <v-btn slot="activator" @click="changeTitle('Ad-Block')" fab dark color="rgb(90, 200, 250)">
        <v-icon>fas fa-shield-alt</v-icon>
      </v-btn>
      <span>Ad-Block</span>
    </v-tooltip>

    <v-tooltip right>
      <v-btn slot="activator" @click="changeTitle('Revenue')" fab dark color="rgb(90, 200, 250)">
        <v-icon>fas fa-dollar-sign</v-icon>
      </v-btn>
      <span>Revenue</span>
    </v-tooltip>
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
<<<<<<< HEAD
    },
    mouseOver: function() {
      this.active = !this.active;
=======
      this.$store.state.dataType = 'page-view';
      console.log(this.$store.state.dataType)
>>>>>>> 6434d1d19f30603d0a3caea447b62bb4f117231c
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