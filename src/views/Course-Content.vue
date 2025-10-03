<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>
    <div class="flex min-h-screen">
        <div class="w-1/2 p-8 overflow-y-auto max-h-screen hide-scrollbar">
            <img src="/Rectangle 268.png" alt="Roadmap" class="w-full h-auto rounded-lg mb-6">
            <h1 class="text-[35.3px] font-bold mb-4">Building Product Roadmaps With Confidence</h1>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <img src="/Ellipse 18.png" alt="avatar" class="w-10 h-10 rounded-full">
                    <p class="font-semibold">Marcus Aurelius</p>
                    <Button class="bg-[#5476FF] h-7 rounded-xl">Follow</Button>
                </div>
                <div class="flex items-center gap-2">
                    <p class="font-semibold">5.0</p>
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-user.png" class="w-[18px] h-[18px] ms-3" alt="">
                    <p class="font-semibold">595,555 Enrolled</p>
                </div>
            </div>
            <p class="mt-4">Kursus ini akan membimbing kamu memahami bagaimana menyusun roadmap produk yang kuat, jelas,
                dan relevan
                dengan kebutuhan pasar. Kamu akan mempelajari prinsip dasar perencanaan produk, teknik menentukan
                prioritas fitur dengan metode seperti RICE atau MoSCoW, serta cara menghubungkan roadmap dengan visi dan
                strategi bisnis. Selain itu, kursus ini juga membekali kamu dengan keterampilan komunikasi agar roadmap
                yang dibuat dapat dipresentasikan dengan percaya diri kepada stakeholder maupun tim lintas fungsi.</p>
            <p class="mt-4">Melalui kombinasi teori, studi kasus, dan latihan praktis, kamu akan memperoleh pengalaman
                langsung
                merancang roadmap yang tidak hanya realistis tetapi juga mampu menjadi panduan strategis dalam
                mengarahkan pengembangan produk jangka panjang. Pada akhir kursus, kamu akan lebih siap menghadapi
                tantangan product management sekaligus meningkatkan peluang keberhasilan produk di pasar.</p>

            <Card class="w-95 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] mt-5">
                <CardHeader class="ps-2 pe-2">
                    <CardTitle class="text-[18px] font-bold">
                        Kursus Ini Mencakup
                    </CardTitle>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img src="/Frame 1618869427.png" alt="">
                </CardContent>
            </Card>

            <Card class="w-95 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] mt-5 h-45">
                <CardHeader class="ps-2 pe-2 mb-0">
                    <CardTitle class="text-[18px] font-bold">
                        Kursus Ini Mencakup
                    </CardTitle>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 mt-0">
                    <img src="/Frame 1618869444.png" alt="">
                </CardContent>
            </Card>
        </div>

        <div class="w-1/2 p-8 bg-white overflow-y-auto max-h-screen hide-scrollbar">
            <Button class="w-[119px] text-[20px] h-12 bg-[#5476FF] me-3">Section</Button>
            <Button
                class="w-[119px] text-[20px] h-12 bg-transparent text-[#5476FF] rounded-lg border-1 ms-3 border-[#5476FF]">Project</Button>
            <img src="/Frame 1618869490.png" oncontextmenu="return false;" class="mt-5" alt="">
            <img src="/Frame 1618869496.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869498.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869499.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869500.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869501.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869502.png" oncontextmenu="return false;" class="mt-5" alt="">
            <img src="/Frame 1618869503.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869510.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869508.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869509.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869511.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869502.png" oncontextmenu="return false;" class="mt-5" alt="">
            <img src="/Frame 1618869513.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869514.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869515.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869516.png" oncontextmenu="return false;" alt="">
            <img src="/Frame 1618869517.png" oncontextmenu="return false;" alt="">
        </div>
    </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>