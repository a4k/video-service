import * as ActionTypes from '../constants/ActionTypes'
import { filmApi } from '../middleware/FilmsApi'

export function loadFilmsSuccess(films) {
  return {type: ActionTypes.LOAD_FILMS_SUCCESS, films};
}

export function loadFilms() {
  return function(dispatch) {
    return filmApi.getFilms().then(cats => {
      dispatch(loadFilmsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}
