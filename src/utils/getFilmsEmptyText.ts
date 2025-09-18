import { Filter } from "../types/filter";

const getFilmsEmptyText = (activeFiter: Filter) => {
  switch (activeFiter) {
    case "watchlist":
      return "There are no movies to watch now";
    case "history":
      return "There are no watched movies now";
    case "favorites":
      return "There are no favorite movies now";
    default:
      return "There are no movies in our database";
  }
};

export default getFilmsEmptyText;
