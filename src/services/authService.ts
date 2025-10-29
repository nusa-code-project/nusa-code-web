import { axiosInstance } from '@/lib/axios';

export const authService = {
    async registerApi(input: RegisterInput) {
        const response = await axiosInstance.post('/auth/register', input);
        return { response: response, data: response.data };
    },
};