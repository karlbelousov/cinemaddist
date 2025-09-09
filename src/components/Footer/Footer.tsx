import { useGetFilmsQuery } from "../../services/appApi";

function Footer() {
  const {data: films, isLoading } = useGetFilmsQuery();
  return (
    <footer className="footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>{isLoading ? 0 : films?.length } movies inside</p>
      </section>
    </footer>
  );
}

export default Footer;
