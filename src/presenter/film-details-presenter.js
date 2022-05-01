import FilmDetailsView from '../view/film-details-view.js';
import FilmDetailsFormView from '../view/film-details-form-view.js';
import FilmDetailsTopContainerView from '../view/film-details-top-container-view.js';
import FilmDetailsBottomContainerView from '../view/film-details-bottom-container-view.js';
import { render } from '../render.js';

export default class FilmDetailsPresenter {
  filmDetails = new FilmDetailsView();
  filmDetailsForm = new FilmDetailsFormView();

  init = (filmDetailsContainer) => {
    this.filmDetailsContainer = filmDetailsContainer;

    render(this.filmDetails, this.filmDetailsContainer);
    render(this.filmDetailsForm, this.filmDetails.getElement());
    render(new FilmDetailsTopContainerView(), this.filmDetailsForm.getElement());
    render(new FilmDetailsBottomContainerView(), this.filmDetailsForm.getElement());
  };
}
