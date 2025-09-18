import { filters } from "../../const";
import { useAppSelector } from "../../hooks";
import { useGetFilmsQuery } from "../../services/appApi";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";
import Sort from "../Sort/Sort";

function Films() {
  const { data: allFilms, isLoading } = useGetFilmsQuery();
  const activeFilter = useAppSelector((state) => state.app.activeFilter);
  const filteredFilms = allFilms?.filter((film) => {
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

  return (
    <>
      {!isLoading && filteredFilms && filteredFilms?.length > 0 && <Sort />}
      <section className="films">
        {isLoading && (
          <section className="films-list">
            <h2 className="films-list__title">Loading...</h2>
          </section>
        )}
        {!isLoading && (
          <>
            {filteredFilms && filteredFilms.length > 0 ? (
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
          </>
        )}
      </section>
    </>
  );
}

export default Films;
