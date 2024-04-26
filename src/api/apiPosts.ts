import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: (page: number) => `posts?${page && `_page=${page}`}`
    }),
    getPost: builder.query({
      query: (id: number) => `posts/${id}`
    })
  })
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;