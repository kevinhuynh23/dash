<template>
<!-- Just mock data, delete later. -->
    <LineChart
        :labels="['January', 'February', 'March', 'April', 'May']"
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
        data: [300, 700, 450, 750, 450]
    },
    {
        label: 'Google',
        borderColor: 'rgba(90, 200, 250, 0.5)',
        backgroundColor: 'rgba(90, 200, 250, 0.1)',
        data: [600, 550, 750, 250, 700]
    }
];

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
    name: 'MyChart',
    datasets,
    options,
    components: {
        LineChart
    }
}
</script>

<style>
</style>