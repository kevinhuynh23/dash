<template>
  <div>
    <v-card class="card">
        <!-- check chips for multiple selections -->
      <ChartHeader/>
      <Chart/>
    </v-card>

    <v-card class="card">
      <Table/>
    </v-card>

  </div>
</template>

<script>
import Chart from '../components/Chart'
import Table from '../components/Table'
import ChartHeader from '../components/ChartHeader'

export default {
  name: 'Card',
  components: {
    Chart,
    Table,
    ChartHeader
  }
}  
</script>

<style>
.card {
  margin-bottom: 20px;
  margin-left: 50px;
}
</style>
