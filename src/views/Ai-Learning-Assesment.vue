<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch, computed } from 'vue'

const route = useRoute()
const router = useRouter()

const defaultQuestion = '1'
const totalQuestions = 15

const question = computed(() => (route.query.question as string) || defaultQuestion)

const justifyClass = computed(() => {
    if (question.value === '1') return 'justify-end'
    if (question.value === '15') return 'justify-start'
    return 'justify-between'
})

const updateQuestion = (question: string) => {
    router.replace({
        query: { ...route.query, question: question }
    })
}

const handleNext = () => {
    updateQuestion(String(Number(question.value) + 1))
}

const handleBack = () => {
    updateQuestion(String(Number(question.value) - 1))
}

const isNotNumber = (str: string) => {
    return str.trim() === '' || !Number.isFinite(Number(str));
}

onMounted(() => {
    const currentQuestion = route.query.question as string | undefined

    if (!currentQuestion) {
        router.replace({
            query: { ...route.query, question: defaultQuestion }
        })
    }
})

watch(
    () => route.query.question,
    (newQuestion) => {
        if (isNotNumber(String(newQuestion))) {
            router.replace({
                query: { ...route.query, question: defaultQuestion }
            })
        }
    }
)
</script>

<template>
    <div class="flex-1 overflow-auto no-scrollbar w-full flex justify-center items-center">
        <div class="min-h-full flex flex-col justify-center items-center gap-5">
            <h1 class="text-2xl font-bold">AI Learning Path Assessment</h1>
            <Separator class="my-5 border-5 !w-[96px] mx-auto rounded-sm border-[#5476ff]" />
            <div class="flex gap-5 items-center">
                <div v-for="n in totalQuestions" :key="n" @click="updateQuestion(String(n))" :class="{
                    'h-[13px] rounded-md cursor-pointer !w-[64px]': true,
                    'bg-gradient-to-r from-[#ac97ff] to-[#b9a8ff]': question === String(n),
                    'bg-[#d7d7ff]': question !== String(n)
                }" />
                <img src="/Frame 1618869573.png" alt="">
            </div>
            <div
                class="flex flex-col p-5 gap-5 rounded-xl shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] border-[#B0C0FF] border-2 w-full">
                <h2 class="font-semibold text-xl mx-auto" style="max-width: 55ch;">Kamu buka website dan tampilannya
                    berantakan,
                    loading-nya
                    juga lama. Hal pertama yang kamu pikirin apa?</h2>
                <div class="border cursor-pointer bg-[#f5f2ff] p-3 rounded-md">
                    <p>a. Pasti ada yang salah di struktur kodenya.</p>
                </div>
                <div class="border cursor-pointer bg-[#f5f2ff] p-3 rounded-md">
                    <p>b. Mungkin jaringan atau device aku yang lemot.</p>
                </div>
                <div class="border cursor-pointer bg-[#f5f2ff] p-3 rounded-md">
                    <p>c. Pengen tahu berapa banyak orang lain yang ngalamin hal yang sama.</p>
                </div>
                <div class="border cursor-pointer bg-[#f5f2ff] p-3 rounded-md mb-3">
                    <p>d. Desain dan alurnya emang kurang nyaman buat user.</p>
                </div>
            </div>
            <div :class="['w-full flex', justifyClass]">
                <Button @click="handleBack"
                    :class="{ 'bg-[#5476FF] hover:bg-[#5476FF] w-24 justify-center items-center cursor-pointer': true, 'flex': question === '15', 'hidden': question === '1' }">Back</Button>
                <Button @click="handleNext"
                    :class="{ 'bg-[#5476FF] hover:bg-[#5476FF] w-24 justify-center items-center cursor-pointer': true, 'hidden': question === '15', 'flex': question === '1' }">Next</Button>
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
