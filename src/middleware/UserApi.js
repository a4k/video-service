import {clientV3} from "./ApiV3Client";

class UserApi {
    static loginUser(user) {
        return clientV3.post(`/users/login`, user)
    }
    static updateUser(user) {
        return clientV3.post(`/users/update`, user)
    }
    static getUserById(id) {
        return clientV3.get(`/users/${id}`)
    }
}

export default UserApi;
