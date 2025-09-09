import { Film } from "../../types/film";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import FilmsList from "../FilmsList/FilmsList";

interface FilmsProps {
  films: Film[];
}

function Films({ films }: FilmsProps) {
  return (
    <section className="films">
      {films.length === 0 && <FilmsEmpty />}
      {Films.length > 0 && (
        <>
          <FilmsList films={films} />
          <FilmsList films={films.slice(0, 2)} title="Top rated" mode="extra" />
          <FilmsList
            films={films.slice(0, 2)}
            title="Most commented"
            mode="extra"
          />
        </>
      )}
    </section>
  );
}

export default Films;
