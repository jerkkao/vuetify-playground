import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import(/* webpackChunkName: "about" */ '../views/CinemaApplication.vue'),
  },
  {
    path: '/fashion',
    name: 'Fashion',
    component: () => import(/* webpackChunkName: "about" */ '../views/FashionHeader.vue'),
  },
  {
    path: '/time',
    name: 'Time',
    component: () => import(/* webpackChunkName: "about" */ '../views/TimeIsMoney.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchHeader.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountSettings.vue'),
  },
  {
    path: '/crowd',
    name: 'Crowd',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrowdfundingCard.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
