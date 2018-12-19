<template>
<!-- Just mock data, delete later. -->
    <LineChart
        :labels="['1', '2', '3', '4', '5']"
        :datasets="$options.datasets"
        :options="$options.options"
    ></LineChart>
</template>

<script>
import LineChart from '../components/LineChartTemplate'; 
import numeral from 'numeral';



const datasets = [
    {
        label: 'Facebook',
        borderColor: 'rgba(0, 122, 255, .5)',
        backgroundColor: 'rgba(0, 122, 255, .1)',
        data: [0, 0, 0, 0, 0]
    },
    {
        label: 'Google',
        borderColor: 'rgba(90, 200, 250, 0.5)',
        backgroundColor: 'rgba(90, 200, 250, 0.1)',
        data: [600, 550, 750, 250, 700]
    }
];
// const datasets = datasets('http://localhost:9259')

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }]
  },
};

export default {
    name: 'myChart',
    datasets,
    options,
    components: {
        LineChart
    }
}
</script>

<style>
</style>