import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TutorialAdd from '../views/AddTutorial.vue'
import TutorialsList from '../views/TutorialsList.vue'
import NotFound from '../views/NotFound.vue'

const routes: any[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'TutorialAdd',
    component: TutorialAdd
  },
  {
    path: '/tutorials',
    name: 'TutorialsList',
    component: TutorialsList
  },
  // redirect
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/all-tutorials',
    redirect: '/tutorials'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
