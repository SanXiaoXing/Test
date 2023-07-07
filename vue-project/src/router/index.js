import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/tlias/EmpView.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('../views/element/ElementView.vue')
  },
  {
    path: '/',
    redirect: 'emp'
  }
]

const router = new VueRouter({
  routes
})

export default router
