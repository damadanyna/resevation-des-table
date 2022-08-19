import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientsView.vue'
import ReservatoinView from '../views/ReservationView.vue'
import WelcommeView from '../views/WelcommeView.vue'

const routes = [        
  {
    path: '/',
    name: 'welcome',
    component: WelcommeView

  },       
  {
    path: '/home',
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
  },
  {
    path: '/:pathMatch(.*)*',
    component: WelcommeView
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
