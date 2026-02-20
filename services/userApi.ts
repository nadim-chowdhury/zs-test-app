import { baseApi } from "./baseApi";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: ["User"],
    }),

    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
