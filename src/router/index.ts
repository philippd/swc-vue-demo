import { createRouter, createWebHistory } from 'vue-router'
import SixWebComponentsView from '../views/SixWebComponentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SixWebComponentsView
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: () => import('../views/VuetifyComponentsView.vue')
    }
  ]
})

export default router
