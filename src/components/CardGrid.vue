<template>
<!-- This renders the format for the cards. -->
  <v-container id="cards" fluid>
  <v-layout justify-center row wrap>
    <v-flex>
        <div id="cards">
            <Card/>
        </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'CardGrid',
  components: {
    Card
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
#cards {
  margin-top: 25px;
}
</style>
