import * as ActionTypes from './ActionTypes'
import CommentsApi from '../middleware/CommentsApi'

export function loadCommentsSuccess(comments) {
    return {type: ActionTypes.LOAD_COMMENTS_SUCCESS, comments};
}
export function createCommentSuccess(comment) {
    return {type: ActionTypes.CREATE_COMMENT_SUCCESS, comment}
}
export function deleteCommentSuccess(comment) {
    return {type: ActionTypes.DELETE_COMMENT_SUCCESS, comment}
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
export function createComment(comment) {
    return function(dispatch) {
        return CommentsApi.createComment(comment).then(responseComment => {
            dispatch(createCommentSuccess(responseComment));
        }).catch(error => {
            throw(error);
        });
    };
}
export function deleteComment(id) {
    return function(dispatch) {
        return CommentsApi.deleteComment(id).then(responseComment => {
            dispatch(deleteCommentSuccess(responseComment));
        }).catch(error => {
            throw(error);
        });
    };
}
