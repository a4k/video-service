import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function commentReducer(state = initialState.comments, action) {
  switch(action.type) {
    case ActionTypes.LOAD_COMMENTS_SUCCESS:
     return Object.assign([], state, action.comments);
    case ActionTypes.CREATE_COMMENT_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];
    case ActionTypes.DELETE_COMMENT_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfCommentToDelete = state.findIndex(comment => {return comment.id == action.comment.id})
      newState.splice(indexOfCommentToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
