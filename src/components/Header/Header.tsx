import { useGetFilmsQuery } from "../../services/appApi";
import getUserRating from "../../utils/getUserRating";

function Header() {
  const {data: films, isLoading } = useGetFilmsQuery();

  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>
      {!isLoading && (
        <section className="header__profile profile">
          {films && getUserRating(films) && <p className="profile__rating">{getUserRating(films)}</p>}
          <img
            className="profile__avatar"
            src="images/bitmap@2x.png"
            alt="Avatar"
            width={35}
            height={35}
          />
        </section>
      )}
    </header>
  );
}

export default Header;
