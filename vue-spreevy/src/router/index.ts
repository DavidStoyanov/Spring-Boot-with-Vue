import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TutorialAdd from '../views/AddTutorial.vue'
import TutorialsList from '../views/TutorialsList.vue'
import NotFound from '../views/NotFound.vue'

const routes: any[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home - Vite App'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About - Vite App'
    }
  },
  {
    path: '/add',
    name: 'TutorialAdd',
    component: TutorialAdd,
    meta: {
      title: 'Add tutorial - Vite App'
    }
  },
  {
    path: '/tutorials',
    name: 'TutorialsList',
    component: TutorialsList,
    meta: {
      title: 'Tutorials - Vite App'
    }
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
    component: NotFound,
    meta: {
      title: 'Not Found - Vite App'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const metaTitle = to.meta.title;
  document.title = `${to.meta.title}`;
  if (!metaTitle) document.title = `Vite App`;
  next();
})

export default router
