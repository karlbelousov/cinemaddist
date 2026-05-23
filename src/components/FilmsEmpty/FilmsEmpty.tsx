import { useAppSelector } from "../../hooks";
import { getActiveFilter } from "../../store/appReducer";
import getFilmsEmptyText from "../../utils/getFilmsEmptyText";

function FilmsEmpty() {
  const activeFilter = useAppSelector(getActiveFilter);

  return (
    <section className="films-list">
      <h2 className="films-list__title">{getFilmsEmptyText(activeFilter)}</h2>
    </section>
  );
}

export default FilmsEmpty;
