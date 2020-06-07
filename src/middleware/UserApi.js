import {clientV3} from "./ApiV3Client";

class UserApi {
    static loginUser(user) {
        return clientV3.post(`/users/login`, user)
    }
    static getUserById(id) {
        return clientV3.get(`/users/${id}`)
    }
}

export default UserApi;
