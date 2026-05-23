import clsx from "clsx";
import { useAppDispatch } from "../../hooks";
import { addIdSelectedFilmId, openFilmDetails } from "../../store/appReducer";
import { Film } from "../../types/film";
import formatMinutesToTime from "../../utils/formatMinutesToTime";
import formatStringToYear from "../../utils/formatStringToYear";
import { useChangeFilmMutation } from "../../services/appApi";

function FilmCard(film: Film) {
  const { id, film_info, comments, user_details } = film;
  const { title, total_rating, release, runtime, genre, poster, description } =
    film_info;
  
  const [changeFilm] = useChangeFilmMutation();

  const formatDescr = (description: string) => {
    if (description.length > 140) {
      return description.slice(0, 139) + "...";
    }
    return description;
  };

  const dispatch = useAppDispatch();

  const handleFilmCardLinkClick = () => {
    dispatch(openFilmDetails());
    dispatch(addIdSelectedFilmId(id));
  };

  const handleAddToWatchlistButtonClick = async () => {
    await changeFilm({id: film.id, body: {
      comments: film.comments,
      film_info: film.film_info,
      user_details: {
        ...film.user_details,
        watchlist: !film.user_details.watchlist
      }
    }});
  };

  const handleMarkAsWatchedButtonClick = async () => {
    await changeFilm({id: film.id, body: {
      comments: film.comments,
      film_info: film.film_info,
      user_details: {
        ...film.user_details,
        already_watched: !film.user_details.already_watched
      },
    }});
  };

  const handleMarkAsFavoriteButtonClick = async () => {
    await changeFilm({id: film.id, body: {
      comments: film.comments,
      film_info: film.film_info,
      user_details: {
        ...film.user_details,
        favorite: !film.user_details.favorite
      }
    }});
  }

  return (
    <article className="film-card">
      <a className="film-card__link" onClick={handleFilmCardLinkClick}>
        <h3 className="film-card__title">{title}</h3>
        <p className="film-card__rating">{total_rating}</p>
        <p className="film-card__info">
          <span className="film-card__year">
            {formatStringToYear(release.date)}
          </span>
          <span className="film-card__duration">
            {formatMinutesToTime(runtime)}
          </span>
          <span className="film-card__genre">{genre[0]}</span>
        </p>
        <img src={poster} alt={title} className="film-card__poster" />
        <p className="film-card__description">
          {formatDescr(description)}
        </p>
        <span className="film-card__comments">{comments.length} comments</span>
      </a>
      <div className="film-card__controls">
        <button
          className={clsx("film-card__controls-item", user_details.watchlist && "film-card__controls-item--active" , "film-card__controls-item--add-to-watchlist")}
          type="button"
          onClick={handleAddToWatchlistButtonClick}
        >
          Add to watchlist
        </button>
        <button
          className={clsx("film-card__controls-item", user_details.already_watched && "film-card__controls-item--active", "film-card__controls-item--mark-as-watched")}
          type="button"
          onClick={handleMarkAsWatchedButtonClick}
        >
          Mark as watched
        </button>
        <button
          className={clsx("film-card__controls-item", user_details.favorite && "film-card__controls-item--active", "film-card__controls-item--favorite")}
          type="button"
          onClick={handleMarkAsFavoriteButtonClick}
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
}

export default FilmCard;
