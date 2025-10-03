<script setup lang="ts">
// Contoh data tanggal dari gambar
const dates = [
    '1 - 31 Oktober 2025',
    '1 - 31 Desember 2025',
    '1 - 31 Januari 2025',
    '1 - 28 Februari 2026',
    '1 - 31 Februari 2026'
]

const thumbPositions = [5, 30, 55, 80, 95]
</script>

<template>
    <section class="jumbotron pt-20">
        <h1 class="text-2xl font-bold text-center">Roadmap Belajar Menjadi Product Manager</h1>
        <div class="flex justify-center items-center pt-5">
            <hr class="border-[#5476ff] w-20 border-4 rounded-md">
        </div>
        <p class="text-center pt-5">End of Learning</p>
        <div class="flex flex-row justify-center items-center pt-5 gap-4">
            <div class="p-5 rounded-md bg-[#f5f2ff] w-30">
                <p class="text-center">90</p>
                <p class="text-center">Days</p>
            </div>
            <img src="/Frame 1618869526.png" alt="">
            <div class="p-5 rounded-md bg-[#f5f2ff] w-30">
                <p class="text-center">30</p>
                <p class="text-center">Hours</p>
            </div>
            <img src="/Frame 1618869526.png" alt="">
            <div class="p-5 rounded-md bg-[#f5f2ff] w-30">
                <p class="text-center">30</p>
                <p class="text-center">Minutes</p>
            </div>
            <img src="/Frame 1618869526.png" alt="">
            <div class="p-5 rounded-md bg-[#f5f2ff] w-30">
                <p class="text-center">30</p>
                <p class="text-center">Seconds</p>
            </div>
        </div>
        <div class="w-full max-w-4xl mx-auto p-6">
            <div class="relative w-full h-16">
                <div class="absolute top-8 left-4 right-4 h-2 bg-blue-200 rounded"></div>

                <div class="absolute top-8 h-2 bg-blue-500 rounded" :style="{
                    left: thumbPositions[0] + '%',
                    right: (100 - thumbPositions[thumbPositions.length - 1]) + '%'
                }"></div>

                <div v-for="(date, index) in dates" :key="index" class="absolute top-5"
                    :style="{ left: thumbPositions[index] + '%' }">
                    <div class="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md translate-x-[-50%]">
                    </div>
                    <div
                        class="mt-1 text-xs bg-pink-400 text-white rounded px-2 py-0.5 whitespace-nowrap translate-x-[-50%]">
                        {{ date }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>