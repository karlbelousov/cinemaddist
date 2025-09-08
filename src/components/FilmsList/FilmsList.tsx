import clsx from "clsx";
import FilmCard from "../FilmCard/FilmCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

interface FilmsListProps {
    mode?: string;
    title?: string;
}

function FilmsList({ mode = "", title}: FilmsListProps) {
  return (
    <section className={clsx("films-list", mode === "extra" && "films-list--extra")}>
      <h2 className={clsx("films-list__title", mode === "" && "visually-hidden")}>
        {title ? title : "All movies. Upcoming"}
      </h2>
      <div className="films-list__container">
        <FilmCard />
        <FilmCard />
      </div>
      {!mode && <ShowMoreButton />}
    </section>
  );
}

export default FilmsList;
