import { baseApi } from "./baseApi";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
