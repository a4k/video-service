import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function tvReducer(state = initialState.tv, action) {
  switch(action.type) {
    case ActionTypes.LOAD_TV_SUCCESS:
     return Object.assign([], state, action.tv)
    default:
      return state;
  }
}
