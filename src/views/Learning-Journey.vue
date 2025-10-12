<script setup lang="ts">
import { ref } from 'vue'

const mentors = ref([
    {
        name: 'Andreas Surya',
        image: '/Ellipse 22.png',
        title: 'Head of Business Development at CISCO'
    },
    {
        name: 'Bimo Soewadji',
        image: '/Ellipse 23.png',
        title: 'CEO & Founder of CarbonEthics'
    },
    {
        name: 'Jono Mulyono',
        image: '/Ellipse 23 (1).png',
        title: 'AI Researcher at Harvard Computer Science'
    },
    {
        name: 'Mulyadi',
        image: '/Ellipse 23 (2).png',
        title: 'IT Consultant & Tech Analyst at Mckinsey'
    },
])
</script>

<template>
    <section class="jumbotron pt-30 ms-20 flex flex-col">
        <h1 class="text-2xl font-bold">Mentor Pilihan Kamu</h1>
        <div class="flex flex-row gap-5 mt-2">
            <div v-for="(mentor, idx) in mentors" :key="idx"
                class="mentor flex flex-col justify-center items-center p-3 w-50 gap-2">
                <img :src="mentor.image" class="w-20" :alt="mentor.name" />
                <h2 class="font-semibold text-xl">{{ mentor.name }}</h2>
                <p class="text-center text-sm">{{ mentor.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>