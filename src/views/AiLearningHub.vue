<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

const router = useRouter()

const goAiAssesment = () => {
    router.push('/ai-learning-assesment')
}

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
</script>

<template>
    <section class="pt-40 jumbotron flex flex-col items-center justify-start p-10 gap-10 bg-white
    bg-gradient-to-b from-[#e6ebff] to-transparent
    bg-no-repeat
    [--gH:65%] [background-size:100%_var(--gH)] [background-position:0_0]
    md:[--gH:50%]">
        <h1 class="font-bold text-center mx-auto pt-10 text-2xl line-clamp-2 max-w-[36ch]">
            <span class="inline-block bg-gradient-to-r from-[#002ee8] to-[#977dff] bg-clip-text text-transparent"
                style="-webkit-text-fill-color: transparent;">
                Belajar Lebih Efektif
            </span>
            Bareng Nusa AI yang Paham Cara Kamu Berkembang
        </h1>
        <div class="flex flex-row gap-10">
            <img src="/AI Learning Assesment 2.png" alt="">
            <img src="/AI Learning Path (HASIL) 2.png" alt="">
        </div>
    </section>

    <section class="assesment pt-10">
        <div class="flex justify-between w-[75%] bg-gradient-to-r from-[#f5f2ff] p-5 rounded-xl to-[#e6ebff] mx-auto">
            <h2 class="text-2xl font-bold">Mulai Langkahmu Jadi The Next Tech Leader Bareng Nusa AI</h2>
            <Button class="bg-[#5476FF] hover:bg-[#5476FF] cursor-pointer" @click="goAiAssesment">Mulai
                Assesment</Button>
        </div>
    </section>

    <section class="melatih relative overflow-visible">
        <h1 class="font-bold text-center mx-auto pt-10 text-2xl line-clamp-2 max-w-[50ch]">
            Latih Cara Kamu Berpikir, Bicara, dan Memimpin Bareng AI Role Play yang
            <span class="inline-block bg-gradient-to-r from-[#002ee8] to-[#977dff] bg-clip-text text-transparent"
                style="-webkit-text-fill-color: transparent;">
                Siap Bikin Kamu Naik Level
            </span>
        </h1>

        <br>

        <!-- gambar utama tetap di tengah -->
        <img src="/AI Role Play Chat 1.png" alt="" class="mx-auto relative z-10">

        <!-- dekorasi kiri-atas -->
        <img src="/Ellipse 2 ai learning hub.png" alt="" aria-hidden="true" class="pointer-events-none select-none
              absolute left-0 top-0
              w-24 sm:w-32 md:w-40 h-auto
              -z-10">

        <!-- dekorasi kanan-atas -->
        <img src="/Ellipse 1 ai learning hub.png" alt="" aria-hidden="true" class="pointer-events-none select-none
              absolute right-0 top-0
              w-24 sm:w-32 md:w-40 h-auto
              -z-10">
    </section>

    <section class="ai-role-play mt-10 ms-20">
        <div class="flex gap-5 items-center">
            <h1 class="text-2xl font-bold">Interpersonal & Communication</h1>
            <p class="text-sm text-[#5476ff]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in moduleAiRolePlay" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <img :src="card.thumbnail" alt="" class="rounded-lg w-full object-cover h-50" />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as="span" class="m-0 p-0 inline leading-none">
                            <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                                {{ card.title }}
                            </h1>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ card.title }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

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

    <section class="ai-role-play mt-10 ms-20">
        <div class="flex gap-5 items-center">
            <h1 class="text-2xl font-bold">Problem-solving & Critical thinking</h1>
            <p class="text-sm text-[#5476ff]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in moduleAiRolePlay" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <img :src="card.thumbnail" alt="" class="rounded-lg w-full object-cover h-50" />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as="span" class="m-0 p-0 inline leading-none">
                            <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                                {{ card.title }}
                            </h1>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ card.title }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

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

    <section class="ai-role-play mt-10 ms-20">
        <div class="flex gap-5 items-center">
            <h1 class="text-2xl font-bold">Leadership & Growth Mindset</h1>
            <p class="text-sm text-[#5476ff]">Lihat Semua</p>
        </div>
        <div class="flex flex-row gap-5 mt-5">
            <div v-for="(card, idx) in moduleAiRolePlay" :key="idx"
                class="border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] w-90 p-3 rounded-xl flex flex-col">
                <img :src="card.thumbnail" alt="" class="rounded-lg w-full object-cover h-50" />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as="span" class="m-0 p-0 inline leading-none">
                            <h1 class="text-2xl font-semibold mt-3 min-h-[60px] line-clamp-2 mb-1">
                                {{ card.title }}
                            </h1>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ card.title }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

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
</template>