const postApi = {
  baseApi: "https://dummyjson.com/posts",
  getList: async (request?: { [key: string | number]: string }) => {
    let urlParams = '';
    if (request) {
      const params = new URLSearchParams(request);
      urlParams = '?' + params.toString();
    }
    const response = await fetch(postApi.baseApi + urlParams, {
      method: "GET",
    })
    return {
      status: response.status,
      data: await response.json(),
    };;
  },

  getDetails: async (id: number) => {
    const response = await fetch(`${postApi.baseApi}/${id}`, {
      method: "GET",
    })
    return {
      status: response.status,
      data: await response.json(),
    };
  },

  getCommentsById: async (id: number) => {
    const response = await fetch(`${postApi.baseApi}/${id}/comments`, {
      method: "GET",
    })
    return {
      status: response.status,
      data: await response.json(),
    };;
  },

};

export default postApi;
