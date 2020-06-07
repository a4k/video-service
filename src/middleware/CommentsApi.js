import {clientV3} from "./ApiV3Client";

class CommentsApi {
    static getComments() {
        return clientV3.get('/comments')
    }
    static getCommentsByFilm(filmId) {
        return clientV3.get(`/comments?film=${filmId}`)
    }
    static createComment(comment) {
        return clientV3.post(`/comments`, comment)
    }
    static deleteComment(id) {
        return clientV3.post(`/comments/${id}`)
    }
}

export default CommentsApi;
