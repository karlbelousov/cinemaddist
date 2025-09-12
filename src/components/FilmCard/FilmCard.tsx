import { useAppDispatch } from "../../hooks";
import { addIdSelectedFilmId, openFilmDetails } from "../../store/appReducer";
import { Film } from "../../types/film";
import formatMinutesToTime from "../../utils/formatMinutesToTime";
import formatStringToYear from "../../utils/formatStringToYear";

function FilmCard(film: Film) {
  const {id, film_info, comments } = film;
  const { title, total_rating, release, runtime, genre, poster, description } =
    film_info;

  const getDescriptionFormatted = (description: string) => {
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
          {getDescriptionFormatted(description)}
        </p>
        <span className="film-card__comments">{comments.length} comments</span>
      </a>
      <div className="film-card__controls">
        <button
          className="film-card__controls-item film-card__controls-item--add-to-watchlist"
          type="button"
        >
          Add to watchlist
        </button>
        <button
          className="film-card__controls-item film-card__controls-item--mark-as-watched"
          type="button"
        >
          Mark as watched
        </button>
        <button
          className="film-card__controls-item film-card__controls-item--favorite"
          type="button"
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
}

export default FilmCard;
