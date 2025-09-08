import FilmDetais from "./components/FilmDetails/FilmDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useAppSelector } from "./hooks";

function App() {
  const isOpenFilmDetails = useAppSelector((state) => state.app.isOpenFilmDetails);

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
