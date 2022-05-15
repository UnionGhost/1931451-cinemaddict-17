import FilmsModel from './model/films-model.js';
import HeaderProfileView from './view/header-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import {render} from './render.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const filmsModel = new FilmsModel();

const filmsPresenter = new FilmsPresenter();


render(new HeaderProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new FooterStatisticsView(), siteFooterElement);

filmsPresenter.init(siteMainElement, filmsModel);

//  Стоит ли во view, film передавать #film?
//  Как проверить копится ли елемент в оперативной памяти
//  Что значит верхнеуровневая копия
//  Не могу проверить копятся ли обработчики событий
//  Как удалить обработчики
