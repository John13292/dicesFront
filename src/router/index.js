import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ShowEffects',
    name: 'ShowEffects',
    component: () => import('../views/ShowEffects.vue')
  },
  {
    path: '/EditEffects',
    name: 'Editfects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EditEffects.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
