<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ref } from 'vue'

const mentors = ref([
    {
        name: 'Andreas Surya',
        image: '/Ellipse 21.png',
        title: 'IT Project Manager @ Pertamina Oil & Gas'
    },
    {
        name: 'Andreas Surya',
        image: '/Ellipse 22.png',
        title: 'Head of Business Devopment @ CISCO'
    },
    {
        name: 'David Wahyu',
        image: '/Ellipse 23 (copy).png',
        title: 'Chief Product Design @ Microsoft'
    },
    {
        name: 'Rahmandana',
        image: '/Ellipse 23 (1) (copy).png',
        title: 'Cybersecurity & Full-stack engineer @ IBM'
    },
    {
        name: 'Bimo Soewadji',
        image: '/Ellipse 23.png',
        title: 'CEO & Founder CarbonEthics'
    },
])

const exploreCourses = [
    {
        image: "/Rectangle 39 (copy).png",
        title: "Data Science Starter Pack: Analisis & Visualisasi Data",
        description: "Kuasai dasar Python, analisis data, dan bikin visualisasi interaktif biar data lebih...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39 (another copy).png",
        title: "Cybersecurity Basics: Amankan Sistem Digital",
        description: "Kenali ancaman siber, pahami cara kerja hacking, dan pelajari langkah dasar...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39 (6).png",
        title: "Soft Skills for Tech Talent: Leadership & Analytical",
        description: "Kembangkan skill komunikasi, kepemimpinan, dan problem solving biar makin siap jadi...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39 (1) (copy).png",
        title: "Basic Web Development: Dari Nol Sampai Online",
        description: "Belajar dasar HTML, CSS, dan JavaScript untuk bikin website pertama kamu yang bisa..",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
]

const listCourses = [
    {
        image: "/Rectangle 39 1.png",
        title: "Web Development Basics with React & Node.js",
        description: "Pelajari proses end-to-end pengembangan website menggunakan framework...",
        avatar: "/Ellipse 20 (1) 1 (copy).png",
        author: "Hotman Paris",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 2.png",
        title: "Become Expert in Data Analytics for Business",
        description: "Pelajari dasar-dasar penggunaan teknologi data analytics dalam meningkatkan...",
        avatar: "/Ellipse 20 (copy).png",
        author: "Donald Trump",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 6.png",
        title: "Leverage AI to Grow Your Business Performance",
        description: "Pelajari bagaiman implementasi tools AI untuk meningkatkan kinerja bisnis anda ke level...",
        avatar: "/Ellipse 20 (1) (copy).png",
        author: "James Gosling",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 7.png",
        title: "Ethical Hacking: Defending Against Cyber Attacks",
        description: "Kursus ini berfokus pada teknik hacking etis untuk memahami bagaimana serangan...",
        avatar: "/Ellipse 20 (2).png",
        author: "Ryan Reynolds",
        rating: 5.0,
        price: "Rp399.999",
    },
]

const listCourseRecomendation = [
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description: "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 28.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 (4).png",
        title: "Product Management 101: From Idea to Launch",
        description: "Pelajari dasar-dasar product management dan kuasai langkah penting dari seorang ahli...",
        avatar: "/Ellipse 20.png",
        author: "Jonathan Christy",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 5.png",
        title: "Agile & Scrum Methods for Product Manager",
        description: "Kuasai prinsip Agile dan praktik Scrum untuk mengelola produk lebih efektif bersama...",
        avatar: "/Ellipse 20.png",
        author: "Muhammad Aryo",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39 6.png",
        title: "Metrics That Matter: Data-Driven Product Decisions",
        description: "Pelajari cara menggunakan data dan metrik kunci untuk membuat keputusan yang...",
        avatar: "/Ellipse 20 (1) 1.png",
        author: "Ryan Gosling",
        rating: 5.0,
        price: "Rp399.999",
    },
]
</script>

