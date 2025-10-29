import { axiosInstance } from '@/lib/axios';

export const roadmapService = {
    async getRoadmapCompactApi(roadmapName: string) {
        const response = await axiosInstance.get(`/roadmap/${roadmapName}/compact`);
        return { response: response, data: response.data };
    },
};