import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
