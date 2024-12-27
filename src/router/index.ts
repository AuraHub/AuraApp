import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Rooms from '@/views/Rooms.vue'
import Settings from '@/views/Settings.vue'
import YourRoom from '@/views/YourRoom.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth } from '../utils/auth.js'

const routes = [
  { path: '/', component: Home },
  { path: '/rooms', component: Rooms },
  { path: '/your-room', component: YourRoom },
  { path: '/settings', component: Settings },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Global route guard
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await checkAuth()

  // If the user is not logged in and tries to access any route other than /login
  if (!isLoggedIn && to.path !== '/login') {
    next('/login') // Redirect to login page
  } else {
    next() // Allow the navigation
  }
})

export default router
