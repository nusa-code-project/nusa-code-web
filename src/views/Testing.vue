<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="w-full flex flex-col items-center">
        <div class="relative w-full max-w-5xl">
            <!-- Garis Utama -->
            <div class="absolute top-1/2 left-0 w-full h-[3px] bg-blue-200 rounded-full"></div>

            <!-- Titik dan Label -->
            <div v-for="(item, index) in timeline" :key="index"
                class="relative inline-flex flex-col items-center text-center"
                :style="{ left: `${(index / (timeline.length - 1)) * 100}%`, transform: 'translateX(-50%)' }">
                <div class="w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-md mb-2"></div>
                <div class="bg-white border border-blue-200 text-sm px-3 py-1 rounded-lg shadow-sm">
                    {{ item }}
                </div>
            </div>
        </div>
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
