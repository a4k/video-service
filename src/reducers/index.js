import {combineReducers} from 'redux'
import films from './filmReducer'
import tv from './tvReducer'
import categories from './categoryReducer'
import user from './userReducer'

const rootReducer = combineReducers({
    films,
    tv,
    categories,
    user,
});

export default rootReducer
