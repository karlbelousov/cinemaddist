import { useGetFilmsQuery } from "../../services/appApi";
import Films from "../Films/Films";
import FilmsEmpty from "../FilmsEmpty/FilmsEmpty";
import Loader from "../Loader/Loader";
import MainNavigation from "../MainNavigation/MainNavigation";

function Main() {
  const { data: allFilms, isLoading } = useGetFilmsQuery();

  return (
    <main className="main">
      <MainNavigation />
      {isLoading && <Loader />}
      {!isLoading && allFilms && allFilms.length > 0 && (
        <Films allFilms={allFilms} />
      )}
      {!isLoading && allFilms && allFilms.length === 0 && <FilmsEmpty />}
    </main>
  );
}

export default Main;
