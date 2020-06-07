import {clientV3} from "./ApiV3Client";

class CommentsApi {
    static getComments() {
        return clientV3.get('/comments')
    }
    static getCommentsByFilm(filmId) {
        return clientV3.get(`/comments?film=${filmId}`)
    }
}

export default CommentsApi;
