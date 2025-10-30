import { axiosInstance } from '@/lib/axios';

export const userService = {
    async userMeApi(accessToken: string) {
        const response = await axiosInstance.get('/user/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return { response: response, data: response.data };
    },
};