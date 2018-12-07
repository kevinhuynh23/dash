<template>

    <v-container fluid grid-list>
        <v-layout align-right>
<h2 id="chart-title">{{title}}</h2>
<v-select 
    :items="this.$store.state.freq"
    label="Frequency"
    class="dropdown"
    ></v-select>
    <v-select
    :items="this.$store.state.sources"
    label="Data Sources"
    class="dropdown"
    ></v-select>
    <v-select
    :items="this.$store.state.dates"
    label="Start Date"
    class="dropdown"
    ></v-select>
    <v-select
    :items="this.$store.state.dates"
    label="End Date"
    class="dropdown"
    ></v-select>
    </v-layout>
    </v-container>

</template>

<script>
import MetricSidebar from '../components/MetricSidebar'
export default {
    name: 'ChartDropdowns',
    data: () => ({
        //Adjust these for each dropdown.
    items: ['Foo', 'Bar', 'Fizz']
  }),
  computed: {
      title() {
          return this.$store.state.title;
      }
  }
}
</script>

<style>
.dropdown {
  padding-left: 20px;
}
#chart-title {
  margin-right: 40%;
}
</style>