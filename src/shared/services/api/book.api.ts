import { SubjectRequest } from "@/core/types/Subject";
import baseApi from "./base.api";
import { COVER_URL } from "@/core/constants/api";
import { SearchBookRequest } from "@/core/types/Book";

const bookApi = {
  getBySubjects: async (subject: string, request?: SubjectRequest) => {
    const response = await baseApi.getData(`subjects/${subject}.json`, request);

    if (!response?.works) return [];

    const data = response?.works.map((data: any) => {
      return {
        ...data,
        olid: data.lending_edition,
        author: data.authors[0]?.name,
        thumbnail: `${COVER_URL}b/olid/${data.lending_edition}-M.jpg`,
        rating: 5,
      };
    });

    return {
      data: data,
      total: response.work_count,
    };
  },

  search: async (request: SearchBookRequest) => {
    const response = await baseApi.getData(`search.json`, request);
    if (!response?.docs) return [];
    const data = response?.docs.map((data: any) => {
      return {
        ...data,
        olid: data.cover_edition_key,
        author: data.author_name?.length ? data.author_name[0] : "",
        thumbnail: `${COVER_URL}b/olid/${data.cover_edition_key}-M.jpg`,
        rating: 5,
      };
    });

    return {
      data: data,
      total: response.num_found,
    };
  },

  getById: async (olid: string) => {
    const response = await baseApi.getData(`books/${olid}`);
    return {
      ...response,
      thumbnail_small: `${COVER_URL}b/olid/${olid}-S.jpg`,
      thumbnail_medium: `${COVER_URL}b/olid/${olid}-M.jpg`,
      thumbnail_large: `${COVER_URL}b/olid/${olid}-L.jpg`,
      publisher: response?.publishers?.length ? response?.publishers[0] : 'Unknown'
    };
  },

  getAuthor: async (authorId: string) => {
    const response = await baseApi.getData(`authors/${authorId}`);
    return response;
  },

  getAuthorWorks: async (authorId: string) => {
    const response = await baseApi.getData(`authors/${authorId}/works`);
    return response;
  },

};

export default bookApi;
