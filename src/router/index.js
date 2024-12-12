import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoListView from '@/views/ToDoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todoapp',
      component: ToDoListView,
    },
    {
      path: '/home',
      name: 'home', 
      component: HomeView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    // {
    //   path: '/todolist',
    //   name: 'todolist',
    //   component: ToDoListView
    // },
  ],
})

export default router
