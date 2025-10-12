<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

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

const cardRoadmaps = ref([
    {
        title: 'Product Manager',
        badge: 'Product Manager',
        description: 'Peta jalan ini menguraikan jalur pembelajaran menjadi seorang Product Manager, mulai dari tahap awal hingga posisi kepemimpinan',
        progress: 80,
        img: '/Vector.png',
        inProgress: true,
        estimatedTime: '3 - 6 Bulan',
        module: '4 Module',
    },
    {
        title: 'Web Developer',
        badge: 'Web Dev',
        description: 'Deskripsi jalur belajar Web Developerdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaadsaaaaaaaaaaaaasdaaaaa',
        progress: 65,
        img: '/Vector (1).png',
        inProgress: false,
        estimatedTime: '3 - 6 Bulan',
        module: '4 Module'
    },
    {
        title: 'UI/UX Designer',
        badge: 'UI/UX',
        description: 'Deskripsi jalur belajar UI/UX …',
        progress: 90,
        img: '/Adobe_Express_-_file-removebg-preview.png',
        inProgress: false,
        estimatedTime: '3 - 6 Bulan',
        module: '4 Module'
    }
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

    <section class="roadmap ms-20 mt-10">
        <h1 class="text-2xl font-bold">Pilih Roadmap Belajarmu Selanjutnya</h1>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in cardRoadmaps" :key="idx"
                class="relative border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold">{{ card.title }}</h2>
                    <p class="text-sm bg-[#dfd7ff] ps-2 pe-2 pb-1 pt-1 rounded-xl">{{ card.badge }}</p>
                </div>

                <p class="mt-2 text-[#454545] flex-1 min-h-0 break-words overflow-hidden"
                    style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    {{ card.description }}
                </p>

                <div class="mt-4 flex flex-col gap-3">
                    <div v-if="card.inProgress" class="flex items-center">
                        <p class="font-semibold">{{ card.progress }}%</p>
                        <Progress class="ms-2 border-black border h-3 [&>*]:bg-green-500 bg-transparent w-40"
                            :model-value="card.progress" />
                    </div>
                    <div v-if="!card.inProgress" class="flex items-center gap-5">
                        <div class="flex items-center gap-2">
                            <img src="/fi-br-time-check.png" class="w-5 h-5" alt="">
                            <p class="font-semibold">{{ card.estimatedTime }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="/fi-br-document.png" class="w-5 h-5" alt="">
                            <p class="font-semibold">{{ card.module }}</p>
                        </div>
                    </div>
                    <Button class="bg-[#5476FF] hover:bg-[#5476FF] w-30">Lanjutkan</Button>
                </div>

                <img :src="card.img" alt=""
                    class="absolute bottom-0 right-0 translate-x-[-20px] w-30 translate-y-[-30px] z-0" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>