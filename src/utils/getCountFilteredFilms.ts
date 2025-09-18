import { Film } from "../types/film";
import { Filter } from "../types/filter";

const getCountFilteredFilms = (films: Film[], filter: Filter) => {
  switch (filter) {
    case "watchlist":
      return films.filter((film) => film.user_details.watchlist).length;
    case "history":
      return films.filter((film) => film.user_details.already_watched).length;
    case "favorites":
      return films.filter((film) => film.user_details.favorite).length;
  }
};
export default getCountFilteredFilms;
