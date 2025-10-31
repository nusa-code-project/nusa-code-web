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
import { Checkbox } from "@/components/ui/checkbox"
import { reactive, ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { AxiosError } from 'axios'
import { authService } from '@/services/auth'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { useCookies } from '@/composables/useCookies'
import { Spinner } from '@/components/ui/spinner'

const cookies = useCookies()

const inputLogin = reactive<LoginInput>({
    email: '',
    password: '',
    provider: ''
})

const clearForm = () => {
    inputLogin.email = ''
    inputLogin.password = ''
    inputLogin.provider = ''
}

const isSubmitting = ref(false)

const router = useRouter()

const goToHome = () => {
    router.push('/')
}

const { mutate } = useMutation({
    mutationFn: async (input: LoginInput) => {
        input.provider = 'auth_internal'
        const { data } = await authService.loginApi(input)
        return data
    },
    onError: async (error) => {
        const err = error as AxiosError<ErrorResponse>;
        toast.error(err.response?.data?.message || 'failed to login')
        isSubmitting.value = false
    },
    onSuccess: async (data) => {
        console.log(data)
        clearForm()
        isSubmitting.value = false
        toast.success(data.message)
        goToHome()
        cookies.set('accessToken', data.token.access_token)
    },
})

const onSubmit = () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    mutate({ ...inputLogin })
}
</script>

<template>
    <div class="relative h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
        <div class="absolute top-0 left-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 2.png')">
        </div>

        <div class="flex justify-around min-h-screen w-full relative z-10">
            <div class="flex flex-col items-center self-center text-2xl">
                <img src="/Frame 1618869422.png" width="550" class="translate-y-[25px]" alt="" />
            </div>

            <Card class="w-150 flex self-center justify-center z-10">
                <CardHeader>
                    <CardTitle class="text-center text-[30px] !font-bold mt-10">Selamat Datang Kembali, </CardTitle>
                    <CardTitle class="text-center text-[30px] !font-bold">Yuk Lanjut Belajar!</CardTitle>
                </CardHeader>

                <CardContent>
                    <form id="loginForm" class="w-full gap-5 justify-center" @submit.prevent="onSubmit">
                        <div class="flex flex-col w-full mb-2">
                            <Label for="email" class="mb-2">Email</Label>
                            <Input type="text" v-model="inputLogin.email" id="email" class="h-12"
                                placeholder="e.g prabowo@gmail.com" />
                        </div>

                        <div class="flex flex-col w-full">
                            <Label for="password" class="mb-2">Password</Label>
                            <Input type="password" v-model="inputLogin.password" id="password" class="h-12"
                                placeholder="Enter password" />
                        </div>
                    </form>

                    <div class="flex items-center space-x-2 mt-5">
                        <Checkbox id="terms" class="bg-[#DFD7FF]" />
                        <label for="terms"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Remember me
                        </label>
                    </div>
                </CardContent>

                <CardFooter class="flex flex-col gap-5 mb-10">
                    <Button class="w-full h-12 bg-[#5476FF] hover:bg-[#5476FF] cursor-pointer" type="submit"
                        form="loginForm">
                        <span v-if="!isSubmitting">Login</span>
                        <div v-else class="flex justify-center items-center gap-2">
                            <Spinner />
                            <span>Loading</span>
                        </div>
                    </Button>

                    <img src="/Frame 1618869405.png" class="w-full" alt="Divider" />

                    <div class="flex flex-row justify-between w-full gap-5">
                        <div
                            class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer justify-center">
                            <img src="/flat-color-icons_google.png" alt="Google" />
                            <p class="ml-2">Continue with Google</p>
                        </div>

                        <div
                            class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer justify-center">
                            <img src="/skill-icons_linkedin.png" alt="LinkedIn" />
                            <p class="ml-2">Continue with Linked In</p>
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
