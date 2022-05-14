import { createElement } from '../render.js';

const createFooterStatisticsTemplate = () => '<section class="footer__statistics"><p>130 291 movies inside</p></section>';

export default class FooterStatisticsView {
  #element = null;

  getTemplate() {
    return createFooterStatisticsTemplate();
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
