import { Comparator } from "../../const";
import { useAppSelector } from "../../store";
import { useGetFilmsQuery } from "../../services/appApi";
import { getActiveFilter, getActiveSort } from "../../store/appReducer";
import { Film } from "../../types/film";
import getFilteredFilms from "../../utils/getFilleredFilms";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";
import Sort from "../Sort/Sort";

function Films() {
  const { data, isLoading } = useGetFilmsQuery();
  const activeFilter = useAppSelector(getActiveFilter);
  const activeSorting = useAppSelector(getActiveSort);

  let allFilms: Film[] = [];
  let topRatedFilms: Film[] = [];
  let mostCommentedFilms: Film[] = [];

  if (data) {
    allFilms = getFilteredFilms(data, activeFilter).sort(Comparator[activeSorting]);
    topRatedFilms = getFilteredFilms(data, "all").sort(Comparator["Rating"]).slice(0, 2);
    mostCommentedFilms = getFilteredFilms(data, "all").sort(Comparator["Comment"]).slice(0, 2);
  }
  
  return (
    <>
      {!isLoading && allFilms.length > 0 && <Sort />}
      <section className="films">
        {isLoading && (
          <section className="films-list">
            <h2 className="films-list__title">Loading...</h2>
          </section>
        )}
        {!isLoading && (
          <>
            {allFilms.length > 0 ? (
              <FilmsList films={allFilms} />
            ) : (
              <FilmsEmpty />
            )}
            <FilmsList films={topRatedFilms} title="Top rated" mode="extra" />
            <FilmsList films={mostCommentedFilms} title="Most commented" mode="extra" />
          </>
        )}
      </section>
    </>
  );
}

export default Films;
