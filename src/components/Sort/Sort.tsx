import clsx from "clsx";
import { Sorting, SortName } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeSort } from "../../store/appReducer";

function Sort() {
  const activeSort = useAppSelector((state) => state.app.activeSort);
  const dispatch = useAppDispatch();

  const handleSortButtonClick = (sort: SortName) => {
    dispatch(changeSort(sort));
  };

  return (
    <ul className="sort">
      {(Object.entries(Sorting) as [SortName, Sorting][]).slice(0, 3).map(([name, title]) => (
        <li key={name}>
          <a
            href={`#${title}`}
            className={clsx(
              "sort__button",
              name === activeSort && "sort__button--active"
            )}
            onClick={() => handleSortButtonClick(name)}
          >
            Sort by {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Sort;
