<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-layout row>
      <v-flex xs2 offset-xs1>

        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="average"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Media"
          required
        ></v-select>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="speed"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Velocidad"
          required
        ></v-select>
      </v-flex>
    </v-layout>


    <v-layout row>
      <v-flex xs2 offset-xs1>
        <v-select
          v-model="shot"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Tiro"
          required
        ></v-select>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="pass"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Pase"
          required
        ></v-select>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="dribbling"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Regate"
          required
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs2 offset-xs1>
        <v-select
          v-model="defense"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Defensa"
          required
        ></v-select>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="physic"
          :items="numbers"
          :rules="[v => !!v || 'Item is required']"
          label="Físico"
          required
        ></v-select>
      </v-flex>

      <v-flex xs2>
        <v-select
          v-model="position"
          :items="positions"
          :rules="[v => !!v || 'Item is required']"
          label="Posición"
          required
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs2 offset-xs3 >
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
        >
          Validate
        </v-btn>
<!--
        <p>{{name}}, {{average}},{{speed}},{{shot}}, {{pass}}, {{dribbling}},{{defense}}, {{physic}} {{position}}</p>
-->
      </v-flex>
    </v-layout>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      average: '',
      speed: '',
      shot: '',
      pass: '',
      dribbling: '',
      defense: '',
      physic: '',
      position: null,
      positions: [
        'DC',
        'MP',
        'EI',
        'ED',
        'MI',
        'MD',
        'MCO',
        'MCD',
        'MC',
        'DFC',
        'LTI',
        'LTD',
        'PO'
      ],
      numbers: [...Array(100).keys()],
      checkbox: false
    }),
    methods: {
      validate() {
        this.snackbar = true
      },
    }
  }
</script>
