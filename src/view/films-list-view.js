import { createElement } from '../render.js';

const createFilmsListTemplate = () => '<section class="films-list"><h2 class="films-list__title visually-hidden">All movies. Upcoming</h2></section>';

export default class FilmsListView {
  #element = null;

  getTemplate() {
    return createFilmsListTemplate();
  }

  getElement() {
    if(!this.#element) {
      this.#element = createElement(this.getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

