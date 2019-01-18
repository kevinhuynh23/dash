<template>
<!-- Just mock data, delete later. -->
<div>
    <canvas ref="myChart"></canvas>
    <!-- <v-btn @click="renderChart()">Render</v-btn> -->
</div>
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
    watch: {
        datasets() {
            console.log('datasets changed on chart', JSON.stringify(this.datasets, null, 2));
            this.chart.data.datasets = this.datasets;
            this.chart.update();
        }
    },
    mounted() {
        this.chart = new Chart(this.$refs.myChart, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: this.datasets
            },
            options: this.options
        });
    },
}
</script>

<style>
</style>
