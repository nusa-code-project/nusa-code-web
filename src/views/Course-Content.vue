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
        <div class="w-1/2 p-8">
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
                yang dibuat dapat dipresentasikan dengan percaya diri kepada stakeholder maupun tim lintas fungsi.

                Melalui kombinasi teori, studi kasus, dan latihan praktis, kamu akan memperoleh pengalaman langsung
                merancang roadmap yang tidak hanya realistis tetapi juga mampu menjadi panduan strategis dalam
                mengarahkan pengembangan produk jangka panjang. Pada akhir kursus, kamu akan lebih siap menghadapi
                tantangan product management sekaligus meningkatkan peluang keberhasilan produk di pasar.</p>

            <Card class="w-80 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]">
                <CardHeader class="ps-2 pe-2">
                    <CardTitle class="text-[18px] font-bold">
                        Kursus Ini Mencakup
                    </CardTitle>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img src="/Frame 1618869427.png" alt="">
                </CardContent>
            </Card>
        </div>

        <div class="w-1/2 p-8 bg-white">
            <h2 class="text-xl font-semibold mb-4">Section 1 - Fundamentals</h2>
            <ul class="space-y-3">
                <li class="p-3 bg-white rounded shadow">
                    <span>1. Peran Roadmap dalam Siklus Hidup Produk</span>
                </li>
                <li class="p-3 bg-white rounded shadow">
                    <span>2. Visi Produk: Pondasi Roadmap</span>
                </li>
                <li class="p-3 bg-white rounded shadow">
                    <span>3. Menentukan Tujuan dan Outcome Bisnis</span>
                </li>
            </ul>
        </div>
    </div>
</template>