import { PEOPLE } from "@/core/constants/api";
import baseApi from "./base.api";
import { CreateListRequest } from "@/modules/list/types/list.model";

const listApi = {
  // Not support any more
  create: async (request: CreateListRequest) => {
    const response = await baseApi.postData(`people/${PEOPLE}/lists`, request);
    console.log(response);
    return response;
  },

  getList: async () => {
    const response = await baseApi.getData(`people/${PEOPLE}/lists.json`);
    console.log(response);
    return response;
  },
};

export default listApi;
