import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import CourseContent from './views/Course-Content.vue'
import ProfileMentor from './views/Profile-Mentor.vue'
import SubmitLatihan from './views/Submit-Latihan.vue'

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/course-content', component: CourseContent },
    { path: '/profile-mentor', component: ProfileMentor },
    { path: '/submit-latihan', component: SubmitLatihan },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router