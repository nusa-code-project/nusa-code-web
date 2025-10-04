<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
    <section
        class="jumbotron flex items-center justify-start p-10 mt-10 flex-row bg-gradient-to-b from-[#DAF4FB] to-[#FFFFFF] [background-position:0%_0%,0%_65%]">
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
</template>