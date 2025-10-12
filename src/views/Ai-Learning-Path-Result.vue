<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { ref } from 'vue'

const recommendations = ref([
    { title: 'Web Development', image: '/Mascot (1).png', score: 95 },
    { title: 'Mobile Development', image: '/Mascot (2).png', score: 88 },
    { title: 'Product & UX', image: '/Mascot (3).png', score: 92 },
])
</script>

<template>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="flex flex-col gap-10">
            <h1 class="text-2xl font-bold text-center">
                Berikut adalah 3 rekomendasi jalur belajar yang paling efektif untuk kamu
            </h1>
            <div class="flex flex-row gap-8 justify-center">
                <div v-for="(rec, idx) in recommendations" :key="idx" class="border border-[#b0c0ff] rounded-xl p-3 w-[400px] flex flex-col items-center
         bg-[linear-gradient(to_bottom,white_0%,white_50%,#f5f2ff_100%)]">
                    <h2 class="text-xl font-semibold text-center">{{ rec.title }}</h2>
                    <Separator class="my-5 border-5 !w-[96px] mx-auto rounded-sm border-[#5476ff]" />
                    <img :src="rec.image" alt="" class="mx-auto block" />
                    <p class="text-center text-[20px] mt-3">Kecocokan hasil dengan profil kamu</p>
                    <h3 class="text-center text-2xl font-semibold mt-3">{{ rec.score }}%</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
