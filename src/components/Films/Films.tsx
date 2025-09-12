import { FilterType } from "../../const";
import { useAppSelector } from "../../hooks";
import { Film } from "../../types/film";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";
import Sort from "../Sort/Sort";

interface FilmsProps {
  allFilms: Film[];
}

function Films({ allFilms }: FilmsProps) {
  const activeFilter = useAppSelector((state) => state.app.activeFilter);
  const filteredFilms = allFilms.filter((film) => {
    switch (activeFilter) {
      case FilterType.WATCHLIST:
        return film.user_details.watchlist;
      case FilterType.HISTORY:
        return film.user_details.already_watched;
      case FilterType.FAVORITES:
        return film.user_details.favorite;
      default:
        return true;
    }
  });

  return (
    <>
      {filteredFilms.length > 0 && <Sort />}
      <section className="films">
        {filteredFilms.length > 0 ? (
          <FilmsList films={filteredFilms} />
        ) : (
          <FilmsEmpty />
        )}
        <FilmsList
          films={allFilms.slice(0, 2)}
          title="Top rated"
          mode="extra"
        />
        <FilmsList
          films={allFilms.slice(0, 2)}
          title="Most commented"
          mode="extra"
        />
      </section>
    </>
  );
}

export default Films;
