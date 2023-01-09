import { createRouter, createWebHistory } from 'vue-router'
import type RouterObj from '../types/RouterObj'
import HomeView from '../views/HomeView.vue'
import TutorialAdd from '../views/TutorialAdd.vue'
import TutorialsList from '../views/TutorialsList.vue'
import TutorialDetails from '../views/TutorialDetails.vue'
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
  {
    path: '/tutorials/:id',
    name: 'TutorialDetails',
    component: TutorialDetails,
    props: true,
    meta: {
      title: 'Tutorial - Vite App'
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



router.beforeEach((to: RouterObj, from: RouterObj, next: any) => {
  let newTitle: string = to.meta.title;
  
  // change tutorial details title from
  // "Tutorial - Vite App" to "Tutorial #2 - Vite App"
  // depends on id of tutorial
  if (to.matched[0].path === '/tutorials/:id') {
    const spaceIndex = newTitle.indexOf(' ')
    newTitle = newTitle.slice(0, spaceIndex) +
      ` #${to.params.id}` + newTitle.slice(spaceIndex + 1)
  }

  // set document title to meta title
  if (newTitle) document.title = `${newTitle}`;
  // default if meta title is missing
  else document.title = `Vite App`;

  next();
})

export default router
