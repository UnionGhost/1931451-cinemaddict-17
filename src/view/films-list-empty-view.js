import { createElement } from '../render.js';

const createFilmsListEmptyTemplate = () => '<section class="films-list"><h2 class="films-list__title">There are no movies in our database</h2></section>';

export default class FilmsListEmptyView {
  #element = null;

  get template() {
    return createFilmsListEmptyTemplate();
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

