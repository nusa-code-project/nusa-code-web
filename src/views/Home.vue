<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const coursesRecomendation = [
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description: "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        image: "/Rectangle 39.png",
        title: "Advanced UX Design Strategy",
        description: "Pahami strategi UX modern untuk meningkatkan pengalaman pengguna.",
        avatar: "/Ellipse 20.png",
        author: "Sophia Loren",
        rating: 5.0,
        price: "Rp299.999",
    },
    {
        image: "/Rectangle 39.png",
        title: "Backend Development with Flask",
        description: "Belajar membangun API modern menggunakan Flask & Python.",
        avatar: "/Ellipse 20.png",
        author: "NusaCode",
        rating: 5.0,
        price: "Rp499.999",
    },
]

const coursesFavorite = [
    {
        img: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        img: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        img: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
    {
        img: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20.png",
        author: "Marcus Aurelius",
        rating: 5.0,
        price: "Rp399.999",
    },
];

const mentors = [
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
    {
        img: "/Ellipse 21.png",
        name: "Sonny Philo",
        job: "IT Project Manager @ Pertamina Oil & Gas",
    },
];

const courses = [
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
    {
        image: "/Rectangle 39.png",
        title: "Building Product Roadmaps With Confidence",
        description:
            "Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim...",
        avatar: "/Ellipse 20 (1).png",
        author: "NusaCode",
        rating: 5.0,
        price: "Gratis",
    },
];

</script>

<template>
    <section
        class="jumbotron flex flex-row items-center justify-between ps-10 pe-10 bg-[linear-gradient(to_top,#ffffff_0%,#f5f2ff_50%,#e6ebff_100%)]  h-[394px]">
        <img src="/Bingung Mau ke Mana_ Tentukan Jalur IT Kamu & Jadi The Next Tech Leader.png" alt="text" width="500">
        <Button class="bg-[#5476FF] h-12">
            Temukan Jalur IT Kamu
        </Button>
    </section>
    <section class="recomendation ps-9.5 pt-15">
        <h1 class="text-2xl font-bold pb-3">Dirancang Khusus Untuk Kamu</h1>
        <div class="flex flex-row gap-5 flex-wrap">
            <Card v-for="(card, index) in coursesRecomendation" :key="index" class="w-80">
                <CardHeader class="ps-2 pe-2">
                    <img :src="card.image" class="w-full" alt="">

                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ card.title }}
                    </CardTitle>

                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ card.description }}
                    </CardDescription>

                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="card.avatar" width="30" alt="avatar">
                    <p class="text-[15px]">{{ card.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">{{ card.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-2xl">
                        {{ card.price }}
                    </p>
                </CardFooter>
            </Card>

        </div>
    </section>
    <section class="course-favorite ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Kursus Favorit Pilihan Banyak Orang</h1>
            <p class="text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card v-for="(course, index) in coursesFavorite" :key="index" class="w-80">
                <CardHeader class="ps-2 pe-2">
                    <img :src="course.img" class="w-full" alt="">

                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ course.title }}
                    </CardTitle>

                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ course.description }}
                    </CardDescription>

                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="course.avatar" width="30" alt="avatar">
                    <p class="text-[15px]">{{ course.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">{{ course.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-2xl">
                        {{ course.price }}
                    </p>
                </CardFooter>
            </Card>
        </div>
    </section>
    <section class="recomendation ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Mentor Favorit Nusaverse</h1>
            <p class="text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card v-for="(mentor, index) in mentors" :key="index" class="w-50 p-0 border-none shadow-none">
                <CardHeader class="ps-2 pe-2 justify-center">
                    <img :src="mentor.img" class="h-20 w-20" alt="mentor avatar" />
                </CardHeader>

                <CardFooter class="ps-2 pe-2 flex flex-col gap-1 justify-center items-center text-center">
                    <h1 class="text-[15px] font-bold text-center">
                        {{ mentor.name }}
                    </h1>
                    <p class="overflow-hidden text-ellipsis text-[12px] max-w-[10rem]"
                        style="-webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 2;">
                        {{ mentor.job }}
                    </p>
                </CardFooter>
            </Card>

        </div>
    </section>
    <section class="specialisasi ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Explore Spesialisasi IT Lewat Kursus Gratis dari NusaCode</h1>
            <p class="text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card v-for="(course, index) in courses" :key="index" class="w-80">
                <CardHeader class="ps-2 pe-2">
                    <img :src="course.image" class="w-full" alt="" />
                    <CardTitle class="text-[18px] overflow-hidden text-ellipsis min-h-[48px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ course.title }}
                    </CardTitle>
                    <CardDescription class="pe-2 text-[12px] overflow-hidden min-h-[36px]"
                        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                        {{ course.description }}
                    </CardDescription>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img :src="course.avatar" width="30" alt="avatar" />
                    <p class="text-[15px]">{{ course.author }}</p>
                </CardContent>

                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">{{ course.rating.toFixed(1) }}</h2>
                        <img v-for="i in 5" :key="i" src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="star" />
                    </div>
                    <p
                        class="font-bold bg-[#BCF4B1] p-2 rounded-2xl w-20 text-center h-8 flex items-center justify-center">
                        {{ course.price }}
                    </p>
                </CardFooter>
            </Card>
        </div>
    </section>
    <br>
    <br>
    <br>
</template>