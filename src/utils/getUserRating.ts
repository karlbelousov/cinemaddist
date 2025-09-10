import { UserStatusTitle, UserStatusValue } from "../const";
import { Film } from "../types/film";

function getUserRating(films: Film[]) {
  const watchedFilmCount = films.filter(
    (film) => film.user_details.already_watched
  ).length;

  if (
    watchedFilmCount > UserStatusValue.NOVICE &&
    watchedFilmCount <= UserStatusValue.FAN
  ) {
    return UserStatusTitle.NOVICE;
  }

  if (
    watchedFilmCount > UserStatusValue.FAN &&
    watchedFilmCount <= UserStatusValue.MOVIE_BUFF
  ) {
    return UserStatusTitle.FAN;
  }

  if (watchedFilmCount > UserStatusValue.MOVIE_BUFF) {
    return UserStatusTitle.MOVIE_BUFF;
  }

  return null;
}

export default getUserRating;