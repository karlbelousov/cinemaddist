import { filters } from "../const";
import { Film } from "../types/film";
import { Filter } from "../types/filter";

const getFilteredFilms = (films: Film[], activeFilter: Filter) => {
  return films.filter((film) => {
    switch (activeFilter) {
      case filters[1]:
        return film.user_details.watchlist;
      case filters[2]:
        return film.user_details.already_watched;
      case filters[3]:
        return film.user_details.favorite;
      default:
        return true;
    }
  });
};

export default getFilteredFilms;