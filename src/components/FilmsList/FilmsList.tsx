import clsx from "clsx";
import FilmCard from "../FilmCard/FilmCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { Film } from "../../types/film";
import { useAppSelector } from "../../hooks";

interface FilmsListProps {
  mode?: string;
  title?: string;
  films: Film[];
}

function FilmsList({ mode = "", title, films = [] }: FilmsListProps) {
  const filmCountPerStep = useAppSelector(
    (state) => state.app.filmCountPerStep
  );
  const filmsSlisedPerGroup = films.slice(
    0,
    Math.min(films.length, filmCountPerStep)
  );

  return (
    <section
      className={clsx("films-list", mode === "extra" && "films-list--extra")}
    >
      <h2
        className={clsx("films-list__title", mode === "" && "visually-hidden")}
      >
        {title ? title : "All movies. Upcoming"}
      </h2>
      <div className="films-list__container">
        {filmsSlisedPerGroup.map((film) => (
          <FilmCard {...film} key={film.id} />
        ))}
      </div>
      {!mode && films.length > filmCountPerStep && <ShowMoreButton />}
    </section>
  );
}

export default FilmsList;
