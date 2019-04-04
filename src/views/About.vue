<template>
  <div class="about">
    <v-app>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3 offset-xs1>
            <fut-card></fut-card>
          </v-flex>
            <card-form></card-form>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>


<script>
  import Card from '@/components/Card.vue'
  import CardForm from '@/components/CardForm.vue'

  export default {
    name: 'about',
    components: {
      'fut-card': Card,
      'card-form': CardForm
    }
  }
</script>

}
