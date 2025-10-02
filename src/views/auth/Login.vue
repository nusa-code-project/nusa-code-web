<script setup lang="ts">
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="relative h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
        <div class="absolute top-0 left-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 2.png')">
        </div>

        <div class="flex justify-around w-full relative z-10">
            <div class="flex flex-col items-center text-2xl mt-10">
                <h1 class="bg-gradient-to-br from-[#0033FF] to-[#977DFF] bg-clip-text text-transparent font-bold">
                    Wujudkan Mimpi Menjadi The Next Tech
                </h1>
                <h1 class="mb-3 bg-gradient-to-br from-[#0033FF] to-[#977DFF] bg-clip-text text-transparent font-bold">
                    Leader Bersama NusaCode!</h1>
                <img src="/Frame 1618869420.png" class="mb-10" width="500" height="600" alt="" />
            </div>

            <Card class="w-150 flex justify-center z-10">
                <CardHeader>
                    <CardTitle class="text-center text-xl mt-10">Selamat Datang Kembali, </CardTitle>
                    <CardTitle class="text-center text-xl">Yuk Lanjut Belajar!</CardTitle>
                </CardHeader>
                <CardContent>
                    <form class="w-full gap-5 justify-center">
                        <div class="flex flex-row gap-10 mb-5">
                            <div class="flex flex-col w-1/2">
                                <Label for="name" class="mb-2">Name</Label>
                                <Input type="text" id="name" class="h-12" placeholder="e.g Prabowo" />
                            </div>
                            <div class="flex flex-col w-1/2">
                                <Label for="email" class="mb-2">Email</Label>
                                <Input type="email" id="email" class="h-12" placeholder="e.g prabowo@gmail.com" />
                            </div>
                        </div>

                        <div class="flex flex-row gap-10">
                            <div class="flex flex-col w-1/2">
                                <Label for="password" class="mb-2">Password</Label>
                                <Input type="password" id="password" class="h-12" placeholder="Enter password" />
                            </div>
                            <div class="flex flex-col w-1/2">
                                <Label for="confirmPassword" class="mb-2">Confirm Password</Label>
                                <Input type="password" id="confirmPassword" class="h-12"
                                    placeholder="Confirm password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter class="flex flex-col gap-5 mb-10">
                    <Button class="w-full h-12 bg-[#5476FF]">Register</Button>
                    <img src="/Frame 1618869405.png" class="w-full">
                    <div class="flex flex-row justify-between w-full gap-10">
                        <div class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer">
                            <img src="/flat-color-icons_google.png">
                            <p class="ml-2">Continue with Google</p>
                        </div>
                        <div class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer">
                            <img src="/flat-color-icons_google.png">
                            <p class="ml-2">Continue with Google</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>

        <div class="absolute bottom-0 left-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 1.png')"></div>

        <div class="absolute bottom-0 right-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 3.png')"></div>
    </div>
</template>
