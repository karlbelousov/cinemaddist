export interface Film {
    id: number,
    comments: number[],
    film_info: {
        title: string,
        alternative_title: string,
        total_rating: number,
        poster: string,
        age_rating: number,
        director: string,
        writers: string[],
        actors: string[],
        release: {
            date: string,
            release_country: string
        },
        runtime: number,
        genre: string[],
        description: string
    },
    user_details: {
        watchlist: string,
        already_watched: boolean,
        watching_date: string,
        favorite: boolean
    }
}