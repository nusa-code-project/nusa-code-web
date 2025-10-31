<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="flex flex-col w-full gap-20">
            <h1 class="text-center">AI Role Play</h1>
            <Textarea class="w-[80%] mx-auto" placeholder="Ketik Respon Kamu..." />
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
