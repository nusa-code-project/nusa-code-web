<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
import Footer from './components/Footer.vue';

const route = useRoute()
const showNavbar = computed(() => !['/login', '/register', '/testing'].includes(route.path))
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-hidden">
    <Toaster />
    <NavBar v-if="showNavbar" />
    <RouterView />
    <Footer />
  </div>
</template>
