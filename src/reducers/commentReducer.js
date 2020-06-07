import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function commentReducer(state = initialState.comments, action) {
  switch(action.type) {
    case ActionTypes.LOAD_COMMENTS_SUCCESS:
     return Object.assign([], state, action.comments)
    default:
      return state;
  }
}
