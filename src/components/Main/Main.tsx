import Films from "../Films/Films";
import MainNavigation from "../MainNavigation/MainNavigation";
import Sort from "../Sort/Sort";

function Main() {
  return (
    <main className="main">
      <MainNavigation />
      <Sort />
      <Films />
    </main>
  );
}

export default Main;
