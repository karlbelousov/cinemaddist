import clsx from "clsx";
import FilmCard from "../FilmCard/FilmCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { Film } from "../../types/film";

interface FilmsListProps {
    mode?: string,
    title?: string,
    films: Film[]
}

function FilmsList({ mode = "", title, films = []}: FilmsListProps) {
  return (
    <section className={clsx("films-list", mode === "extra" && "films-list--extra")}>
      <h2 className={clsx("films-list__title", mode === "" && "visually-hidden")}>
        {title ? title : "All movies. Upcoming"}
      </h2>
      <div className="films-list__container">
        {films.map((film) => (
          <FilmCard {...film} key={film.id} />
        ))}
      </div>
      {!mode && <ShowMoreButton />}
    </section>
  );
}

export default FilmsList;
