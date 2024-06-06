/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosHttp from "../interceptors/api.interceptor";

const baseApi = {
  getData: async (url: string, params?: any): Promise<any> => {
    try {
      const response = await axiosHttp.get(url, { params });
      return response;
    } catch (error) {
      return error;
    }
  },

  postData: async (url: string, request?: any): Promise<any> => {
    try {
      const response = await axiosHttp.post(url, request);
      return response;
    } catch (error) {
      return error;
    }
  },

  deleteData: async (url: string, request?: any): Promise<any> => {
    try {
      const response = await axiosHttp.delete(url, request);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default baseApi;