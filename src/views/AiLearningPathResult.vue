<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import {
    Dialog,
    DialogContent,
    DialogOverlay,
} from '@/components/ui/dialog'
import { roadmapService } from '@/services/roadmap'

const bestRoadmap = ref<Roadmap[]>([])
const loading = ref(false)
const buttonDisable = ref(false)

const open = ref(false)
let timer: number | undefined

onMounted(() => {
    timer = window.setTimeout(() => {
        if (open.value) return
        open.value = true
    }, 5000)
})

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
})

const route = useRoute()

type QueryVal = string | string[] | null | undefined
const asArr = (v: QueryVal): string[] => (v == null ? [] : Array.isArray(v) ? v : [v])

interface Item {
    title: string
    score: string | null
}

interface DecoratedItem extends Item {
    image?: string
}

const items = computed<Item[]>(() => {
    const paths = asArr((route.query['path[]'] ?? route.query.path) as QueryVal)
    const probs = asArr((route.query['prob[]'] ?? route.query.prob) as QueryVal)

    return paths.map((p, i) => ({
        title: p,
        score: probs[i] ?? null,
    }))
})

const toNum = (s: string | null): number => {
    if (!s) return -Infinity
    const n = Number.parseFloat(s.replace('%', ''))
    return Number.isNaN(n) ? -Infinity : n
}

const decorated = computed<DecoratedItem[]>(() => {
    const base = items.value as Item[]
    if (base.length === 0) return []

    const scored = base
        .map((it, idx) => ({ ...it, _n: toNum(it.score), _idx: idx }))
        .sort((a, b) => (b._n - a._n) || (a._idx - b._idx))

    const imageByIdx = new Map<number, string>()

    const first = scored[0]
    if (first !== undefined) {
        imageByIdx.set(first._idx, '/Mascot (1).png')
    }

    if (scored.length >= 3) {
        const midIdx = Math.floor(scored.length / 2)
        const mid = scored[midIdx]
        if (mid !== undefined) {
            imageByIdx.set(mid._idx, '/Mascot (2).png')
        }
    }

    const last = scored[scored.length - 1]
    if (last !== undefined) {
        imageByIdx.set(last._idx, '/Mascot (3).png')
    }

    return base.map((it, idx) => ({
        ...it,
        image: imageByIdx.get(idx)
    }))
})

onMounted(async () => {
    loading.value = true
    const { data } = await roadmapService.getRoadmapCompactApi(decorated.value[0]?.title ?? '')
    bestRoadmap.value = data.data
    loading.value = false
})

const handleClick = async (roadmapName: string) => {
    if (buttonDisable.value) return;

    buttonDisable.value = true;
    open.value = true

    const { data } = await roadmapService.getRoadmapCompactApi(roadmapName)
    bestRoadmap.value = data.data

    buttonDisable.value = false
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogOverlay class="fixed inset-0 bg-white/5 backdrop-blur-sm" />
        <DialogContent class="flex flex-col !max-w-none !w-[50vw] pt-5">
            <div class="flex max-w-[45ch] mx-auto text-center pt-5">
                <p>Assessment-mu sudah selesai! Kami punya roadmap belajar yang paling cocok untuk gaya dan levelmu. Ayo
                    mulai perjalanan belajarmu sekarang!</p>
            </div>
            <div class="flex gap-5">
                <div v-for="r in bestRoadmap" :key="r.title"
                    class="border w-1/2 border-[#8aa1ff] p-2 rounded-md flex flex-col gap-2">
                    <h1 class="text-xl font-bold">{{ r.title }}</h1>
                    <p class="text-sm">{{ r.description }}</p>
                </div>
            </div>
        </DialogContent>
    </Dialog>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="flex flex-col gap-10">
            <h1 class="text-2xl font-bold text-center">
                Berikut adalah 3 rekomendasi jalur belajar yang paling efektif untuk kamu
            </h1>
            <div class="flex flex-row gap-8 justify-center">
                <div @click="handleClick(rec.title)" v-for="(rec, idx) in decorated" :key="idx" class="border border-[#b0c0ff] rounded-xl p-3 w-[400px] flex flex-col items-center
         bg-[linear-gradient(to_bottom,white_0%,white_50%,#f5f2ff_100%)]">
                    <h2 class="text-xl font-semibold text-center">{{ rec.title }}</h2>
                    <Separator class="my-5 border-5 !w-[96px] mx-auto rounded-sm border-[#5476ff]" />
                    <img :src="rec.image" alt="" class="mx-auto block" />
                    <p class="text-center text-[20px] mt-3">Kecocokan hasil dengan profil kamu</p>
                    <h3 class="text-center text-2xl font-semibold mt-3">{{ rec.score }}</h3>
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
