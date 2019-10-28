import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const loadView = (view) => () => import(/*webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home')
  },
  {
    path: '/auth',
    name: 'auth',
    component: loadView('auth/Auth'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: loadView('auth/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: loadView('auth/Register')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
