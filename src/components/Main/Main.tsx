import { useGetFilmsQuery } from "../../services/appApi";
import Films from "../Films/Films";
import Loader from "../Loader/Loader";
import MainNavigation from "../MainNavigation/MainNavigation";
import Sort from "../Sort/Sort";

function Main() {
  const {data: films, isLoading } = useGetFilmsQuery();

  return (
    <main className="main">
      <MainNavigation />
      {isLoading && <Loader />}
      {!isLoading && <Sort />}
      {!isLoading && films && <Films films={films} />}
    </main>
  );
}

export default Main;
