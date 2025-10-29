import { axiosInstance } from '@/lib/axios';

export const AIService = {
    async AIAssesmentApi(input: AnswerAssesment) {
        const response = await axiosInstance.post('/ai/assesment', input);
        return { response: response, data: response.data };
    },
};