import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import CourseContent from './views/CourseContent.vue'
import ProfileMentor from './views/ProfileMentor.vue'
import SubmitLatihan from './views/SubmitLatihan.vue'
import JalurBelajar from './views/JalurBelajar.vue'
import AiLearning from './views/AiLearning.vue'
import AiLearningPathResult from './views/AiLearningPathResult.vue'
import LearningJourney from './views/LearningJourney.vue'
import Home from './views/Home.vue'
import AiLearningHub from './views/AiLearningHub.vue'
import Roadmap from './views/Roadmap.vue'
import AiLearningAssesment from './views/AiLearningAssesment.vue'
import AiRolePlayChat from './views/AiRolePlayChat.vue'
import Testing from './views/Testing.vue'

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
    { path: '/', component: Home },
    { path: '/ai-learning-hub', component: AiLearningHub },
    { path: '/roadmap', component: Roadmap },
    { path: '/ai-learning-assesment', component: AiLearningAssesment },
    { path: '/ai-role-play-chat', component: AiRolePlayChat },
    { path: '/testing', component: Testing },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router