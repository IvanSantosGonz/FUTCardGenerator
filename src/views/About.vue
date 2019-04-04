<template>
  <div class="about">
    <h1>Fifa Ultimate Team Card Generator</h1>
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6 offset-xs3>
            <Card></Card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
  import Card from '../components/Card'
  export default {
    components: { Card }
  }
</script>
