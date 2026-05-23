import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeFilter, getActiveFilter } from "../../store/appReducer";
import { filters } from "../../const";
import getCountFilteredFilms from "../../utils/getCountFilteredFilms";
import { useGetFilmsQuery } from "../../services/appApi";
import { Filter } from "../../types/filter";

function MainNavigation() {
  const { data: films, isLoading } = useGetFilmsQuery();
  const activeFilter = useAppSelector(getActiveFilter);
  const dispatch = useAppDispatch();

  const handleFilterClick = (filter: Filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <nav className="main-navigation">
      {filters.map((filter) => (
        <a
          href={`#${filter.toLowerCase()}`}
          className={clsx(
            "main-navigation__item",
            activeFilter === filter.toLowerCase() &&
              "main-navigation__item--active",
          )}
          onClick={() => handleFilterClick(filter)}
          key={filter}
        >
          {filter === "all"
            ? filter[0].toUpperCase() + filter.slice(1) + " movies"
            : filter[0].toUpperCase() + filter.slice(1)}{" "}
          {filter !== "all" && (
            <span className="main-navigation__item-count">
              {isLoading ? 0 : films && getCountFilteredFilms(films, filter)}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}

export default MainNavigation;
