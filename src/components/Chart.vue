<template>
<!-- Just mock data, delete later. -->
    <LineChart
        :labels="['1', '2', '3', '4', '5']"
        :datasets="datasets"
        :options="$options.options"
    ></LineChart>
</template>

<script>
import LineChart from '../components/LineChartTemplate'; 
import numeral from 'numeral';



const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }],
    layout: {
        padding: {
            left:50,
            right:50,
            top:50,
            bottom:50
        },
    }
  },
};

export default {
    name: 'myChart',
    options,
    components: {
        LineChart
    },
    computed: {
        datasets (){
            return this.$store.state.datasets;
        }
    }

}
</script>

<style>
</style>