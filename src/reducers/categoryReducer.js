import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
  switch(action.type) {
    case ActionTypes.LOAD_CATEGORIES_SUCCESS:
     return Object.assign([], state, action.categories)
    default:
      return state;
  }
}
