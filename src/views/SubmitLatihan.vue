<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="h-screen relative">
        <h1 class="text-center text-3xl font-bold mt-20">Yuk, Kumpulin Latihan Kamu!</h1>
        <Separator class="my-5 border-5 mx-auto !w-[96px] rounded-sm border-[#5476ff]" />
        <p class="text-center">
            Tugas kamu upload di sini ya! inget, nama filenya harus mengikuti format ini
            <span class="font-bold">NamaKamu_Latihan (No Latihan).</span>
            Jangan sampai salah ya!
        </p>

        <div class="upload-content relative text-center border border-dashed pt-30 pb-40 ps-80 pe-80 rounded-xl border-[#595959] mt-10 w-[70%] mx-auto"
            style="border-width: 2px; border-color: #595959; border-style: dashed; border-radius: 1rem; border-spacing: 10rem;">
            <img src="/Untitled design (1) 1.png" alt="Folder Icon" class="folder-icon mx-auto" />
            <h2 class="text-2xl font-bold">Drag atau Drop File Untuk Upload</h2>
            <p>
                Atau <strong class="text-[#335cff] underline" ref="fileInput">browse</strong>
                file dari device kamu
            </p>

            <p class="absolute bottom-4 left-4 text-left text-sm text-gray-500">
                Format PDF, max 100 MB
            </p>
        </div>

        <div class="flex justify-between mt-5 w-[70%] mx-auto">
            <Button class="bg-[#5476FF] w-24 flex justify-center items-center gap-2">
                <img src="/icon-left (1).png" alt="" class="w-6 h-6">
                <p>Back</p>
            </Button>

            <Button class="bg-[#5476FF] w-24 flex justify-center items-center">
                <p>Next</p>
            </Button>
        </div>

        <div class="absolute bottom-0 left-0 w-[650px] h-[200px] bg-cover z-0"
            style="background-image: url('/Ellipse 1 (1).png')"></div>

        <div class="absolute bottom-0 right-0 w-[650px] h-[200px] bg-cover z-0"
            style="background-image: url('/Ellipse 2 (2).png')"></div>
    </div>
</template>

<style scoped>
html,
body {
    overflow: hidden;
}

::-webkit-scrollbar {
    display: none;
}

.drop-zone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}

.drag-over {
    border-color: #333;
}
</style>