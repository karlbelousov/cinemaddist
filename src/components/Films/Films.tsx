import { Film } from "../../types/film";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";
import Sort from "../Sort/Sort";

interface FilmsProps {
  allFilms: Film[];
}

function Films({ allFilms }: FilmsProps) {
  return (
    <>
      {allFilms.length > 0 && <Sort />}
      <section className="films">
        {allFilms.length > 0 ? <FilmsList films={allFilms} /> : <FilmsEmpty />}
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
