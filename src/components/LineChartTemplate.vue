<template>
<!-- Just mock data, delete later. -->
    <canvas ref="myChart"></canvas>
</template>

<script>
import Chart from 'chart.js';
import numeral from 'numeral';
import Vue from 'vue'; 

export default {
    name: 'LineChart',
    props: {
        labels: Array,
        datasets: {
            type: Array,
            required: true
        },
        options: Object
    },
    mounted() {
        new Chart(this.$refs.myChart, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: this.datasets
            },
            options: this.options
        });
    }
}
</script>

<style>
</style>