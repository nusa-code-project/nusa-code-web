import { axiosInstance } from '@/lib/axios';

export const AIService = {
    async AIAssesmentApi(input: AnswerAssesment, accessToken: string) {
        const response = await axiosInstance.post('/ai/assesment', input, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return { response: response, data: response.data };
    },
};