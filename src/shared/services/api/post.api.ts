const postApi = {
  baseApi: "https://dummyjson.com/posts",
  getList: async (request?: { [key: string | number]: string }) => {
    let urlParams = '';
    if(request) {
      const params = new URLSearchParams(request);
      urlParams = '?' + params.toString();
    }
    const response = await fetch(postApi.baseApi + urlParams, {
      method: "GET",
    }).then(async (res) => {
      return {
        status: res.status,
        data: await res.json(),
      };
    });
    return response;
  },

};

export default postApi;
