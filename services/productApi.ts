import { baseApi } from "./baseApi";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
