import SortView from '../view/sort-view.js';
import FilmsSectionView from '../view/films-section-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsContainerView from '../view/film-details-container-view.js';
import FilmDetailsPopupView from '../view/film-details-popup-view.js';
import { generateComments } from '../mock/films.js';
import { isEscapeKey } from '../utils.js';
import { render } from '../render.js';

const BODY = document.body;

export default class FilmsPresenter {
  #filmsContainer = null;
  #filmsModel = null;

  #filmsSection = new FilmsSectionView();
  #filmsList = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #filmDetailsContainer = new FilmDetailsContainerView();

  #cardsFilms = [];

  init = (filmsContainer, filmsModel) => {
    this.#filmsContainer = filmsContainer;
    this.#filmsModel = filmsModel;
    this.#cardsFilms = [...this.#filmsModel.films];

    render(new SortView(), this.#filmsContainer);
    render(this.#filmsSection, this.#filmsContainer);
    render(this.#filmsList, this.#filmsSection.element);
    render(this.#filmsListContainer, this.#filmsList.element);


    for (let i = 0; i < this.#cardsFilms.length; i++) {
      this.#renderFilm(this.#cardsFilms[i]);
    }

    render(new ShowMoreButtonView(), this.#filmsList.element);
  };

  #getFilmById = (id) => {
    for (let i = 0; i < this.#cardsFilms.length; i++) {
      if (this.#cardsFilms[i].id.toString() === id) {
        return this.#cardsFilms[i];
      }
    }
  };


  #renderPopup = (film) => {
    const filmDetailsComponent = new FilmDetailsPopupView(film, generateComments(film.comments));

    render(this.#filmDetailsContainer, BODY);

    if (document.querySelectorAll('.film-details__inner')) {
      document.querySelectorAll('.film-details__inner').forEach((element) => element.remove());
      filmDetailsComponent.removeElement();
    }

    render(filmDetailsComponent, this.#filmDetailsContainer.element);
  };


  #closePopup() {
    document.querySelectorAll('.film-details__inner').forEach((element) => element.remove());
    document.querySelector('.film-details').remove();
    new FilmDetailsPopupView().removeElement();
    this.#filmDetailsContainer.removeElement();
    BODY.classList.remove('hide-overflow');

    document.removeEventListener('keydown', this.#onEscClosePopupKeydown);
  }

  #onEscClosePopupKeydown = (evt) => {
    evt.preventDefault();

    if (isEscapeKey(evt)) {
      this.#closePopup();
    }
  };

  #onButtonClosePopupClick = (evt) => {
    evt.preventDefault();
    this.#closePopup();
  };

  #onFilmCardOpenPopupClick = (evt) => {
    if (!evt.target.classList.contains('film-card__controls-item')) {
      this.#renderPopup(this.#getFilmById(evt.currentTarget.id));

      BODY.classList.add('hide-overflow');

      document.addEventListener('keydown', this.#onEscClosePopupKeydown);
      document.querySelector('.film-details__close-btn').addEventListener('click', this.#onButtonClosePopupClick);
    }
  };


  #renderFilm = (film) => {
    const filmComponent = new FilmCardView(film);

    render(filmComponent, this.#filmsListContainer.element);

    filmComponent.element.addEventListener('click', this.#onFilmCardOpenPopupClick);
  };
}

