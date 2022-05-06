import { generateFilm } from '../mock/films';

const MAX_LENGTH_FILMS = 5;


export default class FilmsModel {
  films = Array.from({length: MAX_LENGTH_FILMS}, generateFilm);

  getFilms = () => this.films;
}
