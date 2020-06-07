import * as ActionTypes from './ActionTypes'
import CommentsApi from '../middleware/CommentsApi'

export function loadCommentsSuccess(comments) {
    return {type: ActionTypes.LOAD_COMMENTS_SUCCESS, comments};
}

export function loadComments() {
    return function(dispatch) {
        return CommentsApi.getComments().then(comments => {
            dispatch(loadCommentsSuccess(comments));
        }).catch(error => {
            throw(error);
        });
    };
}
export function loadCommentsByFilmId(filmId) {
    return function(dispatch) {
        return CommentsApi.getCommentsByFilm(filmId).then(comments => {
            dispatch(loadCommentsSuccess(comments));
        }).catch(error => {
            throw(error);
        });
    };
}
