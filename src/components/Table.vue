
<template>
<!-- Just mock data, delete later. -->
<div>
    <v-data-table 
        :headers="headers"
        :items="items"
        class="elevation-1"
    >
        <template slot="items" slot-scope="props">
            <td>{{props.item.name}}</td>
            <td>{{props.item[0]}} </td>
            <td>{{props.item[1]}}</td>
            <td>{{props.item[2]}}</td>
            <td>{{props.item[3]}}</td>
            <td>{{props.item[4]}}</td>
        </template>
    </v-data-table>
</div>
</template>

<script>
import vuetify from 'vuetify'

export default {
    name: 'Table',
    
  computed: {
      title() {
          return this.$store.state.title;
      },
      
      items() {
          let items = [];
            for(let i = 0; i < this.$store.state.datasets.length; i++ ){
                let source = {
                    value: false,
                    name: this.$store.state.datasets[i].label,
                }
                for(let j = 0; j < this.$store.state.datasets[i].data.length; j++) {
                    source[j] = this.$store.state.datasets[i].data[j];
                }
                items.push(source);
            }
            console.log(items);
            return items;
        },
        headers() {
            let start = this.$store.state.startTime;
            let end = this.$store.state.endTime;

            let numInc = 5;
            let increment = (end - start) / numInc;

            let cur = start;
            let breaks = [];

            for(let i = 0; i < numInc; i++) {
                cur += increment;
                breaks.push(cur)
            }

            // breaks.map((time) => {

            // })

            let labels = [
                {
                    text: '',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
            ];

            let count = 0;

            for(let i = 0; i < breaks.length; i++) {
                labels.push({text:breaks[i], value:count});
                count++;
            }
            console.log(labels);
            return labels;
        }
    },
    data() {
        return {
    
        }
    }
}
</script>
