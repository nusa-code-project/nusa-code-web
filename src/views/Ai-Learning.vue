<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="min-h-full flex justify-center items-center gap-20">
            <div class="relative bg-white w-[480px] p-10 border border-[#E6EBFF]
               shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] rounded-lg">
                <img src="/mingcute_ai-fill.png" alt="background" class="absolute left-1/2 top-1/2 w-[200px] h-[200px]
                  -translate-x-1/2 -translate-y-1/2 object-contain
                  opacity-40 mix-blend-multiply z-0" />
                <div class="relative z-10">
                    <h1 class="text-center text-2xl font-bold mb-5">
                        AI Learning Path Assessment
                    </h1>
                    <p class="text-center mb-5">
                        Pengen terjun ke dunia IT tapi bingung milih spesialisasi? Sini aku
                        spill jalur yang paling pas buat kamu! Cukup jawab beberapa
                        pertanyaan santai, aku jadi bisa ngebaca potensi dan minatmu
                        ngarahnya ke mana. Data science? UI/UX? Atau yang lain? Setelah itu,
                        auto dapet rekomendasi roadmap belajar yang paling cocok, biar
                        perjalanan karirmu di dunia IT makin mulus!
                    </p>
                    <div class="flex justify-center gap-5">
                        <Button class="bg-[#5476FF] hover:bg-[#5476FF] w-35">
                            Mulai Assessment
                        </Button>
                        <Button class="border bg-transparent text-[#5476FF]
                          hover:bg-transparent border-[#5476FF] w-35">
                            <img src="/icon-left (2).png" alt="" />
                            <p>15 Soal</p>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="relative flex w-[600px] h-[390px]">
                <div class="translate-y-[15px] absolute top-0 left-0 w-[300px] p-4
                  border border-[#E6EBFF] bg-white
                  shadow-[0_4px_4px_0_rgba(230,235,255,0.25)]
                  rounded-lg z-20">
                    <p>
                        Berikan jawaban sesuai dengan apa yang kamu anggap terbaik ya!
                    </p>
                </div>

                <img src="/Mascot.png" alt="Mascot" class="absolute inset-0 m-auto w-95
                  translate-y-[65px] translate-x-[30px] z-10" />
            </div>
        </div>

        <div class="absolute bottom-0 left-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 1.png')"></div>

        <div class="absolute bottom-0 right-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 3.png')"></div>
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
