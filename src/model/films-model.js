import { generateFilm } from '../mock/films';

const MAX_LENGTH_FILMS = 27;


export default class FilmsModel {
  #films = Array.from({length: MAX_LENGTH_FILMS}, generateFilm);

  get films() {
    return  this.#films;
  }
}
