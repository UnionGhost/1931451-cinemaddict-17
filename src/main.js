import HeaderProfileView from './view/header-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilmDetailsPresenter from './presenter/film-details-presenter.js';
import {render} from './render.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const filmsPresenter = new FilmsPresenter();
const filmDetailsPresenter = new FilmDetailsPresenter();


render(new HeaderProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new FooterStatisticsView(), siteFooterElement);

filmsPresenter.init(siteMainElement);
//filmDetailsPresenter.init(document.body);  Раскомментировать для попапа


