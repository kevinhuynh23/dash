<template>
	<!-- This renders the chart, the table and the header that allows customization of the content shown. -->
	<v-container id="cards" fluid>
		<v-layout justify-center row wrap>
			<v-flex>
				<!-- This renders the first card that includes the control header and the chart. -->
				<v-card class="card">
					<!-- This container includes the header that has controls for the content of the cards. -->
					<v-container fluid grid-list>
						<v-layout align-right row>
							<h2>{{title}}</h2>
              
							<!-- Allows the user to change the path field of the data shown. -->
							<v-text-field
								label="API"
								v-model="api"
								class="selection left"
							></v-text-field>

							<v-btn @click="fetchData()">Add API</v-btn>

							<v-text-field
								label="Path"
								v-model="path"
								class="selection"
								@change="getPath()"
							></v-text-field>

							<date-picker 
								v-model="dateRange" 
								range lang="en" 
								width="250px" 
								class="date selection"
								@change="convertDate()"
								@clear="clearDate()"
							></date-picker>
						</v-layout>
					</v-container>

					<!-- This renders the line graph displaying the data. Input the d3 graph here when ready. -->
					<Chart id="line-graph"/>
				</v-card>

				<!-- These are buttons to test the api calls. Delete later. -->
				
				<!-- <v-btn @click="readMetrics()">Read Metrics</v-btn>
				<v-btn @click="datasets('http://localhost:9259')">Test</v-btn> -->

				<!-- This renders the second card that includes the data table. Insert the d3 table here when ready. -->
				<v-card class="card">
					<v-container fluid grid-list>
          				<h2>{{title}}</h2>
					</v-container>
					<Table/>
					<!-- {{dateRange}} -->
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Chart from '../components/Chart' //Mock data, must replace
import Table from '../components/Table' //''
import axios from 'axios'
import DatePicker from 'vue2-datepicker'
import _ from 'lodash'

export default {
	name: 'cards',
	data() {
		return {
			api: null,//need
			path: '', //Default value
			dateRange: null
			// index: 0
		}
	},
	computed: {
		title() {
			return this.$store.state.title;
		}
	},
	components: {
		Chart, //Mock data 
		Table, //'' 
		DatePicker
	},
	//This is the initial api call.
	mounted () {

		//Fetches page view data.
		// axios
		// 	.get('http://localhost:9259/data/page-view')
		// 	.then(response => (this.sampleApi = response.data))
		// 	.catch(error => console.log(error))

		//Fetches sources.
		axios
			.get('http://localhost:9259/sources')
			.then(response => (this.sourcesApi = response.data))
			.catch(error => console.log(error))
		
		//Fetches metrics.
		axios
			.get('http://localhost:9259/metrics')
			.then(response => (this.metricsApi = response.data))
			.catch(error => console.log(error))
	},
	//This helps filter through the api path for metrics and sources. Delete later.
	methods: {
		//Don't need this, delete later. This was just for testing.
		// fetchData(x) {
		// 	axios
		// 		.get('http://localhost:9259/' + x)
		// 		.then(response => (this.sampleApi = response.data))
		// 		.catch(error => console.log(error))
		// },
		readApi() {
			this.paths = _.map(this.sampleApi, 'path')
			this.timestamps = _.map(this.sample.Api, 'timestamp')
		},
		readSources() {
			this.sourcesApi = _.map(this.sourcesApi, 'displayName')
		},
		readMetrics() {
			this.metricsApi = _.map(this.metricsApi, 'name')
			console.log(this.metricsApi)
		},
		fetchData() {
			// axios
			// .get(this.api)
			// .then(response => (this.sampleApi = response.data['facebook-analytics']))
			// .catch(error => console.log(error))
			// console.log(this.api)
			this.$store.commit('addApi', this.api);
			this.api= ''
			// this.index++
			for(let i = 0; i < this.$store.state.apiObject.length; i++ ){
				this.datasets(this.$store.state.apiObject[i]);
			}
		},
		
		convertDate() {
			let startTime = Date.parse(this.dateRange[0]);
			let endTime = Date.parse(this.dateRange[1]);
			this.$store.state.startTime = startTime;
			this.$store.state.endTime = endTime;
		},
		clearDate() {
			let startTime = 0;
			let endTime = 1545184480293;
			this.$store.state.startTime = startTime;
			this.$store.state.endTime = endTime;
		},
		getPath() {
			let path = this.path;
			this.$store.state.path = path;
		},
		datasets(api) {
			let sources = api + "/sources";
			let data = api + "/data/" + this.$store.state.dataType;

			let datasets = []

			axios
				.get(sources)
				.then((response) => {
					return response.data
				})
				.then((sourceSet) => {
					const promises = [];
					for(let i = 0; i < sourceSet.length; i++) {
						promises.push(
							this.dataset(sourceSet[i], data)
							.then((dataset) => {
								datasets.push(dataset);
							})
						);
					}
					return Promise.all(promises);
				})
				.then(() => {
					this.$store.commit('updateChart', datasets);
					console.log(JSON.stringify(datasets, null, 2));
				})
				.catch((err) => console.log(err.message));
		},

		dataset(source, data) {

			let dataset = {
				label: source.displayName,
				borderColor:'rgba(0, 122, 255, .5)',
				backgroundColor:'rgba(0, 122, 255, .1)',
				data:[]
			}

			return axios
				.get(data)
				.then((response) => {
					return response.data
				})
				.then((data) => {
					let sortable = [];
					for(let i = 0; i < data[source.name].length; i++) {
						if(data[source.name][i].path == this.$store.state.path) {
							sortable.push([data[source.name][i].path, data[source.name][i].timestamp])
						}
					}
					sortable.sort((a, b) => {
						return a[1]- b[1];
					});

					return sortable;
				})
				.then((sortable) => {
					dataset.data = this.parseDataset(sortable);
					return dataset;
				})
				.catch((err) => console.log(err.message));
		},
		parseDataset(sortable) {
			let data = [];
			let start = this.$store.state.startTime;
			let end = this.$store.state.endTime;

			let numInc = 5;
			let increment = (end - start) / numInc;

			let cur = start;
			let breaks = [];

			breaks.push(start);

			for(let i = 0; i < numInc; i++) {
				cur += increment;
				breaks.push(cur)
			}

			for(let i = 0; i < breaks.length - 1; i++) {
				let count = 0;
				for(let j = 0; j < sortable.length; j++) {
					if(breaks[i] <= sortable[j][1] && sortable[j][1] <= breaks[i + 1]) {
						count++;
					}
				}
				data.push(count);
			}
			return data;
		}
	}
}  
</script>

<style>
/* Formatting */
#line-graph {
	padding: 1rem;
}
.selection {
  padding-left: 20px;
}
.left{
  padding-left: 300px;
}
.date {
  margin-top: 15px;
}
.card {
	margin-bottom: 20px;
	margin-left: 50px;
}
#cards {
	margin-top: 4.5%;
}
</style>
