<template>
    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- Kartu -->
    <!-- KARTU -->
    <!-- CARD -->
    <div class="relative rounded-2xl p-5 pb-24 shadow-sm
         bg-gradient-to-r from-red-600 via-red-500 to-red-400
         border border-red-700
         [--cut:28px] [--gap:12px]
         [-webkit-mask:radial-gradient(var(--cut)_at_calc(100%-var(--gap))_calc(100%-var(--gap)),transparent_98%,#000)]
         [mask:radial-gradient(var(--cut)_at_calc(100%-var(--gap))_calc(100%-var(--gap)),transparent_98%,#000)]">

        <h3 class="text-lg font-semibold">Memimpin Rapat Evaluasi dengan Sikap Terbuka dan Solutif</h3>
        <p class="mt-2 text-sm">Score kamu adalah <span class="font-semibold">75/100</span></p>
        <p class="mt-1 text-sm">Sudah cukup bagus, perlu dilatih lagi. Kamu masih punya 2 kali kesempatan</p>

        <div class="mt-4 flex items-center gap-6 text-sm">
            <span>✏️ 2/3 Kesempatan</span>
            <span>Score: 75/100</span>
        </div>

        <!-- BUTTON PIL DI POJOK KANAN BAWAH -->
        <button class="absolute bottom-3 right-3 rounded-full bg-indigo-600 px-5 py-2
           text-white shadow ring-2 ring-white">
            Ulangi Skenario
        </button>
    </div>






</template>

<script setup lang="ts">
const timeline = [
    "1 - 31 Oktober 2025",
    "1 - 31 Desember 2025",
    "1 - 31 Januari 2026",
    "1 - 28 Februari 2026",
];
</script>

<style scoped>
.relative>div {
    position: absolute;
    top: 50%;
}
</style>
