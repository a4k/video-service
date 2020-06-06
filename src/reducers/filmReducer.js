import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function filmReducer(state = initialState.films, action) {
  switch(action.type) {
    case ActionTypes.LOAD_FILMS_SUCCESS:
     return Object.assign([], state, action.films)
    default:
      return state;
  }
}
