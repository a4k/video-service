import {clientV3} from "./ApiV3Client";

class FilmsApi {
    static getFilms() {
        return clientV3.get('/cats')
    }
}

export default FilmsApi;
