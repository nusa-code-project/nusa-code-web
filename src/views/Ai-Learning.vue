<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="h-screen flex justify-center items-center w-full">
        <div class="flex justify-center items-center gap-20">
            <div
                class="relative bg-[#E6EBFF40] rounded-md w-[480px] p-10 shadow-[0px_4px_4px_rgba(230,235,255,0.25)] overflow-hidden">

                <img src="/mingcute_ai-fill.png" alt="background"
                    class="absolute inset-0 w-full h-full object-contain opacity-40 mix-blend-multiply z-0" />

                <div class="relative z-10">
                    <h1 class="text-center text-2xl font-bold">AI Learning Path Assessment</h1>
                    <br><br>
                    <p class="text-center">
                        Pengen terjun ke dunia IT tapi bingung milih spesialisasi? Sini aku spill jalur
                        yang paling pas buat kamu! Cukup jawab beberapa pertanyaan santai, aku jadi bisa ngebaca potensi
                        dan
                        minatmu ngarahnya ke mana. Data science? UI/UX? Atau yang lain? Setelah itu, auto dapet
                        rekomendasi roadmap belajar yang
                        paling cocok, biar perjalanan karirmu di dunia IT makin mulus!
                    </p>
                    <br>
                    <div class="flex justify-center gap-5">
                        <Button class="bg-[#5476FF] hover:bg-[#5476FF] w-35">
                            Mulai Assesment
                        </Button>
                        <Button class="border bg-transparent text-[#5476FF] hover:bg-transparent border-[#5476FF] w-35">
                            <img src="/icon-left (2).png" alt="">
                            <p>15 Soal</p>
                        </Button>
                    </div>
                    <br>
                </div>
            </div>

            <div class="bg-[#E6EBFF40] w-[480px] p-5 shadow-[0px_4px_4px_rgba(230,235,255,0.25)]">
                <p>
                    Pengen terjun ke dunia IT tapi bingung milih spesialisasi? Sini aku spill jalur yang paling pas buat
                    kamu! Cukup jawab beberapa pertanyaan santai, aku jadi bisa ngebaca potensi dan minatmu ngarahnya ke
                    mana.
                    Data science? UI/UX? Atau yang lain? Setelah itu, auto dapet rekomendasi roadmap belajar yang paling
                    cocok,
                    biar perjalanan karirmu di dunia IT makin mulus!
                </p>
            </div>
        </div>
    </div>
</template>