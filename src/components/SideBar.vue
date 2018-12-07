<template>
<!-- This component renders the example sidebar. -->
    <sidebar-menu :menu="menu"/>
</template>

<script>
import VueSideBarMenu from 'vue-sidebar-menu'
import Vue from 'vue'

Vue.use(VueSideBarMenu)

export default {
  name: 'Menu',
  data: function () {
    return{
    menu: [
      {
        href: '/', //needs changing
        title: 'Metric 1',
        icon: 'fa fa-user'
      },
      {
        href: '#',
        title: 'Metric 2',
        icon: 'fa fa-chart-area'
      },
      {
        title: 'Metric 3',
        icon: 'fa fa-chart-area'
      },
      {
        title: 'Metric 4',
        icon: 'fa fa-chart-area'
      },
      {
        title: 'Metric 5',
        icon: 'fa fa-chart-area'
      }
    ]
    }
  }
}
</script>

