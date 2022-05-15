import { createElement } from '../render';

const createFilmsListContainerTemplate = () => '<div class="films-list__container"></div>';

export default class FilmsListContainerView {
  #element = null;

  get template() {
    return createFilmsListContainerTemplate();
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
