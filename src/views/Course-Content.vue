<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch, computed } from 'vue'

const route = useRoute()
const router = useRouter()

const defaultCategory = 'section'
const allowedCategories = ['section', 'project']

const category = computed(() => (route.query.category as string) || defaultCategory)

const updateCategory = (cat: string) => {
    router.replace({
        query: { ...route.query, category: cat }
    })
}

onMounted(() => {
    const currentCategory = route.query.category as string | undefined

    if (!currentCategory || !allowedCategories.includes(currentCategory)) {
        router.replace({
            query: { ...route.query, category: defaultCategory }
        })
    }
})

watch(
    () => route.query.category,
    (newCategory) => {
        if (!allowedCategories.includes(newCategory as string)) {
            router.replace({
                query: { ...route.query, category: defaultCategory }
            })
        }
    }
)

const buy = ref(true);

const skills = [
    "Leadership",
    "Product Management",
    "Change Management",
    "GTM Strategy",
    "Product Roadmap",
];
</script>

<template>
    <div v-if="buy" class="flex min-h-screen">
        <div class="w-1/2 pe-8 ps-8 pb-8 overflow-y-auto max-h-screen hide-scrollbar">
            <img src="/Rectangle 268.png" alt="Roadmap" class="w-full h-auto rounded-lg mb-6">
            <h1 class="text-[35.3px] font-bold mb-4">Building Product Roadmaps With Confidence</h1>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <img src="/Ellipse 18.png" alt="avatar" class="w-10 h-10 rounded-full">
                    <p class="font-semibold">Marcus Aurelius</p>
                    <Button class="bg-[#5476FF] h-7 rounded-xl">Follow</Button>
                </div>
                <div class="flex items-center gap-2">
                    <p class="font-semibold">5.0</p>
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-user.png" class="w-[18px] h-[18px] ms-3" alt="">
                    <p class="font-semibold">595,555 Enrolled</p>
                </div>
            </div>
            <p class="mt-4">Kursus ini akan membimbing kamu memahami bagaimana menyusun roadmap produk yang kuat, jelas,
                dan relevan
                dengan kebutuhan pasar. Kamu akan mempelajari prinsip dasar perencanaan produk, teknik menentukan
                prioritas fitur dengan metode seperti RICE atau MoSCoW, serta cara menghubungkan roadmap dengan visi dan
                strategi bisnis. Selain itu, kursus ini juga membekali kamu dengan keterampilan komunikasi agar roadmap
                yang dibuat dapat dipresentasikan dengan percaya diri kepada stakeholder maupun tim lintas fungsi.</p>
            <p class="mt-4">Melalui kombinasi teori, studi kasus, dan latihan praktis, kamu akan memperoleh pengalaman
                langsung
                merancang roadmap yang tidak hanya realistis tetapi juga mampu menjadi panduan strategis dalam
                mengarahkan pengembangan produk jangka panjang. Pada akhir kursus, kamu akan lebih siap menghadapi
                tantangan product management sekaligus meningkatkan peluang keberhasilan produk di pasar.</p>

            <Card class="w-95 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] mt-5">
                <CardHeader class="ps-2 pe-2">
                    <CardTitle class="text-[18px] font-bold">
                        Kursus Ini Mencakup
                    </CardTitle>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2">
                    <img src="/Frame 1618869427.png" alt="">
                </CardContent>
            </Card>

            <Card class="w-95 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] mt-5 h-45 mb-15">
                <CardHeader class="ps-2 pe-2 mb-0">
                    <CardTitle class="text-[18px] font-bold">
                        Kursus Ini Mencakup
                    </CardTitle>
                </CardHeader>

                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 mt-0">
                    <img src="/Frame 1618869444.png" alt="">
                </CardContent>
            </Card>
        </div>

        <div class="w-1/2 pe-8 ps-8 pb-8 bg-white overflow-y-auto max-h-screen hide-scrollbar">
            <Button @click="updateCategory('section')"
                :class="{ 'w-[119px] text-[20px] h-12 me-3 cursor-pointer': true, 'bg-[#5476FF] hover:bg-[#5476FF]': category === 'section', 'text-[#5476FF] hover:bg-transparent border-[#5476FF] bg-transparent border': category === 'project' }">Section</Button>
            <Button @click="updateCategory('project')"
                :class="{ 'w-[119px] text-[20px] h-12 rounded-lg border-1 ms-3 cursor-pointer': true, 'bg-[#5476FF] hover:bg-[#5476FF]': category === 'project', 'text-[#5476FF] border-[#5476FF] bg-transparent border hover:bg-transparent': category === 'section' }">Project</Button>
            <div v-if="category === 'section'">
                <img src="/Frame 1618869490.png" oncontextmenu="return false;" class="mt-5 w-full" alt="">
                <img src="/Frame 1618869496.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869498.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869499.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869500.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869501.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869502.png" oncontextmenu="return false;" class="mt-5 w-full" alt="">
                <img src="/Frame 1618869503.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869510.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869508.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869509.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869511.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869502.png" oncontextmenu="return false;" class="mt-5 w-full" alt="">
                <img src="/Frame 1618869513.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869514.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869515.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869516.png" oncontextmenu="return false;" class="w-full" alt="">
                <img src="/Frame 1618869517.png" oncontextmenu="return false;" class="w-full mb-15" alt="">
            </div>
            <div v-if="category === 'project'" class="bg-[#f5f2ff] mt-5 p-3 rounded-sm">
                <p>Kamu udah sampai di tahap akhir! Sekarang waktunya kamu implementasiin ilmu yang udah kamu pelajari.
                    Yuk, kerjain dan kumpulin proyek akhirmu!</p>
            </div>
            <div v-if="category === 'project'"
                class="upload-content relative flex flex-col items-center justify-center text-center border-2 border-dashed border-[#595959] rounded-xl w-[70%] mx-auto mt-10 py-20 px-10">
                <img src="/Untitled design (1) 1.png" alt="Folder Icon" class="w-20 h-20 mb-6" />

                <div class="space-y-2">
                    <h2 class="text-2xl font-bold">Drag atau Drop File Untuk Upload</h2>
                    <p class="text-gray-600">
                        Atau
                        <strong class="text-[#335cff] underline cursor-pointer" ref="fileInput">
                            browse
                        </strong>
                        file dari device kamu
                    </p>
                </div>

                <p class="absolute bottom-4 left-4 text-left text-sm text-gray-500">
                    Format PDF, max 100 MB
                </p>
            </div>

            <div v-if="category === 'project'" class="w-[70%] mx-auto mt-5 flex justify-end gap-5">
                <Button class="bg-[#5476FF] w-24 flex justify-center items-center">
                    <p>Submit</p>
                </Button>

                <Button class="bg-[#5476FF] w-24 flex justify-center items-center gap-2">
                    <p>Guidebook</p>
                </Button>
            </div>
        </div>
    </div>

    <div v-if="!buy">
        <section
            class="jumbotron flex justify-start p-10 flex-col bg-gradient-to-b from-[#DAF4FB] to-[#FFFFFF] [background-position:0%_0%,0%_65%]">
            <h1 class="text-2xl font-bold">Building Product Roadmaps With Confidence</h1>
            <div class="flex flex-row justify-between items-center">
                <p>Pelajari cara menyusun roadmap produk yang jelas, terarah, dan meyakinkan untuk tim serta stakeholder
                    eksekutif.</p>
                <Button class="bg-[#5476FF] h-12 rounded-xl">Belajar Sekarang</Button>
            </div>
            <div class="flex flex-row justify-start gap-3 items-center pt-3">
                <Avatar class="w-10 h-10">
                    <AvatarImage src="/Ellipse 28.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p class="font-semibold">Marcus Aurelius</p>
                <div class="flex items-center justify-center ms-5 bg-[#dfd7ff] p-1 rounded-xl">
                    <img src="/fi-br-money.png" alt="" class="ms-1">
                    <p class="ms-2 font-semibold me-1">Rp 399.999</p>
                </div>
                <div class="flex flex-row gap-2 items-center ms-5">
                    <p class="font-semibold">5.0</p>
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                    <img src="/fi-sr-user.png" class="w-5 h-5 ms-5" alt="">
                    <p class="font-semibold">595,555 Enrolled</p>
                </div>
            </div>
        </section>

        <div class="flex gap-6 p-6">
            <div class="w-1/2">
                <img src="/Rectangle 268 (1).png" alt="Deskripsi Kursus" class="rounded-lg w-full h-auto" />
                <h2 class="text-lg font-bold mt-4">Deskripsi Kursus</h2>
                <p class="mt-2 text-sm text-gray-600">
                    Kursus ini akan membimbing kamu memahami bagaimana menyusun roadmap produk yang kuat, jelas, dan
                    relevan dengan kebutuhan pasar. Kamu akan mempelajari prinsip dasar perencanaan produk, teknik
                    menentukan prioritas fitur dengan metode seperti RICE atau MoSCoW, serta cara menghubungkan roadmap
                    dengan visi dan strategi bisnis. Selain itu, kursus ini juga membekali kamu dengan keterampilan
                    komunikasi agar roadmap yang dibuat dapat dipresentasikan dengan percaya diri kepada stakeholder
                    maupun tim lintas fungsi.

                    Melalui kombinasi teori, studi kasus, dan latihan praktis, kamu akan memperoleh pengalaman langsung
                    merancang roadmap yang tidak hanya realistis tetapi juga mampu menjadi panduan strategis dalam
                    mengarahkan pengembangan produk jangka panjang. Pada akhir kursus, kamu akan lebih siap menghadapi
                    tantangan product management sekaligus meningkatkan peluang keberhasilan produk di pasar.
                </p>
            </div>

            <div class="w-1/2 space-y-4">
                <div class="p-4 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] rounded-lg">
                    <h3 class="font-bold text-3xl mb-5">Kursus Ini Mencakup</h3>
                    <img src="/Frame 1618869427.png" alt="">
                </div>

                <div class="p-4 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] rounded-lg">
                    <h3 class="font-bold text-3xl mb-5">Skill Yang Kamu Dapat</h3>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span v-for="(tag, index) in skills" :key="index"
                            class="bg-[#dfd7ff] text-black px-2 py-1 rounded-md">
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <div
                    class="p-4 border border-[#e6ebff] shadow-[0_4px_4px_0_rgba(230,235,255,0.25)] rounded-lg gap-4 flex flex-col">
                    <div class="flex flex-row justify-between items-center">
                        <h3 class="font-bold text-3xl">Profile Mentor</h3>
                        <Button class="bg-[#5476FF] h-7 rounded-xl">Lihat Profil</Button>
                    </div>
                    <div class="flex flex-row gap-5">
                        <img src="/Ellipse 28.png" class="w-15 h-15" alt=""></img>
                        <div class="flex flex-col">
                            <p>Marcus Aurelius</p>
                            <div class="flex flex-row gap-2 items-center mt-2">
                                <p class="font-semibold">5.0</p>
                                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                                <img src="/fi-sr-star.png" class="w-[14px] h-[14px]" alt="">
                            </div>
                        </div>
                    </div>
                    <p>Hartono Susanto adalah Product Manager berpengalaman di Gojek, Tokopedia, dan Traveloka, dengan
                        keahlian dalam product strategy, roadmap planning, serta Agile. Ia juga aktif membimbing talenta
                        muda melalui program mentoring di RevoU.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>