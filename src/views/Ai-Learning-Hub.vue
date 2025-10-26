<script setup lang="ts">
import { Button } from '@/components/ui/button'
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
            <Button class="bg-[#5476FF] hover:bg-[#5476FF]">Mulai Assesment</Button>
        </div>
    </section>
</template>