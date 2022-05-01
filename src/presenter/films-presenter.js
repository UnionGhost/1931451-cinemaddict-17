import SortView from '../view/sort-view.js';
import FilmsSectionView from '../view/films-section-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { render } from '../render.js';


export default class FilmsPresenter {
  filmsSection = new FilmsSectionView();
  filmsList = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(new SortView(), this.filmsContainer);
    render(this.filmsSection, this.filmsContainer);
    render(this.filmsList, this.filmsSection.getElement());
    render(this.filmsListContainer, this.filmsList.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainer.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsList.getElement());
  };
}

