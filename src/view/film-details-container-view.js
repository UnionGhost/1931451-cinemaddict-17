import { createElement } from '../render.js';

const createFilmDetailsContainerTemplate = () => '<section class="film-details"></section>';

export default class FilmDetailsContainerView {
  #element = null;

  get template() {
    return createFilmDetailsContainerTemplate();
  }

  getElement() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