<template>
    <section
        class="pt-20 jumbotron flex flex-col items-center justify-start p-10 gap-10 bg-gradient-to-b from-[#e6ebff] to-[#FFFFFF] [background-position:0%_0%,0%_65%]">
        <h1 class="font-bold text-center mx-auto pt-10 text-2xl line-clamp-2 max-w-[36ch]">
            Bingung Mau ke Mana? Tentukan Jalur IT Kamu & Jadi
            <span class="inline-block bg-clip-text text-transparent" style="
    background: linear-gradient(90deg, #977dff 0%, #002ee8 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
            background-clip: text;
  ">
                The Next Tech Leader
            </span>
        </h1>
        <img src="/Jalur Belajar 1.png" alt="">
    </section>

    <section class="daftar-kursus flex flex-col ps-10 pt-10 gap-5">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-2xl">Dirancang Khusus Untuk Kamu</h2>
        </div>
        <div class="flex flex-row gap-5">
            <Card v-for="(card, index) in listCourseRecomendation" :key="index"
                class="w-80 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]">
                <CardHeader class="ps-2 pe-2">
                    <img :src="card.image" class="w-full" alt="">

                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px] line-clamp-2">
                        {{ card.title }}
                    </CardTitle>

                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px] line-clamp-2">
                        {{ card.description }}
                    </CardDescription>

                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="card.avatar" width="40" alt="avatar">
                    <p class="text-[15px]">{{ card.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[14px] font-bold">{{ card.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] pe-2 ps-2 rounded-md text-[14px]">
                        {{ card.price }}
                    </p>
                </CardFooter>
            </Card>
        </div>
    </section>
    <section class="kursus-favorite flex flex-col ps-10 pt-10 gap-5">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-2xl">Kursus Favorit Pilihan Banyak Orang</h2>
            <p class="text-xl text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5">
            <Card v-for="(card, index) in listCourses" :key="index"
                class="w-80 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]">
                <CardHeader class="ps-2 pe-2">
                    <img :src="card.image" class="w-full" alt="">

                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px] line-clamp-2">
                        {{ card.title }}
                    </CardTitle>

                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px] line-clamp-2">
                        {{ card.description }}
                    </CardDescription>

                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="card.avatar" width="40" alt="avatar">
                    <p class="text-[15px]">{{ card.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[14px] font-bold">{{ card.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] pe-2 ps-2 rounded-md text-[14px]">
                        {{ card.price }}
                    </p>
                </CardFooter>
            </Card>
        </div>
    </section>

    <section class="jumbotron pt-10 ms-10 flex flex-col">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-2xl">Mentor Favorit Nusaverse</h2>
            <p class="text-xl text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-2">
            <div class="flex flex-row gap-5 mt-2">
                <div v-for="(mentor, idx) in mentors" :key="idx"
                    class="mentor flex flex-col justify-center items-center p-3 w-50 gap-2">
                    <img :src="mentor.image" class="w-20 h-20 aspect-square object-cover rounded-full block shrink-0"
                        :alt="mentor.name" />
                    <h2 class="font-semibold text-xl text-center leading-tight min-h-[3rem]">
                        {{ mentor.name }}
                    </h2>
                    <p class="text-center text-sm text-[#454545] min-h-[3rem] flex justify-center items-center">
                        {{ mentor.title }}
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section class="explore-kursus flex flex-col ps-10 pt-10 gap-5">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-2xl">Explore Spesialisasi IT Lewat Kursus Gratis dari NusaCode</h2>
            <p class="text-xl text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5">
            <Card v-for="(card, index) in exploreCourses" :key="index"
                class="w-80 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]">
                <CardHeader class="ps-2 pe-2">
                    <img :src="card.image" class="w-full" alt="">

                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px] line-clamp-2">
                        {{ card.title }}
                    </CardTitle>

                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px] line-clamp-2">
                        {{ card.description }}
                    </CardDescription>

                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="card.avatar" width="40" alt="avatar">
                    <p class="text-[15px]">{{ card.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[14px] font-bold">{{ card.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] pe-2 ps-2 rounded-md text-[14px]">
                        {{ card.price }}
                    </p>
                </CardFooter>
            </Card>
        </div>
    </section>
    <br>
    <br>
</template>