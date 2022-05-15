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
    render(this.#filmsList, this.#filmsSection.getElement());
    render(this.#filmsListContainer, this.#filmsList.getElement());


    for (let i = 0; i < this.#cardsFilms.length; i++) {
      this.#renderFilm(this.#cardsFilms[i]);
    }

    render(new ShowMoreButtonView(), this.#filmsList.getElement());

    this.#openPopup();
  };


  #renderFilm = (film) => {
    const filmComponent = new FilmCardView(film);

    render(filmComponent, this.#filmsListContainer.getElement());

    //this.#openPopup();
  };

  #renderPopup = (film) => {
    const filmDetailsComponent  = new FilmDetailsPopupView(film, generateComments(film.comments));

    render(this.#filmDetailsContainer, BODY);

    if (document.querySelectorAll('.film-details__inner')) {
      document.querySelectorAll('.film-details__inner').forEach((element) => element.remove());
      filmDetailsComponent.removeElement();
    }

    render(filmDetailsComponent, this.#filmDetailsContainer.getElement());
  };

  #openPopup = () => {
    const closePopup = () => {
      document.querySelectorAll('.film-details__inner').forEach((element) => element.remove());
      document.querySelector('.film-details').remove();
      new FilmDetailsPopupView().removeElement();
      this.#filmDetailsContainer.removeElement();
      BODY.classList.remove('hide-overflow');
    };

    const handlerButtonClosePopup = (evt) => {
      evt.preventDefault();
      closePopup();
    };

    const handlerEscClosePopup = (evt) => {
      evt.preventDefault();

      if (isEscapeKey(evt)) {
        closePopup();
      }
    };


    for (let i = 0; i < document.querySelectorAll('.film-card').length; i++) {
      this.#filmsListContainer.getElement().querySelectorAll('.film-card__link')[i].addEventListener('click', () => {
        this.#renderPopup(this.#cardsFilms[i]);

        BODY.classList.add('hide-overflow');
        document.addEventListener('keydown', handlerEscClosePopup, { once: true });
        document.querySelector('.film-details__close-btn').addEventListener('click', handlerButtonClosePopup);
      });
    }
  };

  // #openPopup = () => {
  //   this.#filmsListContainer.getElement().addEventListener('click', (evt) => {

  //     if (evt.target.closest('.film-card')) {
  //       const films = document.querySelectorAll('.film-card');

  //       for (let i = 0; i < films.length; i++) {

  //         if (evt.target === films[i]) {
  //           this.#renderPopup(this.#cardsFilms[i]);

  //           document.addEventListener('keydown', this.#handlerEscClosePopup);
  //           document.querySelector('.film-details__close-btn').addEventListener('click', this.#handlerButtonClosePopup);
  //         }
  //       }
  //     }
  //   });
  // };
}

