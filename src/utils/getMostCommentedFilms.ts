import { Film } from "../types/film";

const getMostCommentedFilms = (films: Film[]) => {
  return films
    .sort((filmA, filmB) => filmB.comments.length - filmA.comments.length)
    .slice(0, 2);
};

export default getMostCommentedFilms;
