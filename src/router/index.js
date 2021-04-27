import { createRouter, createWebHashHistory } from 'vue-router'

// view
import Home from '../views/Home.vue'
//import About from '../views/About.vue'
//import Tunes from '../views/Tunes.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tunes',
    name: 'Tunes',
    component: () => import(/* webpackChunkName: "tunes" */ '../views/Tunes.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
