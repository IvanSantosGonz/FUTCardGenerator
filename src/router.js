import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generator from './views/Generator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generator',
      name: 'generator',
      component: Generator
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})
