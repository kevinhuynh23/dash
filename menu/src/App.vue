<template>
  <div id="app">
    <HelloWorld/>
    <sidebar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import sidebar from './components/sidebar'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: 'App',
  components: {
    HelloWorld,
    sidebar,
    SidebarMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
