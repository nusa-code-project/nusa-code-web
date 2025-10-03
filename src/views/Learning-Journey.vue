<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
</script>

<template>
    <section class="mentor-pilihan ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Mentor Pilihan Kamu</h1>
            <p class="text-[#5476FF]">Lihat Semua</p>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card class="w-50 p-0 border-none shadow-none">
                <CardHeader class="ps-2 pe-2">
                    <img src="/Ellipse 21.png" class="h-20 w-20 mx-auto" alt="">
                </CardHeader>
                <CardFooter class="ps-2 pe-2 flex flex-col gap-1 justify-center items-center text-center">
                    <h1 class="text-[15px] font-bold text-center">Sonny Philo</h1>
                    IT Project Manager @ Pertamina Oil & Gas
                </CardFooter>
            </Card>

            <Card class="w-50 p-0 border-none shadow-none">
                <CardHeader class="ps-2 pe-2">
                    <img src="/Ellipse 21.png" class="h-20 w-20 mx-auto" alt="">
                </CardHeader>
                <CardFooter class="ps-2 pe-2 flex flex-col gap-1 justify-center items-center text-center">
                    <h1 class="text-[15px] font-bold text-center">Sonny Philo</h1>
                    IT Project Manager @ Pertamina Oil & Gas
                </CardFooter>
            </Card>

            <Card class="w-50 p-0 border-none shadow-none">
                <CardHeader class="ps-2 pe-2">
                    <img src="/Ellipse 21.png" class="h-20 w-20 mx-auto" alt="">
                </CardHeader>
                <CardFooter class="ps-2 pe-2 flex flex-col gap-1 justify-center items-center text-center">
                    <h1 class="text-[15px] font-bold text-center">Sonny Philo</h1>
                    IT Project Manager @ Pertamina Oil & Gas
                </CardFooter>
            </Card>

            <Card class="w-50 p-0 border-none shadow-none">
                <CardHeader class="ps-2 pe-2">
                    <img src="/Ellipse 21.png" class="h-20 w-20 mx-auto" alt="">
                </CardHeader>
                <CardFooter class="ps-2 pe-2 flex flex-col gap-1 justify-center items-center text-center">
                    <h1 class="text-[15px] font-bold text-center">Sonny Philo</h1>
                    IT Project Manager @ Pertamina Oil & Gas
                </CardFooter>
            </Card>
        </div>
    </section>
    <section class="recomendation ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Pilih Roadmap Belajarmu Selanjutnya</h1>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card class="relative w-80 border border-[#e6ebff] rounded-lg p-5 overflow-hidden">
                <CardHeader class="ps-2 pe-2">
                    <div class="flex flex-row items-center justify-between gap-2">
                        <h2 class="font-bold">Product Manager</h2>
                        <p class="bg-[#DFD7FF] p-1 rounded-lg">Sudah Dimulai</p>
                    </div>
                </CardHeader>
                <CardContent class="ps-2 pe-2">
                    <p>
                        Peta jalan ini menguraikan jalur pembelajaran menjadi seorang Product Manager, mulai dari tahap
                        awal hingga posisi kepemimpinan
                    </p>
                </CardContent>
                <CardFooter class="flex flex-col w-full">
                    <div class="flex flex-row items-center gap-5">
                        <p>80%</p>
                        <Progress :model-value="80"
                            class="h-[15px] [&>div]:bg-green-600 border-black border bg-white w-40" />
                    </div>
                    <Button class="bg-[#5476ff] w-40 mt-5">Lanjutkan</Button>
                </CardFooter>

                <img src="/Vector.png" alt="icon"
                    class="absolute bottom-2 right-2 w-35 h-40 opacity-80 translate-y-[-20px] translate-x-[-10px]" />
            </Card>
            <Card class="relative w-80 border border-[#e6ebff] rounded-lg p-5 overflow-hidden">
                <CardHeader class="ps-2 pe-2">
                    <div class="flex flex-row items-center justify-between gap-2">
                        <h2 class="font-bold">Data Analyst</h2>
                        <p class="bg-[#DFD7FF] p-1 rounded-lg">Belum Dimulai</p>
                    </div>
                </CardHeader>
                <CardContent class="ps-2 pe-2">
                    <p>
                        Roadmap pembelajaran terstruktur untuk membangun kompetensi inti menjadi seorang Data Analyst
                        professional
                    </p>
                </CardContent>
                <CardFooter class="flex flex-col w-full">
                    <img src="/Frame 1618869371.png" class="w-50" alt="">
                    <Button class="bg-[#5476ff] w-40 mt-5">Mulai Belajar</Button>
                </CardFooter>

                <img src="/Vector (1).png" alt="icon"
                    class="absolute bottom-2 right-2 w-40 h-40 opacity-80 translate-y-[-20px] translate-x-[-10px]" />
            </Card>
            <Card class="relative w-80 border border-[#e6ebff] rounded-lg p-5 overflow-hidden">
                <CardHeader class="ps-2 pe-2">
                    <div class="flex flex-row items-center justify-between gap-2">
                        <h2 class="font-bold">Product Design</h2>
                        <p class="bg-[#DFD7FF] p-1 rounded-lg">Belum Dimulai</p>
                    </div>
                </CardHeader>
                <CardContent class="ps-2 pe-2">
                    <p>
                        Kuasai seluruh proses Product Design secara fundamental, mulai dari riset pengguna, desain
                        UI/UX, prototyping, hingga usability testing
                    </p>
                </CardContent>
                <CardFooter class="flex flex-col w-full">
                    <img src="/Frame 1618869371.png" class="w-50" alt="">
                    <Button class="bg-[#5476ff] w-40 mt-5">Mulai Belajar</Button>
                </CardFooter>

                <img src="/Vector (2).png" alt="icon"
                    class="absolute bottom-2 right-2 w-40 h-40 opacity-80 translate-y-[-20px] translate-x-[-10px]" />
            </Card>
        </div>
    </section>
    <section class="recomendation ps-9.5 pt-15">
        <div class="flex flex-row items-center pb-3 gap-2">
            <h1 class="text-2xl font-bold">Kursus Yang Sudah Kamu Miliki</h1>
            <p class="text-[#5476FF]">Filter By</p>
        </div>
        <div class="flex flex-row items-center gap-5">
            <Card class="w-80">
                <CardHeader class="ps-2 pe-2 flex flex-col">
                    <img src="/Rectangle 39.png" class="w-full" alt="">
                    <CardTitle class="text-[18px]">Building Product Roadmaps With Confidence</CardTitle>
                    <CardDescription class="pe-2 text-[12px]">Pelajari cara menyusun roadmap produk yang jelas, terarah,
                        dan
                        meyakinkan
                        untuk tim...
                    </CardDescription>
                </CardHeader>
                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 pt-3 pb-3">
                    <img src="/Ellipse 20.png" width="30" alt="avatar">
                    <p class="text-[15px]">Marcus Aurelius</p>
                </CardContent>
                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">5.0</h2>
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-md text-[12px] w-20 text-center">Lanjutkan</p>
                </CardFooter>
            </Card>
            <Card class="w-80">
                <CardHeader class="ps-2 pe-2 flex flex-col">
                    <img src="/Rectangle 39.png" class="w-full" alt="">
                    <CardTitle class="text-[18px]">Building Product Roadmaps With Confidence</CardTitle>
                    <CardDescription class="pe-2 text-[12px]">Pelajari cara menyusun roadmap produk yang jelas, terarah,
                        dan
                        meyakinkan
                        untuk tim...
                    </CardDescription>
                </CardHeader>
                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 pt-3 pb-3">
                    <img src="/Ellipse 20.png" width="30" alt="avatar">
                    <p class="text-[15px]">Marcus Aurelius</p>
                </CardContent>
                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">5.0</h2>
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-md text-[12px] w-20 text-center">Mulai</p>
                </CardFooter>
            </Card>
            <Card class="w-80">
                <CardHeader class="ps-2 pe-2 flex flex-col">
                    <img src="/Rectangle 39.png" class="w-full" alt="">
                    <CardTitle class="text-[18px]">Building Product Roadmaps With Confidence</CardTitle>
                    <CardDescription class="pe-2 text-[12px]">Pelajari cara menyusun roadmap produk yang jelas, terarah,
                        dan
                        meyakinkan
                        untuk tim...
                    </CardDescription>
                </CardHeader>
                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 pt-3 pb-3">
                    <img src="/Ellipse 20.png" width="30" alt="avatar">
                    <p class="text-[15px]">Marcus Aurelius</p>
                </CardContent>
                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">5.0</h2>
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-md text-[12px] w-20 text-center">Mulai</p>
                </CardFooter>
            </Card>
            <Card class="w-80">
                <CardHeader class="ps-2 pe-2 flex flex-col">
                    <img src="/Rectangle 39.png" class="w-full" alt="">
                    <CardTitle class="text-[18px]">Building Product Roadmaps With Confidence</CardTitle>
                    <CardDescription class="pe-2 text-[12px]">Pelajari cara menyusun roadmap produk yang jelas, terarah,
                        dan
                        meyakinkan
                        untuk tim...
                    </CardDescription>
                </CardHeader>
                <CardContent class="ps-2 pe-2 flex flex-row items-center gap-2 pt-3 pb-3">
                    <img src="/Ellipse 20.png" width="30" alt="avatar">
                    <p class="text-[15px]">Marcus Aurelius</p>
                </CardContent>
                <CardFooter class="ps-2 pe-2 flex flex-row justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <h2 class="text-[18px] font-bold">5.0</h2>
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                        <img src="/fi-sr-star.png" class="w-[18px] h-[18px]" alt="">
                    </div>
                    <p class="font-bold bg-[#DFD7FF] p-2 rounded-md text-[12px] w-20 text-center">Mulai</p>
                </CardFooter>
            </Card>
        </div>
    </section>
    <br>
    <br>
</template>
