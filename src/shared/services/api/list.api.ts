import { PEOPLE } from "@/core/constants/api";
import baseApi from "./base.api";
import { CreateListRequest } from "@/modules/list/types/list.model";

const listApi = {
  baseApi: "https://dummyjson.com/todos",
  getList: async (request?: { [key: string]: string }) => {
    let urlParams = '';
    if(request) {
      const params = new URLSearchParams(request);
      urlParams = '?' + params.toString();
    }
    const response = await fetch(listApi.baseApi + urlParams, {
      method: "GET",
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json(),
      };
    });
    return response;
  },

  create: async (request: CreateListRequest) => {
    const response = await fetch(listApi.baseApi + "/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json(),
      };
    });
    return response;
  },

  update: async (id: number, request: any) => {
    const response = await fetch(listApi.baseApi +"/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json(),
      };
    });
    return response;
  },

  delete: async (id: number) => {
    const response = await fetch(listApi.baseApi + "/" + id, {
      method: "DELETE",
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json(),
      };
    });
    return response;
  },
};

export default listApi;
