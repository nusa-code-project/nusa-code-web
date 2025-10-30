<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
    Dialog,
    DialogContent,
    DialogOverlay,
} from '@/components/ui/dialog'
import { roadmapService } from '@/services/roadmap'
import { axiosInstance } from '@/lib/axios'
import { useQuery } from '@tanstack/vue-query'
import { useCookies } from '@/composables/useCookies'

const cookies = useCookies()

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

const minatResult = ref<Item[]>([])

const { data, isSuccess } = useQuery({
    queryKey: ['userMe'],
    queryFn: async () => {
        const accessToken = cookies.get('accessToken')
        const res = await axiosInstance.get('/user/@me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        return res.data
    },
    enabled: !!cookies.get('accessToken'),
})

watch([isSuccess, data], async () => {
    if (!isSuccess.value || !data.value?.minat?.length) return

    minatResult.value = data.value.minat

    loading.value = true
    try {
        const path = minatResult.value[0]?.path ?? ""
        const resp = await roadmapService.getRoadmapCompactApi(path)

        bestRoadmap.value = resp.data?.data ?? []
    } finally {
        loading.value = false
    }
}, { immediate: true })


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
                <div @click="handleClick(rec.path)" v-for="(rec, idx) in minatResult" :key="idx" class="cursor-pointer border border-[#b0c0ff] rounded-xl p-3 w-[400px] flex flex-col items-center
         bg-[linear-gradient(to_bottom,white_0%,white_50%,#f5f2ff_100%)]">
                    <h2 class="text-xl font-semibold text-center">{{ rec.path }}</h2>
                    <Separator class="my-5 border-5 !w-[96px] mx-auto rounded-sm border-[#5476ff]" />
                    <img :src="rec.image" alt="" class="mx-auto block" />
                    <p class="text-center text-[20px] mt-3">Kecocokan hasil dengan profil kamu</p>
                    <h3 class="text-center text-2xl font-semibold mt-3">{{ rec.prob }}</h3>
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
