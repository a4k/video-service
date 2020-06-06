import * as ActionTypes from './ActionTypes'
import FilmsApi from '../middleware/FilmsApi'
import CategoriesApi from '../middleware/CategoriesApi'
import TVApi from '../middleware/TVApi'

export function loadFilmsSuccess(films) {
  return {type: ActionTypes.LOAD_FILMS_SUCCESS, films};
}
export function loadFilmSuccess(film) {
  return {type: ActionTypes.LOAD_FILM_SUCCESS, film};
}
export function loadCategoriesSuccess(films) {
  return {type: ActionTypes.LOAD_CATEGORIES_SUCCESS, films};
}
export function loadTVSuccess(films) {
  return {type: ActionTypes.LOAD_TV_SUCCESS, films};
}

export function loadFilms() {
  return function(dispatch) {
    return FilmsApi.getFilms().then(cats => {
      dispatch(loadFilmsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadFilmById(id) {
  return function(dispatch) {
    return FilmsApi.getFilmById(id).then(cats => {
      dispatch(loadFilmSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadCategories() {
  return function(dispatch) {
    return CategoriesApi.getCategories().then(cats => {
      dispatch(loadCategoriesSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTV() {
  return function(dispatch) {
    return TVApi.getTV().then(cats => {
      dispatch(loadTVSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}
