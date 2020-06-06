import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case ActionTypes.LOAD_USER_SUCCESS:
     return action.user
    default:
      return state;
  }
}
