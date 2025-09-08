import FilmsList from "../FilmsList/FilmsList";

function Films () {
    return (
        <section className="films">
            <FilmsList />
            <FilmsList title="Top rated" mode="extra" />
            <FilmsList title="Most commented" mode="extra" />
        </section>
    )
}

export default Films;