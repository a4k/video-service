import {clientV3} from "./ApiV3Client";

class TVApi {
    static getTV() {
        return clientV3.get('/tv')
    }
}

export default TVApi;
