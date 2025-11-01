<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const experiences = [
    {
        image: "/Rectangle 271.png",
        title: "Senior Product Manager",
        company: "Traveloka (2023 - Present)",
        description:
            "Berpengalaman dalam mengelola siklus pengembangan produk secara end-to-end dengan berkolaborasi bersama tim lintas fungsi. Saya juga memiliki keahlian dalam merancang dan menganalisis kasus bisnis yang komprehensif, mencakup strategi go-to-market, model bisnis, dan analisis pasar.",
    },
    {
        image: "/Rectangle 270.png",
        title: "Senior Product Manager",
        company: "Gojek (2017 - 2021)",
        description:
            "Memimpin pengembangan produk dari konsepsi hingga peluncuran, bekerja erat dengan tim teknis dan bisnis. Ahli menerjemahkan riset pasar menjadi roadmap produk yang solid serta menyusun strategi GTM yang didukung oleh analisis data, model bisnis, dan proyeksi finansial yang akurat.",
    },
    {
        image: "/Rectangle 272.png",
        title: "Tokopedia (2015 -2017)",
        company: "Gojek (2017 - 2021)",
        description:
            "Berpengalaman memimpin pengembangan produk end-to-end. Ahli dalam riset pasar, menyusun kasus bisnis, model bisnis, dan strategi data-driven go-to-market. Terampil berkolaborasi dengan tim teknis dan bisnis untuk meluncurkan produk unggulan.",
    },
];

const listCourses = [
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
        image: "/Rectangle 39 (1).png",
        title: "Stakeholder Management for Product Manager",
        description: "Kursus ini dirancang untuk mempertajam senjata utama Anda: soft skills. Anda...",
        avatar: "/Ellipse 28.png",
        author: "Sophia Loren",
        rating: 5.0,
        price: "Rp299.999",
    },
    {
        image: "/Rectangle 39 (2).png",
        title: "PM Level 01: Product Discovery & Validation",
        description: "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 28.png",
        author: "NusaCode",
        rating: 5.0,
        price: "Rp499.999",
    },
    {
        image: "/Rectangle 39 (3).png",
        title: "PM Level 02: Data-Driven Product Decisions",
        description: "Pelajari cara memanfaatkan Metrik dan Analitik untuk Pertumbuhan Produk...",
        avatar: "/Ellipse 28.png",
        author: "NusaCode",
        rating: 5.0,
        price: "Rp499.999",
    },
]
</script>

<template>
    <section
        class="pt-40 ps-25  jumbotron flex items-center justify-start p-10 flex-row bg-gradient-to-b from-[#e6ebff] to-[#FFFFFF] [background-position:0%_0%,0%_65%]">
        <Avatar class="w-40 h-40">
            <AvatarImage src="/Ellipse 28.png" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="flex flex-col ms-10">
            <h1 class="text-4xl font-bold">Marcus Aurelius</h1>
            <div class="flex flex-row gap-2 items-center mt-2">
                <p>Senior Product Manager @ Traveloka</p>
                <img src="/Ellipse 29.png" class="w-2 h-2 ms-2" alt="">
                <p class="font-semibold">5.0</p>
                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                <img src="/Ellipse 29.png" class="w-2 h-2 ms-2" alt="">
                <p class="font-semibold">1.590.750 Followers</p>
            </div>
            <p class="mt-2">Marcus adalah Product Manager berpengalaman di Gojek, Tokopedia, dan Traveloka, dengan
                keahlian dalam
                product strategy, roadmap planning, serta metode Agile. Ia juga aktif membimbing talenta muda melalui
                program mentoring di RevoU.</p>
        </div>
    </section>
    <section class="ps-25 social-media-mentor pt-10 flex flex-row justify-start gap-2">
        <Button class="bg-[#5476FF] w-14">Follow</Button>
        <Button class="bg-[#5476FF] flex flex-row gap-2 justify-center w-35 p-0">
            <img src="/pajamas_linkedin.png" alt="" class="w-6 h-6">
            <p>Lihat Linked In</p>
        </Button>
        <Button class="bg-[#5476FF] flex flex-row gap-2 justify-center w-37 p-0">
            <img src="/icon-left.png" alt="" class="w-6 h-6">
            <p>Lihat Portofolio</p>
        </Button>
    </section>
    <section class="ps-25 experience flex flex-col gap-8 justify-start pt-10">
        <h2 class="font-bold text-2xl">Experience</h2>
        <div v-for="(item, index) in experiences" :key="index" class="flex flex-row gap-6">
            <img :src="item.image" alt="" class="h-20 w-20 object-cover rounded" />
            <div class="flex flex-col">
                <h3 class="font-bold">{{ item.title }}</h3>
                <p>{{ item.company }}</p>
                <p class="text-[#454545] mt-2 max-w-[90%]">{{ item.description }}</p>
            </div>
        </div>
    </section>
    <section class="ps-25 daftar-kursus flex flex-col pt-10 gap-5">
        <div class="flex flex-row items-center gap-2">
            <h2 class="font-bold text-[30px]">Daftar Kursus</h2>
            <p class="text-xl text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5">
            <div v-for="(card, idx) in listCourses" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col gap-3">
                <img :src="card.image" alt="" class="rounded-lg object-cover h-60 w-full" />

                <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                    {{ card.title }}
                </h1>

                <p
                    class="-mt-2 mb-1 text-[#454545] flex-1 min-h-[48px] max-h-[60px] break-words overflow-hidden line-clamp-2 text-[20px]">
                    {{ card.description }}
                </p>
                <div class="flex items-center gap-2">
                    <img :src="card.avatar" width="40" alt="avatar">
                    <p class="text-[18px]">{{ card.author }}</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[14px] font-bold">{{ card.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] pe-2 ps-2 rounded-md text-[14px]">
                        {{ card.price }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <br>
    <br>
</template>

<style></style>