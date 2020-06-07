import * as ActionTypes from './ActionTypes'
import FilmsApi from '../middleware/FilmsApi'

export function loadFilmsSuccess(films) {
    return {type: ActionTypes.LOAD_FILMS_SUCCESS, films};
}
export function loadFilmSuccess(film) {
    return {type: ActionTypes.LOAD_FILM_SUCCESS, film};
}

export function loadFilms() {
    return function(dispatch) {
        return FilmsApi.getFilms().then(films => {
            dispatch(loadFilmsSuccess(films));
        }).catch(error => {
            throw(error);
        });
    };
}
export function loadFilmById(id) {
    return function(dispatch) {
        return FilmsApi.getFilmById(id).then(film => {
            dispatch(loadFilmSuccess(film));
        }).catch(error => {
            throw(error);
        });
    };
}
