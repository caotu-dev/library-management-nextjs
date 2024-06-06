import { LoginRequest } from "@/modules/auth/types/Auth";

const authApi = {
    login: async (request: LoginRequest) => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        }).then(async (res) => {
            return {
                status: res.status,
                data: await res.json()
            }
        })
        return response;
    },
}

export default authApi;