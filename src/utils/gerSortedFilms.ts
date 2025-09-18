import { Film } from "../types/film";
import { SortType } from "../types/sort";

const getSortedFilms = (films: Film[], activeSort: SortType) => {
    return films.sort((filmA, filmB) => {
        switch (activeSort) {
            case "rating":
                return filmB.film_info.total_rating - filmA.film_info.total_rating
            default:
                return 0
        }
    })
}

export default getSortedFilms;