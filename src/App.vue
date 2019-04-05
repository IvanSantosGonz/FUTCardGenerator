<template>
  <div id="app">
    <div id="nav">
      <v-toolbar dark>
        <v-toolbar-title>Fifa Ultimate Team Card Generator</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat><router-link to="/">Inicio</router-link></v-btn>
          <v-btn flat><router-link to="/generator">Generador</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #aaa;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
