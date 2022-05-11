import FilmDetailsView from '../view/film-details-view.js';
import FilmDetailsFormView from '../view/film-details-form-view.js';
import FilmDetailsTopContainerView from '../view/film-details-top-container-view.js';
import FilmDetailsBottomContainerView from '../view/film-details-bottom-container-view.js';
import { commentsArray } from '../mock/films.js';
import { render } from '../render.js';

export default class FilmDetailsPresenter {
  filmDetails = new FilmDetailsView();
  filmDetailsForm = new FilmDetailsFormView();

  init = (filmDetailsContainer, filmsModel) => {
    this.filmDetailsContainer = filmDetailsContainer;
    this.filmsModel = filmsModel;
    this.cardsFilms = [...this.filmsModel.getFilms()];
    this.commentsArray = commentsArray;

    render(this.filmDetails, this.filmDetailsContainer);
    render(this.filmDetailsForm, this.filmDetails.getElement());
    render(new FilmDetailsTopContainerView(this.cardsFilms[0]), this.filmDetailsForm.getElement());
    render(new FilmDetailsBottomContainerView(this.cardsFilms[0], this.commentsArray), this.filmDetailsForm.getElement());
  };
}
