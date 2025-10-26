<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

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
        title: "Advanced UX Design Strategy",
        description: "Pahami strategi UX modern untuk meningkatkan pengalaman pengguna.",
        avatar: "/Ellipse 28.png",
        author: "Sophia Loren",
        rating: 5.0,
        price: "Rp299.999",
    },
    {
        image: "/Rectangle 39 (2).png",
        title: "Backend Development with Flask",
        description: "Belajar membangun API modern menggunakan Flask & Python.",
        avatar: "/Ellipse 28.png",
        author: "NusaCode",
        rating: 5.0,
        price: "Rp499.999",
    },
    {
        image: "/Rectangle 39 (3).png",
        title: "Backend Development with Flask",
        description: "Belajar membangun API modern menggunakan Flask & Python.",
        avatar: "/Ellipse 28.png",
        author: "NusaCode",
        rating: 5.0,
        price: "Rp499.999",
    },
]
</script>

<template>
    <section
        class="pt-20 jumbotron flex flex-col items-center justify-start p-10 gap-10 bg-gradient-to-b from-[#e6ebff] to-[#FFFFFF] [background-position:0%_0%,0%_65%]">
        <h1 class="font-bold text-center mx-auto pt-10 text-2xl" style="
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            overflow:hidden;
            max-width:36ch; 
        ">
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
            <Card v-for="(card, index) in listCourses" :key="index"
                class="w-80 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]">
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
</template>