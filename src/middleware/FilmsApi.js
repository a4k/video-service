import {clientV3} from "./ApiV3Client";

class FilmsApi {
    static getFilms() {
        return clientV3.get('/films')
    }
    static getFilmById(id) {
        return clientV3.get(`/films/${id}`)
    }
}

export default FilmsApi;
