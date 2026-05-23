import { Film } from "../types/film";

const getTopRatedFilms = (films: Film[]) =>
  films.sort((a, b) => b.film_info.total_rating - a.film_info.total_rating);

export default getTopRatedFilms;
