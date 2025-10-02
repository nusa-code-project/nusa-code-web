<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const showNavbar = !['/login', '/register'].includes(route.path)
</script>

<template>
  <NavBar v-if="showNavbar" />
  <RouterView />
</template>

<style scoped></style>
