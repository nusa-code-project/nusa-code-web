import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query';
import VueCookies from 'vue3-cookies'
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL);

createApp(App).provide('socket', socket).use(VueCookies).use(router).use(VueQueryPlugin).mount('#app')
