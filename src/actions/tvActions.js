import * as ActionTypes from './ActionTypes'
import TVApi from '../middleware/TVApi'

export function loadTVSuccess(tv) {
  return {type: ActionTypes.LOAD_TV_SUCCESS, tv};
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
