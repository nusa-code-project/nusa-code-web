import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import CourseContent from './views/Course-Content.vue'
import ProfileMentor from './views/Profile-Mentor.vue'
import SubmitLatihan from './views/Submit-Latihan.vue'
import JalurBelajar from './views/Jalur-Belajar.vue'
import AiLearning from './views/Ai-Learning.vue'
import AiLearningPathResult from './views/Ai-Learning-Path-Result.vue'
import LearningJourney from './views/Learning-Journey.vue'
import Testing from './views/Testing.vue'
import Home from './views/Home.vue'

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/course-content', component: CourseContent },
    { path: '/profile-mentor', component: ProfileMentor },
    { path: '/submit-latihan', component: SubmitLatihan },
    { path: '/jalur-belajar', component: JalurBelajar },
    { path: '/ai-learning', component: AiLearning },
    { path: '/ai-learning-path-result', component: AiLearningPathResult },
    { path: '/learning-journey', component: LearningJourney },
    { path: '/testing', component: Testing },
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router