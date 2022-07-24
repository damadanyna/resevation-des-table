import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientsView.vue'
import ReservatoinView from '../views/ReservationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  {
    path: '/client',
    name: 'client',
    component: ClientView
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: ReservatoinView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
