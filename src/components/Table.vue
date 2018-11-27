
<template>
<!-- This component renders the table on the bottom of the dashboard. -->
<div>
    <h2>{{title}}</h2>
    <v-data-table 
        :headers="headers"
        :items="items"
        class="elevation-1"
    >
        <template slot="items" slot-scope="props">
            <td>{{props.item.name}}</td>
            <td>{{props.item.a}} </td>
            <td>{{props.item.b}}</td>
            <td>{{props.item.c}}</td>
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
      }
  },
    data() {
        return {
            // Mock data
            headers: [
                {
                    text: '',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'Page Views',
                    value: 'a'
                },
                {
                    text: 'Sign-Ups',
                    value: 'b'
                },
                {
                    text: 'Ad-Block',
                    value: 'c'
                }
            ],
            items: [
                {
                    value: false,
                    name: 'Google Analytics',
                    a: 354225,
                    b: 5839,
                    c: 342
                },
                {
                    value: false,
                    name: 'Facebook Analytics',
                    a: 93775,
                    b: 38349,
                    c: 4329
                },
                {
                    value: false,
                    name: 'Bing Analytics',
                    a: 5939,
                    b: 5493,
                    c: 1234
                }
            ]
        }
    }
}
</script>
