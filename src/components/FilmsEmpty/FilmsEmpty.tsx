import { useAppSelector } from "../../hooks";
import getFilmsEmptyText from "../../utils/getFilmsEmptyText";

function FilmsEmpty() {
  const activeFilter = useAppSelector((state) => state.app.activeFilter);

  return (
    <section className="films-list">
      <h2 className="films-list__title">{getFilmsEmptyText(activeFilter)}</h2>
    </section>
  );
}

export default FilmsEmpty;
