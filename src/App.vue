<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const showNavbar = computed(() => !['/login', '/register'].includes(route.path))
</script>

<template>
  <NavBar v-if="showNavbar" />
  <RouterView />
</template>
