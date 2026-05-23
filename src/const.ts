import dayjs from "dayjs";
import { Emotion } from "./types/comment";
import { Film } from "./types/film";
import { Filter } from "./types/filter";

export const baseUrl = "https://17.ecmascript.htmlacademy.pro/cinemaddict/";
export const authorization = "Basic vuciyvuuobib0ii";

export const UserStatusValue = {
  NOVICE: 0,
  FAN: 10,
  MOVIE_BUFF: 20,
};

export const UserStatusTitle = {
  NOVICE: "Novice",
  FAN: "Fan",
  MOVIE_BUFF: "Movie Buff",
};

export enum Sorting {
  Default = "default",
  Rating = "rating",
  Date = "date",
  Comment = "comment",
}

export type SortName = keyof typeof Sorting;

export const Comparator: {
  [key in SortName]: (a: Film, b: Film) => number;
} = {
  Default: () => 0,
  Rating: (a, b) => b.film_info.total_rating - a.film_info.total_rating,
  Comment: (a, b) => b.comments.length - a.comments.length,
  Date: (a, b) =>
    dayjs(b.film_info.release.date).diff(a.film_info.release.date),
};

export const filters: Filter[] = ["all", "watchlist", "history", "favorites"];
export const emotions: Emotion[] = ["smile", "sleeping", "puke", "angry"];
