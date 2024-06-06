/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/core/constants/api";
import axios from "axios";


const axiosHttp = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: false,
});
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axiosHttp.interceptors.request.use(
    (config: any) => {
        const token = null;

        return {
            ...config,
            headers: {
                ...(token !== null && { Authorization: `Bearer ${token}` }),
                ...config.headers,
            },
        };
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosHttp.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error?.response?.status === 401) {
            // Handle expired token
        }

        if (error?.response?.status) {
            const errCode = error?.response?.data?.error_code;
            const msg = error?.response?.data?.msg;
            if (errCode) {
                const formErr = {
                    msg: msg,
                    code: errCode,
                };
                console.log(formErr);

            }
        }

        return Promise.reject(error);
    },
);

export default axiosHttp;