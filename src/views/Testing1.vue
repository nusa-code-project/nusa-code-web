<script setup lang="ts">
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
</script>

<template>
    <br>
    <br>
    <br>
    <ScrollArea class="w-full h-48 rounded-md border">
        <div class="flex gap-4 p-4 snap-x snap-mandatory">
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 1</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 2</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 3</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
            <div class="min-w-[240px] snap-start rounded-lg border p-4">Card 4</div>
        </div>

        <ScrollBar orientation="horizontal" />
    </ScrollArea>
</template>