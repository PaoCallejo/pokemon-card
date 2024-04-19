// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types";

// Define a service using a base URL and expected endpoints
const URL = "https://jsonplaceholder.typicode.com/";
export const typicodeApi = createApi({
  reducerPath: "typicodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => `posts`,
    }),
    createPost: builder.mutation<Post, Post>({
      query: (newPost: Post) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
      }),
    }),
    updatePost: builder.mutation<Post, Post>({
      query: (newPost: Post) => ({
        url: `posts/${newPost.id}`,
        method: "PUT",
        body: JSON.stringify(newPost),
      }),
    }),
    deletePost: builder.mutation<Post, number>({
      query: (id: number) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useCreatePostMutation,
} = typicodeApi;
