import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import CourseContent from './views/Course-Content.vue'
import ProfileMentor from './views/Profile-Mentor.vue'

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/course-content', component: CourseContent },
    { path: '/profile-mentor', component: ProfileMentor },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router