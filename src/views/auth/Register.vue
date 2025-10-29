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
import { reactive, ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { AxiosError } from 'axios'
import { authService } from '@/services/authService'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { Spinner } from '@/components/ui/spinner'

const inputFormRegister = reactive<RegisterInput>({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    provider: ''
})

const clearForm = () => {
    inputFormRegister.username = ''
    inputFormRegister.email = ''
    inputFormRegister.password = ''
    inputFormRegister.confirm_password = ''
    inputFormRegister.provider = ''
}

const isSubmitting = ref(false)

const router = useRouter()

const goToLogin = () => {
    router.push('/login')
}

const { mutate } = useMutation({
    mutationFn: async (input: RegisterInput) => {
        input.provider = 'auth_internal'
        const { data } = await authService.registerApi(input)
        return data
    },
    onError: async (error) => {
        const err = error as AxiosError<ErrorResponse>;
        toast.error(err.response?.data?.message || 'failed to register')
        isSubmitting.value = false
    },
    onSuccess: async (data) => {
        clearForm()
        isSubmitting.value = false
        toast.success(data.message)
        goToLogin()
    },
})

const onSubmit = () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    mutate({ ...inputFormRegister })
}
</script>

<template>
    <div class="relative h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
        <div class="absolute top-0 left-0 w-[650px] h-[530px] bg-cover z-0"
            style="background-image: url('/Ellipse 2.png')">
        </div>

        <div class="flex justify-around min-h-screen w-full relative z-10">
            <div class="flex flex-col items-center self-center text-2xl">
                <img src="/Frame 1618869416.png" width="550" class="translate-y-[25px]" alt="" />
            </div>

            <Card class="w-150 flex self-center justify-center z-10">
                <CardHeader>
                    <CardTitle class="text-center text-3xl mt-10">Yuk, Daftar Jadi Nusaverse</CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="registerForm" class="w-full gap-5 justify-center" @submit.prevent="onSubmit">
                        <div class="flex flex-row gap-10 mb-5">
                            <div class="flex flex-col w-1/2">
                                <Label for="name" class="mb-2">Name</Label>
                                <Input type="text" id="name" v-model="inputFormRegister.username" class="h-12"
                                    placeholder="e.g Prabowo" required />
                            </div>
                            <div class="flex flex-col w-1/2">
                                <Label for="email" class="mb-2">Email</Label>
                                <Input type="email" id="email" v-model="inputFormRegister.email" class="h-12"
                                    placeholder="e.g prabowo@gmail.com" required />
                            </div>
                        </div>

                        <div class="flex flex-row gap-10">
                            <div class="flex flex-col w-1/2">
                                <Label for="password" class="mb-2">Password</Label>
                                <Input type="password" id="password" v-model="inputFormRegister.password" class="h-12"
                                    placeholder="Enter password" minlength="8" required />
                            </div>
                            <div class="flex flex-col w-1/2">
                                <Label for="confirmPassword" class="mb-2">Confirm Password</Label>
                                <Input type="password" v-model="inputFormRegister.confirm_password" id="confirmPassword"
                                    class="h-12" placeholder="Confirm password" minlength="8" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter class="flex flex-col gap-5 mb-10">
                    <Button class="w-full h-12 bg-[#5476FF] hover:bg-[#5476FF] cursor-pointer" type="submit"
                        form="registerForm">
                        <span v-if="!isSubmitting">Register</span>
                        <div v-else class="flex justify-center items-center gap-2">
                            <Spinner />
                            <span>Loading</span>
                        </div>
                    </Button>
                    <img src="/Frame 1618869405.png" class="w-full" />
                    <div class="flex flex-row justify-between w-full gap-10">
                        <div
                            class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer justify-center">
                            <img src="/flat-color-icons_google.png" />
                            <p class="ml-2">Continue with Google</p>
                        </div>
                        <div
                            class="border flex flex-row items-center h-12 pe-2 ps-2 rounded-md w-1/2 cursor-pointer justify-center">
                            <img src="/skill-icons_linkedin.png" />
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
