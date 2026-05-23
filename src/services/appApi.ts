import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorization, baseUrl } from "../const";
import { Film } from "../types/film";
import { TComment } from "../types/comment";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", authorization);
      return headers;
    },
  }),
  tagTypes: ["Films", "Comments"],
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], void>({
      query: () => "/movies",
      providesTags: ["Films"],
    }),
    getComments: builder.query<TComment[], Film["id"]>({
      query: (filmId) => `/comments/${filmId}`,
      providesTags: ["Comments"],
    }),
    changeFilm: builder.mutation({
      query: ({ id, body }) => ({
        url: `movies/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Films"],
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `comments/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Films", "Comments"],
    }),
    addComment: builder.mutation({
      query: ({ filmId, comment }) => ({
        url: `comments/${filmId}`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Films", "Comments"]
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetCommentsQuery,
  useChangeFilmMutation,
  useDeleteCommentMutation,
  useAddCommentMutation
} = appApi;
