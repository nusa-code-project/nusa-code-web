<script setup lang="ts">
import Separator from '@/components/ui/separator/Separator.vue';
import Button from '@/components/ui/button/Button.vue';
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
import ScrollBar from '@/components/ui/scroll-area/ScrollBar.vue';

const modules = [
    {
        id: 1,
        title: "PM Fundamentals & Mindset",
        img: "/Mascot (1) (copy).png",
        desc:
            "Pelajari cara mengidentifikasi masalah pengguna yang paling mendesak melalui Product Discovery, lalu adopsi Agile Mindset untuk membangun solusi.",
    },
    {
        id: 2,
        title: "Product Discovery & Agile Mindset",
        img: "/Mascot (1).png",
        desc:
            "Pelajari user research, problem framing, dan validasi hipotesis untuk memastikan pembangunan produk yang tepat sasaran.",
    },
    {
        id: 3,
        title: " PM Tools & Prototyping",
        img: "/Mascot (copy).png",
        desc:
            "Kuasai tools esensial Product Manager untuk manajemen proyek dan analisis data. Setelah itu, pelajari cara mengubah ide menjadi prototipe interaktif.",
    },
    {
        id: 4,
        title: "Stakeholder Management",
        img: "/Mascot (2).png",
        desc:
            "Pelajari cara memetakan, memahami, dan berkomunikasi secara efektif dengan berbagai stakeholder, mulai dari tim internal hingga pimpinan eksekutif.",
    },
    {
        id: 5,
        title: "Capstone",
        img: "/Mascot (3).png",
        desc:
            'Di sini nih puncaknya, kamu bakal aplikasiin semua yang udah kamu pelajarin. Kamu bakal garap Capstone Project dari nol sampe prototype',
    },
];
</script>

<template>
    <section class="jumbotron pt-40 flex flex-col gap-5">
        <h1 class="text-[30px] text-center font-bold">Roadmap Belajar Menjadi Product Manager</h1>
        <Separator class="py-1 !w-25 mx-auto rounded-md bg-[#5476ff]" />
        <p class="font-semibold text-center text-[20px]">End of Learning</p>
        <div class="flex flex-row mx-auto gap-5 text-xl">
            <div class="bg-[#f5f2ff] rounded-md flex items-center justify-center w-28">
                <div class="flex flex-col">
                    <p class="text-center font-semibold">90</p>
                    <p class="text-center font-semibold">Days</p>
                </div>
            </div>
            <p class="font-bold text-[100px]">:</p>
            <div class="bg-[#f5f2ff] rounded-md flex items-center justify-center w-28">
                <div class="flex flex-col">
                    <p class="text-center font-semibold">03</p>
                    <p class="text-center font-semibold">Hours</p>
                </div>
            </div>
            <p class="font-bold text-[100px]">:</p>
            <div class="bg-[#f5f2ff] rounded-md flex items-center justify-center w-28">
                <div class="flex flex-col">
                    <p class="text-center font-semibold">40</p>
                    <p class="text-center font-semibold">Minutes</p>
                </div>
            </div>
            <p class="font-bold text-[100px]">:</p>
            <div class="bg-[#f5f2ff] rounded-md flex items-center justify-center w-28">
                <div class="flex flex-col">
                    <p class="text-center font-semibold">15</p>
                    <p class="text-center font-semibold">Seconds</p>
                </div>
            </div>
        </div>
        <br>
        <img src="/Frame 1618869672.png" class="w-[90%] mx-auto" alt="">
        <ScrollArea class="w-full pb-8 rounded-md">
            <div class="flex flex-row gap-8 ps-30">
                <div v-for="m in modules" :key="m.id"
                    class="flex flex-col w-90 gap-5 border border-[#E6EBFF] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] ps-5 pe-5 pt-2 rounded-md">
                    <h2 class="text-center font-semibold text-[25px] min-h-20 flex items-center">{{ m.title }}</h2>

                    <img :src="m.img" :alt="m.title" class="w-80 h-80" />

                    <Separator class="py-[5px] !w-25 -mt-6 mx-auto rounded-md bg-[#cfc3ff]" />

                    <p class="text-[15px] text-[#454545] text-center">
                        {{ m.desc }}
                    </p>

                    <Button class="bg-[#5476ff] hover:bg-[#5476ff] cursor-pointer w-30 mx-auto mb-5">
                        Buka Materi
                    </Button>
                </div>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </section>
    <br>
</template>

<style scoped></style>
