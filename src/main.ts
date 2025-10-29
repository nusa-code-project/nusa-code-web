import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query';
import VueCookies from 'vue3-cookies'

createApp(App).use(VueCookies).use(router).use(VueQueryPlugin).mount('#app')
