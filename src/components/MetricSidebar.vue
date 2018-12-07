<template>
<!-- This renders the metric icons on the sidebar. -->
<div>
    <p></p>
    <div id="wrapper">
     <v-btn @click="changeTitle(1)" fab dark color="rgb(90, 200, 250)">
        <v-icon dark>edit</v-icon>
        
      </v-btn>
      <v-btn @click="changeTitle(2)" fab dark color="rgb(90, 200, 250)">
        <v-icon dark>edit</v-icon>
      </v-btn>
      <v-btn @click="changeTitle(3)" fab dark color="rgb(90, 200, 250)">
        <v-icon dark>edit</v-icon>
      </v-btn>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'MetricSidebar',
    data() {
    return {
      welcome: 'Hello World'
    }
  },
  methods: {
    changeTitle(x) {
      this.$store.state.title = '' + x;
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