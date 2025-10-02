import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import Home from './views/Home.vue'
import JalurBelajar from './views/Jalur-Belajar.vue'

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/jalur-belajar', component: JalurBelajar },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router