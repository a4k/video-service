import * as ActionTypes from './ActionTypes'
import UserApi from '../middleware/UserApi'

export function loadUserSuccess(user) {
    return {type: ActionTypes.LOAD_USER_SUCCESS, user}
}

export function loginUser(user) {
    return function(dispatch) {
        return UserApi.loginUser(user).then(responseUser => {
            dispatch(loadUserSuccess(responseUser));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getUserById(id) {
    return function(dispatch) {
        return UserApi.getUserById(id).then(responseUser => {
            dispatch(loadUserSuccess(responseUser));
        }).catch(error => {
            throw(error);
        });
    };
}
