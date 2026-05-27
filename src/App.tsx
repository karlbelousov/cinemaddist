import FilmDetais from "./components/FilmDetails/FilmDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useAppSelector } from "./store";
import { getIsOpenFilmDetails } from "./store/appReducer";

function App() {
  const isOpenFilmDetails = useAppSelector(getIsOpenFilmDetails);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {isOpenFilmDetails && <FilmDetais />}
    </>
  );
}

export default App;
