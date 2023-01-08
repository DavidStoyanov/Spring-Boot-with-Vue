import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTutorial from '../views/AddTutorial.vue'
import TutorialsList from '../views/TutorialsList.vue'
import NotFound from '../views/NotFound.vue'

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'add-tutorial',
    component: AddTutorial
  },
  {
    path: '/tutorials',
    name: 'tutorials-list',
    component: TutorialsList
  },
  // redirect
  {
    path: '/all-tutorials',
    redirect: '/tutorials'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
