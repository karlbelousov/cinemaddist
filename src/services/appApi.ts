import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorization, baseUrl } from "../const";
import { Film } from "../types/film";
import { TComment } from "../types/comment";

export const appApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('Authorization', authorization);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getFilms: builder.query<Film[], void>({
          query: () => "/movies"
        }),
        getComments: builder.query<TComment[], number>({
          query: (filmId) => `/comments/${filmId}`
        })
      }),
});

export const { useGetFilmsQuery, useGetCommentsQuery } = appApi;