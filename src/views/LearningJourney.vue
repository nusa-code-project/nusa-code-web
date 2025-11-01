<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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

const moduleAiRolePlay = ref([
    {
        thumbnail: '/Rectangle 39 (8).png',
        title: 'Negosiasi Deadline yang Dimajukan dengan Project Manager',
        duration: '5 menit',
        category: 'Easy',
    },
    {
        thumbnail: '/Rectangle 39 (9).png',
        title: 'Memberikan Feedback Konstruktif ke Rekan Tim Pengembangan',
        duration: '5 menit',
        category: 'Easy',
    },
    {
        thumbnail: '/Rectangle 39 (10).png',
        title: 'Simulasi Daily Standup: Melaporkan Progres dengan Jelas',
        duration: '5 menit',
        category: 'Easy',
    },
    {
        thumbnail: '/Rectangle 39 (11).png',
        title: 'Simulasi Daily Standup: Melaporkan Progres dengan Jelas',
        duration: '5 menit',
        category: 'Easy',
    }
])

const myCourse = ref([
    {
        imageSrc: '/Rectangle 39 (4).png',
        title: 'Product Management 101: From Idea to Launch',
        description: 'Pelajari dasar-dasar product management dan kuasai langkah penting dari seorang ahli …',
        authorAvatar: '/Ellipse 20.png',
        authorName: 'Jonathan Christy',
        rating: 5.0
    },
    {
        imageSrc: '/Rectangle 39 (5).png',
        title: 'Web Development Bootcamp',
        description: 'Mulai dari HTML, CSS, JS hingga backend dengan hands-on projec…',
        authorAvatar: '/Ellipse 21.png',
        authorName: 'Siti Nurhaliza',
        rating: 4.8
    },
    {
        imageSrc: '/Rectangle 39 (6).png',
        title: 'UI/UX Design Fundamentals',
        description: 'Belajar prinsip desain, user research, prototyping, dan desain inter…',
        authorAvatar: '/Ellipse 22.png',
        authorName: 'Rafi Ahmad',
        rating: 4.9
    },
    {
        imageSrc: '/Rectangle 39 (7).png',
        title: 'Become Expert in Data Analytics for Business',
        description: 'Pelajari dasar-dasar penggunaan teknologi data analytics dalam meningkatkan',
        authorAvatar: '/Ellipse 22.png',
        authorName: 'Rafi Ahmad',
        rating: 4.9
    }
])

const cardRoadmaps = ref([
    {
        title: 'Product Manager',
        badge: 'Belum Dimulai',
        description: 'Peta jalan ini menguraikan jalur pembelajaran menjadi seorang Product Manager, mulai dari tahap awal hingga posisi kepemimpinan',
        progress: 80,
        img: '/Vector.png',
        inProgress: true,
        estimatedTime: '3 - 6 Bulan',
        module: '4 Module',
    },
    {
        title: 'Data Analyst',
        badge: 'Belum Dimulai',
        description: 'Deskripsi jalur belajar Web Developerds',
        progress: 65,
        img: '/Vector (1).png',
        inProgress: false,
        estimatedTime: '3 - 6 Bulan',
        module: '4 Module'
    },
    {
        title: 'Product Design',
        badge: 'Belum Dimulai',
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
    <section class="jumbotron ms-25 flex flex-col pt-40">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-[30px]">Mentor Pilihan Kamu</h2>
            <p class="text-xl text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-2">
            <div class="flex flex-row gap-25 mt-2">
                <div v-for="(mentor, idx) in mentors" :key="idx"
                    class="mentor flex flex-col justify-center items-center p-3 w-50 gap-1">
                    <img :src="mentor.image" class="w-35 h-35 aspect-square object-cover rounded-full block shrink-0"
                        :alt="mentor.name" />
                    <h2 class="font-semibold text-[23px] pt-1 text-center leading-tight">
                        {{ mentor.name }}
                    </h2>
                    <p class="text-center text-[18px] text-[#454545] min-h-[3rem] flex justify-center items-center">
                        {{ mentor.title }}
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section class="roadmap ps-25 mt-10">
        <h1 class="text-[30px] font-bold">Pilih Roadmap Belajarmu Selanjutnya</h1>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in cardRoadmaps" :key="idx"
                class="relative border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl">{{ card.title }}</h2>
                    <Badge class="bg-[#dfd7ff] text-black !ps-1 !pe-1 cursor-pointer rounded-xl hover:bg-[#dfd7ff]">
                        {{ card.badge }}
                    </Badge>
                </div>

                <p class="mt-2 text-[#454545] flex-1 min-h-0 break-words overflow-hidden line-clamp-3">
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

    <section class="my-course mt-10 ps-25">
        <div class="flex gap-5 items-center">
            <h1 class="text-[30px] font-bold">Kursus Yang Sudah Kamu Miliki</h1>
            <p class="text-sm text-[#5476ff]">Filter By</p>
        </div>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in myCourse" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <img :src="card.imageSrc" alt="" class="rounded-lg w-full object-cover" />

                <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                    {{ card.title }}
                </h1>

                <p
                    class="mt-2 mb-1 text-[#454545] flex-1 min-h-[48px] max-h-[48px] break-words overflow-hidden line-clamp-2">
                    {{ card.description }}
                </p>

                <div class="flex mt-2 items-center gap-2">
                    <img :src="card.authorAvatar" alt="" class="w-6 h-6 rounded-full" />
                    <p class="text-sm">{{ card.authorName }}</p>
                </div>

                <div class="flex justify-between items-center mt-3">
                    <div class="flex items-center gap-3">
                        <p class="font-semibold">{{ card.rating.toFixed(1) }}</p>
                        <div class="flex gap-2">
                            <img src="/fi-sr-star.png" alt="" class="w-4 h-4" v-for="i in 5" :key="i" />
                        </div>
                    </div>
                    <Badge class="bg-[#dfd7ff] text-black !ps-3 !pe-3 font-semibold cursor-pointer hover:bg-[#dfd7ff]">
                        Lanjutkan
                    </Badge>
                </div>
            </div>
        </div>
    </section>

    <section class="ai-role-play mt-10 ps-25">
        <div class="flex gap-5 items-center">
            <h1 class="text-[30px] font-bold">Lanjutkan Modul AI Role Play</h1>
            <p class="text-sm text-[#5476ff]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in moduleAiRolePlay" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <img :src="card.thumbnail" alt="" class="rounded-lg w-full object-cover h-50" />

                <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                    {{ card.title }}
                </h1>

                <div class="flex mt-2 items-center gap-2">
                    <img src="/fi-br-time-fast.png" alt="">
                    <p>{{ card.duration }}</p>
                </div>

                <div class="flex mt-2 items-center gap-2">
                    <img src="/fi-br-signal-alt.png" alt="">
                    <p>{{ card.duration }}</p>
                </div>

                <div class="flex justify-between mt-5">
                    <Button
                        class="w-1/3 flex justify-center items-center bg-transparent border border-[#5476FF] hover:bg-transparent">
                        <img src="/fi-br-bookmark.png" alt="">
                        <p class="text-[#5476FF] font-semibold">Simpan</p>
                    </Button>
                    <Button
                        class="w-50 flex justify-center items-center bg-[#5476FF] border border-[#5476FF] hover:bg-[#5476FF]">
                        Mulai Role Play
                    </Button>
                </div>
            </div>
        </div>
    </section>
    <br>
    <br>
</template>

<style scoped></style>