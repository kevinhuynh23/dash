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

							<!-- A reactive title based off of the metric chosen. {{path}} {{freq}} {{startDate}} for testing v-model. -->
							<h2>{{title}}</h2>
              
							<!-- Allows the user to change the path field of the data shown. -->
							<v-text-field
								label="Path"
								v-model="path"
								class="selection left"
							></v-text-field>

							<!-- Allows the user to change the frequency of the data shown. -->
							<v-select 
                :items="this.$store.state.freq"
                label="Frequency"
                class="selection"
                v-model="freq"
							></v-select>

							<!-- Allows the user to pick the date range for the desired data. Choose between two datepickers for begin & end dates or a date range picker.-->
							<!-- <date-picker 
								v-model="startDate" 
								lang="en" 
								class="date"
								placeholder="Start Date"
							></date-picker>
							<date-picker 
								v-model="endDate" 
								lang="en" 
								class="date"
								placeholder="End Date"
							></date-picker> -->

							<date-picker 
								v-model="dateRange" 
								range lang="en" 
								width="250px" 
								class="date selection"
							></date-picker>
						</v-layout>
					</v-container>

					<!-- This renders the line graph displaying the data. Input the d3 graph here when ready. -->
					<Chart id="line-graph"/>
				</v-card>

				<!-- These are buttons to test the api calls. Delete later. -->
				<!-- <v-btn @click="fetchData('metrics')">metrics</v-btn>
				<v-btn @click="fetchData('sources')">sources</v-btn> -->

				<!-- This renders the second card that includes the data table. Insert the d3 table here when ready. -->
				<v-card class="card">
					<v-container fluid grid-list>
						<h2>{{title}}</h2>
					</v-container>
					<Table/>
					<!-- {{api}} -->
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

export default {
	name: 'cards',
	data() {
		return {
			api: null,
			path: 'Test', //Default value
			freq: 'Hmm', //''
			startDate: null,
			endDate: null,
			dateRange: null
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
		axios
			.get('http://localhost:9259/data/page-view')
			.then(response => (this.api = response.data))
			.catch(error => console.log(error))
	},
	//This helps filter through the api path for metrics and sources.
	methods: {
		fetchData(x) {
			axios
				.get('http://localhost:9259/' + x)
				.then(response => (this.api = response.data))
				.catch(error => console.log(error))
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
	margin-top: 25px;
}
</style>
