import SortView from '../view/sort-view.js';
import FilmsSectionView from '../view/films-section-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsView from '../view/film-details-view.js';
import FilmDetailsFormView from '../view/film-details-form-view.js';
import FilmDetailsTopContainerView from '../view/film-details-top-container-view.js';
import FilmDetailsBottomContainerView from '../view/film-details-bottom-container-view.js';
import { commentsArray } from '../mock/films.js';
import { render } from '../render.js';

//const BODY = document.body;

export default class FilmsPresenter {
  #filmsContainer = null;
  #filmsModel = null;
  #commentsArray = null;

  #BODY = document.body;
  #filmsSection = new FilmsSectionView();
  #filmsList = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #filmDetails = new FilmDetailsView();
  #filmDetailsForm = new FilmDetailsFormView();

  #cardsFilms = [];

  init = (filmsContainer, filmsModel) => {
    this.#filmsContainer = filmsContainer;
    this.#filmsModel = filmsModel;
    this.#commentsArray = commentsArray;
    this.#cardsFilms = [...this.#filmsModel.films];

    render(new SortView(), this.#filmsContainer);
    render(this.#filmsSection, this.#filmsContainer);
    render(this.#filmsList, this.#filmsSection.getElement());
    render(this.#filmsListContainer, this.#filmsList.getElement());


    for (let i = 0; i < this.#cardsFilms.length; i++) {
      this.#renderFilm(this.#cardsFilms[i]);
    }

    this.#popupOpen();
    render(new ShowMoreButtonView(), this.#filmsList.getElement());
  };

  #popupOpen = () => {
    render(this.#filmDetails, this.#BODY);
    render(this.#filmDetailsForm, this.#filmDetails.getElement());

    render(new FilmDetailsTopContainerView(this.#cardsFilms[0]), this.#filmDetailsForm.getElement());
    render(new FilmDetailsBottomContainerView(this.#cardsFilms[0], this.#commentsArray), this.#filmDetailsForm.getElement());
  };

  #renderFilm = (film) => {
    const filmComponent = new FilmCardView(film);

    render(filmComponent, this.#filmsListContainer.getElement());
  };
}

