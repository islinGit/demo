import Vue from 'vue'
import VueRouter from 'vue-router'
import Second from '../components/Second.vue'
import First from '../components/First'
import Home from '../components/container/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Second',
    name: 'Second',
    component: Second
  },
  {
    path: '/First',
    name: 'First',
    component: First
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
