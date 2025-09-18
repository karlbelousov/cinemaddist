import clsx from "clsx";
import { sorts } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SortType } from "../../types/sort";
import { changeSort } from "../../store/appReducer";

function Sort() {
  const activeSort = useAppSelector((state) => state.app.activeSort);
  const dispatch = useAppDispatch();

  const handleSortButtonClick = (sort: SortType) => {
    dispatch(changeSort(sort));
  };

  return (
    <ul className="sort">
      {sorts.map((sort) => (
        <li key={sort}>
          <a
            href={`#${sort}`}
            className={clsx(
              "sort__button",
              sort === activeSort && "sort__button--active"
            )}
            onClick={() => handleSortButtonClick(sort)}
          >
            Sort by {sort}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Sort;
