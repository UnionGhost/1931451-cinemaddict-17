import { createElement } from '../render.js';

const createFilmCardTemplate = (film) => {
  const { comments } = film;
  const { title, totalRating, poster, release, description, genre } = film.filmInfo;
  const { watchList, alreadyWatched, favorite } = film.userDetails;

  const addControlsActiveClassName = (control) => (control) ? 'film-card__controls-item--active' : '';


  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${release.date}</span>
          <span class="film-card__duration">1h 55m</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img class="film-card__poster" src="${poster}">
        <p class="film-card__description">${description}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${addControlsActiveClassName(watchList)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${addControlsActiveClassName(alreadyWatched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${addControlsActiveClassName(favorite)}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};


export default class FilmCardView {
  #element = null;

  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
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
