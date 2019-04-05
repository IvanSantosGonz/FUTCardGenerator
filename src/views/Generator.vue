<template>
  <div class="generator">
    <v-app>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3 offset-xs1>
            <fut-card v-on:position="handleClickInParent($event)"></fut-card>
          </v-flex>
          <v-flex xs8 md8 style="min-width: 350px">
            <card-form></card-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>


<script>
  import FutCard from '@/components/FutCard.vue'
  import CardForm from '@/components/CardForm.vue'

  export default {
    name: 'generator',
    components: {
      'fut-card': FutCard,
      'card-form': CardForm
    }
  }
</script>

}
