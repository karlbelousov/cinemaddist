import { useAppSelector } from "../../hooks";
import { useGetFilmsQuery } from "../../services/appApi";
import getSortedFilms from "../../utils/gerSortedFilms";
import getFilteredFilms from "../../utils/getFilleredFilms";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";
import Sort from "../Sort/Sort";

function Films() {
  const { data: allFilms, isLoading } = useGetFilmsQuery();
  const activeFilter = useAppSelector((state) => state.app.activeFilter);
  const activeSort = useAppSelector((state) => state.app.activeSort);
  const filteredFilms = allFilms && getFilteredFilms(allFilms, activeFilter);
  const sortedFilms =
    filteredFilms && getSortedFilms(filteredFilms, activeSort);

  return (
    <>
      {!isLoading && filteredFilms && filteredFilms.length > 0 && <Sort />}
      <section className="films">
        {isLoading && (
          <section className="films-list">
            <h2 className="films-list__title">Loading...</h2>
          </section>
        )}
        {!isLoading && (
          <>
            {filteredFilms && filteredFilms.length > 0 && sortedFilms ? (
              <FilmsList films={sortedFilms} />
            ) : (
              <FilmsEmpty />
            )}
            {allFilms && (
              <FilmsList films={allFilms} title="Top rated" mode="extra" />
            )}
            {allFilms && (
              <FilmsList films={allFilms} title="Most commented" mode="extra" />
            )}
          </>
        )}
      </section>
    </>
  );
}

export default Films;
