import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeFilmDetails } from "../../store/appReducer";
import {
  useChangeFilmMutation,
  useGetCommentsQuery,
  useGetFilmsQuery,
} from "../../services/appApi";
import formatStringToDate from "../../utils/formatStringToDate";
import formatMinutesToTime from "../../utils/formatMinutesToTime";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import clsx from "clsx";

function FilmDetais() {
  const { data: films } = useGetFilmsQuery();
  const selectedFilmId = useAppSelector((state) => state.app.selectedFilmId);
  const film = films?.find((film) => film.id === selectedFilmId);
  const { data: comments, isLoading } = useGetCommentsQuery(film?.id || 1);

  const [changeFilm] = useChangeFilmMutation();

  const dispatch = useAppDispatch();
  const handleFilmDetaisCloseButtonClick = () => {
    dispatch(closeFilmDetails());
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dispatch(closeFilmDetails());
    }
  };

  const handleAddToWatchlistButtonClick = async () => {
    await changeFilm({
      id: film?.id,
      body: {
        comments: film?.comments,
        film_info: film?.film_info,
        user_details: {
          ...film?.user_details,
          watchlist: !film?.user_details.watchlist,
        },
      },
    });
  };

  const handleMarkAsWatchedButtonClick = async () => {
    await changeFilm({
      id: film?.id,
      body: {
        comments: film?.comments,
        film_info: film?.film_info,
        user_details: {
          ...film?.user_details,
          already_watched: !film?.user_details.already_watched,
        },
      },
    });
  };

  const handleMarkAsFavoriteButtonClick = async () => {
    await changeFilm({
      id: film?.id,
      body: {
        comments: film?.comments,
        film_info: film?.film_info,
        user_details: {
          ...film?.user_details,
          favorite: !film?.user_details.favorite,
        },
      },
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyDown);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, []);

  return (
    <section className="film-details">
      <div className="film-details__inner">
        <div className="film-details__top-container">
          <div className="film-details__close">
            <button
              className="film-details__close-btn"
              type="button"
              onClick={handleFilmDetaisCloseButtonClick}
            >
              close
            </button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img
                className="film-details__poster-img"
                src={film?.film_info.poster}
                alt={film?.film_info.title}
              />
              <p className="film-details__age">{film?.film_info.age_rating}+</p>
            </div>
            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title"></h3>
                  <p className="film-details__title-original">
                    {film?.film_info.alternative_title}
                  </p>
                </div>
                <div className="film-details__rating">
                  <p className="film-details__total-rating">
                    {film?.film_info.total_rating}
                  </p>
                </div>
              </div>
              <table className="film-details__table">
                <tbody>
                  <tr className="film-details__row">
                    <td className="film-details__term">Director</td>
                    <td className="film-details__cell">
                      {film?.film_info.director}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Writers</td>
                    <td className="film-details__cell">
                      {film?.film_info.writers.join(", ")}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Actors</td>
                    <td className="film-details__cell">
                      {film?.film_info.actors.join(", ")}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Release Date</td>
                    <td className="film-details__cell">
                      {film && formatStringToDate(film.film_info.release.date)}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Runtime</td>
                    <td className="film-details__cell">
                      {film && formatMinutesToTime(film.film_info.runtime)}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Country</td>
                    <td className="film-details__cell">
                      {film?.film_info.release.release_country}
                    </td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">
                      {film && film.film_info.genre.length > 1
                        ? "Genres"
                        : "Genre"}
                    </td>
                    <td className="film-details__cell">
                      {film &&
                        film.film_info.genre.map((genre) => (
                          <span className="film-details__genre" key={genre}>
                            {genre}
                          </span>
                        ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="film-details__film-description">
                {film?.film_info.description}
              </p>
            </div>
          </div>
          <section className="film-details__controls">
            <button
              type="button"
              className={clsx(
                "film-details__control-button",
                film?.user_details.watchlist &&
                  "film-details__control-button--active",
                "film-details__control-button--watchlist",
              )}
              onClick={handleAddToWatchlistButtonClick}
            >
              Add to watchlist
            </button>
            <button
              type="button"
              className={clsx(
                "film-details__control-button",
                film?.user_details.already_watched &&
                  "film-details__control-button--active",
                "film-details__control-button--watched",
              )}
              onClick={handleMarkAsWatchedButtonClick}
            >
              Already watched
            </button>
            <button
              type="button"
              className={clsx(
                "film-details__control-button",
                film?.user_details.favorite &&
                  "film-details__control-button--active",
                "film-details__control-button--favorite",
              )}
              onClick={handleMarkAsFavoriteButtonClick}
            >
              Add to favorites
            </button>
          </section>
        </div>
        <div className="film-details__bottom-container">
          <section className="film-details__comments-wrap">
            {!isLoading && comments && <CommentsList comments={comments} />}
            <CommentForm />
          </section>
        </div>
      </div>
    </section>
  );
}

export default FilmDetais;
